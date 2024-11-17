const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className=" text-center md:w-4/12 my-8 mx-auto">
      <p className="text-yellow-500">--- {subHeading}---- </p>
      <h3 className="text-primary text-3xl uppercase border-y-4 py-4">
        {" "}
        {heading}{" "}
      </h3>
    </div>
  );
};

export default SectionTitle;
