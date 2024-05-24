// App.js
// Lazy loading in ReactJS is a technique used to optimize the performance of a React application by loading components only when they are needed, rather than all at once during the initial load. This can significantly reduce the initial load time and improve the overall user experience, especially in large applications.
import React, { Suspense } from 'react';
import Home from './components/Home';
const About = React.lazy(() => import('./components/About'));

const App = () => {
  return (
    <>
      <Home/>
      <Suspense fallback={<div>Loading...</div>}>
              <About />
      </Suspense>
    </>
  );
};

export default App;
