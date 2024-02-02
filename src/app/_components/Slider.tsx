'use client'
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const sliderItems = [
  {'id':1, 
  'title':'Spirulina platensis',
   'imgBg':"spirulina-platensis.jpeg",
   'adds':'AI is here to assist you, your company and your clients! As simple as passing a pdf with instructions and the guidelines about the way you want it to treat your costumers! The assistant will learn everything from the knowledge base you are passing in and he will kindly help you take care of your clients. It would feels like having all the Chat GPT knowledge and resources customized to your own business. It is also possible to train the assistant in pattern recognition, emotions identification and classification, recomendation systems and even more... by taking feedback directly from the main source: ¡Your clients!',
   'repoLink':'' ,
    'website':''
  },
  {'id':2, 
  'title':"Spirulina máxima",
   'imgBg':"spirulina-maxima.jpeg",
    'adds':'When aiming to optimize information management, security, continuous integration, or to scale our system according to the real-time needs of our business, a Rest API can handle all logistics and store the information in our database while monitoring changes in real-time, enhancing control over daily operations.',
     'repoLink':'spirulina-maxima.jpeg' ,
      'website':' https://productsoft-52eb0.web.app/dashboard'},
  {'id':3, 
  'title':'Chlorella Vulgaris',
   'imgBg':"chlorell-b2.webp", 'adds':'Chlorella in 200x microscope 10um' , 'website':' https://r3js-vite.vercel.app/'},
  {'id':5, 
  'title':'Chlorella Vulgaris', 'imgBg':"Chlorella1-2.webp", 'adds':'Chlorella in 200x microscope 20um' , 'website':' https://r3js-vite.vercel.app/'},

  // {'imgBg':"aesthetic_col_3.png", "img":'PhotoRoom_20230811_172032.png_big_no_bg.png'},
  // {'imgBg':"aesthetic_col_3.png", "img":'PhotoRoom_20230811_172055.png_big_no_bg.png'},
  // {'imgBg':"aesthetic_col_3.png", "img":'PhotoRoom_20230811_172118_big_no_bg.png'},
  // {'imgBg':"aesthetic_col_4.png", "img":'PhotoRoom_20230811_172423_big_no_bg.png'},
  // {'imgBg':"", "img":'PhotoRoom_20230811_171700.png'},
  // {'imgBg':"", "img":'PhotoRoom_20230811_172447.png'}
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the current image index to the next one, looping back to the start if necessary
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    }, 5000);

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);


  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };


  return (
    <div className="w-screen relative border-y-2 h-screen md:h-full flex flex-col">
      <div className="flex h-screen">
        {/* Carrusel en la mitad izquierda */}
        <div className="w-1/2">
          <div
            ref={sliderRef}
            className="h-screen  justify-center  flex rounded-md"
          >
            <AnimatePresence>
              {sliderItems.map((slide, index) => (
                <motion.div
                  className="relative items-center flex h-screen justify-center duration-200 transition-all ease z-20 -in-out w-auto md:h-screen rounded-md"
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                >
                  <Image
                    className="border-2 opacity-60 object-cover cursor-pointer"
                    src={`/${slide.imgBg}`}
                    alt={`Image ${index}`}
                    width={500}
                    height={500}
                    style={{
                      display: index === currentImageIndex ? 'block' : 'none',
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="absolute bottom-0 pb-8 w-full z-30 flex justify-center h-auto items-end space-x-6">
            {sliderItems.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full bg-gray-400 hover:scale-105 hover:bg-[#fafafa] duration-200 transition-all hover:ease-in-out cursor-pointer ${
                  index === currentImageIndex ? 'bg-blue-500' : ''
                }`}
                onClick={() => handleDotClick(index)}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>

        {/* Título y adiciones en la mitad derecha */}
        <div className="w-1/2 flex flex-col justify-center items-center p-8">
          <h2 className="text-2xl font-bold mb-4">{sliderItems[currentImageIndex].title}</h2>
          <p>{sliderItems[currentImageIndex].adds}</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;