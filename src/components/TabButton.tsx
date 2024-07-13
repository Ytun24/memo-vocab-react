function TabButton({ children, isSelected, onClickHandler }) {
  return (
    <>
      <button
        className={
          isSelected
            ? "p-2 text-xl underline text-purple-800 font-semibold"
            : "p-2 text-xl"
        }
        onClick={onClickHandler}
      >
        {children}
      </button>
    </>
  );
}

export default TabButton;
