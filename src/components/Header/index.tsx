import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Text, Avatar, IconButton } from '@chakra-ui/react';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <Flex
        w="100%"
        h="20%"
        alignItems="center"
        justifyContent="space-between"
        px={10}
        mb={5}
      >
        <Link href="/">
          <Flex
            color="white"
            fontSize="2xl"
            display="flex"
            h="100%"
            alignItems="center"
          >
            <Text fontWeight="bold">XCO</Text>
            <Text fontWeight="bold" color="#9765D8">
              +
            </Text>
          </Flex>
        </Link>
        <Flex h="100%" gap={2} alignItems="center">
          <Avatar name="Sasuke Uchiha" src="https://bit.ly/broken-link" />
          <IconButton
            bgColor="transparent"
            aria-label="User options"
            fontSize="2xl"
            color="white"
            _hover={{
              bgColor: 'transparent',
              color: 'white',
              filter: 'brightness(0.85)',
            }}
            icon={<ChevronDownIcon />}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
