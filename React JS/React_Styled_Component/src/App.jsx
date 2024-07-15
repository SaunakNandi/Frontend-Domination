import { useState } from 'react'
import { Container } from './component/styles/Container.styled'
import { ThemeProvider } from 'styled-components'
import Header from './component/Header'
import { GlobalStyles } from './component/styles/Global'
import content from './content'
import Card from './component/Card'
import Footer from './component/Footer'

const theme={
  colors:{
    header:'pink',
    body: 'green',
    footer: '#003333',
  },
  mobile: '768px'
}
function App() {

  return (
   
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles/>
        <Header/>
        <Container>
          {
            content.map((item,i)=>(
                <Card key={item} item={item}/>
              )
            )
          }
        </Container>
        <Footer/>
      </>
    </ThemeProvider>
  )
}

export default App
