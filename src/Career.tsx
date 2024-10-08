import { type ReactElement } from 'react';
import './App.css';
import { Box, Container, Typography, Link } from '@mui/material';
import NavBar from './NavBar';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Carousel from 'react-material-ui-carousel'
import imageCTG1 from './assets/images/ctg_1.JPG'
import imageCTG2 from './assets/images/ctg_2.JPG'
import imageCTG3 from './assets/images/ctg_3.jpeg'
import imageCTG4 from './assets/images/ctg_4.JPG'
import imageCTG5 from './assets/images/ctg_5.JPG'
import imageCTG6 from './assets/images/ctg_6.jpeg'
import Footer from './Footer';

const Main = (): ReactElement => {
  return (
    <>
      <NavBar/>
      <Box sx={{ backgroundColor: 'var(--background)', py: 4 }}>
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', py: 8 }}>
            <Typography variant="h2">
              "Nunca olvides de donde vienes"
            </Typography>
            <Typography variant="h5" sx={{ mt: 4, backgroundColor: 'var(--grey)', color: 'var(--light)', p: 2 }} >
              Meet Clear To Go Team, a.k.a CTG
            </Typography>
            <Typography variant="body1" sx={{ mt: 4 }} >
              CTG was definitely a game changer for me. I learned so much from these awesome people, not only professionally but also as a human being. There’s a lot I could share, but check out these pictures instead!
            </Typography>
            <Carousel sx={{ width: '100%', my: 4, borderRadius: '.5rem' }} interval={5000} animation={'slide'} height={'50vw'} indicators={false} duration={750}>
              <LazyLoadImage src={imageCTG4} alt={'Portrait image'} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
              <LazyLoadImage src={imageCTG3} alt={'Portrait image'} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
              <LazyLoadImage src={imageCTG1} alt={'Portrait image'} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
              <LazyLoadImage src={imageCTG2} alt={'Portrait image'} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
              <LazyLoadImage src={imageCTG5} alt={'Portrait image'} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
              <LazyLoadImage src={imageCTG6} alt={'Portrait image'} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            </Carousel>
          </Box>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: 'var(--light)', paddingBottom: '5rem' }}>
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', py: 8 }}>
            <Typography variant="h5" sx={{ mt: 4, backgroundColor: 'var(--grey)', color: 'var(--light)', p: 2 }} >
              Web Dev Talks
            </Typography>

            <Typography variant="body1" sx={{ mt: 4 }} >
              It's been almost 3 years since I started contributing to WDT. I assist in managing social media, setting up and manipulating the live stream, collecting speakers' and sponsors' information, and helping organize the events in general
            </Typography>
            <Typography variant="body1" >
              <em>"Web Dev Talks, also known as WDT, is a Colima-based community primarily focused on web development that does not belong to any company. We are the first community of software developers in the state and also the most diverse, with 10 years of experience supporting us."</em>
            </Typography>
            <Typography variant="body1">
              Recent participation includes the{' '}
              <Link
                href="https://www.facebook.com/story.php?story_fbid=pfbid01C8dLihbxDJ2pN3nQzQoWSchBx8hAvP6YN6UtKVXcNCGt4tro4t5Cidw35K3om4Wl&id=100067931119189&mibextid=qC1gEa"
                target="_blank"
                rel="noopener"
              >
                10th anniversary of WDT
              </Link>
              {' '}and{' '}
              <Link
                href="https://www.facebook.com/story.php?story_fbid=pfbid02VkJUfiiZQZNQeqT8KZb7mYbp4BDnMmeoTs31NcJBfgGiFNstSDCvKzZdciDhojHPl&id=100067931119189&mibextid=qC1gEa"
                target="_blank"
                rel="noopener"
              >
                GitHub Field Day Mexico
              </Link>.
              You can find more information in our official{' '}
              <Link
                href="https://www.webdevtalks.mx/"
                target="_blank"
                rel="noopener"
              >
                website
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>
      <Footer/>
    </>
  );
}

export default Main;
