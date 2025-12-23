import { makeStyles } from '@fluentui/react-components';

export const useTypographyStyles = makeStyles({
  // Metadata value style (larger, bold) - used for primary info like "Owner", "555-0110", "someone_k@example.com"
  metadataValue: {
    fontSize: '14px',
    color: 'rgb(36, 36, 36)',
    fontWeight: 600,
    lineHeight: '20px',
  },
  // Metadata label style (smaller, regular) - used for secondary info like "Job Title", "Business Phone", "Email"
  metadataLabel: {
    fontSize: '12px',
    color: 'rgb(36, 36, 36)',
    fontWeight: 400,
    lineHeight: '16px',
  },
  // Page title style - used for h1 headings like "Patrick Sands (sample)"
  pageTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: 'rgb(36, 36, 36)',
    lineHeight: '20px',
    margin: 0,
  },
  // Saved badge style - used for status indicators like "- Saved"
  savedBadge: {
    fontSize: '14px',
    color: 'rgb(97, 97, 97)',
    fontWeight: 400,
    lineHeight: '28px',
    paddingLeft: '6px',
  },
  // Entity type label - used for labels like "Contact"
  entityType: {
    fontSize: '14px',
    color: 'rgb(66, 66, 66)',
    fontWeight: 600,
    lineHeight: 'normal',
  },
  // Link style for owner/user links
  ownerLink: {
    fontSize: '14px',
    color: 'rgb(17, 94, 163)',
    fontWeight: 600,
    lineHeight: '20px',
  },
  // Section header style (h2) - used for section titles like "GENERAL INFORMATION", "TIMELINE"
  sectionHeader: {
    fontSize: '11px',
    fontWeight: 600,
    color: 'rgb(96, 94, 92)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    lineHeight: '20px',
    marginBottom: '16px',
  },
});
