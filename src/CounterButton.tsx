import React from "react";

type CounterButtonProps = {
  count?: number;
}
type CounterButtonState = {
  count: number;
}

class CounterButton extends React.Component<CounterButtonProps, CounterButtonState> {
  constructor(props: CounterButtonProps) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  public render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}

export default CounterButton;