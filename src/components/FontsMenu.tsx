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
            <SelectTrigger padding={"10px"}>
                <SelectLabel>{selectedFont || "Select font"}</SelectLabel>
                <Icon>
                    <BsChevronDown />
                </Icon>
            </SelectTrigger>
            <SelectContent
                paddingX={"20px"}
                paddingY={"5px"}
                position={"absolute"}
                top={"40px"}
                width={"100%"}
            >
                {frameworks.items.map((fonts) => (
                    <SelectItem
                        onClick={() => onSelectedFont(fonts.value)}
                        key={fonts.label}
                        item={fonts}
                        paddingY={"5px"}
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
