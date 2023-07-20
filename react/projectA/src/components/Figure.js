const Figure =(props)=> {
    return(
        <div className="col-md-4">
            <figure className="figure game-figure">
                <img src={`/images/${props.img}`} className="img-fluid rounded game-img figure-img" alt={props.title} />
                <figcaption className="figure-caption text-end">{props.dev }</figcaption>
                <figcaption className="figure-caption text-end">{props.title }</figcaption>
                <figcaption className="figure-caption text-end">{props.yearReleased }</figcaption>
            </figure>
        </div>
    )
} 

export default Figure