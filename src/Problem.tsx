import React from "react";

type ProblemProps = {
  color: string;
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
    return <p style={{ color: this.props.color }}>{this.props.children}</p>;
  }
}

export default Problem;