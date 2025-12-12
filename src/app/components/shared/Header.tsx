
const Header = ({ title, title2 }: { title: string, title2: string }) => {
  return (
    <div className=' text-center mx-auto w-full text-4xl font-medium pb-6'>    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
      {title} <span className="text-primary">{title2}</span>
    </h2></div>
  );
};

export default Header;