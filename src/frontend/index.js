import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { overrideComponentTypeChecker } from 'react-toolbox';
import { Provider } from 'react-redux';
import App from './container/App';
import store from './store';
import { subscribe } from 'redux-subscriber';

const rootEl = document.getElementById('app');

const render = () => {
  const unsubscribe = subscribe('', state => {
    console.log('STATE HAS CHANGED:');
    console.log(state);
  });

  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App/>
      </Provider>
    </AppContainer>,
    rootEl
  );
};

if (process.env.NODE_ENV !== 'production') {
  overrideComponentTypeChecker((classType, reactElement) => (
    reactElement && (
      reactElement.type === classType
      || reactElement.type.name === classType.displayName
    )
  ));
  if (module.hot) {
    module.hot.accept('./container/App', render);
  }
}

render();
