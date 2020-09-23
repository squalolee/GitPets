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







