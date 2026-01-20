'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export const dynamic = 'force-dynamic';

interface ISearchFieldProps {
  queryKey?: string;
  placeholder?: string;
}

const SearchField: React.FC<ISearchFieldProps> = ({
  queryKey = 'searchTerm',
  placeholder = 'Write & Press Enter...',
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get(queryKey) || ''
  );
  const [query, setQuery] = useState(searchTerm);

  useEffect(() => {
    const urlValue = searchParams.get(queryKey) || '';
    setSearchTerm(urlValue);
    setQuery(urlValue);
  }, [searchParams, queryKey]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (query) {
      params.set(queryKey, query);
    } else {
      params.delete(queryKey);
    }
    router.replace(`?${params.toString()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(searchTerm);
  };

  const handleReset = () => {
    setSearchTerm('');
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full md:w-80 group">
      {/* Search Icon - absolute positioning */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none z-10">
        <Search className="w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
      </div>

      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 pr-16 bg-background border-muted-foreground/20 focus-visible:ring-primary shadow-sm h-10 w-full transition-all"
      />

      {/* Reset Button - Input এর ভেতরে ডানদিকে ছোট করে রাখা */}
      {searchTerm && (
        <button
          type="button"
          onClick={handleReset}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase px-2 py-1 bg-muted hover:bg-destructive/10 hover:text-destructive text-muted-foreground rounded transition-colors"
        >
          Clear
        </button>
      )}
    </form>
  );
};

export default SearchField;
