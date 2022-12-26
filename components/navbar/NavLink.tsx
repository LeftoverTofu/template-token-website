import { Link, useColorModeValue } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface NavLinkProps {
    href: string,
    children: ReactNode
}


const NavLink: FC<NavLinkProps> = ({ href, children }) => (
  <Link
    px={2}
    py={1}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}>
    {children}
  </Link>
);

export default NavLink;