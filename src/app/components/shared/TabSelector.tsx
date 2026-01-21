'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface TabSelectorProps {
  tabs: { label: string; value: string }[];
}

const TabSelector = ({ tabs }: TabSelectorProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeTab = searchParams.get('tabs') || tabs[0].value;

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('tabs', value);

    params.set('page', '1');

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center p-1 bg-primary-foreground rounded-lg w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => handleTabChange(tab.value)}
          className={cn(
            'px-6 py-2 text-sm font-medium transition-all rounded-md',
            activeTab === tab.value
              ? 'bg-background text-primary shadow-sm'
              : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabSelector;
