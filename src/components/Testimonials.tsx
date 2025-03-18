const Testimonials = () => {
  return (
    <section className="my-container mb-[60px] md:mb-[93px] lg:mb-[114px] xl:mb-[150px] ">
      <h2 className="md:mb-9 lg:mb-12 xl:mb-[60px]">Testimoni!</h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-[101px] lg:gap-[153px] xl:gap-[235px]">
        <div>
          <p className="md:text-[36px] leading-[180%]">
            Working together with EMOON, we are very thankful for our loyal
            clients. our business is one of close relationship and we are very
            fortunate to be able to share.
          </p>
        </div>
        <div className="md:self-end">
          <span className="block text-[40px] md:text-[64px] font-bold mb-1 ">
            Momon
          </span>
          <span className="block text-secondary">CEO of Gaiken</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
