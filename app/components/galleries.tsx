import React from 'react';
import Cards from './card';

type Props = {};

const Gallery = (props: Props) => {
  const numberOfCards = 16; // Change this number if you need more or fewer cards

  return (
    <section className="text-gray-600 border body-font">
      <div className="px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4"> {/* Added flex-wrap to handle responsiveness */}
          {Array.from({ length: numberOfCards }).map((_, index) => (
            <Cards key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
