import { makeStyles, shorthands, Button, tokens } from '@fluentui/react-components';
import { 
  PeopleTeamRegular,
  DismissRegular,
  StarRegular
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  panel: {
    width: '360px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderLeft('1px', 'solid', tokens.colorNeutralStroke2),
    boxShadow: '-2px 0 8px rgba(0,0,0,.05)',
  },
  tabs: {
    display: 'flex',
    ...shorthands.borderBottom('1px', 'solid', tokens.colorNeutralStroke2),
  },
  tab: {
    flex: 1,
    minWidth: 'auto',
    height: '48px',
    ...shorthands.borderRadius('0'),
    ...shorthands.borderBottom('2px', 'solid', 'transparent'),
    fontSize: '14px',
    color: tokens.colorNeutralForeground2,
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  tabActive: {
    color: tokens.colorBrandForeground1,
    ...shorthands.borderBottom('2px', 'solid', tokens.colorBrandForeground1),
    backgroundColor: tokens.colorNeutralBackground1,
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.padding('24px'),
    overflowY: 'auto',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: '18px',
    fontWeight: 600,
    color: tokens.colorNeutralForeground1,
    marginBottom: '8px',
  },
  subtitle: {
    fontSize: '13px',
    color: tokens.colorNeutralForeground2,
    lineHeight: '20px',
    marginBottom: '8px',
  },
  link: {
    color: tokens.colorBrandForeground1,
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: '13px',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  closeButton: {
    minWidth: '24px',
    height: '24px',
  },
  videoButton: {
    width: '100%',
    marginBottom: '24px',
  },
  illustration: {
    textAlign: 'center',
    ...shorthands.padding('40px', '20px'),
  },
  illustrationIcon: {
    fontSize: '64px',
    color: tokens.colorBrandForeground1,
    marginBottom: '20px',
  },
  illustrationTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: tokens.colorNeutralForeground1,
    marginBottom: '12px',
  },
  illustrationText: {
    fontSize: '13px',
    color: tokens.colorNeutralForeground2,
    lineHeight: '20px',
    marginBottom: '8px',
  },
  disclaimer: {
    display: 'flex',
    ...shorthands.gap('8px'),
    ...shorthands.padding('12px'),
    backgroundColor: tokens.colorNeutralBackground2,
    ...shorthands.borderRadius('4px'),
    marginTop: 'auto',
  },
  disclaimerIcon: {
    flexShrink: 0,
    marginTop: '2px',
  },
  disclaimerText: {
    fontSize: '12px',
    color: tokens.colorNeutralForeground3,
    lineHeight: '16px',
  },
  disclaimerLink: {
    color: tokens.colorBrandForeground1,
    textDecoration: 'none',
    cursor: 'pointer',
    ':hover': {
      textDecoration: 'underline',
    },
  },
});

export const CopilotPanel: React.FC = () => {
  const styles = useStyles();

  return (
    <aside className={styles.panel} role="complementary" aria-label="Copilot">
      <div className={styles.tabs}>
        <Button 
          appearance="transparent"
          className={styles.tab}
          icon={<PeopleTeamRegular />}
          aria-label="Chat in Teams"
        />
        <Button 
          appearance="transparent"
          className={`${styles.tab} ${styles.tabActive}`}
          aria-label="Copilot"
        >
          Copilot
        </Button>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h2 className={styles.title}>A Copilot for you!</h2>
            <p className={styles.subtitle}>
              Draft and edit your email with Copilot. Watch the video to learn more.
            </p>
            <a href="#" className={styles.link}>Watch video</a>
          </div>
          <Button 
            appearance="transparent"
            className={styles.closeButton}
            icon={<DismissRegular />}
            aria-label="Close"
          />
        </div>

        <Button appearance="primary" className={styles.videoButton}>
          Watch video
        </Button>

        <div className={styles.illustration}>
          <div className={styles.illustrationIcon}>
            <StarRegular style={{ fontSize: '80px' }} />
          </div>
          <h3 className={styles.illustrationTitle}>
            To get started, open an email
          </h3>
          <p className={styles.illustrationText}>
            Get suggested email responses.
          </p>
          <p className={styles.illustrationText}>
            You can select the type of response from a list or enter your own description of what you want.
          </p>
        </div>

        <div className={styles.disclaimer}>
          <div className={styles.disclaimerIcon}>
            ℹ️
          </div>
          <div>
            <p className={styles.disclaimerText}>
              AI-generated content can have mistakes. Make sure it's accurate and appropriate before using it.{' '}
              <a href="#" className={styles.disclaimerLink}>Read terms</a>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
