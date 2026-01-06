import { useState } from 'react';
import { makeStyles, shorthands, Button, Menu, MenuTrigger, MenuPopover, MenuList, MenuItem, MenuItemCheckbox } from '@fluentui/react-components';
import { BugRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  fab: {
    position: 'fixed',
    bottom: '24px',
    left: '12px',
    width: '48px',
    height: '48px',
    ...shorthands.borderRadius('50%'),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.14), 0 0 2px rgba(0, 0, 0, 0.12)',
    zIndex: 1000,
    ...shorthands.padding('0'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(188, 47, 50)',
    color: 'white',
    ...shorthands.border('none'),
    '&:hover': {
      backgroundColor: 'rgb(160, 40, 43)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.18), 0 0 2px rgba(0, 0, 0, 0.12)',
    },
    '&:active': {
      backgroundColor: 'rgb(140, 35, 38)',
    },
  },
  icon: {
    fontSize: '20px',
    color: 'white',
  },
});

interface FeatureFlagsState {
  [key: string]: boolean;
}

export const FeatureFlagsFAB: React.FC = () => {
  const styles = useStyles();
  const [featureFlags, setFeatureFlags] = useState<FeatureFlagsState>({
    // Feature flags will be added here
  });

  const toggleFeatureFlag = (flagName: string) => {
    setFeatureFlags(prev => ({
      ...prev,
      [flagName]: !prev[flagName]
    }));
  };

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <Button 
          className={styles.fab}
          icon={<BugRegular className={styles.icon} />}
          aria-label="Feature Flags"
        />
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          {Object.keys(featureFlags).length === 0 ? (
            <MenuItem disabled>No feature flags available</MenuItem>
          ) : (
            Object.entries(featureFlags).map(([key, value]) => (
              <MenuItemCheckbox
                key={key}
                name={key}
                value={key}
                checked={value}
                onClick={() => toggleFeatureFlag(key)}
              >
                {key}
              </MenuItemCheckbox>
            ))
          )}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
