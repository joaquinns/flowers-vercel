"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function CustomCarousel() {
  return (
    <div className="my-8">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <Image
          loading="lazy"
          quality={100}
          width={500}
          height={400}
          src="/opinion.jpg"
          alt="imagen de opinion 1"
        />
        <Image
          loading="lazy"
          quality={100}
          width={500}
          height={400}
          src="/opinion2.jpg"
          alt="imagen de opinion 1"
        />
        <Image
          loading="lazy"
          quality={100}
          width={500}
          height={400}
          src="/opinion3.jpg"
          alt="imagen de opinion 1"
        />
        <Image
          loading="lazy"
          quality={100}
          width={500}
          height={400}
          src="/opinion4.jpg"
          alt="imagen de opinion 1"
        />
      </Carousel>
    </div>
  );
}
