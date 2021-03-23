import { getHighScores, registerScore } from './apiMock';

describe('Get High Scores', () => {
  test('Success', () => {
    getHighScores()
      .then((result) => {
        expect(result).toBe('Success');
      });
  });
});

describe('Register a new Score', () => {
  test('Success', () => {
    registerScore('name123', 1234)
      .then((result) => {
        expect(result).toBe('Success');
      });
  });

  test('Fail', () => {
    registerScore('name123', 0)
      .then((result) => {
        expect(result).toBe('Fail');
      });
  });
});
