import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router';
import Form from '../components/Form';

const UpdatePet = props => {
    const [onePet, setPet] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })
    const [error, setError] = useState({})
    const[disabled, setDisabled] = useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pet/${props.id}`)
            .then(res => setPet(res.data.onePet))
            .catch(err => console.log("Error getting a pet", err))
    },[])
    
    const onSubmitHandler = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pet/update/${props.id}`,onePet)
            .then(res => {
                if(res.data.error){
                    setError(res.data.error.errors)
                    setDisabled(true)
                    console.log("Error updating a pet", error)
                } else {
                    setPet({
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
    const onChangeHandler = e => {
        setDisabled(false)
        setPet({...onePet,[e.target.name]:e.target.value})
    }

    return (
        <Form onSubmitHandler = {onSubmitHandler} onChangeHandler = {onChangeHandler} form = {onePet} error={error} disabled = {disabled}></Form>
    )
}
export default UpdatePet;