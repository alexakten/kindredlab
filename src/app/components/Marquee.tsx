import React from 'react';
import { testimonials, reversedTestimonials } from '../Testimonials';
import Testimonial from './Testimonial';

const Marquee = () => {
  return (
    <>
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
    </>
  );
};

export default Marquee;
