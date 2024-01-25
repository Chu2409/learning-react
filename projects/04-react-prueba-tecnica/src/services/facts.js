const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  return data.fact
}

export const getRandomImageUrl = (words) => `https://cataas.com/cat/says/${words}?size=50&color=red`
