import { render, screen } from '@testing-library/react';

import { GifGridItem } from '.';

const testTitle = 'test title';
const testUrl = 'https://localhost.com/testUrl.png';

describe('GifGridItem Tests', () => {
  it('should match the component snapshot', () => {
    const { container } = render(<GifGridItem title={testTitle} gifUrl={testUrl} />);
    expect(container).toMatchSnapshot();
  });

  it('show show the image with url and alt', () => {
    render(<GifGridItem title={testTitle} gifUrl={testUrl} />);
    const { src, alt } = screen.getByRole<HTMLImageElement>('img');

    expect(src).toBe(testUrl);
    expect(alt).toBe(testTitle);
  });
});
