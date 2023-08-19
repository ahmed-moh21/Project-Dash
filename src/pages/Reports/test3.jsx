import React, { Component } from "react";
import db from "../newUser/db";

class Test3 extends Component {

    handelClic3 = () => {
        db.collection('report').get().then(querySnapshot => {
            querySnapshot.docs.map(doc => {
               
                const tot = document.getElementById("toto")

                let table = document.getElementById("table");
                table.classList.add("parentTable");
               
                let tbody = document.createElement('tbody');
                tbody.classList.add("parentBody");
                
                table.appendChild(tbody);

                // Adding the entire table to the body tag
                tot.appendChild(table);
                
                // Creating and adding data to first row of the table
                        let row_1 = document.createElement('tr');

                        let heading_1 = document.createElement('th');
                        
                        heading_1.innerHTML = "Name";


                        let heading_2 = document.createElement('th');
                        
                        heading_2.innerHTML = "mobile";


                        let heading_3 = document.createElement('th');
                        
                        heading_3.innerHTML = "children_num";
                        

                        row_1.appendChild(heading_1);
                        row_1.appendChild(heading_2);
                        row_1.appendChild(heading_3);
                      
                       
                // Creating and adding data to second row of the table
                    let row_2 = document.createElement('tr');
                    
                    let row_2_data_1 = document.createElement('td');
                    row_2_data_1.innerHTML = doc.data()["name"];
                    row_2_data_1.classList.add("parent")

                    let row_2_data_2 = document.createElement('td');
                    row_2_data_2.innerHTML =  doc.data()["mobile"];
                    row_2_data_2.classList.add("parent")

                    let row_2_data_3 = document.createElement('td');
                    row_2_data_3.innerHTML =  doc.data()["children"];
                    row_2_data_3.classList.add("parent")

                    let row_2_data_4 = document.createElement('td');
                    row_2_data_4.innerHTML =  doc.data()["notes"];
                    row_2_data_4.classList.add("parent")

                    let row_2_data_5 = document.createElement('td');
                    row_2_data_5.innerHTML =  doc.data()["area"];
                    row_2_data_5.classList.add("parent")
                   
                    row_2.appendChild(row_2_data_1);
                    row_2.appendChild(row_2_data_2);
                    row_2.appendChild(row_2_data_3);
                    row_2.appendChild(row_2_data_4);
                    row_2.appendChild(row_2_data_5);
                   
                    tbody.appendChild(row_2);

            });
        });
    }
    render() {

        window.onload  = this.handelClic3();

        return (
            <div>
                <div id="toto">
                    <table id="table">
                        <thead>
                            <tr>
                                <th className="tableth"> Name </th>
                                <th className="tableth"> Mobile </th>
                                <th className="tableth"> children </th>
                                <th className="tableth"> Notes </th>
                                <th className="tableth"> Area </th>
                               
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    }
}
export default Test3;

