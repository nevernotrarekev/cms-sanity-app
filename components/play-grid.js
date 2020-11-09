import Vimeo from "@u-wave/react-vimeo";
import { imageBuilder } from "../lib/sanity";
import styles from "./play-grid.module.scss";
import cn from "classnames";

const PlayGrid = ({ items }) => {
  console.log(items);
  const classes = {
    playGridItem: `${styles.playGridItem}`,
  };
  return (
    <>
      <div className="grid grid-cols-12 gap-8">
        {items.length > 0 &&
          items.map((item, index) => {
            return (
              <div
                className={cn(
                  styles.playGridItem,
                  item.vimeoid ? "col-span-8" : "col-span-4",
                  index === 8 && "col-start-9 col-span-4"
                )}
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
      </div>
    </>
  );
};

export default PlayGrid;
