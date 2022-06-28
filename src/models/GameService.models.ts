export type PawnMoveType = 'first' | 'default' | 'attack';

export interface MoveByPawn {
    pos: number[];
    typeMove: PawnMoveType;
}