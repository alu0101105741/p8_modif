import {Strategy} from '../strategy/strategy';
/**
 * Class BubbleSort that implements the algorithm while following the base
 * Strategy interface.
 */
export class BubbleSort implements Strategy {
  /**
   * Execute our algorithm to sort (in this case the BubbleSort)
   * @param {number[]} data 
   * @return {number} 
   */
  public doAlgorithm(data: number[]): number[] {
    //We copy our array so we dont modify the original
    let array: number[] = data.slice();

    for(let i = 0; i < array.length; i++) {
      for(let j = 0; j < array.length - 1; j++) {
        if(array[j] > array[j + 1]) {
          let swap = array[j];
          array[j] = array[j + 1];
          array[j + 1] = swap;
        }
      }
    }
    return array;
  }

  /**
   * Method that allow us to know which strategy are we using
   * @return {string} Name of the algorithm we are using
   */
  public sayStrategy(): string {
      return 'BubbleSort';
  }
}

/**
 * Class MergeSort that implements the algorithm while following the base
 * Strategy interface.
 */
export class MergeSort implements Strategy {
  /**
   * 
   * @param {number[]} data 
   * @return {number[]} 
   */
  public doAlgorithm(data: number[]): number[] {
    if (data.length <= 1) {
      return data;
    }

    const listA = data.slice(0, Math.ceil(data.length / 2));
    const listB = data.slice(listA.length, data.length);

    return this.sortedMerge(
      this.doAlgorithm(listA),
      this.doAlgorithm(listB),
    )
  }

  /**
   * 
   * @param {number[]} listA 
   * @param {number[]} listB 
   * @return {number[]} 
   */
  private sortedMerge(listA: number[], listB: number[]): number[] {
    const merged: number[] = [];

    while (listA.length && listB.length) {
      if (listA[0] <= listB[0])
          merged.push(listA.shift());
      else
          merged.push(listB.shift());
    }

    while (listA.length > 0) merged.push(listA.shift());
    while (listB.length > 0) merged.push(listB.shift());

    return merged;
  }

  /**
   * Method that allow us to know which strategy are we using
   * @return {string} Name of the algorithm we are using
   */
  public sayStrategy(): string {
      return 'MergeSort';
  }
}
