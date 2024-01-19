import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import ControlledTabsExample from './ControlledTabsExample';
function ContainerExample() {
  const tabData = ['Tab 1', 'Tab 2', 'Tab 3'];
  return (
    <Container>
      <Row>
        <Col>
          {' '}
          <h1>Search Example</h1>
          <ControlledTabsExample tab={tabData}></ControlledTabsExample>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;
