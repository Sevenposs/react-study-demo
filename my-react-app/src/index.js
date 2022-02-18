import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AntdDemo  from './antd'

class Square extends React.Component {
  render() {
    return <button className="square">{/* TODO */}</button>;
  }
}
class Test extends React.Component {
  render() {
    return (
      <div>
        <Game />
        <AntdDemo />
        <a href="www.baidu.com">223</a>
      </div>
    );
  }
}


const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
  ));
  
  // 你可以直接获取 DOM button 的 ref：
  const ref = React.createRef();
  <FancyButton ref={ref}>Click me!</FancyButton>;
  
class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Test />, document.getElementById("root"));
