import * as React from 'react';
import { MdSearch } from 'react-icons/md';
import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex w="100%" justify="center" align="center">
      <InputGroup w="30%">
        <Input />
        <InputRightElement>
          <Icon as={MdSearch} />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}
