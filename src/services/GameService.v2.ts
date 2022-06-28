import { Cell, FigureColor, MoveByPawn } from "models";

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
                nextPositions = GameService.getNextMovesKing(state, [i, j]);
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

    hasFigure: (state: Cell[][], pos: number[]) => {
        return !!state[pos[1]][pos[0]].figure;
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
                GameService.hasFigure(state, target) && 
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

    /**
     * Проверяет возможность пешки пойти на клетку - цель
     * @param state состояние доски
     * @param pos текущая позиция пешки
     * @param target клетка - цель
     * @param pawnColor цвет пешки вычисленный заранее
     * @param reverse перевернута ли доска
     */
    checkPossiblePawnMoveToPos: (
        state: Cell[][], 
        pos: number[], 
        target: MoveByPawn, 
        pawnColor: FigureColor,
        reverse: boolean
    ) => {
        switch(target.typeMove) {
            case 'first':
                if (
                    (pawnColor === 'white' && reverse) ||
                    (pawnColor === 'black' && !reverse)
                ) {
                    return pos[1] === 1 && 
                        !GameService.hasFigure(state, [target.pos[0], target.pos[1] - 1]) &&
                        !GameService.hasFigure(state, target.pos);
                } 

                return pos[1] === 6 && 
                    !GameService.hasFigure(state, [target.pos[0], target.pos[1] + 1]) &&
                    !GameService.hasFigure(state, target.pos);

            case 'default':
                return !GameService.hasFigure(state, target.pos);

            case 'attack':
                return GameService.hasFigure(state, target.pos) && 
                    GameService.checkEnemy(state, pos, target.pos) &&
                    !GameService.chekEnemyKing(state, pos, target.pos)
        }
    },

    /**
     * Возвращает возможные позиции для пешки
     * @param state состояние доски
     * @param figurePos текущее положение пешки
     * @param revese перевернута ли доска
     * @returns 
     */
    calcPawnMoves: (state: Cell[][], figurePos: number[], revese: boolean) => {
        const pawnColor = GameService.getFigureColor(state, figurePos);
        const nextMoves: number[][] = [];

        // Возможные позиции для пешки
        const possibleMoves: MoveByPawn[] = [
            // Первый ход
            { typeMove: 'first', pos: [figurePos[0], figurePos[1] - 2] },
            
            // Обычный ход вперед
            { typeMove: 'default', pos: [figurePos[0], figurePos[1] - 1] },

            // Атака
            { typeMove: 'attack', pos: [figurePos[0] - 1, figurePos[1] - 1] },

            // Атака
            { typeMove: 'attack', pos: [figurePos[0] + 1, figurePos[1] - 1] },
        ];

        // В обычном состоянии это возможные ходы за черных
        // с параметром reverse = true возможные ходы за белых
        const possibleMovesReverse: MoveByPawn[] = [
            // Первый ход
            { typeMove: 'first', pos: [figurePos[0], figurePos[1] + 2] },
            
            // Обычный ход вперед
            { typeMove: 'default', pos: [figurePos[0], figurePos[1] + 1] },

            // Атака
            { typeMove: 'attack', pos: [figurePos[0] - 1, figurePos[1] + 1] },

            // Атака
            { typeMove: 'attack', pos: [figurePos[0] + 1, figurePos[1] + 1] },
        ];

        // Если цвет пещки белый и доска не перевернута ИЛИ цвет пешки черный и доска перевернута => используем обычные ходы
        // Иначе используем перевернутые ходы
        const possibleMovesForColor = (pawnColor === 'white' && !revese) || 
            (pawnColor === 'black' && revese) ? possibleMoves : possibleMovesReverse;

        possibleMovesForColor.forEach((move) => {
            GameService.checkPossiblePawnMoveToPos(state, figurePos, move, pawnColor, revese) &&
                nextMoves.push(move.pos);
        });

        return nextMoves;
    },

    /**
     * Проверяет возможность короля пойти на клетку - цель 
     * @param state состояние доски
     * @param target позиция клетки - цель
     */
    checkPossibleKingMoveToPos: (state: Cell[][], kingPos: number[], target: number[]) => {
        // TODO сделать проверку атакованных полей
        return GameService.checkPossibleMoveTo(state, kingPos, target);
    },

    /**
     * Возвращает возможные ходы для короля
     * @param state состояние доски
     * @param figurePos позиция короля
     * @returns 
     */
    calcKingMoves: (state: Cell[][], figurePos: number[]) => {
        const nextMoves: number[][] = [];

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

        possibleMoves.forEach((move) => {
            GameService.checkPossibleKingMoveToPos(state, figurePos, move) &&
                nextMoves.push(move);
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
        return GameService.calcKingMoves(state, figurePos);
    },
}