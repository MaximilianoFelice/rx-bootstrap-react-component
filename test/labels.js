import {assert, use, expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {Label, Input, InputField} from '../src/index';
import Rx from 'rx';
import Promise from 'when';

describe('Input', function() {

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

  it('should correctly import labels', function(){
    renderer.render(<Label text="foo"/>)
    expect(renderer.getRenderOutput()).to.exist
  })

  it('should correctly render data from observable', function(){
    renderer.render(<Label observeOn={subject} />)
    scheduler.scheduleAbsolute(null, 100, () => subject.onNext({data: {text: "foo"}}));
    scheduler.scheduleAbsolute(null, 150, () => expect(renderer.getRenderOutput().props.children).to.be.equal("foo"));
    scheduler.start();
  })
});