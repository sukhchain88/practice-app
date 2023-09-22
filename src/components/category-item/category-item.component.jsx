import './category-item.style.css'

const CategoryItem = ({ category }) => {
    const { title, imageUrl } = category
    return (
        <div className="categories-container" >
            <div className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            ></div>
            <div className="category-body-container">
                <h1>{title}</h1>
                <p>Shop Now</p>
            </div>
        </div>
    )
}


export default CategoryItem
