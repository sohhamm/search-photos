import * as React from 'react';
import { MdSearch } from 'react-icons/md';
import {
  Box,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import SearchBar from './SearchBar/SearchBar';

export default function Header() {
  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
      direction="column"
      bg="gray.600"
    >
      <Heading color="white">Search Photos</Heading>
      <Box zIndex={1}>
        <SearchBar />
      </Box>
    </Flex>
  );
}
