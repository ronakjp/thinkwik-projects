type ShowCardProps = {
  title: string;
  description: string;
  price: string;
  className: string;
};

const ShowDetailCard: React.FC<ShowCardProps> = ({
  title,
  description,
  price,
  className,
}) => {
  return (
    <div className={className + "  rounded-lg h-full"}>
      <div>
        <div>
          <img
            className="rounded-2xl"
            src="/c92c2f79-014c-41fb-be60-ed5d28d0508b.webp"
          />
        </div>
        <div className="p-2 mt-3">
          <div className="">
            <div className="font-bold ">{title}</div>
          </div>
          <div className=" ">
            <div className="font-thin">{description}</div>
          </div>
          <div>
            <div className="font-medium">{price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetailCard;
