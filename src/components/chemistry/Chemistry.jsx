import React from 'react'
import './chemistry.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';



const Chemistry = () => {
  return (
   <div>
<div className='navbar'>
    <div className='heading'>
        Let's study Chemistry...
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
        <Td>Solutions</Td>
        <Td>7</Td>
      </Tr>
      <Tr>
        <Td>2</Td>
        <Td>Electrochemistry</Td>
        <Td>9</Td>
      </Tr>
      <Tr>
        <Td>3</Td>
        <Td> Chemical Kinetics</Td>
        <Td> 7</Td>
      </Tr>
      <Tr>
        <Td>4</Td>
        <Td> d -and f -Block Elements</Td>
        <Td> 7</Td>
      </Tr>
      <Tr>
        <Td>5</Td>
        <Td> Coordination Compounds</Td>
        <Td> 7</Td>
      </Tr>
      <Tr>
        <Td>6</Td>
        <Td> Haloalkanes and Haloarenes</Td>
        <Td> 6</Td>
      </Tr>
      <Tr>
        <Td>7</Td>
        <Td> Alcohols, Phenols and Ethers</Td>
        <Td> 6</Td>
      </Tr>
      <Tr>
        <Td>8</Td>
        <Td> Aldehydes, Ketones and Carboxylic Acids</Td>
        <Td> 8</Td>
      </Tr>
      <Tr>
        <Td>9</Td>
        <Td> Amines</Td>
        <Td> 6</Td>
      </Tr>
      
      <Tr>
        <Td>10</Td>
        <Td> Biomolecules</Td>
        <Td> 7</Td>
      </Tr>
     
      
    </Tbody>
  </Table> 
  
  </div> 
  <div className='resources'>

  </div>
  </div>
  )
}

export default Chemistry
