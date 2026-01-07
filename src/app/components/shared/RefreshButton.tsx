'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const RefreshButton = () => {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);

    router.refresh();

    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <button
      onClick={handleRefresh}
      className="px-3 py-1 bg-blue-500 text-white rounded"
      disabled={isRefreshing}
    >
      {isRefreshing ? 'Refreshing...' : 'Refresh'}
    </button>
  );
};
