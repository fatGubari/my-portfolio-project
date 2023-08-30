exports.id = 390;
exports.ids = [390];
exports.modules = {

/***/ 384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(8491);
// EXTERNAL MODULE: C:\Users\USERWD\AppData\Roaming\npm\node_modules\next\router.js
var C_Users_USERWD_AppData_Roaming_npm_node_modules_next_router = __webpack_require__(9466);
// EXTERNAL MODULE: C:\Users\USERWD\AppData\Roaming\npm\node_modules\next\link.js
var C_Users_USERWD_AppData_Roaming_npm_node_modules_next_link = __webpack_require__(9491);
var C_Users_USERWD_AppData_Roaming_npm_node_modules_next_link_default = /*#__PURE__*/__webpack_require__.n(C_Users_USERWD_AppData_Roaming_npm_node_modules_next_link);
;// CONCATENATED MODULE: ./components/Nav.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/hi2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// next router



// icons

// nav data
const navData = [
    {
        name: "home",
        path: "/",
        icon: /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/hi2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {})
    },
    {
        name: "about",
        path: "/about",
        icon: /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/hi2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {})
    },
    {
        name: "work",
        path: "/work",
        icon: /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/hi2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {})
    },
    {
        name: "contact",
        path: "/contact",
        icon: /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/hi2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {})
    }
];
function Nav() {
    const router = (0,C_Users_USERWD_AppData_Roaming_npm_node_modules_next_router.useRouter)();
    const pathName = router.pathname;
    return /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("nav", {
        className: "flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen",
        children: /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
            className: "flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[50px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full",
            children: navData.map((link, index)=>{
                return /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((C_Users_USERWD_AppData_Roaming_npm_node_modules_next_link_default()), {
                    href: link.path,
                    className: `${link.path === pathName && "text-cyan-500"} relative flex items-center group hover:text-cyan-500 transition-all duration-300`,
                    children: [
                        /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                            className: "absolute pr-14 right-0 hidden xl:group-hover:flex",
                            children: /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                                className: "bg-white relative flex text-primary items-center p-[6px] rounded-[3px]",
                                children: /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                                    className: "text-[12px] leading-none font-semibold capitalize",
                                    children: link.name
                                })
                            })
                        }),
                        /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                            children: link.icon
                        })
                    ]
                }, index);
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/Socials.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/ai'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const PDF_URL = "http://localhost:3000/Resume.pdf";
function Social() {
    const downloadResume = (url)=>{
        const fileName = url.split("/").pop();
        const Tag = document.createElement("a");
        Tag.href = url;
        Tag.setAttribute("download", fileName);
        document.body.appendChild(Tag);
        Tag.click();
        Tag.remove;
    };
    return /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "flex items-center gap-x-5 text-lg",
        children: [
            /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
                href: "https://www.linkedin.com/in/fatimabdullahmohammed/",
                target: "_blank",
                className: "hover:text-cyan-500 transition-all duration-300",
                children: /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/ai'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {})
            }),
            /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("button", {
                className: "hover:text-cyan-500",
                onClick: ()=>{
                    downloadResume(PDF_URL);
                },
                children: "Resume"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Header.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const Header_PDF_URL = "http://localhost:3000/Resume.pdf";
const Header = ()=>{
    return /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("header", {
        className: "absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]",
        children: /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
            className: "container mx-auto",
            children: /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                className: "flex flex-col lg:flex-row justify-around items-center gap-y-6 py-5",
                children: [
                    /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h1", {
                        className: "text-xl",
                        children: "Fatima Abdullah"
                    }),
                    /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Social, {})
                ]
            })
        })
    });
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: C:\Users\USERWD\AppData\Roaming\npm\node_modules\next\image.js
var C_Users_USERWD_AppData_Roaming_npm_node_modules_next_image = __webpack_require__(1671);
var C_Users_USERWD_AppData_Roaming_npm_node_modules_next_image_default = /*#__PURE__*/__webpack_require__.n(C_Users_USERWD_AppData_Roaming_npm_node_modules_next_image);
;// CONCATENATED MODULE: ./components/TopLeftImg.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function TopLeftImg() {
    return /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[300px] opacity-50",
        children: /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((C_Users_USERWD_AppData_Roaming_npm_node_modules_next_image_default()), {
            src: "/top-left-img.png",
            width: 400,
            height: 400,
            alt: "top-left-img"
        })
    });
}

;// CONCATENATED MODULE: ./components/Layout.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@next/font/google/target.css?{\"path\":\"components\\\\Layout.js\",\"import\":\"Sora\",\"arguments\":[{\"subsets\":[\"latin\"],\"variable\":\"--font-sora\",\"weight\":[\"100\",\"200\",\"300\",\"400\",\"500\",\"600\",\"700\",\"800\"]}],\"variableName\":\"sora\"}'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// fonts


// components



function Layout({ children }) {
    return /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: `page bg-site text-white bg-cover bg-no-repeat ${Object(function webpackMissingModule() { var e = new Error("Cannot find module '@next/font/google/target.css?{\"path\":\"components\\\\Layout.js\",\"import\":\"Sora\",\"arguments\":[{\"subsets\":[\"latin\"],\"variable\":\"--font-sora\",\"weight\":[\"100\",\"200\",\"300\",\"400\",\"500\",\"600\",\"700\",\"800\"]}],\"variableName\":\"sora\"}'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())} font-sora relative`,
        children: [
            /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(TopLeftImg, {}),
            /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Nav, {}),
            /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(components_Header, {}),
            children
        ]
    });
}

;// CONCATENATED MODULE: ./components/Transition.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'framer-motion'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// feame motion


const transitionVariants = {
    initial: {
        x: "100%",
        with: "100%"
    },
    animate: {
        x: "0%",
        width: "0%"
    },
    exit: {
        x: [
            "0%",
            "100%"
        ],
        width: [
            "0%",
            "100%"
        ]
    }
};
const Transition = ()=>{
    return /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        children: [
            /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'framer-motion'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).div, {
                className: "fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-indigo-950",
                variants: transitionVariants,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                transition: {
                    delay: 0.2,
                    duration: 0.6,
                    ease: "easeInOut"
                }
            }),
            /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'framer-motion'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).div, {
                className: "fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-indigo-950",
                variants: transitionVariants,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                transition: {
                    delay: 0.2,
                    duration: 0.6,
                    ease: "easeInOut"
                }
            }),
            /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'framer-motion'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).div, {
                className: "fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-violet-900",
                variants: transitionVariants,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                transition: {
                    delay: 0.6,
                    duration: 0.6,
                    ease: "easeInOut"
                }
            })
        ]
    });
};
/* harmony default export */ const components_Transition = (Transition);

;// CONCATENATED MODULE: ./pages/_app.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'framer-motion'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






function MyApp({ Component, pageProps }) {
    const router = (0,C_Users_USERWD_AppData_Roaming_npm_node_modules_next_router.useRouter)();
    return /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Layout, {
        children: /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'framer-motion'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            mode: "wait",
            children: /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'framer-motion'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).div, {
                className: "h-full",
                children: [
                    /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(components_Transition, {}),
                    /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Component, {
                        ...pageProps
                    })
                ]
            }, router.route)
        })
    });
}


/***/ }),

/***/ 3140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8162);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                children: [
                    /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/apple-touch-icon.png"
                    }),
                    /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon-32x32.png"
                    }),
                    /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon-16x16.png"
                    }),
                    /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("link", {
                        rel: "manifest",
                        href: "/site.webmanifest"
                    })
                ]
            }),
            /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("body", {
                children: [
                    /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 8491:
/***/ (() => {



/***/ })

};
;