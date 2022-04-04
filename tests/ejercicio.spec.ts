import 'mocha';
import {expect} from 'chai';
import {PrimeNumber} from '../src/ejercicio';

describe('Test block on modification (PrimeNumber)', () => {
  const primos = PrimeNumber.getInstance();

  it('primeNumbers(n)', () => {
    expect(primos.primeNumbers(5)).to.eql([2, 3, 5, 7, 11]);
    expect(primos.primeNumbers(10)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });

  it('primeRange(n, m)', () => {
    expect(primos.primeRange(1, 6)).to.eql([2, 3, 5, 7, 11, 13]);
    expect(primos.primeRange(3, 11)).to.eql([5, 7, 11, 13, 17, 19, 23, 29, 31]);
  });
});
