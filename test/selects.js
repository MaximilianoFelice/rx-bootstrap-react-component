import {assert, use, expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {Select} from '../src/index';
import Rx from 'rx';
import Promise from 'when';

describe('Select', function() {

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

  it('should correctly import selects', function(){
    renderer.render(<Select text="foo"/>)
    expect(renderer.getRenderOutput()).to.exist
  })
});