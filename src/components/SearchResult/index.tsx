import { Box, Flex, Heading, Spinner } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { favoriteProductsAtom } from '../../atoms';
import { scrollBar } from '../../styles/theme';
import { IProduct } from '../../types';
import ProductsListItem from '../ProductsListItem';

interface SearchResultProps {
  closeFunc: any;
  resultList: IProduct[];
  isLoading: boolean;
}

const SearchResult = ({
  closeFunc,
  resultList,
  isLoading,
}: SearchResultProps) => {
  const [favoriteProducts] = useAtom(favoriteProductsAtom);

  const verifyFavorite = (code: string) => {
    const isFavorited = favoriteProducts.find(item => item.code === code);
    return isFavorited ? true : false;
  };

  return (
    <>
      <Flex
        w="100vw"
        h="100vh"
        bgColor="blackAlpha.400"
        position="fixed"
        top={0}
        onClick={closeFunc}
        zIndex={2}
      ></Flex>
      <Box
        zIndex={3}
        right={0}
        maxW={640}
        w="100%"
        position="absolute"
        maxH="30%"
        top="15%"
        bgColor="#FAFAFA"
        overflowY={resultList && 'scroll'}
        css={{
          ...scrollBar,
        }}
      >
        {isLoading ? (
          <Box p={10} textAlign="center" w="100%" bgColor="#FAFAFA">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Box>
        ) : null}
        {!isLoading && resultList.length <= 0 ? (
          <Box p={10} textAlign="center" w="100%" bgColor="#FAFAFA">
            <Heading color="gray.400">Nenhum resultado</Heading>
          </Box>
        ) : null}
        {resultList.map((item, index) => (
          <ProductsListItem
            key={index}
            code={item.code}
            name={item.name}
            price={item.price}
            sales={item.sales}
            stock={item.stock}
            favorite={verifyFavorite(item.code)}
          />
        ))}
      </Box>
    </>
  );
};

export default SearchResult;
