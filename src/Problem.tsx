import React from "react";

type ProblemProps = {
  problem: string;
  color: string;
  record: string;
  children: string;
}

type ProblemState = {
}

class Problem extends React.Component<ProblemProps, ProblemState> {
  constructor(props: ProblemProps) {
    super(props);
    this.state = {
      color: 'yellow'
    };
  }

  public render() {
    const url = `http://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=${this.props.problem}&lang=jp`;
    return <div style={{ background: this.props.color }}>
      <a href={url}> {this.props.children} </a>
      <span>{this.props.record}</span>
    </div>;
  }
}

export default Problem;