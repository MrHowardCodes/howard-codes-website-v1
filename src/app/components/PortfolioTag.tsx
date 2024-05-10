import React from "react";

const PortfolioTag = ({ name, onClick, isSelected, tagColor }) => {
  const buttonStyles = isSelected ? "bg-black border-black" : "bg-[#d9d9d9]";
  return (
    <button
      onClick={() => onClick(name)}
      className={`${buttonStyles} ${tagColor} rounded-full border-2 hover:border-black px-3 py-2 text-xl cursor-pointer drop-shadow `}
    >
      <span className="drop-shadow">{name}</span>
    </button>
  );
};

export default PortfolioTag;
