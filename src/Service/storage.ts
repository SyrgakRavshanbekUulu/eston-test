export const read = (key: string) => {
  const data = localStorage.getItem(key)
  return data
}

export const write = (key: string, value: any) => {
  localStorage.setItem(key, value)
}

export const clear = (key: string) => localStorage.removeItem(key)

export const clearAll = () => localStorage.clear()