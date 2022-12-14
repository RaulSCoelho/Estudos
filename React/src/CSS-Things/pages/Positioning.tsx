import React from 'react'

import styled from 'styled-components'

export const Positioning: React.FC = () => {
  return (
    <Flex>
      <div className="parent">
        Parent
        <div className="child-one">One</div>
        <div className="child-two">Two</div>
        <div className="child-three">Three</div>
      </div>
    </Flex>
  )
}

const Flex = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 20px;

  .parent {
    position: relative;
    height: 200vh;
  }

  .child-one {
    position: absolute;
    top: 0;
  }

  .child-two {
    position: fixed;
    top: 0;
    left: 0;
  }

  .child-three {
    position: sticky;
    top: 0;
  }

  // BASIC STYLE
  .parent {
    width: 100%;
    padding: 10px;
    background-color: #966eed;
    font-size: 20px;
    color: black;
  }

  .child-one {
    padding: 10px;
    background-color: #50fa7b;
  }

  .child-two {
    padding: 10px;
    background-color: #f44336;
  }

  .child-three {
    padding: 10px;
    background-color: #ff79c6;
  }
`
