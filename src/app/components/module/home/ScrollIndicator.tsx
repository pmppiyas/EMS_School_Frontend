'use client';

import { ChevronRight } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-white/60 animate-bounce">
      <span className="text-sm mb-1">Scroll Down</span>
      <ChevronRight className="w-5 h-5 rotate-90" />
    </div>
  );
};

export default ScrollIndicator;
