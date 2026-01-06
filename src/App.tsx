import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { D365Layout } from './components/D365Layout';
import { FeatureFlagsProvider } from './contexts/FeatureFlagsContext';
import './App.css';

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <FeatureFlagsProvider>
        <D365Layout />
      </FeatureFlagsProvider>
    </FluentProvider>
  );
}

export default App;
