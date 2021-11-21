import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import {
    ImageContainer,
    LeftContainer,
    MainContentContainer,
    RightContainer,
    TotalContainer,
    LeftBottomContainer,
    TextBox,
    LeftTopContainer,
    RightBottomContainer,
    RightTopContainer,
    CommentBox,
} from './DetailStyle';
import { DetailContent, PostName } from './DetailFunction/Article';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';

export default function DetailPage(props) {
    return (
        <Dialog
            scroll={'body'}
            maxWidth={false}
            open={props.open}
            onClose={props.close}
            PaperProps={{
                style: {
                    backgroundColor: 'rgba(64, 64, 64, 0.7)',
                    backdropFilter: 'blur(30px)',
                    borderRadius: '20px',
                    color: '#ffffff',
                },
            }}
        >
            <DialogContent>
                <TotalContainer>
                    <MainContentContainer>
                        <LeftContainer>
                            <ImageContainer>
                                <img
                                    src={`13.124.13.37:5000/${props.imageUrl}`}

                                    alt={'사진'}
                                    style={{
                                        width: '100%',
                                        hegiht: '100%',
                                        maxHeight: '850px',
                                        borderRadius: '20px',
                                    }}
                                />
                                <LeftTopContainer style={{ left: '150px' }}>
                                </LeftTopContainer>
                                <LeftBottomContainer>
                                    <div
                                        style={{
                                            alignItems: 'left',
                                            textAlign: 'left',
                                        }}
                                    >
                                    </div>
                                </LeftBottomContainer>
                                <RightTopContainer>
                                </RightTopContainer>
                                <RightBottomContainer>
                                    <div
                                        style={{
                                            display: 'flex',
                                            cursor: 'pointer',
                                        }}
                                    // onClick={openMap}
                                    >
                                        <img
                                            style={{
                                                marginRight: '4px',
                                                width: '15px',
                                                height: '20px',
                                            }}
                                            src="/images/location.png"
                                            alt=""
                                        />
                                        <p
                                            style={{
                                                fontWeight: 'normal',
                                                fontSize: '13px',
                                                lineHeight: '23px',
                                            }}
                                        >
                                            카카오맵으로 이동
                                        </p>
                                    </div>
                                </RightBottomContainer>
                            </ImageContainer>
                            <PostName>{props.title}</PostName>
                            <DetailContent>
                                {props.review}
                            </DetailContent>
                        </LeftContainer>
                        <RightContainer>
                            <div
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <p>평점그래프</p>
                                <div>
                                    <ClearTwoToneIcon
                                        fontSize="large"
                                        style={{
                                            cursor: 'pointer',
                                            marginTop: '-20%',
                                            marginRight: '-28px',
                                        }}
                                        onClick={props.close}
                                    />
                                </div>
                            </div>
                            <div style={{ marginTop: '20px' }}>
                            </div>
                            <CommentBox
                                style={{
                                    height: 'auto',
                                    minHeight: '35%',
                                    maxHeight: '65%',
                                    width: '100%',
                                    marginTop: '60px',
                                    overflow: 'auto',
                                }}
                            >
                            </CommentBox>
                        </RightContainer>
                    </MainContentContainer>
                </TotalContainer>
            </DialogContent >
            <DialogActions>
            </DialogActions>
        </Dialog >
    );
}

