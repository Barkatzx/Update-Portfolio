import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import Swal from 'sweetalert2';

const AddBlog = () => {
  const formRef = React.useRef();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [paragraph, setParagraph] = useState(""); // State for the paragraph content

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const photo = form.photo.value;
    const title = form.title.value;
    const date = form.date.value;
    const category = form.category.value;

    // Manually remove disallowed attributes using a regular expression
    const sanitizedParagraph = paragraph.replace(/<[^>]+>/g, (match) => {
      // Allow specific tags and attributes
      if (match.match(/<(\s*)\/?(\s*)(h1|h2|h3|p|u|strong|em|a|ol|ul|li)([^>]*)>/)) {
        return match;
      }
      return ''; // Remove all other tags
    });

    const newBlogs = { photo, title, paragraph: sanitizedParagraph, date, category };

    form.reset();
    console.log(newBlogs);

    try {
      const response = await fetch('https://barkat-portfolio-server.vercel.app/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlogs),
      });

      const data = await response.json();

      console.log(data);

      if (data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Blog Added Successfully',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-slate-200 rounded-md shadow-md p-10 container mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add Blog</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="photo" className="block font-bold text-xl">
            Image URL:
          </label>
          <input
            type="photo"
            id="photo"
            name="photo"
            className="mt-1 p-2 w-full border rounded-md text-black"
            placeholder="Photo URL "
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block font-bold text-xl">
            Title:
          </label>
          <input
            type="title"
            id="title"
            name="title"
            className="mt-1 p-2 w-full border rounded-md text-black"
            placeholder="Title"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block font-bold text-xl">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="mt-1 p-2 w-full border rounded-md text-black"
            placeholder="date"
            required
          />
        </div>
        <div className="mb-4">
        <label htmlFor="category" className="block font-bold text-xl">
        Category:
      </label>
      <select
        id="category"
        name="category"
        className="mt-1 p-2 w-full border rounded-md text-black"
        value={selectedCategory}
        onChange={handleCategoryChange}
        required
      >
        <option value="" disabled>Select a category</option>
        <option value="Productive">Productive</option>
        <option value="Motivational">Motivational</option>
        <option value="Book Review">Book Review</option>
        <option value="Javascript">Javascript</option>
        <option value="React">React</option>
        <option value="MongoDB">MongoDB</option>
        <option value="Express Js">Express Js</option>
        <option value="Node Js">Node Js</option>
      </select>
        </div>
        <div className="mb-4">
          <label htmlFor="paragraph" className="block font-bold text-xl">
            Paragraph:
          </label>
          <ReactQuill
            theme="snow"
            value={paragraph}
            onChange={(value) => setParagraph(value)}
            className="p-2 w-full rounded-md text-black"
            placeholder="Paragraph"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 uppercase font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlog;