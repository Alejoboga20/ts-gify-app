import { render, screen } from '@testing-library/react';

import { GifGrid } from '.';

describe('GifGrid Tests', () => {
  test('should render the component', async () => {
    render(<GifGrid gifCategory='Friends' />);

    screen.debug();
  });
});
