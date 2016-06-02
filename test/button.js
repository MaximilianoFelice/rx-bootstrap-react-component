import {assert, use, expect} from 'chai';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {Button} from '../src/index';
import Rx from 'rx';

describe('Button', function() {

  var renderer;
  var subject;
  var scheduler;

  beforeEach(function(){
    renderer = ReactTestUtils.createRenderer();
    subject = new Rx.Subject();
    scheduler = new Rx.TestScheduler();
  });

  afterEach(function(){
    subject.onCompleted();
  })

  it('should render Button properties', function(){
    renderer.render( <Button type="submit" form="form" /> );

    expect(renderer.getRenderOutput().props).to.have.property('type', 'submit');
    expect(renderer.getRenderOutput().props).to.have.property('form', 'form');
  });

});