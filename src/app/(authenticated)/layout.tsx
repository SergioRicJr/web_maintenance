import MaintenanceLogo from "@/components/svg/maintenanceLogo";
import { ReactNode } from "react";
import {
    Menubar,
    MenubarMenu,
} from "@/components/ui/menubar"
import { Button } from "@/components/ui/button";
import Header from "@/components/header";

interface PrivateLayoutProps {
    children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {

    return (
        <div className="min-h-screen w-screen flex flex-col">
            <Header/>
            {children}
        </div>
    );
}