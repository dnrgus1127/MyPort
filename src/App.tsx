import Header from 'components/Header/Header';
import './App.css';
import { GlobalStyles } from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { dailyTheme, darkTheme, ligthTheme } from 'styles/theme';
import ProjectsContainer from 'components/Projects/ProjectsContainer';
import { QueryClient,QueryClientProvider  } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient} >
        <ThemeProvider theme={dailyTheme}>
          <GlobalStyles/>
          <Header />
          <ProjectsContainer/>
          
        </ThemeProvider>
    </QueryClientProvider>
    </div>
  );
}

export default App;
