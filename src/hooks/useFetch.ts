import { useEffect, useState } from 'react';

interface Response{
  loading: boolean,
  data: null | any, 


}

const useFetch = (url: string): Response => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  const fethcer = async (url: string) => {
    // console.log("fetching data from : ", url);
    setLoading(true)
    const res = await fetch(url)
    const data = await res.json()
    setData(data)
    setLoading(false)
  };
  
  useEffect(() => {
    fethcer(url)
  }, [url])

  return{
    data,
    loading,
  }
}   

export default useFetch
