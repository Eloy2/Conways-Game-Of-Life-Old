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

const P = styled.p`
    margin-top: 5%;
    width: 70%;
    padding: 3%;
    color: #9d03fc;
    text-align: center;
    border-radius: 15px;
    background: #323845;
    box-shadow: inset 6px 6px 12px #2b303b, 
                inset -6px -6px 12px #3a404f;
`

function About() {
    return (
        <OuterDiv>
            <Header><Title>About</Title></Header>
            <BottomDiv>
                <P>
                This is a game originally made by John Horton Conway. 
                It is a zero player game where you simply put initial input, hit start and observe. 
                It is supposed to mimic life and its randomness. Some patterns remain still, some 
                repeat endlessly, and others eventually end. It is considered turing complete 
                because it is a system that is able to recognize or decide other data-manipulation 
                rule sets.
                </P>
            </BottomDiv>
        </OuterDiv>
    );
}

export default About;