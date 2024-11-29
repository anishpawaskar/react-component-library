import { FILTERS } from "../filter.constant";
import { FilterAccordion } from "./components/FilterAccordion";

export const MyntraFilter = () => {
  return (
    <div className="w-64 mx-auto mt-5 border py-4 shadow-2xl bg-[#f7f7f7]">
      <h1 className="text-center text-lg mb-3">Myntra filter</h1>
      <FilterAccordion filtersData={FILTERS} />
    </div>
  );
};
