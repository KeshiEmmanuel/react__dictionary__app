import { Container } from "@chakra-ui/react";

type Props = {
    children: React.ReactNode;
};

export default function MaxContainer({ children }: Props) {
    return (
        <Container
            maxWidth={"700px"}
            paddingInline={"1rem"}
            marginInline={"auto"}
        >
            {children}
        </Container>
    );
}
