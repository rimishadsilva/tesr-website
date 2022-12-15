import React from "react";
import { Gallery } from "./Gallery";
import gallery_exports from '../images/gallery/gallery_exports';


export const DisplayPhotos = () => {

  return (
    <div className="displayCard">
      {gallery_exports?.map(gallery_img => 
    //   {
    //     return (
          <Gallery
            imageurl={gallery_img}
          />
    //     );
    //   }
      )}
    </div>
  );
};

// export default CardsDisplay;