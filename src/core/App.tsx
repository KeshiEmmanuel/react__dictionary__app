import MaxContainer from "@/components/MaxContainer";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import WordCard from "@/components/WordCard";
import WordCardSkeleton from "@/components/WordCardSkeleton";
import UseData from "@/hooks/UseData";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

const App = () => {
    const [selectedFont, setSelectedFont] = useState<string>("");
    const [searchString, setSearchString] = useState<string>("");

    const { data: words, isLoading, error } = UseData(searchString);

    console.log(selectedFont);
    console.log(words);

    if (error) return <p>Please connect to a network</p>;

    return (
        <Box fontFamily={selectedFont}>
            <MaxContainer>
                <NavBar
                    selectedFont={selectedFont}
                    onSelectedFont={setSelectedFont}
                />
                <SearchBar
                    onSearch={(searchString) => setSearchString(searchString)}
                />
                <Box marginBlock={"30px"}>
                    {isLoading && <WordCardSkeleton />}
                    {words.map((word, i) => (
                        <WordCard word={word} key={i} />
                    ))}
                </Box>
            </MaxContainer>
        </Box>
    );
};

export default App;
