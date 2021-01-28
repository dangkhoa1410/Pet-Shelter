import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router';
import Form from '../components/Form';

const AddPet = props => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })
    const [error, setError] = useState({})
    const [nameError, setNameError] = useState("")
    const[disabled, setDisabled] = useState(false)
    const [dup, setDup] = useState(null)

    const NameValid = name => {
        axios.get(`http://localhost:8000/api/pet/name/${name}`)
            .then(res => setDup(res.data.onePet))
            .catch(err => console.log("Error getting a pet", err))
        if(dup){
            return false
        }
        return true
    }
    
    const onSubmitHandler = e => {
        e.preventDefault()
        const name = form.name
        console.log("Name", name)
        console.log(dup)
        console.log(NameValid)
        
        if(!NameValid(name)){
            setNameError("Name must be unique!")
            navigate("/pets/add")
        } else {
            axios.post('http://localhost:8000/api/pet/new',form)
                .then(res => {                
                    if(res.data.error){
                        setError(res.data.error.errors)
                        setDisabled(true)
                        console.log("Error adding pet", res.data.error.errors)
                    } else {
                        setForm({
                            name: "",
                            type: "",
                            description: "",
                            skill1: "",
                            skill2: "",
                            skill3: ""
                        })
                        navigate("/")
                    }
                })

        }
            
        
    }
    
    const onChangeHandler = e => {
        setDisabled(false)
        setForm({...form,[e.target.name]:e.target.value})
    }

    return (
        <Form onSubmitHandler = {onSubmitHandler} onChangeHandler = {onChangeHandler} form = {form} error={error} disabled = {disabled}></Form>
    )
}
export default AddPet;