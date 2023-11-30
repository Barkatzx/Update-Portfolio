import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddProjects = () => {
    const formRef = React.useRef();
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };

    const [typedFeatures, setTypedFeatures] = useState("");

  const handleFeaturesChange = (event) => {
    setTypedFeatures(event.target.value);
  };

  const handleSaveFeatures = () => {
    const featuresArray = typedFeatures
      .split('\n') // Split the input by new lines
      .map(feature => feature.trim()) // Trim extra spaces from each feature
      .filter(feature => feature !== ''); // Remove empty features

    // Here you can save the featuresArray to your database or perform any other action.
    console.log("Features array:", featuresArray);}

  const handleTechnologyChange = (e) => {
    const selectedValues = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedOptions(selectedValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
  
    if (!form) {
      console.error('Form reference is undefined');
      return;
    }

    
  
    const formData = new FormData(form);
  
    const photo = formData.get('photo');
    const title = formData.get('title');
    const description = formData.get('description');
    const feature = formData.get('feature');
    const category = formData.get('category');
    const technology = selectedOptions; // Use selectedOptions here
    const livelink = formData.get('livelink');
    const clientlink = formData.get('clientlink');
    const serverlink = formData.get('serverlink');
  
    const newProject = {
      photo,
      title,
      description,
      feature,
      category,
      technology,
      livelink,
      clientlink,
      serverlink,
    };
  
    form.reset();
    console.log(newProject);
  
    try {
      const response = await fetch('https://barkat-portfolio-server.vercel.app/project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProject),
      });
  
      const data = await response.json();
  
      console.log(data);
  
      if (data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Project Added Successfully',
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
      <h2 className="text-2xl font-semibold mb-4 text-center">Add Project Details</h2>
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
          <label htmlFor="livelink" className="block font-bold text-xl">
            Livelink:
          </label>
          <input
            type="livelink"
            id="livelink"
            name="livelink"
            className="mt-1 p-2 w-full border rounded-md text-black"
            placeholder="Livelink"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="clientlink" className="block font-bold text-xl">
          Clientlink:
          </label>
          <input
            type="clientlink"
            id="clientlink"
            name="clientlink"
            className="mt-1 p-2 w-full border rounded-md text-black"
            placeholder="Clientlink"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="serverlink" className="block font-bold text-xl">
          Serverlink:
          </label>
          <input
            type="serverlink"
            id="serverlink"
            name="serverlink"
            className="mt-1 p-2 w-full border rounded-md text-black"
            placeholder="Serverlink"
          />
        </div>
        <div className="mb-4">
      <label htmlFor="feature" className="block font-bold text-xl">
        Features:
      </label>
      <textarea
        id="feature"
        name="feature"
        className="mt-1 p-2 w-full border rounded-md text-black"
        placeholder="Enter features, each on a new line"
        value={typedFeatures}
        onChange={handleFeaturesChange}
        required
      />
      <button onClick={handleSaveFeatures}>Save Features</button>
    </div>
        <div className="mb-4">
        <label htmlFor="technology" className="block font-bold text-xl">
        Technology:
      </label>
      <select
        multiple
        id="technology"
        name="technology"
        className="mt-1 p-2 w-full border rounded-md text-black"
        value={selectedOptions}
        onChange={handleTechnologyChange}
        required
      >
        <option value="" disabled>Select Technologies</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="Bootstrap">Bootstrap</option>
        <option value="Tailwind">Tailwind</option>
        <option value="Javascript">Javascript</option>
        <option value="React">React</option>
        <option value="Next JS">Next JS</option>
        <option value="Redux">Redux</option>
        <option value="Firebase">Firebase</option>
        <option value="MongoDB">MongoDB</option>
        <option value="Express Js">Express Js</option>
        <option value="Node Js">Node Js</option>
      </select>
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
        <option value="E-commerce">E-commerce</option>
        <option value="Business">Business</option>
        <option value="Blog">Blog</option>
        <option value="Portfolio">Portfolio</option>
      </select>
        
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-bold text-xl">
            Description:
          </label>
          <textarea
            type="description"
            id="description"
            name="description"
            className="mt-1 p-2 w-full border rounded-md text-black"
            placeholder="description"
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

export default AddProjects;