/**
 * 
 * Create a data structure that lets us to the following:
 * 1) Give an alias to an object, and save it.
 * 2) Retrieve said object via the same alias.
 * 
 * 
 * 
 * const myObject = { something: 'sth' };
 * const map = new HashMap();
 * map.put('myObj', myObject);
 * const pulled = map.get('myObj');
 * pulled === myObject // true
 * 
 */


class ObjMap {
  constructor() {
    this.store = {};
  }

  put(key, value) {
    this.store[key] = value;
  }

  get(key) {
    return this.store[key];
  }
}


class NaiveMap {
  constructor() {
    this.store = [];
  }

  //O(1)
  put(key, value) {
    this.store.push({ 
      key: key,
      value: value,
    });
  }

  //O(n)
  get(key) {
    const found = this.store.find((currentItem) => {
      key === currentItem.key;
    })
    return found.value;
  }
}

class OkayMap {
  constructor(size) {
    this.store = [];
    this.size = size;
  }

  __hash(key) {
    
  }

  put(key, value) {
    const index = this.__hash(key);
    const existingEntryForIndex = this.store[index];
    if (!existingEntryForIndex) {
      this.store[index] = new NaiveMap();
    }
    this.store[index].put(key, value);
  }

  get(key) {
    const index = this.__hash(key);
    const innerMap = this.store[index];
    return innerMap.get(key);
  }
}

const m = new OkayMap();
const firstItem = 'first';
const secondItem = 'second';

m.put('f', firstItem);
m.put('s', secondItem);





const m = new NaiveMap();
m.put('a', 'kerem');
m.put('b', 'alex');

const a = [];
a[0] = 'kerem';
a[1] = 'alex';


/**
 * 
 * 
 * Only 4 character keys: lowercase alphabetical
 * 
 * 26^4 = 456976 keys
 * 
 * f(x) {
 * 
 *  where x is only 4 character keys: lowercase alphabetical
 * 
 *  return a different number for each potential string
 * }
 * 
 */

/**
 * 
 * 
 * a => 0
 * b => 1
 * c => 2
 * aa => 27
 * ab => 28
 * 
 * 
 */


/**
 * 
 * 
 * A smarter hash function
 * That on average, spreads the keys
 * into as many different buckets as possible
 * 
 */