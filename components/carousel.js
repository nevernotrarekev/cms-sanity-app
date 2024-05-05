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
        <svg
          width="77"
          height="77"
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41 0.5C18.6239 0.5 0.5 18.6239 0.5 41C0.5 63.3761 18.6239 81.5 41 81.5C63.3761 81.5 81.5 63.3761 81.5 41C81.5 18.6239 63.3761 0.5 41 0.5ZM41 78.5C20.2761 78.5 3.5 61.7239 3.5 41C3.5 20.2761 20.2761 3.5 41 3.5C61.7239 3.5 78.5 20.2761 78.5 41C78.5 61.7239 61.7239 78.5 41 78.5Z"
            fill="#f3ede0"
            stroke="#f3ede0"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.9 52.4L52.1 40.6L34.9 29V52.4Z"
            fill="#f3ede0"
          />
        </svg>
        Watch Reel
      </div>
      <div className={`${styles["single-item-container"]}`}>
        {play ? (
          <div style={{ cursor: "pointer" }}>
            <Vimeo
              className={cn("embed-responsive aspect-ratio-16/9", styles.vimeo)}
              video={item.vimeoid}
              autoplay
              controls
            />
          </div>
        ) : (
          <Vimeo
            className={cn("embed-responsive aspect-ratio-16/9", styles.vimeo)}
            video={item.vimeoid}
            controls={false}
          />
        )}

        <div
          className={`${styles.overlay} ${
            play && styles["is-play"]
          } transition ease-in-out duration-500`}
        ></div>
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
      return (
        <a className={`${styles.paginate} carousel-link`}>{items[i].title}</a>
      );
    },
  };
  return (
    <>
      <div className={styles.carousel}>
        <Slider {...settings}>
          {items.map((item, i) => {
            return <SingleVideoItem key={i} item={item} index={i} />;
          })}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
