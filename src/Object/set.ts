export function set<T extends object, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K]
): T {
  if (key in obj) {
    obj[key] = value;
  }
  return obj;
}
