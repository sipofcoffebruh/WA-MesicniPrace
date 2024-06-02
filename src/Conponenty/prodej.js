// src/pages/Prodej.js
import React, { useState } from 'react';
import supabase from '../config/supabase';

const Prodej = () => {
  const [formData, setFormData] = useState({
    data1: '',
    data2: '',
    data3: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert data1 to an integer
    const data1Int = parseInt(formData.data1, 10);

    if (isNaN(data1Int)) {
      alert("data1 must be an integer");
      return;
    }

    const { data, error } = await supabase
      .from('test')
      .insert([
        { data1: data1Int, data2: formData.data2, data3: formData.data3 }
      ]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully:', data);
    }
  };

  return (
    <div>
      <h1>Insert Data into Supabase</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Data1 (integer, required):
          <input type="number" name="data1" value={formData.data1} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Data2 (optional):
          <input type="text" name="data2" value={formData.data2} onChange={handleChange} />
        </label>
        <br />
        <label>
          Data3 (optional):
          <textarea name="data3" value={formData.data3} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Prodej;
