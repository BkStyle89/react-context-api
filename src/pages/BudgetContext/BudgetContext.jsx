import { createContext,useEffect } from "react";

const BudgetContext = createContext();

export default function BudgetContext(){
    
    const [budgetMode,setBudgetMode]=useEffect(false);

}