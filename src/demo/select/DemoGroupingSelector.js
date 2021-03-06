import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import meta from './assets/meta';
import Select from 'react-select';
import {
  GroupingSelector,
  ModelSelector,
  EmissionsScenarioSelector,
  VariableSelector,
  DataspecSelector,
} from 'pcic-react-components';

function stringify(obj) {
  return <pre>{JSON.stringify(obj, null, 2)}</pre>;
}

const selectors = [
  { label: 'Model Selector', value: ModelSelector },
  { label: 'Emissions Scenario Selector', value: EmissionsScenarioSelector },
  { label: 'Variable Selector', value: VariableSelector },
  { label: 'Dataspec Selector', value: DataspecSelector },
];


export default class DemoGroupingSelector extends Component {
  state = {
    selector: selectors[0],
    value: undefined,
  };

  handleChangeSelector = selector => this.setState(
    { selector, value: undefined }
  );

  handleChangeSelectorValue = (value) =>
    this.setState({ value });

  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg={6}>
            This demo exercises GroupingSelector by passing it the
            exposed representative and label methods from a selected
            derived selector. This isn't trememdously robust to changes,
            but it is a convenient way of exercising the base selector.
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <h2>Derived selector providing methods</h2>
            <Select
              options={selectors}
              value={this.state.selector}
              onChange={this.handleChangeSelector}
            />
            {stringify(this.state.selector)}
          </Col>
          <Col lg={3}>
            <h2>GroupingSelector</h2>
            <GroupingSelector
              bases={meta}
              getOptionRepresentative={this.state.selector.value.getOptionRepresentative}
              getOptionLabel={this.state.selector.value.getOptionLabel}
              value={this.state.value}
              onChange={this.handleChangeSelectorValue}
              debug={true}
            />
            {stringify(this.state.value && this.state.value.value.representative)}
          </Col>
        </Row>
      </Container>
    );
  }
}
