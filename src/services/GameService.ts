import { Cell, FigureColor } from "models";

export const GameService = {
    getNextMoves: (state: Cell[][], [i, j]: number[], revese = false, onlyAttacks = false): number[][] => {
        const figure = state[j][i].figure!;
        const { type } = figure;

        let nextPositions: number[][] = [];

        switch(type) {
            case 'pawn':
                nextPositions = GameService.getNextMovesPawn(state, [i, j], revese, onlyAttacks);
                break;
            
            case 'bishop':
                nextPositions = GameService.getNextMovesBishop(state, [i, j]);
                break;

            case 'knigts':
                nextPositions = GameService.getNextMovesKnigts(state, [i, j]);
                break;

            case 'rook':
                nextPositions = GameService.getNextMovesRook(state, [i, j]);
                break;

            case 'queen':
                nextPositions = GameService.getNextMovesQueen(state, [i, j]);
                break;

            case 'king':
                nextPositions = GameService.getNextMovesKing(state, [i, j], onlyAttacks);
                break;
        }

        return nextPositions;
    },
    
    checkInBorderBoard: (state: Cell[][], pos: number[]) => {
        return (pos[0] >= 0 && pos[0] < state.length) && (pos[1] >= 0 && pos[1] < state.length);
    },

    getFigureColor: (state: Cell[][], pos: number[]) => {
        return state[pos[1]][pos[0]].figure!.color;
    },

    checkPossibleMoveTo: (state: Cell[][], color: FigureColor, target: number[]) => {
        return GameService.checkInBorderBoard(state, target) && (
            !state[target[1]][target[0]].figure || (
                !!state[target[1]][target[0]].figure &&
                state[target[1]][target[0]].figure?.color !== color &&
                state[target[1]][target[0]].figure?.type !== 'king'
            )
        );
    },

    checkEnemy: (state: Cell[][], color: FigureColor, target: number[]) => {
        const targetColor = state[target[1]][target[0]].figure?.color;
        return !!targetColor && targetColor !== color;
    },

    calcDiagonalMoves: (state: Cell[][], figurePos: number[]) => {
        const figureColor = GameService.getFigureColor(state, figurePos);
        const nextMoves: number[][] = [];

        // Влево-вверх
        let nextMove = [figurePos[0] - 1, figurePos[1] - 1];

        while(GameService.checkPossibleMoveTo(state, figureColor, nextMove)) {
            nextMoves.push([...nextMove]);

            if (GameService.checkEnemy(state, figureColor, nextMove)) {
                break;
            }

            nextMove = [nextMove[0] - 1, nextMove[1] - 1];
        }

        // Вправо-вверх
        nextMove = [figurePos[0] + 1, figurePos[1] - 1];

        while(GameService.checkPossibleMoveTo(state, figureColor, nextMove)) {
            nextMoves.push([...nextMove]);

            if (GameService.checkEnemy(state, figureColor, nextMove)) {
                break;
            }

            nextMove = [nextMove[0] + 1, nextMove[1] - 1];
        }

        // Вправо-вниз
        nextMove = [figurePos[0] + 1, figurePos[1] + 1];

        while(GameService.checkPossibleMoveTo(state, figureColor, nextMove)) {
            nextMoves.push([...nextMove]);

            if (GameService.checkEnemy(state, figureColor, nextMove)) {
                break;
            }

            nextMove = [nextMove[0] + 1, nextMove[1] + 1];
        }

        // Вправо-вниз
        nextMove = [figurePos[0] - 1, figurePos[1] + 1];

        while(GameService.checkPossibleMoveTo(state, figureColor, nextMove)) {
            nextMoves.push([...nextMove]);

            if (GameService.checkEnemy(state, figureColor, nextMove)) {
                break;
            }

            nextMove = [nextMove[0] - 1, nextMove[1] + 1];
        }

        return nextMoves;
    },

    calcHorizontalAndVerticalMoves: (state: Cell[][], figurePos: number[]) => {
        const figureColor = GameService.getFigureColor(state, figurePos);
        const nextMoves: number[][] = [];

        // Влево
        let nextMove = [figurePos[0] - 1, figurePos[1]];

        while(GameService.checkPossibleMoveTo(state, figureColor, nextMove)) {
            nextMoves.push([...nextMove]);

            if (GameService.checkEnemy(state, figureColor, nextMove)) {
                break;
            }

            nextMove = [nextMove[0] - 1, nextMove[1]];
        }

        // Вверх
        nextMove = [figurePos[0], figurePos[1] - 1];

        while(GameService.checkPossibleMoveTo(state, figureColor, nextMove)) {
            nextMoves.push([...nextMove]);

            if (GameService.checkEnemy(state, figureColor, nextMove)) {
                break;
            }

            nextMove = [nextMove[0], nextMove[1] - 1];
        }

        // Вправо
        nextMove = [figurePos[0] + 1, figurePos[1]];

        while(GameService.checkPossibleMoveTo(state, figureColor, nextMove)) {
            nextMoves.push([...nextMove]);

            if (GameService.checkEnemy(state, figureColor, nextMove)) {
                break;
            }

            nextMove = [nextMove[0] + 1, nextMove[1]];
        }

        // Вниз
        nextMove = [figurePos[0], figurePos[1] + 1];

        while(GameService.checkPossibleMoveTo(state, figureColor, nextMove)) {
            nextMoves.push([...nextMove]);

            if (GameService.checkEnemy(state, figureColor, nextMove)) {
                break;
            }

            nextMove = [nextMove[0], nextMove[1] + 1];
        }

        return nextMoves;
    },

    // Функция для проверки возможности хода
    // ЗАВИСИТ ОТ ПОРЯДКА ХОДА В СПИСКЕ ВОЗМОЖНЫХ ХОДОВ ПЕШКИ
    mapForCheckPossiblePawnMove: (
        state: Cell[][],
        figurePos: number[],
        nextMove: number[], 
        pawnColor: FigureColor,
        i: number, 
        reverse: boolean,
        // Параметр необходим для получения полей на которые может пойти король
        onlyAttacks: boolean,
        callbackFn: (move: number[]) => void
    ) => {
        if (GameService.checkInBorderBoard(state, nextMove)) {
            switch(i) {
                // Начальный ход вперед
                case 0:
                    if (reverse) {
                        // Если на пути есть фигура
                        const figureOnPath = state[nextMove[1] - 1][nextMove[0]].figure || state[nextMove[1]][nextMove[0]].figure;
                        
                        if (figurePos[1] === 1 && figureOnPath === undefined  && !onlyAttacks) {
                            callbackFn(nextMove);
                        }
                    } else {
                        // Если на пути есть фигура
                        const figureOnPath = state[nextMove[1] + 1][nextMove[0]].figure || state[nextMove[1]][nextMove[0]].figure;
                                                
                        if (figurePos[1] === 6 && figureOnPath === undefined  && !onlyAttacks) {
                            callbackFn(nextMove);
                        }
                    }
                    break;
                
                // Обычный ход вперед
                case 1:
                    // Если на пути есть фигура
                    const figureOnPath = state[nextMove[1]][nextMove[0]].figure;
                        
                    if (figureOnPath === undefined && !onlyAttacks) {
                        callbackFn(nextMove);
                    }
                    break;
                
                // Атака
                case 2:
                case 3:
                    const figureForAttack = state[nextMove[1]][nextMove[0]].figure;
                        
                    if (!!figureForAttack && figureForAttack.color !== pawnColor && figureForAttack.type !== 'king') {
                        callbackFn(nextMove);
                    }
                    break;
            }
        }
    },

    calcPawnMoves: (state: Cell[][], figurePos: number[], revese = false, onlyAttacks = false) => {
        const pawnColor = GameService.getFigureColor(state, figurePos);
        
        const possibleMovesDefault = [
            // Первый ход
            [figurePos[0], figurePos[1] - 2],
            // Обычный ход вперед
            [figurePos[0], figurePos[1] - 1],
            // Атака
            [figurePos[0] - 1, figurePos[1] - 1],
            // Атака
            [figurePos[0] + 1, figurePos[1] - 1],
        ];

        // В обычном состоянии это возможные ходы за черных
        // с параметром reverse = true возможные ходы за белых
        const possibleMovesReverse = [
            //Первый ход
            [figurePos[0], figurePos[1] + 2],
            // Обычный ход
            [figurePos[0], figurePos[1] + 1],
            // Атака
            [figurePos[0] - 1, figurePos[1] + 1],
            // Атака
            [figurePos[0] + 1, figurePos[1] + 1],
        ];

        const nextMoves: number[][] = [];

        if (revese) {
            if (pawnColor === 'white') {
                possibleMovesReverse.forEach((nextMove, i) => {
                    GameService.mapForCheckPossiblePawnMove(
                        state,
                        figurePos,
                        nextMove,
                        pawnColor,
                        i,
                        true,
                        onlyAttacks,
                        (move) => nextMoves.push(move)
                    )
                })
            } else {
                possibleMovesDefault.forEach((nextMove, i) => {
                    GameService.mapForCheckPossiblePawnMove(
                        state,
                        figurePos,
                        nextMove,
                        pawnColor,
                        i,
                        false,
                        onlyAttacks,
                        (move) => nextMoves.push(move)
                    )
                })
            }
        } else {
            if (pawnColor === 'white') {
                possibleMovesDefault.forEach((nextMove, i) => {
                    GameService.mapForCheckPossiblePawnMove(
                        state,
                        figurePos,
                        nextMove,
                        pawnColor,
                        i,
                        false,
                        onlyAttacks,
                        (move) => nextMoves.push(move)
                    )
                })
            } else {
                possibleMovesReverse.forEach((nextMove, i) => {
                    GameService.mapForCheckPossiblePawnMove(
                        state,
                        figurePos,
                        nextMove,
                        pawnColor,
                        i,
                        true,
                        onlyAttacks,
                        (move) => nextMoves.push(move)
                    )
                })
            }
        }

        return nextMoves;
    },

    calcKnigtsMoves: (state: Cell[][], figurePos: number[]) => {
        const nextMoves: number[][] = [];
        const knigtColor = GameService.getFigureColor(state, figurePos);

        const possibleMoves: number[][] = [
            [figurePos[0] + 1, figurePos[1] - 2],
            [figurePos[0] - 1, figurePos[1] - 2],
            [figurePos[0] - 2, figurePos[1] + 1],
            [figurePos[0] - 2, figurePos[1] - 1],
            [figurePos[0] + 2, figurePos[1] + 1],
            [figurePos[0] + 2, figurePos[1] - 1],
            [figurePos[0] + 1, figurePos[1] + 2],
            [figurePos[0] - 1, figurePos[1] + 2],
        ];

        possibleMoves.forEach((move) => {
            if (GameService.checkPossibleMoveTo(state, knigtColor, move)) {
                nextMoves.push(move);
            }
        })

        return nextMoves;
    },

    calcKingMoves: (state: Cell[][], figurePos: number[], onlyAttacks: boolean) => {
        const kingColor = GameService.getFigureColor(state, figurePos);

        const possibleMoves = [
            [figurePos[0], figurePos[1] - 1],
            [figurePos[0] + 1, figurePos[1] - 1],
            [figurePos[0] + 1, figurePos[1]],
            [figurePos[0] + 1, figurePos[1] + 1],
            [figurePos[0], figurePos[1] + 1],
            [figurePos[0] - 1, figurePos[1] + 1],
            [figurePos[0] - 1, figurePos[1]],
            [figurePos[0] - 1, figurePos[1] - 1],
        ]

        if (onlyAttacks) {
            // Для получения полей куда нельзя пойти вражескому королю
            return possibleMoves;
        }

        const enemyCells: number[][] = [];

        state.forEach((row, j) => {
            row.forEach((cell, i) => {
                if (!!cell.figure && cell.figure.color !== kingColor) {
                    enemyCells.push([i, j]);
                }
            })
        })

        let attacksPositions: number[][] = [];

        enemyCells.forEach((enemyCellPos) => {
            const nextMoves = GameService.getNextMoves(state, enemyCellPos, false, true);
            attacksPositions = [...attacksPositions, ...nextMoves];
        })

        const nextMoves: number[][] = [];

        possibleMoves.forEach((possibleMove) => {
            const found = attacksPositions.find((attcakPosition) => 
                attcakPosition[0] === possibleMove[0] && 
                attcakPosition[1] === possibleMove[1]
            );

            if (!found) {
                // Если возможный ход короля не попадает под атаку
                // То добавляем это поле в возможные следующие ходы
                nextMoves.push(possibleMove);
            }
        })

        return nextMoves;
    },

    getNextMovesPawn: (state: Cell[][], figurePos: number[], reverse: boolean, onlyAttacks: boolean) => {
        return GameService.calcPawnMoves(state, figurePos, reverse, onlyAttacks);
    },

    getNextMovesBishop: (state: Cell[][], figurePos: number[]) => {
        return GameService.calcDiagonalMoves(state, figurePos);
    },

    getNextMovesKnigts: (state: Cell[][], figurePos: number[]) => {
        return GameService.calcKnigtsMoves(state, figurePos);
    },

    getNextMovesRook: (state: Cell[][], figurePos: number[]) => {
        return GameService.calcHorizontalAndVerticalMoves(state, figurePos);
    },

    getNextMovesQueen: (state: Cell[][], figurePos: number[]) => {
        const diagonalMoves = GameService.calcDiagonalMoves(state, figurePos);
        const verticalAndHorizontalMoves = GameService.calcHorizontalAndVerticalMoves(state, figurePos);
        const moves = [...diagonalMoves, ...verticalAndHorizontalMoves];
        
        return moves;
    },

    getNextMovesKing: (state: Cell[][], figurePos: number[], onlyAttacks: boolean) => {
        return GameService.calcKingMoves(state, figurePos, onlyAttacks);
    },
}