import React from "react";
import axios from "axios";

import Problem from "./Problem";

type AOJState = {
  uname: string
  msgList: any[]
}

const p = (d: any[]) => {
  console.log(d);
  return d;
}

class AOJ extends React.Component<any, AOJState> {
  constructor(props: any) {
    super(props);
    this.state = {
      uname: '',
      msgList: []
    };
  }

  handleClick = () => {
    axios
      .get("https://api.myjson.com/bins/mt9wv")
      .then(res => this.setState({ msgList: p(res.data.msgList) }))
      .catch(err => alert(err));
  };

  private handleOnChange(e: any): void {
    this.setState({ uname: e.target.value });
  }

  render() {
    return (
      <>
        <p>ユーザ名<input type="text" value={this.state.uname}
          onChange={e => this.handleOnChange(e)} />
          <button onClick={this.handleClick}>チェック</button>
        </p>
        {this.state.msgList.map(val => (
          <Problem key={val.message} color={val.color}>
            {val.message}
          </Problem>
        ))}
      </>
    );
  }
}

export default AOJ;