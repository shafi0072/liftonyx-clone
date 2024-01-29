const SecondaryButton = ({ title, onClick, type }) => {
  return (
    <div>
      <button
        type={type}
        onClick={() => onClick()}
        className="btn bg-white text-black border border-white hover:border-none transition-all transform hover:-translate-y-1 hover:bg-gray-100"
      >
        {title}
      </button>
    </div>
  );
};

export default SecondaryButton;
