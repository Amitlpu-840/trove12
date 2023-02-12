import React from 'react'
import './maths.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import img from '../../assets/mathsImg.jpg';



const Maths = () => {
  return (
    <div>
     
    <div className='heading'>
     Let's study Maths...
    </div>

 <div className='tableMath' style={{overflowX: "auto"}}>
  <Table>
   <Thead>
   <Tr>
     <Th className="tbheadings">Chapters</Th>
     <Th className="tbheadings">Name</Th>
     <Th className="tbheadings">Unit</Th>
   </Tr>
 </Thead>
 <Tbody>
      <Tr>
        <Td className='m'>Chapter 1</Td>
        <Td className='m'>Relations and Functions</Td>
        <th rowSpan="2">Relations and Functions</th>
      </Tr>
      <Tr>
        <Td className='m'>Chapter 2</Td>
        <Td className='m'>Inverse Trigonometric Functions</Td>
      </Tr>
      <Tr>
        <Td className='m'>Chapter 3</Td>
        <Td className='m'>Matrices</Td>
        <th rowSpan="2">Algebra</th>
      </Tr>
      <Tr>
        <Td className='m'>Chapter 4</Td>
        <Td className='m'> Determinants</Td>
      </Tr>
      <Tr>
        <Td className='m'>Chapter 5</Td>
        <Td className='m'> Continuity and Differentiability</Td>
        <th rowSpan="5">Calculus</th>
      </Tr>
      <Tr>
        <Td className='m'>Chapter 6</Td>
        <Td className='m'> Applications of Derivatives</Td>
      </Tr>
      <Tr>
        <Td className='m'>Chapter 7</Td>
        <Td className='m'>Integrals</Td>
      </Tr>
      <Tr>
        <Td className='m'>Chapter 8</Td>
        <Td className='m'>Applications of the Integrals</Td>
      </Tr>
      <Tr>
        <Td className='m'>Chapter 9</Td>
        <Td className='m'>Differential Equations</Td>
      </Tr>
      <Tr>
        <Td className='m'>Chapter 10</Td>
        <Td className='m'>Vectors Algebra</Td>
        <th rowSpan="2">Vectors and Three-Dimensional Geometry</th>
      </Tr>
      <Tr>
        <Td className='m'>Chapter 11</Td>
        <Td className='m'>Three - dimensional Geometry</Td>
      </Tr>
      <Tr>
        <Td className='m'>Chapter 12</Td>
        <Td className='m'>Linear Programming</Td>
        <th rowSpan="1">Linear Programming</th>
      </Tr>

      <Tr>
        <Td className='m'>Chapter 13</Td>
        <Td className='m'> Probability</Td>
        <th rowSpan="1"> Probability</th>
      </Tr>
      


      
      
     
      </Tbody>
  </Table>
  </div>
     <img className='mthImg' src={img} alt="About Icon" />
  </div> 
  
  )
}

export default Maths
