import React, { useEffect,useState, useRef } from "react";
import fallback from '../assets/default.png'
const ImageFallback = ({source,className}) => {
  const [srcToUse, setSrcToUse] = useState(source)
  const loaded = useRef(false);
  useEffect(()=>{
    setTimeout(()=>{
      if (!loaded.current){
        setSrcToUse(fallback);
      }
    },2500)
  },[])
  // function handleImgError(e) {
  //   e.target.src = fallback;
  // }
  return (
    <>
      <img
        key={source}
        className={className}
        src={srcToUse}
        onLoad={()=>loaded.current=true}
        alt=""
      />
    </>
  );
};

export default ImageFallback;
