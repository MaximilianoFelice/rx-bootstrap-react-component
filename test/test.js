import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Element from '../src/index';
import assert from 'assert';

describe('Test', function() {

  chai.use(chaiAsPromised)

  it('should be Element', function () {
    const renderer = ReactTestUtils.createRenderer()
    const result = renderer.render(<Element />);
    return assert.equal(result.props.children, 'Element');
  });

});