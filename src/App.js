import React, { Component } from "react";
import "./App.css";
import Count from "./components/Count";
import ErrorBoundry from "./components/ErrorBoundry";
import Netflix from "./components/Netflix";
import Api from "./components/Api";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundry className="Error">
          <Netflix seriesName="Money Heist" />
        </ErrorBoundry>

        <ErrorBoundry
          fallback={<div className="Error">Not netflix series</div>}
        >
          <Netflix seriesName="The Witcher" />
        </ErrorBoundry>

        <ErrorBoundry
          fallback={<div className="Error">Not netflix series</div>}
        >
          <Netflix seriesName="Family Man" />
        </ErrorBoundry>

        <ErrorBoundry
          fallback={<div className="Error">Number is greater than 5</div>}
        >
          <Count />
        </ErrorBoundry>

        <ErrorBoundry fallback={<div className="Error">...Loading</div>}>
          <Api />
        </ErrorBoundry>
      </div>
    );
  }
}
