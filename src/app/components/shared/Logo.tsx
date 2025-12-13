import Link from "next/link";


export const Logo = () => {
  return (
    <div className="min-w-max inline-flex relative">
      <Link href="/" className="relative flex items-center gap-3">
        <div className="relative w-10 h-10 overflow-hidden flex rounded-xl">
          <span className="absolute w-5 h-5 -top-1 -right-1 bg-primary rounded-md rotate-45" />
          <span className="absolute w-5 h-5 -bottom-1 -right-1 bg-primary/90 rounded-md rotate-45" />
          <span className="absolute w-5 h-5 -bottom-1 -left-1 bg-primary/80 rounded-md rotate-45" />
          <span className="absolute w-3 h-3 rounded-full bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="inline-flex text-2xl font-bold text-primary">
          EMS School
        </div>
      </Link>
    </div>
  );
};

export default Logo;