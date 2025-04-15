import React from 'react';
import './Navbar.css';
import { Link, Navigate } from 'react-router-dom';
import { useNewsContext } from '../../Context/Provide';
const Navbar = () => {

    const TheLinksTitle = [
        "Business",
        "Entertainment",
        "General",
        "Health",
        "Science",
        "Sports",
        "Technology"
    ]
const {category,ChangeCategory,setquery} = useNewsContext();

const serch=(e)=>{
e.preventDefault();
setquery(e.target.elements.search.value.trim());
}
    return (
        <div className=''>
  <nav class="header navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a style={{color:"#66b2ff",fontSize:"20px" , fontWeight:"bold" , textTransform:"capitalize"}} class="navbar-brand" href="#">new app</a>
    <div>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

        
      <ul class="category-list navbar-nav me-auto mb-2 mb-lg-0">
        {TheLinksTitle.map((e)=>(
        <li key={e} onClick={()=>{ChangeCategory(e)}} class={`nav-item category-item ${category === e ? "active":""}`}>
        {e}
        </li>   
        ))}
       
        </ul>
    
      <form onSubmit={serch} class="d-flex" role="search">
        <input class="form-control me-2" name='search' type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;





