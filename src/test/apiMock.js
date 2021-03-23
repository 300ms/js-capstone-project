import axios from 'axios';
import 'regenerator-runtime/runtime';

const getHighScores = async () => {
  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XNEYrKflyHKjlImWvLxZ/scores';

  return axios.get(baseUrl)
    .then(() => 'Success')
    .catch(() => 'Error');
};

const registerScore = async (user, score) => {
  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XNEYrKflyHKjlImWvLxZ/scores';

  return axios.post(baseUrl, {
    user,
    score,
  })
    .then(() => 'Success')
    .catch(() => 'Error');
};

export { getHighScores, registerScore };
