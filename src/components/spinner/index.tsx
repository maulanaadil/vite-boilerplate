import React from 'react';
import ReactLoading from 'react-loading';

const Spinner = ({
  color = '#1c1c1c',
  height = '64px',
  width = '64px',
}: {
  type?: string;
  color?: string;
  height?: string;
  width?: string;
}) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <ReactLoading type="bubbles" color={color} height={height} width={width} />
    </div>
  );
};

export default Spinner;
