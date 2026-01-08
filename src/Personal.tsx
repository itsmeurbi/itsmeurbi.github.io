import { type ReactElement } from 'react';
import './App.css';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import NavBar from './NavBar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import imageAnimal1 from './assets/images/animal_1.JPG'
import imageAnimal2 from './assets/images/animal_2.JPG'
import imageAnimal3 from './assets/images/animal_3.JPG'
import imageAnimal4 from './assets/images/animal_4.JPG'
import imageAnimal5 from './assets/images/animal_5.JPG'
import imageAnimal6 from './assets/images/animal_6.JPG'
import imageAnimal7 from './assets/images/animal_7.JPG'
import imageAnimal8 from './assets/images/animal_8.JPG'
import imageAnimal9 from './assets/images/animal_9.JPG'
import imageAnimal10 from './assets/images/animal_10.JPG'
import imageFlower1 from './assets/images/flower_1.JPG'
import imageFlower2 from './assets/images/flower_2.JPG'
import imageFlower3 from './assets/images/flower_3.JPG'
import imageLandscape1 from './assets/images/landscape_1.JPG'
import imageLandscape2 from './assets/images/landscape_2.JPG'
import imagePortrait1 from './assets/images/portrait_1.JPG'
import imagePortrait2 from './assets/images/portrait_2.JPG'
import imagePortrait3 from './assets/images/portrait_3.JPG'
import imagePortrait4 from './assets/images/portrait_4.JPG'
import imagePortrait5 from './assets/images/portrait_5.JPG'
import imagePortrait6 from './assets/images/portrait_6.JPG'
import imagePortrait7 from './assets/images/portrait_7.JPG'
import imagePortrait8 from './assets/images/portrait_8.JPG'
import imagePortrait9 from './assets/images/portrait_9.JPG'
import videoJoseLuis from './assets/images/jose_luis.mp4'
import Footer from './Footer';


const Main = (): ReactElement => {
  return (
    <>
      <NavBar/>
      <Box sx={{ backgroundColor: 'var(--light)', py: 4 }}>
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', py: 8 }}>
            <Typography variant="h2" >
              About me
            </Typography>
            <Typography variant="body1" sx={{ mt: 4 }}>
              There's this thing about technology and nature that's always been a big part of me. I've loved animals since I was a kid—we had chickens, dogs, cows, ducks, fish, peacocks, and cats. Lately, I've gotten into plants. Back when I was in Colima, I used to visit nurseries all the time, adding more greenery to my place. Now in Querétaro, I just set up my office with some monsteras, ficus, and pothos
            </Typography>
            <Divider sx={{ width: '100%', my: 2 }}/>
            <Typography variant="body1">
              As an introvert, I'm all about quietness, being in nature, and hanging out in small groups. Not really into nightclubs, bars with loud music, or crowded places. Always down for breakfast with coffee though—not always up for concerts hehe
            </Typography>
            <Divider sx={{ width: '100%', my: 2 }}/>
            <Typography variant="body1">
              You can find me in Michoacán, Colima, Querétaro, or sometimes somewhere else around the globe. I wouldn't say traveling is one of my hobbies, but I really enjoy it!
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: 'var(--background)', paddingBottom: '5rem' }}>
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', py: 8 }}>
            <Typography variant="h2" sx={{ mt: 4 }}>
              My hobbies
            </Typography>
            <Grid container spacing={2} sx={{ mt: 4 }}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{ backgroundColor: 'var(--grey)', p: 2, height: '100%' }}>
                  <Box sx={{ color: 'var(--light)', display: 'flex', alignItems: 'center' }}>
                    <VideogameAssetIcon sx={{ mr: 2 }}/>
                    <Typography variant="h4">
                      Videogames
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: 'var(--light)', mt: 2 }}>
                    Video games have always been a big part of my life. I remember spending entire afternoons playing <em>Kya: Dark Lineage</em> on my PlayStation 2 when I was in elementary school. Sometimes, I still play solo games on the weekends.
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'var(--light)', mt: 2 }}>
                    My favorite video game has always been <em>Donkey Kong Country</em>. What’s yours?
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{ backgroundColor: 'var(--grey)', p: 2, height: '100%', mt: { xs: 4, md: 0 } }}>
                  <Box sx={{ color: 'var(--light)', display: 'flex', alignItems: 'center' }}>
                    <SportsTennisIcon sx={{ mr: 2 }}/>
                    <Typography variant="h4">
                      Tennis
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: 'var(--light)', mt: 2 }}>
                    I've been playing tennis for about two years now, and it's become one of my favorite ways to unwind. I really enjoy going to practice—it always lifts my mood!
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ backgroundColor: 'var(--grey)', p: 2, height: '100%', mt: { xs: 8, md: 0 } }}>
                  <Box sx={{ color: 'var(--light)', display: 'flex', alignItems: 'center' }}>
                    <LocalSeeIcon sx={{ mr: 2 }}/>
                    <Typography variant="h4">
                      Photography
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: 'var(--light)', mt: 2 }}>
                    About 3 years ago, I was feeling bored, so I decided to buy a camera. It's something I don't practice that often, but I enjoy shooting portraits, plants, and animals. I still need to learn how to edit in Lightroom hehe!
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'var(--light)', mt: 2 }}>
                    You can find some of my pictures in the Gallery section
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: 'var(--grey)', py: 8 }}>
        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Typography variant="h2" sx={{ my: 5, textAlign: 'center', color: 'var(--light)' }}>Gallery</Typography>
            <Box sx={{ width: '100%', my: 4, borderRadius: '.5rem', overflow: 'hidden', height: '50vw' }}>
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                speed={750}
                loop={true}
                style={{ width: '100%', height: '100%' }}
              >
                <SwiperSlide><img src={imageAnimal1} alt={'Animal photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imagePortrait1} alt={'Portrait photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imageAnimal3} alt={'Animal photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imageLandscape2} alt={'Landscape photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imagePortrait8} alt={'Portrait photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imageAnimal5} alt={'Animal photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imagePortrait7} alt={'Portrait photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imageAnimal6} alt={'Animal photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imagePortrait3} alt={'Portrait photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imageAnimal7} alt={'Animal photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imagePortrait4} alt={'Portrait photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imageAnimal9} alt={'Animal photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imagePortrait9} alt={'Portrait photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imageAnimal10} alt={'Animal photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imageFlower2} alt={'Flower photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imageAnimal8} alt={'Animal photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imageFlower3} alt={'Flower photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imageLandscape1} alt={'Landscape photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imagePortrait2} alt={'Portrait photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imageAnimal2} alt={'Animal photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imagePortrait5} alt={'Portrait photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imageFlower1} alt={'Flower photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imageAnimal4} alt={'Animal photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src={imagePortrait6} alt={'Portrait photo'} height={'100%'} width={'100%'} loading="lazy" style={{ objectFit: "cover" }} /></SwiperSlide>
              </Swiper>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: 'var(--light)', paddingBottom: '5rem' }}>
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', py: 8, width: '100%' }}>
            <Typography variant="h2" sx={{ mt: 4, backgroundColor: 'var(--grey)', color: 'var(--light)', p: 2 }} >
              El intrepido duende José Luis
            </Typography>
            <Typography variant="body1" sx={{ mt: 4 }}>
              This is José Luis, my one and only pet for now. He's a very shy ball python. Contrary to what people usually think, he's super tame
            </Typography>
            <Box sx={{ mt: 4, width: '100%' }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box sx={{ borderRadius: '.5rem', overflow: 'hidden' }}>
                    <img src={imageAnimal6} alt="Ball python" width="100%" loading="lazy" style={{ display: 'block' }} />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <video width="100%" height="100%" controls loop muted style={{ objectFit: 'cover', borderRadius: '.5rem', display: 'block' }}>
                    <source src={videoJoseLuis} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box sx={{ borderRadius: '.5rem', overflow: 'hidden' }}>
                    <img src={imageAnimal7} alt="Ball python" width="100%" loading="lazy" style={{ display: 'block' }} />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer/>
    </>
  );
}

export default Main;
