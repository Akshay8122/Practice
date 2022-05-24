import { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log("hg"
    , error);
    return {
      isError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(info);
  }

  render() {
    if (this.state.isError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
