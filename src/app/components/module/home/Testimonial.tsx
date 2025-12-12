import Header from '@/app/components/shared/Header';
import { Star } from 'lucide-react';
import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Parent",
      image: "/testimonials/parent1.jpg",
      rating: 5,
      text: "The dedication of the teachers and the supportive environment have made a remarkable difference in my child's academic progress and personal growth."
    },
    {
      name: "Karim Rahman",
      role: "Parent",
      image: "/testimonials/parent2.jpg",
      rating: 5,
      text: "Excellent school with outstanding facilities. My daughter loves going to school every day and has developed both academically and socially."
    },
    {
      name: "Nadia Hassan",
      role: "Former Student",
      image: "/testimonials/student1.jpg",
      rating: 5,
      text: "The values and education I received here shaped who I am today. The teachers went above and beyond to ensure every student succeeded."
    },
    {
      name: "Mohammad Ali",
      role: "Parent",
      image: "/testimonials/parent3.jpg",
      rating: 5,
      text: "A nurturing environment where children thrive. The school's focus on holistic development sets it apart from others in the region."
    }
  ];

  return (
    <div className=' bg-primary-foreground w-full mx-auto'>
      <section className="py-16  lg:w-11/12 mx-auto ">
        <div className="container mx-auto px-4">

          <Header title="What" title2='Parents Say' sub="Hear from our school community about their experiences and why they trust us with their children's education" />


          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
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

export default Testimonial;