import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import ListHeader from '../ListHeader';
import ProductsListItem from '../ProductsListItem';

interface ProductsListProps {
  favoriteProducts: boolean;
}

const ProductsList = ({ favoriteProducts }: ProductsListProps) => {
  return (
    <Flex direction="column" alignItems="center" w="70%" h="100%">
      <ListHeader
        title={favoriteProducts ? 'Produtos favoritos' : 'Todos os produtos'}
      />
      <Flex
        p={5}
        borderRadius={10}
        justifyContent="center"
        direction="column"
        w="100%"
        h="100%"
        bgColor="#F3F5F9"
      >
        <Flex mb={3} w="100%" justifyContent="space-between">
          <Text color="#99A0B0" fontWeight="bold">
            Identificação
          </Text>
          <Flex w="60%" justifyContent="space-evenly">
            <Text color="#99A0B0" fontWeight="bold">
              Preço
            </Text>
            <Text color="#99A0B0" fontWeight="bold">
              Vendas
            </Text>
            <Text color="#99A0B0" fontWeight="bold">
              Estoque
            </Text>
          </Flex>
        </Flex>
        <Divider borderColor="#DBDDE0" />
        <ProductsListItem />
        <ProductsListItem />
        <ProductsListItem />
        <ProductsListItem />
        <ProductsListItem />
      </Flex>
      <Box mt={3} alignSelf="flex-end">
        <Text fontWeight="medium" color="#636363" fontSize="sm">
          Página 1 de 10
        </Text>
      </Box>
    </Flex>
  );
};

export default ProductsList;
