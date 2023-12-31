import React, { ReactNode } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";


type MainLayoutProps = {
    children: ReactNode; 
};


const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className=" ">
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default MainLayout;
