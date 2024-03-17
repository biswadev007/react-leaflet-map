'use client';
import { useCallback, useRef, FormEvent } from 'react';
import useLocations from '@/hooks/useLocations';
import GeneralMap from './GeneralMap';

const SearchPlace = () => {
  const { error, isLoading, searchLocation, locations } = useLocations();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = (
      formRef.current?.elements.namedItem('location') as HTMLInputElement
    )?.value;
    searchLocation(value);
  }, []);

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mb-4 flex gap-4 text-sm'
      >
        <input
          name='location'
          placeholder='eg: Taj hotels'
          className='w-60 h-10 p-1 border border-gray-300 focus-visible:outline-none'
        />
        <button className='w-20 h-10 bg-green-500 text-black hover:opacity-70'>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>
      {error ? (
        <div>Something went wrong, sorry for the inconvenient</div>
      ) : null}
      <GeneralMap locations={locations} />
    </>
  );
};

export default SearchPlace;
