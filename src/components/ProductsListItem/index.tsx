import { StarIcon } from '@chakra-ui/icons';
import { Divider, Flex, IconButton, Img, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface ProductsListItemProps {
  isFavorite?: boolean;
}

const ProductsListItem = ({ isFavorite }: ProductsListItemProps) => {
  const [favoriteToogle, setFavoriteToogle] = useState(isFavorite || false);

  const handleFavoriteProduct = () => {
    setFavoriteToogle(!favoriteToogle);
  };

  return (
    <>
      <Flex p={5} w="100%" justifyContent="space-between" alignItems="center">
        <Flex alignItems="center" gap={5} width="60%">
          <Img
            rounded={10}
            boxShadow="md"
            w="20%"
            src="https://via.placeholder.com/600"
            alt="Product"
          />
          <Flex direction="column">
            <Text
              w="80%"
              maxH={12}
              overflow="hidden"
              fontWeight="semibold"
              fontSize="md"
              color="#235EE7"
            >
              Kit 10 un adesivo 3m porta cartao de silicone para celular Kit 10
              un adesivo 3m porta cartao de silicone para celular
            </Text>
            <Text fontSize="sm" color="#717787" fontWeight="semibold">
              #MLB1234567890
            </Text>
          </Flex>
        </Flex>
        <Flex
          color="#717787"
          justifyContent="space-between"
          width="60%"
          alignItems="center"
        >
          <Text>R$40,00</Text>
          <Flex direction="column">
            <Text fontWeight="semibold">Total de 3000</Text>
            <Text>150 vendas</Text>
          </Flex>
          <Text>0 und</Text>
          <IconButton
            aria-label="Favorite product"
            bgColor="transparent"
            fontSize="2xl"
            color={favoriteToogle ? 'orange' : '#99A0B0'}
            _hover={{
              bgColor: 'transparent',
              filter: 'brightness(0.85)',
            }}
            _active={{
              color: 'orange',
            }}
            icon={<StarIcon />}
            onClick={handleFavoriteProduct}
          />
        </Flex>
      </Flex>
      <Divider borderColor="gray.300" borderStyle="dashed" />
    </>
  );
};

export default ProductsListItem;
