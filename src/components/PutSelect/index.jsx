export function PutSelect(props) {
  const ITEM = props.ITEM;
  const handleEvent = props.handleEvent;
  return (
    <div>
      <select
        onChange={handleEvent}
        className="text-center item-center font-bold m-2 p-2 min-w-24 text-base md:text-xl border-green-400 bg-white border-2 rounded-lg shadow-lg"
        style={{ margin: "0 5px" }}
      >
        {ITEM.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
