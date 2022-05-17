import React from 'react';

const CaretDown = ({ expanded }) => {
  return (
    <svg
      width='16'
      height='9'
      viewBox='0 0 16 9'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`mx-4 ${expanded && 'rotate-180'}`}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.7955 0.454505C15.2348 0.893845 15.2348 1.60616 14.7955 2.0455L8.7955 8.0455C8.35616 8.48483 7.64384 8.48483 7.2045 8.0455L1.2045 2.0455C0.765165 1.60616 0.765165 0.893845 1.2045 0.454505C1.64384 0.0151656 2.35616 0.0151655 2.7955 0.454505L8 5.65901L13.2045 0.454505C13.6438 0.015165 14.3562 0.015165 14.7955 0.454505Z'
        fill='#D8782D'
      />
    </svg>
  );
};

export default CaretDown;
