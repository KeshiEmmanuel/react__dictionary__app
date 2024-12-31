import { MdAudiotrack } from "react-icons/md";
import { FetchReponse } from "@/types/WordTypes";
import { Box, Card, HStack, Icon, Text } from "@chakra-ui/react";
import useSound from "use-sound";

type Props = {
    word: FetchReponse;
};

const WordCard = ({ word }: Props) => {
    const audio = word.phonetics.map((phonetics) => phonetics.audio);
    const [playSound] = useSound(audio);

    return (
        <Card.Root paddingInline={"20px"}>
            <Card.Header>
                <HStack justifyContent={"space-between"}>
                    <Box>
                        <h1
                            style={{
                                fontSize: "3rem",
                                fontWeight: "bolder",
                            }}
                        >
                            {word.word}
                        </h1>
                        <Text color={"gray.500"}>{word.phonetic}</Text>
                    </Box>
                    <Icon fontSize={"25px"} onClick={() => playSound()}>
                        <MdAudiotrack />
                    </Icon>
                </HStack>
            </Card.Header>
            <Card.Body>
                <h2
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                    }}
                >
                    Meaning:
                </h2>
                <article>
                    {word.meanings.map(
                        (
                            { partOfSpeech, antonyms, definitions, synonyms },
                            key
                        ) => (
                            <Box key={key}>
                                <Box paddingBottom={"10px"}>
                                    <Box paddingBlock={"20px"}>
                                        <Box>
                                            <Text
                                                fontSize={"1rem"}
                                                color={"gray.400"}
                                                fontWeight={"500"}
                                            >
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
                                        <Box>
                                            <Text
                                                fontSize={"1rem"}
                                                color={"gray.400"}
                                                fontWeight={"500"}
                                            >
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
                                    </Box>

                                    <Text
                                        fontSize={"1.2rem"}
                                        color={"gray.400"}
                                        fontWeight={"500"}
                                    >
                                        {partOfSpeech}
                                    </Text>
                                </Box>
                                {definitions.map(
                                    ({ example, definition }, key) => (
                                        <Box key={key}>
                                            <Text>{definition}</Text>
                                            <Text
                                                paddingBlock={"5px"}
                                                fontSize={".75rem"}
                                                color={"gray.400"}
                                            >
                                                Example: {""}
                                                {example
                                                    ? example
                                                    : "Not Available"}
                                            </Text>
                                        </Box>
                                    )
                                )}
                            </Box>
                        )
                    )}
                </article>
            </Card.Body>
        </Card.Root>
    );
};

export default WordCard;
