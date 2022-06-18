import { Cell } from "models"

export const INITIAL_CELLS: Cell[][] = [
    [
        { figure: { type: 'rook', color: 'black' } },
        { figure: { type: 'knigts', color: 'black' } },
        { figure: { type: 'bishop', color: 'black' } },
        { figure: { type: 'queen', color: 'black' } },
        { figure: { type: 'king', color: 'black' } },
        { figure: { type: 'bishop', color: 'black' } },
        { figure: { type: 'knigts', color: 'black' } },
        { figure: { type: 'rook', color: 'black' } },
    ],
    [
        { figure: { type: 'pawn', color: 'black' } },
        { figure: { type: 'pawn', color: 'black' } },
        { figure: { type: 'pawn', color: 'black' } },
        { figure: { type: 'pawn', color: 'black' } },
        { figure: { type: 'pawn', color: 'black' } },
        { figure: { type: 'pawn', color: 'black' } },
        { figure: { type: 'pawn', color: 'black' } },
        { figure: { type: 'pawn', color: 'black' } },
    ],
    [
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
    ],
    [
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
    ],
    [
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
    ],
    [
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
        { figure: undefined },
    ],
    [
        { figure: { type: 'pawn', color: 'white' } },
        { figure: { type: 'pawn', color: 'white' } },
        { figure: { type: 'pawn', color: 'white' } },
        { figure: { type: 'pawn', color: 'white' } },
        { figure: { type: 'pawn', color: 'white' } },
        { figure: { type: 'pawn', color: 'white' } },
        { figure: { type: 'pawn', color: 'white' } },
        { figure: { type: 'pawn', color: 'white' } },
    ],
    [
        { figure: { type: 'rook', color: 'white' } },
        { figure: { type: 'knigts', color: 'white' } },
        { figure: { type: 'bishop', color: 'white' } },
        { figure: { type: 'queen', color: 'white' } },
        { figure: { type: 'king', color: 'white' } },
        { figure: { type: 'bishop', color: 'white' } },
        { figure: { type: 'knigts', color: 'white' } },
        { figure: { type: 'rook', color: 'white' } },
    ],
]

export const CHESS_BOARD_CONFIG = {
    cellWhiteBg: '#e0e0e0',
    cellBlackBg: '#fff',
    cellSize: 80,

    figures: {
        white: {
            pawn: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0gNzM0LjA0OTM4LDk4MC44MDgxNiA5MzAuMDkwNzksNzg3Ljk1NTIzIGMgMCwwIC0xODkuMTMxNzMsLTgxLjU4NzI0IC03OS40MDE3NCwtMjg3Ljg1MDg3IDc5LjMzNjc1LC0xNDkuMTMyMjkgMzAyLjk5NTU1LC0xMTQuMzI2ODEgMzYxLjE4ODg1LDUwLjIwNDkxIDYzLjI1MDEsMTc4LjgyOTI2IC0xMTIuODE2NSwyNDAuMDU2NDUgLTExMi44MTY1LDI0MC4wNTY0NSBMIDEzMjQuOTQzLDk4Ni43ODk2MyBaIE0gNDk4LjY5MzE1LDE3NzkuODA1NCBjIDAsMCAtNy44NTI1MywtMTA2Ljg3MzMgNTAuODAxODUsLTE1NC4yNjA4IDE5NS40ODc1NiwtMTczLjAxNTggMzM3LjI4NjY1LC0zODUuMzcwNiAzNzAuODg3MjYsLTU5OC45MTY1IGwgMjA5LjIzNDE0LDEuOTkzNSBjIDMzLjM0ODQsMjA2LjU1MzcgMTgyLjUwMDYsNDQ3LjAwNDEgMzIxLjAzNzIsNTYxLjc0NzEgMTAxLjczNiw1OS4wNTI0IDk4Ljk4NDIsMTk4LjM5MzcgOTguOTg0MiwxOTguMzkzNyB6IiBmaWxsPSIjZjlmOWY5Ii8+PHBhdGggZD0iTTUyMCAxNzY5aDEwMDhxOC05Ny0xMzItMTgyLTEzMi0xMDEtMTk2LjUtMjM5LjVUMTEyMCAxMDM5SDkyOHEtMTUgMTcwLTc5LjUgMzA4LjVUNjUyIDE1ODdxLTE0MSA4NS0xMzIgMTgyem01MDQgNzRINDQ2di03NHEtNC04MCA0MS41LTEzN1Q2MTMgMTUyNHExMTctOTEgMTcxLjUtMjE3LjVUODYzIDEwMzlINTc2bDI4NC0yMzlxLTg2LTc0LTg2LTE4OCAwLTEwMyA3My0xNzd0MTc3LTc0cTEwMyAwIDE3Ni41IDc0dDczLjUgMTc3cTAgMTE0LTg2IDE4OGwyODQgMjM5aC0yODdxMjMgMTQxIDc4IDI2Ny41dDE3MiAyMTcuNXE3OSA1MSAxMjQuNSAxMDh0NDIuNSAxMzd2NzR6TTc1NiA5NzRoNTM2bC0yMjUtMTkxcTEzNC0zMSAxMzQtMTcxIDAtNzYtNTIuNS0xMjYuNVQxMDI0IDQzNXEtNzMgMC0xMjUgNTAuNVQ4NDcgNjEycTAgMTQwIDEzNCAxNzF6IiBmaWxsPSIjMTAxMDEwIi8+PC9zdmc+',
            bishop: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0gNzM0LjA0OTM4LDk4MC44MDgxNiA5MzAuMDkwNzksNzg3Ljk1NTIzIGMgMCwwIC0xODkuMTMxNzMsLTgxLjU4NzI0IC03OS40MDE3NCwtMjg3Ljg1MDg3IDc5LjMzNjc1LC0xNDkuMTMyMjkgMzAyLjk5NTU1LC0xMTQuMzI2ODEgMzYxLjE4ODg1LDUwLjIwNDkxIDYzLjI1MDEsMTc4LjgyOTI2IC0xMTIuODE2NSwyNDAuMDU2NDUgLTExMi44MTY1LDI0MC4wNTY0NSBMIDEzMjQuOTQzLDk4Ni43ODk2MyBaIE0gNDk4LjY5MzE1LDE3NzkuODA1NCBjIDAsMCAtNy44NTI1MywtMTA2Ljg3MzMgNTAuODAxODUsLTE1NC4yNjA4IDE5NS40ODc1NiwtMTczLjAxNTggMzM3LjI4NjY1LC0zODUuMzcwNiAzNzAuODg3MjYsLTU5OC45MTY1IGwgMjA5LjIzNDE0LDEuOTkzNSBjIDMzLjM0ODQsMjA2LjU1MzcgMTgyLjUwMDYsNDQ3LjAwNDEgMzIxLjAzNzIsNTYxLjc0NzEgMTAxLjczNiw1OS4wNTI0IDk4Ljk4NDIsMTk4LjM5MzcgOTguOTg0MiwxOTguMzkzNyB6IiBmaWxsPSIjZjlmOWY5Ii8+PHBhdGggZD0iTTUyMCAxNzY5aDEwMDhxOC05Ny0xMzItMTgyLTEzMi0xMDEtMTk2LjUtMjM5LjVUMTEyMCAxMDM5SDkyOHEtMTUgMTcwLTc5LjUgMzA4LjVUNjUyIDE1ODdxLTE0MSA4NS0xMzIgMTgyem01MDQgNzRINDQ2di03NHEtNC04MCA0MS41LTEzN1Q2MTMgMTUyNHExMTctOTEgMTcxLjUtMjE3LjVUODYzIDEwMzlINTc2bDI4NC0yMzlxLTg2LTc0LTg2LTE4OCAwLTEwMyA3My0xNzd0MTc3LTc0cTEwMyAwIDE3Ni41IDc0dDczLjUgMTc3cTAgMTE0LTg2IDE4OGwyODQgMjM5aC0yODdxMjMgMTQxIDc4IDI2Ny41dDE3MiAyMTcuNXE3OSA1MSAxMjQuNSAxMDh0NDIuNSAxMzd2NzR6TTc1NiA5NzRoNTM2bC0yMjUtMTkxcTEzNC0zMSAxMzQtMTcxIDAtNzYtNTIuNS0xMjYuNVQxMDI0IDQzNXEtNzMgMC0xMjUgNTAuNVQ4NDcgNjEycTAgMTQwIDEzNCAxNzF6IiBmaWxsPSIjMTAxMDEwIi8+PC9zdmc+',
            knigts: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0gNzM0LjA0OTM4LDk4MC44MDgxNiA5MzAuMDkwNzksNzg3Ljk1NTIzIGMgMCwwIC0xODkuMTMxNzMsLTgxLjU4NzI0IC03OS40MDE3NCwtMjg3Ljg1MDg3IDc5LjMzNjc1LC0xNDkuMTMyMjkgMzAyLjk5NTU1LC0xMTQuMzI2ODEgMzYxLjE4ODg1LDUwLjIwNDkxIDYzLjI1MDEsMTc4LjgyOTI2IC0xMTIuODE2NSwyNDAuMDU2NDUgLTExMi44MTY1LDI0MC4wNTY0NSBMIDEzMjQuOTQzLDk4Ni43ODk2MyBaIE0gNDk4LjY5MzE1LDE3NzkuODA1NCBjIDAsMCAtNy44NTI1MywtMTA2Ljg3MzMgNTAuODAxODUsLTE1NC4yNjA4IDE5NS40ODc1NiwtMTczLjAxNTggMzM3LjI4NjY1LC0zODUuMzcwNiAzNzAuODg3MjYsLTU5OC45MTY1IGwgMjA5LjIzNDE0LDEuOTkzNSBjIDMzLjM0ODQsMjA2LjU1MzcgMTgyLjUwMDYsNDQ3LjAwNDEgMzIxLjAzNzIsNTYxLjc0NzEgMTAxLjczNiw1OS4wNTI0IDk4Ljk4NDIsMTk4LjM5MzcgOTguOTg0MiwxOTguMzkzNyB6IiBmaWxsPSIjZjlmOWY5Ii8+PHBhdGggZD0iTTUyMCAxNzY5aDEwMDhxOC05Ny0xMzItMTgyLTEzMi0xMDEtMTk2LjUtMjM5LjVUMTEyMCAxMDM5SDkyOHEtMTUgMTcwLTc5LjUgMzA4LjVUNjUyIDE1ODdxLTE0MSA4NS0xMzIgMTgyem01MDQgNzRINDQ2di03NHEtNC04MCA0MS41LTEzN1Q2MTMgMTUyNHExMTctOTEgMTcxLjUtMjE3LjVUODYzIDEwMzlINTc2bDI4NC0yMzlxLTg2LTc0LTg2LTE4OCAwLTEwMyA3My0xNzd0MTc3LTc0cTEwMyAwIDE3Ni41IDc0dDczLjUgMTc3cTAgMTE0LTg2IDE4OGwyODQgMjM5aC0yODdxMjMgMTQxIDc4IDI2Ny41dDE3MiAyMTcuNXE3OSA1MSAxMjQuNSAxMDh0NDIuNSAxMzd2NzR6TTc1NiA5NzRoNTM2bC0yMjUtMTkxcTEzNC0zMSAxMzQtMTcxIDAtNzYtNTIuNS0xMjYuNVQxMDI0IDQzNXEtNzMgMC0xMjUgNTAuNVQ4NDcgNjEycTAgMTQwIDEzNCAxNzF6IiBmaWxsPSIjMTAxMDEwIi8+PC9zdmc+',
            rook: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0gNzM0LjA0OTM4LDk4MC44MDgxNiA5MzAuMDkwNzksNzg3Ljk1NTIzIGMgMCwwIC0xODkuMTMxNzMsLTgxLjU4NzI0IC03OS40MDE3NCwtMjg3Ljg1MDg3IDc5LjMzNjc1LC0xNDkuMTMyMjkgMzAyLjk5NTU1LC0xMTQuMzI2ODEgMzYxLjE4ODg1LDUwLjIwNDkxIDYzLjI1MDEsMTc4LjgyOTI2IC0xMTIuODE2NSwyNDAuMDU2NDUgLTExMi44MTY1LDI0MC4wNTY0NSBMIDEzMjQuOTQzLDk4Ni43ODk2MyBaIE0gNDk4LjY5MzE1LDE3NzkuODA1NCBjIDAsMCAtNy44NTI1MywtMTA2Ljg3MzMgNTAuODAxODUsLTE1NC4yNjA4IDE5NS40ODc1NiwtMTczLjAxNTggMzM3LjI4NjY1LC0zODUuMzcwNiAzNzAuODg3MjYsLTU5OC45MTY1IGwgMjA5LjIzNDE0LDEuOTkzNSBjIDMzLjM0ODQsMjA2LjU1MzcgMTgyLjUwMDYsNDQ3LjAwNDEgMzIxLjAzNzIsNTYxLjc0NzEgMTAxLjczNiw1OS4wNTI0IDk4Ljk4NDIsMTk4LjM5MzcgOTguOTg0MiwxOTguMzkzNyB6IiBmaWxsPSIjZjlmOWY5Ii8+PHBhdGggZD0iTTUyMCAxNzY5aDEwMDhxOC05Ny0xMzItMTgyLTEzMi0xMDEtMTk2LjUtMjM5LjVUMTEyMCAxMDM5SDkyOHEtMTUgMTcwLTc5LjUgMzA4LjVUNjUyIDE1ODdxLTE0MSA4NS0xMzIgMTgyem01MDQgNzRINDQ2di03NHEtNC04MCA0MS41LTEzN1Q2MTMgMTUyNHExMTctOTEgMTcxLjUtMjE3LjVUODYzIDEwMzlINTc2bDI4NC0yMzlxLTg2LTc0LTg2LTE4OCAwLTEwMyA3My0xNzd0MTc3LTc0cTEwMyAwIDE3Ni41IDc0dDczLjUgMTc3cTAgMTE0LTg2IDE4OGwyODQgMjM5aC0yODdxMjMgMTQxIDc4IDI2Ny41dDE3MiAyMTcuNXE3OSA1MSAxMjQuNSAxMDh0NDIuNSAxMzd2NzR6TTc1NiA5NzRoNTM2bC0yMjUtMTkxcTEzNC0zMSAxMzQtMTcxIDAtNzYtNTIuNS0xMjYuNVQxMDI0IDQzNXEtNzMgMC0xMjUgNTAuNVQ4NDcgNjEycTAgMTQwIDEzNCAxNzF6IiBmaWxsPSIjMTAxMDEwIi8+PC9zdmc+',
            queen: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0gNzM0LjA0OTM4LDk4MC44MDgxNiA5MzAuMDkwNzksNzg3Ljk1NTIzIGMgMCwwIC0xODkuMTMxNzMsLTgxLjU4NzI0IC03OS40MDE3NCwtMjg3Ljg1MDg3IDc5LjMzNjc1LC0xNDkuMTMyMjkgMzAyLjk5NTU1LC0xMTQuMzI2ODEgMzYxLjE4ODg1LDUwLjIwNDkxIDYzLjI1MDEsMTc4LjgyOTI2IC0xMTIuODE2NSwyNDAuMDU2NDUgLTExMi44MTY1LDI0MC4wNTY0NSBMIDEzMjQuOTQzLDk4Ni43ODk2MyBaIE0gNDk4LjY5MzE1LDE3NzkuODA1NCBjIDAsMCAtNy44NTI1MywtMTA2Ljg3MzMgNTAuODAxODUsLTE1NC4yNjA4IDE5NS40ODc1NiwtMTczLjAxNTggMzM3LjI4NjY1LC0zODUuMzcwNiAzNzAuODg3MjYsLTU5OC45MTY1IGwgMjA5LjIzNDE0LDEuOTkzNSBjIDMzLjM0ODQsMjA2LjU1MzcgMTgyLjUwMDYsNDQ3LjAwNDEgMzIxLjAzNzIsNTYxLjc0NzEgMTAxLjczNiw1OS4wNTI0IDk4Ljk4NDIsMTk4LjM5MzcgOTguOTg0MiwxOTguMzkzNyB6IiBmaWxsPSIjZjlmOWY5Ii8+PHBhdGggZD0iTTUyMCAxNzY5aDEwMDhxOC05Ny0xMzItMTgyLTEzMi0xMDEtMTk2LjUtMjM5LjVUMTEyMCAxMDM5SDkyOHEtMTUgMTcwLTc5LjUgMzA4LjVUNjUyIDE1ODdxLTE0MSA4NS0xMzIgMTgyem01MDQgNzRINDQ2di03NHEtNC04MCA0MS41LTEzN1Q2MTMgMTUyNHExMTctOTEgMTcxLjUtMjE3LjVUODYzIDEwMzlINTc2bDI4NC0yMzlxLTg2LTc0LTg2LTE4OCAwLTEwMyA3My0xNzd0MTc3LTc0cTEwMyAwIDE3Ni41IDc0dDczLjUgMTc3cTAgMTE0LTg2IDE4OGwyODQgMjM5aC0yODdxMjMgMTQxIDc4IDI2Ny41dDE3MiAyMTcuNXE3OSA1MSAxMjQuNSAxMDh0NDIuNSAxMzd2NzR6TTc1NiA5NzRoNTM2bC0yMjUtMTkxcTEzNC0zMSAxMzQtMTcxIDAtNzYtNTIuNS0xMjYuNVQxMDI0IDQzNXEtNzMgMC0xMjUgNTAuNVQ4NDcgNjEycTAgMTQwIDEzNCAxNzF6IiBmaWxsPSIjMTAxMDEwIi8+PC9zdmc+',
            king: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0gNzM0LjA0OTM4LDk4MC44MDgxNiA5MzAuMDkwNzksNzg3Ljk1NTIzIGMgMCwwIC0xODkuMTMxNzMsLTgxLjU4NzI0IC03OS40MDE3NCwtMjg3Ljg1MDg3IDc5LjMzNjc1LC0xNDkuMTMyMjkgMzAyLjk5NTU1LC0xMTQuMzI2ODEgMzYxLjE4ODg1LDUwLjIwNDkxIDYzLjI1MDEsMTc4LjgyOTI2IC0xMTIuODE2NSwyNDAuMDU2NDUgLTExMi44MTY1LDI0MC4wNTY0NSBMIDEzMjQuOTQzLDk4Ni43ODk2MyBaIE0gNDk4LjY5MzE1LDE3NzkuODA1NCBjIDAsMCAtNy44NTI1MywtMTA2Ljg3MzMgNTAuODAxODUsLTE1NC4yNjA4IDE5NS40ODc1NiwtMTczLjAxNTggMzM3LjI4NjY1LC0zODUuMzcwNiAzNzAuODg3MjYsLTU5OC45MTY1IGwgMjA5LjIzNDE0LDEuOTkzNSBjIDMzLjM0ODQsMjA2LjU1MzcgMTgyLjUwMDYsNDQ3LjAwNDEgMzIxLjAzNzIsNTYxLjc0NzEgMTAxLjczNiw1OS4wNTI0IDk4Ljk4NDIsMTk4LjM5MzcgOTguOTg0MiwxOTguMzkzNyB6IiBmaWxsPSIjZjlmOWY5Ii8+PHBhdGggZD0iTTUyMCAxNzY5aDEwMDhxOC05Ny0xMzItMTgyLTEzMi0xMDEtMTk2LjUtMjM5LjVUMTEyMCAxMDM5SDkyOHEtMTUgMTcwLTc5LjUgMzA4LjVUNjUyIDE1ODdxLTE0MSA4NS0xMzIgMTgyem01MDQgNzRINDQ2di03NHEtNC04MCA0MS41LTEzN1Q2MTMgMTUyNHExMTctOTEgMTcxLjUtMjE3LjVUODYzIDEwMzlINTc2bDI4NC0yMzlxLTg2LTc0LTg2LTE4OCAwLTEwMyA3My0xNzd0MTc3LTc0cTEwMyAwIDE3Ni41IDc0dDczLjUgMTc3cTAgMTE0LTg2IDE4OGwyODQgMjM5aC0yODdxMjMgMTQxIDc4IDI2Ny41dDE3MiAyMTcuNXE3OSA1MSAxMjQuNSAxMDh0NDIuNSAxMzd2NzR6TTc1NiA5NzRoNTM2bC0yMjUtMTkxcTEzNC0zMSAxMzQtMTcxIDAtNzYtNTIuNS0xMjYuNVQxMDI0IDQzNXEtNzMgMC0xMjUgNTAuNVQ4NDcgNjEycTAgMTQwIDEzNCAxNzF6IiBmaWxsPSIjMTAxMDEwIi8+PC9zdmc+',
        },

        black: {
            pawn: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0gNzM0LjA0OTM4LDk4MC44MDgxNiA5MzAuMDkwNzksNzg3Ljk1NTIzIGMgMCwwIC0xODkuMTMxNzMsLTgxLjU4NzI0IC03OS40MDE3NCwtMjg3Ljg1MDg3IDc5LjMzNjc1LC0xNDkuMTMyMjkgMzAyLjk5NTU1LC0xMTQuMzI2ODEgMzYxLjE4ODg1LDUwLjIwNDkxIDYzLjI1MDEsMTc4LjgyOTI2IC0xMTIuODE2NSwyNDAuMDU2NDUgLTExMi44MTY1LDI0MC4wNTY0NSBMIDEzMjQuOTQzLDk4Ni43ODk2MyBaIE0gNDk4LjY5MzE1LDE3NzkuODA1NCBjIDAsMCAtNy44NTI1MywtMTA2Ljg3MzMgNTAuODAxODUsLTE1NC4yNjA4IDE5NS40ODc1NiwtMTczLjAxNTggMzM3LjI4NjY1LC0zODUuMzcwNiAzNzAuODg3MjYsLTU5OC45MTY1IGwgMjA5LjIzNDE0LDEuOTkzNSBjIDMzLjM0ODQsMjA2LjU1MzcgMTgyLjUwMDYsNDQ3LjAwNDEgMzIxLjAzNzIsNTYxLjc0NzEgMTAxLjczNiw1OS4wNTI0IDk4Ljk4NDIsMTk4LjM5MzcgOTguOTg0MiwxOTguMzkzNyB6IiBmaWxsPSIjZjlmOWY5Ii8+PHBhdGggZD0iTTUyMCAxNzY5aDEwMDhxOC05Ny0xMzItMTgyLTEzMi0xMDEtMTk2LjUtMjM5LjVUMTEyMCAxMDM5SDkyOHEtMTUgMTcwLTc5LjUgMzA4LjVUNjUyIDE1ODdxLTE0MSA4NS0xMzIgMTgyem01MDQgNzRINDQ2di03NHEtNC04MCA0MS41LTEzN1Q2MTMgMTUyNHExMTctOTEgMTcxLjUtMjE3LjVUODYzIDEwMzlINTc2bDI4NC0yMzlxLTg2LTc0LTg2LTE4OCAwLTEwMyA3My0xNzd0MTc3LTc0cTEwMyAwIDE3Ni41IDc0dDczLjUgMTc3cTAgMTE0LTg2IDE4OGwyODQgMjM5aC0yODdxMjMgMTQxIDc4IDI2Ny41dDE3MiAyMTcuNXE3OSA1MSAxMjQuNSAxMDh0NDIuNSAxMzd2NzR6TTc1NiA5NzRoNTM2bC0yMjUtMTkxcTEzNC0zMSAxMzQtMTcxIDAtNzYtNTIuNS0xMjYuNVQxMDI0IDQzNXEtNzMgMC0xMjUgNTAuNVQ4NDcgNjEycTAgMTQwIDEzNCAxNzF6IiBmaWxsPSIjMTAxMDEwIi8+PC9zdmc+',
            bishop: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0gNzM0LjA0OTM4LDk4MC44MDgxNiA5MzAuMDkwNzksNzg3Ljk1NTIzIGMgMCwwIC0xODkuMTMxNzMsLTgxLjU4NzI0IC03OS40MDE3NCwtMjg3Ljg1MDg3IDc5LjMzNjc1LC0xNDkuMTMyMjkgMzAyLjk5NTU1LC0xMTQuMzI2ODEgMzYxLjE4ODg1LDUwLjIwNDkxIDYzLjI1MDEsMTc4LjgyOTI2IC0xMTIuODE2NSwyNDAuMDU2NDUgLTExMi44MTY1LDI0MC4wNTY0NSBMIDEzMjQuOTQzLDk4Ni43ODk2MyBaIE0gNDk4LjY5MzE1LDE3NzkuODA1NCBjIDAsMCAtNy44NTI1MywtMTA2Ljg3MzMgNTAuODAxODUsLTE1NC4yNjA4IDE5NS40ODc1NiwtMTczLjAxNTggMzM3LjI4NjY1LC0zODUuMzcwNiAzNzAuODg3MjYsLTU5OC45MTY1IGwgMjA5LjIzNDE0LDEuOTkzNSBjIDMzLjM0ODQsMjA2LjU1MzcgMTgyLjUwMDYsNDQ3LjAwNDEgMzIxLjAzNzIsNTYxLjc0NzEgMTAxLjczNiw1OS4wNTI0IDk4Ljk4NDIsMTk4LjM5MzcgOTguOTg0MiwxOTguMzkzNyB6IiBmaWxsPSIjZjlmOWY5Ii8+PHBhdGggZD0iTTUyMCAxNzY5aDEwMDhxOC05Ny0xMzItMTgyLTEzMi0xMDEtMTk2LjUtMjM5LjVUMTEyMCAxMDM5SDkyOHEtMTUgMTcwLTc5LjUgMzA4LjVUNjUyIDE1ODdxLTE0MSA4NS0xMzIgMTgyem01MDQgNzRINDQ2di03NHEtNC04MCA0MS41LTEzN1Q2MTMgMTUyNHExMTctOTEgMTcxLjUtMjE3LjVUODYzIDEwMzlINTc2bDI4NC0yMzlxLTg2LTc0LTg2LTE4OCAwLTEwMyA3My0xNzd0MTc3LTc0cTEwMyAwIDE3Ni41IDc0dDczLjUgMTc3cTAgMTE0LTg2IDE4OGwyODQgMjM5aC0yODdxMjMgMTQxIDc4IDI2Ny41dDE3MiAyMTcuNXE3OSA1MSAxMjQuNSAxMDh0NDIuNSAxMzd2NzR6TTc1NiA5NzRoNTM2bC0yMjUtMTkxcTEzNC0zMSAxMzQtMTcxIDAtNzYtNTIuNS0xMjYuNVQxMDI0IDQzNXEtNzMgMC0xMjUgNTAuNVQ4NDcgNjEycTAgMTQwIDEzNCAxNzF6IiBmaWxsPSIjMTAxMDEwIi8+PC9zdmc+',
            knigts: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0gNzM0LjA0OTM4LDk4MC44MDgxNiA5MzAuMDkwNzksNzg3Ljk1NTIzIGMgMCwwIC0xODkuMTMxNzMsLTgxLjU4NzI0IC03OS40MDE3NCwtMjg3Ljg1MDg3IDc5LjMzNjc1LC0xNDkuMTMyMjkgMzAyLjk5NTU1LC0xMTQuMzI2ODEgMzYxLjE4ODg1LDUwLjIwNDkxIDYzLjI1MDEsMTc4LjgyOTI2IC0xMTIuODE2NSwyNDAuMDU2NDUgLTExMi44MTY1LDI0MC4wNTY0NSBMIDEzMjQuOTQzLDk4Ni43ODk2MyBaIE0gNDk4LjY5MzE1LDE3NzkuODA1NCBjIDAsMCAtNy44NTI1MywtMTA2Ljg3MzMgNTAuODAxODUsLTE1NC4yNjA4IDE5NS40ODc1NiwtMTczLjAxNTggMzM3LjI4NjY1LC0zODUuMzcwNiAzNzAuODg3MjYsLTU5OC45MTY1IGwgMjA5LjIzNDE0LDEuOTkzNSBjIDMzLjM0ODQsMjA2LjU1MzcgMTgyLjUwMDYsNDQ3LjAwNDEgMzIxLjAzNzIsNTYxLjc0NzEgMTAxLjczNiw1OS4wNTI0IDk4Ljk4NDIsMTk4LjM5MzcgOTguOTg0MiwxOTguMzkzNyB6IiBmaWxsPSIjZjlmOWY5Ii8+PHBhdGggZD0iTTUyMCAxNzY5aDEwMDhxOC05Ny0xMzItMTgyLTEzMi0xMDEtMTk2LjUtMjM5LjVUMTEyMCAxMDM5SDkyOHEtMTUgMTcwLTc5LjUgMzA4LjVUNjUyIDE1ODdxLTE0MSA4NS0xMzIgMTgyem01MDQgNzRINDQ2di03NHEtNC04MCA0MS41LTEzN1Q2MTMgMTUyNHExMTctOTEgMTcxLjUtMjE3LjVUODYzIDEwMzlINTc2bDI4NC0yMzlxLTg2LTc0LTg2LTE4OCAwLTEwMyA3My0xNzd0MTc3LTc0cTEwMyAwIDE3Ni41IDc0dDczLjUgMTc3cTAgMTE0LTg2IDE4OGwyODQgMjM5aC0yODdxMjMgMTQxIDc4IDI2Ny41dDE3MiAyMTcuNXE3OSA1MSAxMjQuNSAxMDh0NDIuNSAxMzd2NzR6TTc1NiA5NzRoNTM2bC0yMjUtMTkxcTEzNC0zMSAxMzQtMTcxIDAtNzYtNTIuNS0xMjYuNVQxMDI0IDQzNXEtNzMgMC0xMjUgNTAuNVQ4NDcgNjEycTAgMTQwIDEzNCAxNzF6IiBmaWxsPSIjMTAxMDEwIi8+PC9zdmc+',
            rook: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0gNzM0LjA0OTM4LDk4MC44MDgxNiA5MzAuMDkwNzksNzg3Ljk1NTIzIGMgMCwwIC0xODkuMTMxNzMsLTgxLjU4NzI0IC03OS40MDE3NCwtMjg3Ljg1MDg3IDc5LjMzNjc1LC0xNDkuMTMyMjkgMzAyLjk5NTU1LC0xMTQuMzI2ODEgMzYxLjE4ODg1LDUwLjIwNDkxIDYzLjI1MDEsMTc4LjgyOTI2IC0xMTIuODE2NSwyNDAuMDU2NDUgLTExMi44MTY1LDI0MC4wNTY0NSBMIDEzMjQuOTQzLDk4Ni43ODk2MyBaIE0gNDk4LjY5MzE1LDE3NzkuODA1NCBjIDAsMCAtNy44NTI1MywtMTA2Ljg3MzMgNTAuODAxODUsLTE1NC4yNjA4IDE5NS40ODc1NiwtMTczLjAxNTggMzM3LjI4NjY1LC0zODUuMzcwNiAzNzAuODg3MjYsLTU5OC45MTY1IGwgMjA5LjIzNDE0LDEuOTkzNSBjIDMzLjM0ODQsMjA2LjU1MzcgMTgyLjUwMDYsNDQ3LjAwNDEgMzIxLjAzNzIsNTYxLjc0NzEgMTAxLjczNiw1OS4wNTI0IDk4Ljk4NDIsMTk4LjM5MzcgOTguOTg0MiwxOTguMzkzNyB6IiBmaWxsPSIjZjlmOWY5Ii8+PHBhdGggZD0iTTUyMCAxNzY5aDEwMDhxOC05Ny0xMzItMTgyLTEzMi0xMDEtMTk2LjUtMjM5LjVUMTEyMCAxMDM5SDkyOHEtMTUgMTcwLTc5LjUgMzA4LjVUNjUyIDE1ODdxLTE0MSA4NS0xMzIgMTgyem01MDQgNzRINDQ2di03NHEtNC04MCA0MS41LTEzN1Q2MTMgMTUyNHExMTctOTEgMTcxLjUtMjE3LjVUODYzIDEwMzlINTc2bDI4NC0yMzlxLTg2LTc0LTg2LTE4OCAwLTEwMyA3My0xNzd0MTc3LTc0cTEwMyAwIDE3Ni41IDc0dDczLjUgMTc3cTAgMTE0LTg2IDE4OGwyODQgMjM5aC0yODdxMjMgMTQxIDc4IDI2Ny41dDE3MiAyMTcuNXE3OSA1MSAxMjQuNSAxMDh0NDIuNSAxMzd2NzR6TTc1NiA5NzRoNTM2bC0yMjUtMTkxcTEzNC0zMSAxMzQtMTcxIDAtNzYtNTIuNS0xMjYuNVQxMDI0IDQzNXEtNzMgMC0xMjUgNTAuNVQ4NDcgNjEycTAgMTQwIDEzNCAxNzF6IiBmaWxsPSIjMTAxMDEwIi8+PC9zdmc+',
            queen: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0gNzM0LjA0OTM4LDk4MC44MDgxNiA5MzAuMDkwNzksNzg3Ljk1NTIzIGMgMCwwIC0xODkuMTMxNzMsLTgxLjU4NzI0IC03OS40MDE3NCwtMjg3Ljg1MDg3IDc5LjMzNjc1LC0xNDkuMTMyMjkgMzAyLjk5NTU1LC0xMTQuMzI2ODEgMzYxLjE4ODg1LDUwLjIwNDkxIDYzLjI1MDEsMTc4LjgyOTI2IC0xMTIuODE2NSwyNDAuMDU2NDUgLTExMi44MTY1LDI0MC4wNTY0NSBMIDEzMjQuOTQzLDk4Ni43ODk2MyBaIE0gNDk4LjY5MzE1LDE3NzkuODA1NCBjIDAsMCAtNy44NTI1MywtMTA2Ljg3MzMgNTAuODAxODUsLTE1NC4yNjA4IDE5NS40ODc1NiwtMTczLjAxNTggMzM3LjI4NjY1LC0zODUuMzcwNiAzNzAuODg3MjYsLTU5OC45MTY1IGwgMjA5LjIzNDE0LDEuOTkzNSBjIDMzLjM0ODQsMjA2LjU1MzcgMTgyLjUwMDYsNDQ3LjAwNDEgMzIxLjAzNzIsNTYxLjc0NzEgMTAxLjczNiw1OS4wNTI0IDk4Ljk4NDIsMTk4LjM5MzcgOTguOTg0MiwxOTguMzkzNyB6IiBmaWxsPSIjZjlmOWY5Ii8+PHBhdGggZD0iTTUyMCAxNzY5aDEwMDhxOC05Ny0xMzItMTgyLTEzMi0xMDEtMTk2LjUtMjM5LjVUMTEyMCAxMDM5SDkyOHEtMTUgMTcwLTc5LjUgMzA4LjVUNjUyIDE1ODdxLTE0MSA4NS0xMzIgMTgyem01MDQgNzRINDQ2di03NHEtNC04MCA0MS41LTEzN1Q2MTMgMTUyNHExMTctOTEgMTcxLjUtMjE3LjVUODYzIDEwMzlINTc2bDI4NC0yMzlxLTg2LTc0LTg2LTE4OCAwLTEwMyA3My0xNzd0MTc3LTc0cTEwMyAwIDE3Ni41IDc0dDczLjUgMTc3cTAgMTE0LTg2IDE4OGwyODQgMjM5aC0yODdxMjMgMTQxIDc4IDI2Ny41dDE3MiAyMTcuNXE3OSA1MSAxMjQuNSAxMDh0NDIuNSAxMzd2NzR6TTc1NiA5NzRoNTM2bC0yMjUtMTkxcTEzNC0zMSAxMzQtMTcxIDAtNzYtNTIuNS0xMjYuNVQxMDI0IDQzNXEtNzMgMC0xMjUgNTAuNVQ4NDcgNjEycTAgMTQwIDEzNCAxNzF6IiBmaWxsPSIjMTAxMDEwIi8+PC9zdmc+',
            king: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0gNzM0LjA0OTM4LDk4MC44MDgxNiA5MzAuMDkwNzksNzg3Ljk1NTIzIGMgMCwwIC0xODkuMTMxNzMsLTgxLjU4NzI0IC03OS40MDE3NCwtMjg3Ljg1MDg3IDc5LjMzNjc1LC0xNDkuMTMyMjkgMzAyLjk5NTU1LC0xMTQuMzI2ODEgMzYxLjE4ODg1LDUwLjIwNDkxIDYzLjI1MDEsMTc4LjgyOTI2IC0xMTIuODE2NSwyNDAuMDU2NDUgLTExMi44MTY1LDI0MC4wNTY0NSBMIDEzMjQuOTQzLDk4Ni43ODk2MyBaIE0gNDk4LjY5MzE1LDE3NzkuODA1NCBjIDAsMCAtNy44NTI1MywtMTA2Ljg3MzMgNTAuODAxODUsLTE1NC4yNjA4IDE5NS40ODc1NiwtMTczLjAxNTggMzM3LjI4NjY1LC0zODUuMzcwNiAzNzAuODg3MjYsLTU5OC45MTY1IGwgMjA5LjIzNDE0LDEuOTkzNSBjIDMzLjM0ODQsMjA2LjU1MzcgMTgyLjUwMDYsNDQ3LjAwNDEgMzIxLjAzNzIsNTYxLjc0NzEgMTAxLjczNiw1OS4wNTI0IDk4Ljk4NDIsMTk4LjM5MzcgOTguOTg0MiwxOTguMzkzNyB6IiBmaWxsPSIjZjlmOWY5Ii8+PHBhdGggZD0iTTUyMCAxNzY5aDEwMDhxOC05Ny0xMzItMTgyLTEzMi0xMDEtMTk2LjUtMjM5LjVUMTEyMCAxMDM5SDkyOHEtMTUgMTcwLTc5LjUgMzA4LjVUNjUyIDE1ODdxLTE0MSA4NS0xMzIgMTgyem01MDQgNzRINDQ2di03NHEtNC04MCA0MS41LTEzN1Q2MTMgMTUyNHExMTctOTEgMTcxLjUtMjE3LjVUODYzIDEwMzlINTc2bDI4NC0yMzlxLTg2LTc0LTg2LTE4OCAwLTEwMyA3My0xNzd0MTc3LTc0cTEwMyAwIDE3Ni41IDc0dDczLjUgMTc3cTAgMTE0LTg2IDE4OGwyODQgMjM5aC0yODdxMjMgMTQxIDc4IDI2Ny41dDE3MiAyMTcuNXE3OSA1MSAxMjQuNSAxMDh0NDIuNSAxMzd2NzR6TTc1NiA5NzRoNTM2bC0yMjUtMTkxcTEzNC0zMSAxMzQtMTcxIDAtNzYtNTIuNS0xMjYuNVQxMDI0IDQzNXEtNzMgMC0xMjUgNTAuNVQ4NDcgNjEycTAgMTQwIDEzNCAxNzF6IiBmaWxsPSIjMTAxMDEwIi8+PC9zdmc+',
        }
    }
}