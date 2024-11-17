import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed pt-8  my-20 ">
      <SectionTitle
        subHeading={"check it out"}
        heading={"Featured Items"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pt-12 px-36 bg-slate-500">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="text-white md:ml-10">
          <p>Aug 20,2029</p>
          <p className="uppercase"> Where can i get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            iusto possimus nam accusantium corporis eum pariatur hic reiciendis
            perspiciatis assumenda. Repellat et facilis ex reprehenderit
            nesciunt laborum incidunt inventore, quam cumque nam autem
            praesentium, veritatis fuga esse voluptates alias accusantium saepe
            optio culpa? Consequuntur ducimus quod placeat fugiat sit? Id.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 btn-primary">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
