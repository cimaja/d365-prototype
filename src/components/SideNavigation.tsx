import { useState } from 'react';
import { makeStyles, shorthands, Button, tokens } from '@fluentui/react-components';
import { 
  NavigationRegular,
  HomeRegular,
  ClockRegular,
  PinRegular,
  GridRegular,
  CalendarRegular,
  PeopleRegular,
  PersonRegular,
  PeopleTeamRegular,
  NotepadRegular,
  ChatRegular,
  BookRegular,
  SearchRegular,
  AlertRegular,
  BoxRegular,
  MailRegular,
  SignatureRegular,
  ChevronDownRegular
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    width: '48px',
    backgroundColor: 'rgb(250, 250, 250)',
    overflowY: 'auto',
    overflowX: 'hidden',
    transition: 'width 0.3s ease',
  },
  sidebarExpanded: {
    width: '220px',
  },
  labelText: {
    marginLeft: '12px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  siteMapButton: {
    minWidth: '48px',
    height: '48px',
    justifyContent: 'flex-start',
    ...shorthands.padding('0', '12px'),
    ...shorthands.borderRadius('0'),
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  navItem: {
    minWidth: '48px',
    height: '40px',
    justifyContent: 'flex-start',
    ...shorthands.padding('0', '12px'),
    ...shorthands.borderRadius('0'),
    fontSize: '14px',
    fontWeight: 400,
    color: tokens.colorNeutralForeground2,
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  navItemSelected: {
    backgroundColor: tokens.colorNeutralBackground1Selected,
    color: tokens.colorBrandForeground1,
    ...shorthands.borderLeft('3px', 'solid', tokens.colorBrandForeground1),
    fontWeight: 600,
  },
  sectionHeader: {
    minHeight: '32px',
    ...shorthands.padding('8px', '12px'),
    fontSize: '11px',
    fontWeight: 600,
    color: tokens.colorNeutralForeground3,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    display: 'flex',
    alignItems: 'center',
  },
  areaButton: {
    minWidth: '48px',
    height: '48px',
    justifyContent: 'center',
    ...shorthands.padding('0', '12px'),
    ...shorthands.borderRadius('0'),
    marginTop: 'auto',
    ...shorthands.borderTop('1px', 'solid', tokens.colorNeutralStroke2),
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  areaText: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
    fontSize: '14px',
    fontWeight: 600,
  },
  areaInitial: {
    width: '24px',
    height: '24px',
    ...shorthands.borderRadius('50%'),
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundInverted,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 600,
  },
});

export const SideNavigation: React.FC = () => {
  const styles = useStyles();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className={`${styles.sidebar} ${isExpanded ? styles.sidebarExpanded : ''}`} role="navigation" aria-label="Navigate Dynamics 365">
      <Button 
        appearance="transparent" 
        className={styles.siteMapButton}
        icon={<NavigationRegular />}
        aria-label="Site Map"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      />

      <Button 
        appearance="transparent" 
        className={styles.navItem}
        icon={<HomeRegular />}
      >
        {isExpanded && <span className={styles.labelText}>Home</span>}
      </Button>

      <Button 
        appearance="transparent" 
        className={styles.navItem}
        icon={<ClockRegular />}
      >
        {isExpanded && (
          <span className={styles.labelText} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
            Recent
            <ChevronDownRegular style={{ fontSize: '12px' }} />
          </span>
        )}
      </Button>

      <Button 
        appearance="transparent" 
        className={styles.navItem}
        icon={<PinRegular />}
      >
        {isExpanded && (
          <span className={styles.labelText} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
            Pinned
            <ChevronDownRegular style={{ fontSize: '12px' }} />
          </span>
        )}
      </Button>

      {isExpanded && <div className={styles.sectionHeader}>My Work</div>}
      
      <Button 
        appearance="transparent" 
        className={styles.navItem}
        icon={<GridRegular />}
      >
        {isExpanded && <span className={styles.labelText}>Dashboards</span>}
      </Button>

      <Button 
        appearance="transparent" 
        className={styles.navItem}
        icon={<CalendarRegular />}
      >
        {isExpanded && <span className={styles.labelText}>Activities</span>}
      </Button>

      {isExpanded && <div className={styles.sectionHeader}>Customers</div>}

      <Button 
        appearance="transparent" 
        className={styles.navItem}
        icon={<PeopleRegular />}
      >
        {isExpanded && <span className={styles.labelText}>Accounts</span>}
      </Button>

      <Button 
        appearance="transparent" 
        className={`${styles.navItem} ${styles.navItemSelected}`}
        icon={<PersonRegular />}
      >
        {isExpanded && <span className={styles.labelText}>Contacts</span>}
      </Button>

      <Button 
        appearance="transparent" 
        className={styles.navItem}
        icon={<PeopleTeamRegular />}
      >
        {isExpanded && <span className={styles.labelText}>Social Profiles</span>}
      </Button>

      {isExpanded && <div className={styles.sectionHeader}>Service</div>}

      <Button 
        appearance="transparent" 
        className={styles.navItem}
        icon={<NotepadRegular />}
      >
        {isExpanded && <span className={styles.labelText}>Cases</span>}
      </Button>

      <Button 
        appearance="transparent" 
        className={styles.navItem}
        icon={<ChatRegular />}
      >
        {isExpanded && <span className={styles.labelText}>Queues</span>}
      </Button>

      {isExpanded && <div className={styles.sectionHeader}>Knowledge</div>}

      <Button 
        appearance="transparent" 
        className={styles.navItem}
        icon={<BookRegular />}
      >
        {isExpanded && <span className={styles.labelText}>Knowledge Articles</span>}
      </Button>

      <Button 
        appearance="transparent" 
        className={styles.navItem}
        icon={<SearchRegular />}
      >
        {isExpanded && <span className={styles.labelText}>Knowledge Search</span>}
      </Button>

      {isExpanded && <div className={styles.sectionHeader}>Customer Assets</div>}

      <Button 
        appearance="transparent" 
        className={styles.navItem}
        icon={<AlertRegular />}
      >
        {isExpanded && <span className={styles.labelText}>IoT Alerts</span>}
      </Button>

      <Button 
        appearance="transparent" 
        className={styles.navItem}
        icon={<BoxRegular />}
      >
        {isExpanded && <span className={styles.labelText}>Customer Assets</span>}
      </Button>

      {isExpanded && <div className={styles.sectionHeader}>Templates</div>}

      <Button 
        appearance="transparent" 
        className={styles.navItem}
        icon={<MailRegular />}
      >
        {isExpanded && <span className={styles.labelText}>Email templates</span>}
      </Button>

      <Button 
        appearance="transparent" 
        className={styles.navItem}
        icon={<SignatureRegular />}
      >
        {isExpanded && <span className={styles.labelText}>Email signatures</span>}
      </Button>

      <Button 
        appearance="transparent" 
        className={styles.areaButton}
      >
        <div className={styles.areaText}>
          <div className={styles.areaInitial}>S</div>
          {isExpanded && (
            <>
              <span>Service</span>
              <ChevronDownRegular style={{ fontSize: '12px', marginLeft: 'auto' }} />
            </>
          )}
        </div>
      </Button>
    </nav>
  );
};
