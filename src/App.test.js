import React from 'react';
import App from './components/App';
import renderer from 'react-test-renderer';

test('App renders.', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
