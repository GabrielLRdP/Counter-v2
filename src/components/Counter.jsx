const Counter = (props) => {
  const { handleCount, count, index } = props;
  return (
    <div className="counter">
      <div className="partOne">
        <div
          onClick={() => {
            handleCount(-1, index);
          }}
          className="minus"
        >
          -
        </div>
        <div>{count}</div>
        <div
          onClick={() => {
            handleCount(1, index);
          }}
          className="plus"
        >
          +
        </div>
      </div>
      <button
        onClick={() => {
          handleCount(-count, index);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Counter;
