import {use, expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {Input, Label} from '../src/index';

describe('Input', function() {

  use(chaiAsPromised);

  var renderer;

  beforeEach(function(){
    renderer = ReactTestUtils.createRenderer();
  });


  it('should render an input with a label', function(){
    renderer.render( <Input labelText="texto" /> );
    // Refactor
    expect(renderer.getRenderOutput().props.children[0].type).to.equal(Label);
  });

});