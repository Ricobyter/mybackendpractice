import { useState } from "react";
import axios from "axios"

export default function App() {

  const [img, setImg] = useState(null);
 
  const submitImage = async(e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", img);

    const result = await axios.post(
      "http://localhost:5000/upload-image",
      formData,
      {
        headers: {"Content-Type": "multipart/form-data"},
      }
    );
  }

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImg(e.target.files[0])
  }
  return (

    <div>
      <form onSubmit={submitImage}>
        <input type="file" accept="image/*" onChange={onInputChange}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

