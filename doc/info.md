Created src/styles/typography.ts with all the D365 text styles:

metadataValue (14px, bold) - for primary metadata
metadataLabel (12px, regular) - for secondary labels
pageTitle (20px, bold) - for h1 headings
savedBadge (14px, regular, gray) - for status text
entityType (14px, semi-bold) - for entity labels
ownerLink (14px, bold, blue) - for clickable owner links
Updated ContactHeader.tsx to import and use these shared styles instead of duplicating them