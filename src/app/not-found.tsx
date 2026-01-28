'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';
import { Button } from '@/components/ui/button';
import { Home, RefreshCcw } from 'lucide-react';
import animation from '@/assets/notfound.json';

export default function NotFound() {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleReload = () => {
    setIsRefreshing(true);
    router.refresh();
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="space-y-6">
        {/* Lottie Animation Container */}
        <div className="mx-auto w-full max-w-[300px] md:max-w-[450px]">
          <Lottie animationData={animation} loop={true} className="w-full" />
        </div>

        {/* Text Content */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            &apos;Page not found&apos;
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            The page you&apos;re looking for has vanished into the void.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
          <Button variant="default" asChild className="min-w-[140px] h-11">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go to Home
            </Link>
          </Button>

          <Button
            variant="outline"
            onClick={handleReload}
            disabled={isRefreshing}
            className="min-w-[140px] h-11"
          >
            <RefreshCcw
              className={`mr-2 h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`}
            />
            {isRefreshing ? 'Refreshing...' : 'Reload Page'}
          </Button>
        </div>
      </div>
    </div>
  );
}
