import { Box, Flex, Heading } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { favoriteProductsAtom } from '../../atoms';
import { IProduct } from '../../types';
import ProductsListItem from '../ProductsListItem';

interface SearchResultProps {
  closeFunc: any;
  resultList: IProduct[];
}

const SearchResult = ({ closeFunc, resultList }: SearchResultProps) => {
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
        position="absolute"
        maxH={'30%'}
        right={0}
        top="15%"
        zIndex={3}
        bgColor="#FAFAFA"
        overflowY="scroll"
      >
        {resultList.length <= 0 ? (
          <Heading color="gray.400" p={10}>
            Nenhum resultado
          </Heading>
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
