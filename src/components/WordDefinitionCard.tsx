import { definitions } from "@/types/WordTypes";
import { Box, Text } from "@chakra-ui/react";

interface Props {
    definition: definitions;
}

const WordDefinitionCard = ({ definition }: Props) => {
    return (
        <Box>
            <Text>{definition.definition}</Text>
            <Text paddingBlock={"5px"} fontSize={".75rem"} color={"gray.400"}>
                Example: {""}
                {definition.example ? definition.example : "Not Available"}
            </Text>
        </Box>
    );
};

export default WordDefinitionCard;
