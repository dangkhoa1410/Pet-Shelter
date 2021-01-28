import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router';

const OnePet = props => {
    const [onePet, setPet] = useState({})
    const [update, setUpdate] = useState(true)
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pet/${props.id}`)
            .then(res => setPet(res.data.onePet))
            .catch(err => console.log("Error getting a pet", err))
    },[])
    useEffect(()=>{
        axios.put(`http://localhost:8000/api/pet/update/${props.id}`, onePet)            
    },[update])
    const onClickHandler = e => {
        e.preventDefault()
        axios.delete(`http://localhost:8000/api/pet/delete/${props.id}`)
        navigate("/")
    }
    const onClickHome = e => {
        navigate("/")
    }
    // const [count, setCount] = useState(parseInt(onePet.like))

    const onClickLike = e => {        
        console.log("current count", onePet.count)        
        setPet({...onePet,[e.target.name]:(onePet.like+1)})
        setUpdate(!update)        
    }

    return (
        
        <div>
            {
                onePet ? 
                <>
                    <div className="inline-group mb-2">
                        <h3>Detail about: {onePet.name}</h3> 
                        <button onClick = {onClickHome} className="btn btn-success mx-1 ">Home</button>
                        <button onClick = {onClickHandler} className="btn btn-danger mx-4">Adopt {onePet.name}</button>
                    </div>                   
                    <div className="border p-4">

                        <div className="row">
                            <div className="col-sm-2">
                                <h5>Pet Type:</h5>
                            </div>
                            <div className="col-sm-2">
                                <p>{onePet.type}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-2">
                                <h5>Description:</h5>
                            </div>
                            <div className="col-sm-2">
                                <p>{onePet.description}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-2">
                                <h5>Skills:</h5>
                            </div>
                            <div className="col-sm-2">
                                <p>{onePet.skill1}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2">
                                <h5></h5>
                            </div>
                            <div className="col-sm-2">
                                <p>{onePet.skill2}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2">
                                <h5></h5>
                            </div>
                            <div className="col-sm-2">
                                <p>{onePet.skill3}</p>
                            </div>
                        </div>
                        <button className="btn btn-success" name="like" onClick={onClickLike}>Like {onePet.name}</button>
                        <span> {onePet.like} like(s)</span>
                    </div>
                </> : ""
            }
        </div>
    )
}

export default OnePet

