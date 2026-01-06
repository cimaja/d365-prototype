import { useState } from 'react';
import { makeStyles, shorthands, Button, Dialog, DialogTrigger, DialogSurface, DialogBody, DialogTitle, DialogContent, Switch, ToggleButton } from '@fluentui/react-components';
import { BugRegular, DismissRegular } from '@fluentui/react-icons';
import { useFeatureFlags } from '../contexts/FeatureFlagsContext';

const useStyles = makeStyles({
  fab: {
    position: 'fixed',
    bottom: '24px',
    left: '12px',
    width: '48px',
    height: '48px',
    minWidth: '48px',
    minHeight: '48px',
    maxWidth: '48px',
    maxHeight: '48px',
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
    overflow: 'hidden',
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
  featureRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    ...shorthands.padding('16px', '0'),
    ...shorthands.borderBottom('1px', 'solid', 'rgb(225, 223, 221)'),
    ...shorthands.gap('24px'),
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  featureInfo: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('4px'),
    flex: 1,
  },
  featureLabel: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'rgb(36, 36, 36)',
    lineHeight: '20px',
  },
  featureDescription: {
    fontSize: '12px',
    fontWeight: 400,
    color: 'rgb(96, 94, 92)',
    lineHeight: '16px',
  },
  toggleContainer: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
  },
  positionToggle: {
    display: 'flex',
    ...shorthands.gap('4px'),
  },
});

const featureFlagLabels: Record<string, string> = {
  minimizeHeader: 'Minimize Header',
  autoscrollPosition: 'Autoscroll Position',
};

const featureFlagDescriptions: Record<string, string> = {
  minimizeHeader: 'When enabled, the header will minimize into a compact sticky bar when you scroll down the page.',
  autoscrollPosition: 'Sets the scroll position when switching tabs. Choose between 120px (hides Activity Summary) or 251px (triggers minimized header).',
};

interface FeatureFlagsState {
  [key: string]: boolean;
}

export const FeatureFlagsFAB: React.FC = () => {
  const styles = useStyles();
  const { featureFlags, toggleFeatureFlag, setAutoscrollPosition } = useFeatureFlags();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog open={open} onOpenChange={(event, data) => setOpen(data.open)}>
        <DialogTrigger disableButtonEnhancement>
          <Button 
            className={styles.fab}
            icon={<BugRegular className={styles.icon} />}
            aria-label="Feature Flags"
          />
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>Feature Flags</DialogTitle>
            <DialogContent>
              {/* Minimize Header */}
              <div className={styles.featureRow}>
                <div className={styles.featureInfo}>
                  <div className={styles.featureLabel}>
                    {featureFlagLabels.minimizeHeader}
                  </div>
                  <div className={styles.featureDescription}>
                    {featureFlagDescriptions.minimizeHeader}
                  </div>
                </div>
                <div className={styles.toggleContainer}>
                  <Switch 
                    checked={featureFlags.minimizeHeader}
                    onChange={() => toggleFeatureFlag('minimizeHeader')}
                  />
                </div>
              </div>

              {/* Autoscroll Position */}
              <div className={styles.featureRow}>
                <div className={styles.featureInfo}>
                  <div className={styles.featureLabel}>
                    {featureFlagLabels.autoscrollPosition}
                  </div>
                  <div className={styles.featureDescription}>
                    {featureFlagDescriptions.autoscrollPosition}
                  </div>
                </div>
                <div className={styles.toggleContainer}>
                  <div className={styles.positionToggle}>
                    <ToggleButton
                      checked={featureFlags.autoscrollPosition === 120}
                      onClick={() => setAutoscrollPosition(120)}
                      size="small"
                    >
                      120
                    </ToggleButton>
                    <ToggleButton
                      checked={featureFlags.autoscrollPosition === 251}
                      onClick={() => setAutoscrollPosition(251)}
                      size="small"
                    >
                      251
                    </ToggleButton>
                  </div>
                </div>
              </div>
            </DialogContent>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </>
  );
};
