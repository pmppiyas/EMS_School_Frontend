
const Header = ({ title, title2, sub }: { title: string, title2: string, sub: string }) => {
  return (
    <div className=' text-center mx-auto w-full text-4xl font-medium mb-10 space-y-3' >    <h2 className="text-3xl md:text-4xl font-bold text-center">
      {title} <span className="text-primary">{title2}</span>
    </h2>
      <p className="text-center text-muted-foreground  max-w-2xl mx-auto text-lg font-normal italic">
        {sub}
      </p>
    </div>
  );
};

export default Header;