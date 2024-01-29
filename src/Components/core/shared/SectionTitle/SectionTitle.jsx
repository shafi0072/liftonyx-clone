const SectionTitle = ({ subTitle, title }) => {
  return (
    <div>
      <h3 className="text-center text-sm font-medium">{subTitle}</h3>
      <h1 className="text-center text-5xl font-semibold my-3">{title}</h1>
    </div>
  );
};

export default SectionTitle;
