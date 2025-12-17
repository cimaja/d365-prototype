import { makeStyles, shorthands, Button, Input, tokens } from '@fluentui/react-components';
import { 
  AddRegular,
  BookmarkRegular,
  FilterRegular,
  ArrowExpandRegular,
  ArrowClockwiseRegular,
  MoreHorizontalRegular,
  SearchRegular,
  NoteRegular,
  AttachRegular,
  ChevronDownRegular,
  SparkleRegular
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  section: {
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderRadius('8px'),
    boxShadow: '0 1.6px 3.6px 0 rgba(0,0,0,.132), 0 0.3px 0.9px 0 rgba(0,0,0,.108)',
    ...shorthands.padding('20px'),
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '600px',
  },
  sectionHeader: {
    fontSize: '11px',
    fontWeight: 600,
    color: tokens.colorNeutralForeground3,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    lineHeight: '20px',
    marginBottom: '16px',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  timelineHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  timelineTitle: {
    fontSize: '14px',
    fontWeight: 600,
    color: tokens.colorNeutralForeground1,
  },
  timelineActions: {
    display: 'flex',
    ...shorthands.gap('4px'),
  },
  iconButton: {
    minWidth: '28px',
    height: '28px',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
  },
  searchInput: {
    flex: 1,
    fontSize: '14px',
    fontWeight: 400,
    backgroundColor: 'rgb(245, 245, 245)',
    ...shorthands.border('1px', 'solid', 'transparent'),
    ...shorthands.borderRadius('4px'),
    minHeight: '32px',
    height: '32px',
    ...shorthands.padding('0', '8px'),
    lineHeight: '20px',
    color: 'rgb(36, 36, 36)',
    '::placeholder': {
      color: 'rgb(96, 94, 92)',
    },
  },
  noteInput: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
    ...shorthands.padding('8px', '12px'),
    ...shorthands.border('1px', 'solid', tokens.colorNeutralStroke1),
    ...shorthands.borderRadius('4px'),
    marginBottom: '16px',
    cursor: 'text',
    backgroundColor: tokens.colorNeutralBackground1,
    ':hover': {
      ...shorthands.border('1px', 'solid', tokens.colorNeutralStroke1Hover),
    },
  },
  noteText: {
    flex: 1,
    fontSize: '14px',
    color: tokens.colorNeutralForeground3,
  },
  timelineContent: {
    flex: 1,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('12px'),
  },
  highlightsSection: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
    ...shorthands.padding('8px', '12px'),
    ...shorthands.border('1px', 'solid', tokens.colorNeutralStroke1),
    ...shorthands.borderRadius('4px'),
    marginBottom: '16px',
    cursor: 'pointer',
    backgroundColor: tokens.colorNeutralBackground1,
    ':hover': {
      ...shorthands.border('1px', 'solid', tokens.colorNeutralStroke1Hover),
    },
  },
  highlightsText: {
    flex: 1,
    fontSize: '14px',
    fontWeight: 600,
    color: tokens.colorNeutralForeground1,
  },
  recentSection: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('12px'),
  },
  recentHeader: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
    ...shorthands.padding('8px', '0'),
    cursor: 'pointer',
  },
  recentText: {
    fontSize: '14px',
    fontWeight: 600,
    color: tokens.colorNeutralForeground2,
  },
  timelineItem: {
    display: 'flex',
    ...shorthands.gap('12px'),
    ...shorthands.padding('12px'),
    ...shorthands.borderRadius('4px'),
    ...shorthands.border('1px', 'solid', tokens.colorNeutralStroke2),
    backgroundColor: tokens.colorNeutralBackground1,
  },
  itemIcon: {
    width: '32px',
    height: '32px',
    ...shorthands.borderRadius('50%'),
    backgroundColor: tokens.colorNeutralBackground3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  itemContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('4px'),
  },
  itemTitle: {
    fontSize: '13px',
    color: tokens.colorNeutralForeground2,
  },
  itemLink: {
    color: tokens.colorBrandForeground1,
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: 600,
    ':hover': {
      textDecoration: 'underline',
    },
  },
  itemMeta: {
    fontSize: '12px',
    color: tokens.colorNeutralForeground3,
  },
});

export const Timeline: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.section}>
      <div className={styles.headerContainer}>
        <h2 className={styles.sectionHeader}>TIMELINE</h2>
        <div className={styles.timelineActions}>
          <Button 
            appearance="transparent"
            className={styles.iconButton}
            icon={<AddRegular />}
            aria-label="Create a timeline record"
          />
          <Button 
            appearance="transparent"
            className={styles.iconButton}
            icon={<BookmarkRegular />}
            aria-label="Bookmarks"
          />
          <Button 
            appearance="transparent"
            className={styles.iconButton}
            icon={<FilterRegular />}
            aria-label="Filter"
          />
          <Button 
            appearance="transparent"
            className={styles.iconButton}
            icon={<ArrowExpandRegular />}
            aria-label="Expand all"
          />
          <Button 
            appearance="transparent"
            className={styles.iconButton}
            icon={<ArrowClockwiseRegular />}
            aria-label="Refresh"
          />
          <Button 
            appearance="transparent"
            className={styles.iconButton}
            icon={<MoreHorizontalRegular />}
            aria-label="More commands"
          />
        </div>
      </div>

      <div className={styles.searchContainer}>
        <Input 
          className={styles.searchInput}
          placeholder="Search timeline"
          appearance="filled-lighter"
          contentBefore={<SearchRegular style={{ fontSize: '16px', color: 'rgb(96, 94, 92)' }} />}
        />
      </div>

      <div className={styles.noteInput}>
        <NoteRegular style={{ fontSize: '16px', color: tokens.colorNeutralForeground3 }} />
        <span className={styles.noteText}>Enter a note...</span>
        <Button 
          appearance="transparent"
          className={styles.iconButton}
          icon={<AttachRegular />}
          aria-label="Add attachment"
        />
      </div>

      <div className={styles.timelineContent}>
        <div className={styles.highlightsSection}>
          <SparkleRegular style={{ fontSize: '24px', color: 'rgb(0,120,212)' }} />
          <span className={styles.highlightsText}>Highlights</span>
          <Button 
            appearance="transparent"
            icon={<ChevronDownRegular />}
            aria-label="Expand"
            style={{ minWidth: '28px', height: '28px' }}
          />
        </div>

        <div className={styles.recentSection}>
          <div className={styles.recentHeader}>
            <ChevronDownRegular style={{ fontSize: '16px' }} />
            <span className={styles.recentText}>Recent</span>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.itemIcon}>
              <NoteRegular style={{ fontSize: '16px', color: tokens.colorNeutralForeground2 }} />
            </div>
            <div className={styles.itemContent}>
              <div className={styles.itemTitle}>
                Auto-post on{' '}
                <a href="#" className={styles.itemLink}>Case Need help (sample)</a>
              </div>
              <div className={styles.itemMeta}>
                12/15/2025, 4:49 PM
              </div>
              <div className={styles.itemMeta}>
                Case created by{' '}
                <a href="#" className={styles.itemLink}>user01 aurora</a>
                {' '}for Contact Patrick Sands (sample)
              </div>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.itemIcon}>
              <NoteRegular style={{ fontSize: '16px', color: tokens.colorNeutralForeground2 }} />
            </div>
            <div className={styles.itemContent}>
              <div className={styles.itemTitle}>
                Auto-post on Contact Patrick Sands (sample)
              </div>
              <div className={styles.itemMeta}>
                12/15/2025, 4:49 PM
              </div>
              <div className={styles.itemMeta}>
                Contact created by{' '}
                <a href="#" className={styles.itemLink}>user01 aurora</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
