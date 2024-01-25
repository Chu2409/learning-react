import { useEffect, useState } from 'react'
import { getRandomImageUrl } from '../services/facts'

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    setImageUrl(threeFirstWords)
  }, [fact])

  return { imageUrl: getRandomImageUrl(imageUrl) }
}
