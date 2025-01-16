const Card = ({ title, icon }) => {
  return (
    <div className="card bg-[#F0F4F9] p-4 m-2 rounded-md md:w-[200px] md:h-[200px] h-[150px] relative  text-gray-500">
      <p>{title}</p>
      <div className="absolute bottom-2 right-2 text-gray-500 bg-white rounded-full w-8 h-8">
        <img src={icon} alt={`${title} icon`} className="p-0.5" />
      </div>
    </div>
  );
};

export default Card;
