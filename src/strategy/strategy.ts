/**
 * Interface Strategy that allow us to declares operations
 * common to all supported versions of some algorithm.
 */
export interface Strategy {
  doAlgorithm(data: number[]): number[];
  sayStrategy(): string;
}

/**
 * Context class that defines the interface of interest to clients
 */
export class Context {
  /**
   * @type {Strategy} Our context maintains a reference to one of the Strategy objects.
   */
  private strategy: Strategy;

  /**
   * Constructor of our Context class that accepts a strategy through the constructor, but also
   * provides a setter to change it at runtime.
   * @param {Strategy} strategy 
   */
  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  /**
   * Setter that allow us to replace a Strategy object at runtime.
   * @param {Strategy} strategy 
   */
  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  /**
   * Function that allow us to know which algorithm we are using
   * @return {string} Name of the algorithm we are using
   */
  public sayStrat(): string {
    return this.strategy.sayStrategy();
  }

  /**
   * We delegate the work on the Strategy object instead of implementing
   * multiple versions of the algorithm.
   * @returns {number[]} asd
   */
  public execute(): number[] {
    // console.log('Context: Sorting data using the strategy');
    return this.strategy.doAlgorithm([6, 8, 4, 3, 1, 9]);
  }
}