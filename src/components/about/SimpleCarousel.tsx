import React, { useState } from "react";

interface CarouselImage {
  src: string;
  description: string;
}

interface InfiniteCarouselProps {
  images: CarouselImage[];
  speed?: number;
  imageWidth?: number;
  imageHeight?: number;
  gap?: number;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  images,
  speed = 40,
  imageWidth = 300,
  imageHeight = 300,
  gap = 16,
}) => {
  const duplicatedImages = [...images, ...images];
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <div
        className="overflow-hidden w-full relative group"
        style={{
          maxWidth: "100%",
          overflow: "hidden",

          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
        
      >
        <div
          className="flex animate-carousel group-hover:paused"
          style={{
            minWidth: "max-content",
            animationDuration: `${speed}s`,
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              id="imageCarousel"
              className="relative"
              style={{
                flexShrink: 0,
                width: `${imageWidth}px`,
                height: `${imageHeight}px`,
                marginRight: `${gap}px`,
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "1rem",
                boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                cursor: "pointer",
              }}
              onClick={() => setModalImage(image.src)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <div className="w-full h-full absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white rounded-xl transition-opacity duration-300">
                  <h3 className="text-xl font-semibold">{image.description}</h3>
                </div>
              )}
            </div>
          ))}
        </div>

        <style>
          {`
            @keyframes carousel {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-carousel {
              animation-name: carousel;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }

            .paused {
              animation-play-state: paused;
            }
          `}
        </style>
      </div>

      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
        >
          <img
            src={modalImage}
            alt="Zoomed"
            className="max-w-xl max-h-xl rounded-xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
};

export default InfiniteCarousel;
