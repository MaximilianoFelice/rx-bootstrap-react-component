import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {Input} from '../src/index';
import assert from 'assert';
import Rx from 'rx';

// TODO: Move
chai.assert.includeDeepMember = function(superset, subset, msg){
  //new chai.Assertion(superset, msg).to.deep.include(subset);
  chai.assert.includeDeepMembers(superset, [subset], msg);
};

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
    var toPublish = {data: {value: "chau"}};
    this.renderer.render( <Input observeOn={this.subject} publishOn={this.publishSubj} /> );
    this.scheduler.scheduleAbsolute(null, 100, () => this.subject.onNext(toPublish));
    
    var published = [];
    this.publishSubj.subscribe(x => published.push(x));
    
    this.scheduler.start();

    chai.assert.includeDeepMember(published, toPublish);
  });

  it('should create an input with the supplied props', function(){
    var props = {type: "text", style: "color: red;"};

    this.renderer.render( <Input {...props} /> );

    chai.expect(
      this.renderer
          .getRenderOutput()
          .props
      ).to.deep.equals(props);
  });

  it('should not render observerOn and publishOn properties', function(){
    this.renderer.render( <Input observeOn={this.subject} /> );

    chai.expect(
      this.renderer
          .getRenderOutput()
          .props
          .observeOn
      ).to.be.undefinded;

    chai.expect(
      this.renderer
          .getRenderOutput()
          .props
          .publishOn
      ).to.be.undefinded;
  });

});