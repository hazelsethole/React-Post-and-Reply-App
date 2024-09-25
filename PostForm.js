import { useState } from 'react';

const PostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };
    // Call API to save new post
    onSubmit(newPost);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2"
          required
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2"
          required
        />
      </div>
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2">
        Submit
      </button>
    </form>
  );
};

export default PostForm;
