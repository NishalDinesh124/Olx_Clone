import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
  const {postDetails} =useContext(PostContext)
  const [userDetails,setUserDetails]=useState()
  const {firebase} =useContext(FirebaseContext)
  useEffect(()=>{
    const {userId} = postDetails
   
    firebase.firestore().collection('users').where('id','==',userId).get().then((response)=>{
      response.forEach((document)=>{
        setUserDetails(document.data())
      })
    })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
       {userDetails && <div className="contactDetails">
          <p><strong>Seller details</strong></p>
          <p>Name: {userDetails.username}</p>
          <p>Phone: {userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
