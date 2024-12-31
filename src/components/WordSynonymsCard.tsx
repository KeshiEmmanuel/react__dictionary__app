import { Box, Text } from "@chakra-ui/react";

interface Props {
    synonyms: string[];
}

const WordSynonymsCard = ({ synonyms }: Props) => {
    return (
        <Box>
            <Text fontSize={"1rem"} color={"gray.400"} fontWeight={"500"}>
                Synonyms
            </Text>
            {synonyms.length > 1 ? (
                synonyms.map((synonym) => (
                    <Text
                        fontSize={".9rem"}
                        display={"inline"}
                        marginRight={"5px"}
                    >
                        {synonym}
                    </Text>
                ))
            ) : (
                <Text>N/A</Text>
            )}
        </Box>
    );
};

export default WordSynonymsCard;
