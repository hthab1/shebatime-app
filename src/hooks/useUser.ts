import { useDispatch } from "react-redux";
import { cacheItem } from "../utils/storage";
import { UserGenderType } from "../types/loadedData";
import { setUserGender } from "../reducers/userReducer";

export default function useUser() {
  const dispatch = useDispatch();

  const selectGender = (gender: UserGenderType) => {
    dispatch(setUserGender(gender));
    cacheItem("gender", gender);
  };

  return {
    selectGender,
  };
}
