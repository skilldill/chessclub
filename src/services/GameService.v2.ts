import { Cell, FigureColor } from "models";

export const GameService = {
    getNextMoves: (state: Cell[][], [i, j]: number[], revese = false): number[][] => {
        const figure = state[j][i].figure!;
        const { type } = figure;

        let nextPositions: number[][] = [];

        switch(type) {
            case 'pawn':
                nextPositions = GameService.getNextMovesPawn(state, [i, j], revese);
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
                // nextPositions = GameService.getNextMovesKing(state, [i, j]);
                break;
        }

        return nextPositions;
    },
    
    /**
     * Проверка на то что позиция находится в пределах доски
     * @param state состояние доски
     * @param pos проверяемая позиция
     */
    checkInBorderBoard: (state: Cell[][], pos: number[]) => {
        return (pos[0] >= 0 && pos[0] < state.length) && (pos[1] >= 0 && pos[1] < state.length);
    },

    /**
     * Возвращает цвет фигуры
     * @param state состояние доски
     * @param pos позиция фигуры
     */
    getFigureColor: (state: Cell[][], pos: number[]) => {
        return state[pos[1]][pos[0]].figure!.color;
    },

    /**
     * Проверка находится ли в указанной клетке вражеская фигура
     * @param state состояние доски
     * @param pos положение фигуры союзного цвета
     * @param target положение фигуры - цели
     */
    checkEnemy: (state: Cell[][], pos: number[], target: number[]) => {
        const color = GameService.getFigureColor(state, pos);
        const targetColor = state[target[1]][target[0]].figure?.color;

        return !!targetColor && targetColor !== color;
    },

    /**
     * Проверка на то что фигура-цель вражеский король
     * @param state состояние доски
     * @param pos положение фигуры союзного цвета
     * @param target положение фигуры - цели
     */
    chekEnemyKing: (state: Cell[][], pos: number[], target: number[]) => {
        const isKing = state[target[1]][target[0]].figure?.type === 'king';

        if (!isKing) return false;

        return GameService.checkEnemy(state, pos, target);
    },

    /**
     * Полная проверка возможности хода для фигур: pawn, knigt, bishop, rook, queen
     * @param state состояния доски
     * @param pos положение фигуры союзного цвета
     * @param target позиция клетки - цели
     * @returns 
     */
    checkPossibleMoveTo: (state: Cell[][], pos: number[], target: number[]) => {
        // Если позиция находится за пределами доски, то сразу false
        return GameService.checkInBorderBoard(state, target) && (
            // Если в клетке - цели нет фигуры 
            !state[target[1]][target[0]].figure || (
                // ИЛИ Если есть фигура и эта фигура вражеская и не король
                !!state[target[1]][target[0]].figure && 
                GameService.checkEnemy(state, pos, target) && 
                !GameService.chekEnemyKing(state, pos, target)
            )
        );
    },

    /**
     * Возвращает возможные позиция для движения по диагонали
     * для Слона и Ферзя
     * @param state состояние доски
     * @param figurePos текущая позиция фигуры
     */
    calcDiagonalMoves: (state: Cell[][], figurePos: number[]) => {
        const nextMoves: number[][] = [];

        // Влево-вверх
        let nextMove = [figurePos[0] - 1, figurePos[1] - 1];

        while(GameService.checkPossibleMoveTo(state, figurePos, nextMove)) {
            nextMoves.push([...nextMove]);

            if (GameService.checkEnemy(state, figurePos, nextMove)) {
                break;
            }

            nextMove = [nextMove[0] - 1, nextMove[1] - 1];
        }

        // Вправо-вверх
        nextMove = [figurePos[0] + 1, figurePos[1] - 1];

        while(GameService.checkPossibleMoveTo(state, figurePos, nextMove)) {
            nextMoves.push([...nextMove]);
            
            if (GameService.checkEnemy(state, figurePos, nextMove)) {
                break;
            }

            nextMove = [nextMove[0] + 1, nextMove[1] - 1];
        }

        // Вправо-вниз
        nextMove = [figurePos[0] + 1, figurePos[1] + 1];

        while(GameService.checkPossibleMoveTo(state, figurePos, nextMove)) {
            nextMoves.push([...nextMove]);
            
            if (GameService.checkEnemy(state, figurePos, nextMove)) {
                break;
            }

            nextMove = [nextMove[0] + 1, nextMove[1] + 1];
        }

        // Вправо-вниз
        nextMove = [figurePos[0] - 1, figurePos[1] + 1];

        while(GameService.checkPossibleMoveTo(state, figurePos, nextMove)) {
            nextMoves.push([...nextMove]);
            
            if (GameService.checkEnemy(state, figurePos, nextMove)) {
                break;
            }

            nextMove = [nextMove[0] - 1, nextMove[1] + 1];
        }

        return nextMoves;
    },

    /**
     * Возвращает возможные позиция для движения по горизонтали и вертикали
     * для Ладьи и Ферзя
     * @param state состяние доски
     * @param figurePos 
     * @returns 
     */
    calcHorizontalAndVerticalMoves: (state: Cell[][], figurePos: number[]) => {
        const nextMoves: number[][] = [];

        // Влево
        let nextMove = [figurePos[0] - 1, figurePos[1]];

        while(GameService.checkPossibleMoveTo(state, figurePos, nextMove)) {
            nextMoves.push([...nextMove]);

            if (GameService.checkEnemy(state, figurePos, nextMove)) {
                break;
            }

            nextMove = [nextMove[0] - 1, nextMove[1]];
        }

        // Вверх
        nextMove = [figurePos[0], figurePos[1] - 1];

        while(GameService.checkPossibleMoveTo(state, figurePos, nextMove)) {
            nextMoves.push([...nextMove]);

            if (GameService.checkEnemy(state, figurePos, nextMove)) {
                break;
            }

            nextMove = [nextMove[0], nextMove[1] - 1];
        }

        // Вправо
        nextMove = [figurePos[0] + 1, figurePos[1]];

        while(GameService.checkPossibleMoveTo(state, figurePos, nextMove)) {
            nextMoves.push([...nextMove]);

            if (GameService.checkEnemy(state, figurePos, nextMove)) {
                break;
            }

            nextMove = [nextMove[0] + 1, nextMove[1]];
        }

        // Вниз
        nextMove = [figurePos[0], figurePos[1] + 1];

        while(GameService.checkPossibleMoveTo(state, figurePos, nextMove)) {
            nextMoves.push([...nextMove]);

            if (GameService.checkEnemy(state, figurePos, nextMove)) {
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
        onlyDefense: boolean,
        callbackFn: (move: number[]) => void
    ) => {
        if (GameService.checkInBorderBoard(state, nextMove)) {
            switch(i) {
                // Начальный ход вперед
                case 0:
                    if (reverse) {
                        // Если на пути есть фигура
                        const figureOnPath = state[nextMove[1] - 1][nextMove[0]].figure || state[nextMove[1]][nextMove[0]].figure;
                        
                        if (figurePos[1] === 1 && figureOnPath === undefined  && !onlyDefense) {
                            callbackFn(nextMove);
                        }
                    } else {
                        // Если на пути есть фигура
                        const figureOnPath = state[nextMove[1] + 1][nextMove[0]].figure || state[nextMove[1]][nextMove[0]].figure;
                                                
                        if (figurePos[1] === 6 && figureOnPath === undefined  && !onlyDefense) {
                            callbackFn(nextMove);
                        }
                    }
                    break;
                
                // Обычный ход вперед
                case 1:
                    // Если на пути есть фигура
                    const figureOnPath = state[nextMove[1]][nextMove[0]].figure;
                        
                    if (figureOnPath === undefined && !onlyDefense) {
                        callbackFn(nextMove);
                    }
                    break;
                
                // Атака
                case 2:
                case 3:
                    const figureForAttack = state[nextMove[1]][nextMove[0]].figure;
                        
                    if (
                        (!!figureForAttack && figureForAttack.color !== pawnColor && figureForAttack.type !== 'king') ||
                        onlyDefense
                    ) {
                        callbackFn(nextMove);
                    }

                    break;
            }
        }
    },

    calcPawnMoves: (state: Cell[][], figurePos: number[], revese = false, onlyDefense = false) => {
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
                        onlyDefense,
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
                        onlyDefense,
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
                        onlyDefense,
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
                        onlyDefense,
                        (move) => nextMoves.push(move)
                    )
                })
            }
        }

        return nextMoves;
    },

    /**
     * Возвращает возможные ходы для коня
     * @param state состояние доски
     * @param figurePos текущая позиция фигуры
     * @returns 
     */
    calcKnigtsMoves: (state: Cell[][], figurePos: number[]) => {
        const nextMoves: number[][] = [];

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
            if (GameService.checkPossibleMoveTo(state, figurePos, move)) {
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
            const nextMoves = GameService.getNextMoves(state, enemyCellPos, false);
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

    getNextMovesPawn: (state: Cell[][], figurePos: number[], reverse: boolean) => {
        return GameService.calcPawnMoves(state, figurePos, reverse);
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

    getNextMovesKing: (state: Cell[][], figurePos: number[]) => {
        // return GameService.calcKingMoves(state, figurePos);
    },
}