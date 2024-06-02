// src/pages/Prodej.js
import React, { useState } from 'react';
import supabase from '../config/supabase';

const ProdejPage = () => {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: '',
    zipCode: '',
    price: '',
    propertyType: '',
    listingDate: '',
    status: '',
    bedrooms: '',
    bathrooms: '',
    squareFeet: '',
    lotSize: '',
    garage: false,
    pool: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      address,
      city,
      state,
      zipCode,
      price,
      propertyType,
      listingDate,
      status,
      bedrooms,
      bathrooms,
      squareFeet,
      lotSize,
      garage,
      pool
    } = formData;

    const { data, error } = await supabase
      .from('Properties')
      .insert([
        {
          address,
          city,
          state,
          zipCode,
          price: parseFloat(price),
          propertyType,
          listingDate,
          status
        }
      ]);

    if (error) {
      console.error('Error inserting property data:', error);
      return;
    }

    const propertyId = data[0].propertyID;

    if (propertyType === 'House') {
      const { error: houseError } = await supabase
        .from('Houses')
        .insert([
          {
            propertyID: propertyId,
            bedrooms: parseInt(bedrooms, 10),
            bathrooms: parseFloat(bathrooms),
            squareFeet: parseInt(squareFeet, 10),
            lotSize: parseFloat(lotSize),
            garage,
            pool
          }
        ]);

      if (houseError) {
        console.error('Error inserting house data:', houseError);
      } else {
        console.log('House data inserted successfully');
      }
    } else if (propertyType === 'Apartment') {
      const { error: apartmentError } = await supabase
        .from('Apartments')
        .insert([
          {
            propertyID: propertyId,
            bedrooms: parseInt(bedrooms, 10),
            bathrooms: parseFloat(bathrooms),
            squareFeet: parseInt(squareFeet, 10),
            floor: parseInt(formData.floor, 10)
          }
        ]);

      if (apartmentError) {
        console.error('Error inserting apartment data:', apartmentError);
      } else {
        console.log('Apartment data inserted successfully');
      }
    } else if (propertyType === 'Land') {
      const { error: landError } = await supabase
        .from('Lands')
        .insert([
          {
            propertyID: propertyId,
            lotSize: parseFloat(lotSize),
            zonedFor: formData.zonedFor
          }
        ]);

      if (landError) {
        console.error('Error inserting land data:', landError);
      } else {
        console.log('Land data inserted successfully');
      }
    }
  };

  return (
    <div>
      <h1>Insert Property into Supabase</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <br />
        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </label>
        <br />
        <label>
          State:
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Zip Code:
          <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Price:
          <input type="number" step="0.01" name="price" value={formData.price} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Property Type:
          <select name="propertyType" value={formData.propertyType} onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Land">Land</option>
          </select>
        </label>
        <br />
        <label>
          Listing Date:
          <input type="date" name="listingDate" value={formData.listingDate} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Status:
          <input type="text" name="status" value={formData.status} onChange={handleChange} required />
        </label>
        <br />
        {formData.propertyType === 'House' && (
          <>
            <label>
              Bedrooms:
              <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Bathrooms:
              <input type="number" step="0.1" name="bathrooms" value={formData.bathrooms} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Square Feet:
              <input type="number" name="squareFeet" value={formData.squareFeet} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Lot Size:
              <input type="number" step="0.01" name="lotSize" value={formData.lotSize} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Garage:
              <input type="checkbox" name="garage" checked={formData.garage} onChange={handleChange} />
            </label>
            <br />
            <label>
              Pool:
              <input type="checkbox" name="pool" checked={formData.pool} onChange={handleChange} />
            </label>
            <br />
          </>
        )}
        {formData.propertyType === 'Apartment' && (
          <>
            <label>
              Bedrooms:
              <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Bathrooms:
              <input type="number" step="0.1" name="bathrooms" value={formData.bathrooms} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Square Feet:
              <input type="number" name="squareFeet" value={formData.squareFeet} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Floor:
              <input type="number" name="floor" value={formData.floor} onChange={handleChange} required />
            </label>
            <br />
          </>
        )}
        {formData.propertyType === 'Land' && (
          <>
            <label>
              Lot Size:
              <input type="number" step="0.01" name="lotSize" value={formData.lotSize} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Zoned For:
              <input type="text" name="zonedFor" value={formData.zonedFor} onChange={handleChange} required />
            </label>
            <br />
          </>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProdejPage;
