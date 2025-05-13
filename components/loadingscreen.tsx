
/* eslint-disable */

import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="eye">
        <div className="up" />
        <div className="mid" /> 
        <div className="down" /> 
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .eye {
    width: 100px;
    height: 60px;
    position: relative;
    z-index: 1;
  }

  .up {
    position: absolute;
    top: 0px;
    height: 100px;
    width: 100px;
    border-width: 2px;
    border-style: solid;
    border-color: black transparent transparent transparent;
    border-radius: 50%;
    z-index: 1;
  }

  .down {
    position: absolute;
    top: -70px;
    height: 100px;
    width: 100px;
    border-width: 2px;
    border-style: solid;
    border-color: transparent transparent black transparent;
    border-radius: 50%;
    z-index: 1;
  }

  .mid {
    position: absolute;
    top: 1px;
    left: 39px;
    width: 27px;
    height: 27px;
    border: none;
    border-radius: 50%;
    background-color: black;
    z-index: 0;
    animation: eyemove 4s infinite;
  }

  @keyframes eyemove {
    0% {
      left: 30px;
      background-color: rgb(164, 213, 230);
    }

    50% {
      left: 43px;
      background-color: rgb(45, 187, 235);
    }

    100% {
      left: 30px;
      background-color: rgb(164, 213, 230);
    }
  }`;

export default Loader;
