const MODULO = 100;

function getRandomLargePrimeNumber() {
  // assume it's implemented
}

function evenLargerPrimeNumber() {
  // assume it's implemented
}

class HashMap {
  /**
   * input set is the set of all possible strings of 4 lowercase letters
   * 
   * output set integers between 0 and 99
   * 
   */

  constructor() {
    this.prime = getRandomLargePrimeNumber();
    this.a = evenLargerPrime() % this.prime;
    this.b = evenLargerPrime() % this.prime;
  }

  patternBreakerHash(num) {
    return (num * this.a + this.b) % this.p;
  }

  hash(input) {
    /**
     * 
     * 1. it has to be deterministic: given the same input, alway return the same output
     * 2. the spread shoul be as even as possible
     * 3. should be within the target set]
     * 4. there should be no pattern
     * 
     * 'abcd'
     * 'badc'
     */

    let currentHash = 0;
    for (let i = 0; i < input.length; i ++) {
      const curCharCode = input.charCodeAt(i);
      const curDigit = curCharCode - 97;
      currentHash += curCharCode;
    }

    return this.patternBreakerHash(currentHash) % MODULO;
  }
}



/**
 * 
 * 1. We are combining digits
 * 2. There's a pattern in the way we combine these digits
 * 
 */

5961 = 
1 * 10 ^ 0 +
6 * 10 ^ 1 +
9 * 10 ^ 2 +
5 * 10 ^ 3

// The set of all strings that can be written from 2 lowercase letters

aa -> 00
ab -> 01
ac -> 02
ad -> 03


ba = 

a * 26 ^ 0 +
b * 26 ^ 1

abcd =

a * 26 ^ 0 = 0 +
b * 26 ^ 1 = 26 +
c * 26 ^ 2 = 1352 +
d * 26 ^ 3 = 52728

//54106

// 1. a deterministic mapping from input to output
// 2. an equal spread from the input set to the output set
// 3. stayed within the bounds of the output set




// set of modulo 2 over integers

[0, 1, 2, 3, 4 ,5]
[0, 1, 0, 1, 0, 1] -> there's a pattern



