import { FC } from 'react';

interface HeadingProps {
  title: string;
  centered?: boolean;
}

const Heading: FC<HeadingProps> = ({ title, centered: isCentered }) => {
  return (
    <h1
      className={`bg-clip-text text-transparent bg-gradient-to-tr from-sky-200 via-sky-500 to-sky-200 font-extrabold text-3xl sm:text-4xl lg:text-5xl/normal ${
        isCentered && 'text-center'
      }`}
    >
      {title}
    </h1>
  );
};

export default Heading;
