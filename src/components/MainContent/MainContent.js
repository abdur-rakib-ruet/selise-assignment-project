import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import FavouriteAuthor from "../FavouriteAuthor";
import Author from "../Author";

const MainContent = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/authors' element={<Author />} />
        <Route path='/favourite-authors' element={<FavouriteAuthor />} />
      </Routes>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
};

export default MainContent;
