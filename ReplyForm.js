import { useState } from 'react';

const ReplyForm = ({ onSubmit }) => {
  const [reply, setReply] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReply = { reply };
    // Call API to save the reply
    onSubmit(newReply);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label htmlFor="reply">Reply</label>
        <textarea
          id="reply"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          className="border p-2"
          required
        />
      </div>
      <button type="submit" className="mt-2 bg-green-500 text-white p-2">
        Submit Reply
      </button>
    </form>
  );
};

export default ReplyForm;
import { useState } from 'react';
import ReplyForm from './ReplyForm';

const PostItem = ({ post }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleReplySubmit = (newReply) => {
    // Call API to save reply to this post
    console.log('Reply submitted: ', newReply);
    setShowReplyForm(false);
  };

  return (
    <div className="post-item p-4 border">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={() => setShowReplyForm(!showReplyForm)} className="bg-yellow-500 p-2">
        {showReplyForm ? 'Cancel' : 'Reply'}
      </button>

      {showReplyForm && <ReplyForm onSubmit={handleReplySubmit} />}
    </div>
  );
};

export default PostItem;


