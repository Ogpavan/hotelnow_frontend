import React from "react";
import testimonials_bg from "../assets/images/testimonials_bg.jpg";

function Testimonial() {
  return (
    <div className="relative">
      {/* Background Image with Blur */}
      {/* <div className="absolute inset-0">
        <img
          src={testimonials_bg}
          alt="Testimonials Background"
          className="w-full h-full object-cover blur-lg"
        />
      </div> */}

      {/* Overlay Content */}
      <div className="relative flex flex-col items-center justify-center text-center text-white py-12 bg-black/50 px-4">
        <div className="container px-6 max-w-3xl">
          <h2 className="mt-3 text-xl font-bold leading-snug tracking-tight lg:text-4xl playfair_heading">
            Here's what our customers said
          </h2>
          <p className="py-4 text-lg leading-normal lg:text-xl mukta_mahee">
            Testimonials are a great way to increase brand trust and awareness.
            Use this section to highlight your popular customers.
          </p>
        </div>

        {/* Testimonials Grid with Horizontal Scroll */}
        <div className=" px-4 md:px-6 lg:px-16 mx-auto mt-8">
          <div className="flex gap-6 w-56 md:w-auto     lg:gap-10 overflow-x-auto scrollbar-hide">
            {[
              {
                text: "Share a testimonial that highlights benefits from a popular customer.",
                name: "Sarah Steiner",
                role: "VP Sales at Google",
                img: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&fit=crop&w=100&h=100&q=80",
              },
              {
                text: "Make sure you only pick the right sentence to keep it short and simple.",
                name: "Dylan Ambrose",
                role: "Lead Marketer at Netflix",
                img: "https://images.unsplash.com/photo-1463453091185-61582044d556?fit=crop&w=100&h=100&q=80",
              },
              {
                text: "This is an awesome landing page template! I would use this for anything.",
                name: "Gabrielle Winn",
                role: "Co-founder of Acme Inc",
                img: "https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?fit=crop&w=100&h=100&q=80",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className=" w-[280px]   md:w-[350px] p-6 bg-gray-100 rounded-xl shadow-md flex-shrink-0"
              >
                <p className="text-lg leading-normal text-gray-800 mukta_mahee_regular">
                  {testimonial.text}
                </p>
                <div className="flex items-center mt-6 space-x-4">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-md font-medium text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
