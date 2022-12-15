import "../components/gallery/gallery.css";

export function Gallery({ imageurl }) {

    return (
        // <Link to={`/movie/${id}`}>
        // <div className="displayCard-div">
            <div className="card">
                <div className="card-container">
                    <div className="image-container">
                        <img src={imageurl} alt="" />
                    </div>
                </div>
            </div>
        // </div>
        //  </Link> 
    );
}