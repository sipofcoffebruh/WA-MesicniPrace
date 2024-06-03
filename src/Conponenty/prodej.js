// src/pages/Prodej.js
import React, { useState } from "react";
import supabase from "../config/supabase";

const ProdejPage = () => {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    state: "",
    zipCode: "",
    price: "",
    propertyType: "",
    listingDate: "",
    status: "",
    bedrooms: "",
    bathrooms: "",
    squareFeet: "",
    lotSize: "",
    garage: false,
    pool: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
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
      pool,
    } = formData;

    const { data, error } = await supabase.from("Properties").insert([
      {
        address,
        city,
        state,
        zipCode,
        price: parseFloat(price),
        propertyType,
        listingDate,
        status,
      },
    ]);

    if (error) {
      console.error("Error inserting property data:", error);
      return;
    }

    const propertyId = data[0].propertyID;

    if (propertyType === "House") {
      const { error: houseError } = await supabase.from("Houses").insert([
        {
          propertyID: propertyId,
          bedrooms: parseInt(bedrooms, 10),
          bathrooms: parseFloat(bathrooms),
          squareFeet: parseInt(squareFeet, 10),
          lotSize: parseFloat(lotSize),
          garage,
          pool,
        },
      ]);

      if (houseError) {
        console.error("Error inserting house data:", houseError);
      } else {
        console.log("House data inserted successfully");
      }
    } else if (propertyType === "Apartment") {
      const { error: apartmentError } = await supabase
        .from("Apartments")
        .insert([
          {
            propertyID: propertyId,
            bedrooms: parseInt(bedrooms, 10),
            bathrooms: parseFloat(bathrooms),
            squareFeet: parseInt(squareFeet, 10),
            floor: parseInt(formData.floor, 10),
          },
        ]);

      if (apartmentError) {
        console.error("Error inserting apartment data:", apartmentError);
      } else {
        console.log("Apartment data inserted successfully");
      }
    } else if (propertyType === "Land") {
      const { error: landError } = await supabase.from("Lands").insert([
        {
          propertyID: propertyId,
          lotSize: parseFloat(lotSize),
          zonedFor: formData.zonedFor,
        },
      ]);

      if (landError) {
        console.error("Error inserting land data:", landError);
      } else {
        console.log("Land data inserted successfully");
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">Insert Property</h1>
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
        <div className="form-group">
          <label for="address">Address:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label for="city">City:</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label for="state">State:</label>
          <input
            type="text"
            className="form-control"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label for="zipCode">Zip Code:</label>
          <input
            type="text"
            className="form-control"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label for="price">Price:</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label for="propertyType">Property Type:</label>
          <select
            className="form-control"
            id="propertyType"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Land">Land</option>
          </select>
        </div>
        <div className="form-group">
          <label for="listingDate">Listing Date:</label>
          <input
            type="date"
            className="form-control"
            id="listingDate"
            name="listingDate"
            value={formData.listingDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label for="status">Status:</label>
          <input
            type="text"
            className="form-control"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          />
        </div>
        {formData.propertyType === "House" && (
          <>
            <div className="form-group">
              <label for="bedrooms">Bedrooms:</label>
              <input
                type="number"
                className="form-control"
                id="bedrooms"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label for="bathrooms">Bathrooms:</label>
              <input
                type="number"
                step="0.1"
                className="form-control"
                id="bathrooms"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label for="squareFeet">Square Feet:</label>
              <input
                type="number"
                className="form-control"
                id="squareFeet"
                name="squareFeet"
                value={formData.squareFeet}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label for="lotSize">Lot Size:</label>
              <input
                type="number"
                step="0.01"
                className="form-control"
                id="lotSize"
                name="lotSize"
                value={formData.lotSize}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="garage"
                name="garage"
                checked={formData.garage}
                onChange={handleChange}
              />
              <label className="form-check-label" for="garage">
                Garage
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="pool"
                name="pool"
                checked={formData.pool}
                onChange={handleChange}
              />
              <label className="form-check-label" for="pool">
                Pool
              </label>
            </div>
          </>
        )}
        {formData.propertyType === "Apartment" && (
          <>
            <div className="form-group">
              <label for="bedrooms">Bedrooms:</label>
              <input
                type="number"
                className="form-control"
                id="bedrooms"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label for="bathrooms">Bathrooms:</label>
              <input
                type="number"
                step="0.1"
                className="form-control"
                id="bathrooms"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label for="squareFeet">Square Feet:</label>
              <input
                type="number"
                className="form-control"
                id="squareFeet"
                name="squareFeet"
                value={formData.squareFeet}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label for="floor">Floor:</label>
              <input
                type="number"
                className="form-control"
                id="floor"
                name="floor"
                value={formData.floor}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}
        {formData.propertyType === "Land" && (
          <>
            <div className="form-group">
              <label for="lotSize">Lot Size:</label>
              <input
                type="number"
                step="0.01"
                className="form-control"
                id="lotSize"
                name="lotSize"
                value={formData.lotSize}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label for="zonedFor">Zoned For:</label>
              <input
                type="text"
                className="form-control"
                id="zonedFor"
                name="zonedFor"
                value={formData.zonedFor}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProdejPage;
