import Constants from '../constants/';

const initialNodesState = {
  count: 0,
  all_nodes: []
};

export function nodes (state = initialNodesState, action) {
  switch (action.type) {
    case Constants.Actions.ADD_NODE:
      const newNode = Object.assign({}, action.node, {xPos: action.xPos}, {yPos: action.yPos});
      const newAllNodes = state.all_nodes.concat(newNode);
      return {
        count: newAllNodes.length,
        all_nodes: newAllNodes
      };
    case Constants.Actions.MOVE_NODE:
      return {count: state.count, all_nodes: state.all_nodes.map(n => node(n, action))};
    default:
      return state;
  }
}

function node (state = {}, action){
  if (state._id !== action.id) {
    return state;
  }

  switch (action.type) {
    case Constants.Actions.MOVE_NODE:
      const movedNode = Object.assign({}, state, {
        xPos: action.xPos,
        yPos: action.yPos
      });
      return movedNode;
    default:
      return state;
  }
}
/*
export const fetchNodeHasErrored = (state = false, action) => {
  switch (action.type) {
    case Constants.Actions.FETCH_NODE_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
};

export const fetchNodeIsLoading = (state = false, action) => {
  switch (action.type) {
    case Constants.Actions.FETCH_NODE_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
};

export const node = (state = '{}', action) => {
  switch (action.type) {
    case Constants.Actions.FETCH_NODE_SUCCESS:
      return action.node;
    default:
      return state;
  }
};

const testMoveNode = () => {
  const stateBefore = {
    count: 2,
    all_nodes: [
      {
        _id: 'testUID123akls-asdlkj2939949-4u58995',
        label: 'testtest',
        xPos: 50,
        yPos: 50
      }, {
        _id: 'asd1234-asdlkj2939949-4u58995',
        label: 'testtest2',
        xPos: 0,
        yPos: 0
      }
    ]
  };
  const action = {
    type: 'MOVE_NODE',
    id: 'testUID123akls-asdlkj2939949-4u58995',
    xPos: 500,
    yPos: 400
  };
  const stateAfter = {
    count: 2,
    all_nodes: [
      {
        _id: 'testUID123akls-asdlkj2939949-4u58995',
        label: 'testtest',
        xPos: 500,
        yPos: 400
      }, {
        _id: 'asd1234-asdlkj2939949-4u58995',
        label: 'testtest2',
        xPos: 0,
        yPos: 0
      }
    ]
  };
  const deepFreeze = require('deep-freeze');
  deepFreeze(stateBefore);
  deepFreeze(action);

  const expect = require('expect');
  expect(nodes(stateBefore, action)).toEqual(stateAfter);
};

const testAddNode = () => {
  const stateBefore = {count: 0,
                      all_nodes: []
                    };
  const action = {
    type: 'ADD_NODE',
    node: {
      id: 'testUID123akls-asdlkj2939949-4u58995',
      label: 'testtest',
      xPos: 100,
      yPos: 100
    },
    xPos: 0,
    yPos: 0
  };
  const stateAfter = {count: 1,
                      all_nodes: [
                        {
                          id: 'testUID123akls-asdlkj2939949-4u58995',
                          label: 'testtest',
                          xPos: 0,
                          yPos: 0
                        }
                      ]};
    const deepFreeze = require('deep-freeze');
    deepFreeze(stateBefore);
    deepFreeze(action);

    const expect = require('expect');
    expect(nodes(stateBefore, action)).toEqual(stateAfter);
};
//testAddNode();
//console.log('TEST: ADD_NODE successful');
//testMoveNode();
//console.log('TEST: MOVE_NODE successful');

*/
