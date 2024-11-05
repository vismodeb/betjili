import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
const Banner = () => {
  const bannerImages = [
    {
      id: 1,
      image:
        "https://jiliwin.9terawolf.com/cms/banner/image/bd-desktop-66c442ab4e9f9.jpg",
    },
    {
      id: 2,
      image:
        "https://jiliwin.9terawolf.com/cms/banner/image/bd-desktop-66c2c5680c279.jpg",
    },
    {
      id: 3,
      image:
        "https://jiliwin.9terawolf.com/cms/banner/image/bd-desktop-65938d6405590.jpg",
    },
    {
      id: 4,
      image:
        "https://jiliwin.9terawolf.com/cms/banner/image/bd-desktop-669769f71da59.jpg",
    },
    {
      id: 5,
      image:
        "https://jiliwin.9terawolf.com/cms/banner/image/bd-desktop-667e3b922437d.jpg",
    },
  ];

  const [api, setApi] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Listen for the selected slide change
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Scroll to the next slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (api) {
        const nextIndex = (selectedIndex + 1) % bannerImages.length;
        api.scrollTo(nextIndex);
      }
    }, 3000); // 2 seconds

    return () => clearInterval(interval);
  }, [api, selectedIndex, bannerImages.length]);

  const scrollTo = (index) => {
    api?.scrollTo(index);
  };
  return (
    <Carousel className="w-full" setApi={setApi}>
      <CarouselContent>
        {bannerImages.map((image) => (
          <CarouselItem key={image.id}>
            <div className="h-36 sm:h-60 md:h-72 lg:h-full w-full object-center">
              <img className="w-full h-full" src={image.image} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Slide Select Buttons */}
      <div className="absolute bottom-8 md:bottom-16 right-4 md:right-[5.5rem] flex space-x-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`size-[10px] md:size-4 rounded-full hover:bg-white transition-colors ease-in-out duration-300 ${
              selectedIndex === index ? "bg-white" : "bg-[#12664b]"
            }`}
            // aria-label={Go to slide ${index + 1}}
          />
        ))}
      </div>
    </Carousel>
  );
};

export default Banner;
