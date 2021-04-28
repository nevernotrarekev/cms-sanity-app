import { useState } from "react";
import Vimeo from "@u-wave/react-vimeo";
import YouTube from "@u-wave/react-youtube";
import { imageBuilder } from "../lib/sanity";
import styles from "./play-grid.module.scss";
import cn from "classnames";
import Masonry from "react-masonry-css";
import Modal from "@material-ui/core/Modal";

const PlayGrid = ({ items }) => {
  const [openUser, setOpenUser] = useState(false);
  const [overlayItem, setOverlayItem] = useState(0);
  const handleOpenUser = (index) => {
    setOpenUser(true);
    setOverlayItem(index);
  };

  const handleCloseUser = () => {
    setOpenUser(false);
  };
  const classes = {
    playGridItem: `${styles.playGridItem}`,
  };
  const breakpointColumnsObj = {
    default: 3,
    500: 1,
  };
  return (
    <>
      <Modal
        open={openUser}
        onClose={handleCloseUser}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{backgroundColor: 'rgba(0,0,0,0.6)'}}
      >
        <>
          <div
            className={styles.previous}
            onClick={() =>
              setOverlayItem(
                overlayItem - 1 < 0 ? items.length - 1 : overlayItem - 1
              )
            }
          />
          <div
            className={cn(
              styles.overlay,
              items && items[overlayItem].vimeoid && styles.overlayVideo
            )}
          >
            {items &&
              items[overlayItem].playImage &&
              items &&
              !items[overlayItem].vimeoid && (
                <img
                  src={imageBuilder.image(items[overlayItem].playImage).url()}
                />
              )}
            {items && items[overlayItem].vimeoid && (
              <div>
                {items[overlayItem].vimeoid.includes("vimeo") ? (
                  <Vimeo
                    className="embed-responsive aspect-ratio-16/9"
                    video={items[overlayItem].vimeoid}
                    autoplay
                  />
                ) : (
                  <div className="embed-responsive aspect-ratio-16/9">
                    <YouTube video={items[overlayItem].vimeoid} autoplay />
                  </div>
                )}
              </div>
            )}

            <div className={styles.caption}>{items[overlayItem].caption}</div>
          </div>
          <div
            className={styles.next}
            onClick={() =>
              setOverlayItem(
                overlayItem < items.length - 1 ? overlayItem + 1 : 0
              )
            }
          />
        </>
      </Modal>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {items.length > 0 &&
          items.map((item, index) => {
            return (
              <div
                className={cn(
                  styles.playGridItem,
                  item.vimeoid ? "col-span-8" : "col-span-4"
                )}
                key={`play-item-${item._key}`}
                onClick={() => handleOpenUser(index)}
              >
                {item.playImage && (
                  <div
                    className={styles.bg}
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={imageBuilder.image(item.playImage).format('jpg').url()} />
                    {item.vimeoid && (
                      <img
                        style={{
                          position: "absolute",
                          zIndex: 1,
                          height: 60,
                          width: 60,
                        }}
                        className={styles.playIcon}
                        src="/play-icon.png"
                      />
                    )}
                  </div>
                )}
                {/* {item.vimeoid && (
                  <div>
                    <Vimeo
                      className="embed-responsive aspect-ratio-16/9"
                      video={item.vimeoid}
                    />
                  </div>
                )} */}
              </div>
            );
          })}
      </Masonry>
    </>
  );
};

export default PlayGrid;
