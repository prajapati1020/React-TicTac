import React, { useRef, useEffect } from 'react';

const ImageSlider =()=>{
    
    let img=["https://picsum.photos/400/400","https://picsum.photos/400/400","https://picsum.photos/400/400",
    "https://picsum.photos/400/400","https://picsum.photos/400/400"];
    let currentImg=1;
    const imageContainerRef = useRef(null);
    let timeout;

function updateImg(){
    if(currentImg>img.length){
        currentImg=1;
    }else if(currentImg<1){
        currentImg=img.length
    }
    const translationValue = (currentImg - 1) * 500;
    imageContainerRef.current.style.transform = `translateX(-${translationValue}px)`;

    timeout =setTimeout(()=>{
        currentImg++;
        updateImg()
    },3000)
}

const nextImg=()=>{
    currentImg++
    clearTimeout(timeout)
    updateImg()
}
const prevImg=()=>{
    currentImg--
    clearTimeout(timeout)
    updateImg()
}
useEffect(() => {
    // Cleanup: Clear the timeout when the component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, [timeout]); 
    return(
        
        <>
        <div className="slider-container">
            <div ref={imageContainerRef} className="image-container">

                 {img.map((imgkey)=>(
                    <img src={imgkey} alt="imgTest0"/>
                 ))}
                 

            </div>
            
                 <button onClick={nextImg}>next</button>
                 <button onClick={prevImg}>prev</button>
        </div>
        </>
    )
}

export default ImageSlider;