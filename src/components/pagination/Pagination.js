import React from 'react';
import './Pagination.css';
const Pagination = ({currentpage,setcurrentpage,totalresult}) => {
const pagesize = 6;

const totalPage = Math.ceil(totalresult/pagesize);

const NumberOfPages =[];

for(let i =1;i<=totalPage;i++)
{
    NumberOfPages.push(i);
}

const HandlPage=(Number)=>{
setcurrentpage(Number);

window.scroll(
    {
        top:0,
        behavior:'smooth',
    }
)
}

    return (
        <div className='pagination'>
            <button className='prev-btn' disabled={currentpage===1} onClick={()=>{currentpage>1&&HandlPage(currentpage -1) }}>Prev</button>


<ul className='page-numbers'>
    {
        NumberOfPages.map((p)=>(
            <li onClick={()=>{HandlPage(p)}} key={p} className={`page-number ${p === currentpage? "active ":""}`}>{p}</li>
        ))
    }
</ul>


            <button className='next-btn' disabled={currentpage===6} onClick={()=>{currentpage<totalPage&&HandlPage(currentpage +1) }}>Next</button>

            
        </div>
    );
}

export default Pagination;
