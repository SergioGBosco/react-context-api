import { useState, useContext, createContext } from "react";

const BudgetContext = createContext();


const BudgetProvider = ({ children }) => {
  const [budgetMode, setBudgetMode] = useState(false)

  const selected = () => {
    // { !budgetMode ? setBudgetMode(true) : setBudgetMode(false) }
    setBudgetMode(!budgetMode)
  }
  return (
    <BudgetContext.Provider value={{ budgetMode, selected }}>
      {children}
    </BudgetContext.Provider>
  );
}
const useBudgetMode = () => {
  const context = useContext(BudgetContext);
  return context;
}

export { BudgetProvider, useBudgetMode }