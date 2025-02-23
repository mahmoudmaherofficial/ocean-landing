import { FC, ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  children,
}) => {
  return (
    <button className={`btn ${variant && `btn-${variant}`}`}>{children}</button>
  );
};

export default Button;
