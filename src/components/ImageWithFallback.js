import React,{ useState} from 'react';
function ImageWithFallback(props){
  const [imgSrc,setFallback]=useState(props.source);
  return <img className ="img-thumbnail" src={imgSrc} onError={()=>setFallback('https://via.placeholder.com/400')}/>
}
export default ImageWithFallback;