import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Typography
      mt={0.5}
      px={1}
      pb={{ xs: 3, md: 0 }}
      color="text.secondary"
      variant="body2"
      sx={{ textAlign: { xs: 'center', md: 'right' } }}
      letterSpacing={0.5}
      fontWeight={500}
    >
      
      <Link href="https://themewagon.com/" target="_blank" rel="noreferrer">
        {' '}
      </Link>
    </Typography>
  );
};

export default Footer;