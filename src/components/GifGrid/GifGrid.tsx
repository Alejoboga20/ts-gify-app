/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable camelcase */
import { useFetchGifs } from '@/hooks/useFetchGifs';

import { GifGridItem } from '..';

interface GifGridProps {
  gifCategory: string;
}

export const GifGrid = ({ gifCategory }: GifGridProps) => {
  const { gifs, isLoading } = useFetchGifs(gifCategory);

  if (isLoading) return <p>Loading...</p>;

  const gifsData = gifs?.data || [];

  return (
    <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3'>
      {gifsData.map(({ images, title }) => (
        <GifGridItem key={images.downsized_medium.url} gifUrl={images.downsized_medium.url!} title={title} />
      ))}
    </div>
  );
};
