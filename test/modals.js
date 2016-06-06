import {assert, use, expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {Modal} from '../src/index';
import Rx from 'rx';
import Promise from 'when';

describe('Modal', function() {

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

  it('should correctly import modals', function(){
    renderer.render(<Modal observeOn={subject}/>)
    expect(renderer.getRenderOutput()).to.exist
  })
});