export const handleLang = <T extends { language: { code: string } }>(
  array: T[],
  value: string,
): T[] => {
  return array.filter(it => it.language.code === value);
};
