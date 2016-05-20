import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {Input} from '../src/index';
import assert from 'assert';
import Rx from 'rx';

describe('Froms', function() {

  chai.use(chaiAsPromised);

  let renderer = ReactTestUtils.createRenderer();

  beforeEach(function(){
    this.subject = new Rx.Subject();
    this.scheduler = new Rx.TestScheduler();
  });

  afterEach(function(){
    this.subject.onCompleted();
  })

  it('should create a Form that can be submitted', function () {
    renderer.render( <Input observeOn={this.subject} /> );
    this.scheduler.scheduleAbsolute(null, 100, () => this.subject.onNext({value: "hola"}));
    this.scheduler.scheduleAbsolute(null, 150, () => assert(renderer.getMountedInstance().state.value, "hola"));
    this.scheduler.start();
  });

});