/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import axios from 'axios';
import { url } from '../env';

const PostTweet = () => {
    const [toggleHash, setToggleHash] = useState(true);
    const [tweet, setTweet] = useState('');
    const [hash, setHash] = useState('');

    const submitHandler = () => {
        if (toggleHash) {
            if (tweet === '') {
                return;
            }

            axios
                .post(`${url}/tweet/create`, {
                    username: `Codechella${Math.round(Math.random() * 1000)}`,
                    tweet,
                })
                .then((res) => console.log(res));
        } else {
            if (hash === '' || tweet === '') {
                return;
            }

            axios
                .post(`${url}/hashtag/create`, {
                    tag: hash,
                    owner: `Codechella${Math.round(Math.random() * 1000)}`,
                    definition: tweet,
                })
                .then((res) => console.log(res));
        }

        setTweet(() => '');
        setHash(() => '');
        setToggleHash(() => true);
    };

    console.log(toggleHash);

    return (
        <>
            <hr className="border-gray-600" />
            <div className="flex">
                <div className="m-2 w-10 py-1">
                    <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                        alt=""
                    />
                </div>
                <div className="flex-1 px-2 pt-2 mt-2">
                    {!toggleHash && (
                        <input
                            className=" bg-transparent text-gray-400 font-medium text-lg w-full border-none focus:outline-none"
                            placeholder="Enter hashtag"
                            value={hash}
                            onChange={(e) => setHash(e.target.value)}
                        />
                    )}
                    <textarea
                        className=" bg-transparent text-gray-400 font-medium text-lg w-full border-none focus:outline-none mt-4"
                        rows={2}
                        cols="50"
                        placeholder={
                            toggleHash
                                ? `What's happening?`
                                : 'Hashtag Description'
                        }
                        value={tweet}
                        onChange={(e) => setTweet(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex">
                <div className="w-10" />

                <div className="w-64 px-2">
                    <div className="flex items-center">
                        <div className="flex-1 text-center px-1 py-1 m-2">
                            <a
                                href="#"
                                className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-900 hover:text-blue-300"
                            >
                                <svg
                                    className="text-center h-7 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>

                        <div className="flex-1 text-center py-2 m-2">
                            <a
                                href="#"
                                className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-900 hover:text-blue-300"
                            >
                                <svg
                                    className="text-center h-7 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                        </div>

                        <div className="flex-1 text-center py-2 m-2">
                            <a
                                href="#"
                                className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-900 hover:text-blue-300"
                            >
                                <svg
                                    className="text-center h-7 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>

                        <div className="flex-1 text-center py-2 m-2">
                            <a
                                href="#"
                                className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-900 hover:text-blue-300"
                                onClick={() =>
                                    setToggleHash((prevState) => !prevState)
                                }
                            >
                                <svg
                                    className="text-center h-7 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <button
                        className="bg-blue-400 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full mr-8 float-right focus:outline-none"
                        type="button"
                        onClick={submitHandler}
                    >
                        {toggleHash ? 'Tweet' : 'Create'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default PostTweet;
