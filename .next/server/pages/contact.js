"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 1144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_build_webpack_loaders_next_route_loader_indexkind_PAGES_page_2Fcontact_preferredRegion_absolutePagePath_private_next_pages_2Fcontact_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/contact/index.js
var contact_namespaceObject = {};
__webpack_require__.r(contact_namespaceObject);
__webpack_require__.d(contact_namespaceObject, {
  "default": () => (contact)
});

// EXTERNAL MODULE: C:\Users\USERWD\AppData\Roaming\npm\node_modules\next\dist\server\future\route-modules\pages\module.js
var C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_server_future_route_modules_pages_module = __webpack_require__(1276);
// EXTERNAL MODULE: C:\Users\USERWD\AppData\Roaming\npm\node_modules\next\dist\server\future\route-kind.js
var C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_server_future_route_kind = __webpack_require__(6071);
// EXTERNAL MODULE: C:\Users\USERWD\AppData\Roaming\npm\node_modules\next\dist\build\webpack\loaders\next-route-loader\helpers.js
var C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_build_webpack_loaders_next_route_loader_helpers = __webpack_require__(7468);
// EXTERNAL MODULE: ./pages/_document.js
var _document = __webpack_require__(3140);
// EXTERNAL MODULE: ./pages/_app.js + 6 modules
var _app = __webpack_require__(384);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/contact/index.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/bs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const Contact = ()=>{
    const [name, setName] = (0,external_react_.useState)("");
    const [email, setEmail] = (0,external_react_.useState)("");
    const [subject, setSubject] = (0,external_react_.useState)("");
    const [message, setMessage] = (0,external_react_.useState)("");
    const [submitted, setSubmitted] = (0,external_react_.useState)(false);
    const onSubmit = async (e)=>{
        e.preventDefault();
        const data = {
            name,
            email,
            subject,
            message
        };
        try {
            const res = await fetch("api/contact", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(data)
            }).then((res)=>{
                // console.log("Response received");
                console.log(res.status);
                if (res.status === 200) {
                    // console.log("Response succeeded!");
                    setSubmitted(true);
                    setName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                }
            });
        } catch (err) {
            console.log("Error: ", err);
        }
    };
    return /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "h-full bg-primary/30 pt-5",
        children: /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
            className: "container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full",
            children: /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                className: "flex flex-col w-full max-w-[700px]",
                children: [
                    /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h2", {
                        className: "h2 text-center mb-12",
                        children: [
                            "Lets ",
                            /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
                                className: "text-accent",
                                children: " connect. "
                            })
                        ]
                    }),
                    /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("form", {
                        className: "flex-1 flex flex-col gap-6 w-full mx-auto",
                        onSubmit: onSubmit,
                        children: [
                            /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                                className: "flex gap-x-6 w-full",
                                children: [
                                    /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("input", {
                                        type: "text",
                                        placeholder: "Name",
                                        className: "input",
                                        value: name,
                                        onChange: (e)=>setName(e.target.value)
                                    }),
                                    /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("input", {
                                        type: "email",
                                        placeholder: "email",
                                        className: "input",
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("input", {
                                type: "text",
                                placeholder: "Subject",
                                className: "input",
                                value: subject,
                                onChange: (e)=>setSubject(e.target.value)
                            }),
                            /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("textarea", {
                                placeholder: "Message",
                                className: "textarea",
                                value: message,
                                onChange: (e)=>setMessage(e.target.value)
                            }),
                            /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("button", {
                                type: "submit",
                                className: "btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group",
                                children: [
                                    /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
                                        className: "group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500",
                                        children: "Lets talk"
                                    }),
                                    /*#__PURE__*/ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/bs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                        className: "-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const contact = (Contact);

;// CONCATENATED MODULE: C:\Users\USERWD\AppData\Roaming\npm\node_modules\next\dist\build\webpack\loaders\next-route-loader\index.js?kind=PAGES&page=%2Fcontact&preferredRegion=&absolutePagePath=private-next-pages%2Fcontact%2Findex.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_server_future_route_modules_pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_build_webpack_loaders_next_route_loader_indexkind_PAGES_page_2Fcontact_preferredRegion_absolutePagePath_private_next_pages_2Fcontact_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_build_webpack_loaders_next_route_loader_helpers/* hoist */.l)(contact_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_build_webpack_loaders_next_route_loader_helpers/* hoist */.l)(contact_namespaceObject, "getStaticProps");
const getStaticPaths = (0,C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_build_webpack_loaders_next_route_loader_helpers/* hoist */.l)(contact_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_build_webpack_loaders_next_route_loader_helpers/* hoist */.l)(contact_namespaceObject, "getServerSideProps");
const config = (0,C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_build_webpack_loaders_next_route_loader_helpers/* hoist */.l)(contact_namespaceObject, "config");
const reportWebVitals = (0,C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_build_webpack_loaders_next_route_loader_helpers/* hoist */.l)(contact_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_build_webpack_loaders_next_route_loader_helpers/* hoist */.l)(contact_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_build_webpack_loaders_next_route_loader_helpers/* hoist */.l)(contact_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_build_webpack_loaders_next_route_loader_helpers/* hoist */.l)(contact_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_build_webpack_loaders_next_route_loader_helpers/* hoist */.l)(contact_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_build_webpack_loaders_next_route_loader_helpers/* hoist */.l)(contact_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_server_future_route_kind/* RouteKind */.x.PAGES,
        page: "/contact",
        pathname: "/contact",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: contact_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 5830:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/bloom-filter.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1668:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll.js");

/***/ }),

/***/ 3773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/interpolate-as.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 4639:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/omit.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [371,390], () => (__webpack_exec__(1144)));
module.exports = __webpack_exports__;

})();