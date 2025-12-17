import { makeStyles, shorthands, Button } from '@fluentui/react-components';
import { 
  AddRegular,
  ClipboardPasteRegular,
  InfoRegular,
  PersonFeedbackRegular,
  SparkleRegular
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  panel: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
    ...shorthands.padding('12px'),
    ...shorthands.border('1px', 'dashed', 'rgb(0, 120, 212)'),
    ...shorthands.borderRadius('4px'),
    marginTop: '16px',
    backgroundImage: 'linear-gradient(135deg, rgb(240, 248, 255) 0%, rgb(230, 244, 255) 50%, rgb(225, 242, 255) 100%)',
  },
  iconButton: {
    minWidth: '32px',
    height: '32px',
    color: 'rgb(50, 49, 48)',
  },
  dropZone: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...shorthands.gap('8px'),
    ...shorthands.padding('8px'),
    minHeight: '40px',
  },
  dropZoneIcon: {
    width: '20px',
    height: '20px',
  },
  dropZoneText: {
    fontSize: '14px',
    color: 'rgb(0, 120, 212)',
    fontWeight: 400,
  },
  rightButtons: {
    display: 'flex',
    ...shorthands.gap('4px'),
  },
});

export const FormAssistPanel: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.panel}>
      <Button 
        appearance="subtle"
        className={styles.iconButton}
        icon={<AddRegular />}
        title="Source upload - Add source to be analyzed for form suggestions"
      />
      <Button 
        appearance="subtle"
        className={styles.iconButton}
        icon={<ClipboardPasteRegular />}
        title="Smart paste (CMD+V) - Analyzes clipboard for form suggestions"
      />
      <div className={styles.dropZone}>
        <div className={styles.dropZoneIcon}>
          <SparkleRegular style={{ fontSize: '24px', color: 'rgb(0,120,212)' }} />
        </div>
        <span className={styles.dropZoneText}>
          Drop files or smart paste for Copilot to make suggestions
        </span>
      </div>
      <div className={styles.rightButtons}>
        <Button 
          appearance="subtle"
          className={styles.iconButton}
          icon={<InfoRegular />}
          title="Field info"
        />
        <Button 
          appearance="subtle"
          className={styles.iconButton}
          icon={<PersonFeedbackRegular />}
          title="Submit feedback"
        />
      </div>
    </div>
  );
};
