import Component from '../src/Component.jsx';
import TestUtils from 'react-addons-test-utils';
import React from 'react';

var component;
var spy = sinon.spy();

describe('Given an instance of the Component', () => {
  describe('when we render the component', () => {
    before(() => {
      component = TestUtils.renderIntoDocument(<Component onRender={ spy } />);
    });
    it('should render a paragraph', () => {
      var paragraph = TestUtils.scryRenderedDOMComponentsWithTag(component, 'p');

      expect(paragraph).to.have.length.above(0, 'Expected to have element with tag <p>');
      expect(spy).to.be.calledOnce;
    });
  });
});
