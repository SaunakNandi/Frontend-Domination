import {Cat} from "./Cat"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const App = () => {
  const client=new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus:true,
      },
    },
  })
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Cat />
      </QueryClientProvider>
    </div>
  )
}

export default App