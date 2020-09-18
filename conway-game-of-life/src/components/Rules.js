import React from 'react';
import styled from 'styled-components';

const OuterDiv = styled.div`
    width: 50%;
    background-color: #323845;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Header = styled.header`
    width: 95%;
    padding 1%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #202630;
    border-radius: 15px;
    background: #202630;
    box-shadow:  8px 8px 17px #1b2029, 
                 -8px -8px 17px #252c37;
`
const Title = styled.h2`
    color: #9d03fc;
`

const BottomDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const BulletList = styled.ul`
    margin-top: 8%;
    padding: 5% 10% 5% 10%;
    color: #9d03fc;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 15px;
    background: #323845;
    box-shadow: inset 6px 6px 12px #2b303b, 
                inset -6px -6px 12px #3a404f;
`

const Bullet = styled.li`
`

function Rules() {
    return (
        <OuterDiv>
            <Header><Title>Rules</Title></Header>
            <BottomDiv>
                <BulletList>
                    <Bullet>Any live cell with two or three live neighbours survives.</Bullet>
                    <Bullet>Any dead cell with three live neighbours becomes a live cell.</Bullet>
                    <Bullet>All other live cells die in the next generation. Similarly, all other dead cells stay dead.</Bullet>
                </BulletList>
            </BottomDiv>    
        </OuterDiv>
    );
}

export default Rules;