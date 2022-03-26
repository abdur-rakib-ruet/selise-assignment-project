import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import FavouriteAuthor from "../FavouriteAuthor";
import Author from "../Author";

const MainContent = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Author />} />
        <Route path='/favourite-author' element={<FavouriteAuthor />} />
      </Routes>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
};

export default MainContent;
