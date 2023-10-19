const PrimaryButton = ({ children }) => {
  return (
    <div>
      <button className="btn btn-accent text-white">{children}</button>
    </div>
  );
};

export default PrimaryButton;
