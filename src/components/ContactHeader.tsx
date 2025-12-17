import { makeStyles, shorthands, Avatar } from '@fluentui/react-components';
import { 
  ChevronDownRegular
} from '@fluentui/react-icons';
import { useTypographyStyles } from '../styles/typography';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    height: '51px',
    minHeight: '51px',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('12px'),
    flex: 1,
  },
  avatar: {
    width: '48px',
    height: '48px',
    backgroundColor: 'rgb(232, 211, 162)',
    color: 'rgb(50, 49, 48)',
    fontSize: '18px',
    fontWeight: 600,
    flexShrink: 0,
  },
  titleSection: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('0px'),
    flex: 1,
  },
  titleRow: {
    display: 'flex',
    alignItems: 'baseline',
    ...shorthands.gap('4px'),
  },
  // titleText removed - using typography.pageTitle
  // savedBadge removed - using typography.savedBadge
  // entityType removed - using typography.entityType
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('0'),
    marginLeft: '16px',
  },
  infoGroup: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('0'),
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('0'),
    ...shorthands.padding('0', '24px'),
    ...shorthands.borderRight('1px', 'solid', 'rgb(225, 223, 221)'),
  },
  // infoLabel removed - using typography.metadataLabel
  // infoValue removed - using typography.metadataValue
  ownerSection: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
    cursor: 'pointer',
    ...shorthands.padding('4px', '24px', '4px', '24px'),
    marginLeft: '0',
    ':hover': {
      backgroundColor: 'rgb(243, 242, 241)',
    },
  },
  ownerAvatar: {
    width: '32px',
    height: '32px',
    backgroundColor: 'rgb(0, 120, 212)',
    color: 'rgb(255, 255, 255)',
    fontSize: '12px',
    fontWeight: 600,
    flexShrink: 0,
  },
  ownerInfo: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('0'),
  },
  // ownerName removed - using typography.ownerLink
  // ownerLabel removed - using typography.metadataLabel
});

export const ContactHeader: React.FC = () => {
  const styles = useStyles();
  const typography = useTypographyStyles();

  return (
    <div className={styles.header}>
      <div className={styles.leftSection}>
        <Avatar 
          className={styles.avatar}
          name="Patrick Sands" 
          initials="PS"
          size={48}
        />

        <div className={styles.titleSection}>
          <div className={styles.titleRow}>
            <h1 className={typography.pageTitle}>
              Patrick Sands (sample)
            </h1>
          </div>
          <div className={styles.titleRow}>
            <span className={typography.metadataLabel}>Contact</span>
            <span className={typography.metadataLabel}>•</span>
            <span className={typography.metadataLabel}>Saved</span>
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.infoGroup}>
          <div className={styles.infoItem}>
            <span className={typography.metadataValue}>Owner</span>
            <span className={typography.metadataLabel}>Job Title</span>
          </div>
          <div className={styles.infoItem}>
            <span className={typography.metadataValue}>555-0110</span>
            <span className={typography.metadataLabel}>Business Phone</span>
          </div>
          <div className={styles.infoItem}>
            <span className={typography.metadataValue}>someone_k@example.com</span>
            <span className={typography.metadataLabel}>Email</span>
          </div>
        </div>

        <div className={styles.ownerSection}>
          <Avatar 
            className={styles.ownerAvatar}
            name="user01 aurora" 
            initials="UA"
            size={32}
          />
          <div className={styles.ownerInfo}>
            <div className={typography.ownerLink}>user01 aurora</div>
            <div className={typography.metadataLabel}>Owner</div>
          </div>
          <ChevronDownRegular fontSize={16} style={{ color: 'rgb(96, 94, 92)' }} />
        </div>
      </div>
    </div>
  );
};
