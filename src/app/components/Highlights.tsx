import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Fast shipment',
    description:
      'As a poshrep agent service, our shipment line is as fast as poshrep, 8-10 days arrive for international shipment',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Best shipping fee',
    description:
      'We can eusure our shipping fee is best price compared to all agents & sellers, you not overpaid any coin for shipping fee',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Innovative payment plan',
    description:
      `Pay half to order make it ease the finance pressure of your business, pay after qc makes you more comfortable with the process`,
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Professional customer service',
    description:
      'Customer service always online for help and serve',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Detailed quality check',
    description:
      'We take photos of each aspects of the products arrived, you can inspect the products.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Efficient proceed speed',
    description:
      'We process order the same day you ordered, ship same day the rest payment is done',
  },
];

export default function Highlights() {
  return (
    <Box
      id="Benefits"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'grey.900',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Benefits
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Explore why our agent service stands out: adaptability, durability, and innovation.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: 'grey.800',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
