import { useState, useEffect, useRef } from 'react';
import { makeStyles, shorthands, tokens } from '@fluentui/react-components';
import { CommandBar } from './CommandBar.tsx';
import { ContactHeader } from './ContactHeader.tsx';
import { ContactTabs } from './ContactTabs.tsx';
import { GeneralInformation } from './GeneralInformation.tsx';
import { Timeline } from './Timeline.tsx';
import { RelatedSection } from './RelatedSection.tsx';
import { FormAssistPanel } from './FormAssistPanel.tsx';
import { ActivitySummary } from './ActivitySummary.tsx';

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
    boxShadow: tokens.shadow4,
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
    boxShadow: tokens.shadow8,
    ...shorthands.margin('0', '20px', '0', '20px'),
    position: 'sticky',
    top: '0',
    zIndex: 100,
    transitionProperty: 'box-shadow',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease-in-out',
  },
  commandBarCardElevated: {
    boxShadow: tokens.shadow16,
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
  const [isMinimized, setIsMinimized] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        const scrollTop = mainRef.current.scrollTop;
        // Show minimized header when scrolled past the full header (around 200px)
        setIsMinimized(scrollTop > 300);
      }
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
      return () => mainElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <main className={styles.main} ref={mainRef}>
      <div className={`${styles.commandBarCard} ${isMinimized ? styles.commandBarCardElevated : ''}`}>
        <CommandBar 
          minimizedHeader={isMinimized ? (
            <ContactHeader minimized={true}>
              <ContactTabs 
                onFormAssistToggle={() => setIsFormAssistVisible(!isFormAssistVisible)}
                isFormAssistVisible={isFormAssistVisible}
                minimized={true}
              />
            </ContactHeader>
          ) : undefined}
        />      </div>
      <ActivitySummary contactName="Patrick Sands (sample)" />
      <div className={styles.headerCard}>
        <ContactHeader minimized={false}>
        </ContactHeader>
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
