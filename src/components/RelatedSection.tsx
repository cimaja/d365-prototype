import { makeStyles, shorthands, Button, tokens, Checkbox } from '@fluentui/react-components';
import { 
  MoreVerticalRegular,
  ChevronLeftRegular,
  ChevronRightRegular,
  ArrowSortRegular,
  ChevronDownRegular
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  section: {
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderRadius('8px'),
    boxShadow: '0 1.6px 3.6px 0 rgba(0,0,0,.132), 0 0.3px 0.9px 0 rgba(0,0,0,.108)',
    ...shorthands.padding('20px'),
  },
  sectionHeader: {
    fontSize: '11px',
    fontWeight: 600,
    color: tokens.colorNeutralForeground3,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '16px',
  },
  tabs: {
    display: 'flex',
    ...shorthands.gap('16px'),
    ...shorthands.borderBottom('1px', 'solid', tokens.colorNeutralStroke2),
    marginBottom: '16px',
  },
  tab: {
    minWidth: 'auto',
    height: '32px',
    ...shorthands.padding('0', '0'),
    ...shorthands.borderRadius('0'),
    fontSize: '13px',
    fontWeight: 400,
    color: tokens.colorNeutralForeground2,
    ...shorthands.borderBottom('2px', 'solid', 'transparent'),
    marginBottom: '-1px',
    ':hover': {
      color: tokens.colorNeutralForeground1,
    },
  },
  tabSelected: {
    color: tokens.colorBrandForeground1,
    fontWeight: 600,
    ...shorthands.borderBottom('2px', 'solid', tokens.colorBrandForeground1),
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  contentTitle: {
    fontSize: '14px',
    fontWeight: 600,
    color: tokens.colorNeutralForeground1,
  },
  moreButton: {
    minWidth: '28px',
    height: '28px',
  },
  gridHeader: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
    ...shorthands.padding('8px', '12px'),
    backgroundColor: tokens.colorNeutralBackground2,
    ...shorthands.borderRadius('4px'),
    marginBottom: '12px',
  },
  selectAllContainer: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
  },
  selectAllLabel: {
    fontSize: '13px',
    color: tokens.colorNeutralForeground2,
    cursor: 'pointer',
  },
  sortButton: {
    minWidth: 'auto',
    height: '24px',
    fontSize: '13px',
    ...shorthands.gap('4px'),
  },
  emptyState: {
    textAlign: 'center',
    ...shorthands.padding('40px', '20px'),
    color: tokens.colorNeutralForeground3,
    fontSize: '14px',
  },
  pagination: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shorthands.padding('12px', '0'),
    ...shorthands.borderTop('1px', 'solid', tokens.colorNeutralStroke2),
    marginTop: '12px',
  },
  paginationInfo: {
    fontSize: '13px',
    color: tokens.colorNeutralForeground2,
  },
  paginationControls: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
  },
  pageButton: {
    minWidth: '28px',
    height: '28px',
  },
  pageInfo: {
    fontSize: '13px',
    color: tokens.colorNeutralForeground2,
    ...shorthands.padding('0', '8px'),
  },
});

export const RelatedSection: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionHeader}>RELATED</h2>
      
      <div className={styles.tabs}>
        <Button 
          appearance="transparent"
          className={`${styles.tab} ${styles.tabSelected}`}
        >
          Recent Opportunities
        </Button>
        <Button 
          appearance="transparent"
          className={styles.tab}
        >
          Recent Cases
        </Button>
        <Button 
          appearance="transparent"
          className={styles.tab}
        >
          Entitlements
        </Button>
      </div>

      <div className={styles.contentHeader}>
        <h3 className={styles.contentTitle}>Recent Opportunities</h3>
        <Button 
          appearance="transparent"
          className={styles.moreButton}
          icon={<MoreVerticalRegular />}
          aria-label="More commands"
        />
      </div>

      <div className={styles.gridHeader}>
        <div className={styles.selectAllContainer}>
          <Checkbox aria-label="Select all" />
          <ChevronDownRegular style={{ fontSize: '12px', color: tokens.colorNeutralForeground3 }} />
          <span className={styles.selectAllLabel}>Select all</span>
        </div>
        <Button 
          appearance="transparent"
          className={styles.sortButton}
          icon={<ArrowSortRegular />}
        >
          Sort
        </Button>
      </div>

      <div className={styles.emptyState}>
        No data available
      </div>

      <div className={styles.pagination}>
        <div className={styles.paginationInfo}>
          0 - 0 of 0
        </div>
        <div className={styles.paginationControls}>
          <Button 
            appearance="transparent"
            className={styles.pageButton}
            icon={<ChevronLeftRegular />}
            disabled
            aria-label="Previous page"
          />
          <span className={styles.pageInfo}>Page 1</span>
          <Button 
            appearance="transparent"
            className={styles.pageButton}
            icon={<ChevronRightRegular />}
            disabled
            aria-label="Next page"
          />
        </div>
      </div>
    </div>
  );
};
