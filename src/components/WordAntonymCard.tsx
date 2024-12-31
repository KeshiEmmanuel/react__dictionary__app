import { Box, Text } from "@chakra-ui/react";

interface Props {
    antonyms: string[];
}

function WordAntonymCard({ antonyms }: Props) {
    return (
        <Box>
            <Text fontSize={"1rem"} color={"gray.400"} fontWeight={"500"}>
                Antonyms
            </Text>
            {antonyms.length > 1 ? (
                antonyms.map((antonym) => (
                    <Text
                        fontSize={".9rem"}
                        display={"inline"}
                        marginRight={"5px"}
                    >
                        {antonym}
                    </Text>
                ))
            ) : (
                <Text>N/A</Text>
            )}
        </Box>
    );
}

export default WordAntonymCard;
