import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Picture from './Picture';

import FlipMove from 'react-flip-move';

import styled from 'styled-components';
import Loader from './Loader';
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
    //const [last, setLast] = useState(null);
    const [mood, setMood] = useState('');
    // const [hasMore, setHasMore] = useState(true);
    const moods = ['영화', '공연', '축제', '여행', '맛집', '기타'];

    const [please, setPlease] = useState([]);


    // useEffect(() => {
    //     const getPlay = () => {
    //         Axios.post("/api/mysql/jams/read/mood")
    //             .then((response) => {
    //                 // console.log(response);
    //                 // console.log(response.data);
    //                 // console.log(response.data.jams);
    //                 // const arr = response.data.jams;
    //                 // console.log(arr);
    //                 setPosts([response.data.jams])
    //             });
    //         console.log(posts);
    //     }
    //     return () => {
    //         getPlay();
    //     };
    // }, []);


    // const getPlay = () => {
    //     Axios.post("/api/mysql/jams/read/mood").then((response) => {
    //         if (response.data.success) {
    //             setPosts(response.data.products);
    //         } else {
    //             alert("Failed to fectch product datas");
    //         }
    //     });
    // };

    useEffect(() => {

        //onMoodChange();
    }, []);



    const onMoodChange = (e) => {

        setMood(e.currentTarget.innerText);
        setPosts([]);


        const variables = {
            mood: e.currentTarget.innerText,
        }
        console.log(e.currentTarget.innerText);

        Axios.post("/api/mysql/jams/read/mood", variables)
            .then((response) => {
                // console.log(response);
                console.log(response.data);
                // console.log(response.data.jams);
                // const list = response.data.jams;
                // console.log(list[0].mood);
                // setPosts([...posts])
                // console.log(posts);

                // if (response.data.success) {
                //     console.log(posts);
                //     setPosts(response.data.jams)
                //     console.log(1);
                //     console.log(posts);

                // } else {
                //     setPosts(response.data.jams)
                //     console.log(2);
                // }
                // console.log(posts[0]);

                // const list = posts[0];

                // console.log(list);
                // setPlease(list)
                // console.log(please);
                if (response.data.success) {
                    setPosts(response.data.jams);

                } else {
                    alert("Failed to fectch product datas");
                }
            });
        console.log(posts);
        console.log(posts.length);



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

            {/* <InfiniteScroll
                dataLength={posts.length}
                //next={(mood && moodNext) || next}
                //hasMore={hasMore}
                loader={<Loader />}
            > */}
            <Container>
                {/* <FlipMove> */}

                {posts.map((post) => (
                    <Picture
                        //uid={post.uid}
                        id={post.id}
                        key={post.id}
                        //advertising={post.advertising}
                        //area={post.area}
                        //avatar={post.avatar}
                        //heart={post.heart}
                        imageUrl={post.images[0]}
                        //latitude={post.latitude}
                        //longitude={post.longitude}
                        mood={post.mood}
                        //novelty={post.novelty}
                        //rating={post.rating}
                        review={post.review}
                        //timestamp={post.timestamp}
                        title={post.title}
                    //username={post.username}
                    //address={post.address}
                    />
                    // <div>
                    //     <p>{post.id}</p>
                    //     <p>{post.title}</p>
                    //     <img
                    //         src={`http://localhost:5000/${post.images[0]}`}
                    //         alt="play" />
                    //     <p>{post.mood}</p>
                    //     <p>{post.createdAt}</p>
                    // </div>
                ))}
                {/* {getPlay()} */}
                {/* </FlipMove> */}
            </Container>
            {/* </InfiniteScroll> */}
        </MarginContainer>
    );
};
