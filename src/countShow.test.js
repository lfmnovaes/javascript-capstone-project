import { JSDOM } from 'jsdom';
import { getCounter } from './countShow.js';

const nav = [new JSDOM(), new JSDOM(), new JSDOM()];
const arrEmpty = [];
const arr3 = ['alpha', 'beta', 'gama'];
const arr6 = ['1', '2', '3', '4', '5', '6'];
const arr8 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

describe('Counter shows test', () => {
  test('Not supported genre', () => {
    expect(getCounter(nav, 'Action', arr3, arr6, arr8)).toBe(0);
  });
  test('Supported genre with 8 IDs', () => {
    expect(getCounter(nav, 'Drama', arr8, arrEmpty, arr3)).toBe(8);
  });
  test('Supported genre with 3 IDs', () => {
    expect(getCounter(nav, 'Documentary', arr8, arrEmpty, arr3)).toBe(3);
  });
});
