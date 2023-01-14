import { SearchIcon } from '@chakra-ui/icons';
import {
  Flex,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';

const SearchBox = () => {
  return (
    <>
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
        <InputGroup w={'30%'}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input placeholder="Buscar por produtos" bgColor="white" />
        </InputGroup>
      </Flex>
    </>
  );
};

export default SearchBox;
