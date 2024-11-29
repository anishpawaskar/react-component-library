import { useState } from "react";
import { FilterAccordionItem } from "./FilterAccordionItem";

export const FilterAccordion = ({ filtersData }) => {
  const [activeAccordion, setActiveAccordion] = useState([1]);
  const filtersArray = Object.keys(filtersData);

  const handleAccordion = (idx, action) => {
    if (action === "OPEN") {
      setActiveAccordion([...activeAccordion, idx + 1]);
    } else {
      const newActiveAccordion = activeAccordion.filter(
        (activeIdx) => activeIdx !== idx + 1
      );
      setActiveAccordion(newActiveAccordion);
    }
  };

  return (
    <div className="accordion">
      {filtersArray.map((filterName, idx) => {
        const filter = filtersData[filterName];
        const isActive = activeAccordion.find(
          (activeIdx) => activeIdx === idx + 1
        );
        const isBorderVisible = idx < filtersArray.length - 1;

        return (
          <FilterAccordionItem
            idx={idx}
            isActive={isActive}
            key={idx}
            filterData={filter}
            handleAccordion={handleAccordion}
            isBorderVisible={isBorderVisible}
          />
        );
      })}
    </div>
  );
};
