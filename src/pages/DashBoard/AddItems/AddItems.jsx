import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-6 bg-white rounded-lg dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <SectionTitle heading="Add an Item" subHeading="What's new?" />
      <div className="mt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="w-full my-6">
            {/* name */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Recipe name*</span>
              </div>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Type recipe name here"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          {/* category and price */}
          <div className="flex gap-6">
            {/* category */}
            <div className="w-full my-6">
              {/* name */}
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Category*</span>
                </div>
                <select
                  {...register("category", { required: true })}
                  className="select select-bordered w-full "
                >
                  <option disabled selected>
                    Select a Category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </label>
            </div>
            {/* price */}
            <div className="w-full my-6">
              {/* name */}
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  placeholder="Price"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          {/* recipe description */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>
          {/* file input */}
          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn">
            Add Item <FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
