import React from 'react'
import './biology.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';



const Biology = () => {
  return (
   <div>
<div className='navbar'>
    <div className='heading'>
        Let's study Biology...
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
        <Td>Reproduction in Organisms</Td>
        <Td>7</Td>
      </Tr>
      <Tr>
        <Td>2</Td>
        <Td>Sexual Reproduction in Flowering Plants</Td>
        <Td>9</Td>
      </Tr>
      <Tr>
        <Td>3</Td>
        <Td> Human Reproduction</Td>
        <Td> 7</Td>
      </Tr>
      <Tr>
        <Td>4</Td>
        <Td> Reproductive Health</Td>
        <Td> 7</Td>
      </Tr>
      <Tr>
        <Td>5</Td>
        <Td> Principles of Inheritance and Variation</Td>
        <Td> 7</Td>
      </Tr>
      <Tr>
        <Td>6</Td>
        <Td> Molecular Basis of Inheritance</Td>
        <Td> 6</Td>
      </Tr>
      <Tr>
        <Td>7</Td>
        <Td> Evolution</Td>
        <Td> 6</Td>
      </Tr>
      <Tr>
        <Td>8</Td>
        <Td> Human Health and Diseases</Td>
        <Td> 8</Td>
      </Tr>
      <Tr>
        <Td>9</Td>
        <Td>  Strategies for Enhancement in Food Production</Td>
        <Td> 6</Td>
      </Tr>
      
      <Tr>
        <Td>10</Td>
        <Td>Microbes in Human Welfare</Td>
        <Td> 7</Td>
      </Tr>
      <Tr>
        <Td>11</Td>
        <Td>Biotechnology Principles and Processes</Td>
        <Td> 7</Td>
      </Tr>
      <Tr>
        <Td>12</Td>
        <Td> Biotechnology and Its Application</Td>
        <Td> 7</Td>
      </Tr>
      <Tr>
        <Td>13</Td>
        <Td>Organisms and Populations</Td>
        <Td> 7</Td>
      </Tr>
      <Tr>
        <Td>14</Td>
        <Td>Ecosystem</Td>
        <Td> 7</Td>
      </Tr>
      <Tr>
        <Td>15</Td>
        <Td>Biodiversity and Conservation</Td>
        <Td> 7</Td>
      </Tr>
      <Tr>
        <Td>16</Td>
        <Td>Environmental Issues</Td>
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

export default Biology
