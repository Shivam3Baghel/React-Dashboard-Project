import React,{useState} from 'react';

const StudentCard = ({name,course}) => {
   const [likes,setLikes]=useState(0);
    
   function increaseLike(){
        setLikes(likes+1);
   }
   
   return (
    <div className="card">
        <h3>Name:{name}</h3>
        <h3>Course:{course}</h3>
        <h3>Likes:{likes}</h3>
        <button onClick={increaseLike}>Like</button>        
    </div>
  )
}

export default StudentCard;