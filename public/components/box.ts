import React from '../lib/react.js';

interface BoxProps {
  // 필수 (required)
  children: React.ReactNode;

  // 선택 (optional)
  size?: 'small' | 'big';
  className?: string;
  style?: Record<string, string | number>;
}

function Box({ children, size, className = '', style }: BoxProps) {
  let sizeClassName = '';

  if (size) {
    sizeClassName = `box--${size}`;
  }

  const classNames = `box ${sizeClassName}${className}`.trim();

  return React.createElement(
    // type
    'div',
    // props
    {
      className: classNames,
      style: {
        backgroundColor: '#171c28',
        ...style,
      },
    },
    // ...children
    children
  );
}

export default Box;
