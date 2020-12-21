import Slider from "react-slick";
import Vimeo from "@u-wave/react-vimeo";
import styles from "./carousel.module.scss";
import react, { useState } from "react";
import cn from "classnames";

const SingleVideoItem = ({ item, index }) => {
  const [play, setPlay] = useState(false);

  const [showPoster, setShowPoster] = useState();
  const videoClick = () => {
    setShowPoster((showPoster) => !showPoster);
    setPlay(!play);
  };

  const renderVideo = () => (
    <div
      onClick={() => videoClick()}
      className={cn("bg-navy", styles.container)}
      key={index}
    >
      <div className={cn(styles.videoOverlay, showPoster && styles.showPoster)}>
        <img src="/play-icon.png" />
        Watch Reel
      </div>
      <div className={styles["single-item-container"]}>
        {play ? (
          <div style={{ cursor: "pointer" }}>
            <Vimeo
              className={cn("embed-responsive aspect-ratio-16/9", styles.vimeo)}
              video={item.vimeoid}
              controls={false}
              background
            />
          </div>
        ) : (
          <Vimeo
            className={cn("embed-responsive aspect-ratio-16/9", styles.vimeo)}
            video={item.vimeoid}
            controls={false}
          />
        )}

        <div className={styles.overlay}></div>
      </div>
    </div>
  );

  return renderVideo();
};

const Carousel = ({ items }) => {
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
      return <a className={`${styles.paginate} carousel-link`}>{items[i].title}</a>;
    },
  };
  return (
    <>
      <div className={styles.carousel}>
        <Slider {...settings}>
          {items.map((item, i) => {
            return <SingleVideoItem item={item} index={i} />;
          })}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
