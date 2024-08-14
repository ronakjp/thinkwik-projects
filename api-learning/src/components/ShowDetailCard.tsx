type ShowCardProps = {
  imgURL: string;
  email: string;
  name: string;
  className: string;
};

const ShowDetailCard: React.FC<ShowCardProps> = ({
  email,
  name,
  className,
  imgURL,
}) => {
  return (
    <div className={className + "  rounded-lg h-full"}>
      <div>
        <div>
          <img className="rounded-2xl size-40 " src={imgURL} />
        </div>
        <div className="p-2 mt-3">
          <div className="">
            <div className="font-bold ">{name}</div>
          </div>
          <div className=" ">
            <div className="font-thin">{email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetailCard;
