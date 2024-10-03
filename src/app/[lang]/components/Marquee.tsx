import React from "react";
import { testimonials, reversedTestimonials } from "../../TestimonialData";
import Testimonial from "./Testimonial";

const Marquee = () => {
  return (
    <div className="marquee-wrapper relative flex max-w-6xl flex-col gap-4 overflow-hidden">
      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-transparent to-white"></div>
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-transparent to-white"></div>
      <div className="marquee">
        {[...Array(3)].map((_, index) => (
          <div className="marquee-list" key={index}>
            {testimonials.map((testimonial, i) => (
              <Testimonial
                key={i}
                text={testimonial.text}
                user={testimonial.user}
                role={testimonial.role}
                imageUrl={testimonial.imageUrl}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="marquee">
        {[...Array(3)].map((_, index) => (
          <div className="marquee-list reverse" key={index}>
            {reversedTestimonials.map((testimonial, i) => (
              <Testimonial
                key={i}
                text={testimonial.text}
                user={testimonial.user}
                role={testimonial.role}
                imageUrl={testimonial.imageUrl}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
