import React, { Component } from 'react';
import styled from 'styled-components';

const ThousandContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: repeat(100, 1fr);
  grid-template-columns: repeat(100, 1fr);
`;
const Tile = styled.div`
  width: 1vw;
  height: 1vh;
  background-color: ${props => props.color};
  transition: all 2s;
  display: inline-block;

  &:hover {
    background-color: ${props => props.color};
    transition: all 0.02s;
  }
`;

class Thousand extends Component {
  state = { color1: 'black', color2: 'black' };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color1: this.randomColor() });
    }, 500);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ color1: this.randomColor() });
    }, 500);
  }

  randomColor = () => {
    const colors = [
      'brown',
      'red',
      'blue',
      'green',
      'purple',
      'gray',
      'yellow',
      'orange'
    ];
    return colors[Math.floor(Math.random() * 8)];
  };

  render() {
    const tiles = [];
    for (let i = 0; i < 10000; i++) {
      tiles.push(<Tile color={this.state.color1} />);
    }
    return <ThousandContainer>{tiles}</ThousandContainer>;
  }
}

export default Thousand;
