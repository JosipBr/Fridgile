import Arrow from "../../recipesimages/arrow.svg"
import "./MissingAndFound.css"

export default function MissingAndFound(props) {
    return(
        <div className="missingandfound">
            <p>Missing: </p>
            <p>Found: </p>
            <div className="arrow">
                <img src={Arrow} alt="arrow"></img>
            </div>
        </div>
    )

}