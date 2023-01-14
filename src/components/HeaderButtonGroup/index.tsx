import { Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';

const HeaderButtonGroup = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<boolean>(false);

  const handleToggleFavoriteProducts = () => {
    setFavoriteProducts(!favoriteProducts);
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
            filter={favoriteProducts ? 'brightness(0.85)' : 'brightness(1)'}
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
            filter={favoriteProducts ? 'brightness(1)' : 'brightness(0.85)'}
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
        >
          Criar novo
        </Button>
      </Flex>
    </>
  );
};

export default HeaderButtonGroup;
