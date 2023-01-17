import { Button, Flex } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import {
  createToggleAtom,
  favoriteProductsAtom,
  favoriteToggleAtom,
} from '../../atoms';

const HeaderButtonGroup = () => {
  const [favoriteToogle, setFavoriteToogle] = useAtom(favoriteToggleAtom);
  const [createToggle, setCreateToggle] = useAtom(createToggleAtom);
  const [, setFavoriteProducts] = useAtom(favoriteProductsAtom);

  const handleToggleFavoriteProducts = () => {
    setFavoriteProducts(
      JSON.parse(localStorage.getItem('@xco:favorites') || '[]'),
    );
    setFavoriteToogle(!favoriteToogle);
  };

  const hoverProps = {
    bgColor: '#D32811',
    color: 'white',
    filter: 'brightness(1.15)',
  };

  return (
    <>
      <Flex
        w="100%"
        h="20%"
        alignItems="center"
        justifyContent="space-between"
        px={10}
        mt={5}
      >
        <Flex gap={5}>
          <Button
            size="sm"
            color="white"
            bgColor="#D32811"
            fontWeight="normal"
            filter={favoriteToogle ? 'brightness(0.85)' : 'brightness(1)'}
            _hover={hoverProps}
            onClick={handleToggleFavoriteProducts}
          >
            Todos
          </Button>
          <Button
            size="sm"
            color="white"
            bgColor="#D32811"
            fontWeight="normal"
            filter={favoriteToogle ? 'brightness(1)' : 'brightness(0.85)'}
            _hover={hoverProps}
            onClick={handleToggleFavoriteProducts}
          >
            Favoritos
          </Button>
        </Flex>
        <Button
          size="sm"
          color="white"
          bgColor="#D32811"
          fontWeight="normal"
          _hover={hoverProps}
          onClick={() => setCreateToggle(!createToggle)}
        >
          Criar novo
        </Button>
      </Flex>
    </>
  );
};

export default HeaderButtonGroup;
