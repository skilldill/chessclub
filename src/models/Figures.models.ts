export type FigureType = 'pawn' | 'bishop' | 'knigts' | 'rook' | 'queen' | 'king';
export type FigureColor = 'white' | 'black';

export interface Figure {
    type: FigureType;
    color: FigureColor;
}