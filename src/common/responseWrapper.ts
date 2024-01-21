interface errorMessage {
  message: string;
  errorMessage: string;
}

export const responseWrapper = <T>(
  data: T | null,
  error: errorMessage | null
) => {
  return {
    data: data,
    error: error,
  };
};
