import { Divider, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import Header from '../components/Header';
import HeaderButtonGroup from '../components/HeaderButtonGroup';
import MostSaledList from '../components/MostSaledList';
import ProductsList from '../components/ProductsList';
import SearchBox from '../components/SearchBox';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next App by @phmc99</title>
        <meta name="description" content="Next App by @phmc99" />
      </Head>
      <Flex overflowX="hidden" direction="column" alignItems="center">
        <Flex
          h="40vh"
          w="100vw"
          bgColor="#17223E"
          direction="column"
          alignItems="center"
          py={5}
        >
          <Header />
          <Divider borderColor="gray.700" />
          <SearchBox />
          <Divider borderColor="gray.700" w={'95%'} />
          <HeaderButtonGroup />
        </Flex>
        <Flex h="100%" w="100vw" bgColor="#FAFAFA">
          <Flex h="100%" w="100%" px={10} pt={20} pb={10} gap={10}>
            <MostSaledList />
            <ProductsList favoriteProducts={false} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
