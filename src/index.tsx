import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import StacksPage from 'components/Stacks/StacksPage';
import ProjectPage, {loader as projectLoader} from 'pages/ProjectPage';
import ProjectSliderConatiner from 'components/Projects/ProjectSliderConatiner';
import { Provider } from "react-redux";
import { store } from 'redux/store';
import BlogPage from 'pages/BlogPage';
import BlogMainLayout from 'components/Blog/BlogMain/BlogMainLayout';
import BlogMainContents from 'components/Blog/BlogMain/BlogMainContents';
import BlogCategoryContents from 'components/Blog/BlogMain/BlogCategoryContents';
import PostPage, {loader as postLoader} from 'pages/PostPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
       {
        path: "project",
        element: <ProjectPage />,
        loader: projectLoader(queryClient),
        children: [
          {
            path: "main",
            element: <ProjectSliderConatiner />,
          }
        ]
      },
      {
        path: "/test",
        element: <StacksPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
        children: [
          {
            element: <BlogMainLayout />,
            children: [
              {
                path: "main/",
                element : <BlogMainContents/>
              },
              {
                path: "main/:category",
                element: <BlogCategoryContents />,
                errorElement : <div></div>,
              }
            ]
          },
          {
            path: "post/*",
            element: <PostPage />,
            loader: postLoader(queryClient),
          }
        ]
      }
    ]
  }
  
])




root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <Provider store={store} >
         
              <RouterProvider router={router}/>
        </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
