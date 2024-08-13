const Header: React.FC = () => {
  return (
    <div className="flex justify-between content-center items-center ">
      <div>
        <img className="ml-9 p-1 w-36 h-auto" src="/Airbnb-logo.png" />
      </div>
      <div>
        <img className="w-12 h-auto mr-10 rounded-full" src="/personImg.jpg" />
      </div>
    </div>
  );
};

export default Header;
