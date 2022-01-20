//Manually recreating popular Lodash functions using object methods.

const _ = {
    clamp(num, low, upp) {
      lowerClampedValue = Math.max(num, low);
      clampedValue = Math.min(lowerClampedValue, upp);
      return clampedValue;
    },
  
    inRange(num, start, end) {
      if (end === undefined) {
        end = start;
        start = 0;
      }
      if (start > end) {
        let temp = end
        end = start;
        start = temp;
      }
      if (num >= start && num < end) {
        return isInRange = true;
      } else {
        return isInRange = false;
      }
    },
    words (string) {
      let words = string.split(' ');
      return words;
    },
    pad (string, length) {
      if (length < string.length) {
        return string
      } else {
        let startPaddingLength = Math.floor((length - string.length) / 2);
        let endPaddingLength = length - string.length - startPaddingLength;
        let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString
      }
    },
  
    has (object, key) {
      let hasValue = object[key] !== undefined;
      return hasValue;
    },
  
    invert (object) {
      let invertedObject = {};
      for (let key in object) {
        let originalValue = object[key];
        invertedObject[originalValue] = key;
      }
      return invertedObject;
    },
  
    findKey (object, predicate) {
      for (let key in object) {
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue === true) {
          return key;
        }
        return undefined;
      }
    },
  
    drop (array, n) {
      if (!n) {
        n = 1;
      }
      let droppedArray = array.slice(n);
      return droppedArray;
    },
  
    dropWhile (array, predicate) {
      const cb = (element, index) => {
        return !predicate(element, index, array);
      }
      let dropNumber = array.findIndex(cb);
      let droppedarray = this.drop(array, dropNumber);
      return droppedarray;
      },
  
  
    chunk (array, size) {
      if (!size) {
        size = 1;
      }
      let arrayChunks = [];
      for (let i = 0; i < array.length; i += size) {
        let arrayChunk = array.slice(i, i+size);
        arrayChunks.push(arrayChunk);
      }
      return arrayChunks;
    }
  };
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;



// Do not write or modify code below this line.
module.exports = _;