import { Flex, Heading, Img, Text } from '@chakra-ui/react';

const MostSaledListItem = () => {
  return (
    <Flex
      maxWidth="45%"
      direction="column"
      alignItems="center"
      cursor="pointer"
    >
      <Img
        rounded={10}
        boxShadow="md"
        w="100%"
        src="https://via.placeholder.com/600"
        alt="Product"
      />
      <Flex mt={2} w="100%" justifyContent="space-between">
        <Text color="#717787" fontSize="small">
          R$&nbsp;<b>400,00</b>
        </Text>
        <Text color="#717787" fontSize="small">
          203 vendas
        </Text>
      </Flex>
      <Heading
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        w="100%"
        fontWeight="semibold"
        size="sm"
        color="#235EE7"
      >
        Most Saled List Item asdasdasdasdas
      </Heading>
    </Flex>
  );
};

export default MostSaledListItem;
