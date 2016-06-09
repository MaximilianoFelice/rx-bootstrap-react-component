import {assert, use, expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {Label, Input, InputField} from '../src/index';
import Rx from 'rx';
import when from 'when';
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";

describe('Input', function() {

  use(chaiAsPromised);

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

  it('should create an Input that observeOn values', function(){
    renderer.render( <Input observeOn={subject} /> );
    scheduler.scheduleAbsolute(null, 100, () => subject.onNext({data: {value: "hola"}}));
    scheduler.scheduleAbsolute(null, 150, () => expect(renderer.getMountedInstance().state.value, "hola"));
    scheduler.start();
  });

  it('should render input properties', function(){
    renderer.render(<Input type="submit"/>);
    expect(renderer.getRenderOutput().props).to.have.property("type").that.equals("submit")
  });

  // Why this test?
  //it('should not render observerOn and publishOn properties', function(){
    //renderer.render( <Input observeOn={subject} type="submit" /> );
    //expect(renderer.getRenderOutput().props).to.deep.equal({type: 'submit'});
  //});

  it('should change input type on the fly', function(){
    renderer.render(<Input observeOn={subject} type="submit"/>);
    expect(renderer.getMountedInstance().state.type, "submit")
    scheduler.scheduleAbsolute(null, 100, () => subject.onNext({type: 'email'}));
    scheduler.scheduleAbsolute(null, 150, () => expect(renderer.getMountedInstance().state.type, "email"));
    scheduler.start();
  });

  it('should render an InputField with a label', function(){
    const markup = ReactDOMServer.renderToString(<InputField labelProps={{text: "foo"}}/>)
    expect(markup).to.match(/foo/)
  });

  it('should render an InputField with a errors', function(){
    const
      errorMsgs = ["ERRORMESSAGE1", "ERRORMESSAGE2"],
      markup = ReactDOMServer.renderToString(<InputField errors={errorMsgs}/>);

    expect(markup).to.match(/ERRORMESSAGE1/)
    expect(markup).to.match(/ERRORMESSAGE2/)
  });
});
