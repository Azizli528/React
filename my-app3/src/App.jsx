import React, { useState } from "react";
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    terms: false,
    city: ""
  });


  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    terms: false,
    city: ""
  });


  const handleChange = (e) => {
    const { value, name, type, checked } = e.target

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    })

  }
  const validate = () => {
    const newErrors = {}

    if (!formData.name) {
      newErrors.name = "adinizi daxil edin !"
    }

    if (!formData.email) {
      newErrors.email = "emaili daxil edin !"
    }
    else if (!formData.email.includes("@")) {
      newErrors.email = "duzgun email daxil edin !"
    }

    if (!formData.password) {
      newErrors.password = "sifrenizi daxil edin !"
    }
    // else if (!formData.password.length < 6) {
    //   newErrors.password = "uzunluq minimum 6 simvol olmalidir !"
    // }

    if (!formData.gender) {
      newErrors.gender = "cins secin !"
    }

    if (!formData.city) {
      newErrors.city = "seher secin !"
    }

    if (!formData.terms) {
      newErrors.terms = "sertleri qebul edin !"
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log(formData);
      alert("Form ugurla gonderildi !");
    }
  }

  return (
    <form className="card" onSubmit={(e)=>handleSubmit(e)}>
      <div >
        <label htmlFor="text">Name</label>
        
        <input name="name" type="text" id="text" onChange={(e) => handleChange(e)} />
      {
        errors.name && <p style={{color:"red"}}>{errors.name}</p>
      }
      
      </div>

      

      <div >
        <label htmlFor="email">Email</label>
        <input name="email" type="email" id="email" onChange={(e) => handleChange(e)} />
      {
        errors.email && <p style={{color:"red"}}>{errors.email}</p>
      }
      
      </div>

      

      <div >
        <label htmlFor="password">Password</label>
        <input name="password" type="password" id="password" onChange={(e) => handleChange(e)} />
      
      {
        errors.password && <p style={{color:"red"}}>{errors.password}</p>
      }
      </div>

      

      <div >
        <label>
          male
          <input
            name="gender"
            type="radio"
            value="male"
            id="male"
            checked={formData.gender === "male"}
            onChange={(e) => handleChange(e)} />
        </label>

        <label>
          female
          <input
            name="gender"
            type="radio"
            value="female"
            id="female"
            checked={formData.gender === "female"}
            onChange={(e) => handleChange(e)}
          />
        </label>

        {
          errors.gender && <p style={{color:"red"}}>{errors.gender}</p>
        }
      </div>

      <div >
        <label htmlFor="city">Choose City</label>
        <select name="city" id="city"  onChange={(e) => handleChange(e)}>
          <option value="Baku">Baku</option>
          <option value="Sumqayit">Sumqayit</option>
          <option value="Yardimli">Yardimli</option>
          <option value="Quba">Quba</option>
          <option value="Naxcivan">Naxcivan</option>
        </select>

        {
        errors.city && <p style={{color:"red"}}>{errors.city}</p>
      }
      </div>

      <div >
        <input name="terms" type="checkbox" 
        checked={formData.terms} onChange={(e) => handleChange(e)} />
        <span>Sertlerle razilasiram</span>
        {
        errors.terms && <p style={{color:"red"}}>{errors.terms}</p>
      }
      </div>

      <button className="btn" type="submit">Submit</button>
    </form>
  );
};

export default App;