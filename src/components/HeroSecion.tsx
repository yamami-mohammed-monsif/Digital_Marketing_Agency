import heroImg from "../assets/hero_img.png";

const HeroSecion = () => {
  return (
    <section className="my-container mb-[60px] md:mb-[82px] lg:mb-[150px] h-[679px] md:h-[728px] lg:h-[869px] ">
      <h1>Unlock your brand's potential with our creative solutions.</h1>
      <div className="absolute right-0 w-full h-[495px] md:h-[529px] lg:h-[629px] overflow-hidden">
        <img
          src={heroImg}
          alt="Abstract geometric architectural design featuring interconnected triangular and diamond-shaped patterns with modern metallic elements"
          className="h-full object-cover absolute md:right-0 w-[1340px]"
        />
      </div>
    </section>
  );
};

export default HeroSecion;
