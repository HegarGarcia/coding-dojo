import React from 'react';
import { flatten, zip } from 'lodash';

import './App.css';

const Action = {
  TurnOn: 'TurnOn',
  TurnOff: 'TurnOff',
  Toggle: 'Toggle'
};

class Grid extends React.Component {
  state = { matrix: [[]] };

  constructor(props) {
    super(props);
    this.pointAXRef = React.createRef();
    this.pointAYRef = React.createRef();
    this.pointBXRef = React.createRef();
    this.pointBYRef = React.createRef();
    this.actionRef = React.createRef();
  }

  componentDidMount() {
    this.setState(() => ({
      matrix: Array.from({ length: 3 }, (_, y) =>
        Array.from({ length: 3 }, (_, x) => (
          <div className="cell off">
            {x},{y}
          </div>
        ))
      )
    }));
  }

  setLights = () => {
    const higherX = Math.max(
      this.pointAXRef.current.value,
      this.pointBXRef.current.value
    );
    const lowerX = Math.min(
      this.pointAXRef.current.value,
      this.pointBXRef.current.value
    );

    const higherY = Math.max(
      this.pointAYRef.current.value,
      this.pointBYRef.current.value
    );
    const lowerY = Math.min(
      this.pointAYRef.current.value,
      this.pointBYRef.current.value
    );

    const action = this.actionRef.current.value;

    this.setState(() => ({
      matrix: this.state.matrix.map((row, y) => {
        return row.map((col, x) => {
          if (x >= lowerX && x <= higherX && y >= lowerY && y <= higherY) {
            if (action === Action.TurnOn) {
              return <div className="cell on" />;
            } else if (action === Action.TurnOff) {
              return <div className="cell off" />;
            } else if (action === Action.Toggle) {
              return col.props.className.includes('off') ? (
                <div className="cell on" />
              ) : (
                <div className="cell off" />
              );
            }
          }
          return col;
        });
      })
    }));
  };

  render() {
    return (
      <>
        <label htmlFor="PAx">X</label>
        <input name="PAx" type="numer" ref={this.pointAXRef} />
        <label htmlFor="PAy">Y</label>
        <input name="PAy" type="numer" ref={this.pointAYRef} />

        <label htmlFor="PBx">X</label>
        <input name="PBx" type="numer" ref={this.pointBXRef} />
        <label htmlFor="PBx">Y</label>
        <input name="PBy" type="numer" ref={this.pointBYRef} />

        <select ref={this.actionRef}>
          <option value="TurnOn">TurnOn</option>
          <option value="TurnOff">TurnOff</option>
          <option value="Toggle">Toggle</option>
        </select>

        <button onClick={this.setLights}>Run</button>
        <div className="grid">{zip(flatten(this.state.matrix))}</div>
      </>
    );
  }
}

export default Grid;
