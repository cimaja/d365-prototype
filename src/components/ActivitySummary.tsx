import * as React from 'react';
import { makeStyles, shorthands, Button, TabList, Tab } from '@fluentui/react-components';
import { 
  DocumentOnePageSparkleRegular,
  ChevronDownRegular,
  ChevronUpRegular,
  CopyRegular,
  ThumbLikeRegular,
  ThumbDislikeRegular,
  ShieldCheckmarkRegular
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  container: {
    backgroundColor: 'rgb(255, 255, 255)',
    ...shorthands.borderRadius('20px'),
    ...shorthands.border('1px', 'solid', 'rgb(225, 223, 221)'),
    ...shorthands.margin('20px', '40px', '0', '40px'),
    ...shorthands.padding('16px'),
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('12px'),
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    ...shorthands.gap('12px'),
    justifyContent: 'space-between',
  },
  headerContent: {
    display: 'flex',
    alignItems: 'flex-start',
    ...shorthands.gap('12px'),
    flex: 1,
  },
  icon: {
    fontSize: '20px',
    color: 'rgb(0, 120, 212)',
    marginTop: '2px',
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('4px'),
    flex: 1,
  },
  title: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'rgb(36, 36, 36)',
    lineHeight: '20px',
  },
  tabsContainer: {
    marginTop: '-8px',
    marginLeft: '-12px',
  },
  tabList: {
    minHeight: '32px',
  },
  preview: {
    fontSize: '12px',
    fontWeight: 400,
    color: 'rgb(36, 36, 36)',
    lineHeight: '16px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
  },
  expandedContent: {
    fontSize: '12px',
    fontWeight: 400,
    color: 'rgb(36, 36, 36)',
    lineHeight: '16px',
    ...shorthands.padding('0', '0', '0', '32px'),
  },
  viewMoreButton: {
    minWidth: 'auto',
    flexShrink: 0,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shorthands.borderTop('1px', 'solid', 'rgb(225, 223, 221)'),
    paddingTop: '12px',
    marginTop: '4px',
  },
  disclaimer: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('6px'),
    fontSize: '12px',
    color: 'rgb(96, 94, 92)',
  },
  disclaimerIcon: {
    fontSize: '16px',
    color: 'rgb(96, 94, 92)',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('4px'),
  },
  actionButton: {
    minWidth: '32px',
    width: '32px',
    height: '32px',
    ...shorthands.padding('0'),
  },
});

interface ActivitySummaryProps {
  contactName?: string;
}

export const ActivitySummary: React.FC<ActivitySummaryProps> = ({ contactName = 'Patrick Sands' }) => {
  const styles = useStyles();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState<string>('summary');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <DocumentOnePageSparkleRegular className={styles.icon} />
          {!isExpanded ? (
            <div className={styles.textContent}>
              <div className={styles.title}>Summary</div>
              <div className={styles.preview}>
                Recent activity for {contactName} shows engagement across multiple channels. The contact has 
                been actively participating in marketing campaigns and has responded to several email communications. 
                Last interaction was recorded 3 days ago through the customer portal. Notable changes include 
                updated contact preferences and a new business address added to the account.
              </div>
            </div>
          ) : (
            <div className={styles.tabsContainer}>
              <TabList 
                className={styles.tabList}
                selectedValue={selectedTab}
                onTabSelect={(_, data) => setSelectedTab(data.value as string)}
              >
                <Tab value="summary">Summary</Tab>
                <Tab value="activity">Activity</Tab>
                <Tab value="suggestions">Suggestions</Tab>
              </TabList>
            </div>
          )}
        </div>
        <Button
          appearance="primary"
          size="small"
          className={styles.viewMoreButton}
          onClick={() => setIsExpanded(!isExpanded)}
          icon={isExpanded ? <ChevronUpRegular /> : <ChevronDownRegular />}
          iconPosition="after"
        >
          {isExpanded ? 'View less' : 'View more'}
        </Button>
      </div>
      
      {isExpanded && (
        <>
          <div className={styles.expandedContent}>
            {selectedTab === 'summary' && (
              <>
                Recent activity for {contactName} shows engagement across multiple channels. The contact has 
                been actively participating in marketing campaigns and has responded to several email communications. 
                Last interaction was recorded 3 days ago through the customer portal. Notable changes include 
                updated contact preferences and a new business address added to the account.
              </>
            )}
            {selectedTab === 'activity' && (
              <>
                <strong>John Smith</strong> updated the Business Phone field from "555-0100" to "555-0110" on December 15, 2025 at 2:30 PM.
                <br /><br />
                <strong>Sarah Johnson</strong> modified the Email address on December 14, 2025 at 10:15 AM.
                <br /><br />
                <strong>Mike Chen</strong> added a new note to the timeline on December 12, 2025 at 4:45 PM.
                <br /><br />
                <strong>Emily Davis</strong> changed the Job Title field on December 10, 2025 at 9:20 AM.
              </>
            )}
            {selectedTab === 'suggestions' && (
              <>
                <strong>Follow up on recent engagement:</strong> {contactName} has shown increased activity in the past week. Consider scheduling a call to discuss their current needs and potential opportunities.
                <br /><br />
                <strong>Update contact information:</strong> Verify the recent phone number change and confirm all contact details are current.
                <br /><br />
                <strong>Add to marketing campaign:</strong> Based on their engagement patterns, this contact would be a good fit for the upcoming product launch campaign.
                <br /><br />
                <strong>Review related opportunities:</strong> Check for any open opportunities associated with this contact that may need attention.
              </>
            )}
          </div>
          <div className={styles.footer}>
            <div className={styles.disclaimer}>
              <ShieldCheckmarkRegular className={styles.disclaimerIcon} />
              AI-generated content may be incorrect
            </div>
            <div className={styles.actions}>
              <Button
                appearance="subtle"
                icon={<CopyRegular />}
                className={styles.actionButton}
                aria-label="Copy"
                title="Copy"
              />
              <Button
                appearance="subtle"
                icon={<ThumbLikeRegular />}
                className={styles.actionButton}
                aria-label="Thumbs up"
                title="Thumbs up"
              />
              <Button
                appearance="subtle"
                icon={<ThumbDislikeRegular />}
                className={styles.actionButton}
                aria-label="Thumbs down"
                title="Thumbs down"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
