import { createContext,useEffect } from "react";

const BudgetContext = createContext();
const [budgetMode,setBudgetMode]=useEffect(false)

export default BudgetContext