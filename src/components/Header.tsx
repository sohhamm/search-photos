import * as React from 'react';
import { MdSearch } from 'react-icons/md';
import {
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
      bg="bisque"
    >
      {/* <InputGroup w="30%">
        <Input />
        <InputRightElement>
          <Icon as={MdSearch} />
        </InputRightElement>
      </InputGroup> */}
      <Heading>Search Photos</Heading>
      <ComboBox />
    </Flex>
  );
}
