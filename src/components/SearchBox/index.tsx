import { SearchIcon } from '@chakra-ui/icons';
import {
  Flex,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { favoriteProductsAtom } from '../../atoms';
import { getAllProducts } from '../../services/api';
import { IProduct, IProductQuery } from '../../types';
import SearchResult from '../SearchResult';

const SearchBox = () => {
  const { data, isLoading, error }: IProductQuery = useQuery(['products'], () =>
    getAllProducts(),
  );
  const [favoriteProducts] = useAtom(favoriteProductsAtom);

  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const [searchResultList, setSearchResultList] = useState<IProduct[]>([]);

  if (!data || error) {
    return <></>;
  }

  const inSearchToggle = () => {
    setInputFocus(!inputFocus);
  };

  const handleChange = (e: any) => {
    setInputFocus(true);
    const dataFilter = data.content.filter(item =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    const favoriteFilter = favoriteProducts.filter(item =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setSearchResultList([...dataFilter, ...favoriteFilter]);
  };

  return (
    <>
      {inputFocus && isLoading === false ? (
        <SearchResult
          resultList={searchResultList}
          closeFunc={inSearchToggle}
        />
      ) : null}
      <Flex
        w="100%"
        h="55%"
        alignItems="center"
        justifyContent="space-between"
        px={10}
      >
        <Heading as="h1" color="white">
          Produtos
        </Heading>
        <InputGroup zIndex={inputFocus ? 3 : 1} w={'30%'}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Buscar por produtos"
            bgColor="white"
            onFocus={inSearchToggle}
            onChange={handleChange}
          />
        </InputGroup>
      </Flex>
    </>
  );
};

export default SearchBox;
