import { FiMinus } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import { FilterAccordionPanel } from "./FilterAccordionPanel";

export const FilterAccordionItem = ({
  idx,
  filterData,
  isActive,
  handleAccordion,
  isBorderVisible,
}) => {
  return (
    <>
      <div className="accordion-item">
        <div className="accordion-btn flex justify-between items-center px-2">
          <h2 className="font-medium">{filterData.filterTitle}</h2>
          {isActive ? (
            <button onClick={() => handleAccordion(idx, "CLOSE")}>
              <FiMinus className="h-[18px] w-[18px]" />
            </button>
          ) : (
            <button onClick={() => handleAccordion(idx, "OPEN")}>
              <IoAdd className="h-[18px] w-[18px]" />
            </button>
          )}
        </div>
        <FilterAccordionPanel
          filterTitle={filterData.filterTitle}
          filterItems={filterData.items}
          isActive={isActive}
        />
      </div>
      {isBorderVisible && <hr className="my-3" />}
    </>
  );
};
