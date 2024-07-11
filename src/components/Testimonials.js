import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est.",
    author: "Property Owner 1",
    image: "/images/user.png",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    quote: "Suspendisse potenti. Vivamus pulvinar vehicula urna, a pellentesque nulla efficitur non. Morbi a faucibus ligula. Nullam lacinia metus nec venenatis varius.",
    author: "Property Owner 2",
    image: "/images/user.png",
    video: "https://www.youtube.com/embed/3JZ_D3ELwOQ"
  },
  {
    quote: "Praesent volutpat leo vel orci porta, et viverra mauris vehicula. Aliquam erat volutpat. Donec ac magna ac nisi vehicula suscipit.",
    author: "Property Owner 3",
    image: "/images/user.png",
    video: "https://www.youtube.com/embed/ZXsQAXx_ao0"
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const { quote, author, image, video } = testimonials[currentIndex];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-orange-500 h-full p-8 bg-red-50">
      <div className="md:w-1/2 flex flex-col items-center justify-center">
        <div className="text-6xl mb-4">“</div>
        <p className="text-xl mb-6 text-center md:text-left">
          {quote}
        </p>
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={image}
            alt={author}
          />
          <div>
            <div className="font-bold">{author}</div>
          </div>
        </div>
        <div className="mt-4 flex">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full mr-2 ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-500'}`}
            ></span>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <iframe
          width="560"
          height="300"
          src={video}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Testimonial;
