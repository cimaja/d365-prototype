import { useState } from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';
import { CommandBar } from './CommandBar.tsx';
import { ContactHeader } from './ContactHeader.tsx';
import { ContactTabs } from './ContactTabs.tsx';
import { GeneralInformation } from './GeneralInformation.tsx';
import { Timeline } from './Timeline.tsx';
import { RelatedSection } from './RelatedSection.tsx';
import { FormAssistPanel } from './FormAssistPanel.tsx';

const useStyles = makeStyles({
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(250, 250, 250)',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  headerCard: {
    backgroundColor: 'rgb(255, 255, 255)',
    ...shorthands.borderRadius('8px'),
    boxShadow: '0 1.6px 3.6px 0 rgba(0,0,0,.132), 0 0.3px 0.9px 0 rgba(0,0,0,.108)',
    ...shorthands.margin('20px', '20px', '0', '20px'),
    ...shorthands.padding('16px'),
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('0'),
  },
  divider: {
    height: '1px',
    backgroundColor: 'rgb(225, 223, 221)',
    ...shorthands.margin('24px', '0', '8px', '0'),
  },
  commandBarCard: {
    backgroundColor: 'rgb(255, 255, 255)',
    ...shorthands.borderRadius('8px'),
    boxShadow: '0 1.6px 3.6px 0 rgba(0,0,0,.132), 0 0.3px 0.9px 0 rgba(0,0,0,.108)',
    ...shorthands.margin('20px', '20px', '0', '20px'),
  },
  contentArea: {
    ...shorthands.padding('20px', '20px', '20px', '20px'),
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('20px'),
  },
  columnsContainer: {
    display: 'flex',
    flexDirection: 'row',
    ...shorthands.gap('20px'),
    '@media (max-width: 1365px)': {
      flexWrap: 'wrap',
    },
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      flexWrap: 'nowrap',
    },
  },
  generalColumn: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('20px'),
    flex: '1 1 33.33%',
    minWidth: '300px',
    '@media (max-width: 1365px)': {
      flex: '1 1 calc(50% - 10px)',
      minWidth: '280px',
    },
    '@media (max-width: 900px)': {
      flex: '1 1 100%',
      minWidth: 0,
    },
  },
  timelineColumn: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('20px'),
    flex: '1 1 33.33%',
    minWidth: '300px',
    '@media (max-width: 1365px)': {
      flex: '1 1 calc(50% - 10px)',
      minWidth: '280px',
    },
    '@media (max-width: 900px)': {
      flex: '1 1 100%',
      minWidth: 0,
    },
  },
  relatedColumn: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('20px'),
    flex: '1 1 33.33%',
    minWidth: '300px',
    '@media (max-width: 1365px)': {
      flex: '1 1 100%',
      minWidth: 0,
    },
    '@media (max-width: 900px)': {
      flex: '1 1 100%',
      minWidth: 0,
    },
  },
});

export const MainContent: React.FC = () => {
  const styles = useStyles();
  const [isFormAssistVisible, setIsFormAssistVisible] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles.commandBarCard}>
        <CommandBar />
      </div>
      <div className={styles.headerCard}>
        <ContactHeader />
        <div className={styles.divider}></div>
        <ContactTabs 
          onFormAssistToggle={() => setIsFormAssistVisible(!isFormAssistVisible)} 
          isFormAssistVisible={isFormAssistVisible}
        />
      </div>
      {isFormAssistVisible && (
        <div style={{ margin: '0 20px' }}>
          <FormAssistPanel />
        </div>
      )}
      <div className={styles.contentArea}>
        <div className={styles.columnsContainer}>
          <div className={styles.generalColumn}>
            <GeneralInformation />
          </div>
          <div className={styles.timelineColumn}>
            <Timeline />
          </div>
          <div className={styles.relatedColumn}>
            <RelatedSection />
          </div>
        </div>
      </div>
    </main>
  );
};
