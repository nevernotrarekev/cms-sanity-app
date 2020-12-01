import react, { useState } from "react";
import Vimeo from "@u-wave/react-vimeo";
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
  return (
    <>
      <Modal
        open={openUser}
        onClose={handleCloseUser}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
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
            {items && items[overlayItem].playImage && (
              <img
                src={imageBuilder.image(items[overlayItem].playImage).url()}
              />
            )}
            {items && items[overlayItem].vimeoid && (
              <div>
                <Vimeo
                  className="embed-responsive aspect-ratio-16/9"
                  video={items[overlayItem].vimeoid}
                />
              </div>
            )}
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
        breakpointCols={3}
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
                key={`play-item-${index}`}
                onClick={() => handleOpenUser(index)}
              >
                {item.playImage && (
                  <img src={imageBuilder.image(item.playImage).url()} />
                )}
                {item.vimeoid && (
                  <div>
                    <Vimeo
                      className="embed-responsive aspect-ratio-16/9"
                      video={item.vimeoid}
                    />
                  </div>
                )}
              </div>
            );
          })}
      </Masonry>
    </>
  );
};

export default PlayGrid;
