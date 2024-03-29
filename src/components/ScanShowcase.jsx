import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Navigation } from 'swiper';

import './ScanShowcase.scss';

import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Img1 from '../assets/Abandoned_All.webp';
import Img2 from '../assets/Abandoned_All_Studio.webp';
import Img3 from '../assets/Abandoned_Closeup_1.webp';
import Img4 from '../assets/Abandoned_Closeup_2.webp';
import Img5 from '../assets/Abandoned_Closeup_3.webp';

import Img6 from '../assets/Mixed_All.webp';
import Img7 from '../assets/Mixed_All_Studio.webp';
import Img8 from '../assets/Mixed_Closeup_1.webp';
import Img9 from '../assets/Mixed_Closeup_2.webp';
import Img10 from '../assets/Mixed_Closeup_3.webp';

import Click from '../assets/click.mp3';

function ScanShowcase() {

  const [loading, setLoading] = useState(false);

  function clickSound() {

    if (window.innerWidth < 600) return

    const clickSound = new Audio(Click)
    clickSound.volume = 0.5;
    clickSound.play();
  }

  return (
    <>

      {
        loading
          ? 
          <main className="loading">
            <div>
              <p>Loading</p>
            </div>
          </main>
          : 
          <main className="scan-container">

            <h1>Photogrammetry Adventures!</h1>

            <section className="abandoned border-retro">

              <h2>
                The Abandonment Pack
              </h2>

              <Swiper className="mySwiper"
                modules={[Pagination, Mousewheel, Navigation]}
                pagination={{ clickable: true }}
                thumbs={true}
                mousewheel={{
                  forceToAxis: true
                }}
                navigation={true}
                onRealIndexChange={clickSound}
              >
                <SwiperSlide>
                  <img src={Img1} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Img2} />
                </SwiperSlide>
              </Swiper>

              <p className="caption">
                Close Ups
              </p>

              <Swiper className="mySwiper space"
                modules={[Pagination, Mousewheel, Navigation]}
                pagination={{ clickable: true }}
                thumbs={true}
                mousewheel={{
                  forceToAxis: true
                }}
                navigation={true}
                onRealIndexChange={clickSound}
              >
                <SwiperSlide>
                  <img src={Img3} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Img4} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Img5} />
                </SwiperSlide>
              </Swiper>

              <p className="caption">
                Wow, much abandonment to be had here!
              </p>

            </section>

            <section className="mixed border-retro">

              <h2>The Mixed Bunch</h2>

              <Swiper className="mySwiper"
                modules={[Pagination, Mousewheel, Navigation]}
                pagination={{ clickable: true }}
                thumbs={true}
                mousewheel={{
                  forceToAxis: true
                }}
                navigation={true}
                onRealIndexChange={clickSound}
              >
                <SwiperSlide>
                  <img src={Img6} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Img7} />
                </SwiperSlide>
              </Swiper>

              <p className="caption">
                More closeups!
              </p>

              <Swiper className="mySwiper space"
                modules={[Pagination, Mousewheel, Navigation]}
                pagination={{ clickable: true }}
                thumbs={true}
                mousewheel={{
                  forceToAxis: true
                }}
                navigation={true}
                onRealIndexChange={clickSound}
              >
                <SwiperSlide>
                  <img src={Img8} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Img9} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Img10} />
                </SwiperSlide>
              </Swiper>

              <p className="caption">
                Grandma said she wished me well - I said, I have indoor plumbing
              </p>

            </section>

          </main>

      }

    </>
  )
}

export default ScanShowcase
