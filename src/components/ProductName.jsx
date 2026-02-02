import React from 'react';

const ProductName = ({ name, className = '' }) => {
  // ® sembolünü superscript olarak göster
  const parts = name.split('®');
  
  if (parts.length === 1) {
    return <span className={className}>{name}</span>;
  }
  
  return (
    <span className={className}>
      {parts[0]}
      <sup className="text-[0.5em] font-normal relative -top-[0.3em]">®</sup>
      {parts[1]}
    </span>
  );
};

export default ProductName;
