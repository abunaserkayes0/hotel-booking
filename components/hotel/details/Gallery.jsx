import Image from "next/image";

const Gallery = ({ gallery }) => {
  const galleryCollection = [...gallery];
  const firstGalleryImg = galleryCollection.shift();
  console.log(firstGalleryImg);

  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image
          src={firstGalleryImg}
          className="h-[400px]"
          width={300}
          height={162}
          alt="Hello"
        />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          {galleryCollection.map((img, index) => (
            <Image
              key={index}
              src={img}
              className="h-[100px]"
              width={260}
              height={162}
              alt="Hello"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
