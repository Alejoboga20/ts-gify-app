import { useId } from 'react';

export const SearchBar = () => {
  const id = useId();

  return (
    <form className='flex flex-col gap-2 sm:flex-row'>
      <label htmlFor={id} className='sr-only' />
      <input
        id='id'
        className='w-full rounded border-2 border-neutral-200 p-2 text-center sm:text-left'
        placeholder='Search Gifs'
        tabIndex={1}
      />
      <button className='btn-primary w-full sm:w-fit' type='submit' tabIndex={2}>
        Search
      </button>
    </form>
  );
};
