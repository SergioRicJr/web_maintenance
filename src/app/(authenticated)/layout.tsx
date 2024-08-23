import MaintenanceLogo from "@/components/svg/maintenanceLogo";
import { ReactNode } from "react";
import {
    Menubar,
    MenubarMenu,
} from "@/components/ui/menubar"
import { Button } from "@/components/ui/button";

interface PrivateLayoutProps {
    children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {

    return (
        <div className="min-h-screen w-screen flex flex-col">
            <header className="w-full p-4 flex justify-between">
                <MaintenanceLogo size={195}/>
                <Menubar className="h-12">
                    <MenubarMenu>
                        <Button variant='ghost'>Máquinas</Button>
                        <Button variant='ghost'>Peças</Button>
                        <Button variant='ghost'>Manutenções</Button>
                        <Button variant='ghost'>Equipes</Button>
                        <Button variant='ghost'>Dashboard</Button>
                    </MenubarMenu>
                </Menubar>
            </header>
            {children}
        </div>
    );
}