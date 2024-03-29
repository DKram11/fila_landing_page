import { useState } from "react";
import { arrowRightHovered } from "../assets/icons";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  showIcon,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(iconURL);

  const handleHover = () => {
    setIsHovered(!isHovered);
    setCurrentIcon(isHovered ? iconURL : arrowRightHovered);
  };
  
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border-2 font-montserrat text-lg leading-none rounded-full hover:bg-white hover:text-fila-red ease-in-out transition
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-fila-red text-white border-fila-red"
      } ${fullWidth && "w-full"}`} 
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {label}

      {showIcon && (   
        <img
          src={currentIcon}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
    </button>
  );
};

export default Button;