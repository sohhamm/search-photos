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
import ComboBox from './ComboBox';

export default function Header() {
  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
      direction="column"
      bg="gray.600"
    >
      {/* <InputGroup w="30%">
        <Input />
        <InputRightElement>
          <Icon as={MdSearch} />
        </InputRightElement>
      </InputGroup> */}
      <Heading color="white">Search Photos</Heading>
      <Box zIndex={1}>
        <ComboBox />
      </Box>
    </Flex>
  );
}
