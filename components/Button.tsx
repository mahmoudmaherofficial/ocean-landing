import { FC, ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  isFullSize?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  children,
  isFullSize = false,
}) => {
  return (
    <button
      className={`btn ${variant && `btn-${variant}`} ${isFullSize && 'w-full'}`}
    >
      {children}
    </button>
  );
};

export default Button;
