const PrimaryButton = ({ title, onClick, type }) => {
  return (
    <div>
      <button
        type={type}
        onClick={() => onClick()}
        className="btn bg-black text-white border border-black px-14 hover:bg-black hover:border-none"
      >
        {title}
      </button>
    </div>
  );
};

export default PrimaryButton;
