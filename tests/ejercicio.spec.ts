import 'mocha';
import {expect} from 'chai';
import {Context, Strategy} from '../src/strategy/strategy';
import {BubbleSort, MergeSort} from '../src/concreteStrategy/concreteStrategy';

describe('Test block on modification (Strategy pattern)', () => {
  const context = new Context(new BubbleSort());

  it('BubbleSort([6, 8, 4, 3, 1, 9])', () => {
    expect(context.sayStrat()).to.equal('BubbleSort');
    expect(context.execute()).to.eql([1, 3, 4, 6, 8, 9]);
  });

  it('Change strategy to MergeSort', () => {
    context.setStrategy(new MergeSort());
    expect(context.sayStrat()).to.equal('MergeSort');
  });

  it('MergeSort([6, 8, 4, 3, 1, 9])', () => {
    expect(context.execute()).to.eql([1, 3, 4, 6, 8, 9]);
  });
});
