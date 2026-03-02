'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { getCookie, setCookie } from '@/lib/cookies';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

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
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(total / limit);

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const init = async () => {
      const urlPage = searchParams.get('page');
      const savedPage = await getCookie(cookieName);

      if (urlPage && !isNaN(Number(urlPage))) {
        const pageNum = Number(urlPage);
        setCurrentPage(pageNum <= totalPages ? pageNum : 1);
      } else if (savedPage && !isNaN(Number(savedPage))) {
        const pageNum = Number(savedPage);
        setCurrentPage(pageNum <= totalPages ? pageNum : 1);
        updateUrl(pageNum <= totalPages ? pageNum : 1);
      } else {
        setCurrentPage(1);
        updateUrl(1);
        await setCookie(cookieName, '1');
      }
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPages]);

  const updateUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const changePage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;

    setCurrentPage(newPage);
    setCookie(cookieName, String(newPage));
    updateUrl(newPage);
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
