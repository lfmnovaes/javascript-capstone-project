import { getCounter } from './countComments.js';

const arrEmpty = [];
const arr2 = [
  {
    username: 'Lorem',
    comment: 'Ipsum',
    creation_date: '2021-10-15',
  },
  {
    username: 'User',
    comment: 'asdasd',
    creation_date: '2021-10-15',
  },
];
const arr3 = [
  {
    username: 'Luis',
    comment: 'test123',
    creation_date: '2021-10-14',
  },
  {
    username: 'User',
    comment: 'I like this',
    creation_date: '2021-10-14',
  },
  {
    username: 'qwe',
    comment: 'qweqwe',
    creation_date: '2021-10-14',
  },
];

describe('Count comments', () => {
  test('Detect if empty', () => {
    expect(getCounter(arrEmpty)).toBe(0);
  });
  test('Array with 2 comments', () => {
    expect(getCounter(arr2)).toBe(2);
  });
  test('Array with 3 comments', () => {
    expect(getCounter(arr3)).toBe(3);
  });
});
