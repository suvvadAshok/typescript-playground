export const collectionEquality = <
  T extends unknown[] | Record<string, unknown>,
  U extends unknown[] | Record<string, unknown>
>(
  col1: T,
  col2: U
): boolean => {
  if (Array.isArray(col1) && Array.isArray(col2)) return equality(col1, col2);

  return (
    equality(Object.keys(col1), Object.keys(col2)) &&
    equality(Object.values(col1), Object.values(col2))
  );
};

const equality = (col1: unknown[], col2: unknown[]): boolean => {
  if (col1.length !== col2.length) return false;
  for (let i = 0; i < col1.length; i++) {
    if (col1[i] !== col2[i]) return false;
  }
  return true;
};
