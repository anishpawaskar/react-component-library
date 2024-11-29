import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

function test(location, filterTitle, item) {
  if (!location.search) {
    return false;
  }
  const removeQuerySymbol = location.search.split("?");
  const filterArr = removeQuerySymbol[1].split("&");

  for (let i = 0; i < filterArr.length; i++) {
    const splitByEquals = filterArr[i].split("=");

    if (splitByEquals[0] === filterTitle) {
      const splitByComma = splitByEquals[1]
        .split("%2C")
        .map((value) => value.replaceAll("+", " "));

      const isFilterExist = splitByComma.find(
        (filter) => item.filterName === filter
      );

      if (isFilterExist) {
        return true;
      } else {
        return false;
      }
    }
  }
}

export const FilterAccordionPanel = ({
  filterTitle,
  filterItems,
  isActive,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={`accordion-panel ${isActive ? "block" : "hidden "}`}>
      {filterItems.map((item) => {
        const [isChecked, setIsChecked] = useState(
          test(location, filterTitle, item)
        );

        return (
          <button
            onClick={() => {
              const searchParams = new URLSearchParams(location.search);

              if (searchParams.has(filterTitle)) {
                let existingValue = searchParams.get(filterTitle).split(",");

                if (existingValue.includes(item.filterName)) {
                  if (existingValue.length > 1) {
                    existingValue = existingValue.filter(
                      (value) => value !== item.filterName
                    );
                    setIsChecked(false);
                    searchParams.set(filterTitle, existingValue.join());
                  } else {
                    searchParams.delete(filterTitle);
                    setIsChecked(false);
                  }
                } else {
                  setIsChecked(true);
                  existingValue.push(item.filterName);
                  searchParams.set(filterTitle, existingValue.join(","));
                }
              } else {
                searchParams.set(filterTitle, item.filterName);
                setIsChecked(true);
              }

              navigate({
                pathname: location.pathname,
                search: `${searchParams.toString()}`,
              });
            }}
            key={item.id}
            className="flex items-center gap-3 w-full hover:bg-[#fff] h-9 px-2"
          >
            <input
              onClick={(e) => e.stopPropagation()}
              onChange={() => {
                setIsChecked((prevState) => !prevState);
              }}
              checked={isChecked}
              className="h-4 w-4"
              type="checkbox"
            />
            <p>
              {filterTitle === "Discount"
                ? `${item.filterName} and above`
                : item.filterName}
            </p>
          </button>
        );
      })}
    </div>
  );
};
