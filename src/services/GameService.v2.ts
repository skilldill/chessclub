import { color } from "@chakra-ui/react";
import { Cell, FigureColor, MoveByPawn, MoveDirection, OnCheckPossible } from "models";

const DIRECTIONS_D: MoveDirection[] = ['top-right', 'bottom-right', 'bottom-left', 'top-left'];
const DIRECTIONS_VH: MoveDirection[] = ['top', 'right', 'bottom', 'left'];

export class GameService {
    /**
     * Возвращает возможные ходы фигуры
     * @param state состояние доски
     * @param param1 позиция фигуры, которой хотим сыграть
     * @param linesWithCheck линии по которым есть шах на союзного короля
     * @param revese перевернута ли доска
     */
    static getNextMoves = (
        state: Cell[][], 
        [i, j]: number[], 
        linesWithCheck: number[][][],
        revese = false
    ): number[][] => {
        const figure = state[j][i].figure!;
        const { type } = figure;

        let nextPositions: number[][] = [];

        switch(type) {
            case 'pawn':
                const pawnPossibleMoves = GameService.getNextMovesPawn(state, [i, j], revese);
                nextPositions = GameService.correctionPossibleMoves(state, [i, j], pawnPossibleMoves, linesWithCheck);
                break;
            
            case 'bishop':
                const bishopPossibleMoves = GameService.getNextMovesBishop(state, [i, j]);
                nextPositions = GameService.correctionPossibleMoves(state, [i, j], bishopPossibleMoves, linesWithCheck);
                break;

            case 'knigts':
                const knigtPossibleMoves = GameService.getNextMovesKnigts(state, [i, j]);
                nextPositions = GameService.correctionPossibleMoves(state, [i, j], knigtPossibleMoves, linesWithCheck);
                break;

            case 'rook':
                const rookPossibleMovese = GameService.getNextMovesRook(state, [i, j]);
                nextPositions = GameService.correctionPossibleMoves(state, [i, j], rookPossibleMovese, linesWithCheck);
                break;

            case 'queen':
                const queenPossibleMoves = GameService.getNextMovesQueen(state, [i, j]);
                nextPositions = GameService.correctionPossibleMoves(state, [i, j], queenPossibleMoves, linesWithCheck);
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
    static checkEnemyKing = (state: Cell[][], pos: number[], target: number[]) => {
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
     * Проверяет дальнобойная ли фигура 
     * слон, ладья или ферзь
     * @param state состояние доски
     * @param figurePos позиция фигуры
     */
    static checkFigureIsLongRange = (state: Cell[][], figurePos: number[]) => {
        const { figure } = state[figurePos[1]][figurePos[0]];
        return figure?.type === 'bishop' || figure?.type === 'rook' || figure?.type === 'queen';
    }

    /**
     * Возвращает количество вражеских которые можно атаковать (кроме короля) фигур из массива позиций
     * @param state состояние доски
     * @param figurePos позиция фигуры
     * @param positions проверяемые позиции
     */
    static getCountEnemys = (state: Cell[][], figurePos: number[], positions: number[][]) => {
        let count = 0;

        positions.forEach((pos) => {
            if (GameService.checkEnemy(state, figurePos, pos) && !GameService.checkEnemyKing(state, figurePos, pos)) {
                count += 1;
            }
        })

        return count;
    }

    /**
     * Возвращает позицию союзного короля
     * @param state состояние доски
     * @param figurePos позиция фигуры
     */
    static getTeammateKingPos = (state: Cell[][], figurePos: number[]) => {
        const figureColor = GameService.getFigureColor(state, figurePos);

        let kingPos: number[] | undefined = undefined;

        // Используется цикл для того чтобы можно было остановить поиск
        for (let j = 0; j < state.length; j++) {
            const row = state[j];

            for (let i = 0; i < row.length; i++) {
                const { figure }= row[i];

                if (figure?.color === figureColor && figure.type === 'king') {
                    kingPos = [i, j];
                    break;
                }
            }

            if (!!kingPos) {
                break;
            }
        }

        return kingPos;
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
     * Возвращает позиции фигур-союзников по цвету
     * @param state состояние доски
     * @param color цвет по которому ищем фигуры-союзники
     */
    static getAllTeammatesPositionsByColor = (state: Cell[][], color: FigureColor) => {
        const positions: number[][] = [];

        state.forEach((row, j) => row.forEach((cell, i) => {
            if (!!cell.figure && cell.figure.color === color) {
                positions.push([i, j]);
            }
        }));

        return positions;
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
                !GameService.checkEnemyKing(state, pos, target)
            )
        );
    }

    /**
     * Прооверяет возможность атаки клетки
     * Если в клетке вражеская фигура, считает ее атакованной
     * Необходима для проверки нахождения вражеского короля за атакованной фигурой
     * @param state состояние доски
     * @param figurePos позиция фигураы
     * @param target клетака под атакой
     */
    static checkPossibleAttackTo = (state: Cell[][], figurePos: number[], target: number[]) => {
        // Если позиция находится за пределами доски, то сразу false
        return GameService.checkInBorderBoard(state, target) && (
            !GameService.hasFigure(state, target) ||
            GameService.checkEnemy(state, figurePos, target)
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

    /** TODO НУЖНО УЧЕСТЬ ЧТО МОЖЕТ БЫТЬ НЕСКОЛЬКО ФИГУР ПЕРЕД КОРОЛЕМ
     * Корректирует возможные ходы фигуры в зависимости от того находится ли
     * фигура под атакой и стоит ли на линии атаки король за фигурой
     * @param state состояние доски
     * @param figurePos позиция фигуры
     * @param possibleMoves возможные ходы фигуры
     * @param linesWithCheck массив линий по которым есть шах на союзного короля
     */
    static correctionPossibleMoves = (
        state: Cell[][], 
        figurePos: number[], 
        possibleMoves: number[][],
        linesWithCheck: number[][][],
    ) => {
        const kingPos = GameService.getTeammateKingPos(state, figurePos)!;

        const enemysPos = GameService.getAllEnemysPositions(state, figurePos);

        // Находим все дальнобойные фигуры противника, 
        // так как только они могут атаковать на протяженной дистанции
        const longrangeEnemysPos = enemysPos.filter((pos) => GameService.checkFigureIsLongRange(state, pos));
        
        const correctedPossibleMoves: number[][] = [];

        let kingBehidFigure = false;

        longrangeEnemysPos.forEach((enemyPos) => {
            const enemyType = state[enemyPos[1]][enemyPos[0]].figure!.type;

            switch(enemyType) {
                case 'bishop':
                    DIRECTIONS_D.forEach((direction) => {
                        if (!kingBehidFigure) {
                            const attackedLine = GameService.getFullAttackedLine(state, enemyPos, direction);
    
                            // Ищем индекс позиции короля
                            const foundIndexKingPos = attackedLine.findIndex((pos) => pos[0] === kingPos[0] && pos[1] === kingPos[1]);
    
                            // Ищем позицию фигуры на линии атаки
                            const foundIndexFigurePos = attackedLine.findIndex((pos) => pos[0] === figurePos[0] && pos[1] === figurePos[1]);
                            
                            const countFiguresBehindKing = GameService.getCountEnemys(state, enemyPos, attackedLine);

                            // Если индексы найдены и индекс короля больше чем индекс фигуры на линии атаки
                            // то корректируем возможные движения фигуры
                            kingBehidFigure = foundIndexKingPos > -1 && foundIndexFigurePos > -1 && foundIndexKingPos > foundIndexFigurePos && countFiguresBehindKing === 1;

                            if (kingBehidFigure) {    
                                // Оставляем только те позиции которые есть и в possibleMoves и в attackedLine
                                possibleMoves.forEach((possibleMove) => {
                                    // Включаем позиции атакующей фигуры так как ее можно съесть
                                    [...attackedLine, enemyPos].forEach((attackedPos) => {
                                        if (attackedPos[0] === possibleMove[0] && attackedPos[1] === possibleMove[1]) {
                                            correctedPossibleMoves.push(possibleMove);
                                        }
                                    })
                                })
                            }
                        }
                    });

                    break;

                case 'rook':
                    if (kingBehidFigure) {
                        break;
                    }

                    DIRECTIONS_VH.forEach((direction) => {
                        if (!kingBehidFigure) {
                            const attackedLine = GameService.getFullAttackedLine(state, enemyPos, direction);

                            // Ищем индекс позиции короля
                            const foundIndexKingPos = attackedLine.findIndex((pos) => pos[0] === kingPos[0] && pos[1] === kingPos[1]);
    
                            // Ищем позицию фигуры на линии атаки
                            const foundIndexFigurePos = attackedLine.findIndex((pos) => pos[0] === figurePos[0] && pos[1] === figurePos[1]);
                            
                            const countFiguresBehindKing = GameService.getCountEnemys(state, enemyPos, attackedLine);

                            // Если индексы найдены и индекс короля больше чем индекс фигуры на линии атаки
                            // то корректируем возможные движения фигуры
                            kingBehidFigure = foundIndexKingPos > -1 && foundIndexFigurePos > -1 && foundIndexKingPos > foundIndexFigurePos && countFiguresBehindKing === 1;

                            if (kingBehidFigure) {
                                // Оставляем только те позиции которые есть и в possibleMoves и в attackedLine
                                possibleMoves.forEach((possibleMove) => {
                                    // Включаем позиции атакующей фигуры так как ее можно съесть
                                    [...attackedLine, enemyPos].forEach((attackedPos) => {
                                        if (attackedPos[0] === possibleMove[0] && attackedPos[1] === possibleMove[1]) {
                                            correctedPossibleMoves.push(possibleMove);
                                        }
                                    })
                                })
                            }
                        }
                    });

                    break;

                case 'queen':
                    if (kingBehidFigure) {
                        break;
                    }

                    [...DIRECTIONS_D, ...DIRECTIONS_VH].forEach((direction) => {
                        if (!kingBehidFigure) {
                            const attackedLine = GameService.getFullAttackedLine(state, enemyPos, direction);

                            // Ищем индекс позиции короля
                            const foundIndexKingPos = attackedLine.findIndex((pos) => pos[0] === kingPos[0] && pos[1] === kingPos[1]);
    
                            // Ищем позицию фигуры на линии атаки
                            const foundIndexFigurePos = attackedLine.findIndex((pos) => pos[0] === figurePos[0] && pos[1] === figurePos[1]);
                            
                            const countFiguresBehindKing = GameService.getCountEnemys(state, enemyPos, attackedLine);

                            // Если индексы найдены и индекс короля больше чем индекс фигуры на линии атаки
                            // то корректируем возможные движения фигуры
                            kingBehidFigure = foundIndexKingPos > -1 && foundIndexFigurePos > -1 && foundIndexKingPos > foundIndexFigurePos && countFiguresBehindKing === 1;
                            
                            if (kingBehidFigure) {
                                // Оставляем только те позиции которые есть и в possibleMoves и в attackedLine
                                possibleMoves.forEach((possibleMove) => {
                                    // Включаем позиции атакующей фигуры так как ее можно съесть
                                    [...attackedLine, enemyPos].forEach((attackedPos) => {
                                        if (attackedPos[0] === possibleMove[0] && attackedPos[1] === possibleMove[1]) {
                                            correctedPossibleMoves.push(possibleMove);
                                        }
                                    })
                                })
                            }
                        }
                    });

                    break;
            }
        })

        const preparedMoves = kingBehidFigure ? correctedPossibleMoves : possibleMoves;

        // Если линия с шахом только одна
        // то фигура способна зашитить короля
        if (linesWithCheck.length === 1) {
            const correctedMovesForProtectKing: number[][] = [];

            const attackedLine = linesWithCheck[0];
            
            attackedLine.forEach((attackedPos) => {
                preparedMoves.forEach((possibleMove) => {
                    // Если возможный ход совпдает с одной из атакованных позций
                    // Значит фигуры может прикрыть короля от шаха

                    if (attackedPos[0] === possibleMove[0] && attackedPos[1] === possibleMove[1]) {
                        correctedMovesForProtectKing.push(possibleMove);
                    }
                })
            })

            return correctedMovesForProtectKing;
        }

        // Если двойной и более шах, то одна фигура не способна
        // защитить от нескольких линий атак
        // следовательно не можем делать ход фигурой
        if (linesWithCheck.length > 1)
            return [];
        
        // Атаки на короля нет, фигуры могут свободно ходить
        return preparedMoves;
    }

    /**
     * Возвращает всю атакованную линию дальнобойной фигурой
     * @param state состояние доски
     * @param figurePos позиция фигуры
     * @param direction направление атаки
     */
    static getFullAttackedLine = (
        state: Cell[][], 
        figurePos: number[], 
        direction: MoveDirection
    ) => {
        let nextMove: number[];

        const attackedPositions: number[][] = [];

        switch(direction) {
            case 'top-right':
                nextMove = [figurePos[0] + 1, figurePos[1] - 1];
    
                while (GameService.checkPossibleAttackTo(state, figurePos, nextMove)) {
                    attackedPositions.push(nextMove);
                    nextMove = [nextMove[0] + 1, nextMove[1] - 1];
                }

                break;

    
            case 'bottom-right':
                nextMove = [figurePos[0] + 1, figurePos[1] + 1];
    
                while (GameService.checkPossibleAttackTo(state, figurePos, nextMove)) {
                    attackedPositions.push(nextMove);
                    nextMove = [nextMove[0] + 1, nextMove[1] + 1];
                }

                break;
    
            case 'bottom-left':
                nextMove = [figurePos[0] - 1, figurePos[1] + 1];
    
                while (GameService.checkPossibleAttackTo(state, figurePos, nextMove)) {
                    attackedPositions.push(nextMove);
                    nextMove = [nextMove[0] - 1, nextMove[1] + 1];
                }

                break;

            case 'top-left':
                nextMove = [figurePos[0] - 1, figurePos[1] - 1];
    
                while (GameService.checkPossibleAttackTo(state, figurePos, nextMove)) {
                    attackedPositions.push(nextMove);
                    nextMove = [nextMove[0] - 1, nextMove[1] - 1];
                }

                break;
    
            case 'top':
                nextMove = [figurePos[0], figurePos[1] - 1];
    
                while (GameService.checkPossibleAttackTo(state, figurePos, nextMove)) {
                    attackedPositions.push(nextMove);
                    nextMove = [nextMove[0], nextMove[1] - 1];
                }

                break
    
            case 'right':
                nextMove = [figurePos[0] + 1, figurePos[1]];
    
                while (GameService.checkPossibleAttackTo(state, figurePos, nextMove)) {
                    attackedPositions.push(nextMove);
                    nextMove = [nextMove[0] + 1, nextMove[1]];
                }

                break;
    
            case 'bottom':
                nextMove = [figurePos[0], figurePos[1] + 1];
    
                while (GameService.checkPossibleAttackTo(state, figurePos, nextMove)) {
                    attackedPositions.push(nextMove);
                    nextMove = [nextMove[0], nextMove[1] + 1];
                }
                
                break;
    
            case 'left':
                nextMove = [figurePos[0] - 1, figurePos[1]];
    
                while (GameService.checkPossibleAttackTo(state, figurePos, nextMove)) {
                    attackedPositions.push(nextMove);
                    nextMove = [nextMove[0] - 1, nextMove[1]];
                }

                break;
        }

        return attackedPositions;
    }

    /**
     * Возвращает все атакованные врагом позиции 
     * используется для проверки ходов короля
     * @param state состояние доски
     * @param figurePos позиция фигуры
     * @param reverse перевернута ли доска
     */
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
                        (state, figurePos, targetPos) => GameService.hasFigure(state, targetPos) && !GameService.checkEnemyKing(state, [i, j], targetPos)
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
                        (state, figurePos, targetPos) => GameService.hasFigure(state, targetPos) && !GameService.checkEnemyKing(state, [i, j], targetPos)
                    );
                    
                    attackedPositions = [...attackedPositions, ...rookAttackedPos];
                    break;
    
                case 'queen':
                    const queenAttachedPosD = GameService.calcDiagonalMoves(
                        state, 
                        [i, j], 
                        GameService.checkAttackedCell,
                        (state, figurePos, targetPos) => GameService.hasFigure(state, targetPos) && !GameService.checkEnemyKing(state, [i, j], targetPos)
                    );

                    const queenAttachedPosVH = GameService.calcHorizontalAndVerticalMoves(
                        state, 
                        [i, j], 
                        GameService.checkAttackedCell,
                        (state, figurePos, targetPos) => GameService.hasFigure(state, targetPos) && !GameService.checkEnemyKing(state, [i, j], targetPos)
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
                    !GameService.checkEnemyKing(state, pos, target.pos)
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

    /**
     * Возвращает линии по которым есть шах вражескому королю
     * @param state состояние доски
     * @param activeColor цвет фигур, которые сделали ход 
     */
    static getLinesWithCheck = (state: Cell[][], activeColor: FigureColor, reverse = false) => {
        const posTeammates = GameService.getAllTeammatesPositionsByColor(state, activeColor);
        
        const linesWithCheck: number[][][] = [];

        posTeammates.forEach((pos) => {
            const figureType = state[pos[1]][pos[0]].figure!.type;

            switch(figureType) {
                case 'bishop':
                    DIRECTIONS_D.forEach((direction) => {
                        const attackedLineBishop = GameService.getFullAttackedLine(state, pos, direction);
                        
                        let hasAttackedEnemyKing = false;

                        for (let i = 0; i < attackedLineBishop.length; i++) {
                            const attackedPos = attackedLineBishop[i];

                            // Проверяем атакованную позицию
                            // Если клетка пустая, то продолжаем проверять
                            // Необходимое условие чтобы перед королем не было атакованной фигуры
                            if (GameService.hasFigure(state, attackedPos) && !GameService.checkEnemyKing(state, pos, attackedPos)) {
                                break;
                            }

                            // Если доходим до короля, перываем цикл и отмечаем
                            // что линия имеет атакованного короля - объявлен шах
                            if (GameService.checkEnemyKing(state, pos, attackedPos)) {
                                hasAttackedEnemyKing = true;
                                break;
                            }
                        }

                        // Если линия имеет атакованного короля, добавляем ее в линии с шахами
                        if (hasAttackedEnemyKing) {
                            linesWithCheck.push([...attackedLineBishop, pos]);
                        }
                    });

                    break;

                case 'rook':
                    DIRECTIONS_VH.forEach((direction) => {
                        const attackedLineRook = GameService.getFullAttackedLine(state, pos, direction);
                        
                        let hasAttackedEnemyKing = false;

                        for (let i = 0; i < attackedLineRook.length; i++) {
                            const attackedPos = attackedLineRook[i];

                            // Проверяем атакованную позицию
                            // Если клетка пустая, то продолжаем проверять
                            // Необходимое условие чтобы перед королем не было атакованной фигуры
                            if (GameService.hasFigure(state, attackedPos) && !GameService.checkEnemyKing(state, pos, attackedPos)) {
                                break;
                            }

                            // Если доходим до короля, перываем цикл и отмечаем
                            // что линия имеет атакованного короля - объявлен шах
                            if (GameService.checkEnemyKing(state, pos, attackedPos)) {
                                hasAttackedEnemyKing = true;
                                break;
                            }
                        }

                        // Если линия имеет атакованного короля, добавляем ее в линии с шахами
                        if (hasAttackedEnemyKing) {
                            linesWithCheck.push([...attackedLineRook, pos]);
                        }
                    });

                    break;

                case 'queen':
                    [...DIRECTIONS_D, ...DIRECTIONS_VH].forEach((direction) => {
                        const attackedLineQueen = GameService.getFullAttackedLine(state, pos, direction);

                        let hasAttackedEnemyKing = false;

                        for (let i = 0; i < attackedLineQueen.length; i++) {
                            const attackedPos = attackedLineQueen[i];

                            // Проверяем атакованную позицию
                            // Если клетка пустая, то продолжаем проверять
                            // Необходимое условие чтобы перед королем не было атакованной фигуры
                            if (GameService.hasFigure(state, attackedPos) && !GameService.checkEnemyKing(state, pos, attackedPos)) {
                                break;
                            }

                            // Если доходим до короля, перываем цикл и отмечаем
                            // что линия имеет атакованного короля - объявлен шах
                            if (GameService.checkEnemyKing(state, pos, attackedPos)) {
                                hasAttackedEnemyKing = true;
                                break;
                            }
                        }

                        // Если линия имеет атакованного короля, добавляем ее в линии с шахами
                        if (hasAttackedEnemyKing) {
                            linesWithCheck.push([...attackedLineQueen, pos]);
                        }
                    });

                    break;

                case 'pawn':
                    const pawnAttackedPositions: number[][] = [];

                    if ((reverse && activeColor === 'white') || (!reverse && activeColor === 'black')) {
                        // Вниз-вправо
                        pawnAttackedPositions.push([pos[0] + 1, pos[1] + 1]);

                        // Вниз-влево
                        pawnAttackedPositions.push([pos[0] - 1, pos[1] + 1]);
                    } 
                    
                    if ((reverse && activeColor === 'black') || (!reverse && activeColor === 'white')) {
                        // Вверх-вправо
                        pawnAttackedPositions.push([pos[0] + 1, pos[1] - 1]);

                        // Вверх-влево
                        pawnAttackedPositions.push([pos[0] - 1, pos[1] - 1]);
                    }

                    pawnAttackedPositions.forEach((attackedPos) => {
                        if (// Позиция находится в пределах доски
                            GameService.checkInBorderBoard(state, attackedPos) && 
                            // И в клетке есть вражеский король
                            GameService.checkEnemyKing(state, pos, attackedPos)
                        ) {
                            linesWithCheck.push([attackedPos, pos]);
                        }
                    });

                    break;

                case 'knigts':
                    const knigtAttackedPositions = [
                        [pos[0], pos[1] - 1],
                        [pos[0] + 1, pos[1] - 1],
                        [pos[0] + 1, pos[1]],
                        [pos[0] + 1, pos[1] + 1],
                        [pos[0], pos[1] + 1],
                        [pos[0] - 1, pos[1] + 1],
                        [pos[0] - 1, pos[1]],
                        [pos[0] - 1, pos[1] - 1],
                    ];

                    knigtAttackedPositions.forEach((attackedPos) => {
                        if (// Позиция находится в пределах доски
                            GameService.checkInBorderBoard(state, attackedPos) && 
                            // И в клетке есть вражеский король
                            GameService.checkEnemyKing(state, pos, attackedPos)
                        ) {
                            linesWithCheck.push([attackedPos, pos]);
                        }
                    });

                    break;
            }
        });

        return linesWithCheck;
    }
}