import * as React from 'react';
import { makeStyles, shorthands, Button, Menu, MenuItem, MenuTrigger, MenuPopover, MenuList } from '@fluentui/react-components';
import { 
  ArrowLeftRegular,
  SaveRegular,
  DismissCircleRegular,
  AddRegular,
  ChevronDownRegular,
  MoreVerticalRegular,
  ShareRegular,
  OpenRegular,
  PersonRegular,
  DeleteRegular,
  ArrowClockwiseRegular,
  LockClosedRegular,
  ChevronRightRegular,
  StarRegular,
  FlowRegular,
  DocumentRegular,
  DataBarVerticalRegular
} from '@fluentui/react-icons';

interface CommandBarProps {
  minimizedHeader?: React.ReactNode;
}

const useStyles = makeStyles({
  commandBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '44px',
    ...shorthands.padding('0', '0', '0', '12px'),
    overflow: 'hidden',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('0'),
  },
  centerSection: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('0'),
    flex: 1,
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('0'),
  },
  button: {
    minWidth: 'auto',
    height: '32px',
    ...shorthands.padding('1px', '12px'),
    fontSize: '14px',
    fontWeight: 400,
    color: 'rgb(0, 0, 0)',
    backgroundColor: 'transparent',
    ...shorthands.border('none'),
    ...shorthands.borderRadius('4px'),
    flexShrink: 0,
    ':hover': {
      backgroundColor: 'rgb(243, 242, 241)',
    },
  },
  hiddenButton: {
    display: 'none',
  },
  iconButton: {
    minWidth: '32px',
    width: '32px',
    height: '32px',
    ...shorthands.padding('0'),
    backgroundColor: 'transparent',
    ...shorthands.border('none'),
    ...shorthands.borderRadius('4px'),
    flexShrink: 0,
    ':hover': {
      backgroundColor: 'rgb(243, 242, 241)',
    },
  },
  backButton: {
    minWidth: '32px',
    width: '32px',
    height: '32px',
    ...shorthands.padding('0'),
    backgroundColor: 'transparent',
    ...shorthands.border('none'),
    ...shorthands.borderRadius('4px'),
    flexShrink: 0,
    ':hover': {
      backgroundColor: 'rgb(243, 242, 241)',
    },
  },
  divider: {
    width: '1px',
    height: '32px',
    backgroundColor: 'rgb(237, 235, 233)',
    ...shorthands.margin('0', '8px'),
    flexShrink: 0,
  },
});

export const CommandBar: React.FC<CommandBarProps> = ({ minimizedHeader }) => {
  const styles = useStyles();
  const commandBarRef = React.useRef<HTMLDivElement>(null);
  const [visibleButtons, setVisibleButtons] = React.useState(10); // Start with more buttons visible

  const allButtons = [
    { id: 'save', label: 'Save', icon: <SaveRegular /> },
    { id: 'saveClose', label: 'Save & Close', icon: <SaveRegular /> },
    { id: 'new', label: 'New', icon: <AddRegular /> },
    { id: 'orgChart', label: 'Open org chart', icon: null },
    { id: 'deactivate', label: 'Deactivate', icon: <DismissCircleRegular /> },
    { id: 'connect', label: 'Connect', icon: null, hasDropdown: true },
    { id: 'marketing', label: 'Add to Marketing List', icon: <AddRegular /> },
    { id: 'assign', label: 'Assign', icon: <PersonRegular /> },
    { id: 'delete', label: 'Delete', icon: <DeleteRegular /> },
    { id: 'refresh', label: 'Refresh', icon: <ArrowClockwiseRegular /> },
  ];

  React.useEffect(() => {
    const checkOverflow = () => {
      if (!commandBarRef.current) return;
      
      const container = commandBarRef.current;
      const containerWidth = container.offsetWidth;
      const rightSection = container.querySelector('[data-section="right"]') as HTMLElement;
      const leftSection = container.querySelector('[data-section="left"]') as HTMLElement;
      
      if (!rightSection || !leftSection) return;
      
      // Fixed widths: left section + right section + overflow button + some padding for safety
      const fixedWidth = leftSection.offsetWidth + rightSection.offsetWidth + 40 + 12;
      const availableWidth = containerWidth - fixedWidth;
      
      // Estimate button widths (approximate) - these should be fairly accurate
      const buttonWidths = [80, 135, 70, 130, 110, 95, 180, 80, 80, 85]; // Added widths for Assign, Delete, Refresh
      
      let totalWidth = 0;
      let count = 0;
      
      for (let i = 0; i < buttonWidths.length; i++) {
        if (totalWidth + buttonWidths[i] + 4 <= availableWidth) { // +4 for small gap between buttons
          totalWidth += buttonWidths[i] + 4;
          count++;
        } else {
          break;
        }
      }
      
      setVisibleButtons(Math.max(1, count)); // Always show at least Save button
    };

    checkOverflow();
    
    const resizeObserver = new ResizeObserver(checkOverflow);
    if (commandBarRef.current) {
      resizeObserver.observe(commandBarRef.current);
    }
    
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      transition: 'all 0.2s ease-in-out',
    }}>
      <div className={styles.commandBar} ref={commandBarRef}>
      <div className={styles.leftSection} data-section="left">
        <Button
          appearance="subtle"
          icon={<ArrowLeftRegular />}
          className={styles.backButton}
          aria-label="Go back"
          title="Go back"
          disabled
        />
        <div className={styles.divider} />
        <Button
          appearance="subtle"
          icon={<OpenRegular />}
          className={styles.iconButton}
          aria-label="Open in new window"
          title="Open in new window"
        />
        <div className={styles.divider} />
      </div>
      
      <div className={styles.centerSection}>
        {allButtons.map((btn, index) => (
          <Button
            key={btn.id}
            appearance="subtle"
            icon={btn.icon}
            className={index < visibleButtons ? styles.button : styles.hiddenButton}
          >
            {btn.label}
            {btn.hasDropdown && <ChevronDownRegular fontSize={16} />}
          </Button>
        ))}
        <Menu>
          <MenuTrigger>
            <Button
              appearance="subtle"
              icon={<MoreVerticalRegular />}
              className={styles.iconButton}
              aria-label="More commands"
              title="More commands"
            />
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              {allButtons.slice(visibleButtons).map((btn) => (
                <MenuItem key={btn.id} icon={btn.icon}>
                  {btn.label}
                </MenuItem>
              ))}
              <MenuItem icon={<LockClosedRegular />}>
                Check Access
              </MenuItem>
              <MenuItem icon={<ChevronRightRegular />} secondaryContent={<ChevronRightRegular />}>
                Sequences
              </MenuItem>
              <MenuItem icon={<ChevronRightRegular />} secondaryContent={<ChevronRightRegular />}>
                Process
              </MenuItem>
              <MenuItem icon={<StarRegular />}>
                Follow
              </MenuItem>
              <MenuItem icon={<FlowRegular />} secondaryContent={<ChevronRightRegular />}>
                Flow
              </MenuItem>
              <MenuItem icon={<DocumentRegular />} secondaryContent={<ChevronRightRegular />}>
                Word Templates
              </MenuItem>
              <MenuItem icon={<DataBarVerticalRegular />} secondaryContent={<ChevronRightRegular />}>
                Run Report
              </MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>

      <div className={styles.rightSection} data-section="right">
        <Button
          appearance="subtle"
          icon={<ShareRegular />}
          className={styles.button}
        >
          Share
          <ChevronDownRegular fontSize={16} />
        </Button>
      </div>
    </div>
      {minimizedHeader && (
        <div style={{
          borderTop: '1px solid rgb(225, 223, 221)',
          transition: 'all 0.2s ease-in-out',
        }}>
          {minimizedHeader}
        </div>
      )}
    </div>
  );
};
