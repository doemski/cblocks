import deepFreeze from 'deep-freeze';
import expect from 'expect';
import { sensors } from '../sensors';
import * as actions from '../../action';

const initialSensorsState = {
  count: 0,
  all_sensors: []
};

const testAddSensor = () => {
  const stateBefore = initialSensorsState;
  const action = actions.addSensor({
    _id: '5937b05823d3e908cc271eab',
    label: 'Pressure Sensor',
    resources: [
      'bla'
    ],
    value: 500
  });
  const stateAfter = {
    count: 1,
    all_sensors: [
      {
        _id: '5937b05823d3e908cc271eab',
        label: 'Pressure Sensor',
        resources: [
          'bla'
        ],
        xPos: 500,
        yPos: 100,
        value: 500
      }
    ]
  };

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(sensors(stateBefore, action)).toEqual(stateAfter);
};

const testAddDuplicateSensor = () => {
  const stateBefore = {
    count: 1,
    all_sensors: [
      {
        _id: '5937b05823d3e908cc271eab',
        label: 'Pressure Sensor',
        resources: [
          'bla'
        ],
        xPos: 500,
        yPos: 100,
        value: 500
      }
    ]
  };
  const action = actions.addSensor({
    _id: '5937b05823d3e908cc271eab',
    label: 'Pressure Sensor',
    resources: [
      'bla'
    ],
    value: 500
  });
  const stateAfter = {
    count: 1,
    all_sensors: [
      {
        _id: '5937b05823d3e908cc271eab',
        label: 'Pressure Sensor',
        resources: [
          'bla'
        ],
        xPos: 500,
        yPos: 100,
        value: 500
      }
    ]
  };

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(sensors(stateBefore, action)).toEqual(stateAfter);
};

const testMoveSensor = () => {
  const stateBefore = {
    count: 1,
    all_sensors: [
      {
        _id: '59510e6f8eed6e32225a752d',
        label: 'Stuhl',
        xPos: 0,
        yPos: 0,
        value: 500
      }
    ]
  };
  const action = actions.move('59510e6f8eed6e32225a752d', 500, 500);
  const stateAfter = {
    count: 1,
    all_sensors: [
      {
        _id: '59510e6f8eed6e32225a752d',
        label: 'Stuhl',
        xPos: 500,
        yPos: 500,
        value: 500
      }
    ]
  };

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(sensors(stateBefore, action)).toEqual(stateAfter);
};

const testUpdateSensorValue = () => {
  const stateBefore = {
    count: 1,
    all_sensors: [
      {
        _id: 'sensor',
        label: 'Pressure Sensor',
        resources: [
          'bla'
        ],
        xPos: 0,
        yPos: 0,
        value: 0
      }
    ]
  };
  const action = actions.updateSensorValue('sensor', 700);
  const stateAfter = {
    count: 1,
    all_sensors: [
      {
        _id: 'sensor',
        label: 'Pressure Sensor',
        resources: [
          'bla'
        ],
        xPos: 0,
        yPos: 0,
        value: 700
      }
    ]
  };

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(sensors(stateBefore, action)).toEqual(stateAfter);
};

const testUpdateSensorValue2 = () => {
  const stateBefore = {
    count: 2,
    all_sensors: [
      {
        _id: 'sensor',
        label: 'Pressure Sensor',
        resources: [
          'bla'
        ],
        xPos: 0,
        yPos: 0,
        value: 0
      },
      {
        _id: 'sensor2',
        label: 'Other Sensor',
        resources: [
          'blub'
        ],
        xPos: 100,
        yPos: 190,
        value: 900
      }
    ]
  };
  const action = actions.updateSensorValue('sensor', 700);
  const stateAfter = {
    count: 2,
    all_sensors: [
      {
        _id: 'sensor',
        label: 'Pressure Sensor',
        resources: [
          'bla'
        ],
        xPos: 0,
        yPos: 0,
        value: 700
      },
      {
        _id: 'sensor2',
        label: 'Other Sensor',
        resources: [
          'blub'
        ],
        xPos: 100,
        yPos: 190,
        value: 900
      }
    ]
  };

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(sensors(stateBefore, action)).toEqual(stateAfter);
};

const testRemoveSensor = () => {
  const stateBefore = {
    count: 1,
    all_sensors: [
      {
        _id: 'sensor',
        label: 'Pressure Sensor',
        resources: [
          'bla'
        ],
        xPos: 0,
        yPos: 0,
        value: 0
      }
    ]
  };
  const action = actions.removeSensor('sensor');
  const stateAfter = initialSensorsState;

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(sensors(stateBefore, action)).toEqual(stateAfter);
};

const sensorsTests = () => {
  testAddSensor();
  testAddDuplicateSensor();
  testMoveSensor();
  testUpdateSensorValue();
  testUpdateSensorValue2();
  testRemoveSensor();
  return true;
};

export default sensorsTests;
