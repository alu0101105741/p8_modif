/**
 * Class PrimeNumber
 */
export class PrimeNumber implements Iterable<number> {
  private static instance: PrimeNumber;
  private primes: Map<number, number>;

  /**
   * Constructor PrimeNumber
   */
  private constructor() {
    this.primes = new Map<number, number>();

    let primes = 0;
    let i = 1;

    while (primes < 100) {
      if (this.isPrime(i)) {
        primes++;
        this.primes.set(primes, i);
      }
      i++;
    }
  }

  /**
   * Function that allow us to create a new PrimeNumber if it
   * has not been created or return the existence instance of
   * our class
   * @return {PrimeNumber} Return the instance of our class
   */
  public static getInstance(): PrimeNumber {
    if (!PrimeNumber.instance) {
      PrimeNumber.instance = new PrimeNumber();
    }

    return PrimeNumber.instance;
  }

  /**
   * Function that allow us to get the first n prime numbers
   * @param {number} n Number of primes we want to get
   * @return {number[]} Array with all of the n first primes
   */
  public primeNumbers(n: number): number[] {
    const result: number[] = [];

    for (let i = 1; i <= n; i++) {
      result.push(this.primes.get(i));
    }

    return result;
  }

  /**
   * Function that allow us to get the prime numbers between n and m
   * @param {number} n First number of our range we want to check
   * @param {number} m Last number of our range we want to check
   * @return {number[]} Array with all of the existent primes in our range
   */
  public primeRange(n: number, m: number): number[] {
    const result: number[] = [];

    for (let i = n; i <= m; i++) {
      result.push(this.primes.get(i));
    }

    return result;
  }

  /**
   * Function that allow us to check if a number is prime
   * @param {number} num Number we want to check if its prime
   * @return {boolean} Returns true if the number is prime or false if its not
   */
  private isPrime(num: number): boolean {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }

  /**
   * Iterator method
   * @return {Iterator<T>} Returns an iterator that allow us to iterate throught our class
   */
  [Symbol.iterator](): Iterator<number> {
    return this.primes.values();
  }
}
