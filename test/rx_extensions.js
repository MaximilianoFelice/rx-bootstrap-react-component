import {assert, use, expect} from 'chai'
import chaiAsPromised from 'chai-as-promised'
import Rx from 'rx'
import Promise from 'when'
import deepAssign from 'deep-assign'

describe('Select', function() {

  var scheduler;

  beforeEach(function(){
    scheduler = new Rx.TestScheduler();
  });

  it('should correctly instantiate acumulative subjects', function(){
    // const subject = new RxExtensions.AcumulativeSubject({foo: 3})
    const subject = new Rx.BehaviorSubject({foo: 3})
    const obs = subject.scan((acc, x) => {var ls = deepAssign({}, acc, x); return ls})
    var partial
    obs.subscribe(x => partial = x)
    scheduler.scheduleAbsolute(null, 0, () => expect(partial).to.deep.equals({foo: 3}));
    
    scheduler.scheduleAbsolute(null, 50, () => subject.onNext({bar: 5}));
    scheduler.scheduleAbsolute(null, 100, () => expect(partial).to.deep.equals({foo: 3, bar: 5}));
    
    scheduler.scheduleAbsolute(null, 150, () => subject.onNext({foo: {max: "power"}}));
    scheduler.scheduleAbsolute(null, 200, () => expect(partial).to.deep.equals({foo: {max: "power"}, bar: 5}));
    scheduler.start();
  })
});