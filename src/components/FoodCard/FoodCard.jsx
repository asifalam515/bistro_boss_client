const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl text-white">
      <figure>
        <img src={image} />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 tex-white">
        {" "}
        {price}{" "}
      </p>
      <div className="card-body text-center flex flex-col  items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-4 border-orange-400 mt-4 bg-slate-100">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
