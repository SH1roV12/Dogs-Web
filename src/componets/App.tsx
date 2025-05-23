import axios from "axios"
import { useEffect, useState } from "react"
import styles from "./App.module.css"

function App() {  
  const [data, setData] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState<string | null> (null)

  useEffect(()=>{
  
  
    axios.get("https://dog.ceo/api/breeds/image/random/50")
    .then(img => {console.log(img.data.message); setData(img.data.message)} )
    .catch(err => console.log(err))
    
  },[])


  useEffect(() => {console.log(data)}, [data])


  return (
    <>
    <h1>Dogs</h1>
    <div className={styles.main}>
      {data.map((img:string, index:number)=>(
        <img 
        src={img}
        key={index}
        alt="dog"
        className={styles.img}
        onClick={()=> setIsOpen(img)}
        ></img>
      ))}
    </div>
    {isOpen && (
      <div className={styles.modal_wrapper} onClick={(e)=>{console.log(e.target); if (e.target === e.currentTarget) setIsOpen(null)}}>
        <div className={styles.modal}>
          <img src={isOpen} className={styles.modal_img}></img>
          <button onClick={() => setIsOpen(null)} className={styles.modal_button}>Close</button>
        </div>
      </div>
    )}
    
    </>
  )
}

export default App
