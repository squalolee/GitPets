import React from "react";
import "./style.css"; 

function Table(props) {
    return (
        <div>
            <h1 className="h1">Your Saved Pets: </h1>
            <table className="table table-hover table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Pet</th>
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">More Info</th>
                        <th scope="col">Link</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map(result => {
                            return (
                                <tr>
                                    <td>{result.type}</td>
                                    <td>{result.name}</td>
                                    <td>{result.gender}</td>
                                    <td>{result.description}</td>
                                    <td>{result.url}</td>
                                </tr>
                            );
                        }) 
                    }
                </tbody>

            </table>
        </div>
    );
}

export default Table;

