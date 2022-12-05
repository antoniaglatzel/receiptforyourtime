import { React, useContext, useState, useEffect } from 'react';
import { ItemContext } from '../App_Folder/App'
import { Configuration, OpenAIApi } from "openai";
import DallEReplacement from '../assets/dallEimage.png';
import { saveAs } from 'file-saver';
import { styled, useTheme, TextField } from '@mui/material';
import JSZip from "jszip";
import { imgSrcToBlob } from "blob-util";

const DallE = ({ }) => {

  const theme = useTheme();

  const { appOpen, setAppOpen,  //getting everything from the context
    yourName, setYourName,
    yourMail, setYourMail,
    receiverName, setReceiverName,
    receiverMail, setReceiverMail,
    time, setTime,
    happy, setHappy,
    productive, setProductive,
    informative, setInformative,
    prompt, setPrompt,
    generatedImage, setImage,
  } = useContext(ItemContext);

  const [loading, setLoading] = useState (false);

  //the openAI configuration based on our apiKey
  //with the help of: https://www.youtube.com/watch?v=oacBV4tnuYQ
  const conf = new Configuration({
    apiKey: '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'
    //process.env.REACT_APP_Open_AI_Key, //to hide it from the public
  });
  const oa = new OpenAIApi(conf);

  //generation function 
  const generation = async () => { 
    if (prompt === "") { console.log("just starting") }
    else {
      setLoading(true);
      const response = await oa.createImage({
        prompt: prompt, //exchange with state prompt later
        n: 1,
        size: "256x256",
      });
      setLoading(false); //to show that it is loading
      const imageJson = response.data.data[0].b64_json; //trying to read the b64_json
      console.log("actually generating")
      console.log(response.data);
      console.log(response.data.data[0].url);
      setImage(response.data.data[0].url); //return the url of the image  
    }
  }

    useEffect(() => {
        generation();
      }, [prompt]);
      

    return(     
      <div>
          {loading ? (

            <div>
              <img src="https://media.tenor.com/I6kN-6X7nhAAAAAi/loading-buffering.gif"></img>
            </div>
          
            ) : (
        
            <div>
                <img id='gI' src={generatedImage}/>
            </div>
              
          )}
        </div>

        
        
)
}

export default DallE




//EFFORT TO DOWNLOAD THE IMAGE FROM DALL E API

// 1 with file-save package 

//const downloadImage = (e) => {
  //   e.preventDefault();  
  //   saveAs(generatedImage, 'image.png') // Put your image url here.
  // }


// 2 with blob-util package --> works on their homepage but not on the api (security warning)
// source: https://github.com/Arrow7000/dall-e-downloader/blob/master/src/content-script.ts

// async function downloadImagesAsZip(e) {
      //   // const images = document.querySelectorAll<HTMLImageElement>(
      //   //   ".task-page .generated-image > img"
      //   // );
      
      //   // if (images.length <= 0) {
      //   //   throw new Error("No generated images found");
      //   // }
      
      //   // const title = document
      //   //   .querySelector<HTMLInputElement>(".image-prompt-input")
      //   //   ?.value.trim();
      
      //   // if (title === undefined) {
      //   //   throw new Error(
      //   //     "Cannot find the prompt input field so unable to generate a title for the download"
      //   //   );
      //   // } else {
      //     e.preventDefault();  
      //   const imgUrls = [generatedImage];
      
      //     const folder = new JSZip();
      
      //     const blobsAndNames = await Promise.all(
      //       imgUrls.map((imgUrl, i) => {
      //         return imgSrcToBlob(imgUrl, "image/png", "Anonymous").then((blob) => {
      //           const name = `image.png`;
      //           return { name, blob };
      //         });
      //       })
      //     );
      
      //     blobsAndNames.forEach(({ blob, name }) => {
      //       folder.file(name, blob);
      //     });
      
      //     folder.generateAsync({ type: "blob" }).then((content) => {
      //       saveAs(content, "images.zip");
      //     });
        
      // }