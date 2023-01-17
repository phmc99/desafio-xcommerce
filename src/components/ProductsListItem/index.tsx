import { StarIcon } from '@chakra-ui/icons';
import {
  Divider,
  Flex,
  IconButton,
  Img,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { favoriteProductsAtom } from '../../atoms';
import { IProduct } from '../../types';

interface ProductsListItemProps extends IProduct {
  favorite: boolean;
}

const ProductsListItem = ({
  code,
  name,
  sales,
  price,
  stock,
  favorite,
}: ProductsListItemProps) => {
  const [favoriteProducts, setFavoriteProducts] = useAtom(favoriteProductsAtom);

  const toast = useToast();

  const handleFavoriteProduct = (item: IProduct) => {
    const find = favoriteProducts.find(el => el.code === item.code);

    if (find === undefined) {
      setFavoriteProducts([...favoriteProducts, item]);
      localStorage.setItem(
        '@xco:favorites',
        JSON.stringify([...favoriteProducts, item]),
      );
      toast({
        title: 'Produto favoritado.',
        status: 'success',
        duration: 2000,
      });
    } else {
      const filter = favoriteProducts.filter(
        remove => remove.name !== item.name,
      );
      setFavoriteProducts(filter);
      localStorage.setItem('@xco:favorites', JSON.stringify(filter));
      toast({
        title: 'Produto removido do favoritos.',
        status: 'info',
        duration: 2000,
      });
    }
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
              {name}
            </Text>
            <Text fontSize="sm" color="#717787" fontWeight="semibold">
              #{code}
            </Text>
          </Flex>
        </Flex>
        <Flex
          color="#717787"
          justifyContent="space-between"
          width="60%"
          alignItems="center"
        >
          <Text>R${price}</Text>
          <Flex direction="column">
            <Text fontWeight="semibold">
              Total de {Math.ceil(price * sales)}
            </Text>
            <Text>{sales} vendas</Text>
          </Flex>
          <Text>{stock} und</Text>
          <IconButton
            aria-label="Favorite product"
            bgColor="transparent"
            fontSize="2xl"
            color={favorite ? 'orange' : '#99A0B0'}
            _hover={{
              bgColor: 'transparent',
              filter: 'brightness(0.85)',
            }}
            _active={{
              color: 'orange',
            }}
            icon={<StarIcon />}
            onClick={() =>
              handleFavoriteProduct({ name, price, sales, stock, code })
            }
          />
        </Flex>
      </Flex>
      <Divider borderColor="gray.300" borderStyle="dashed" />
    </>
  );
};

export default ProductsListItem;
