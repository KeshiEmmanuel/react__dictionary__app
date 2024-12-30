import { Fonts } from "@/data";
import {
    createListCollection,
    Icon,
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

type Props = {
    selectedFont: string;
    onSelectedFont: React.Dispatch<React.SetStateAction<string>>;
};
const FontsMenu = ({ onSelectedFont, selectedFont }: Props) => {
    return (
        <SelectRoot
            collection={frameworks}
            position={"relative"}
            border={"none"}
            size={"lg"}
            width={"150px"}
        >
            <SelectTrigger>
                <SelectLabel>{selectedFont || "Select font"}</SelectLabel>
                <Icon>
                    <BsChevronDown />
                </Icon>
            </SelectTrigger>
            <SelectContent position={"absolute"} top={"40px"} width={"100%"}>
                {frameworks.items.map((fonts) => (
                    <SelectItem
                        onClick={() => onSelectedFont(fonts.value)}
                        key={fonts.label}
                        item={fonts}
                    >
                        {fonts.value}
                    </SelectItem>
                ))}
            </SelectContent>
        </SelectRoot>
    );
};

const frameworks = createListCollection({
    items: [...Fonts],
});

export default FontsMenu;
