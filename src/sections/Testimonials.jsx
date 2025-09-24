import React from 'react';
import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const TestimonialsContainer = styled.section`
  padding: 8rem 4%;
  background-color: #080808; /* A slightly off-black for depth */
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  color: var(--primary-white);
`;

const TestimonialCard = styled.div`
  background-color: #111;
  border: 1px solid #222;
  padding: 2.5rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Quote = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  font-style: italic;
  margin-bottom: 2rem;
`;

const Author = styled.div`
  p {
    margin: 0;
    line-height: 1.5;
  }
  .name {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--primary-white);
  }
  .title {
    font-size: 0.9rem;
    color: var(--accent-blue);
  }
`;

const Testimonials = ({ testimonials }) => {
  return (
    <TestimonialsContainer id="testimonials">
      <SectionTitle>What Others Say</SectionTitle>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard>
              <Quote>"{testimonial.quote}"</Quote>
              <Author>
                <p className="name">{testimonial.name}</p>
                <p className="title">{testimonial.title}</p>
              </Author>
            </TestimonialCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </TestimonialsContainer>
  );
};

export default Testimonials;
