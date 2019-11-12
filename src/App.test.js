import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from './Card.js';
import List from './List.js';
import renderer from 'react-test-renderer';

//smoke test for Card
describe(Card, () => {
  it('renders without crashing', () => {
      // Create a DOM element to render the component into
      const div = document.createElement('div');

      // Render the component
      // If something is wrong it will fail here
      ReactDOM.render(<Card />, div);

      // Clean up
      ReactDOM.unmountComponentAtNode(div);
  });
});

//smoke test for List
describe(List, () => {
  it('renders without crashing', () => {
      // Create a DOM element to render the component into
      const div = document.createElement('div');

      // Render the component
      // If something is wrong it will fail here
      ReactDOM.render(<List cards={[{title: 'this is the title', content: 'this is content'}]} />, div);

      // Clean up
      ReactDOM.unmountComponentAtNode(div);
  });
});

//snapshot test for Card
describe('<Card />', () => {
  it('renders this UI as expected', () => {
      // Render the component, as JSON
      const tree = renderer.create(<Card />).toJSON();
      // Check whether it matches the previous snapshot
      // Stored in __snapshots__/App.test.js.snap
      expect(tree).toMatchSnapshot(); 
  });
});


//snapshot test for List
describe('<List />', () => {
  it('renders this UI as expected', () => {
      // Render the component, as JSON
      const tree = renderer.create(<List cards={[{title: 'this is the title', content: 'this is content'}]} />).toJSON();
      // Check whether it matches the previous snapshot
      // Stored in __snapshots__/App.test.js.snap
      expect(tree).toMatchSnapshot(); 
  });
});

