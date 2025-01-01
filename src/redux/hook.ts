import { useDispatch, useSelector } from "react-redux";
import { APPDispatch, RootState } from "./store";

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<APPDispatch>();
