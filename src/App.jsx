import React from "react";
import logo from "./logo.svg";
import ImageUploading from "react-images-uploading";
import "./App.css";

function App() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 3;
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  return (
    <div className="App">
      <div id="wrapper">
        <div id="main">
          <div id="fg">
            <img src="images/fg.png" alt="foreground woman clipart" />
          </div>
          <div id="bg">
            <img src="images/bg.png" alt="foreground woman clipart" />
          </div>
          {!images || (!images.length && <h1>Drag and drop up to 3 images</h1>)}

          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              <div className="upload__image-wrapper">
                <div
                  className="upload"
                  style={isDragging ? { backgroundColor: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                ></div>
                &nbsp;
                {imageList.map((image, index) => (
                  <div className="screen" id={`screen${1 + index}`}>
                    <img src={image["data_url"]} alt="" width="100" />
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </div>
      </div>
    </div>
  );
}

export default App;
