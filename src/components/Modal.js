/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Description from './Description';

const Modal = ({ setShowModal, hashtag }) => {
    const [def, setDef] = useState([]);
    const [toggle, setToggle] = useState(true);
    const [hash, setHash] = useState('');

    useEffect(() => {
        axios
            .post('http://localhost:8000/hashtag/read', {
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
            .post('http://localhost:8000/hashtag/create', {
                tag: hashtag,
                owner: `Codechella${Math.round(Math.random() * 1000)}`,
                definition: hash,
            })
            .then((res) => console.log(res));

        setShowModal(false);
    };

    return (
        <>
            <div className="justify-center items-center mb-40 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
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
                                <a
                                    className="w-full text-right flex justify-end mr-4"
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
                        <div className="relative p-6 flex-auto">
                            <div className="my-4 text-white text-lg leading-relaxed">
                                {def.length === 0
                                    ? 'No description added!'
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
