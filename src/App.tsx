import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { D365Layout } from './components/D365Layout';
import './App.css';

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <D365Layout />
    </FluentProvider>
  );
}

export default App;
