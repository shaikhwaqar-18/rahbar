import React from 'react'

function Students(props) {
  return (
    <div className="students">
        <div className='text'>
        <img src={props.pic}></img>
        <h2>Name: {props.name}</h2>
        <h2>Roll No.: {props.rollno}</h2>
        <h2>Date of Birth: {props.dob}</h2>
        <h2>Institution: {props.school}</h2></div>
        <table>
            <colgroup>
            <col span={2} style={{backgroundColor: "green"}}></col>
            <col span={2} style={{backgroundColor: "white"}}></col>
            <col span={2} style={{backgroundColor: "orange"}}></col>
            </colgroup>
            <caption>MARKS STATEMENT</caption>
            <thead>
                <tr>
                    <th>SUB CODE</th>
                    <th>SUBJECT</th>
                    <th>THEORY</th>
                    <th>PRACTICAL</th>
                    <th>MAX. MARKS</th>
                    <th>REMARK</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.codeeng}</td>
                    <td>{props.subeng}</td>
                    <td>{props.eng}</td>
                    <td>{props.en}</td>
                    <td>{props.max}</td>
                    <td>{props.remark1}</td>
                </tr>
                <tr>
                    <td>{props.codehindi}</td>
                    <td>{props.subhindi}</td>
                    <td>{props.hindi}</td>
                    <td>{props.hin}</td>
                    <td>{props.max}</td>
                    <td>{props.remark2}</td>
                </tr>
                <tr>
                    <td>{props.codemaths}</td>
                    <td>{props.submaths}</td>
                    <td>{props.maths}</td>
                    <td>{props.math}</td>
                    <td>{props.max}</td>
                    <td>{props.remark1}</td>
                </tr>
                <tr>
                    <td>{props.codesci}</td>
                    <td>{props.subsci}</td>
                    <td>{props.sci}</td>
                    <td>{props.scien}</td>
                    <td>{props.max}</td>
                    <td>{props.remark1}</td>
                </tr>
                <tr>
                    <td>{props.codesst}</td>
                    <td>{props.subsst}</td>
                    <td>{props.sst}</td>
                    <td>{props.ssc}</td>
                    <td>{props.max}</td>
                    <td>{props.remark3}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan={2}>Grand Total</th>
                    <th colSpan={2}>Result</th>
                    <th colSpan={2}>Dated</th>
                </tr>
                <tr>
                    <td colSpan={2}>{props.gt}</td>
                    <td colSpan={2}>{props.result}</td>
                    <td colSpan={2}>{props.dated}</td>
                </tr>
            </tfoot>
        </table>
        <h3> Controller Examination</h3>
    </div>
  )
}

export default Students