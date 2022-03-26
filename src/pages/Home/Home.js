import React from "react";
import { Layout } from "antd";
import SideBar from "../../components/SideBar";
import MainContent from "../../components/MainContent/MainContent";

const Home = () => {
  return (
    <Layout>
      <SideBar />
      <MainContent />
    </Layout>
  );
};

export default Home;
