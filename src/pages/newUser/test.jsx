import React, { Component } from "react";
import db from "./db";
import "./test.css"
class Test extends Component {

    handelClic = () => {
     
        db.collection('parents').get().then(querySnapshot => {
            querySnapshot.docs.map(doc => {
                const tot = document.getElementById("click")

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
                        
                        heading_2.innerHTML = "Phone";


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
                    row_2_data_2.innerHTML =  doc.data()["phone"];
                    row_2_data_2.classList.add("parent")

                    let row_2_data_3 = document.createElement('td');
                    row_2_data_3.innerHTML =  doc.data()["children_num"];
                    row_2_data_3.classList.add("parent")
                   
                    row_2.appendChild(row_2_data_1);
                    row_2.appendChild(row_2_data_2);
                    row_2.appendChild(row_2_data_3);
                   
                    tbody.appendChild(row_2);
                    
            });
    }); 
        
    }
    render() {
        // Display Function
        window.onload  = this.handelClic();

        return (
          <div>
            <div id="click">
              <table id="table">
                <thead>
                  <tr>
                    <th className="tableth"> Name </th>
                    <th className="tableth"> Phone </th>
                    <th className="tableth"> children_num </th>                   
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        );
    }
}
export default Test;