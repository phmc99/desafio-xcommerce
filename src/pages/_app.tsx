import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import { makeServer } from '../mirage';
import { Provider } from 'jotai';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider>
          <Provider>
            <Component {...pageProps} />
          </Provider>
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
