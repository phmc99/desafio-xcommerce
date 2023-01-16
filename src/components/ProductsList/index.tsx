import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import ListHeader from '../ListHeader';
import ProductsListItem from '../ProductsListItem';
import { IProductQuery } from '../../types';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { getAllProducts } from '../../services/api';

interface ProductsListProps {
  favoriteProducts: boolean;
}

const ProductsList = ({ favoriteProducts }: ProductsListProps) => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, error }: IProductQuery = useQuery(
    ['products', page],
    () => getAllProducts(page),
  );

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  if (!data || error) {
    return <h1>Algo deu errado.</h1>;
  }

  const handleNextPage = () => {
    setPage(p => p + 1);
  };
  const handlePrevPage = () => {
    if (data.page > 0) {
      setPage(p => p - 1);
    }
  };

  return (
    <Flex direction="column" alignItems="center" w="70%" h="100%">
      <ListHeader
        handleNextPage={data.nextPage && handleNextPage}
        handlePrevPage={data.previousPage && handlePrevPage}
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
        {data.content.map((item, index) => (
          <ProductsListItem
            key={index}
            code={item.code}
            name={item.name}
            price={item.price}
            sales={item.sales}
            stock={item.stock}
          />
        ))}
      </Flex>
      <Box mt={3} alignSelf="flex-end">
        <Text fontWeight="medium" color="#636363" fontSize="sm">
          Página {page} de {data.lastPage}
        </Text>
      </Box>
    </Flex>
  );
};

export default ProductsList;
