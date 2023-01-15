import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, Heading, IconButton } from '@chakra-ui/react';
import React from 'react';

interface ListHeaderProps {
  title: string;
  handleChangePage?: () => void;
}

const ListHeader = ({ title }: ListHeaderProps) => {
  return (
    <Flex w="100%" justifyContent="space-between">
      <Heading size="md">{title}</Heading>
      <Flex gap={1}>
        <IconButton
          bgColor="transparent"
          aria-label="Change page"
          fontSize="2xl"
          color="#235EE7"
          _hover={{
            bgColor: 'transparent',
            color: '#235EE7',
            filter: 'brightness(0.85)',
          }}
          icon={<ArrowBackIcon />}
        />
        <IconButton
          bgColor="transparent"
          aria-label="Change page"
          fontSize="2xl"
          color="#235EE7"
          _hover={{
            bgColor: 'transparent',
            color: '#235EE7',
            filter: 'brightness(0.85)',
          }}
          icon={<ArrowForwardIcon />}
        />
      </Flex>
    </Flex>
  );
};

export default ListHeader;
