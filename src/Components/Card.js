
const Card = (props) => {
    return (
        <div className="col-md-4 mt-3">
            <div class="card" style={{width:'18 rem'}}>
            <img class="card-img-top" src={props.data.strCategoryThumb} alt="Card" />
            <div class="card-body">
                <h5 class="card-title">{props.data.strCategory}</h5>
                <p class="card-text">Some quick example text to build.</p>
                <button to={props.data.idCategory} class="btn btn-primary" onClick={()=>props.viewMore(props.data.strCategory)}>View More</button>
            </div>
        </div>
        </div>
    )
}

export default Card;