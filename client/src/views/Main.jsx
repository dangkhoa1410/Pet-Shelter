import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const Main = props => {
    const [allPet, setList] = useState(null)
    const [link,setLink] = useState('http://localhost:8000/api/pet/')
    useEffect(()=>{
        axios.get(link)
            .then(res => setList(res.data.allPet))
            .catch(err => console.log("Error getting all pets", err))
    },[allPet])
    
    const onClickEdit = e => {
        e.preventDefault()
        navigate(`/pets/${e.target.value}/edit`)
    }
    const onClickDetail = e => {
        e.preventDefault()
        navigate(`/pets/${e.target.value}`)
    }
    const onClickAdd = e => {
        navigate("/pets/new")
    }
    const onClickType = e => {
        e.preventDefault()
        setLink('http://localhost:8000/api/pet/sort/type')
    }
    return (
        <>
        <div className="row-sm-6">
                        
            <div className="row d-flex justify-content-between p-4">
                <h3>These pets are looking for a good home</h3>
                <div>
                    <button onClick = {onClickType} className="btn btn-primary mx-2">Sort Pet</button>
                    <button onClick = {onClickAdd} className="btn btn-primary mx-2">Add a Pet</button>
                </div>
            </div>
            <table className="table table-striped table-bordered centered">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>                    
                    {
                        allPet ? allPet.map( (pet,idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td>
                                        <button className="btn btn-primary mx-1" value={pet._id} name = {pet.name} onClick = {onClickDetail}>Detail</button>
                                        <button className="btn btn-primary mx-1" value={pet._id} name = {pet.name} onClick = {onClickEdit}>Edit</button>
                                    </td>
                                </tr>)
                        })
                        : <tr></tr>
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}
export default Main