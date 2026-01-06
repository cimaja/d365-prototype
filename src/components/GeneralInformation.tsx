import * as React from 'react';
import { makeStyles, shorthands, Input, Combobox, Option } from '@fluentui/react-components';

const useStyles = makeStyles({
  section: {
    backgroundColor: '#ffffff',
    ...shorthands.borderRadius('8px'),
    boxShadow: '0 0 2px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.14)',
    ...shorthands.padding('16px'),
    ...shorthands.margin('0', '0', '16px'),
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
  },
  label: {
    fontSize: '14px',
    fontWeight: 400,
    color: 'rgb(36, 36, 36)',
    lineHeight: '20px',
  },
  required: {
    marginLeft: '4px',
  },
  requiredRecommended: {
    color: 'rgb(15, 108, 189)', // Blue for recommended (⁺)
  },
  requiredMandatory: {
    color: 'rgb(188, 47, 50)', // Red for mandatory (*)
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
  combobox: {
    width: '100%',
    boxSizing: 'border-box',
    '& *': {
      maxWidth: '100%',
      boxSizing: 'border-box',
    },
  },
  lookupContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    minWidth: 0,
    backgroundColor: 'rgb(245, 245, 245)',
    ...shorthands.border('1px', 'solid', 'transparent'),
    ...shorthands.borderRadius('4px'),
    minHeight: '32px',
    ...shorthands.padding('4px', '8px'),
    ...shorthands.gap('8px'),
    boxSizing: 'border-box',
  },
  tagGroup: {
    flex: '1',
    minWidth: 0,
  },
  lookupTag: {
    maxWidth: '100%',
    minWidth: 0,
  },
  searchButton: {
    minWidth: '20px',
    height: '20px',
    ...shorthands.padding('0'),
    marginLeft: 'auto',
  },
  emailContainer: {
    position: 'relative',
  },
  emailIcon: {
    position: 'absolute',
    right: '8px',
    top: '6px',
    fontSize: '16px',
    color: '#0078d4',
    cursor: 'pointer',
  },
});

export const GeneralInformation: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionHeader}>GENERAL INFORMATION</h2>
      
      <div className={styles.formContainer}>
        <div className={styles.fieldRow}>
          <div className={styles.labelContainer}>
            <label className={styles.label}>
              First Name
              <span className={`${styles.required} ${styles.requiredRecommended}`}>⁺</span>
            </label>
          </div>
          <div className={styles.inputContainer}>
            <Input 
              className={styles.input}
              defaultValue="Patrick"
              placeholder="---"
              appearance="filled-lighter"
            />
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.labelContainer}>
            <label className={styles.label}>
              Last Name
              <span className={`${styles.required} ${styles.requiredMandatory}`}>*</span>
            </label>
          </div>
          <div className={styles.inputContainer}>
            <Input 
              className={styles.input}
              defaultValue="Sands (sample)"
              placeholder="---"
              appearance="filled-lighter"
            />
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.labelContainer}>
            <label className={styles.label}>Account Name</label>
          </div>
          <div className={styles.inputContainer}>
            <Input 
              className={styles.input}
              defaultValue="Alpine Ski House (sample)"
              placeholder="---"
              appearance="filled-lighter"
            />
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.labelContainer}>
            <label className={styles.label}>Mobile Phone</label>
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
            <label className={styles.label}>Fax</label>
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
            <label className={styles.label}>Contact Method</label>
          </div>
          <div className={styles.inputContainer}>
            <Combobox 
              className={styles.combobox}
              defaultValue="Any"
              placeholder="---"
              appearance="filled-lighter"
              style={{ width: '100%', maxWidth: '100%', minWidth: 0 }}
            >
              <Option value="any">Any</Option>
              <Option value="email">Email</Option>
              <Option value="phone">Phone</Option>
              <Option value="mail">Mail</Option>
            </Combobox>
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.labelContainer}>
            <label className={styles.label}>Address 1: Street 1</label>
          </div>
          <div className={styles.inputContainer}>
            <Input 
              className={styles.input}
              defaultValue="7765 Sunsine Drive"
              placeholder="---"
              appearance="filled-lighter"
            />
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.labelContainer}>
            <label className={styles.label}>Address 1: Street 2</label>
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
            <label className={styles.label}>Address 1: Street 3</label>
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
            <label className={styles.label}>Address 1: City</label>
          </div>
          <div className={styles.inputContainer}>
            <Input 
              className={styles.input}
              defaultValue="Seattle"
              placeholder="---"
              appearance="filled-lighter"
            />
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.labelContainer}>
            <label className={styles.label}>Address 1: State/Province</label>
          </div>
          <div className={styles.inputContainer}>
            <Input 
              className={styles.input}
              defaultValue="WA"
              placeholder="---"
              appearance="filled-lighter"
            />
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.labelContainer}>
            <label className={styles.label}>Address 1: ZIP/Postal Code</label>
          </div>
          <div className={styles.inputContainer}>
            <Input 
              className={styles.input}
              defaultValue="11910"
              placeholder="---"
              appearance="filled-lighter"
            />
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.labelContainer}>
            <label className={styles.label}>Address 1: Country/Region</label>
          </div>
          <div className={styles.inputContainer}>
            <Input 
              className={styles.input}
              defaultValue="U.S."
              placeholder="---"
              appearance="filled-lighter"
            />
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.labelContainer}>
            <label className={styles.label}>Email</label>
          </div>
          <div className={styles.inputContainer}>
            <Input 
              className={styles.input}
              defaultValue="someone_k@example.com"
              placeholder="---"
              appearance="filled-lighter"
            />
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.labelContainer}>
            <label className={styles.label}>Business Phone</label>
          </div>
          <div className={styles.inputContainer}>
            <Input 
              className={styles.input}
              defaultValue="+1 (206) 555-0100"
              placeholder="---"
              appearance="filled-lighter"
            />
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.labelContainer}>
            <label className={styles.label}>Home Phone</label>
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
            <label className={styles.label}>Job Title</label>
          </div>
          <div className={styles.inputContainer}>
            <Input 
              className={styles.input}
              defaultValue="Marketing Manager"
              placeholder="---"
              appearance="filled-lighter"
            />
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.labelContainer}>
            <label className={styles.label}>Department</label>
          </div>
          <div className={styles.inputContainer}>
            <Input 
              className={styles.input}
              defaultValue="Marketing"
              placeholder="---"
              appearance="filled-lighter"
            />
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.labelContainer}>
            <label className={styles.label}>Manager</label>
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
            <label className={styles.label}>Assistant Name</label>
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
            <label className={styles.label}>Assistant Phone</label>
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
            <label className={styles.label}>Birthday</label>
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
            <label className={styles.label}>Anniversary</label>
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
            <label className={styles.label}>Spouse/Partner Name</label>
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
            <label className={styles.label}>Number of Children</label>
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
  );
};
