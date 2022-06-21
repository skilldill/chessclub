import { Cell, FigureColor } from "models";

export const GameService = {
    getNextMoves: (state: Cell[][], [i, j]: number[]): number[][] => {
        const figure = state[j][i].figure!;
        const { type } = figure;

        let nextPositions: number[][] = [];

        switch(type) {
            case 'pawn':
                nextPositions = GameService.getNextMovesPawn(state, [i, j]);
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

    calcPawnMoves: (state: Cell[][], figurePos: number[]) => {
        const nextMoves: number[][] = [];
        const pawnColor = GameService.getFigureColor(state, figurePos);

        // Забрать влево-вперед
        let nextMove = [figurePos[0] - 1, figurePos[1] - 1];

        if (GameService.checkInBorderBoard(state, nextMove)) {
            if (
                !!state[nextMove[1]][nextMove[0]].figure && 
                // Проверяем цвет фигуры, которую хотим съесть
                state[nextMove[1]][nextMove[0]].figure?.color !== pawnColor &&
                state[nextMove[1]][nextMove[0]].figure?.type !== 'king'
            ) {
                nextMoves.push(nextMove);
            }
        }

        // Забрать вправо-вперед
        nextMove = [figurePos[0] + 1, figurePos[1] - 1];

        if (GameService.checkInBorderBoard(state, nextMove)) {
            if (
                !!state[nextMove[1]][nextMove[0]].figure && 
                // Проверяем цвет фигуры, которую хотим съесть
                state[nextMove[1]][nextMove[0]].figure?.color !== pawnColor &&
                state[nextMove[1]][nextMove[0]].figure?.type !== 'king'
            ) {
                nextMoves.push(nextMove);
            }
        }

        // Вперед
        nextMove = [figurePos[0], figurePos[1] - 1];

        if (
            GameService.checkInBorderBoard(state, nextMove) && 
            !state[nextMove[1]][nextMove[0]].figure
        ) {
            nextMoves.push(nextMove);
        }

        // Проверка на каком поле находится пешка
        // Если поле равно 6(начальное),  
        // то можно сходить на два хода вперед
        if (figurePos[1] === 6) {
            nextMoves.push([figurePos[0], figurePos[1] - 2]);
        }

        return nextMoves;
    },

    calcKnigtsMove: (state: Cell[][], figurePos: number[]) => {
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

    getNextMovesPawn: (state: Cell[][], figurePos: number[]) => {
        return GameService.calcPawnMoves(state, figurePos);
    },

    getNextMovesBishop: (state: Cell[][], figurePos: number[]) => {
        return GameService.calcDiagonalMoves(state, figurePos);
    },

    getNextMovesKnigts: (state: Cell[][], figurePos: number[]) => {
        return GameService.calcKnigtsMove(state, figurePos);
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
        let nextPositions: number[][] = [[2, 2], [3, 3]];
        return nextPositions;
    },
}