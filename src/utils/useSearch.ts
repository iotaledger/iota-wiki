import { createContext, useState } from "react";
import { allFacets } from "./searchConstant";

export const useSearchContext = createContext(null);

export function useSearch() {
  const [selectedFacets, setSelectedFacets] = useState(allFacets);

  return {
    selectedFacets,
    setSelectedFacets,
  };
}