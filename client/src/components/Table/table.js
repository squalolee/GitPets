import React from "react";


function Table(props) {
    return (
        <div>
            <h1>Your Pets: </h1>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Pet</th>
                        <th scope="col">Breed</th>
                        <th scope="col">Location</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Age</th>
                        <th scope="col">Size</th>
                        <th scope="col">More Info</th>
                        {/* <th scope="col">Picture</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        props.searchResults.map(result => {
                            return (
                                <tr>
                                    <td>{result.type}</td>
                                    <td>{result.breeds.primary}</td>
                                    <td>{result.distance}</td>
                                    <td>{result.gender}</td>
                                    <td>{result.age}</td>
                                    <td>{result.size}</td>
                                    <td>{result.description}</td>
                                    {/* <td>{result.primary_photo_cropped.small}</td> */}
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

