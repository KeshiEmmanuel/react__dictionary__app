import { Card, Stack, VStack } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "./ui/skeleton";

const WordCardSkeleton = () => {
    return (
        <Card.Root width={"full"} paddingInline={"20px"}>
            <Card.Header height={"full"}>
                <Stack width={"full"} maxW={"lg"}>
                    <VStack alignItems={"start"}>
                        <Skeleton
                            variant={"shine"}
                            height={"50px"}
                            width={"50%"}
                        />
                        <SkeletonText noOfLines={1} width={"40%"} />
                    </VStack>
                </Stack>
            </Card.Header>
            <Card.Body>
                <SkeletonText
                    variant={"shine"}
                    noOfLines={1}
                    marginBottom={"10px"}
                />
                <SkeletonText
                    variant={"shine"}
                    noOfLines={2}
                    marginBottom={"10px"}
                />
                <SkeletonText
                    variant={"shine"}
                    noOfLines={1}
                    marginBottom={"10px"}
                />
                <SkeletonText
                    variant={"shine"}
                    noOfLines={2}
                    marginBottom={"10px"}
                />
                <SkeletonText
                    variant={"shine"}
                    noOfLines={1}
                    marginBottom={"10px"}
                />
                <SkeletonText
                    variant={"shine"}
                    noOfLines={2}
                    marginBottom={"10px"}
                />
                <SkeletonText
                    variant={"shine"}
                    noOfLines={1}
                    marginBottom={"10px"}
                />
            </Card.Body>
        </Card.Root>
    );
};

export default WordCardSkeleton;
