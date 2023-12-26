import React, { ReactNode } from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';


// Define Props type for MainLayout
type MainLayoutProps = {
  children: ReactNode; // ReactNode allows any JSX to be passed as children
};

// Define MainLayout component with MainLayoutProps type
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <Navbar />
      <div >{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
