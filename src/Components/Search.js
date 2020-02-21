import React, { useState, useEffect } from 'react';
import axios from "axios";
import { withFormik, Form, Field, formikBag } from "formik";



const Search = ({ values, status }) => {

const [data, setData] = useState([])
const [protein, setProtein] = useState('')
const [vegetable, setVegetable] = useState('')
const [other, setOther] = useState('')



const callBack = () => {
    
    setProtein(values.protein)
    setVegetable(values.vegetable)
    setOther(values.other)
    axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${protein},+${vegetable},+${other}&number=10&apiKey=e1c6a0a52d804fa08d866fb8346ee0f2`
      )
      .then(response => {
        setData(response.data);

      })
      .catch(error => console.log(error));
  };

//   useEffect(callBack, [values]);
  
console.log(data)

return(

<div>
    <Form className='search-wrap'>
        <label>
        What Proteins do you have?
            <Field name='protein' type='text' placeholder='Protein'/>
        </label><br/>
        <label>
        What Vegetables do you have?
            <Field name='vegetable' type='text' placeholder='Vegetable'/>
        </label><br/>
        <label>
        What else do you have?
            <Field name='other' type='text' placeholder='What else?'/>
        </label><br/>
        <label>
            <button>Search!</button>
        </label>
    </Form>
    <div>

        {data.map(ele => (
            <img src={ele.image}/>
        ))}
    </div>
</div>
)
}

export default withFormik({
    mapPropsToValues: props => ({
      protein: "",
      vegetable: "",
      other: "",
    }),
    handleSubmit: (values, { resetForm, setStatus } ) => {
    
        console.log("Submitting!", values)
        resetForm()
        // POST body === {}
    
      }
  })(Search);