import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import produce from 'immer'; // produce from immer allows me make a copy of state

const OuterDiv = styled.div`
    width: 100%;
    border: 1px solid red;
`

const Header = styled.header`
    border: 1px solid red;
    padding .5%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title = styled.h2`
    color: #34a4eb;
`

const MidDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const BottomDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`

`
const numberCols = 50;
const numberRows = 50;
const speed = 1000;

const GridDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(${numberCols}, 10px)
`

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const moves = [ // [x, y]
    [0, 1], // north
    [1, 1], // north-east
    [1, 0], // east
    [1, -1], // south-east
    [0, -1], // south
    [-1, -1], // south-west
    [-1, 0], // west
    [-1, 1], // northwest
]

function Grid2() {
    const [grid, setGrid] = useState(() => {
        const row = [];
        for (let i= 0; i < numberRows; i++) {
            row.push(Array.from(Array(numberCols), () => 0))
        }
        return row;
    }) // initial state

    const [looping, setLooping] = useState(false); // flag checks if simulation is running
    
    // const loopingRef = useRef(looping); 
    // loopingRef.current = looping; // will get the current value of looping

    const simulation = () => {
        setGrid(grid => {
            return produce(grid, gridCopy => {
                for (let i = 0; i < numberRows; i++) {
                    for (let j = 0; i < numberCols; i++) {
                        let neighbors = 0;
                        moves.forEach(([x,y]) => {
                            const newI = i + x;
                            const newJ = j + y;
                            if (newI >= 0 && newI < numberRows && newJ >= 0 && newJ < numberCols) { // staying within boundaries of grid
                                neighbors += grid[newI][newJ];
                            }
                        })

                            if(neighbors < 2 || neighbors > 3) { // if there are too little or too many neighbors the cell dies
                                gridCopy[i][j] = 0;
                            } else if (grid[i][j] === 0 && neighbors === 3) { // if conditions are right cell lives on to next gen
                                gridCopy[i][j] = 1;
                            }
                        }
                    }
                })
        })
    }

    const startLooping = async () => { // useCallback returns a memoized version of calback
        while(looping) {
            simulation();
            await sleep(1000);
        }
    } // passing an empty array will make sure that this funcitonm is only created once

    return (
        <OuterDiv>
            <Header><Title>Generation #:</Title></Header>
            <MidDiv>
                <GridDiv>
                    {grid.map((rows, i) =>
                        rows.map((cols, j) => (
                            <div
                            onClick={() => {
                                const newGrid = produce(grid, gridCopy => {
                                    gridCopy[i][j] = grid[i][j] ? 0 : 1;
                                })
                                setGrid(newGrid)
                            }}
                            style={{
                                width: 10,
                                height: 10,
                                backgroundColor: grid[i][j] ? "black" : undefined,
                                border: ".1px solid black"
                            }}/>
                        ))
                    )}
                </GridDiv>
            </MidDiv>
            <BottomDiv>
                <Button onClick={() => {
                    setLooping(!looping);
                    if (!looping) {
                        startLooping();
                    }
                }}>{ looping ? "Stop" : "Start" }</Button>
                <Button>Clear</Button>
            </BottomDiv>
        </OuterDiv>
    );
}

export default Grid2;