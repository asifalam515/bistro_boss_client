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
                {...register("name")}
                type="text"
                placeholder="Type recipe name here"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Category
            </label>
            <select
              {...register("category")}
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
          </div>
          <div>
            <input
              type="submit"
              value="Add Item"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
