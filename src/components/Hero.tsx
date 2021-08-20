import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("${process.env.PUBLIC_URL + "img/hero.jpeg"}");
  background-repeat: no-repeat;
  background-size: 100%;
`;

const Hero = () => {
  return <Div></Div>;
};

export default Hero;
