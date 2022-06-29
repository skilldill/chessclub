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

export const INITIAL_CELLS_TEST: Cell[][] = [
    [
        { figure: { type: 'rook', color: 'black' } },
        { figure: { type: 'king', color: 'black' } },
        { figure: { type: 'knigts', color: 'black' } },
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
        { figure: { type: 'rook', color: 'white' } },
        { figure: { type: 'king', color: 'white' } },
        { figure: undefined },
    ],
]

export const INITIAL_CELLS_CUSTOM_BOARD: Cell[][] = [
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
    cellSize: 100,

    figures: {
        white: {
            pawn: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0gNzM0LjA0OTM4LDk4MC44MDgxNiA5MzAuMDkwNzksNzg3Ljk1NTIzIGMgMCwwIC0xODkuMTMxNzMsLTgxLjU4NzI0IC03OS40MDE3NCwtMjg3Ljg1MDg3IDc5LjMzNjc1LC0xNDkuMTMyMjkgMzAyLjk5NTU1LC0xMTQuMzI2ODEgMzYxLjE4ODg1LDUwLjIwNDkxIDYzLjI1MDEsMTc4LjgyOTI2IC0xMTIuODE2NSwyNDAuMDU2NDUgLTExMi44MTY1LDI0MC4wNTY0NSBMIDEzMjQuOTQzLDk4Ni43ODk2MyBaIE0gNDk4LjY5MzE1LDE3NzkuODA1NCBjIDAsMCAtNy44NTI1MywtMTA2Ljg3MzMgNTAuODAxODUsLTE1NC4yNjA4IDE5NS40ODc1NiwtMTczLjAxNTggMzM3LjI4NjY1LC0zODUuMzcwNiAzNzAuODg3MjYsLTU5OC45MTY1IGwgMjA5LjIzNDE0LDEuOTkzNSBjIDMzLjM0ODQsMjA2LjU1MzcgMTgyLjUwMDYsNDQ3LjAwNDEgMzIxLjAzNzIsNTYxLjc0NzEgMTAxLjczNiw1OS4wNTI0IDk4Ljk4NDIsMTk4LjM5MzcgOTguOTg0MiwxOTguMzkzNyB6IiBmaWxsPSIjZjlmOWY5Ii8+PHBhdGggZD0iTTUyMCAxNzY5aDEwMDhxOC05Ny0xMzItMTgyLTEzMi0xMDEtMTk2LjUtMjM5LjVUMTEyMCAxMDM5SDkyOHEtMTUgMTcwLTc5LjUgMzA4LjVUNjUyIDE1ODdxLTE0MSA4NS0xMzIgMTgyem01MDQgNzRINDQ2di03NHEtNC04MCA0MS41LTEzN1Q2MTMgMTUyNHExMTctOTEgMTcxLjUtMjE3LjVUODYzIDEwMzlINTc2bDI4NC0yMzlxLTg2LTc0LTg2LTE4OCAwLTEwMyA3My0xNzd0MTc3LTc0cTEwMyAwIDE3Ni41IDc0dDczLjUgMTc3cTAgMTE0LTg2IDE4OGwyODQgMjM5aC0yODdxMjMgMTQxIDc4IDI2Ny41dDE3MiAyMTcuNXE3OSA1MSAxMjQuNSAxMDh0NDIuNSAxMzd2NzR6TTc1NiA5NzRoNTM2bC0yMjUtMTkxcTEzNC0zMSAxMzQtMTcxIDAtNzYtNTIuNS0xMjYuNVQxMDI0IDQzNXEtNzMgMC0xMjUgNTAuNVQ4NDcgNjEycTAgMTQwIDEzNCAxNzF6IiBmaWxsPSIjMTAxMDEwIi8+PC9zdmc+',
            bishop: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0gOTQ4LjE4LDM2Ni4zNDQgMSwtMTM5LjEwMiAxNDguMTM1LC02Ljk1IDAuMjU0LDE0Ni40MDggeiBNIDU2NC4zNTMsODU5LjcgYyAxMTMuNDAzNjYsLTI2Ni4yODc1MSA0NTUuOTgxLC00NDIuNzgxIDQ1NS45ODEsLTQ0Mi43ODEgMCwwIDM5MS43ODUsMTc2LjM3MTQyIDQ3NS45NjMsNTAyLjU3OCAtOC44NDYsMjA4Ljc0NzMgLTE4My43NjUsMzMxLjMyOCAtMTgzLjc2NSwzMzEuMzI4IGwgMjcuMDE4OCwyMjEuNSAtNjUyLjk2MjU1LDYgNDYuMDE4NzUsLTIzMy41IGMgMCwwIC0yMjkuNzkwOTQsLTE3MC44MTEzIC0xNjguMjU0LC0zODUuMTI1IHogbSAtMTAxLjc5NSw3ODkuODg3IGMgMTc0Ljk3MDgsNS45NzM4IDM1NS4yNTQ4OCwyMy4wMzE3IDQyNS4yODYsLTE0MS44ODQgbCA5Mi4zNTQsMC43MjUgYyAwLDAgMC4wNywxOTAuMDE0IC04Ny45MTMsMjQ1LjY1MiAtMTYyLjc5NzE0LDEwMi45NDg1IC02MjQuODQ3LDM4LjEyOCAtNjI0Ljg0NywzOC4xMjggMCwwIC0xNS43MjE3NSwtMTQ2LjEwODggMTk1LjEyLC0xNDIuNjIxIHogbSA2MzEuMjk2LDM3LjQ5MyAtMzYuMDI1LC0xODQuOTIzIDEwMS44ODcsNS4yMjQgYyAwLDAgMjIuNjEyLDE1Mi43OTIgMzE1LjEyNCwxMzAuOTU4IDM4MS4yNDI3LC0xNy4yMzcyIDMxNy45MDMsMTUyLjg2OSAzMTcuOTAzLDE1Mi44NjkgbCAtNDgzLjE0Nyw1IHoiIGZpbGw9IiNmOWY5ZjkiLz48cGF0aCBkPSJNMTAyNCAzNTZxNjYgMCA2NC02NiAxLTU1LTY0LTU1LTY2IDAtNjQgNTUtMyA2NiA2NCA2NnptMCAxMjA0cTAgMTE0LTEwMSAxOTguNVQ3MDAgMTg0M0gyMDVxMC0xMTcgNjUtMTc5dDE0Mi02MmgyNTBxNTEgMCA4OC03dDcxLTYwcTEyLTIwIDEwLTE2aDc2cS03IDIxLTMgMTMtNDUgMTA1LTEwOSAxMjQuNVQ2NDkgMTY3Nkg0MDlxLTUyIDAtODYgNDB0LTM0IDUzaDQyNHE2NiAwIDE1OC41LTY1dDkzLjUtMTg1SDYyNHE2Ny0xMTYgNzItMjI5LTExNC0xMTktMTYyLTIyMy41VDUyOCA4NDNxMzMtOTYgMTE4LTE4OS41VDk1OCA0MDdxLTE3LTExLTQ2LTM2dC0yOS03OXEwLTU4IDQxLTk2dDEwMC0zOHE1OCAwIDk5LjUgMzh0NDEuNSA5NnEwIDU0LTI5LjUgNzl0LTQ1LjUgMzZxMjI2IDE1MyAzMTEgMjQ2LjVUMTUyMCA4NDNxNDIgMTE5LTYgMjIzLjVUMTM1MiAxMjkwcTQgMTEzIDcyIDIyOWgtMzQxcTAgMTIwIDkzIDE4NXQxNTkgNjVoNDI0cTAtMTMtMzQuNS01M3QtODUuNS00MGgtMjQwcS04MyAwLTE0Ni41LTE5LjVUMTE0NCAxNTMycTQgOC0zLTEzaDc2cS0yLTQgMTAgMTYgMzMgNTMgNzAgNjB0ODkgN2gyNTBxNzYgMCAxNDEuNSA2MnQ2NS41IDE3OWgtNDk1cS0xMjMgMC0yMjMuNS04NC41VDEwMjQgMTU2MHptMC0xMTRoMjgzcS0yOC04NC0yOS0xNTQtMTIwLTQxLTI1NC0zOC0xMzUtMy0yNTQgMzgtMiA3MC0yOSAxNTR6bTAtMjY3cTE1OS0xIDI4NSA0MiAxODktMTgwIDE0Mi0zNDYtNjAtMTkzLTQyNy00MzEtMzY4IDIzOC00MjcgNDMxLTQ4IDE2NiAxNDIgMzQ2IDEyNS00MyAyODUtNDJ6bS00Ny0zNjFWNzE0aDk0djEwNGg5NXY4OWgtOTV2MTY1aC05NFY5MDdoLTk1di04OXoiIGZpbGw9IiMxMDEwMTAiLz48L3N2Zz4=',
            knigts: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0gMzUyLjA3MTkxLDg2MC42MjAyMiA3ODYuOTg0MjksLTU2OC4zNzc1MiA5NC4zNDYsMTQ3LjI3MTkxIGMgMCwwIDMzNS45NjQxLDEwMy41NTA1NiAzOTguMDk0NCwzODguODg5ODggNjIuMTMwNCwyODUuMzM5MzEgNTAuNjI0Nyw5NzMuMzc1MzEgNTAuNjI0Nyw5NzMuMzc1MzEgbCAtMTA4OC40MzE0MSw5LjIwNDUgYyAwLDAgLTM2LjgxNzk4LC0yODkuOTQxNiAxODQuMDg5ODksLTQ2MC4yMjQ3IDIyMC45MDc4NiwtMTcwLjI4MzIgMjIwLjkwNzg2LC0yMTEuNzAzNCAyMjAuOTA3ODYsLTIxMS43MDM0IDAsMCAtMjI1LjUxMDExLC03MS4zMzQ5IC0yOTQuNTQzODIsLTE2LjEwNzkgLTY5LjAzMzcxLDU1LjIyNyAtMTE3LjM1NzMsMTM4LjA2NzQgLTExNy4zNTczLDEzOC4wNjc0IGwgLTEyOC44NjI5MiwtNjYuNzMyNiA3My42MzU5NSwtODUuMTQxNSAtODcuNDQyNywtOTYuNjQ3MiAtOTQuMzQ2MDYsNTUuMjI2OSB6IiBmaWxsPSIjZjlmOWY5Ii8+PHBhdGggZD0iTSAxMTUxIDE3OCBMIDEwMzYgMzMyIEMgOTYyIDM4MiA4ODguNSA0MjkuODMzMzMgODE1LjUgNDc1LjUgQyA3NDIuNSA1MjEuMTY2NjcgNzA0IDU1NyA3MDAgNTgzIEwgMzA0IDg0NiBMIDMxNiAxMTQzIEwgNDM4IDEwNTcgTCA0ODkgMTEwNyBMIDM3NCAxMTg5IEwgNTkxIDEzMTAgTCA2NDcgMTIwOCBDIDY4NC4zMzMzMyAxMTQwIDc4MS42NjY2NyAxMTIwIDkzOSAxMTQ4IEMgOTI3IDExNjggOTA4LjY2NjY3IDExOTYuMzMzMyA4ODQgMTIzMyBDIDg1OS4zMzMzMyAxMjY5LjY2NjcgODIxIDEyOTMuMzMzMyA3NjkgMTMwNCBDIDY3OSAxMzgwIDYxOCAxNDU5LjE2NjcgNTg2IDE1NDEuNSBDIDU1NCAxNjIzLjgzMzMgNTQxIDE3MjQuMzMzMyA1NDcgMTg0MyBMIDE3ODkgMTg0MyBDIDE3NjUuNjY2NyAxNzg4LjMzMzMgMTc0Ni41IDE3MjQuODMzMyAxNzMxLjUgMTY1Mi41IEMgMTcxNi41IDE1ODAuMTY2NyAxNzE1IDE1MDEuMzMzMyAxNzI3IDE0MTYgQyAxNzU1LjY2NjcgMTE3Ny4zMzMzIDE3MzkuODMzMyA5NzYuMTY2NjcgMTY3OS41IDgxMi41IEMgMTYxOS4xNjY3IDY0OC44MzMzMyAxNDc1IDUwOS42NjY2NyAxMjQ3IDM5NSBMIDExNTEgMTc4IHogTSAxMTM0IDMyMyBMIDExOTMgNDU2IEMgMTMxMi4zMzMzIDUwOS4zMzMzMyAxMzk5LjY2NjcgNTcyIDE0NTUgNjQ0IEMgMTUxMC4zMzMzIDcxNiAxNTU1IDc5NCAxNTg5IDg3OCBDIDE2MTUuNjY2NyA5NzQuNjY2NjcgMTYyOS4xNjY3IDEwNTguODMzMyAxNjI5LjUgMTEzMC41IEMgMTYyOS44MzMzIDEyMDIuMTY2NyAxNjI2LjgzMzMgMTI3MC41IDE2MjAuNSAxMzM1LjUgQyAxNjE0LjE2NjcgMTQwMC41IDE2MTAgMTQ2Ni44MzMzIDE2MDggMTUzNC41IEMgMTYwNiAxNjAyLjE2NjcgMTYxNi42NjY3IDE2ODAuMzMzMyAxNjQwIDE3NjkgTCA2MjEgMTc2OSBDIDYxNyAxNjg1IDYzMyAxNjEwLjUgNjY5IDE1NDUuNSBDIDcwNSAxNDgwLjUgNzUzLjY2NjY3IDE0MjEuNjY2NyA4MTUgMTM2OSBDIDg5MyAxMzQ3IDk0My42NjY2NyAxMzEyLjgzMzMgOTY3IDEyNjYuNSBDIDk5MC4wNDUyIDEyMjAuNzM4OCAxMDE5LjkzMTMgMTE3Ny4wOTQ4IDEwNTYuNjMyOCAxMTM1LjU2MDUgQyAxMDcwLjQyNiAxMTI1Ljg0NjcgMTA4NC4zMjIzIDExMjAuNTYyOCAxMDk0LjUgMTEyMC41IEMgMTEwNC44ODEzIDExMjAuNDM2IDExMTYgMTEyMSAxMTI4IDExMTkgQyAxMTgwIDExMTEuNjY2NyAxMjIyLjgzMzMgMTA4My4zMzMzIDEyNTYuNSAxMDM0IEMgMTI5MC4xNjY3IDk4NC42NjY2NyAxMzA3LjY2NjcgOTI5LjY2NjY3IDEzMDkgODY5IEwgMTI5MCA4MDIgQyAxMjUzLjMzMzMgOTYxLjMzMzMzIDExOTAuNjY2NyAxMDQ3IDExMDIgMTA1OSBDIDEwODggMTA2MSAxMDczIDEwNjIuODMzMyAxMDU3IDEwNjQuNSBDIDEwNDEuMjgzMiAxMDY2LjEzNzIgMTAyMy45NTQ3IDEwNzUuMDI5NyAxMDA1LjAyMTUgMTA5MS4xNDA2IEMgOTYzLjkwMjE1IDEwNjYuMjU0NSA5MTcuODk1MzkgMTA1NS44NzMzIDg2NyAxMDYwIEMgNzkzIDEwNjYgNzM4IDEwNzUgNzAyIDEwODcgTCA1OTMuNSAxMTYwIEwgNTU1IDEyMDUgTCA1MDggMTE3NyBMIDU4NiAxMTEyIEwgNDQ4IDk2OCBMIDM4NCAxMDA5IEwgMzgwIDg4NCBMIDc0NiA2NDMgQyA3NjAuNjY2NjcgNjA5IDgwNC4zMzMzMyA1NjkgODc3IDUyMyBDIDk0OS42NjY2NyA0NzcgMTAxOSA0MzMuMzMzMzMgMTA4NSAzOTIgTCAxMTM0IDMyMyB6IE0gOTYwLjQ1NzAzIDU2My45Mzc1IEMgOTUzLjc3NzM0IDU2My45NTgwMSA5NDcuNjI1IDU2Ni4zMTI1IDk0MiA1NzEgTCA4MjYgNjcxIEwgMTAzOCA2NzMgQyAxMDYwLjY2NjcgNjczIDEwNTUuMzMzMyA2NTEuODMzMzMgMTAyMiA2MDkuNSBDIDk5OC4wNDE2NyA1NzkuMDcyOTIgOTc3LjUyNzM0IDU2My44ODUwOSA5NjAuNDU3MDMgNTYzLjkzNzUgeiBNIDUwMiA4NjggTCA0NjkgODcyIEwgNDM2IDkyOCBMIDQ5MyA5NTQgTCA1MzkgODk5IEwgNTAyIDg2OCB6ICIgZmlsbD0iIzEwMTAxMCIvPjwvc3ZnPg==',
            rook: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0gNDM0LjkxMjM2LDE4MDQuMDgwOSAxNi4xMDc4NiwtMjExLjcwMzQgMTUxLjg3NDE2LC0xMTUuMDU2MiA1MC42MjQ3MiwtNjg4LjAzNTkxIC0xNDcuMjcxOTEsLTExNS4wNTYxOCAtNi45MDMzNywtMjc2LjEzNDgzIDIwOS40MDIyNSwtMi4zMDExMiA0LjYwMjI0LDEzOC4wNjc0MSAxOTcuODk2NjMsMi4zMDExMyA2LjkwMzM3LC0xNDAuMzY4NTQgMjExLjcwMzM5LC0yLjMwMTEzIDEzLjgwNjcsMTQ0Ljk3MDc5IDE5My4yOTQ0LC00LjYwMjI1IDQuNjAyMywtMTM4LjA2NzQxIGggMjA0LjggbCAtNi45MDM0LDI4NS4zMzkzMiAtMTQ0Ljk3MDgsMTA1Ljg1MTY5IDQxLjQyMDIsNjkyLjYzODIzIDE3Mi41ODQzLDEyNC4yNjA2IDE4LjQwOSwyMDcuMTAxMiB6IiBmaWxsPSIjZjlmOWY5Ii8+PHBhdGggZD0iTTEwMjQgMTUwMUg2NDNsNS03NGg3NTJsNSA3NHptMC02NjFINjkybDUtNzRoNjU0bDUgNzR6bTAgMTAwM0gzODNsMjktMjY0IDE1OS0xMTggNTAtNjU5LTE0OS0xMDctMTctMzQxaDI4OXYxNDdoMTM3VjM1NGgyODZ2MTQ3aDEzN1YzNTRoMjg5bC0xNyAzNDEtMTQ5IDEwNyA1MCA2NTkgMTU5IDExOCAyOSAyNjR6bTAtNzRoNTU3bC0xNS0xNDktMTYxLTExOS01NC03MzUgMTUyLTEwOSAxMy0yMzBoLTEzOHYxNDhoLTI4NVY0MjdIOTU1djE0OEg2NzBWNDI3SDUzMmwxMyAyMzAgMTUyIDEwOS01NCA3MzUtMTYxIDExOS0xNSAxNDl6IiBmaWxsPSIjMTAxMDEwIi8+PC9zdmc+',
            queen: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0gNTA4LjU0ODMxLDE4MTUuNTg2NSA1NTYuODcxOTEsMTQ1OC45MTI0IDM0MC41NjYyOSw5MDQuMzQxNTcgMjA0LjgsODgzLjYzMTQ2IGwgLTE2LjEwNzg3LC0xMjYuNTYxOCAxMTIuNzU1MDYsLTQzLjcyMTM1IDc4LjIzODIsNzMuNjM1OTYgLTE4LjQwODk5LDk4Ljk0ODMxIDI0Ni4yMjAyMywxOTcuODk2NjIgMTEyLjc1NTA2LC01NjguMzc3NTEgLTg1LjE0MTU4LC04Ny40NDI3IDc4LjIzODIsLTEwOC4xNTI4MSAxMTIuNzU1MDYsNDMuNzIxMzUgLTIzLjAxMTI0LDE2MS4wNzg2NSAyMjMuMjA4OTcsNDc0LjAzMTQ2IDI0My45MTkxLC00OTAuMTM5MzMgLTY2LjczMjYsLTEwNS44NTE2OCA5Mi4wNDUsLTkyLjA0NDk0IDEwNS44NTE3LDczLjYzNTk1IC02NC40MzE1LDE0OS41NzMwMyAxMDMuNTUwNiw1MjkuMjU4NDMgMjYwLjAyNjksLTE2MS4wNzg2NSAtMTYuMTA3OCwtMTQyLjY2OTY2IDEzMS4xNjQsLTQ2LjAyMjQ4IDU3LjUyODEsMTMxLjE2NDA1IC0yMDcuMTAxMSwxMDMuNTUwNTYgLTE3NC44ODU0LDUyOS4yNTgzOCA0OC4zMjM2LDMwOC4zNTA2IHoiIGZpbGw9IiNmOWY5ZjkiLz48cGF0aCBkPSJtMTAyNCAxNzY5aDQ3OHEtNTMtMTMwLTQzLTI4MC0xMDAtMzktMjEzLTY3LjV0LTIyMi0yOC41cS0xMTAgMC0yMjMgMjguNXQtMjEyIDY3LjVxOSAxNTAtNDMgMjgwem0wLTQ1MHExMTEgMCAyMjMuNSAyNi41dDIyMC41IDY3LjVxMTctMTA1IDYwLjUtMjEyLjV0MTA1LjUtMjEyLjVsLTIyMCAxNTUtMTIzLTYwMS0yNjcgNTU1LTI2Ny01NTUtMTIzIDYwMS0yMjAtMTU1cTYxIDEwNSAxMDQuNSAyMTIuNXQ2MS41IDIxMi41cTEwOC00MSAyMjAuNS02Ny41dDIyMy41LTI2LjV6bTAgNTI0aC01ODNxMTE0LTIzMSA1Ny41LTQ1Ni41dC0yMDIuNS00NDkuNXEtMTIgMi0xOSAyLTU0IDAtOTIuNS0zOC41dC0zOC41LTkyLjUgMzguNS05Mi41IDkyLjUtMzguNSA5Mi41IDM4LjUgMzguNSA5Mi41cTAgMjAtNiAzOC00IDE0LTE1IDMzbDE5NiAxMzkgMTAwLTQ4NnEtNjQtMzEtNzItMTAzLTUtNDQgMjktOTF0ODgtNTNxNTQtNSA5NiAyOXQ0OCA4OHE3IDY4LTQ2IDExNGwxOTggNDEyIDE5OC00MTJxLTU0LTQ2LTQ2LTExNCA2LTU0IDQ4LTg4dDk2LTI5cTU0IDYgODcuNSA1M3QyOS41IDkxcS05IDcyLTcyIDEwM2wxMDAgNDg2IDE5Ni0xMzlxLTEyLTE5LTE1LTMzLTYtMTgtNi0zOCAwLTU0IDM4LjUtOTIuNXQ5Mi41LTM4LjUgOTIuNSAzOC41IDM4LjUgOTIuNS0zOC41IDkyLjUtOTIuNSAzOC41cS03IDAtMTktMi0xNDcgMjI0LTIwMyA0NDkuNXQ1OCA0NTYuNXptLTc0OC0xMDk3cS02MiAwLTYyIDYydDYyIDYycTYzIDAgNjMtNjJ0LTYzLTYyem00NjYtMzk0cS02MiAwLTYyIDYydDYyIDYyIDYyLTYyLTYyLTYyem0tMTUyIDExNjcgMTE5IDcyLTEzNCA4NnExOS04NiAxNS0xNTh6bTExODItNzczcS02MyAwLTYzIDYydDYzIDYycTYyIDAgNjItNjJ0LTYyLTYyem0tNDY2LTM5NHEtNjIgMC02MiA2MnQ2MiA2MiA2Mi02Mi02Mi02MnptMTUyIDExNjctMTE5IDcyIDEzNCA4NnEtMjAtODYtMTUtMTU4em0tNTczIDQ3IDEzOS04MyAxMzkgODYtMTM5IDg0eiIgZmlsbD0iIzEwMTAxMCIvPjwvc3ZnPg==',
            king: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0gNTAxLjY0NDk0LDE4MTAuOTg0MyA0OC4zMjM2LC0zNTQuMzczMSAtMjYwLjAyNjk3LC0yNjkuMjMxNCBjIDAsMCAtMTY2LjMyOTI0LC0yODguMTMzODkgMjkuOTE0NjEsLTQ4MC45MzQ4NiAyNjIuMzI4MDksLTI1Ny43MjU4NCA1MDYuMjQ3MTksMjAuNzEwMTIgNTA2LjI0NzE5LDIwLjcxMDEyIGwgMTk1LjU5NTUzLC0xNjUuNjgwOSAxODQuMDg5OSwxNjUuNjgwOSBjIDAsMCAyMTYuMzA1NiwtMjMyLjQxMzQ5IDQzMC4zMTAxLC03NS45MzcwOCAyMTQuMDA0NSwxNTYuNDc2NCAyNTUuNDI0NywzMTcuNTU1MDUgMTE3LjM1NzMsNTMxLjU1OTUyIC0xMzguMDY3NCwyMTQuMDA0NSAtMjUwLjgyMjUsMjgwLjczNzEgLTI1MC44MjI1LDI4MC43MzcxIGwgNTUuMjI3LDM0Ny40Njk3IHoiIGZpbGw9IiNmOWY5ZjkiLz48cGF0aCBkPSJNOTc3IDI5OHYtOTVoOTR2OTVoMTA3djk1aC0xMDd2MTUzcS00OC0xNi05NCAwVjM5M0g4NzB2LTk1em00NyAzMTRxLTQ3IDAtMTM2IDEyMS0zMS0zNi01MC01NSA5My0xNDAgMTg2LTE0MCA5MiAwIDE4NiAxNDAtMjAgMTktNTAgNTUtOTAtMTIxLTEzNi0xMjF6bS00NDcgOTA3bC0yNiAxNTYgMTQ1LTg0em00MTAtMjA2cS0xLTE0Ny0zNi41LTI3NC41VDg3MCA4NDVxLTQ1LTg4LTEzMS41LTE1M1Q1NzAgNjI3cS0xMDMgMC0yMDggOTNUMjU3IDk0OXEwIDEwOSA4Ni41IDIzNlQ1NDYgMTQwOHEyMTItODggNDQxLTk1em0zNyA1MzBINDQ4bDYxLTM2NXEtMzI1LTI4MC0zMjYtNTM1LTEtMTU5IDEyNS0yNzQuNVQ1NzUgNTUzcTc4IDAgMTU4LjUgNDdUODc2IDcxOXE2MSA3NCA5OC41IDE2NC41VDEwMjQgMTAzNHExMi02MCA0OS0xNTAuNXQ5OS0xNjQuNXE2MS03MiAxNDItMTE5dDE1OS00N3ExNDAgMCAyNjYgMTE1LjVUMTg2NSA5NDNxLTIgMjU1LTMyNiA1MzVsNjEgMzY1em0wLTc0aDQ4OWwtNTAtMjk4cS0yMTYtODQtNDM5LTg0dC00MzkgODRsLTUwIDI5OHptNDQ3LTI1MGwyNiAxNTYtMTQ1LTg0em0tNDEwLTIwNnEyMjkgNyA0NDEgOTUgMTE1LTk2IDIwMi0yMjN0ODctMjM2cTAtMTM2LTEwNS41LTIyOVQxNDc4IDYyN3EtODMgMC0xNjkuNSA2NVQxMTc4IDg0NXEtNDYgNjYtODEuNSAxOTMuNVQxMDYxIDEzMTN6bS0xNzYgMjMzbDE0MS04NCAxMzcgODYtMTQxIDg0eiIgZmlsbD0iIzEwMTAxMCIvPjwvc3ZnPg==',
        },

        black: {
            pawn: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMDI0IDE4NDNINDQ2di03NHEtNC04MCA0MS41LTEzN1Q2MTMgMTUyNHExMTctOTEgMTcxLjUtMjE3LjVUODYzIDEwMzlINTc2bDI4NC0yMzlxLTg2LTc0LTg2LTE4OCAwLTEwMyA3My0xNzd0MTc3LTc0cTEwMyAwIDE3Ni41IDc0dDczLjUgMTc3cTAgMTE0LTg2IDE4OGwyODQgMjM5aC0yODdxMjMgMTQxIDc4IDI2Ny41dDE3MiAyMTcuNXE3OSA1MSAxMjQuNSAxMDh0NDIuNSAxMzd2NzR6IiBmaWxsPSIjMTAxMDEwIi8+PC9zdmc+',
            bishop: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0gNzMyLjMzNTUsMTI4OS44MzUgNjI3LjgzNDIsOTkzLjA1OTE5IDEwMTQsNTc2LjMwODY1IGwgNDIwLjY4MjYsMzc0LjgzNTk3IC0xMzIuMTE0NywzNzkuNjE2MjggNDkuNjc0LDE1MS44MDYgLTY1OC4wNzQ3NiwtOC43MTAxIHoiIGZpbGw9IiNmOWY5ZjkiLz48cGF0aCBkPSJNNzY4IDEzNjVxLTUgMzktMjYgODJoNTY0cS0xOC0zNi0yNi04MnptNDk1LTczbDQ2LTczcS0xNDItNDktMjg1LTQ3LTE0NC0yLTI4NSA0N2w0NiA3M3ExMTgtNDAgMjM5LTM4IDEyMC0yIDIzOSAzOHptLTQzMiAyMjdINjI0cTY3LTExNiA3Mi0yMjktMTE0LTExOS0xNjItMjIzLjVUNTI4IDg0M3EzMy05NiAxMTgtMTg5LjVUOTU4IDQwN3EtMTctMTEtNDYtMzZ0LTI5LTc5cTAtNTggNDEtOTZ0MTAwLTM4cTU4IDAgOTkuNSAzOHQ0MS41IDk2cTAgNTQtMjkuNSA3OXQtNDUuNSAzNnEyMjYgMTUzIDMxMSAyNDYuNVQxNTIwIDg0M3E0MiAxMTktNiAyMjMuNVQxMzUyIDEyOTBxNCAxMTMgNzIgMjI5aC0yMDdxLTItNCAxMCAxNiAzMyA1MyA3MCA2MHQ4OSA3aDI1MHE3NiAwIDE0MS41IDYydDY1LjUgMTc5aC00OTVxLTEyMyAwLTIyMy41LTg0LjVUMTAyNCAxNTYwcTAgMTE0LTEwMSAxOTguNVQ3MDAgMTg0M0gyMDVxMC0xMTcgNjUtMTc5dDE0Mi02MmgyNTBxNTEgMCA4OC03dDcxLTYwcTEyLTIwIDEwLTE2em0xNDYtNzAxaC05NXY4OWg5NXYxNjVoOTRWOTA3aDk1di04OWgtOTVWNzE0aC05NHoiIGZpbGw9IiMxMDEwMTAiLz48L3N2Zz4=',
            knigts: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0gMTY1OC4zMDUsMTgwNi4wNCBDIDEyNDkuNjkwNCwxNTA1LjAwNDggMTU4Ni43NTQ2LDg4Ni4wMTQyNSAxMjA2LjI2NCw0NjMuNDE0IGwgNTkuNjUsLTE2LjI3NCBjIDAsMCAyOTYuMTQsMTY2Ljg5MSAzMTkuNjM5LDI1Ni42NjMgMTgyLjUzNDYsNDY4LjQ4NzIgNDEuNzU5NSw2OTEuMTYxMiAxMzUuNjc5LDEwNzYuOTY2IHogbSAtNjg2LjUsLTEyODMuMDg4IDEyMC40MywxNzUuNzMgLTMxMS44MTEsLTIuNjQyIHogbSAtNDczLjUzNCw0NTguNDk0IC05Mi45NiwtNDEuMjU4IDQxLjQ4MSwtOTMuNjU2IDEyNy4zMzUsMjguMDE3IHoiIGZpbGw9IiNmOWY5ZjkiLz48cGF0aCBkPSJNNTAyIDg2OGwtNTIgMS0yNiA2NCA2OSAyMSA0Ni01NXptNTM2LTE4N3EzNCAxLTE2LTY4dC04MC00Mkw4MjYgNjgwem0tMzM4LTk4cTYtMzkgMTE1LjUtMTA3LjVUMTAzNiAzMzJsMTE1LTE1NCA5NiAyMTdxMzQyIDE3MiA0MzIuNSA0MTcuNVQxNzI3IDE0MTZxLTE4IDEyOCA0LjUgMjM2dDU3LjUgMTkwbC0xMjQyIDFxLTktMTc4IDM5LTMwMS41VDc2OSAxMzA0cTUwLTExIDgyLjUtMzkuNVQ5MDUgMTIwNmw2Mi41LTEgMTM4LTI5IDEzOS05NyA2Ni41LTIwN3EwLTE3LTguNS0zNHQtMTEuNS0zN3EtNjIgMjI4LTE2MSAyODguNVQ5MzkgMTE0OHEtMjM2LTQyLTI5MiA2MGwtNTYgMTAyLTIxNy0xMjEgMTE1LTgyLTUxLTUwLTEyMiA4Ni0xMi0yOTd6bTk4MSAxMTkycS0xMDItMTMwLTg1LTMwOC41dDI3LTM2Mi41LTUwLTM1MS41VDEyNTcgNDc3cTIyMCAxNjQgMjUyLjUgMzQydDE2LjUgMzUwLjUtMTIgMzI5IDE2NyAyNzYuNXoiIGZpbGw9IiMxMDEwMTAiLz48L3N2Zz4=',
            rook: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0gNjc0LjAzNTk2LDczMS43NTczIC03NS43NDM4Myw4MDcuNjk0NCA4NTAuNzI4MDcsMTMuODA2NyAtNzUuMTQxNSwtODMzLjAwNjcxIHoiIGZpbGw9IiNmOWY5ZjkiLz48cGF0aCBkPSJNMTAyNCAxODQzSDM4M2wyOS0yNjQgMTU5LTExOCA1MC02NTktMTQ5LTEwNy0xNy0zNDFoMjg5djE0N2gxMzdWMzU0aDI4NnYxNDdoMTM3VjM1NGgyODlsLTE3IDM0MS0xNDkgMTA3IDUwIDY1OSAxNTkgMTE4IDI5IDI2NHptMC05ODloMzMzbC02LTg4SDY5N2wtNiA4OHptMCA2NDdoMzgxbC02LTg3SDY0OWwtNiA4N3oiIGZpbGw9IiMxMDEwMTAiLz48L3N2Zz4=',
            queen: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0gNTIwLjA1MzkzLDE4MDEuNzc5OCA0MS40MjAyMywtNDQ4LjcxOTEgNDc0LjAzMTQ0LC0xMjguODYyOSA0NTcuOTIzNiwxMzMuNDY1MSAzNC41MTY5LDQ0Ni40MTggeiIgZmlsbD0iI2Y5ZjlmOSIvPjxwYXRoIGQ9Ik01OTAgMTUxOXE0IDcyLTE1IDE1OGwxMzQtODZ6bTQzNCAzMjRINDQxcTExNC0yMzEgNTcuNS00NTYuNVQyOTYgOTM3cS0xMiAyLTE5IDItNTQgMC05Mi41LTM4LjVUMTQ2IDgwOHQzOC41LTkyLjVUMjc3IDY3N3Q5Mi41IDM4LjVUNDA4IDgwOHEwIDIwLTYgMzgtNCAxNC0xNSAzM2wxOTYgMTM5IDEwMC00ODZxLTY0LTMxLTcyLTEwMy01LTQ0IDI5LTkxdDg4LTUzcTU0LTUgOTYgMjl0NDggODhxNyA2OC00NiAxMTRsMTk4IDQxMiAxOTgtNDEycS01NC00Ni00Ni0xMTQgNi01NCA0OC04OHQ5Ni0yOXE1NCA2IDg3LjUgNTN0MjkuNSA5MXEtOSA3Mi03MiAxMDNsMTAwIDQ4NiAxOTYtMTM5cS0xMi0xOS0xNS0zMy02LTE4LTYtMzggMC01NCAzOC41LTkyLjVUMTc3MSA2Nzd0OTIuNSAzOC41VDE5MDIgODA4dC0zOC41IDkyLjVUMTc3MSA5MzlxLTcgMC0xOS0yLTE0NyAyMjQtMjAzIDQ0OS41dDU4IDQ1Ni41em0wLTQ1MHExMDkgMCAyMjIgMjguNXQyMTMgNjcuNXEyLTQxIDExLTg5LTEwOC00Mi0yMjEuNS02OHQtMjI0LjUtMjYtMjI1IDI2LTIyMSA2OHE4IDQ4IDExIDg5IDk5LTM5IDIxMi02Ny41dDIyMy0yOC41em0wIDM3Nmg0NzhxLTE1LTM0LTI0LTczSDU3MHEtMTAgMzktMjQgNzN6bTQzNC0yNTBsLTExOSA3MiAxMzQgODZxLTIwLTg2LTE1LTE1OHptLTU3MyA0N2wxMzkgODcgMTM5LTg0LTEzOS04NnoiIGZpbGw9IiMxMDEwMTAiLz48L3N2Zz4=',
            king: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0gNTUzLjMzMzMzLDE0ODUgLTU1LDMyMCAxMDQ3LjMzMzM3LDUgLTQ3LjMzMzQsLTMzNSBjIDAsMCAzMjMuMzMzNCwtMzEzLjMzMzMgMzMwLC00NjYuNjY2NyBDIDE4MzUsODU1IDE3OTMuMjM4NSw2NzcuMzY4OTEgMTU4Ni42NjY3LDYwMS42NjY2NyAxNDA0LjQ4MzEsNTM0LjkwMTk1IDEyMTUsNzIzLjMzMzMzIDEyMTUsNzIzLjMzMzMzIGwgLTE4MS42NjY3LC0xNjEuNjY2NjYgLTE4OS45OTk5NywxNjAgYyAwLDAgLTE4NS4wNjc3NCwtMTM1Ljg5MTA1IC0yNTYuNjY2NjYsLTEzMCBDIDMyMy4zMzMzMyw2MTMuMzMzMzQgMjM1LDgxMS42NjY2NyAyMjUsOTI1IGMgMTAuMTY0NDcsMzMxLjI1MiAzMjguMzMzMzMsNTYwIDMyOC4zMzMzMyw1NjAgeiIgZmlsbD0iI2Y5ZjlmOSIvPjxwYXRoIGQ9Ik0xMDI0IDE3NjloNDg5bC0xMi03M0g1NDdsLTEyIDczem0wLTkyMXEtMjUtNjAtNjItMTExIDMxLTQ4IDYyLTY1IDMwIDE3IDYyIDY1LTM4IDUxLTYyIDExMXptLTk3IDQ1NHEtMTU0IDExLTMwMyA1OC0xMjMtMTA4LTIwMC0yMTMuNVQzNDcgOTQ1cTAtODkgNzMuNS0xNTlUNTY5IDcxNnE2NyAwIDEzNC41IDYyLjVUODA2IDkwOXEzMCA1NCA3NSAxNzV0NDYgMjE4em0tMzUwIDIxN2wtMjYgMTU2IDE0NS04NHptNDQ3LTkwN3EtNDcgMC0xMzYgMTIxLTMxLTM2LTUwLTU1IDkzLTE0MCAxODYtMTQwIDkyIDAgMTg2IDE0MC0yMCAxOS01MCA1NS05MC0xMjEtMTM2LTEyMXptMCA3NzVxLTEtMTI2LTQyLTI2Ny41VDg5OCA4OTNxLTgtMTQtMTQtMjd0LTEyLTIzcS0yOC00My00OC02OS01MS02My0xMjAtMTA1dC0xMzQtNDJxLTEwMyAwLTIwOCA5M1QyNTcgOTQ5cTAgMTIwIDk5IDI1NC41VDYwNSAxNDYzcTIwMS03NCA0MTktNzZ6bTAgNDU2SDQ0OGw2MS0zNjVxLTMyNS0yODAtMzI2LTUzNS0xLTE1OSAxMjUtMjc0LjVUNTc1IDU1M3E3OCAwIDE1OC41IDQ3VDg3NiA3MTlxNjEgNzQgOTguNSAxNjQuNVQxMDI0IDEwMzRxMTItNjAgNDktMTUwLjV0OTktMTY0LjVxNjEtNzIgMTQyLTExOXQxNTktNDdxMTQwIDAgMjY2IDExNS41VDE4NjUgOTQzcS0yIDI1NS0zMjYgNTM1bDYxIDM2NXptOTctNTQxcTAtOTcgNDUtMjE4dDc2LTE3NXEzNC02OCAxMDEuNS0xMzAuNVQxNDc5IDcxNnE3NCAwIDE0Ny41IDcwdDc0LjUgMTU5cTAgOTYtNzcgMjAxLjVUMTQyNCAxMzYwcS0xNTAtNDctMzAzLTU4em0zNTAgMjE3bC0xMTkgNzIgMTQ1IDg0em0tNDQ3LTEzMnEyMTcgMiA0MTkgNzYgMTUwLTEyNSAyNDktMjU5LjV0OTktMjU0LjVxMC0xMzYtMTA1LjUtMjI5VDE0NzggNjI3cS02NiAwLTEzNSA0MnQtMTE5IDEwNXEtMjEgMjYtNDggNjktNiAxMC0xMi41IDIzbC0xMy41IDI3cS00NCA4NS04NSAyMjYuNXQtNDEgMjY3LjV6bS0xMzkgMTU5bDEzOSA4NiAxMzktODQtMTM5LTg2em05Mi0xMjQ4di05NWg5NHY5NWgxMDd2OTVoLTEwN3YxNTNxLTQ4LTE2LTk0IDBWMzkzSDg3MHYtOTV6IiBmaWxsPSIjMTAxMDEwIi8+PC9zdmc+',
        }
    }
}