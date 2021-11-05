import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import React from 'react';
import App from './App';


const expectedReviews = [
  {
      "rating": 0.8,
      "publish_date": "2016-09-05T23:25:47.642350Z",
      "id": "9783221620868",
      "body": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
      "author": "Kaley Schiller"
  },
  {
      "rating": 3.2,
      "publish_date": "2016-09-04T23:25:47.642388Z",
      "id": "9793364045824",
      "body": "Can one desire too much of a good thing?.",
      "author": "Fay Lemke"
  },
  {
      "rating": 4.1,
      "publish_date": "2016-09-03T23:25:47.642545Z",
      "id": "9784620626604",
      "body": "How bitter a thing it is to look into happiness through another man's eyes!",
      "author": "Tatyana Olson"
  },
  {
      "rating": 1.6,
      "publish_date": "2016-09-02T23:25:47.642587Z",
      "id": "9790650579209",
      "body": "For ever and a day.",
      "author": "Brett Gutmann"
  }
];

test('renders main header', () => {
  render(<App />);
  const headerElement = screen.getByText(/shakespear's reviews/i);
  expect(headerElement).toBeInTheDocument();
});

test('populates list of reviews', async () => {
  const response = await fetch(process.env.REACT_APP_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.REACT_APP_ACCESS_TOKEN
    }
  });

  const json = response.json();
  console.log("JSON", json);

  expect(json).toEqual(expectedReviews);
})