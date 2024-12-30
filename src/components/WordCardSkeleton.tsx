import { Box, Card, HStack, Stack, VStack } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "./ui/skeleton";

const WordCardSkeleton = () => {
    return (
        <Card.Root width={"full"}>
            <Card.Header height={"full"}>
                <Stack width={"full"} maxW={"lg"}>
                    <VStack alignItems={"start"}>
                        <Skeleton height={"50px"} width={"50%"} />
                        <SkeletonText noOfLines={1} width={"40%"} />
                    </VStack>
                </Stack>
            </Card.Header>
            <Card.Body>
                <SkeletonText noOfLines={1} marginBottom={"10px"} />
                <SkeletonText noOfLines={2} marginBottom={"10px"} />
                <SkeletonText noOfLines={1} marginBottom={"10px"} />
                <SkeletonText noOfLines={2} marginBottom={"10px"} />
                <SkeletonText noOfLines={1} marginBottom={"10px"} />
                <SkeletonText noOfLines={2} marginBottom={"10px"} />
                <SkeletonText noOfLines={1} marginBottom={"10px"} />
            </Card.Body>
        </Card.Root>
    );
};

export default WordCardSkeleton;
