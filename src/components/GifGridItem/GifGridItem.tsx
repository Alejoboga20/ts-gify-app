interface GifGridItemProps {
  gifUrl: string;
  title: string;
}

export const GifGridItem = ({ gifUrl, title }: GifGridItemProps) => {
  return (
    <div className='h-full w-full rounded border border-neutral-200 p-2'>
      <img src={gifUrl} alt={title} className='h-[200px] w-full' />
    </div>
  );
};
