import gallery_exports from '../images/gallery/gallery_exports';

console.log(gallery_exports)

const Gallery = () => {
    return (
        // <div className='container mx-auto px-10 pb-20'>
        <div className='card'>
            <h1 className='text-6xl text-center py-10'>Gallery</h1>
            {/* <div class="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 colums-3"> */}
            {/* <div className="card"> */}
                <div className="card-container">
                    <div className="image-container">
                        {gallery_exports.map(gallery_img =>
                            // <img src={gallery_img} class="col-span-1 object-contain shadow rounded border-none" alt="" />
                            <img src={gallery_img} class="image-contain" alt="" />
                        )}
                    </div>
                </div>
            {/* </div> */}
            {/* <img src={gallery_exports.img1} class="col-span-1 object-contain shadow rounded border-none" alt=""/>
                 <img src={gallery_exports.img2} class="col-span-1 object-contain shadow rounded border-none" alt=""/>
                 <img src={gallery_exports.img3} class="col-span-1 object-contain shadow rounded border-none" alt=""/>
                 */}
        </div>



        // </div>
    );
};

export default Gallery;