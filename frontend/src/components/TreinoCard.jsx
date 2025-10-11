import React from 'react';

function TreinoCard({ img, title, className }) {
  return (
    // O container principal precisa ser 'relative' para posicionar o título
    <div className={`relative ${className}`}>
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover rounded-lg" 
      />
      
      {/* O título é posicionado de forma absoluta em relação ao container */}
      <span 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 
                   whitespace-nowrap bg-cyan-500 text-white font-bold 
                   px-4 py-2 rounded-full text-sm md:text-base"
      >
        {title}
      </span>
    </div>
  );
}

export default TreinoCard;