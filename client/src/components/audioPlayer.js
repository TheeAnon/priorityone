import React, { useState, useEffect } from "react";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";
import { FaVolumeUp, FaVolumeDown, FaVolumeMute } from "react-icons/fa";
import { IoVolumeMediumSharp } from "react-icons/io5";

const AudioPlayer = ({ src, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [audioElement, setAudioElement] = useState(null);
  const [mute, setMute] = useState(false);

  useEffect(() => {
    // Create the audio element dynamically
    const audio = new Audio(src);
    audio.preload = "auto"; // Preload the audio for smoother playback
    setAudioElement(audio);

    // Clean up when unmounting
    return () => {
      audio.pause();
      setAudioElement(null);
    };
  }, [src]);

  // Function to synchronize volume with system volume
  const syncVolumeWithSystem = () => {
    if (audioElement) {
      setVolume(audioElement.volume);
    }
  };

  // Update volume when system volume changes
  useEffect(() => {
    syncVolumeWithSystem();
    // Listen for system volume changes and update accordingly
    window.addEventListener("volumechange", syncVolumeWithSystem);

    return () => {
      window.removeEventListener("volumechange", syncVolumeWithSystem);
    };
  }, [audioElement]);

  const toggleMute = () => {
    // Toggle mute state
    setMute(!mute);
    if (audioElement) {
      if (!mute) {
        audioElement.volume = 0; // Mute the audio
      } else {
        audioElement.volume = volume; // Unmute and set volume to previous value
      }
    }
  };

  const togglePlay = () => {
    if (audioElement) {
      if (audioElement.readyState >= 2) {
        // Check if audio is ready to play
        if (isPlaying) {
          audioElement.pause();
        } else {
          audioElement.play();
        }
        setIsPlaying(!isPlaying);
      }
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioElement) {
      audioElement.volume = newVolume;
    }
    // If volume is set to 0, mute the audio
    if (newVolume === 0) {
      setMute(true);
    } else {
      setMute(false);
    }
  };

  return (
    <div className="flex mt-6 absolute bottom-4 right-4 w-full">
      <div className="flex ml-auto items-center gap-4 rounded bg-white p-4">
        <div className="flex flex-col gap-2">
          <div>
            <h2 className="font-extrabold font-sans text-2xl text-[#020301]">
              Title Really long title
            </h2>
            <p className="font-light text-sm text-[#020301]">
              description Really long desc
            </p>
          </div>
          <div className="flex gap-2">
            <button onClick={toggleMute}>
              {mute ? (
                <FaVolumeMute size={20} />
              ) : volume === 0 ? (
                <FaVolumeMute size={20} />
              ) : volume < 0.4 ? (
                <FaVolumeDown size={20} />
              ) : volume < 0.7 ? (
                <IoVolumeMediumSharp size={20} />
              ) : (
                <FaVolumeUp size={20} />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              className="w-30 bg-gray-300 appearance-none h-5 rounded-lg focus:outline-none mr-4"
            />
          </div>
        </div>
        <button onClick={togglePlay} className="mr-4">
          {isPlaying ? (
            <FaCirclePause
              size={70}
              className="flex place-self-center hover:text-[#444444] text-[#020301]"
            />
          ) : (
            <FaCirclePlay
              size={70}
              className="flex place-self-center hover:text-[#444444] text-[#020301]"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
