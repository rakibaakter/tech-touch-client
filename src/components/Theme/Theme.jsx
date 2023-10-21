import useAuthInfoHook from "../../Hooks/useAuthInfoHook";

const Theme = () => {
  const { isWhite, setIsWhite } = useAuthInfoHook();
  console.log(isWhite);

  return (
    <div className="form-control">
      <span className="label-text text-white"> White Mood</span>
      <button onClick={() => setIsWhite(!isWhite)}>
        <input type="checkbox" className="toggle toggle-accent ml-2" />
      </button>
    </div>
  );
};

export default Theme;
