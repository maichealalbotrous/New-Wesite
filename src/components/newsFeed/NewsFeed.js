import React from "react";
import "./NewsFeed.css";
import {useNewsContext} from '../../Context/Provide';
import NewCard from "../newsCard/NewCard";
import Loader from "../loader/loader";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Pagination from "../pagination/Pagination";
const NewsFeed = () => {
  const {Articl, error, Loading,currentpage,setcurrentpage,totalresult} = useNewsContext();

if(Loading === true){<Loader/>}
if(error === true){<ErrorMessage massage={"Error can't fetch the data"} />}


  return (
    <div className="news-feed ">
      {Articl.length=== 0 ? (
        <p className="no-news-message">no fetch news , please try again</p>
      ) : (
        <>
        <div className="news-grid">
          {Articl.map(( Articl, index ) => (
            <NewCard Ar={Articl} key={index} />
          ))}
        </div>

        <Pagination currentpage={currentpage} setcurrentpage={setcurrentpage} totalresult={totalresult}/>
        </>
       )} 
    </div>
  );
};

export default NewsFeed;
