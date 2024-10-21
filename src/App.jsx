import { useState } from "react";

const img = [
    {src:"images/pic1.jpg",alt:"Closeup of a human eye"},
    {src:"images/pic2.jpg",alt:"Rock that looks like a wave"},
    {src: "images/pic3.jpg", alt: "Purple and white pansies" },
    {src: "images/pic4.jpg", alt: "Section of wall from a pharoah's tomb" },
    {src: "images/pic5.jpg", alt: "Large moth on a leaf" },
];


export default function App() {
    const [slectendImage, setSelectedImage] = useState(imageArray[0]);
    const [isDarkened,setIsDarkened] = useState(false)

    const handlethumbnailClick = (image) =>{
        setSelectendImage(image);
    };

    const toggkeDarken = () => {
        setIsDarkened((prev) => !prev);
    };

    return (
      <>
        <h1>Image gallery example</h1>
        <div className="full-img">
          <img
            className="displayed-img"
            src={selectedImage.src}
            alt={selectedImage.alt}
          />
          <div 
            className="overlay"
            style={{
                backgroundColor: isDarkened ? "rgba(0, 0, 0, 0.5)" : "transparent",
            }}
          ></div>
          <button className="dark" onClick={toggleDarken}>
          {isDarkened ? "Lighten" : "Darken"}
        </button>
        </div>
        <div className="thumb-bar">
            {ima.map((image,index) =>(
                <img
                  key={imdex}
                  src={image.src}
                  alt={image.alt}
                  className="thumb-bar"
                  onClick={() => handlethumbnailClick(image)}
                />
            ))}
        </div>
      </>
    );
  }