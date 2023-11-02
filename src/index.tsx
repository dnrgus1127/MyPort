import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ProjectsContainer, {loader as projectLoader} from 'components/Projects/ProjectsContainer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { dailyTheme, darkTheme, ligthTheme } from 'styles/theme';
import { GlobalStyles } from 'styles/GlobalStyles';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
        path: "/gitRepo",
        element: <ProjectsContainer />,
        loader : projectLoader(queryClient)
      },
      {
        path: "/test",
        element: <ProjectsContainer />,
        loader: projectLoader(queryClient)
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={dailyTheme}>
        <GlobalStyles/>
        <RouterProvider router={router}/>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
