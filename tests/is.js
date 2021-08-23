import {is} from '../src';

const stringValue = 'hello';
const numberValue = 42;
const fnValue = () => {};

describe('is', () => {
  test('from a single type argument', () => {
    const isString = is('string');
    const isNumber = is('number');

    expect(isString(stringValue)).toBe(true);
    expect(isNumber(stringValue)).toBe(false);
  });

  test('from one of many type arguments', () => {
    const isStringOrNumber = is('string', 'number');

    expect(isStringOrNumber(stringValue)).toBe(true);
    expect(isStringOrNumber(numberValue)).toBe(true);

    expect(isStringOrNumber(fnValue)).toBe(false);
  });

  test('from many of a type argument array', () => {
    const isFnOrNumber = is(['function', 'number']);

    expect(isFnOrNumber(fnValue)).toBe(true);
    expect(isFnOrNumber(numberValue)).toBe(true);

    expect(isFnOrNumber(stringValue)).toBe(false);
  });
})
