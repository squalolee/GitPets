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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
}

export default Table;

