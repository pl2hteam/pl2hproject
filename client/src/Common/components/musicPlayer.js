import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background-color: #efefef;
  padding: 5px 5px 0;
`;

const NowPlaying = styled.div`
  background-color: #d2d2d2;
  padding: 7px;
  display: flex;
`;

const PlayWrap = styled.div`
  position: relative;
  /* overflow: hidden; */
  width: 100%;
  margin-left: 7px;
`;

const example = keyframes`
0% {
  left: 240px;
}
100% {
  left: -120px;
}
`;

const Music = styled.div`
  width: 87px;
  display: inline-block;
  margin-left: 30px;
  position: absolute;
  animation-name: ${example};
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

function MusicPlayer() {
  return (
    <Container>
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/SWqQQ6Yb-6g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </Container>
  );
}

export default MusicPlayer;