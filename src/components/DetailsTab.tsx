import { makeStyles, shorthands, Input, Textarea, Button } from '@fluentui/react-components';
import { LockClosedRegular, AddRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    ...shorthands.gap('20px'),
    flex: 1,
    '@media (max-width: 1365px)': {
      flexWrap: 'wrap',
    },
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      flexWrap: 'nowrap',
    },
  },
  leftColumn: {
    flex: '1 1 66%',
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('20px'),
    minWidth: '300px',
    '@media (max-width: 1365px)': {
      flex: '1 1 100%',
      minWidth: 0,
    },
  },
  rightColumn: {
    flex: '1 1 34%',
    minWidth: '300px',
    '@media (max-width: 1365px)': {
      flex: '1 1 100%',
      minWidth: 0,
    },
  },
  section: {
    backgroundColor: '#ffffff',
    ...shorthands.borderRadius('8px'),
    boxShadow: '0 0 2px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.14)',
    ...shorthands.padding('16px'),
    width: '100%',
    boxSizing: 'border-box',
  },
  sectionHeader: {
    fontSize: '11px',
    fontWeight: 600,
    color: 'rgb(96, 94, 92)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '16px',
    lineHeight: '20px',
    fontFamily: '"Segoe UI", "Segoe UI Web (West European)", -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('12px'),
  },
  fieldRow: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('6px'),
    width: '100%',
  },
  labelContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: '14px',
    fontWeight: 400,
    color: 'rgb(36, 36, 36)',
    lineHeight: '20px',
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('4px'),
  },
  lockIcon: {
    fontSize: '12px',
    color: 'rgb(96, 94, 92)',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  input: {
    fontSize: '14px',
    fontWeight: 400,
    fontFamily: '"Segoe UI", "Segoe UI Web (West European)", -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif',
    backgroundColor: 'rgb(245, 245, 245)',
    ...shorthands.border('1px', 'solid', 'transparent'),
    ...shorthands.borderRadius('4px'),
    minHeight: '32px',
    height: '32px',
    ...shorthands.padding('0', '8px'),
    lineHeight: '20px',
    color: 'rgb(36, 36, 36)',
    boxSizing: 'border-box',
    width: '100%',
    '::placeholder': {
      color: 'rgb(96, 94, 92)',
    },
    '& input': {
      paddingLeft: '0',
      paddingRight: '0',
    },
  },
  textarea: {
    fontSize: '14px',
    fontWeight: 400,
    fontFamily: '"Segoe UI", "Segoe UI Web (West European)", -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif',
    backgroundColor: 'rgb(245, 245, 245)',
    ...shorthands.border('1px', 'solid', 'transparent'),
    ...shorthands.borderRadius('4px'),
    ...shorthands.padding('8px'),
    lineHeight: '20px',
    color: 'rgb(36, 36, 36)',
    boxSizing: 'border-box',
    width: '100%',
    '::placeholder': {
      color: 'rgb(96, 94, 92)',
    },
  },
  textAreaMonospace: {
    fontFamily: 'Consolas, Monaco, "Courier New", monospace',
    fontSize: '12px',
  },
  buttonGroup: {
    display: 'flex',
    ...shorthands.gap('8px'),
    marginTop: '4px',
  },
});

export const DetailsTab: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.section}>
          <h2 className={styles.sectionHeader}>FEATURE DETAILS</h2>
          
          <div className={styles.formContainer}>
            <div className={styles.fieldRow}>
              <div className={styles.labelContainer}>
                <label className={styles.label}>
                  Metadata
                  <LockClosedRegular className={styles.lockIcon} />
                </label>
              </div>
              <div className={styles.inputContainer}>
                <Textarea
                  className={styles.textarea}
                  value="Process advisor now supports process mining using event log data to help customers produce process maps and analytics to understand inefficiencies."
                  rows={3}
                  appearance="filled-lighter"
                />
              </div>
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.labelContainer}>
                <label className={styles.label}>
                  Business Value
                  <LockClosedRegular className={styles.lockIcon} />
                </label>
              </div>
              <div className={styles.inputContainer}>
                <Textarea
                  className={styles.textarea}
                  value="Customers can now use event log data from systems of record to understand inefficiencies in the process."
                  rows={3}
                  appearance="filled-lighter"
                />
              </div>
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.labelContainer}>
                <label className={styles.label}>
                  Feature Detail (in Markdown format)
                  <LockClosedRegular className={styles.lockIcon} />
                </label>
              </div>
              <div className={styles.inputContainer}>
                <Textarea
                  className={`${styles.textarea} ${styles.textAreaMonospace}`}
                  value="Process advisor now supports process mining using event log data. This allows users to leverage event log data from systems of record to produce process maps and analytics that can help them better understand and address inefficiencies."
                  rows={6}
                  appearance="filled-lighter"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionHeader}>IMAGES</h2>
          
          <div className={styles.formContainer}>
            <div className={styles.buttonGroup}>
              <Button 
                icon={<AddRegular />}
                appearance="primary"
                size="small"
              >
                Create new image
              </Button>
              <Button 
                appearance="subtle"
                size="small"
              >
                Refresh
              </Button>
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.labelContainer}>
                <label className={styles.label}>
                  Ideas (Provide the idea URL)
                  <LockClosedRegular className={styles.lockIcon} />
                </label>
              </div>
              <div className={styles.inputContainer}>
                <Input 
                  className={styles.input}
                  placeholder="---"
                  appearance="filled-lighter"
                />
              </div>
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.labelContainer}>
                <label className={styles.label}>
                  Want to get feedback? (Provide the URL)
                  <LockClosedRegular className={styles.lockIcon} />
                </label>
              </div>
              <div className={styles.inputContainer}>
                <Input 
                  className={styles.input}
                  placeholder="---"
                  appearance="filled-lighter"
                />
              </div>
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.labelContainer}>
                <label className={styles.label}>
                  Note (Optional)
                  <LockClosedRegular className={styles.lockIcon} />
                </label>
              </div>
              <div className={styles.inputContainer}>
                <Input 
                  className={styles.input}
                  placeholder="---"
                  appearance="filled-lighter"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionHeader}>ADDITIONAL INFORMATION</h2>
          
          <div className={styles.formContainer}>
            <div className={styles.fieldRow}>
              <div className={styles.labelContainer}>
                <label className={styles.label}>
                  Product Category
                  <LockClosedRegular className={styles.lockIcon} />
                </label>
              </div>
              <div className={styles.inputContainer}>
                <Input 
                  className={styles.input}
                  placeholder="---"
                  appearance="filled-lighter"
                />
              </div>
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.labelContainer}>
                <label className={styles.label}>
                  Release Version
                  <LockClosedRegular className={styles.lockIcon} />
                </label>
              </div>
              <div className={styles.inputContainer}>
                <Input 
                  className={styles.input}
                  defaultValue="2024.1"
                  placeholder="---"
                  appearance="filled-lighter"
                />
              </div>
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.labelContainer}>
                <label className={styles.label}>
                  Target Release Date
                  <LockClosedRegular className={styles.lockIcon} />
                </label>
              </div>
              <div className={styles.inputContainer}>
                <Input 
                  className={styles.input}
                  placeholder="---"
                  appearance="filled-lighter"
                />
              </div>
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.labelContainer}>
                <label className={styles.label}>
                  Priority
                  <LockClosedRegular className={styles.lockIcon} />
                </label>
              </div>
              <div className={styles.inputContainer}>
                <Input 
                  className={styles.input}
                  defaultValue="High"
                  placeholder="---"
                  appearance="filled-lighter"
                />
              </div>
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.labelContainer}>
                <label className={styles.label}>
                  Development Status
                  <LockClosedRegular className={styles.lockIcon} />
                </label>
              </div>
              <div className={styles.inputContainer}>
                <Input 
                  className={styles.input}
                  defaultValue="In Progress"
                  placeholder="---"
                  appearance="filled-lighter"
                />
              </div>
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.labelContainer}>
                <label className={styles.label}>
                  Stakeholder
                  <LockClosedRegular className={styles.lockIcon} />
                </label>
              </div>
              <div className={styles.inputContainer}>
                <Input 
                  className={styles.input}
                  placeholder="---"
                  appearance="filled-lighter"
                />
              </div>
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.labelContainer}>
                <label className={styles.label}>
                  Technical Notes
                  <LockClosedRegular className={styles.lockIcon} />
                </label>
              </div>
              <div className={styles.inputContainer}>
                <Textarea
                  className={styles.textarea}
                  placeholder="Enter technical notes..."
                  rows={4}
                  appearance="filled-lighter"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.section}>
          <h2 className={styles.sectionHeader}>REVIEW COMMENTS</h2>
          
          <div className={styles.formContainer}>
            <div className={styles.fieldRow}>
              <div className={styles.inputContainer}>
                <Input 
                  className={styles.input}
                  placeholder="Search timeline"
                  appearance="filled-lighter"
                />
              </div>
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.inputContainer}>
                <Textarea 
                  className={styles.textarea}
                  placeholder="Enter a note..."
                  rows={4}
                  appearance="filled-lighter"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
