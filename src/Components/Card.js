
const Card = (props) => {
    return (
        <div className="col-md-4 mt-3">
            <div className="card" style={{width:'18 rem'}}>
            <img className="card-img-top" src={props.data.strCategoryThumb} alt="Card" />
            <div className="card-body">
                <h5 className="card-title">{props.data.strCategory}</h5>
                <p className="card-text">Some quick example text to build.</p>
                <button to={props.data.idCategory} class="btn btn-primary" onClick={()=>props.viewMore(props.data.strCategory)}>View More</button>
            </div>
        </div>
        </div>
    )
}

export default Card;