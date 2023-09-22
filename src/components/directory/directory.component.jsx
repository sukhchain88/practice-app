import CategoryItem from "../category-item/category-item.component"
import './directory.style.css'

const Directory = ({ category }) => {
    return (
        <div className="directory-container">
            {
                category.map((category) => {
                    return (
                        <CategoryItem category={category} key={category.id} />
                    )
                })
            }

        </div>
    )
}

export default Directory