'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '../../../components/ui/button';

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
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <Input
        type="text"
        enterKeyHint="search"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="lg:min-w-sm"
      />
      {searchTerm && (
        <Button
          type="button"
          onClick={handleReset}
          className="p-2 bg-red-100 hover:bg-red-200 rounded-full transition-colors text-red-500"
          aria-label="Clear search"
        >
          Reset
        </Button>
      )}
    </form>
  );
};

export default SearchField;
