import React from 'react'
import './maths.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';



const Maths = () => {
  return (
   <div>
<div className='navbar'>
    <div className='heading'>
        Let's study Maths...
    </div>

    </div>
<div className='table1'>
     <Table>
    <Thead>
      <Tr>
        <Th>Chapters</Th>
        <Th>Name</Th>
        <Th>Marks</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>1</Td>
        <Td>Relations and Functions</Td>
        <Td>8</Td>
      </Tr>
      <Tr>
        <Td>2</Td>
        <Td>Algebra</Td>
        <Td>10</Td>
      </Tr>
      <Tr>
        <Td>3</Td>
        <Td> Calculus</Td>
        <Td> 7</Td>
      </Tr>
      <Tr>
        <Td>4</Td>
        <Td> Vectors and Three – Dimensional Geometry</Td>
        <Td> 14</Td>
      </Tr>
      <Tr>
        <Td>5</Td>
        <Td> Linear Programming</Td>
        <Td> 5</Td>
      </Tr>
      <Tr>
        <Td>6</Td>
        <Td> Probablity</Td>
        <Td> 8</Td>
      </Tr>
      
      
    </Tbody>
  </Table> 
  
  </div> 
  <div className='resources'>

  </div>
  </div>
  )
}

export default Maths
