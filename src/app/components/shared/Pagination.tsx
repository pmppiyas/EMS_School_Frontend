'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

export const dynamic = 'force-dynamic';

interface PaginationProps {
  page: number;
  total: number;
  limit: number;
}

const Pagination: React.FC<PaginationProps> = ({ page, total, limit }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(total / limit);

  const changePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newPage === 1) {
      params.delete('page');
    } else {
      params.set('page', String(newPage));
    }
    router.push(`?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center gap-2 mt-4 justify-center">
      <Button
        disabled={page <= 1}
        onClick={() => changePage(page - 1)}
        variant="outline"
      >
        Previous
      </Button>

      <span>
        Page {page} of {totalPages}
      </span>

      <Button
        disabled={page >= totalPages}
        onClick={() => changePage(page + 1)}
        variant="outline"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
