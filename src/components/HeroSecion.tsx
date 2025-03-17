import heroImg from "../assets/hero_img.png";

const HeroSecion = () => {
  return (
    <section className="container">
      <h1 className="font-bold text-[40px] md:text-[50px] lg:text-[80px] mb-6 md:mb-9 lg:mb-20">
        Unlock your brand's potential with our creative solutions.
      </h1>
      <div className="absolute right-0 w-full h-[495px] md:h-[529px] lg:h-[629px] overflow-hidden">
        <img
          src={heroImg}
          alt="Abstract geometric architectural design featuring interconnected triangular and diamond-shaped patterns with modern metallic elements"
          className="w-[1340px] h-full object-cover absolute md:right-0"
        />
      </div>
    </section>
  );
};

export default HeroSecion;
