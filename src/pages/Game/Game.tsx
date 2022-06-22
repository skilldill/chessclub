import { VStack, Text, Button, Grid, GridItem, Wrap } from "@chakra-ui/react";
import { FC } from "react";
import { ChessBoard } from "../../components";
import { CHESS_BOARD_CONFIG, INITIAL_CELLS, INITIAL_CELLS_TEST } from "./Game.config";



export const Game: FC = () => {
    return (
        <Grid
            gridTemplateColumns={'150px 1fr'}
        >
            <GridItem>
                <VStack align="center" w={300}>
                    <Text>Chess club</Text>
                    <Button>Начать игру</Button>
                </VStack>
            </GridItem>
            <GridItem>
                <ChessBoard 
                    reverse={false}
                    cells={INITIAL_CELLS} 
                    config={CHESS_BOARD_CONFIG}
                    onChange={() => {}} 
                />
            </GridItem>
        </Grid>
    )
}