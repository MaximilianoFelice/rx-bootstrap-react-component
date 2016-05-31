import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import {without} from '../src/helpers';

describe('Input', function() {

  chai.use(chaiAsPromised);

  it('should remove keys from object', function(){
    chai.expect(without('key', {key: 1, otherKey: 2})).to.deep.equal({otherKey: 2});
    chai.expect(without('key', 'otherKey', {key: 1, otherKey: 2})).to.deep.equal({});
    chai.expect(without(['key', 'otherKey'], {key: 1, otherKey: 2})).to.deep.equal({});
  })
});