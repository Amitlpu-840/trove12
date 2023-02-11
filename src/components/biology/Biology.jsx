import React from 'react'
import './biology.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
// import Bio from '../assets/bio.jpg';
import Main3 from '../../assets/bioImg.jpg'



const Biology = () => {
  return (
   <div>
     
       <div className='heading'>
        Let's study Biology...
       </div>

    <div className='table1' style={{overflowX: "auto"}}>
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
        <Td><a href='https://drive.google.com/file/d/1OrL2M8VT88srKFQ4e-KNhYRK12kLloeV/view?usp=sharing' target="_blank">Reproduction in Organisms</a></Td>
        <th rowspan="4">Reproduction</th>
      </Tr>
      <Tr>
        <Td>Chapter 2</Td>
        <Td><a href='https://drive.google.com/file/d/1jVvZ1VPWlhmbP_dHeyyPk0gUUj9rA4n0/view?usp=sharing' target="_blank">Sexual Reproduction in Flowering Plants</a></Td>
        
      </Tr>
      <Tr>
        <Td>Chapter 3</Td>
        <Td><a href='https://drive.google.com/file/d/1z65Q9uZXO3NJAwynd5BsMPQzf7xXlWLy/view?usp=sharing' target="_blank">Human Reproduction</a></Td>
       
      </Tr>
      <Tr>
        <Td>Chapter 4</Td>
        <Td> <a href='https://drive.google.com/file/d/1Ssv-p7wqB1RiC79ivjHZnkSJGphYSIBL/view?usp=sharing' target="_blank">Reproductive Health</a></Td>
        
      </Tr>
      <Tr>
        <Td>Chapter 5</Td>
        <Td> <a href='https://drive.google.com/file/d/1Fi--dBTtQC7GLSqYhRC9q1iS1-7j8Wsx/view?usp=sharing' target="_blank">Principles of Inheritance and Variation</a></Td>
        <th rowspan="3">Genetics and Evolution</th>
      </Tr>
      <Tr>
        <Td>Chapter 6</Td>
        <Td> <a href='https://drive.google.com/file/d/1mLDR5X6Q8bETYhLQjMkrUaf4vdkEr-rx/view?usp=sharing' target="_blank">Molecular Basis of Inheritance</a></Td>
      </Tr>
      <Tr>
        <Td>Chapter 7</Td>
        <Td> <a href='https://drive.google.com/file/d/1WNMwYlKoM9wsMeVyABBy8a3huROunttM/view?usp=sharing' target="_blank">Evolution</a></Td>
      </Tr>
      <Tr>
        <Td>Chapter 8</Td>
        <Td> <a href='https://drive.google.com/file/d/1Pj7Ny0AncNI4yCXMZCwzpZxz1UmUAFXc/view?usp=sharing' target="_blank"> Human Health and Diseases</a></Td>
        <th rowspan="3">Biology and Human Welfare</th>
      </Tr>
      <Tr>
        <Td>Chapter 9</Td>
        <Td> <a href='https://drive.google.com/file/d/1MZjxpSsez4BOQIp6C4ZA9LBpMCdtwB2T/view?usp=sharing' target="_blank">  Strategies for Enhancement in Food Production</a></Td>
      </Tr>
      
      <Tr>
        <Td>Chapter 10</Td>
        <Td> <a href='https://drive.google.com/file/d/1o073y87Upaz5nSwkDn6VNgHpJsyFpCX9/view?usp=sharing' target="_blank">Microbes in Human Welfare</a></Td>
        
      </Tr>
      <Tr>
        <Td>Chapter 11</Td>
        <Td> <a href='https://drive.google.com/file/d/1NaELJsok23RGCiUS8OUFgt3iS5nl9TW6/view?usp=sharing' target="_blank">Biotechnology Principles and Processes</a></Td>
        <th rowspan="2">Biotechnology and its Applications</th>
      </Tr>
      <Tr>
        <Td>Chapter 12</Td>
        <Td> <a href='https://drive.google.com/file/d/1Ac1R0kt2ceG4uN2DRIIazwEna81sEZWM/view?usp=sharing' target="_blank">Biotechnology and Its Application</a></Td>
      </Tr>
      <Tr>
        <Td>Chapter 13</Td>
        <Td> <a href='https://drive.google.com/file/d/1Q0o29V21qP0KEUmDpbZJ5GTpzKPkPCEC/view?usp=sharing' target="_blank">Organisms and Populations</a></Td>
        <th rowspan="4">Ecology and Environment</th>
      </Tr>
      <Tr>
        <Td>Chapter 14</Td>
        <Td> <a href='https://drive.google.com/file/d/1L0xzaA_Jmqcl87bi0zXXPhjsiFt4JYhL/view?usp=sharing' target="_blank">Ecosystem</a></Td>
      </Tr>
      <Tr>
        <Td>Chapter 15</Td>
        <Td> <a href='https://drive.google.com/file/d/1u-fnIKZEkqxoV314WMOiUAjSiS1i0YD8/view?usp=sharing' target="_blank">Biodiversity and Conservation</a></Td>
      </Tr>
      <Tr>
        <Td>Chapter 16</Td>
        <Td> <a href='https://drive.google.com/file/d/13YPz1ZOJxJz94YJIOWSngOUu1WGuGFuq/view?usp=sharing' target="_blank">Environmental Issues</a></Td>
        
      </Tr>

     
      
    </Tbody>
  </Table>
  </div>
     <img className='bio' src={Main3} alt="About Icon" />
  </div> 
  
  )
}

export default Biology
