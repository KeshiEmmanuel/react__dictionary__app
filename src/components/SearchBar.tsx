import { Input } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { InputGroup } from "./ui/input-group";

type Props = {
    onSearch: (searchString: string) => void;
};
const SearchBar = ({ onSearch }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();

        if (inputRef.current) return onSearch(inputRef.current?.value);
    };

    return (
        <form onSubmit={(e) => handleSearch(e)}>
            <InputGroup width={"100%"}>
                <Input
                    ref={inputRef}
                    variant={"subtle"}
                    placeholder="Any word..."
                    border={"none"}
                    outline={"none"}
                />
            </InputGroup>
        </form>
    );
};

export default SearchBar;
