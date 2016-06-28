import {assert, use, expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {Textarea, TextareaField} from '../src/index';
import Rx from 'rx';
import when from 'when';
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";

describe('Textarea', function() {

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

  it("should render a Textarea", function(){
    const markup = ReactDOMServer.renderToString(<Textarea />)
    expect(markup).to.match(/<textarea/)
  });
});