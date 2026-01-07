'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { getCookie, setCookie } from '@/lib/cookies';
import { useRouter } from 'next/navigation';

interface PaginationProps {
  total: number;
  limit: number;
  cookieName?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  limit,
  cookieName = 'studentPage',
}) => {
  const router = useRouter();
  const totalPages = Math.ceil(total / limit);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const savedPage = getCookie(cookieName);
    if (savedPage && !isNaN(Number(savedPage))) {
      const pageNum = Number(savedPage);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentPage(pageNum <= totalPages ? pageNum : 1);
      router.refresh();
    }
  }, [router, totalPages, cookieName]);

  const changePage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    setCookie(cookieName, String(newPage));
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center gap-2 mt-4 justify-center">
      <Button
        disabled={currentPage <= 1}
        onClick={() => changePage(currentPage - 1)}
        variant="outline"
      >
        Previous
      </Button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <Button
        disabled={currentPage >= totalPages}
        onClick={() => changePage(currentPage + 1)}
        variant="outline"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
