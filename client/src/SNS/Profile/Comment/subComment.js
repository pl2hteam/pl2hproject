import React from 'react';

const subComment = () => {
  return (
    <div>
      <br />
      <p>댓글</p>
      <hr />

      <form style={{ display:'flex' }} onSubmit>
        <textarea 
          style={{ width: '100x%', borderRadius: '5px' }}
          onChange
          value
          placeholder="댓글 달기..."
        />
        <br />
        <button style={{ width: '20%', height: '37px' }} onClick >게시</button>

      </form>
    </div>
  )
};

export default subComment;
