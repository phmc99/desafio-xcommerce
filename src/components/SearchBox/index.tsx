import { SearchIcon } from '@chakra-ui/icons';
import {
  Flex,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getBySearch } from '../../services/api';
import SearchResult from '../SearchResult';

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState<string>(' ');
  const [inputFocus, setInputFocus] = useState<boolean>(false);

  const { data, isLoading } = useQuery(['products', searchValue], () =>
    getBySearch(searchValue),
  );

  const inSearchToggle = () => {
    setInputFocus(!inputFocus);
  };

  const handleChange = (e: any) => {
    setInputFocus(true);
    setSearchValue(e.target.value);
  };

  return (
    <>
      {inputFocus && isLoading === false ? (
        <SearchResult
          resultList={searchValue.trim() === '' ? [] : data}
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
