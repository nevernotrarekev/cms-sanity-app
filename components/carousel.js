import Slider from "react-slick";
import Vimeo from "@u-wave/react-vimeo";
import styles from "./carousel.module.scss";
import react, { useState } from "react";
import cn from "classnames";

const Carousel = ({ items }) => {
  const [showPoster, setShowPoster] = useState();
  const videoClick = () => {
    setShowPoster((showPoster) => !showPoster);
    console.log("play the video or pause the video");
  };
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    centerMode: true,
    arrows: false,
    drag: true,
    variableWidth: true,
    customPaging: function (i) {
      return <a>{items[i].title}</a>;
    },
  };
  return (
    <>
      <div className={styles.carousel}>
        <Slider {...settings}>
          {items.map((item, i) => {
            return (
              <div
                onClick={() => videoClick()}
                className={cn("bg-navy", styles.container)}
                key={i}
              >
                <div className={cn("text-white", styles.videoOverlay)}>
                  Watch Reel
                </div>
                <Vimeo
                  className={cn(
                    "embed-responsive aspect-ratio-16/9",
                    styles.vimeo
                  )}
                  video={item.vimeoid}
                  autopause
                  onPlay={() => videoClick()}
                  onPause={() => videoClick()}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
