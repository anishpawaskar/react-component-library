export const SliderListItem = ({ item, width }) => {
  return (
    <div
      style={{ width: `${width}px`, background: item.color }}
      className="text-center text-lg flex justify-center items-center shrink-0 relative"
    >
      {item.name}
    </div>
  );
};
