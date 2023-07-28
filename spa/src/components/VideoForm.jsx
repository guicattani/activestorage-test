import React, { useState, useEffect } from "react";
import { listCategories, createVideo } from "../services/API";

import "./VideoForm.css";

const VideoForm = () => {
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState([]);

  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    listCategories().then((items) => {
      setCategories(items);
    });
  }, []);

  const submitForm = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    createVideo(formData)
      .then((data) => {
        setMessage("Video successfully uploaded");
        setTitle("");
        event.target.file.value = null;
        setCategoryId("");
      })
      .catch((errorMessage) => {
        setMessage(`Failed to upload video: ${errorMessage}`);
      });
  };

  return (
    <form className="video-form" data-testid="video-form" onSubmit={submitForm}>
      {message && (
        <div
          className="mb-4 bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3"
          role="alert"
          data-testid="message"
        >
          <p className="font-bold">Upload finished</p>
          <p className="text-sm"> {message}</p>
        </div>
      )}

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Title
          </label>
        </div>
        <div className="">
          <input
            className="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={(e) => setTitle(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            File
          </label>
        </div>
        <div className="">
          <input
            className="form-control bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="file"
            type="file"
            name="file"
            accept="video/mp4, video/mov"
            required
          />
        </div>
      </div>

      <div className="mb-3">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Category
            </label>
          </div>
          <div className="">
            <select
              id="category"
              name="category_id"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              onBlur={(e) => setCategoryId(e.target.value)}
              required
              className="form-select"
            >
              <option />
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            type="submit"
            value="Submit"
          >
            Upload
          </button>
        </div>
      </div>
    </form>
  );
};

export default VideoForm;
