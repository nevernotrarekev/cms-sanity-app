import react, { useState } from "react";
import Vimeo from "@u-wave/react-vimeo";
import { imageBuilder } from "../lib/sanity";
import styles from "./play-grid.module.scss";
import cn from "classnames";
import Masonry from "react-masonry-css";
import Modal from "@material-ui/core/Modal";

const PlayGrid = ({ items }) => {
  const [openUser, setOpenUser] = useState(false);
  const [overlayitem, setOverlayitem] = useState(0);
  const handleOpenUser = (index) => {
    setOpenUser(true);
    setOverlayitem(index);
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
        <div className={styles.overlay}>
          {items[overlayitem].playImage && (
            <img src={imageBuilder.image(items[overlayitem].playImage).url()} />
          )}
          {items[overlayitem].vimeoid && (
            <div>
              <Vimeo
                className="embed-responsive aspect-ratio-16/9"
                video={items[overlayitem].vimeoid}
              />
            </div>
          )}
        </div>
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
                  // index === 8 && "col-start-9 col-span-4"
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
      {/* </div> */}
    </>
  );
};

export default PlayGrid;
