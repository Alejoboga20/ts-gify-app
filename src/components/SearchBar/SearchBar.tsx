import { useId, useState } from 'react';

interface SearchBarProps {
  onAddNewCategory: (category: string) => void;
}

const INITIAL_SEARCH = '';

export const SearchBar = ({ onAddNewCategory }: SearchBarProps) => {
  const id = useId();
  const [gifCategory, setGifCategory] = useState(INITIAL_SEARCH);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onAddNewCategory(gifCategory);
    setGifCategory(INITIAL_SEARCH);
  };

  return (
    <form className='flex flex-col gap-2 sm:flex-row' onSubmit={onSubmit}>
      <label htmlFor={id} className='sr-only' />
      <input
        id='id'
        className='w-full rounded border-2 border-neutral-200 p-2 text-center sm:text-left'
        placeholder='Search Gifs'
        name='gif-search'
        value={gifCategory}
        onChange={(e) => setGifCategory(e.target.value)}
        autoComplete='off'
        spellCheck={false}
        tabIndex={1}
        type='search'
        autoFocus
      />
      <button className='btn-primary w-full sm:w-fit' type='submit' tabIndex={2}>
        Search
      </button>
    </form>
  );
};
