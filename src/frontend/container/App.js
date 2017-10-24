import React from 'react';
import CBlocksAppBar from './CBlocksAppBar.js';
import Canvas from './Canvas';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import CustomDragLayer from '../component/CustomDragLayer';

const App = () => (
  <div>
    <CBlocksAppBar />
    <Canvas/>
    <CustomDragLayer/>
  </div>
);

export default DragDropContext(HTML5Backend)(App);
