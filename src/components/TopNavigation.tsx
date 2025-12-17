import { makeStyles, shorthands, Button, Menu, MenuTrigger, MenuPopover, MenuList, MenuItem, Avatar, tokens } from '@fluentui/react-components';
import { 
  AppsRegular, 
  SearchRegular, 
  LightbulbRegular, 
  AddRegular, 
  FilterRegular, 
  SettingsRegular,
  PeopleTeamRegular,
  CommentRegular
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    height: '48px',
    backgroundColor: 'rgb(250, 250, 250)',
    ...shorthands.padding('0', '8px'),
    ...shorthands.gap('8px'),
    boxShadow: '0 1.6px 3.6px 0 rgba(0,0,0,.132), 0 0.3px 0.9px 0 rgba(0,0,0,.108)',
    zIndex: 1000,
  },
  appLauncher: {
    minWidth: '48px',
    height: '48px',
    color: tokens.colorNeutralForeground2,
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  brandText: {
    fontSize: '14px',
    fontWeight: 600,
    color: tokens.colorNeutralForeground1,
    marginRight: '4px',
  },
  appButton: {
    color: tokens.colorNeutralForeground2,
    fontSize: '14px',
    fontWeight: 400,
    minWidth: 'auto',
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  sandboxBadge: {
    ...shorthands.padding('4px', '8px'),
    backgroundColor: tokens.colorNeutralBackground3,
    color: tokens.colorNeutralForeground1,
    fontSize: '11px',
    fontWeight: 600,
    ...shorthands.borderRadius('2px'),
    letterSpacing: '0.5px',
  },
  spacer: {
    flex: 1,
  },
  globalCommands: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('4px'),
  },
  iconButton: {
    minWidth: '36px',
    height: '36px',
    color: tokens.colorNeutralForeground2,
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  userButton: {
    minWidth: '36px',
    height: '36px',
    marginLeft: '4px',
  },
});

export const TopNavigation: React.FC = () => {
  const styles = useStyles();

  return (
    <header className={styles.header} role="banner">
      <Button 
        appearance="transparent" 
        className={styles.appLauncher}
        icon={<AppsRegular />}
        aria-label="App launcher"
      />
      
      <span className={styles.brandText}>Dynamics 365</span>
      
      <Button 
        appearance="transparent" 
        className={styles.appButton}
      >
        Customer Service Hub
      </Button>

      <div className={styles.sandboxBadge}>
        SANDBOX
      </div>

      <div className={styles.spacer} />

      <div className={styles.globalCommands} role="menubar">
        <Button 
          appearance="transparent" 
          className={styles.iconButton}
          icon={<SearchRegular />}
          aria-label="Search"
        />
        <Button 
          appearance="transparent" 
          className={styles.iconButton}
          icon={<LightbulbRegular />}
          aria-label="Assistant"
        />
        <Button 
          appearance="transparent" 
          className={styles.iconButton}
          icon={<AddRegular />}
          aria-label="Create New Record"
        />
        <Button 
          appearance="transparent" 
          className={styles.iconButton}
          icon={<FilterRegular />}
          aria-label="Advanced find"
        />
        <Button 
          appearance="transparent" 
          className={styles.iconButton}
          icon={<SettingsRegular />}
          aria-label="Settings"
        />
        <Button 
          appearance="transparent" 
          className={styles.iconButton}
          icon={<PeopleTeamRegular />}
          aria-label="Teams chats and channels integration"
        />
        <Button 
          appearance="transparent" 
          className={styles.iconButton}
          icon={<CommentRegular />}
          aria-label="Send feedback"
        />
      </div>

      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <Button 
            appearance="transparent" 
            className={styles.userButton}
          >
            <Avatar 
              name="user01 aurora" 
              initials="UA"
              size={28}
              color="colorful"
            />
          </Button>
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Sign out</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </header>
  );
};
