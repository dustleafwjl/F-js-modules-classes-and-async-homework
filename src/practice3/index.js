export const getPoetry = async () => {
  let fetchData = await fetch("https://v1.jinrishici.com/all.json");
  fetchData = await fetchData.json()
  const data = []
  data.push(fetchData.origin)
  data.push(fetchData.author)
  data.push(fetchData.content)
  return data
}