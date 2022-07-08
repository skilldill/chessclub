import { Cell, Figure, FigureColor } from "models";
import { MouseEvent, useCallback, useEffect } from "react";
import { FC, useState } from "react";
import { GameServiceV2 } from "services";
import styles from './ChessBoard.module.css';
import { getColorByCoords } from "./ChessBoard.utils";
import cn from 'classnames';

interface ChessBoardConfig {
    cellWhiteBg: string;
    cellBlackBg: string;
    cellSize: number;
    figures: {
        black: { [figureType: string]: string };
        white: { [figureType: string]: string };
    };
}

interface ChessBoardProps {
    cells: Cell[][];
    config: ChessBoardConfig;
    reverse?: boolean;
    onChange: (cells: Cell[][]) => void;
}

export const ChessBoard: FC<ChessBoardProps> = (props) => {
    const { cells, reverse, config } = props;
    const [chessBoardHtml, setChessBoardHtml] = useState<HTMLElement | null>();

    const [cellsState, setCellsState] = useState<Cell[][]>([]);
    const [holdingFigure, setHoldingFigure] = useState<Figure>();

    // Позиция с которой взяли фигуру в координатах доски
    const [fromBoardPos, setFromBoardPos] = useState<number[]>();

    // Позиция курсора в пикселях
    const [mousePos, setMousePos] = useState<number[]>();

    // Возможные клетки для следующих ходов
    const [nextMovesPositions, setNextMovesPositions] = useState<number[][]>();

    const [currentColor, setCurrentColor] = useState<FigureColor>('white');

    // Линии по которым есть шах
    const [linesWithCheck, setLinesWithCheck] = useState<number[][][]>([]);

    useEffect(() => {
        if (reverse) {
            const prepareCells = [...cells];
            const reversedCells = [...prepareCells.reverse()];

            setCellsState(reversedCells.map((row) => [...row].reverse()));
        } else {
            setCellsState(cells);
        }

        const chessBoardRef = document.getElementById('chessBoard');
        setChessBoardHtml(chessBoardRef);
    }, [cells, reverse])

    const handleMouseDownCell = useCallback((cell: Cell, boardPos: number[]) => {
        if (!!cell.figure && cell.figure.color === currentColor) {
            setHoldingFigure(cell.figure);
            setFromBoardPos(boardPos);
            document.body.style.cursor = 'grabbing';
    
            const nextMoves = GameServiceV2.getNextMoves(cellsState, boardPos, linesWithCheck, reverse);
            setNextMovesPositions(nextMoves);
        }
    }, [cellsState, currentColor, linesWithCheck, reverse])

    const handleMouseMoveFigure = useCallback((event: MouseEvent) => {
        if (!!chessBoardHtml) {
            const { pageX, pageY } = event;
            const { offsetLeft, offsetTop } = chessBoardHtml;
            setMousePos([pageX - offsetLeft, pageY - offsetTop]);
        }
    }, [chessBoardHtml])

    const handleCellMouseUpCell = useCallback((event: MouseEvent, pos: number[]) => {
        if (!holdingFigure)
            return;

        const targetPosIsNext = !!nextMovesPositions?.find((nextPos) => pos[0] === nextPos[0] && pos[1] === nextPos[1]);

        const conditionForDoMove = (pos[0] !== fromBoardPos![0] || pos[1] !== fromBoardPos![1]) &&
            targetPosIsNext

        if (conditionForDoMove) {
            setCurrentColor((prevValue) => prevValue === 'black' ? 'white' : 'black');

            setCellsState((prevCells) => {
                const updatedCells = [...prevCells];
                
                updatedCells[pos[1]][pos[0]] = { figure: holdingFigure };
                updatedCells[fromBoardPos![1]][fromBoardPos![0]] = { figure: undefined };
                
                return updatedCells;
            })
        }
        
        setHoldingFigure(undefined);
        setFromBoardPos(undefined);
        setNextMovesPositions(undefined);

        document.body.style.cursor = 'initial';
    }, [holdingFigure, fromBoardPos, nextMovesPositions])

    const handleMouseUpFigure = useCallback(() => {
        setHoldingFigure(undefined);
        document.body.style.cursor = 'initial';
    }, [])

    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUpFigure);

        return () => {
            window.removeEventListener('mouseup', handleMouseUpFigure);
        }
    }, [handleMouseUpFigure])

    const checkCellIsNextMoves = useCallback((pos: number[]) => {
        return !!nextMovesPositions && 
            !!nextMovesPositions.find((nextPos) => nextPos[0] === pos[0] && nextPos[1] === pos[1]);
    }, [nextMovesPositions])

    const isCellWithCheck = useCallback((cell: Cell) => 
        !!cell.figure && 
        cell.figure.type === 'king' && 
        cell.figure.color === currentColor && 
        linesWithCheck.length > 0
    , [currentColor, linesWithCheck])

    // Эффект для проверки шаха при изменении состояния
    useEffect(() => {
        const prevColor = currentColor === 'white' ? 'black' : 'white';
        const linesWithCheck = GameServiceV2.getLinesWithCheck(cellsState, prevColor);
        setLinesWithCheck(linesWithCheck);
    }, [cellsState, reverse, currentColor])

    return (
        <div 
            id="chessBoard"
            className={styles.chessBoard}
            onMouseMove={handleMouseMoveFigure}
            onContextMenu={(event) => event.preventDefault()}
        >
            <div className={styles.chessBoardControlLayer}>
                {/**Слой для контроля положения фигуры на доске */
                    cellsState.map((row, j) => 
                    <div className={styles.chessBoardRow} key={j}>
                        {row.map((cell, i) =>
                            <div
                                key={`${j}${i}`} 
                                className={styles.chessBoardCell}
                                data-type="cell"
                                style={{ 
                                    width: config.cellSize, 
                                    height: config.cellSize,
                                    cursor: !!holdingFigure ? 'grabbing' : 'grab',
                                }}
                                onMouseUp={(event) => handleCellMouseUpCell(event, [i, j])}
                                onMouseDown={() => handleMouseDownCell(cell, [i, j])} 
                            />
                        )}
                    </div>
                )}
            </div>
            
            {!!holdingFigure && !!mousePos && (
                <div 
                    className={styles.chessBoardFingure}
                    style={{
                        position: 'absolute',
                        zIndex: 90,
                        top: mousePos![1] - config.cellSize / 2,
                        left: mousePos![0] - config.cellSize / 2,
                        width: config.cellSize - 2, 
                        height: config.cellSize - 2, 
                        backgroundImage: `url(${config.figures[holdingFigure.color][holdingFigure.type]})`,
                        cursor: !!holdingFigure ? 'grabbing' : 'grab'
                    }}
                ></div>
            )}
            {cellsState.map((row, j) => 
                <div className={styles.chessBoardRow} key={j}>
                    {row.map((cell, i) =>
                        <div
                            key={`${j}${i}`} 
                            className={cn([styles.chessBoardCell], {
                                [styles.chessBoardCellChecked]: isCellWithCheck(cell)
                            })}
                            data-type="cell"
                            style={{ 
                                width: config.cellSize, 
                                height: config.cellSize,
                                backgroundColor:  getColorByCoords(i, j) === 'white' ? config.cellWhiteBg : config.cellBlackBg
                            }}
                        >
                            <div 
                                className={cn([styles.nextMoveIndicator], { 
                                    [styles.nextMoveIndicatorShow]: checkCellIsNextMoves([i, j]) 
                                }
                            )}/>
                            
                            {!!cell.figure && (
                                <div 
                                    className={styles.chessBoardFingure}
                                    style={{
                                        width: config.cellSize - 2, 
                                        height: config.cellSize - 2, 
                                        backgroundImage: `url(${config.figures[cell.figure.color][cell.figure.type]})`,
                                        opacity: !!fromBoardPos && fromBoardPos[0] === i && fromBoardPos[1] === j ? 0.5 : 1
                                    }}
                                ></div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}