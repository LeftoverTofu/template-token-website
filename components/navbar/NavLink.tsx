import { Link, useColorModeValue } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface NavLinkProps {
    children: ReactNode
}


const NavLink: FC<NavLinkProps> = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default NavLink;