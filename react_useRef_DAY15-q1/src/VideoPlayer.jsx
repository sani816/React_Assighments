import { useRef } from "react"

function VideoPlayer(){
    const player=useRef(null)

const play=()=>{
    player.current.play()
}
const pause=()=>{
    player.current.pause()
}

 const forward = () => {
  player.current.currentTime += 5;
};

const rewind = () => {
  player.current.currentTime -= 5;
};


    return(
        <div>
            <h2>Custom video player</h2>
            <video preload="metadata" ref={player} src="https://www.w3schools.com/html/mov_bbb.mp4"/><br></br><br></br>
            <button onClick={play}>play</button>
            <button onClick={pause}>pause</button>
            <button onClick={forward}>forward</button>
            <button onClick={rewind}>rewind</button>
        </div>
    )

}
export default VideoPlayer;