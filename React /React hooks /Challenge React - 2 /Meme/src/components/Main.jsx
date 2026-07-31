import naruto from './images/naruto.jpg';
import React ,{ useState , useEffect } from 'react';

export default function Main(){
    const [meme, setMeme] = useState({
        topText: "padikave illa machan fail than",
        bottomText: "Those who pass stand up",
        image: naruto
    })
function handleChange(event){
    const {value , name} = event.currentTarget
    setMeme(preMeme => ({
        ...preMeme , 
        [name]: value,
    }))
}
const[allMemes,setallMemes]= useState([])

useEffect(()=> {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setallMemes(data.data.memes))
}, [])

function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const newMemeUrl = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            image: newMemeUrl
        }))
    }

    return(
        <main>
            <div className="form">
                <label>Top Text 
                    <input 
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                    />
                </label>
                <label>Bottom Text 
                    <input 
                        type="text"
                        placeholder="walk into mordor"
                        name="bottomText"
                        onChange={handleChange}
                    />
                </label>
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.image} alt='meme image'/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}