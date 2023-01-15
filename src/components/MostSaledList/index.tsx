import { Box, Flex, Text } from '@chakra-ui/react';
import ListHeader from '../ListHeader';
import MostSaledListItem from '../MostSaledListItem';

const MostSaledList = () => {
  return (
    <Flex direction="column" alignItems="center" w="30%" h="100%">
      <ListHeader title="Mais vendidos" />
      <Flex
        p={5}
        borderRadius={10}
        wrap="wrap"
        justifyContent="space-around"
        w="100%"
        h="100%"
        bgColor="#F3F5F9"
        gap={5}
      >
        <MostSaledListItem />
        <MostSaledListItem />
        <MostSaledListItem />
        <MostSaledListItem />
        <MostSaledListItem />
        <MostSaledListItem />
      </Flex>
      <Box mt={3} alignSelf="flex-end">
        <Text fontWeight="medium" color="#636363" fontSize="sm">
          Página 1 de 10
        </Text>
      </Box>
    </Flex>
  );
};

export default MostSaledList;
