import * as React from "react";
import {Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure} from "@chakra-ui/react";
import {FaBars} from "@react-icons/all-files/fa/FaBars";
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

const Navbar = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <nav className="flex flex-row lg:justify-center bg-amber-900">
                <div className="w-full flex flex-row justify-between items-center lg:hidden mx-3 py-2">
                    <Link to="/">
                        <StaticImage className="max-w-24" src="../../images/logoAG_transparent.png"
                                     alt="Logo de la institución" placeholder="none"/>
                    </Link>
                    <button className="p-4 rounded" onClick={onOpen}
                            aria-label="Abrir menú lateral">
                        <FaBars className="text-white text-2xl"></FaBars>
                    </button>
                </div>
            </nav>
            <Drawer isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Navbar