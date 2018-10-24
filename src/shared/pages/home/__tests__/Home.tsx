import * as React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Home from '../home';

const component = () => render(<Home />);

afterEach(cleanup);

test('Home Component', () => {
  const { getByText } = component();
  const ele = getByText(/React/);
  expect(ele).not.toBe(null);
});
