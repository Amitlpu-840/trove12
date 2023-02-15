import { Routes, Route, useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import Physics from './physics/Physics';

const mystyle = {

    color: "white",
    backgroundColor: "#008CBA",
    border: "none",
    padding: "4px",
    fontFamily: "Arial",
    marginTop: "170px",
    marginLeft: "30px",
    height: "50px",
    width: "280px",
    cursor: "pointer",
    borderRadius: "4px"

};



const Cards = [

    {
        id: 1,
        subject: "Physics",
        title: "let's study physics",
        desc: "Study with a arranged material of Physics including notes, pdf, videos",
        imagee: 'phyImg'


    },
    {
        id: 2,
        subject: "Chemistry",
        title: "let's study chemistry",
        desc: "Study with a arranged material of chemistry including notes, pdf, videos",
        // img: "https://www.vedantu.com/seo/content-images/bc692335-2c03-4559-9cf0-dff766298eef.jpg"
        //button: <button style={mystyle}>Click here!</button>
        imagee: 'chemImg'
    },
    {
        id: 3,
        subject: "Maths",
        title: "let's study Maths",
        desc: "Study with a arranged material of Maths including notes, pdf, videos",
        //button: <button style={mystyle}>Click here!</button>
        imagee: 'mathsImg'

    },
    {
        id: 4,
        subject: "Biology",
        title: "let's study Biology",
        desc: "Study with a arranged material of Biology including notes, pdf, videos",
        //button: <button style={mystyle}>Click here!</button>
        imagee: 'bioImg'

    },
]

export default Cards