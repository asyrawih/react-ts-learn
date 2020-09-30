import { useEffect, useState } from "react"
import { Language } from "../interface/Language"

const useBahasa = () => {
  const [bahasa, setBahasa] = useState<Language[]>([])
  const endpoint = "https://api.npoint.io/33d57619ef599fc57a53"

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => setBahasa(data))
      .catch(error => console.log(error)
      )
  }, [])
  return bahasa
}

export default useBahasa