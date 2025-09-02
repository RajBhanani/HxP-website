import { useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BannerCarousels = () => {
  const isMd = useMediaQuery('(max-width: 768px)');

  const openDozee = (idx) => {
    if (idx !== 0) window.open('https://inquire.dozee.us/', '_blank', 'noopener,noreferrer');
    return;
  };

  return (
    <>
      {isMd && (
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showArrows={false}
          showStatus={true}
          onClickItem={openDozee}
          preventMovementUntilSwipeScrollTolerance
        >
          <div>
            <img src="./assets/banner_mob.png" style={{ height: '100vh', objectFit: 'contain' }} />
          </div>
          <div>
            <img src="./assets/dozee_mob_1.png" style={{ height: '100vh', objectFit: 'contain' }} />
          </div>
          <div>
            <img src="./assets/dozee_mob_2.png" style={{ height: '100vh', objectFit: 'contain' }} />
          </div>
          <div>
            <img src="./assets/dozee_mob_3.png" style={{ height: '100vh', objectFit: 'contain' }} />
          </div>
          <div>
            <img src="./assets/dozee_mob_4.png" style={{ height: '100vh', objectFit: 'contain' }} />
          </div>
          <div>
            <img src="./assets/dozee_mob_5.png" style={{ height: '100vh', objectFit: 'contain' }} />
          </div>
        </Carousel>
      )}
      {!isMd && (
        <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={true} showStatus={true} onClickItem={openDozee}>
          <div>
            <img src="./assets/banner.png" style={{ objectFit: 'contain' }} />
          </div>
          <div>
            <img src="./assets/dozee_pc_1.png" style={{ objectFit: 'contain' }} />
          </div>
          <div>
            <img src="./assets/dozee_pc_2.png" style={{ objectFit: 'contain' }} />
          </div>
          <div>
            <img src="./assets/dozee_pc_3.png" style={{ objectFit: 'contain' }} />
          </div>
          <div>
            <img src="./assets/dozee_pc_4.png" style={{ objectFit: 'contain' }} />
          </div>
        </Carousel>
      )}
    </>
  );
};

export default BannerCarousels;
