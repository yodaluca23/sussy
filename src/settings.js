import useLocalStorage from "./useLocalStorage.js";

const useLocalFallback = (key, fallback) => {
  var [local, setLocal] = useLocalStorage(key);
  return [local === null ? fallback : local, setLocal];
};

export var useLocalEngine = () => useLocalFallback("engine", "DuckDuckGo");
export var useLocalBackground = () => useLocalFallback("background", "none");
export var useLocalAppearance = () => useLocalFallback("appearance", "default");
export var useLocalControls = () => useLocalFallback("controls", "default");
export var useLocalRounding = () => useLocalFallback("rounding", "default");
export var useLocalProxy = () => useLocalFallback("type", "Ultraviolet");
export var useLocalTitle = () => useLocalStorage("title");
export var useLocalIcon = () => useLocalStorage("icon");
export var useLocalNavbar = () => useLocalFallback("navbar", "icons");


export function resetSettings() {

}

export function resetAll() {
  
}