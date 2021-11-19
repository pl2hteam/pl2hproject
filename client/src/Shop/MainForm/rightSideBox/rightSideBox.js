import React from "react";
import styled from "styled-components";
import ActivityStatus from "./activityStatus";
import MusicPlayer from "./musicPlayer";
import Button from "./buttons";

const Container = styled.div`
  background-color: #fff;
  width: 250px;
  height: 300px;
  position: absolute;
  top: 32px;
  right: 36px;
`;

function RightSideBox() {
  return (
    <Container>
      <ActivityStatus />
      <MusicPlayer />
      <Button />
    </Container>
  );
}

export default RightSideBox;
