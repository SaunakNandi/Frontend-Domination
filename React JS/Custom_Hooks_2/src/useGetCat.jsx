import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const useGetCat = () => {
    const { data, refetch, isLoading: isCatLoading, error } = useQuery({
        queryKey: ['cat'],
        queryFn: async () => {
          const response = await axios.get('https://catfact.ninja/fact');
          return response.data;
        }
      });
      const refetchData=()=>{
        alert("Data Refetched")
        refetch()
      }
  return (
    {data,refetchData, isCatLoading}
  )
}

export default useGetCat