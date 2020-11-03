import Slider from "react-slick";
import Vimeo from "@u-wave/react-vimeo";
import styles from "./carousel.module.scss";

const Carousel = ({ items }) => {
  console.log(items);
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
    onInit() {
      console.log("here");
    },
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
              <div className={styles.container} key={i}>
                <Vimeo
                  className="embed-responsive aspect-ratio-16/9"
                  video={item.vimeoid}
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