import React from "react";


function Table() {
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
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>

            </table>
        </div>
    );
}

export default Table;

