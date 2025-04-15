
import React, { children , createContext, useContext, useEffect, useState } from 'react';
import  axios  from 'axios';


export const NewContext = createContext();
 export const useNewsContext = ()=>{return useContext(NewContext);}
 


    const Provide = ({children }) => {

 const ApiKey = "5d9b11c356a149c2bb2019af022d335e";
 const BaseUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";


const [Articl,setArticl] = useState([]);
const [error,seterror] = useState(null);
const [Loading,setLoading] = useState(null);
const [currentpage,setcurrentpage] = useState(1);
const [totalresult,settotalresult] = useState(0);
const [category,setcategory] = useState('');
const [query,setquery] = useState('');

 
    
    const  fetchNews=async()=>{
        try{
            setLoading(true);
        const responce =await  axios.get(`${BaseUrl}${ApiKey}` , {
        params:{
            apikey:ApiKey,
            country:"us",
            page:currentpage,
            pagesize:6,
            category:category,
            q:query,
        }
     })

     console.log(responce);
     setArticl(responce.data.articles);
     settotalresult(responce.data.totalResults);
    }catch(err)
    {
        seterror("can't fetch the data , please try again ");
    }finally{
        setLoading(false);
    }
    }
    

    useEffect(()=>{
        fetchNews();
    },[category,query])

    const ChangeCategory=(e)=>{
        setcategory(e)
    }
    return (
        <NewContext.Provider value={{Articl,error,Loading,fetchNews,currentpage,setcurrentpage,totalresult,category,ChangeCategory,setquery}}>
            {children }
        </NewContext.Provider>
    );
}

export default Provide;
