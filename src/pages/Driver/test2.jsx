import React, { Component } from "react";
import db from "../newUser/db"; 


class Test2 extends Component {

    handelClic2 = () => {
    

        db.collection('drivers').get().then(querySnapshot => {
            querySnapshot.docs.map(doc => {
                const tot = document.getElementById("toto")

                let table = document.getElementById("table");
                
                let tbody = document.createElement('tbody');

                
                table.appendChild(tbody);

                // Adding the entire table to the body tag
                tot.appendChild(table);

                // Creating and adding data to second row of the table
                    let row_2 = document.createElement('tr');
                   
                    let row_2_data_1 = document.createElement('td');
                    row_2_data_1.innerHTML = doc.data()["name"];
                    row_2_data_1.classList.add("parent")

                    let row_2_data_2 = document.createElement('td');
                    row_2_data_2.innerHTML =  doc.data()["mobile"];
                    row_2_data_2.classList.add("parent")

                    let row_2_data_3 = document.createElement('td');
                    row_2_data_3.innerHTML =  doc.data()["car_type"];
                    row_2_data_3.classList.add("parent")
                   
                    let row_2_data_5 = document.createElement('td');
                    row_2_data_5.innerHTML =  doc.data()["zone_area"];
                    row_2_data_5.classList.add("parent")

                    row_2.appendChild(row_2_data_1);
                    row_2.appendChild(row_2_data_2);
                    row_2.appendChild(row_2_data_3);
                    row_2.appendChild(row_2_data_5);
                    tbody.appendChild(row_2);
                   
            });
        }); 


    }
    render() {

        window.onload  = this.handelClic2();

        return (
            <div>
                <div id="toto">
                    <table id="table">
                        <thead>
                            <tr>
                                <th className="tableth"> Name </th>
                                <th className="tableth"> Mobile </th>
                                <th className="tableth"> Car_type </th>
                                <th className="tableth"> zone_area </th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    }
}
export default Test2;

