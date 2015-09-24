import Component from '../src/Component';
import React from 'react';

const TestUtils = React.addons.TestUtils;
const component;

describe('Given an instance of the Component', () => {
  describe('when we render the component', () => {
    before(() => {
      component = React.addons.TestUtils.renderIntoDocument(<Component />);
    });
    it('should render a paragraph', () => {
      var paragraph = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'p');

      expect(paragraph).to.have.length.above(0, 'Expected to have element with tag <p>');
    });
  });
});
