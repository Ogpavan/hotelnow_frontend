import React from "react";

function Testimonial() {
  return (
    <div className="flex justify-center py-16 px-4">
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Clients Say
        </h2>

        {/* Testimonial Cards Wrapper */}
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide px-2 sm:px-6">
          {[
            {
              name: "John Doe",
              role: "CEO, TechCompany",
              image: "https://randomuser.me/api/portraits/men/32.jpg",
              text: "This service is amazing! It helped me scale my business rapidly. Highly recommend it!",
            },
            {
              name: "Jane Smith",
              role: "Marketing Director, CreativeAgency",
              image: "https://randomuser.me/api/portraits/women/44.jpg",
              text: "An excellent product with great support. Our team is much more productive now!",
            },
            {
              name: "Sam Wilson",
              role: "Product Manager, FinTech Co.",
              image: "https://randomuser.me/api/portraits/men/52.jpg",
              text: "A game-changer for our workflow. Our efficiency has increased dramatically!",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 sm:w-96 bg-white p-6 rounded-xl shadow-lg"
            >
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
