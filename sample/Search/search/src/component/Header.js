import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import './product.css';

class Header extends Component{
    constructor(){
        super()

        this.state={
            keyword:'User input',

        }

    }

    handelChange=(event)=>{
        //console.log(event.target.value)
        this.setState({keyword:event.target.value})
        this.props.userInput(event.target.value)
    }


    render(){
        return(


<nav className="navbar navbar-expand-lg navbar-dark" id="navbar" >
    <div className="container">
    <Link className="navbar-brand" to={'/'}><img src="Logo1.png" alt="l" id="image"/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto my-2 my-lg-0">
            <li className="nav-item">
            <Link className="nav-link active "  to={`/`} >Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to={`/`} >Products</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to={`/`} >Products</Link>
          </li>


        </ul>
        <form className="d-flex" onChange={this.handelChange}>
          <input  className="form-control me-2 " type="text" placeholder="Search" />


        </form>
        <button className="btn"  title="sign up!"><i className="fa-solid fa-user"></i></button>
        <button className="btn"  title="cart!"><i className="fa-solid fa-bag-shopping"></i></button>
        <button><i className="fa-solid fa-sun" id="icon"  style={{color:'var(--third-color)'}}></i></button>
        <button ><i className="fa-solid fa-location-dot" onClick={this.geolocation}><p  id="weather"></p></i></button>

      </div>
        </div>
    </nav>





            /*<div>
                <center>
                    <h1>React</h1>
                    <input onChange={this.handelChange}/>
                    <div>{this.state.keyword}</div>

                </center>
            </div>*/
        )
    }
}

export default Header;