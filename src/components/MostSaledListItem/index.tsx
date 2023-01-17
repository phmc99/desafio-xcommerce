import { Flex, Heading, Img, Text } from '@chakra-ui/react';
import { IProduct } from '../../types';

const MostSaledListItem = ({ name, sales, price }: Partial<IProduct>) => {
  return (
    <Flex
      maxWidth="45%"
      maxH="300px"
      direction="column"
      alignItems="center"
      cursor="pointer"
    >
      <Img
        rounded={10}
        boxShadow="md"
        w="95%"
        src="https://via.placeholder.com/600"
        alt="Product"
      />
      <Flex mt={2} w="100%" justifyContent="space-between">
        <Text color="#717787" fontSize="small">
          R$&nbsp;<b>{price}</b>
        </Text>
        <Text color="#717787" fontSize="small">
          {sales} vendas
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
        {name}
      </Heading>
    </Flex>
  );
};

export default MostSaledListItem;
