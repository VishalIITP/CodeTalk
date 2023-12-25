import React from "react";
// import lbStyles from "../Leaderboard/Leaderboard.module.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Leaderboard.module.css"
import { green } from "@mui/material/colors";
const LeaderBoard=()=>{

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }


    const rows = [
        createData('VISHAL IITP', 159, 6.0, 24, 4.0),
        createData('DIXIT', 237, 9.0, 37, 4.3),
        createData('SHARMA', 262, 16.0, 24, 6.0),
        createData('RAGHAV', 305, 3.7, 67, 4.3),
        createData('HIMANSHU', 356, 16.0, 49, 3.9),
      ];


    return (
        <>




<div class="table" id="customers_table">


        <section class="table__header">
            {/* <h1>LE</h1> */}
            <div class="input-group">
                <img src="images/search.png" alt=""/>
            </div>
            {/* <div class="export__file">
                <label for="export-file" class="export__file-btn" title="Export File"></label>
                <input type="checkbox" id="export-file"/>
                <div class="export__file-options">
                    <label>Export As &nbsp; &#10140;</label>
                    <label for="export-file" id="toPDF">PDF <img src="images/pdf.png" alt=""/></label>
                    <label for="export-file" id="toJSON">JSON <img src="images/json.png" alt=""/></label>
                    <label for="export-file" id="toCSV">CSV <img src="images/csv.png" alt=""/></label>
                    <label for="export-file" id="toEXCEL">EXCEL <img src="images/excel.png" alt=""/></label>
                </div>
            </div> */}
        </section>
        <section class="table__body">
            <table>
                <thead>
                    <tr>
                        <th> CODETALK Id <span class="icon-arrow"></span></th>
                        <th> NAME<span class="icon-arrow"></span></th>
                        <th> Location <span class="icon-arrow"></span></th>
                        <th>  RATING<span class="icon-arrow"></span></th>
                        <th> DESIGNATION <span class="icon-arrow"></span></th>
                        <th> QUESTIONS SOLVED <span class="icon-arrow"></span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> 1 </td>
                        <td> <img src="images/Zinzu Chan Lee.jpg" alt=""/>Zinzu Chan Lee</td>
                        <td> Seoul </td>
                        <td> 1700 </td>
                        <td>
                            <h4 class="status delivered">KNIGHT</h4>
                        </td>
                        <td> <strong> 212</strong></td>
                    </tr>
                    <tr>
                        <td> 2 </td>
                        <td><img src="images/Jeet Saru.jpg" alt=""/> Jeet Saru </td>
                        <td> Kathmandu </td>
                        <td> 1500 </td>
                        <td>
                            <h4 class="status cancelled">GUARDIAN</h4>
                        </td>
                        <td> <strong>312</strong> </td>
                    </tr>
                    <tr>
                        <td> 3</td>
                        <td><img src="images/Sonal Gharti.jpg" alt=""/> Sonal Gharti </td>
                        <td> Tokyo </td>
                        <td>1450  </td>
                        <td>
                            <h4 class="status shipped">GUARDIN</h4>
                        </td>
                        <td> <strong>54</strong> </td>
                    </tr>
                    <tr>
                        <td> 4</td>
                        <td><img src="images/Alson GC.jpg" alt=""/> Alson GC </td>
                        <td> New Delhi </td>
                        <td> 1300 </td>
                        <td>
                            <h4 class="status delivered">PUPIL</h4>
                        </td>
                        <td> <strong>234</strong> </td>
                    </tr>
                    <tr>
                        <td> 5</td>
                        <td><img src="images/Sarita Limbu.jpg" alt=""/> Sarita Limbu </td>
                        <td> Paris </td>
                        <td> 1200 </td>
                        <td>
                            <h4 class="status pending">KNIGHT</h4>
                        </td>
                        <td> <strong>234</strong> </td>
                    </tr>
                    <tr>
                        <td> 6</td>
                        <td><img src="images/Alex Gonley.jpg" alt=""/> Alex Gonley </td>
                        <td> London </td>
                        <td> 1190 </td>
                        <td>
                            <h4 class="status cancelled">KNIGHT</h4>
                        </td>
                        <td> <strong>234</strong> </td>
                    </tr>
                    <tr>
                        <td> 7</td>
                        <td><img src="images/Alson GC.jpg" alt=""/> Jeet Saru </td>
                        <td> New York </td>
                        <td> 1180 </td>
                        <td>
                            <h4 class="status delivered">KNIGHT</h4>
                        </td>
                        <td> <strong>234</strong> </td>
                    </tr>
                    <tr>
                        <td> 8</td>
                        <td><img src="images/Sarita Limbu.jpg" alt=""/> Aayat Ali Khan </td>
                        <td> Islamabad </td>
                        <td> 1100 </td>
                        <td>
                            <h4 class="status pending">KNIGHT</h4>
                        </td>
                        <td> <strong>234</strong> </td>
                    </tr>
                    <tr>
                        <td> 9</td>
                        <td><img src="images/Alex Gonley.jpg" alt=""/> Alson GC </td>
                        <td> Dhaka </td>
                        <td> 1001 </td>
                        <td>
                            <h4 class="status cancelled">KNIGHT</h4>
                        </td>
                        <td> <strong>234</strong> </td>
                    </tr>
                    <tr>
                        <td> 9</td>
                        <td><img src="images/Alex Gonley.jpg" alt=""/> Alson GC </td>
                        <td> Dhaka </td>
                        <td> 991</td>
                        <td>
                            <h4 class="status cancelled">KNIGHT</h4>
                        </td>
                        <td> <strong>234</strong> </td>
                    </tr>
                    <tr>
                        <td> 9</td>
                        <td><img src="images/Alex Gonley.jpg" alt=""/> Alson GC </td>
                        <td> Dhaka </td>
                        <td> 950 </td>
                        <td>
                            <h4 class="status cancelled">KNIGHT</h4>
                        </td>
                        <td> <strong>249</strong> </td>
                    </tr>
                    <tr>
                        <td> 9</td>
                        <td><img src="images/Alex Gonley.jpg" alt=""/> Alson GC </td>
                        <td> Dhaka </td>
                        <td> 947 </td>
                        <td>
                            <h4 class="status cancelled">Cancelled</h4>
                        </td>
                        <td> <strong>29</strong> </td>
                    </tr>
                    <tr>
                        <td> 9</td>
                        <td><img src="images/Alex Gonley.jpg" alt=""/> Alson GC </td>
                        <td> Dhaka </td>
                        <td> 911 </td>
                        <td>
                            <h4 class="status cancelled">Cancelled</h4>
                        </td>
                        <td> <strong>499</strong> </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>





        
        </>
    )
}

export default LeaderBoard;