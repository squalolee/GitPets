import React, { Component } from "react";
import "./style.css";
import ClickItem from "../ClickItem/clickitem"; 

class ResultsCard extends Component {
    



    render() {
        return (
            <div>
                {
                    this.props.searchResults.map(result => {
                        return (
                            <ClickItem result={result}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default ResultsCard;




// function ResultsCard(props) {
//     return (
//         <div>
//             {
//                 props.searchResults.map(result => {
//                     return (
//                         <div>
//                             <div className="card item">
//                                 <div className="img-container">
//                                     <img alt={result.name} src={result.primary_photo_cropped} />
//                                 </div>
//                                 <button className="favoriteBtn">
//                                     <img src="https://img.icons8.com/nolan/50/likes-folder.png"/>
//                                 </button>
//                                 <div className="content">
//                                     <ul>
//                                         <li>
//                                             <strong>Name:</strong> {result.name}
//                                         </li>
//                                         <li>
//                                             <strong>Age:</strong> {result.age}
//                                         </li>
//                                         <li>
//                                             <strong>Description:</strong> {result.description}
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })
//             }

//         </div>
//     );
// }

// export default ResultsCard;




