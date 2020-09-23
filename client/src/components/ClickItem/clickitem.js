import React, { Component } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

class ClickItem extends Component {

    state = {
        favorite: false
    };

    handleFavoriteClick = event => {
        event.preventDefault();

        const dataKey = event.target.getAttribute("data-key");
        this.setState({
            favorite: true
        }, () => {
            Axios.post("/api/favorite", {
                favorite: this.state.favorite,
                searchid: dataKey
            })
                .catch(function (error) {
                    console.log(error);
                });
        });

    }

    // <i class="far fa-heart"></i>

    render() {
        const element = <FontAwesomeIcon icon={faHeart} data-key={this.props.result.id} />
        const element2 = <FontAwesomeIcon icon={faStar} data-key={this.props.result.id} />
        return (

            <div>
                <div className="card item">
                    <div className="img-container">
                        <img alt={this.props.result.name} src={this.props.result.primary_photo_cropped && JSON.parse(JSON.stringify(this.props.result.primary_photo_cropped.full))} />
                    </div>
                    <button className="favoriteBtn" onClick={this.handleFavoriteClick} data-key={this.props.result.id}>
                        {
                            this.state.favorite ? element2 : element
                        }

                    </button>
                    <div className="content">
                        <a className="card-content" href={this.props.result.url} target="blank">
                            <ul>
                                <li>
                                    <strong>Name:</strong> {this.props.result.name}
                                </li>
                                <li>
                                    <strong>Age:</strong> {this.props.result.age}
                                </li>
                                <li>
                                    <strong>Description:</strong> {this.props.result.description}
                                </li>
                            </ul>
                        </a>
                    </div>
                </div>
            </div>

        )
    }


}
export default ClickItem;

