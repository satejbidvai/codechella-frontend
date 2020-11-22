/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Description from './Description';
import { url } from '../env';

const Modal = ({ setShowModal, hashtag }) => {
    const [def, setDef] = useState([]);
    const [toggle, setToggle] = useState(true);
    const [hash, setHash] = useState('');

    useEffect(() => {
        axios
            .post(`${url}/hashtag/read`, {
                tag: hashtag,
            })
            .then((res) => {
                console.log(res.data.data);
                setDef(res.data.data);
            })
            .catch((e) => console.log(e));
    }, [hashtag]);

    const clickHandler = () => {
        if (toggle) {
            setToggle((prevState) => !prevState);
            return;
        }

        if (hash === '') {
            return;
        }

        axios
            .post(`${url}/hashtag/create`, {
                tag: hashtag,
                owner: `Codechella${Math.round(Math.random() * 1000)}`,
                definition: hash,
            })
            .then((res) => console.log(res));

        setShowModal(false);
    };

    return (
        <>
            <div className="justify-center items-center mb-10 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative w-2/5 my-6 mx-auto max-w-3xl">
                    <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none"
                        style={{ background: '#15202B' }}
                    >
                        <div className="flex py-2 border-b border-solid border-gray-300 rounded-t ">
                            <button
                                className="p-1 bg-transparent border-0 text-black opacity-5 float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <svg
                                    className="w-6 h-6 text-blue-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="ml-2 flex justify-between w-full items-center">
                                <h3 className="text-xl font-bold text-white">
                                    {`#${hashtag}`}
                                </h3>
                                <div className="w-full text-right flex justify-end mr-4">
                                    <a
                                        className="text-xs text-white bg-blue-500 rounded-full py-1 px-2 mr-2 uppercase font-bold text-center focus:outline-none flex items-center"
                                        href={`${url}/engage/${hashtag}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Engage
                                        <svg
                                            className="w-4 h-4 ml-1"
                                            fill="white"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </a>
                                    <a
                                        href={`https://twitter.com/hashtag/${hashtag}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-6 flex-auto">
                            <div className="w-full flex justify-center">
                                <img
                                    src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
                                    alt="QR Code"
                                    className="w-32 h-32"
                                />
                            </div>
                            <div className="my-4 text-white text-lg leading-relaxed max-h-64 overflow-y-scroll">
                                {def.length === 0
                                    ? !toggle
                                        ? null
                                        : 'No description added!'
                                    : def.map((d) => (
                                          <Description
                                              key={d.definition}
                                              data={d}
                                          />
                                      ))}
                            </div>
                            {!toggle && (
                                <div className="flex-1 px-2 pt-2 mt-2">
                                    <textarea
                                        className=" bg-transparent text-gray-400 font-medium text-lg w-full border-none focus:outline-none mt-4"
                                        rows="2"
                                        cols="50"
                                        placeholder="Hashtag Description"
                                        value={hash}
                                        onChange={(e) =>
                                            setHash(e.target.value)
                                        }
                                    />
                                </div>
                            )}
                        </div>

                        <div className="flex justify-end mr-2 mb-2">
                            <button
                                className="text-xs text-white bg-blue-500 rounded-full py-1 px-2 mr-2 uppercase font-bold w-1/5 text-center focus:outline-none"
                                onClick={clickHandler}
                            >
                                {toggle ? 'Add desc.' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-75 fixed inset-0 z-40 bg-black" />
        </>
    );
};

export default Modal;
