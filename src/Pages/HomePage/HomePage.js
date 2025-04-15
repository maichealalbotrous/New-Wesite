import React from "react";
import "./HomePage.css";
import Navbar from "../../components/navbar/Navbar";
import Provide from "../../Context/Provide";
import NewsFeed from "../../components/newsFeed/NewsFeed";
const HomePage = () => {
  return (
    <div>
      <Provide>
        <Navbar />
        <NewsFeed />
      </Provide>
    </div>
  );
};

export default HomePage;
