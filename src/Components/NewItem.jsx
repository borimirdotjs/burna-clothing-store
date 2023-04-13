import React, { useState, useEffect } from "react";
import "./NewItem.css";
import { v4 } from "uuid";
import { storage, db } from "../Firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const NewItem = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoLink, setPhotoLink] = useState("");

  useEffect(() => {
    if (photoLink) {
      const dbRef = doc(db, "products", id);
      setDoc(dbRef, {
        name: name,
        id: id,
        category: category,
        description: description,
        price: price,
        photoUrl: photoLink,
      }).then((response) => {
        console.log(response);
      });
    }
  }, [photoLink]);

  const handleGenerateID = (e) => {
    e.preventDefault();
    if (category === "") {
      setId("");
    }
    if (category === "featured") {
      setId("100" + v4());
    }
    if (category === "men") {
      setId("200" + v4());
    }
    if (category === "women") {
      setId("300" + v4());
    }
    if (category === "accessories") {
      setId("400" + v4());
    }
  };

  const isDisabled = Boolean(
    name && category && description && price && id && photo
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageRef = ref(storage, `images/${id}`);
    await uploadBytes(imageRef, photo);

    const url = await getDownloadURL(imageRef);
    setPhotoLink(url);
  };

  return (
    <form id="new-item" onSubmit={handleSubmit}>
      <h2>Add New Item</h2>
      <label htmlFor="name">
        Name:
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="cat">
        Category:
        <select
          id="cat"
          type="text"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setId("");
          }}
        >
          <option value=""></option>
          <option value="featured">Featured</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="accessories">Accessories</option>
        </select>
      </label>
      <br />
      <label htmlFor="description">
        Description:
        <textarea
          value={description}
          id="description"
          cols="30"
          rows="10"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </label>
      <br />
      <label htmlFor="price">
        Price in $USD:
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <br />
      <label>
        Generate ID
        <button onClick={handleGenerateID}>Generate</button>
      </label>
      {id}
      <br />
      <label htmlFor="picture">
        Choose a file:
        <input
          type="file"
          className="hidden"
          value={""}
          onChange={(e) => setPhoto(e.target.files[0])}
        />
        {photo && photo.name}
      </label>
      <button disabled={!isDisabled} type="submit">
        Submit Data
      </button>
    </form>
  );
};

export default NewItem;
