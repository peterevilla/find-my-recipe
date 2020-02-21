import React, { useState, useEffect } from 'react';
import axios from "axios";
import { withFormik, Form, Field } from "formik";



const Search = props => {
console.log(props.values)
const [data, setData] = useState([])
const [protein, setProtein] = useState(props.values.protein)
const [vegetable, setVegetable] = useState(props.values.vegetable)
const [other, setOther] = useState(props.values.other)



// const callBack = () => {
//     axios
//       .get(
//         `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${protein},+${vegetable},+${other}&number=10&apiKey=e1c6a0a52d804fa08d866fb8346ee0f2`
//       )
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => console.log(error));
//   };

//   useEffect(callBack, []);
  console.log(protein);


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
</div>
)
}

export default withFormik({
    mapPropsToValues: props => ({
      protein: "",
      vegetable: "",
      other: "",
    })
  })(Search);