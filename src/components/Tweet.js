/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Modal from './Modal';

const Tweet = (props) => {
    const { username, tweet } = props.tweet;

    const newTweet = tweet.replace('\n', ' \n ');
    const words = newTweet.split(' ').filter((w) => w !== '');

    const [showModal, setShowModal] = useState(false);

    const [modalHash, setModalHash] = useState('');

    console.log(words);

    return (
        <>
            {showModal && (
                <Modal setShowModal={setShowModal} hashtag={modalHash} />
            )}
            <div className="flex flex-shrink-0 p-4 pb-0">
                <a href="#" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                        <div>
                            <img
                                className="inline-block h-10 w-10 rounded-full"
                                src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                                alt=""
                            />
                        </div>
                        <div className="ml-3">
                            <p className="text-base leading-6 font-medium text-white">
                                Codechella!
                                <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150 ml-1">
                                    @{username} ~ 21 Nov
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="pl-16">
                <p className="text-base width-auto font-medium text-white flex-shrink">
                    {/* Day 07 of the challenge{' '}
                    <span className="text-blue-400">#100DaysOfCode</span>I was
                    wondering what I can do with{' '}
                    <span className="text-blue-400">#tailwindcss</span>, so just
                    started building Twitter UI using Tailwind and so far it
                    looks so promising. I will post my code after completion.
                    [07/100]
                    <span className="text-blue-400">
                        {' '}
                        #WomenWhoCode #CodeNewbie
                    </span> */}
                    {words.map((word, i) => {
                        if (word[0] === '#') {
                            return (
                                <span
                                    key={i}
                                    className="text-blue-400 hover:underline cursor-pointer"
                                    onClick={() => {
                                        setShowModal(true);
                                        setModalHash(word.substring(1));
                                    }}
                                >
                                    {word}{' '}
                                </span>
                            );
                        }

                        if (word[0] === '\n') {
                            return <br />;
                        }
                        return <span key={i}>{word} </span>;
                    })}
                </p>

                <div className="flex">
                    <div className="w-full">
                        <div className="flex items-center">
                            <div className="flex-1 text-center">
                                <a
                                    href="#"
                                    className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-900 hover:text-blue-300"
                                >
                                    <svg
                                        className="text-center h-6 w-6"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a
                                    href="#"
                                    className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-900 hover:text-blue-300"
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
                                        <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                    </svg>
                                </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a
                                    href="#"
                                    className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-900 hover:text-blue-300"
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
                                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </a>
                            </div>
                            <div className="flex-1 text-center py-2 m-2">
                                <a
                                    href="#"
                                    className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-900 hover:text-blue-300"
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
                                        <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-gray-600" />
        </>
    );
};

export default Tweet;
