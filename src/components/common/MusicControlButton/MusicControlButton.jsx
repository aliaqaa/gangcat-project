import React, { useState, useEffect, useRef } from "react";  
import { FaPlay } from "react-icons/fa";  
import { FaPause } from "react-icons/fa";  

const MusicControlButton = () => {  
  const [isPlaying, setIsPlaying] = useState(false);  
  const audioRef = useRef(); // Create a ref for the audio element  

  // Autoplay when the component mounts  
  useEffect(() => {  
    const playAudio = async () => {  
      try {  
        await audioRef.current.play(); // Attempt to play the audio  
        setIsPlaying(true); // Update state to reflect that music is playing  
      } catch (error) {  
      }  
    };  

    playAudio(); // Call the function to play audio  
  }, []);  

  // Function to handle play/pause action  
  const toggleMusic = () => {  
    const newState = !isPlaying;  
    setIsPlaying(newState);  
    
    if (newState) {  
      audioRef.current.play(); // Play the music  
    } else {  
      audioRef.current.pause(); // Pause the music  
    }  
  };  

  return (  
    <div>  
      <button  
        onClick={toggleMusic}  
        className={`fixed bottom-5 z-50 left-5 gototopbutton rounded p-4 shadow-lg transition-opacity duration-300 ease-in-out`}  
      >  
        {isPlaying ? <FaPause /> : <FaPlay />}  
      </button>  
      <audio ref={audioRef} src="/public/Music/hiphopologist-cheshm-dar-barabare-cheshm-(music-irani.com).mp3" preload="auto" />  
      {/* Ensure that the path to your audio file is correct */}  
    </div>  
  );  
};  

export default MusicControlButton;