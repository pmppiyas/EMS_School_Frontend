import Header from '@/app/components/shared/Header';
import nursery from "@/assets/nursery.jpg";
import photo3 from "@/assets/nurseryresult.jpg";
import photo2 from "@/assets/oyada.jpg";
import photo1 from "@/assets/oyada2.jpg";
import pared from "@/assets/pared.jpg";
import pareda from "@/assets/paredresult.jpg";
import Image from "next/image";

const Featured = () => {
  const images = [
    { src: pared, label: "Annual Sports Day", span: "md:col-span-2 md:row-span-2" },
    { src: pared, label: "Cultural Program", span: "" },
    { src: pareda, label: "Classrooms", span: "" },
    { src: nursery, label: "Science Labs", span: "md:col-span-2" },
    { src: photo2, label: "Education Tour", span: "" },
    { src: photo1, label: "Library", span: "md:row-span-2" },
    { src: photo3, label: "Student Activities", span: "" },
    { src: pared, label: "Morning Assembly", span: "" },
  ];

  return (
    <div className='w-full lg:w-11/12'>
      <section className="">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <Header title="School" title2="Gallary" />

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg group ${image.span}`}
              >
                <Image
                  src={image.src}
                  alt={image.label}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">
                      {image.label}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;