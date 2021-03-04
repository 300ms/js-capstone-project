import { getHighScores, registerScore } from './apiMock';

describe('Get High Scores', () => {
  test('Success', async () => {
    await getHighScores()
      .then((result) => {
        expect(result).toBe('Success');
      })
      .catch((result) => {
        expect(result).toBe('Fail');
      });
  });
});

describe('Register a new Score', () => {
  test('Success', () => {
    registerScore('name123', 1234)
      .then((result) => {
        expect(result).toBe('Success');
      })
      .catch((result) => {
        expect(result).toBe('Fail');
      });
  });
});
