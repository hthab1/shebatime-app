import AsyncStorage from "@react-native-async-storage/async-storage";
import { cacheItems } from "../declarations/cache";

export const cacheItem = async (key: cacheItems, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(
      "Error from AsyncStorage setItem function inside AsyncStorage.ts \n",
      e
    );
  }
};

export const loadCachedItem = async (key: cacheItems) => {
  try {
    const item = await AsyncStorage.getItem(key);
    return item;
  } catch (e) {
    console.log(
      "Error from AsyncStorage getItem function inside AsyncStorage.ts  \n",
      e
    );
  }
};
