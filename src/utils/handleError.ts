export const handleError = (data: any, errors: any) => {
  if (!errors) return '';
  const found = errors[data];
  return found ? found[0] : undefined;
};
