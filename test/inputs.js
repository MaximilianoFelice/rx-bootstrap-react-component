import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {Input} from '../src/index';
import assert from 'assert';
import Rx from 'rx';

describe('Input', function() {

  chai.use(chaiAsPromised);

  beforeEach(function(){
    this.renderer = ReactTestUtils.createRenderer();
    this.subject = new Rx.Subject();
    this.publishSubj = new Rx.Subject();
    this.scheduler = new Rx.TestScheduler();
  });

  afterEach(function(){
    this.subject.onCompleted();
  })

  it('should create an Input that observeOn values', function(){
    this.renderer.render( <Input observeOn={this.subject} /> );
    this.scheduler.scheduleAbsolute(null, 100, () => this.subject.onNext({data: {value: "hola"}}));
    this.scheduler.scheduleAbsolute(null, 150, () => assert(this.renderer.getMountedInstance().state.value, "hola"));
    this.scheduler.start();
  });

  it('should create an Input that publishOn values', function(){
    this.renderer.render( <Input observeOn={this.subject} publishOn={this.publishSubj} /> );
    this.scheduler.scheduleAbsolute(null, 100, () => this.subject.onNext({data: {value: "chau"}}));
    var res = this.scheduler.startScheduler(() => this.publishSubj);
    console.log(res)
    assert(res.messages.length, 1)
  });

});