import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import Index from '../src/index';

describe('Test', function() {

  chai.use(chaiAsPromised)

  it('should be true', function () {
    return chai.expect(Promise.resolve(2)).to.eventually.equal(2);
  });

});