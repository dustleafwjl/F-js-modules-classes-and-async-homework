export const getPoetry = async () => {
  let fetchData = await fetch("https://v1.jinrishici.com/all.json");
  const {origin, author, content} = await fetchData.json()
  return [origin, author, content]
}