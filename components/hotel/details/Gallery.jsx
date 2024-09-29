const Gallery = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <img src="/images/1.png" className="h-[400px]" alt="" />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          <img src="/images/2.png" alt="" />
          <img src="/images/3.png" alt="" />
          <img src="/images/4.png" alt="" />
          <img src="/images/5.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
