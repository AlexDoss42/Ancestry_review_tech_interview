import { render, screen } from '@testing-library/react';
import StarRating from '../StarRating';

it('should render 5 stars', () => {
  render(<StarRating experience_rating={0}/>);
  const starElements = screen.getAllByRole('radio');
  console.log(123, starElements.length);
  expect(starElements.length).toBe(5);
});
