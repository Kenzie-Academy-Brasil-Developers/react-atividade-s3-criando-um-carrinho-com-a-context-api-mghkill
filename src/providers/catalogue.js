import { createContext, useState } from "react";

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([
    { name: "Book", price: 20 },
    { name: "T-shirt", price: 50 },
    { name: "Banana", price: 3 },
  ]);

  // criar a lógica para adicionar
  const addToCatalogue = (item) => {
    setCatalogue([...catalogue, item]);
  };

  // criar a lógica para remover
  const removeFromCatalogue = (item) => {
    const newCatalogue = catalogue.filter(
      (itemOnCatalogue) => itemOnCatalogue.name !== item.name
    );
    setCatalogue(newCatalogue);
  };

  return (
    <CatalogueContext.Provider
      value={{ catalogue, addToCatalogue, removeFromCatalogue }}
    >
      {children}
    </CatalogueContext.Provider>
  );
};
