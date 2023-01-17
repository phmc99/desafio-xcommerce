import { Box, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import { getMostSaledProducts } from '../../services/api';
import { IProductQuery } from '../../types';
import ListHeader from '../ListHeader';
import MostSaledListItem from '../MostSaledListItem';
import { useState } from 'react';
import { useQuery } from 'react-query';

const MostSaledList = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, error }: IProductQuery = useQuery(
    ['mostsaled', page],
    () => getMostSaledProducts(page),
  );

  const handleNextPage = () => {
    setPage(p => p + 1);
  };
  const handlePrevPage = () => {
    if (data && data.page > 0) {
      setPage(p => p - 1);
    }
  };

  if (isLoading) {
    return (
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        w="30%"
        h="100vh"
        borderRight={'2px solid whitesmoke'}
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
        <Heading size="md">
          Algo deu errado com a lista de Mais vendidos
        </Heading>
      </Flex>
    );
  }

  return (
    <Flex direction="column" alignItems="center" w="30%" h="100%">
      <ListHeader
        handleNextPage={data.nextPage && handleNextPage}
        handlePrevPage={data.previousPage && handlePrevPage}
        title="Mais vendidos"
      />
      <Flex
        p={5}
        borderRadius={10}
        wrap="wrap"
        justifyContent="space-around"
        w="100%"
        h="100%"
        maxH="680px"
        bgColor="#F3F5F9"
        gap={2}
      >
        {data.content.map((item, index) => (
          <MostSaledListItem
            key={index}
            name={item.name}
            price={item.price}
            sales={item.sales}
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

export default MostSaledList;
