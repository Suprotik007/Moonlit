import React from 'react';

const NewsLetterBox = () => {
    return (
        <div>
            <div className="join gap-2">
  <div>
    <label className="input border-2  border-gray-700  validator rounded-xl">
      <svg className="h-[1em] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </g>
      </svg>
      <input type="email" placeholder="Enter Your Mail" required />
    </label>
    <div className="validator-hint hidden">Enter valid email address</div>
  </div>
  <button className="btn btn-outline border-2 border-gray-700 hover:bg-gray-700 hover:text-white rounded-xl">Join</button>
</div>
        </div>
    );
};

export default NewsLetterBox;