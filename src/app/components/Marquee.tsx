import React from 'react';
import { testimonials, reversedTestimonials } from '../Testimonials';
import Testimonial from './Testimonial';

const Marquee = () => {
  return (
    <div className='marquee-wrapper max-w-6xl overflow-hidden relative flex flex-col gap-4'>
      <div className='absolute z-10 bg-gradient-to-l from-transparent to-white left-0 top-0 h-full w-40'></div>
      <div className='absolute z-10 bg-gradient-to-r from-transparent to-white right-0 top-0 h-full w-40'></div>
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
