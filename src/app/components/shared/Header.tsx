
const Header = ({ title }: { title: string }) => {
  return (
    <div className=' text-center mx-auto w-full text-4xl font-medium pb-6'>  <h2 className="text-4xl font-bold text-center mb-12">
      {title}
    </h2></div>
  );
};

export default Header;