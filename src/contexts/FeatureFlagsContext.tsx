import { createContext, useContext, useState, ReactNode } from 'react';

interface FeatureFlagsState {
  minimizeHeader: boolean;
}

interface FeatureFlagsContextType {
  featureFlags: FeatureFlagsState;
  toggleFeatureFlag: (flagName: keyof FeatureFlagsState) => void;
}

const FeatureFlagsContext = createContext<FeatureFlagsContextType | undefined>(undefined);

export const FeatureFlagsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [featureFlags, setFeatureFlags] = useState<FeatureFlagsState>({
    minimizeHeader: true, // Default: enabled
  });

  const toggleFeatureFlag = (flagName: keyof FeatureFlagsState) => {
    setFeatureFlags(prev => ({
      ...prev,
      [flagName]: !prev[flagName]
    }));
  };

  return (
    <FeatureFlagsContext.Provider value={{ featureFlags, toggleFeatureFlag }}>
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
