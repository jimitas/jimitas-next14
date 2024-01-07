import React from "react";
import Title from "@/components/Layout/Title";
import { Block } from "@/components/Block";
import { Hide } from "@/components/Hide";

const Home: React.FC = () => {
  return (
    <div>
      <Title title="ぶろっく" />
      <Block leftCount={10} rightCount={10} />
      <Hide />
    </div>
  );
};

export default Home;
