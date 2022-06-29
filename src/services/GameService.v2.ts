import { Cell, FigureColor, MoveByPawn, OnCheckPossible } from "models";

export class GameService {
    static getNextMoves = (state: Cell[][], [i, j]: number[], revese = false): number[][] => {
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
                nextPositions = GameService.getNextMovesKing(state, [i, j], revese);
                break;
        }

        return nextPositions;
    }
    
    /**
     * Проверка на то что позиция находится в пределах доски
     * @param state состояние доски
     * @param pos проверяемая позиция
     */
    static checkInBorderBoard = (state: Cell[][], pos: number[]) => {
        return (pos[0] >= 0 && pos[0] < state.length) && (pos[1] >= 0 && pos[1] < state.length);
    }

    /**
     * Возвращает цвет фигуры
     * @param state состояние доски
     * @param pos позиция фигуры
     */
    static getFigureColor = (state: Cell[][], pos: number[]) => {
        return state[pos[1]][pos[0]].figure!.color;
    }

    /**
     * Проверка находится ли в указанной клетке вражеская фигура
     * @param state состояние доски
     * @param pos положение фигуры союзного цвета
     * @param target положение фигуры - цели
     */
    static checkEnemy = (state: Cell[][], pos: number[], target: number[]) => {
        const color = GameService.getFigureColor(state, pos);
        const targetColor = state[target[1]][target[0]].figure?.color;

        return !!targetColor && targetColor !== color;
    }

    /**
     * Проверка находится ли в указанной клетке союзная фигура
     * @param state состояние доски
     * @param pos положение фигуры союзного цвета
     * @param target положение фигуры - цели
     */
     static checkTeammate = (state: Cell[][], pos: number[], target: number[]) => {
        const color = GameService.getFigureColor(state, pos);
        const targetColor = state[target[1]][target[0]].figure?.color;

        return !!targetColor && targetColor === color;
    }

    /**
     * Проверка на то что фигура-цель вражеский король
     * @param state состояние доски
     * @param pos положение фигуры союзного цвета
     * @param target положение фигуры - цели
     */
    static chekEnemyKing = (state: Cell[][], pos: number[], target: number[]) => {
        const isKing = state[target[1]][target[0]].figure?.type === 'king';

        if (!isKing) return false;

        return GameService.checkEnemy(state, pos, target);
    }

    /**
     * Возвращает есть ли фигура в указаной позиции
     * @param state состояние доски
     * @param pos проверяемая позиция
     * @returns 
     */
    static hasFigure = (state: Cell[][], pos: number[]) => {
        return !!state[pos[1]][pos[0]].figure;
    }

    /**
     * Возвращает все клетки с вражескими фигурами
     * @param state состояние доски
     * @param pos позиция союзной фигуры
     */
    static getAllEnemysPositions = (state: Cell[][], pos: number[]) => {
        const enemysPos: number[][] = [];

        state.forEach((row, j) => row.forEach((_, i) => {
            GameService.checkEnemy(state, pos, [i, j]) &&
                enemysPos.push([i, j]);
        }))

        return enemysPos;
    }

    /**
     * Полная проверка возможности хода для фигур: pawn, knigt, bishop, rook, queen
     * @param state состояния доски
     * @param pos положение фигуры союзного цвета
     * @param target позиция клетки - цели
     * @returns 
     */
    static checkPossibleMoveTo = (state: Cell[][], pos: number[], target: number[]) => {
        // Если позиция находится за пределами доски, то сразу false
        return GameService.checkInBorderBoard(state, target) && (
            // Если в клетке - цели нет фигуры 
            !GameService.hasFigure(state, target) || (
                // ИЛИ Если есть фигура и эта фигура вражеская и не король
                GameService.hasFigure(state, target) && 
                GameService.checkEnemy(state, pos, target) && 
                !GameService.chekEnemyKing(state, pos, target)
            )
        );
    }

    /**
     * Проверка находится ли поле под атакой вражеской фигуры 
     * (Используется для расчета возможных ходов для короля)
     * @param state состояние доски
     * @param pos позиция фигуры
     * @param target проверяемая клетка
     */
    static checkAttackedCell = (state: Cell[][], pos: number[], target: number[]) => {
        // Если позиция находится за пределами доски, то сразу false
        return GameService.checkInBorderBoard(state, target);
    }

    /**
     * Проверяет атакованные поля вражеской пешкой
     * (используется для получения возможных ходово для короля)
     * @param state состояние доски
     * @param pos текущая позиция пешки
     * @param target клетка - цель
     */
     static checkAttackedCellByPawn = (
        state: Cell[][], 
        pos: number[], 
        target: MoveByPawn,
    ) => {
        switch(target.typeMove) {
            case 'default':
            case 'first':
                return false;
            case 'attack':
                return GameService.checkInBorderBoard(state, target.pos);
        }
    }

    static getAllAttckedPostionsByEnemys = (state: Cell[][], figurePos: number[], reverse: boolean) => {
        const enemysPos = GameService.getAllEnemysPositions(state, figurePos);
        let attackedPositions: number[][] = [];

        enemysPos.forEach(([i, j]) => {
            const figure = state[j][i].figure!;
            const { type } = figure;
    
            switch(type) {
                case 'pawn':
                    const pawnAttackedPos = GameService.calcPawnMoves(
                        state, 
                        [i, j], 
                        reverse,
                        GameService.checkAttackedCellByPawn
                    );

                    attackedPositions = [...attackedPositions, ...pawnAttackedPos];
                    break;
                
                case 'bishop':
                    const bishopAttackedPos = GameService.calcDiagonalMoves(
                        state, 
                        [i, j], 
                        GameService.checkAttackedCell,
                        (state, figurePos, targetPos) => GameService.hasFigure(state, targetPos) && !GameService.chekEnemyKing(state, [i, j], targetPos)
                    );
                    
                    attackedPositions = [...attackedPositions, ...bishopAttackedPos];
                    break;
    
                case 'knigts':
                    const knigtAttackedPos = GameService.calcKnigtsMoves(
                        state, 
                        [i, j], 
                        GameService.checkAttackedCell
                    );
                    
                    attackedPositions = [...attackedPositions, ...knigtAttackedPos];
                    break;
    
                case 'rook':
                    const rookAttackedPos = GameService.calcHorizontalAndVerticalMoves(
                        state, 
                        [i, j], 
                        GameService.checkAttackedCell,
                        (state, figurePos, targetPos) => GameService.hasFigure(state, targetPos) && !GameService.chekEnemyKing(state, [i, j], targetPos)
                    );
                    
                    attackedPositions = [...attackedPositions, ...rookAttackedPos];
                    break;
    
                case 'queen':
                    const queenAttachedPosD = GameService.calcDiagonalMoves(
                        state, 
                        [i, j], 
                        GameService.checkAttackedCell,
                        (state, figurePos, targetPos) => GameService.hasFigure(state, targetPos) && !GameService.chekEnemyKing(state, [i, j], targetPos)
                    );

                    const queenAttachedPosVH = GameService.calcHorizontalAndVerticalMoves(
                        state, 
                        [i, j], 
                        GameService.checkAttackedCell,
                        (state, figurePos, targetPos) => GameService.hasFigure(state, targetPos) && !GameService.chekEnemyKing(state, [i, j], targetPos)
                    );

                    attackedPositions = [...attackedPositions, ...queenAttachedPosD, ...queenAttachedPosVH];
                    break;
    
                case 'king':
                    const kingAttackedPos = GameService.calcKingMoves(state, [i, j], reverse, true);

                    attackedPositions = [...attackedPositions, ...kingAttackedPos];
                    break;
            }
        })

        return attackedPositions;
    }

    /**
     * Возвращает возможные позиция для движения по диагонали
     * для Слона и Ферзя
     * @param state состояние доски
     * @param figurePos текущая позиция фигуры
     */
    static calcDiagonalMoves = (
        state: Cell[][], 
        figurePos: number[], 
        onCheckPossible: OnCheckPossible = GameService.checkPossibleMoveTo,
        onCheckFigureInCell: OnCheckPossible = GameService.checkEnemy
    ) => {
        const nextMoves: number[][] = [];

        // Влево-вверх
        let nextMove = [figurePos[0] - 1, figurePos[1] - 1];

        while(onCheckPossible(state, figurePos, nextMove)) {
            nextMoves.push([...nextMove]);

            if (onCheckFigureInCell(state, figurePos, nextMove)) {
                break;
            }

            nextMove = [nextMove[0] - 1, nextMove[1] - 1];
        }

        // Вправо-вверх
        nextMove = [figurePos[0] + 1, figurePos[1] - 1];

        while(onCheckPossible(state, figurePos, nextMove)) {
            nextMoves.push([...nextMove]);
            
            if (onCheckFigureInCell(state, figurePos, nextMove)) {
                break;
            }

            nextMove = [nextMove[0] + 1, nextMove[1] - 1];
        }

        // Влево-вниз
        nextMove = [figurePos[0] + 1, figurePos[1] + 1];

        while(onCheckPossible(state, figurePos, nextMove)) {
            nextMoves.push([...nextMove]);
            
            if (onCheckFigureInCell(state, figurePos, nextMove)) {
                break;
            }

            nextMove = [nextMove[0] + 1, nextMove[1] + 1];
        }

        // Вправо-вниз
        nextMove = [figurePos[0] - 1, figurePos[1] + 1];

        while(onCheckPossible(state, figurePos, nextMove)) {
            nextMoves.push([...nextMove]);
            
            if (onCheckFigureInCell(state, figurePos, nextMove)) {
                break;
            }

            nextMove = [nextMove[0] - 1, nextMove[1] + 1];
        }

        return nextMoves;
    }

    /**
     * Возвращает возможные позиция для движения по горизонтали и вертикали
     * для Ладьи и Ферзя
     * @param state состяние доски
     * @param figurePos 
     * @returns 
     */
    static calcHorizontalAndVerticalMoves = (
        state: Cell[][], 
        figurePos: number[],
        onCheckPossible: OnCheckPossible = GameService.checkPossibleMoveTo,
        onCheckFigureInCell: OnCheckPossible = GameService.checkEnemy
    ) => {
        const nextMoves: number[][] = [];

        // Влево
        let nextMove = [figurePos[0] - 1, figurePos[1]];

        while(onCheckPossible(state, figurePos, nextMove)) {
            nextMoves.push([...nextMove]);

            if (onCheckFigureInCell(state, figurePos, nextMove)) {
                break;
            }

            nextMove = [nextMove[0] - 1, nextMove[1]];
        }

        // Вверх
        nextMove = [figurePos[0], figurePos[1] - 1];

        while(onCheckPossible(state, figurePos, nextMove)) {
            nextMoves.push([...nextMove]);

            if (onCheckFigureInCell(state, figurePos, nextMove)) {
                break;
            }

            nextMove = [nextMove[0], nextMove[1] - 1];
        }

        // Вправо
        nextMove = [figurePos[0] + 1, figurePos[1]];

        while(onCheckPossible(state, figurePos, nextMove)) {
            nextMoves.push([...nextMove]);

            if (onCheckFigureInCell(state, figurePos, nextMove)) {
                break;
            }

            nextMove = [nextMove[0] + 1, nextMove[1]];
        }

        // Вниз
        nextMove = [figurePos[0], figurePos[1] + 1];

        while(onCheckPossible(state, figurePos, nextMove)) {
            nextMoves.push([...nextMove]);

            if (onCheckFigureInCell(state, figurePos, nextMove)) {
                break;
            }

            nextMove = [nextMove[0], nextMove[1] + 1];
        }

        return nextMoves;
    }

    /**
    * Возвращает возможные ходы для коня
    * @param state состояние доски
    * @param figurePos текущая позиция фигуры
    * @returns 
    */
    static calcKnigtsMoves = (
        state: Cell[][], 
        figurePos: number[],
        onCheckPossible: OnCheckPossible = GameService.checkPossibleMoveTo
    ) => {
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
            if (onCheckPossible(state, figurePos, move)) {
                nextMoves.push(move);
            }
        })

        return nextMoves;
    }
    

    /**
     * Проверяет возможность пешки пойти на клетку - цель
     * @param state состояние доски
     * @param pos текущая позиция пешки
     * @param target клетка - цель
     * @param pawnColor цвет пешки вычисленный заранее
     * @param reverse перевернута ли доска
     */
    static checkPossiblePawnMoveToPos = (
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

                return pos[1] === state.length - 2 && 
                    !GameService.hasFigure(state, [target.pos[0], target.pos[1] + 1]) &&
                    !GameService.hasFigure(state, target.pos);

            case 'default':
                return !GameService.hasFigure(state, target.pos);

            case 'attack':
                return GameService.checkInBorderBoard(state, target.pos) && 
                    GameService.hasFigure(state, target.pos) && 
                    GameService.checkEnemy(state, pos, target.pos) &&
                    !GameService.chekEnemyKing(state, pos, target.pos)
        }
    }

    /**
     * Возвращает возможные позиции для пешки
     * @param state состояние доски
     * @param figurePos текущее положение пешки
     * @param revese перевернута ли доска
     * @returns 
     */
    static calcPawnMoves = (
        state: Cell[][], 
        figurePos: number[], 
        revese: boolean,
        onCheckPossible: typeof GameService.checkPossiblePawnMoveToPos | 
            typeof GameService.checkAttackedCellByPawn = GameService.checkPossiblePawnMoveToPos 
    ) => {
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
            onCheckPossible(state, figurePos, move, pawnColor, revese) &&
                nextMoves.push(move.pos);
        });

        return nextMoves;
    }

    /**
     * Возвращает возможные ходы для короля
     * @param state состояние доски
     * @param figurePos позиция короля
     * @returns 
     */
    static calcKingMoves = (state: Cell[][], figurePos: number[], reverse: boolean, onlyAttacks: boolean = false) => {
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

        if (onlyAttacks)
            return possibleMoves;

        const allAttackedPositionsByEnemys = GameService.getAllAttckedPostionsByEnemys(state, figurePos, reverse);

        possibleMoves.forEach((move) => {
            if (GameService.checkPossibleMoveTo(state, figurePos, move)) {
                const foundInAttacked = allAttackedPositionsByEnemys.find((attackedMove) => 
                    attackedMove[0] === move[0] && 
                    attackedMove[1] === move[1]
                );
                
                // Если возможный ход не найден в полях находящихся под атакой, то добавляем его в возможные ходы короля
                foundInAttacked === undefined && nextMoves.push(move);
            }
        });

        return nextMoves;
    }

    static getNextMovesPawn = (state: Cell[][], figurePos: number[], reverse: boolean) => {
        return GameService.calcPawnMoves(state, figurePos, reverse);
    }

    static getNextMovesBishop = (state: Cell[][], figurePos: number[]) => {
        return GameService.calcDiagonalMoves(state, figurePos);
    }

    static getNextMovesKnigts = (state: Cell[][], figurePos: number[]) => {
        return GameService.calcKnigtsMoves(state, figurePos);
    }

    static getNextMovesRook = (state: Cell[][], figurePos: number[]) => {
        return GameService.calcHorizontalAndVerticalMoves(state, figurePos);
    }

    static getNextMovesQueen = (state: Cell[][], figurePos: number[]) => {
        const diagonalMoves = GameService.calcDiagonalMoves(state, figurePos);
        const verticalAndHorizontalMoves = GameService.calcHorizontalAndVerticalMoves(state, figurePos);
        const moves = [...diagonalMoves, ...verticalAndHorizontalMoves];
        
        return moves;
    }

    static getNextMovesKing = (state: Cell[][], figurePos: number[], reverse: boolean) => {
        return GameService.calcKingMoves(state, figurePos, reverse);
    }
}