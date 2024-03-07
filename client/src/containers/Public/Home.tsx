import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

type Props = {
  children?: React.ReactNode;
};

const Home: React.FC<Props> = ({ children }) => {
  return (
    <div className='w-full h-full'>
      <Header />
      <Navbar />
      <div className='w-full'>{children}</div>
    </div>
  );
};

export default Home;
