import { PropsWithChildren } from 'react';

type BaseLayoutProps = PropsWithChildren;

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <main className='h-screen w-screen p-10 text-black sm:p-20'>
      <section className='mb-4 border-b border-b-neutral-200 p-4'>
        <header className='text-center text-2xl font-semibold sm:text-left'>
          🤪 Gify App - The best way to look for gifs
        </header>
      </section>
      {children}
    </main>
  );
};
