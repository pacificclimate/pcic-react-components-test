import React, { Component } from 'react';
import { Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';
import Select from 'react-select';
import {
  ModelSelector, EmissionsScenarioSelector, VariableSelector,
  DataspecSelector,
} from 'pcic-react-components';
import meta from './assets/meta';

function stringify(obj) {
  return <pre>{JSON.stringify(obj, null, 2)}</pre>;
}

const selectors = [
  { label: 'Model Selector', value: ModelSelector },
  { label: 'Emissions Scenario Selector', value: EmissionsScenarioSelector },
  { label: 'Variable Selector', value: VariableSelector },
  { label: 'Dataspec Selector', value: DataspecSelector },
];


export default class DemoMEV extends Component {
  state = {
    selector: selectors[0],
    selectorValue: null,
  };

  handleChangeSelector = selector => this.setState(
    { selector, selectorValue: null }
  );

  handleChangeSelectorValue = (selectorValue) =>
    this.setState({ selectorValue });

  render() {
    const Selector = this.state.selector.value;
    return (
      <Grid fluid>
        <Row>
          <Col lg={3}>
            <Select
              options={selectors}
              value={this.state.selector}
              onChange={this.handleChangeSelector}
            />
          </Col>
          <Col lg={3}>
            <Selector
              bases={meta}
              value={this.state.selectorValue}
              onChange={this.handleChangeSelectorValue}
              debug={true}
            />
          </Col>
          <Col lg={3}>
            State:
            {stringify(this.state)}
          </Col>
        </Row>
      </Grid>
    );
  }
}
