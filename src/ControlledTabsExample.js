import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SearchTable from './SearchTable';
function ControlledTabsExample({ tab }) {
  const [key, setKey] = useState('Tab 1');
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      {tab.map((item) => (
        <Tab eventKey={item} title={item}>
          <SearchTable />
        </Tab>
      ))}
    </Tabs>
  );
}

export default ControlledTabsExample;
