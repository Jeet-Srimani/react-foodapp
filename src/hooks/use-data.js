import { useContext } from "react";
import DataContext from "../context/Data";

export function useData () {
    return useContext(DataContext)
}
