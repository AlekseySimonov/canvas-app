import "@/shared/styles/_stylesConfig.scss";
import "@/shared/styles/_vars.css";
import { RouterProvider } from 'react-router';
import { appRouter } from '../providers/router';

function App() {

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
