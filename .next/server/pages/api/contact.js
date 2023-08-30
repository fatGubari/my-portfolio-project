"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 9956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_build_webpack_loaders_next_route_loader_indexkind_PAGES_API_page_2Fapi_2Fcontact_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fcontact_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/contact.js
var contact_namespaceObject = {};
__webpack_require__.r(contact_namespaceObject);
__webpack_require__.d(contact_namespaceObject, {
  "default": () => (handler)
});

// EXTERNAL MODULE: C:\Users\USERWD\AppData\Roaming\npm\node_modules\next\dist\server\future\route-modules\pages-api\module.js
var C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_server_future_route_modules_pages_api_module = __webpack_require__(3048);
// EXTERNAL MODULE: C:\Users\USERWD\AppData\Roaming\npm\node_modules\next\dist\server\future\route-kind.js
var C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_server_future_route_kind = __webpack_require__(129);
// EXTERNAL MODULE: C:\Users\USERWD\AppData\Roaming\npm\node_modules\next\dist\build\webpack\loaders\next-route-loader\helpers.js
var C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_build_webpack_loaders_next_route_loader_helpers = __webpack_require__(8761);
;// CONCATENATED MODULE: ./pages/api/contact.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'nodemailer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function handler(req, res) {
    // res.status(200).json({ name: 'John Doe' })
    const transporter = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'nodemailer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_EMAIL_ADDRESS,
            pass: process.env.GMAIL_APP_PASSWORD
        },
        secure: true,
        authMethod: "PLAIN",
        tls: {
            rejectUnauthorized: false
        }
    });
    const mailData = {
        from: `${req.body.email}`,
        to: [
            "fatimajubary@gmail.com"
        ],
        subject: `${req.body.subject}`,
        text: `${req.body.message}`,
        html: `
    <div style="background:#fff; padding:15px;">
    <h3>from</h3>
    <p>${req.body.name}</p>
    <h3>message</h3>
    <p>${req.body.message}</p>
    </div>
    `
    };
    transporter.sendMail(mailData, (err, info)=>{
        if (err) {
            console.log("Error: ", err);
            res.status(500).json({
                error: "Error sending message"
            });
            return;
        }
        console.log(`Message delivered to ${info.accepted}`);
        res.status(200).json({
            message: "Message sent"
        });
    });
}

;// CONCATENATED MODULE: C:\Users\USERWD\AppData\Roaming\npm\node_modules\next\dist\build\webpack\loaders\next-route-loader\index.js?kind=PAGES_API&page=%2Fapi%2Fcontact&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fcontact.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_server_future_route_modules_pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_build_webpack_loaders_next_route_loader_indexkind_PAGES_API_page_2Fapi_2Fcontact_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fcontact_js_middlewareConfigBase64_e30_3D_ = ((0,C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_build_webpack_loaders_next_route_loader_helpers/* hoist */.l)(contact_namespaceObject, "default"));
// Re-export config.
const config = (0,C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_build_webpack_loaders_next_route_loader_helpers/* hoist */.l)(contact_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: C_Users_USERWD_AppData_Roaming_npm_node_modules_next_dist_server_future_route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/contact",
        pathname: "/api/contact",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: contact_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [996], () => (__webpack_exec__(9956)));
module.exports = __webpack_exports__;

})();