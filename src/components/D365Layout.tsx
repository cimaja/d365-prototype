import { makeStyles, shorthands, tokens } from '@fluentui/react-components';
import { TopNavigation } from './TopNavigation';
import { SideNavigation } from './SideNavigation';
import { MainContent } from './MainContent';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    backgroundColor: tokens.colorNeutralBackground1,
  },
  bodyContainer: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
  },
  contentWrapper: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
  },
});

export const D365Layout: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <TopNavigation />
      <div className={styles.bodyContainer}>
        <SideNavigation />
        <div className={styles.contentWrapper}>
          <MainContent />
        </div>
      </div>
    </div>
  );
};
