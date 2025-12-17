import { makeStyles, Button, TabList, Tab, ToggleButton } from '@fluentui/react-components';
import { 
  FormSparkleRegular,
  FormSparkleFilled,
  ChevronDownRegular,
  SparkleRegular
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  tabsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    height: '48px',
  },
  tabList: {
    height: '48px',
    '& button': {
      ':focus': {
        outline: 'none',
      },
      ':focus-visible': {
        outline: 'none',
      },
    },
  },
  toggleButton: {
    ':focus': {
      outline: 'none',
    },
    ':focus-visible': {
      outline: 'none',
    },
  },
});

interface ContactTabsProps {
  onFormAssistToggle: () => void;
  isFormAssistVisible: boolean;
}

export const ContactTabs: React.FC<ContactTabsProps> = ({ onFormAssistToggle, isFormAssistVisible }) => {
  const styles = useStyles();

  return (
    <div className={styles.tabsContainer}>
      <TabList defaultSelectedValue="summary" className={styles.tabList}>
        <Tab value="summary">Summary</Tab>
        <Tab value="details">Details</Tab>
        <Tab value="related">
          Related
          <ChevronDownRegular style={{ fontSize: '12px', marginLeft: '4px' }} />
        </Tab>
      </TabList>
      
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button 
          icon={<SparkleRegular />}
        >
          Summary
        </Button>
        <ToggleButton 
          icon={isFormAssistVisible ? <FormSparkleFilled /> : <FormSparkleRegular />}
          onClick={onFormAssistToggle}
          checked={isFormAssistVisible}
          className={styles.toggleButton}
        >
          Form assist
        </ToggleButton>
      </div>
    </div>
  );
};
