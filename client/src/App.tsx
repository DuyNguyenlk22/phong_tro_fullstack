import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login } from "./containers/Public/Index";
import { path } from "./ultils/constant";

export const App: React.FC = () => {
  return (
    <main className='w-screen h-screen bg-primary'>
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route
          path={path.LOGIN}
          element={
            <Home>
              <Login />
            </Home>
          }
        />
      </Routes>
    </main>
  );
};
