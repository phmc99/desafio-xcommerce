import { Box, Divider, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import ListHeader from '../ListHeader';
import ProductsListItem from '../ProductsListItem';
import { IProductQuery } from '../../types';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/api';
import { useAtom } from 'jotai';
import { favoriteProductsAtom, favoriteToggleAtom } from '../../atoms';

const ProductsList = () => {
  const [page, setPage] = useState<number>(1);
  const [favoriteToggle] = useAtom(favoriteToggleAtom);
  const [favoriteProducts, setFavoriteProducts] = useAtom(favoriteProductsAtom);

  const { data, isLoading, error }: IProductQuery = useQuery(
    ['products', page],
    () => getAllProducts(page),
  );

  const handleNextPage = () => {
    setPage(p => p + 1);
  };
  const handlePrevPage = () => {
    if (data && data.page > 0) {
      setPage(p => p - 1);
    }
  };

  const verifyFavorite = (code: string) => {
    const isFavorited = favoriteProducts.find(item => item.code === code);
    return isFavorited ? true : false;
  };

  const AllProducts = () => {
    return data?.content.map((item, index) => (
      <ProductsListItem
        key={index}
        code={item.code}
        name={item.name}
        price={item.price}
        sales={item.sales}
        stock={item.stock}
        favorite={verifyFavorite(item.code)}
      />
    ));
  };

  const FavoriteProducts = () => {
    if (favoriteProducts.length > 0) {
      return favoriteProducts.map((item, index) => (
        <ProductsListItem
          key={index}
          code={item.code}
          name={item.name}
          price={item.price}
          sales={item.sales}
          stock={item.stock}
          favorite={verifyFavorite(item.code)}
        />
      ));
    } else {
      return <Heading p={5}>Nenhum produto favoritado.</Heading>;
    }
  };

  useEffect(() => {
    setFavoriteProducts(
      JSON.parse(localStorage.getItem('@xco:favorites') || '[]'),
    );
  }, [favoriteProducts, setFavoriteProducts]);

  if (isLoading) {
    return (
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        w="70%"
        h="100vh"
        borderLeft={'2px solid whitesmoke'}
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }

  if (!data || error) {
    return (
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        w="70%"
        h="100vh"
        borderLeft={'2px solid red'}
      >
        <Heading size="md">Algo deu errado com a lista de Produtos</Heading>
      </Flex>
    );
  }

  return (
    <Flex direction="column" alignItems="center" w="70%" h="100%">
      <ListHeader
        handleNextPage={data.nextPage && handleNextPage}
        handlePrevPage={data.previousPage && handlePrevPage}
        title={favoriteToggle ? 'Produtos favoritos' : 'Todos os produtos'}
        disableButtons={favoriteToggle}
      />
      <Flex
        p={5}
        borderRadius={10}
        justifyContent="flex-start"
        direction="column"
        w="100%"
        h="100%"
        maxH="680px"
        bgColor="#F3F5F9"
        overflowY="scroll"
      >
        <Flex mb={3} p={2} w="100%" justifyContent="space-between">
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

        {favoriteToggle ? FavoriteProducts() : AllProducts()}
      </Flex>
      <Box mt={3} alignSelf="flex-end">
        {favoriteToggle ? null : (
          <Text fontWeight="medium" color="#636363" fontSize="sm">
            Página {page} de {data.lastPage}
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default ProductsList;
