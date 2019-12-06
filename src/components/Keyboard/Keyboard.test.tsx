import React from 'react';
import Keyboard from './Keyboard';
import Test from 'react-test-renderer';

it('Keyboard component renders correctly buttons', () => {
  const numberOfKeyboardButtons = 17;
  const component = Test.create(<Keyboard />);
  const componentToJSON = component.toJSON();
  const childrenLength = componentToJSON && componentToJSON.children && componentToJSON.children.length;
  expect(childrenLength).toEqual(numberOfKeyboardButtons);
});
