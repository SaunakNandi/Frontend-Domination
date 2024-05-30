
import { useQuery,useMutation, useQueryClient } from '@tanstack/react-query'
import './App.css'

function App() {
  // queryKey -> Everytime we have a query we need to specify a unique query key that will distinguish it from all the other queries we have it in our app the  reason for that is because when we're dealing with cache and we make some changes to our data or manually change the cache, we want to change that data in all of the queries that are querying this specific data so in order to do that we basically pass the same query key to all of them and react query will know that if one of them have any change then we want the change to occur on all lof the other ones as well.
  
  // we're going to give it a query key of todo, the reason why it's an array is because you can actually pass in multiple query keys 

  // const {data,error,isLoading}=useQuery({
  //   queryKey: ['todo'], 
  //   queryFn: ()=> fetch("https://jsonplaceholder.typicode.com/todos").then((res)=> res.json())
  // })

  const {data,error,isLoading}=useQuery({
    queryKey: ['posts'], 
    queryFn: ()=> fetch("https://jsonplaceholder.typicode.com/posts").then((res)=> res.json()),

    // stale query are refetched automatically in the background when ->
    // the new instance of the query is mounted or when new window is refocused or when the network is reconnected and when the query is optionally configured such that it has refetch interval.
    //staleTime: 4000,  
    // refetchOnWindowFocus:false, // staleTime will not trigger anything on the change of window
    refetchInterval: 4000,
  })

  const  queryClient=useQueryClient()

  // useMutation to alter the data
  const {mutate, isPending, isError, isSuccess}=useMutation({mutationFn:(newPost)=> fetch("https://jsonplaceholder.typicode.com/posts",{
    method:'POST',
    body:JSON.stringify(newPost),
    headers: {"Content-type":"application/json; charset=UTF-8"}
  }).then((res)=> res.json()),
  onSuccess:(newPost)=>{  // refetch when the mutation is sucessfull
    // queryClient.invalidateQueries({queryKey:["posts"]})
    queryClient.setQueryData(['posts'],(oldPosts)=> [...oldPosts,newPost])   // adding new data
  }
  })

  if(error ||  isError) return <div>Error fetching data</div>
  if(isLoading) return <div>Data is Loading</div>
  return (
    <>
      <div className="App">
        {isPending && <p>Data is being added...</p>}
        <button onClick={()=> mutate(
          {
            "userId": 5000,
            "id": 4000,
            "title": "Hey My name is Saunak",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          }
        )}>Add post</button>
          {data.map((todo)=>{
            return (
              <div key={todo.id}>
                <h4>Title: {todo.title}</h4>
                <p>{todo.body}</p>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default App
