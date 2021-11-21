import React, { useState, useEffect } from 'react';
import Picture from './Picture';
import styled from 'styled-components';
import './MainGrid.css';
import Axios from "axios";

const MarginContainer = styled.div`
    max-width: 1440px;
    margin: auto;
    margin-top: 90px;
`;

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h4`
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 43px;
    letter-spacing: -0.6px;
`;

const MoodList = styled.ul`
    display: flex;
`;

const Mood = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80px;
    height: 46px;
    margin-left: 20px;
    box-sizing: border-box;
    color: ${(props) => (props.active ? '#ff534b' : '')};
    cursor: pointer;

    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.48px;

    &:hover {
        color: #ff534b;
        transition: color 300ms ease-out;
    }
`;

const Container = styled.div`
    width: 1440px;
    margin: 36px 0;
    columns: 3;
    column-gap: 40px;
`;

export default () => {
    const [posts, setPosts] = useState([]);
    const [mood, setMood] = useState('');
    const moods = ['도시', '자연', '여유', '고요', '활기', '낭만'];

    const onMoodChange = (e) => {

        setMood(e.currentTarget.innerText);
        setPosts([]);


        const variables = {
            mood: e.currentTarget.innerText,
        }
        console.log(e.currentTarget.innerText);

        Axios.post("/api/mysql/jams/read/mood", variables)
            .then((response) => {
                if (response.data.success) {
                    setPosts(response.data.jams);

                } else {
                    alert("Failed to fectch product datas");
                }
            });
    };


    return (
        <MarginContainer>
            <HeaderContainer>
                <Title>🎪🎉🎏</Title>
                <MoodList>
                    {moods.map((moodText) => (
                        <Mood
                            key={moodText}
                            onClick={onMoodChange}
                            active={moodText === mood ? true : false}
                        >
                            {moodText}
                        </Mood>
                    ))}
                </MoodList>
            </HeaderContainer>
            <Container>
                {posts.map((post) => (
                    <Picture
                        id={post.id}
                        key={post.id}
                        imageUrl={post.images[0]}
                        mood={post.mood}
                        review={post.review}
                        title={post.title}
                    />
                ))}
            </Container>
        </MarginContainer>
    );
};
