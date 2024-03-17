import SearchPlace from '@/components/SearchPlace';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24 bg-slate-900 overflow-hidden'>
      <h1 className='text-3xl font-semibold mb-2 text-neutral-300'>
        Search place
      </h1>
      <SearchPlace />
    </main>
  );
}
