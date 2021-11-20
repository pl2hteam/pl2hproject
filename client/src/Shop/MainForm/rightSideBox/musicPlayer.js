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
      <NowPlaying>
        💿
        <PlayWrap>
          <Music>프리스타일-Y</Music>
        </PlayWrap>
      </NowPlaying>
      <div>
        <iframe
          width="240"
          height="100"
          src="https://www.youtube.com/embed/_3A-jr1xC9o?loop=1&controls=1&autoplay=1&mute=0&disablekb=1&fs=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
          gyroscope; picture-in-picture;"
        ></iframe>
      </div>
    </Container>
  );
}

export default MusicPlayer;
