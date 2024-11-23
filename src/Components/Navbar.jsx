import React from 'react'
import { Navbar,NavbarBrand,NavbarContent,NavbarItem,Button, Link } from '@nextui-org/react'
function NavbarArea() {
  return (
    <Navbar shouldHideOnScroll isBlurred={false} className='w-full' maxWidth='xl'>
        <NavbarBrand>
            <div className='w-26'>
                <img src="/logo.png" alt="logo" />
            </div>
        </NavbarBrand>

        <NavbarContent justify='end'>
            <NavbarItem>
                <Button color='primary' variant='bordered' radius='full' as={Link} >Contact</Button>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
  )
}

export default NavbarArea