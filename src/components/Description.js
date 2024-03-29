/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import { url } from '../env';

const Description = ({ data }) => {
    const { _id, definition, vote } = data;
    const [votes, setVotes] = useState(vote);

    const upvoteHandler = () => {
        setVotes((prev) => +prev + 1);
        axios.post(`${url}/hashtag/upvote`, {
            _id,
        });
    };

    const downvoteHandler = () => {
        setVotes((prev) => +prev - 1);
        axios.post(`${url}/hashtag/downvote`, {
            _id,
        });
    };

    return (
        <div className="flex items-center mb-3 bg-blue-600 rounded-full py-1 px-2 mr-2">
            <div className="text-yellow-400 font-bold">
                {votes >= 0 ? `+${votes}` : votes}
            </div>
            <div className="flex items-center justify-between w-full">
                <div className="ml-4 mr-4">{definition}</div>
                <div className="flex items-center">
                    <button
                        type="button"
                        className="focus:outline-none"
                        onClick={upvoteHandler}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="focus:outline-none"
                        onClick={downvoteHandler}
                    >
                        <svg
                            className="w-6 h-6 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Description;
