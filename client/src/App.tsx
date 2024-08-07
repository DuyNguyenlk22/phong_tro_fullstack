import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  DetailPost,
  Home,
  HomePage,
  Login,
  RentalApartment,
  RentalHouse,
  RentalRoom,
  RentalSpace,
} from './containers/Public/Index';
import { path } from './utils/constant';

export const App: React.FC = () => {
  return (
    <main className='bg-primary'>
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={'*'} element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment />} />
          <Route path={path.NHA_CHO_THUE} element={<RentalHouse />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoom />} />
          <Route path={path.DETAIL_POST__TITLE__POSTID} element={<DetailPost />} />
          <Route path={'chi-tiet/*'} element={<DetailPost />} />
        </Route>
      </Routes>
    </main>
  );
};
