import { Cell } from "models";

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
    
    getNextMovesPawn: (state: Cell[][], figurePos: number[]) => {
        let nextPositions: number[][] = [[2, 2], [3, 3]];
        return nextPositions;
    },

    getNextMovesBishop: (state: Cell[][], figurePos: number[]) => {
        let nextPositions: number[][] = [[2, 2], [3, 3]];
        return nextPositions;
    },

    getNextMovesKnigts: (state: Cell[][], figurePos: number[]) => {
        let nextPositions: number[][] = [[2, 2], [3, 3]];
        return nextPositions;
    },

    getNextMovesRook: (state: Cell[][], figurePos: number[]) => {
        let nextPositions: number[][] = [[2, 2], [3, 3]];
        return nextPositions;
    },

    getNextMovesQueen: (state: Cell[][], figurePos: number[]) => {
        let nextPositions: number[][] = [[2, 2], [3, 3]];
        return nextPositions;
    },

    getNextMovesKing: (state: Cell[][], figurePos: number[]) => {
        let nextPositions: number[][] = [[2, 2], [3, 3]];
        return nextPositions;
    },
}