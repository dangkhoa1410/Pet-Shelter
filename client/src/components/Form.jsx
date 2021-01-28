import { Link } from '@reach/router';
import React, {useEffect, useState} from 'react'

const Form = props => {
    return (
        <div className="row-sm-6">
            <div className="row-sm-6">
                <div className="row-sm-6">
                    <div className="col-sm-2 d-flex justify-content-between">
                        <Link to="/"><h5>Home</h5></Link>
                        <span> | </span>
                        <Link to="/pets/add"><h5>Add pet</h5></Link>
                    </div>
                </div>
            </div>        
            <div className="row ml-2 mt-4 mb-4">
                <h5>Enter your new pet here</h5>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <form onSubmit = {props.onSubmitHandler}>
                        <div className="col">
                            <div className="form-group row">
                                <label htmlFor="name" className="col-sm-2 col-form-label">Pet Name</label>
                                <input type="text" name="name" onChange= {props.onChangeHandler} value={props.form.name}/>
                            </div>
                                <span></span>
                                {
                                props.error.name ? <div className="text-danger offset-2"> {props.error.name.message}</div> : ""
                                }
                            <div className="form-group row">
                                <label htmlFor="type" className="col-sm-2 col-form-label">Type</label>
                                <input type="text" name="type" onChange= {props.onChangeHandler} value={props.form.type}/>
                            </div>
                                {
                                    props.error.type ? <div className="text-danger offset-2"> {props.error.type.message}</div> : ""
                                }
                                <div className="form-group row">
                                <label htmlFor="descrption" className="col-sm-2 col-form-label">Description</label>
                                <input type="text" name="description" onChange= {props.onChangeHandler} value={props.form.description}/>
                            </div>
                                {
                                    props.error.description ? <div className="text-danger offset-2"> {props.error.description.message}</div> : ""
                                }
                        </div>
                        <div className="col">
                            <h4>Skills: (Optional)</h4>
                            <div className="form-group row">
                                    <label htmlFor="skill1" className="col-sm-2 col-form-label">Skill 1</label>
                                    <input type="text" name="skill1" onChange= {props.onChangeHandler} value={props.form.skill1}/>
                                </div>
                                    <span></span>
                                    
                                <div className="form-group row">
                                    <label htmlFor="skill2" className="col-sm-2 col-form-label">Skill 2</label>
                                    <input type="text" name="skill2" onChange= {props.onChangeHandler} value={props.form.skill2}/>
                                </div>
                                    
                                    <div className="form-group row">
                                    <label htmlFor="skill3" className="col-sm-2 col-form-label">Skill 3</label>
                                    <input type="text" name="skill3" onChange= {props.onChangeHandler} value={props.form.skill3}/>
                                </div>
                                    
                            </div>
                        <button type="submit" className="btn btn-success mt-2" disabled={props.disabled} >Add pet</button>
                    </form>

                </div>
            </div>   
        </div>
    )
}
export default Form;