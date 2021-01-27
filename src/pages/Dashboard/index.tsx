import React from "react";
import { Container } from "./styles";

import Clock from "../../components/Clock";
import SearchBar from "../../components/SearchBar";
import Shortcuts from "../../components/Shortcuts";
import ToDos from "../../components//ToDos";

import api from "../../api/";

const Dashboard: React.FC = () => {
  // async function getWallpaperData() {
  //   const vetWallpapers = api.get("nature");
  // }

  const wallpaper = "https://source.unsplash.com/random/1080x1920";

  return (
    <Container wallpaperUrl={wallpaper}>
      <SearchBar />
      <Clock></Clock>
      <Shortcuts></Shortcuts>
      <ToDos></ToDos>
    </Container>
  );
};

export default Dashboard;
