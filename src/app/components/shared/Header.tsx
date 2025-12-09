
const Header = ({ title }: { title: string }) => {
  return (
    <div className=' text-center mx-auto w-full text-4xl font-medium pb-6'>{title}</div>
  );
};

export default Header;