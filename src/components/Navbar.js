import React from "react";

function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
        <nav className="relative flex flex-wrap px-2 py-3 bg-gray-200 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="32" viewBox="0 0 150 32">
            <g fill="none" fill-rule="evenodd">
                <path stroke="#13C265" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 25.5c4 1.667 7.333 2.5 10 2.5s6-.833 10-2.5M16 17l3.613 4.516c.232.29.622.402.972.28l8.25-2.888c.455-.16.696-.659.536-1.115-.033-.093-.08-.18-.143-.257L26 13.5h0L16 17zm0-7l5.12-4.19c.236-.192.556-.249.843-.148l8.065 2.823c.456.16.696.659.537 1.115-.054.152-.148.286-.272.388L26 13.5h0L16 10zm-4.585 11.795l-8.25-2.887c-.455-.16-.696-.659-.536-1.115.033-.093.08-.18.143-.257L6 13.5h0L16 17l-3.613 4.516c-.232.29-.622.402-.972.28zM10.037 5.662L1.972 8.485c-.456.16-.696.659-.537 1.115.054.152.148.286.272.388L6 13.5h0L16 10l-5.12-4.19c-.236-.192-.556-.249-.843-.148z" transform="translate(0 -1)"/>
                <path fill="#1A1817" d="M48.4 24.336c1.92 0 3.24-.696 4.056-1.68L52.84 24h2.232v-7.992h-6.456v2.64h3.336v.792c0 1.536-1.656 2.208-3.48 2.208-2.832 0-3.936-2.472-3.936-5.64 0-2.736.624-5.52 4.128-5.52 2.088 0 2.952.984 3 2.688l3.168-.672c.264-2.136-1.608-4.704-6.144-4.704-4.944 0-7.608 3.144-7.608 8.304 0 4.872 2.544 8.232 7.32 8.232zm13.772 0c2.712 0 4.248-1.056 4.848-3.048l-2.64-.552c-.312.792-.888 1.296-2.16 1.296-1.824 0-2.352-1.2-2.448-2.904h7.248v-1.272c0-3.528-1.704-5.328-4.896-5.328-4.2 0-5.52 2.952-5.52 5.904 0 4.032 2.016 5.904 5.568 5.904zm1.704-7.32H59.82c.24-1.68.96-2.184 2.256-2.184 1.368 0 1.8.888 1.8 1.992v.192zm8.78 7.224c2.424 0 3.12-1.344 3.624-3.048l-2.304-.912c-.12.96-.36 1.536-.936 1.536-.552 0-.744-.408-.744-1.272v-5.376h3.096v-2.304h-3.096V9.72h-2.832l-.12 3.144h-1.632v2.304h1.584v5.352c0 1.896.816 3.72 3.36 3.72zm7.604.096c1.752 0 2.784-.888 3.312-1.68.264.864 1.104 1.776 3.408 1.488l.552-2.448c-1.236.199-1.335-.334-1.343-1.261l-.001-3.587c0-3.024-1.224-4.32-4.488-4.32-3.288 0-5.016 1.464-4.752 3.504l2.976.552c-.048-1.296.528-1.776 1.608-1.776 1.272 0 1.656.576 1.656 2.112v.384c-4.032.024-6.624 1.272-6.624 3.864 0 2.088 1.704 3.168 3.696 3.168zm.696-2.304c-.816 0-1.248-.384-1.248-1.08 0-1.248 1.416-1.632 3.48-1.656v.936c-.096 1.128-1.176 1.8-2.232 1.8zM91.728 24v-5.52c.216-.936.96-3.384 2.736-3.384.936 0 1.368.648 1.368 2.088V24h3v-5.52c.216-.936.96-3.384 2.736-3.384.936 0 1.368.648 1.368 2.088V24h3v-7.608c0-3.072-1.728-3.864-3.552-3.864-2.592 0-3.552 1.776-3.792 2.4-.432-1.776-1.704-2.4-3.312-2.4-2.448 0-3.432 1.584-3.744 2.28v-1.944h-2.808V24h3zm21.38.336c4.128 0 5.544-2.568 5.544-5.904s-1.416-5.904-5.544-5.904-5.544 2.616-5.544 5.904 1.416 5.904 5.544 5.904zm0-2.304c-1.92 0-2.4-1.752-2.4-3.6s.48-3.6 2.4-3.6 2.4 1.752 2.4 3.6-.48 3.6-2.4 3.6zM125.656 24l4.248-11.136h-3.144l-1.848 5.544c-.192.528-.336 1.176-.456 1.68-.096-.504-.24-1.176-.432-1.68l-2.016-5.544h-3.24L123.04 24h2.616zm9.956.336c2.712 0 4.248-1.056 4.848-3.048l-2.64-.552c-.312.792-.888 1.296-2.16 1.296-1.824 0-2.352-1.2-2.448-2.904h7.248v-1.272c0-3.528-1.704-5.328-4.896-5.328-4.2 0-5.52 2.952-5.52 5.904 0 4.032 2.016 5.904 5.568 5.904zm1.704-7.32h-4.056c.24-1.68.96-2.184 2.256-2.184 1.368 0 1.8.888 1.8 1.992v.192zM145.16 24v-5.712c.312-1.392.984-3.12 2.04-3.12.648 0 1.032.696 1.032.696l1.68-2.376s-.624-.96-1.992-.96c-1.752 0-2.472 1.152-2.952 2.28v-1.944h-2.808V24h3z" transform="translate(0 -1)"/>
            </g>
        </svg>

            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">   
                <a
                className=" text-red-900 text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
                href="#pablo"
                >
            </a>
            <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border-teal-500 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
                >
                Menu                
                </button>
            </div>
            <div className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}>
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li className="nav-item">
                            <a
                            className="px-3 py-2 flex items-center text-md leading-snug hover:opacity-75"
                            href="#pablo"
                            >
                            Removal Companies
                            </a>
                    </li>
                    <li className="nav-item">
                        <a
                        className="px-3 py-2 flex items-center text-md leading-snug hover:opacity-75"
                        href="#pablo"
                        >
                        Removal Van
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        className="px-3 py-2 flex items-center text-md leading-snug hover:opacity-75"
                        href="#pablo"
                        >
                        International
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        className="px-3 py-2 flex items-center text-md leading-snug hover:opacity-75"
                        href="#pablo"
                        >
                        Domestic
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        className="px-3 py-2 flex items-center text-md leading-snug hover:opacity-75"
                        href="#pablo"
                        >
                        Help + Advice
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        className="px-3 py-2 flex items-center text-md  leading-snug hover:opacity-75"
                        href="#pablo"
                        >
                        Become a Partner
                        </a>
                    </li>

                
                </ul>
            </div>
            </div>
        </nav>
        </>
    );
    }

    export default Navbar