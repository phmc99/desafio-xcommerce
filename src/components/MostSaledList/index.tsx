import { Box, Flex, Text } from '@chakra-ui/react';
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
