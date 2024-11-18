import { Parallax, Background } from "react-parallax";
import SimpleParallax from "simple-parallax-js";
const Cover = ({ img, title }) => {
  return (
    <SimpleParallax scale={1.7} delay={1} transition="cubic-bezier(0,0,0,1)">
      <div
        className="hero h-[700px]"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase"> {title} </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </SimpleParallax>
  );
};

export default Cover;
