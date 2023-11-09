import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from 'styles/theme';
import { GlobalStyles } from 'styles/GlobalStyles';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import StacksPage from 'components/Stacks/StacksPage';
import ProjectPage, {loader as projectLoader} from 'pages/ProjectPage';
import ProjectSliderConatiner from 'components/Projects/ProjectSliderConatiner';
import Readme from 'components/Projects/Readme';


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
        path: "project",
        element: <ProjectPage />,
        loader: projectLoader(queryClient),
        children: [
          {
            path: "main",
            element: <ProjectSliderConatiner/>
          },
          {
            path: "readme",
            element: <Readme/>
          }
        ]
      },
      {
        path: "/test",
        element: <StacksPage />,
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
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
