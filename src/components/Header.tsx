
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import './header.css'

function Header() {
  return (
    <Navbar>
    <NavbarBrand>
      <h3>Flight </h3>
      <p className="font-bold text-inherit">BOOKING</p>
    </NavbarBrand>
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
     
      <NavbarItem isActive>
        <Link href="#" aria-current="page">
          Search
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Integrations
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Features
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link href="#">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="#" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
  );
}

export default Header;
