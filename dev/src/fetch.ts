export function fetchFile(url: string) {
  if (import.meta.env.MODE === "deployed") {
    url = `${import.meta.env.BASE_URL}/${url}`;
  }
  return fetch(url);
}
