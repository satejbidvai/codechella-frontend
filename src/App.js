/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tweet from './components/Tweet';
import './App.css';
import './tailwind.output.css';
import PostTweet from './components/PostTweet';
import { url } from './env';

const App = () => {
    const [tweetData, setTweetData] = useState([]);

    const fetchData = async () => {
        const result = await axios(`${url}/tweet/read`);

        setTweetData(result.data.data);
    };

    useEffect(() => {
        fetchData();
    }, [tweetData]);

    return (
        <div className="bg-black">
            <div className="flex">
                <div className="w-2/5 text-white pl-32 py-4 h-auto">
                    <svg
                        viewBox="0 0 24 24"
                        className="h-12 w-12 text-white"
                        fill="currentColor"
                    >
                        <g>
                            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                        </g>
                    </svg>

                    <nav className="mt-5 px-2">
                        <a
                            href="#"
                            className="group flex items-center px-2 py-2 text-xl leading-10 font-semibold rounded-full bg-blue-600 text-blue-100 "
                        >
                            <svg
                                className="mr-4 h-6 w-6 "
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                                />
                            </svg>
                            Home
                        </a>
                        <a
                            href="#"
                            className="mt-1 group flex items-center px-2 py-2 text-xl leading-6 font-semibold rounded-full hover:bg-blue-900 hover:text-blue-300"
                        >
                            <svg
                                className="mr-4 h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                            </svg>
                            Explore
                        </a>
                        <a
                            href="#"
                            className="mt-1 group flex items-center px-2 py-2 text-xl leading-6 font-medium rounded-full hover:bg-blue-900 hover:text-blue-300"
                        >
                            <svg
                                className="mr-4 h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            Notifications
                        </a>
                        <a
                            href="#"
                            className="mt-1 group flex items-center px-2 py-2 text-xl leading-6 font-medium rounded-full hover:bg-blue-900 hover:text-blue-300"
                        >
                            <svg
                                className="mr-4 h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Messages
                        </a>
                        <a
                            href="#"
                            className="mt-1 group flex items-center px-2 py-2 text-xl leading-6 font-medium rounded-full hover:bg-blue-900 hover:text-blue-300"
                        >
                            <svg
                                className="mr-4 h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            Bookmarks
                        </a>
                        <a
                            href="#"
                            className="mt-1 group flex items-center px-2 py-2 text-xl leading-6 font-medium rounded-full hover:bg-blue-900 hover:text-blue-300"
                        >
                            <svg
                                className="mr-4 h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            Lists
                        </a>
                        <a
                            href="#"
                            className="mt-1 group flex items-center px-2 py-2 text-xl leading-6 font-medium rounded-full hover:bg-blue-900 hover:text-blue-300"
                        >
                            <svg
                                className="mr-4 h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Profile
                        </a>
                        <a
                            href="#"
                            className="mt-1 group flex items-center px-2 py-2 text-xl leading-6 font-medium rounded-full hover:bg-blue-900 hover:text-blue-300"
                        >
                            <svg
                                className="mr-4 h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            More
                        </a>

                        <button className="bg-blue-400 w-48 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                            Tweet
                        </button>
                    </nav>

                    <div className="flex-shrink-0 flex hover:bg-blue-00 rounded-full p-4 mt-12 mr-2">
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
                                    <p className="text-xl leading-6 font-medium text-white">
                                        Codechella
                                    </p>
                                    <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                        @Codechella
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="w-3/5 border border-gray-600 h-auto  border-t-0">
                    <div className="flex">
                        <div className="flex-1 m-2">
                            <h2 className="px-4 py-2 text-xl font-semibold text-white">
                                Home
                            </h2>
                        </div>
                        <div className="flex-1 px-4 py-2 m-2">
                            <a
                                href=""
                                className=" text-2xl font-medium rounded-full text-white hover:bg-blue-900 hover:text-blue-300 float-right"
                            >
                                <svg
                                    className="m-2 h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <g>
                                        <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <PostTweet />
                    <hr className="border-blue-800 border-4" />

                    <div />

                    {tweetData.map((t) => (
                        <Tweet tweet={t} key={t.tweet} />
                    ))}
                </div>

                <div className="w-2/5 h-12">
                    <div className="relative text-gray-300 w-80 p-5 pb-0 mr-16">
                        <button
                            type="submit"
                            className="absolute ml-4 mt-3 mr-4"
                        >
                            {/* <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                        </svg> */}
                        </button>

                        <input
                            type="search"
                            name="search"
                            placeholder="Search Twitter"
                            className="bg-blue-900 h-10 px-10 pr-5 w-full rounded-full text-sm focus:outline-none bg-purple-white shadow border-0"
                        />
                    </div>

                    <div className="max-w-sm rounded-lg bg-blue-900 overflow-hidden shadow-lg m-4 mr-20">
                        <div className="flex">
                            <div className="flex-1 m-2">
                                <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">
                                    Germany trends
                                </h2>
                            </div>
                            <div className="flex-1 px-4 py-2 m-2">
                                <a
                                    href=""
                                    className=" text-2xl rounded-full text-white hover:bg-blue-900 hover:text-blue-300 float-right"
                                >
                                    <svg
                                        className="m-2 h-6 w-6"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <hr className="border-gray-600" />

                        <div className="flex">
                            <div className="flex-1">
                                <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
                                    1 . Trending
                                </p>
                                <h2 className="px-4 ml-2 w-48 font-bold text-white">
                                    #Microsoft363
                                </h2>
                                <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
                                    5,466 Tweets
                                </p>
                            </div>
                            <div className="flex-1 px-4 py-2 m-2">
                                <a
                                    href=""
                                    className=" text-2xl rounded-full text-gray-400 hover:bg-blue-900 hover:text-blue-300 float-right"
                                >
                                    <svg
                                        className="m-2 h-5 w-5"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <hr className="border-gray-600" />

                        <div className="flex">
                            <div className="flex-1">
                                <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
                                    2 . Politics . Trending
                                </p>
                                <h2 className="px-4 ml-2 w-48 font-bold text-white">
                                    #HI-Fashion
                                </h2>
                                <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
                                    8,464 Tweets
                                </p>
                            </div>
                            <div className="flex-1 px-4 py-2 m-2">
                                <a
                                    href=""
                                    className=" text-2xl rounded-full text-gray-400 hover:bg-blue-900 hover:text-blue-300 float-right"
                                >
                                    <svg
                                        className="m-2 h-5 w-5"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <hr className="border-gray-600" />

                        <div className="flex">
                            <div className="flex-1">
                                <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
                                    3 . Rock . Trending
                                </p>
                                <h2 className="px-4 ml-2 w-48 font-bold text-white">
                                    #Ferrari
                                </h2>
                                <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
                                    5,586 Tweets
                                </p>
                            </div>
                            <div className="flex-1 px-4 py-2 m-2">
                                <a
                                    href=""
                                    className=" text-2xl rounded-full text-gray-400 hover:bg-blue-900 hover:text-blue-300 float-right"
                                >
                                    <svg
                                        className="m-2 h-5 w-5"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <hr className="border-gray-600" />

                        <div className="flex">
                            <div className="flex-1">
                                <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
                                    4 . Auto Racing . Trending
                                </p>
                                <h2 className="px-4 ml-2 w-48 font-bold text-white">
                                    #vettel
                                </h2>
                                <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
                                    9,416 Tweets
                                </p>
                            </div>
                            <div className="flex-1 px-4 py-2 m-2">
                                <a
                                    href=""
                                    className=" text-2xl rounded-full text-gray-400 hover:bg-blue-900 hover:text-blue-300 float-right"
                                >
                                    <svg
                                        className="m-2 h-5 w-5"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <hr className="border-gray-600" />

                        <div className="flex">
                            <div className="flex-1 p-4">
                                <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">
                                    Show more
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm rounded-lg bg-blue-900 overflow-hidden shadow-lg m-4 mr-20">
                        <div className="flex">
                            <div className="flex-1 m-2">
                                <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">
                                    Who to follow
                                </h2>
                            </div>
                        </div>

                        <hr className="border-gray-600" />

                        <div className="flex flex-shrink-0">
                            <div className="flex-1 ">
                                <div className="flex items-center w-48">
                                    <div>
                                        <img
                                            className="inline-block h-10 w-auto rounded-full ml-4 mt-2"
                                            src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-3 mt-3">
                                        <p className="text-base leading-6 font-medium text-white">
                                            Codechella
                                        </p>
                                        <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                            @Codechella
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 px-4 py-2 m-2">
                                <a href="" className=" float-right">
                                    <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                                        Follow
                                    </button>
                                </a>
                            </div>
                        </div>
                        <hr className="border-gray-600" />

                        <div className="flex flex-shrink-0">
                            <div className="flex-1 ">
                                <div className="flex items-center w-48">
                                    <div>
                                        <img
                                            className="inline-block h-10 w-auto rounded-full ml-4 mt-2"
                                            src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-3 mt-3">
                                        <p className="text-base leading-6 font-medium text-white">
                                            Codechella
                                        </p>
                                        <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                            @Codechella
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 px-4 py-2 m-2">
                                <a href="" className=" float-right">
                                    <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                                        Follow
                                    </button>
                                </a>
                            </div>
                        </div>

                        <hr className="border-gray-600" />

                        <div className="flex">
                            <div className="flex-1 p-4">
                                <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">
                                    Show more
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="flow-root m-6">
                        <div className="flex-1">
                            <a href="#">
                                <p className="text-sm leading-6 font-medium text-gray-500">
                                    Terms Privacy Policy Cookies Imprint Ads
                                    info
                                </p>
                            </a>
                        </div>
                        <div className="flex-2">
                            <p className="text-sm leading-6 font-medium text-gray-600">
                                {' '}
                                © 2020 Twitter, Inc.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
