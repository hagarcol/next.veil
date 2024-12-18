import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

// data
import { FAQ_DATA } from '@/assets/data';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: '#202029',
  '&.Mui-expanded': {
    backgroundColor: '#34344580',
  },
  '&:first-of-type': {
    borderRadius: '8px 8px 0 0',
  },
  '&:last-of-type': {
    borderRadius: '0 0 8px 8px',
  },
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ 
      fontSize: '24px',
      transform: 'rotate(90deg)',
      color: '#DEDEDE',
    }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: 'rotate(180deg)',
    },
  [`& .${accordionSummaryClasses.content}`]: {
    margin: 0
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  padding: '16px 20px',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      {FAQ_DATA.map((item, index) => (
        <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
          <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`} sx={{ padding: "16px 20px" }}>
            <Typography
              variant='customFont'
              fontSize={16}
              color={expanded === `panel${index}` ? '#8671FF' : '#DEDEDE'}
              fontWeight={400}
              margin={0}
            >
              {item.title}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography
              fontSize={16}
              color='#DEDEDE'
            >
              {item.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}