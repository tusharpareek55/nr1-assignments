import React from 'react';
import { Counter } from './components/counter';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class HomeNerdlet extends React.Component {
  render() {
    return(
      <div>
        <Counter />
      </div>
    );
  }
}



