import React from 'react';
import './NewCard'
import defultImg from '../../defaultImage.jpg';
const NewCard = ({Ar,id}) => {

    const HandlImg=(e)=>{
        e.target.src = defultImg;
    }

    return (
        <div  className='news-card '>
      
                <img className='img-fluid news-image' src={Ar.urlToImage||defultImg} onError={HandlImg}/>
          
            <div className='news-content'>
                <h3>{Ar.title}</h3>
                <p>{Ar.description}</p>
                <a href={Ar.url}>Read More </a>
            </div>
        </div>
    );
}

export default NewCard;
