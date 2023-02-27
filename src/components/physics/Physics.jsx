import React from 'react'
import './physics.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import imgP from '../../assets/phyImg.jpg';

const Physics = () => {
  return (
    <div>
     
    <div className='heading'>
     Let's study Physics...
    </div>

 <div className='tablePhy' style={{overflowX: "auto"}}>
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
        <Td>Chapter 1</Td>
        <Td><a href='https://drive.google.com/file/d/1Vx5nfXygnVJqkJvmOIf3keRJRmVy_rKB/view?usp=sharing' target={'_blank'}>Electric Charges and Fields</a></Td>
        <th rowSpan="2">Electrostatics</th>
      </Tr>
      <Tr>
        <Td>Chapter 2</Td>
        <Td><a href='https://drive.google.com/file/d/1U-ZEIGgc6b32w8YwzOVCKj0dqpSYbMo_/view?usp=sharing' target={'_blank'}>Electrostatic Potential and Capacitance</a></Td>
      </Tr>
      <Tr>
        <Td>Chapter 3</Td>
        <Td> <a href='https://drive.google.com/file/d/1U-ZEIGgc6b32w8YwzOVCKj0dqpSYbMo_/view?usp=sharing' target={'_blank'}> Current Electricity</a></Td>
        <th rowSpan="1">Current Electricity</th>
      </Tr>
      <Tr>
        <Td>Chapter 4</Td>
        <Td><a href='https://drive.google.com/file/d/1Z9NIO7PNaKizQkfc9CBKI3mQ4oXgLEhJ/view?usp=share_link' target={'_blank'}> Moving Charges and Magnetism</a></Td>
        <th rowSpan="2"> Magnetic Effects of Current and Magnetism</th>
      </Tr>
      <Tr>
        <Td>Chapter 5</Td>
        <Td><a href='https://drive.google.com/file/d/1l7DELtc37RBGlCB1-sCz97kMH7rwkTUh/view?usp=share_link' target={'_blank'}> Magnetism and Matter</a></Td>
      </Tr>
      <Tr>
        <Td>Chapter 6</Td>
        <Td><a href='https://drive.google.com/file/d/1v_nYn8Pr5p1ft5lNvy3ySXetpRUxZ0lY/view?usp=share_link' target={'_blank'}> Electromagnetic Induction</a></Td>
        <th rowSpan="2"> Electromagnetic Induction and Alternating Currents</th>
      </Tr>
      <Tr>
        <Td>Chapter 7</Td>
        <Td> <a href='https://drive.google.com/file/d/1_isVZIBchQe5OMpLhitF6YE4O1Hv6p4f/view?usp=share_link' target={'_blank'}> Alternating Current</a></Td>
      </Tr>
      <Tr>
        <Td>Chapter 8</Td>
        <Td><a href='https://drive.google.com/file/d/1r4z9i4hcJpDWzkJC-NHzCCnjZSf1-DEC/view?usp=share_link' target={'_blank'}> Electromagnetic Waves</a></Td>
        <th rowSpan="1"> Electromagnetic Waves</th>
      </Tr>
      <Tr>
        <Td>Chapter 9</Td>
        <Td> Ray Optics and Optical Instruments</Td>
        <th rowSpan="2">Optics</th>
        
      </Tr>
      <Tr>
        <Td>Chapter 10</Td>
        <Td> Wave Optics</Td>
       
      </Tr>     
      <Tr>
        <Td>Chapter 11</Td>
        <Td> Dual Nature of Radiation and Matter</Td>
        <th rowSpan="1"> Dual Nature of Radiation and Matter</th>
      </Tr>
      <Tr>
        <Td>Chapter 12</Td>
        <Td> Atoms</Td>
        <th rowSpan="2"> Atoms and Nuclei</th>
      </Tr>
  
      <Tr>
        <Td>Chapter 13</Td>
        <Td> Nuclei</Td>
      </Tr>
      <Tr>
        <Td>Chapter 14</Td>
    
        <Td> Semiconductor Electronics: Materials, Devices and Simple Circuits</Td>
        <th rowSpan="1"> Electronic Devices</th>
      </Tr>
    </Tbody>
  </Table> 
  
  </div>
     <img className='phyImg' src={imgP} alt="About Icon" />
  </div> 
  
  )
}

export default Physics