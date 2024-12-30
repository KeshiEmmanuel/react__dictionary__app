import { Box, HStack } from "@chakra-ui/react";
import FontsMenu from "./FontsMenu";
import ColorModeSwitch from "./ColorModeSwitch";
import DictionaryIcon from "/dictionary.png";
type Props = {
    selectedFont: string;
    onSelectedFont: React.Dispatch<React.SetStateAction<string>>;
};

const NavBar = ({ onSelectedFont, selectedFont }: Props) => {
    return (
        <HStack paddingY={"30px"} justifyContent={"space-between"}>
            <img src={DictionaryIcon} alt="navbar__logo" width={"30px"} />
            <Box>
                <HStack>
                    <FontsMenu
                        selectedFont={selectedFont}
                        onSelectedFont={onSelectedFont}
                    />
                    <ColorModeSwitch />
                </HStack>
            </Box>
        </HStack>
    );
};

export default NavBar;
