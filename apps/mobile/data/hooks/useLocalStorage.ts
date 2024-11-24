import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback } from "react";

export default function useLocalStorage() {
  const saveItem = useCallback(async (key: string, value: any) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }, []);

  const getItem = useCallback(async (key: string) => {
    return JSON.parse((await AsyncStorage.getItem(key)) ?? "");
  }, []);

  const removeItem = useCallback(async (key: string) => {
    await AsyncStorage.removeItem(key);
  }, []);

  return { saveItem, getItem, removeItem };
}
