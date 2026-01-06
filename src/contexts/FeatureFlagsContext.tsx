import { createContext, useContext, useState, ReactNode } from 'react';

interface FeatureFlagsState {
  minimizeHeader: boolean;
  autoscrollPosition: 120 | 251;
}

interface FeatureFlagsContextType {
  featureFlags: FeatureFlagsState;
  toggleFeatureFlag: (flagName: keyof FeatureFlagsState) => void;
  setAutoscrollPosition: (position: 120 | 251) => void;
}

const FeatureFlagsContext = createContext<FeatureFlagsContextType | undefined>(undefined);

export const FeatureFlagsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [featureFlags, setFeatureFlags] = useState<FeatureFlagsState>({
    minimizeHeader: true, // Default: enabled
    autoscrollPosition: 251, // Default: 251
  });

  const toggleFeatureFlag = (flagName: keyof FeatureFlagsState) => {
    if (flagName === 'minimizeHeader') {
      setFeatureFlags(prev => ({
        ...prev,
        [flagName]: !prev[flagName]
      }));
    }
  };

  const setAutoscrollPosition = (position: 120 | 251) => {
    setFeatureFlags(prev => ({
      ...prev,
      autoscrollPosition: position
    }));
  };

  return (
    <FeatureFlagsContext.Provider value={{ featureFlags, toggleFeatureFlag, setAutoscrollPosition }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

export const useFeatureFlags = () => {
  const context = useContext(FeatureFlagsContext);
  if (context === undefined) {
    throw new Error('useFeatureFlags must be used within a FeatureFlagsProvider');
  }
  return context;
};
