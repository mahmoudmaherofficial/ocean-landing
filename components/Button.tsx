import { FC, ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  isFullSize?: boolean;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  isFullSize,
  children,
}) => {
  return (
    <button className={`btn ${variant && `btn-${variant}`}`}>{children}</button>
  );
};

export default Button;
