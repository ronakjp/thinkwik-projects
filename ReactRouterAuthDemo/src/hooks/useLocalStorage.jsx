import { useState } from "react";

export const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const storedVal = localStorage.getItem(keyName);

      if (storedVal) {
        return JSON.parse(storedVal); // Corrected from `storedValue` to `storedVal`
      }

      localStorage.setItem(keyName, JSON.stringify(defaultValue));
      return defaultValue;
    } catch (err) {
      console.log("Error Occurred -- ", err);
      return defaultValue; // Return defaultValue in case of error
    }
  });

  const setValue = (newVal) => {
    try {
      localStorage.setItem(keyName, JSON.stringify(newVal));
    } catch (error) {
      console.log("While Setting Value Error Occurred -- ", error); // Corrected variable name
    }

    setStoredValue(newVal);
  };

  return [storedValue, setValue];
};
