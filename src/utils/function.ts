export const objToQueryStr = (params?: object) =>
  params
    ? '?' +
      Object.keys(params || {})
        .filter((key) => params![key as keyof typeof params] !== undefined)
        .map((key) => `${key}=${encodeURIComponent(params![key as keyof typeof params])}`)
        .join('&')
    : ''
