import React from 'react'
import './chemistry.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
// import Bio from '../assets/bio.jpg';
import Main3 from '../../assets/chemImg.jpg'



const Chemistry = () => {
  return (
   <div>
     
       <div className='headingChem'>
        Let's study Chemistry...
       </div>

    <div className='tableChem' style={{overflowX: "auto"}}>
     <Table>
      <Thead>
      <Tr>
        <Th className="tbheadings">Chapters</Th>
        <Th className="tbheadings">Name</Th>
        <Th className="tbheadings">Marks</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td className='c'>Chapter 1</Td>
        <Td className='c'><a href='https://drive.google.com/file/d/1OrL2M8VT88srKFQ4e-KNhYRK12kLloeV/view?usp=sharing' target="_blank">Solution</a></Td>
        <Td className='c'>7</Td>
      </Tr>
      <Tr>
        <Td className='c'>Chapter 2</Td>
        <Td className='c'><a href='https://drive.google.com/file/d/1jVvZ1VPWlhmbP_dHeyyPk0gUUj9rA4n0/view?usp=sharing' target="_blank">Electrochemistry</a></Td>
        <Td className='c'>9</Td>
      </Tr>
      <Tr>
        <Td className='c'>Chapter 3</Td>
        <Td className='c'><a href='https://drive.google.com/file/d/1z65Q9uZXO3NJAwynd5BsMPQzf7xXlWLy/view?usp=sharing' target="_blank">Chemical Kinetics</a></Td>
        <Td className='c'>7</Td>
      </Tr>
      <Tr>
        <Td className='c'>Chapter 4</Td>
        <Td className='c'> <a href='https://drive.google.com/file/d/1Ssv-p7wqB1RiC79ivjHZnkSJGphYSIBL/view?usp=sharing' target="_blank">d-and f-Block Elements</a></Td>
        <Td className='c'>7</Td>
      </Tr>
      <Tr>
        <Td className='c'>Chapter 5</Td>
        <Td className='c'> <a href='https://drive.google.com/file/d/1Fi--dBTtQC7GLSqYhRC9q1iS1-7j8Wsx/view?usp=sharing' target="_blank">Coordination Compounds</a></Td>
        <Td className='c'>7</Td>
      </Tr>
      <Tr>
        <Td className='c'>Chapter 6</Td>
        <Td className='c'> <a href='https://drive.google.com/file/d/1mLDR5X6Q8bETYhLQjMkrUaf4vdkEr-rx/view?usp=sharing' target="_blank">Haloalkanes and Haloarenes</a></Td>
        <Td className='c'>6</Td>
      </Tr>
      <Tr>
        <Td className='c'>Chapter 7</Td>
        <Td className='c'> <a href='https://drive.google.com/file/d/1WNMwYlKoM9wsMeVyABBy8a3huROunttM/view?usp=sharing' target="_blank">Alcohols, Phenols and Ethers</a></Td>
        <Td className='c'>6</Td>
      </Tr>
      <Tr>
        <Td>Chapter 8</Td>
        <Td> <a href='https://drive.google.com/file/d/1Pj7Ny0AncNI4yCXMZCwzpZxz1UmUAFXc/view?usp=sharing' target="_blank">Aldehydes, Ketones and Carboxylic Acids</a></Td>
        <Td>8</Td>
      </Tr>
      <Tr>
        <Td className='c'>Chapter 9</Td>
        <Td className='c'> <a href='https://drive.google.com/file/d/1MZjxpSsez4BOQIp6C4ZA9LBpMCdtwB2T/view?usp=sharing' target="_blank"> Amines</a></Td>
        <Td className='c'>6</Td>
      </Tr>
      
      <Tr>
        <Td className='c'>Chapter 10</Td>
        <Td className='c'> <a href='https://drive.google.com/file/d/1o073y87Upaz5nSwkDn6VNgHpJsyFpCX9/view?usp=sharing' target="_blank">Biomolecules</a></Td>
        <Td className='c'>7</Td>
      </Tr>
    </Tbody>
  </Table>
  </div>
     <img className='chem' src={Main3} alt="About Icon" />
  </div> 
  
  )
}

export default Chemistry
