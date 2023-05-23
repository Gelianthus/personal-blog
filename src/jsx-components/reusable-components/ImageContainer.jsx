

function ImageContainer ({imageSrc}) {

    return (
        <div className="image-container darker-grayish-blue-bg">
            <img className="topic-image" src={imageSrc} alt={`Illustration of ${imageSrc}`} />
        </div>
    )
}

export default ImageContainer;