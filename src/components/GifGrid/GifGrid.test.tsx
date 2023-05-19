/* eslint-disable camelcase */
import { render, screen } from '@testing-library/react';

import { GifGrid } from '.';

const testGifs = {
  data: [
    {
      title: 'test-title-1',
      images: {
        downsized_medium: {
          url: 'test-url-1',
        },
      },
    },
    {
      title: 'test-title-2',
      images: {
        downsized_medium: {
          url: 'test-url-2',
        },
      },
    },
  ],
};

vi.mock('@/hooks/useFetchGifs', () => {
  return { useFetchGifs: () => ({ gifs: testGifs, isLoading: false, error: undefined, isValidating: false }) };
});

describe('GifGrid Tests', () => {
  it('should render the component with data', async () => {
    render(<GifGrid gifCategory='Friends' />);

    const images = screen.getAllByRole('img');
    expect(images.length).toBe(testGifs.data.length);
  });
});
