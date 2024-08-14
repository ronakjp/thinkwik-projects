const Header: React.FC = () => {
  return (
    <div className="flex justify-between content-center items-center p-6">
      <div>
        <img className="ml-9 p-1 w-14 h-auto" src="/instagram.png" />
      </div>
      <div>
        <h1 className="text-4xl font-custom1 font-thin  ">
          Instagram Feed Watcher
        </h1>
      </div>
      <div>
        <img className="w-12 h-auto mr-10 rounded-full" src="/personImg.jpg" />
      </div>
    </div>
  );
};

export default Header;
