"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nfunction handler(req, res) {\n    // res.status(200).json({ name: 'John Doe' })\n    const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n        service: \"gmail\",\n        auth: {\n            user: process.env.GMAIL_EMAIL_ADDRESS,\n            pass: process.env.GMAIL_APP_PASSWORD\n        },\n        secure: true,\n        authMethod: \"PLAIN\",\n        tls: {\n            rejectUnauthorized: false\n        }\n    });\n    const mailData = {\n        from: `${req.body.email}`,\n        to: [\n            \"fatimajubary@gmail.com\"\n        ],\n        subject: `${req.body.subject}`,\n        text: `${req.body.message}`,\n        html: `\r\n    <div style=\"background:#fff; padding:15px;\">\r\n    <h3>from</h3>\r\n    <p>${req.body.name}</p>\r\n    <h3>message</h3>\r\n    <p>${req.body.message}</p>\r\n    </div>\r\n    `\n    };\n    transporter.sendMail(mailData, (err, info)=>{\n        if (err) {\n            console.log(\"Error: \", err);\n            res.status(500).json({\n                error: \"Error sending message\"\n            });\n            return;\n        }\n        console.log(`Message delivered to ${info.accepted}`);\n        res.status(200).json({\n            message: \"Message sent\"\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw2RUFBNkU7QUFDekM7QUFDckIsU0FBU0MsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeEMsNkNBQTZDO0lBQzdDLE1BQU1DLGNBQWNKLGlFQUEwQixDQUFDO1FBQzdDTSxTQUFTO1FBQ1RDLE1BQU07WUFDSkMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxtQkFBbUI7WUFDckNDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csa0JBQWtCO1FBQ3RDO1FBQ0FDLFFBQVEsSUFBSTtRQUNaQyxZQUFZO1FBQ1pDLEtBQUs7WUFDSEMsb0JBQW9CLEtBQUs7UUFDM0I7SUFDRjtJQUVBLE1BQU1DLFdBQVc7UUFDZkMsTUFBTSxDQUFDLEVBQUVqQixJQUFJa0IsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQztRQUN6QkMsSUFBSTtZQUFDO1NBQXlCO1FBQzlCQyxTQUFTLENBQUMsRUFBRXJCLElBQUlrQixJQUFJLENBQUNHLE9BQU8sQ0FBQyxDQUFDO1FBQzlCQyxNQUFNLENBQUMsRUFBRXRCLElBQUlrQixJQUFJLENBQUNLLE9BQU8sQ0FBQyxDQUFDO1FBQzNCQyxNQUFNLENBQUM7OztPQUdKLEVBQUV4QixJQUFJa0IsSUFBSSxDQUFDTyxJQUFJLENBQUM7O09BRWhCLEVBQUV6QixJQUFJa0IsSUFBSSxDQUFDSyxPQUFPLENBQUM7O0lBRXRCLENBQUM7SUFDSDtJQUVBckIsWUFBWXdCLFFBQVEsQ0FBQ1YsVUFBVSxDQUFDVyxLQUFLQyxPQUFTO1FBQzVDLElBQUlELEtBQUs7WUFDUEUsUUFBUUMsR0FBRyxDQUFDLFdBQVdIO1lBQ3ZCMUIsSUFBSThCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBd0I7WUFDdEQ7UUFDRixDQUFDO1FBQ0RKLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixFQUFFRixLQUFLTSxRQUFRLENBQUMsQ0FBQztRQUNuRGpDLElBQUk4QixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVULFNBQVM7UUFBZTtJQUNqRDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lc3BvcnRmb2xpby8uL3BhZ2VzL2FwaS9jb250YWN0LmpzPzM0OTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSBcIm5vZGVtYWlsZXJcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIC8vIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbmFtZTogJ0pvaG4gRG9lJyB9KVxyXG4gIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgc2VydmljZTogXCJnbWFpbFwiLFxyXG4gICAgYXV0aDoge1xyXG4gICAgICB1c2VyOiBwcm9jZXNzLmVudi5HTUFJTF9FTUFJTF9BRERSRVNTLFxyXG4gICAgICBwYXNzOiBwcm9jZXNzLmVudi5HTUFJTF9BUFBfUEFTU1dPUkQsXHJcbiAgICB9LFxyXG4gICAgc2VjdXJlOiB0cnVlLFxyXG4gICAgYXV0aE1ldGhvZDogXCJQTEFJTlwiLFxyXG4gICAgdGxzOiB7XHJcbiAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtYWlsRGF0YSA9IHtcclxuICAgIGZyb206IGAke3JlcS5ib2R5LmVtYWlsfWAsXHJcbiAgICB0bzogW1wiZmF0aW1hanViYXJ5QGdtYWlsLmNvbVwiXSxcclxuICAgIHN1YmplY3Q6IGAke3JlcS5ib2R5LnN1YmplY3R9YCxcclxuICAgIHRleHQ6IGAke3JlcS5ib2R5Lm1lc3NhZ2V9YCxcclxuICAgIGh0bWw6IGBcclxuICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiNmZmY7IHBhZGRpbmc6MTVweDtcIj5cclxuICAgIDxoMz5mcm9tPC9oMz5cclxuICAgIDxwPiR7cmVxLmJvZHkubmFtZX08L3A+XHJcbiAgICA8aDM+bWVzc2FnZTwvaDM+XHJcbiAgICA8cD4ke3JlcS5ib2R5Lm1lc3NhZ2V9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gIH07XHJcblxyXG4gIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxEYXRhLCAoZXJyLCBpbmZvKSA9PiB7XHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnIpO1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIkVycm9yIHNlbmRpbmcgbWVzc2FnZVwiIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhgTWVzc2FnZSBkZWxpdmVyZWQgdG8gJHtpbmZvLmFjY2VwdGVkfWApO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIk1lc3NhZ2Ugc2VudFwiIH0pO1xyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImF1dGgiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIkdNQUlMX0VNQUlMX0FERFJFU1MiLCJwYXNzIiwiR01BSUxfQVBQX1BBU1NXT1JEIiwic2VjdXJlIiwiYXV0aE1ldGhvZCIsInRscyIsInJlamVjdFVuYXV0aG9yaXplZCIsIm1haWxEYXRhIiwiZnJvbSIsImJvZHkiLCJlbWFpbCIsInRvIiwic3ViamVjdCIsInRleHQiLCJtZXNzYWdlIiwiaHRtbCIsIm5hbWUiLCJzZW5kTWFpbCIsImVyciIsImluZm8iLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiYWNjZXB0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();