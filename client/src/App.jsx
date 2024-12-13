import  { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [file, setFile] = useState('');

  const onChangeHandler = (e) => {
    setFile(e.target.files[0]);
   // console.log(e.target.files);
    //console.log(file);
  };


 const onSubmitHandler = async () => {
    const formData = new FormData();
    formData.append('file', file); 
    try {
      const res = await axios.post('http://localhost:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res.data); // Log the filename returned from the server
      alert("File "+ res.data.filename+ " Succesfully uploaded in server!!!");
    } catch (error) {
      console.error('Error uploading file: ', error);
    }
  };


  return (
    <div>
      <input type="file" onChange={onChangeHandler} />
      <button onClick={onSubmitHandler}>Upload</button>
    </div>
  );
};
export default App;
