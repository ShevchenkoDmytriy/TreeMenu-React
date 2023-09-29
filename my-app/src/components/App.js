import React from 'react';
import TreeMenu from './TreeMenu';

const treeData = [
  {
    id: 1,
    label: 'Node 1',
    children: [
      {
        id: 2,
        label: 'Node 1.1',
        children: [
          {
            id: 3,
            label: 'Node 1.1.1',
            children: [],
          },
        ],
      },
      {
        id: 4,
        label: 'Node 1.2',
        children: [],
      },
    ],
  },
  {
    id: 5,
    label: 'Node 2',
    children: [],
  },
];

function App() {
  return (
    <div className="App">
      <h1>Tree Menu Example</h1>
      <TreeMenu data={treeData} />
    </div>
  );
}

export default App;
