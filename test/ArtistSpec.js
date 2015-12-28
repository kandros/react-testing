import React from 'react';
import Artist from '../src/Artist';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';


describe('Artist', () => {
  let component;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<Artist name="acdc" />);
  });

  it('should display the correct artist name', () => {
    const componentText = ReactDOM.findDOMNode(component).textContent;
    expect(componentText).toMatch(/Artist name: acdc/);
  });

});
