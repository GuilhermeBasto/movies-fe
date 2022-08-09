const logger = () => (next: any) => (action: any) => {
  console.group(action.type);
  console.info("Logger", action);
  const result = next(action);
  console.groupEnd();
  return result;
};

export default logger;
