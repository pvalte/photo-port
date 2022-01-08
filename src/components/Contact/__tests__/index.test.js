import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Nav component', () => {
  it('renders', () => {
    render(<ContactForm  />);
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm />);

    expect(asFragment()).toMatchSnapshot();
  });

});

it('renders', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('contactme')).toHaveTextContent('Contact me')
  })

describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<ContactForm />);
  
      expect(getByTestId('submit')).toHaveTextContent('Submit');
    });
  
  })