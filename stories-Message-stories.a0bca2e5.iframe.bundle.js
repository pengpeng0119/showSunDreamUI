"use strict";(self.webpackChunksun_dream_ui=self.webpackChunksun_dream_ui||[]).push([[388],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/stories/Message.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary1:function(){return Primary1},Primary2:function(){return Primary2},Primary3:function(){return Primary3},Primary4:function(){return Primary4},__namedExportsOrder:function(){return __namedExportsOrder}});var _Primary1$parameters,_Primary1$parameters2,_Primary1$parameters3,_Primary2$parameters,_Primary2$parameters2,_Primary2$parameters3,_Primary3$parameters,_Primary3$parameters2,_Primary3$parameters3,_Primary4$parameters,_Primary4$parameters2,_Primary4$parameters3,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_components_Message_Message__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Message/Message.jsx"),_components_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Example/Message",component:_components_Button__WEBPACK_IMPORTED_MODULE_1__.Z};__webpack_exports__.default=meta;var handleClick1=function handleClick1(){_components_Message_Message__WEBPACK_IMPORTED_MODULE_0__.Z.info("我是全局提示组件")},handleClick2=function handleClick2(){_components_Message_Message__WEBPACK_IMPORTED_MODULE_0__.Z.success("我是全局提示组件")},handleClick3=function handleClick3(){_components_Message_Message__WEBPACK_IMPORTED_MODULE_0__.Z.danger("我是全局提示组件")},handleClick4=function handleClick4(){_components_Message_Message__WEBPACK_IMPORTED_MODULE_0__.Z.warn("我是全局提示组件")},Primary1={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_1__.Z,{onClick:handleClick1,btnType:"primary",children:"click"})}},Primary2={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_1__.Z,{onClick:handleClick2,btnType:"success",children:"click"})}},Primary3={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_1__.Z,{onClick:handleClick3,btnType:"danger",children:"click"})}},Primary4={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_1__.Z,{onClick:handleClick4,btnType:"default",children:"click"})}};Primary1.parameters=(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},Primary1.parameters),{},{docs:(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},null===(_Primary1$parameters=Primary1.parameters)||void 0===_Primary1$parameters?void 0:_Primary1$parameters.docs),{},{source:(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({originalSource:'{\n  render: () => {\n    return <Button onClick={handleClick1} btnType="primary">\r\n        click\r\n      </Button>;\n  }\n}'},null===(_Primary1$parameters2=Primary1.parameters)||void 0===_Primary1$parameters2||null===(_Primary1$parameters3=_Primary1$parameters2.docs)||void 0===_Primary1$parameters3?void 0:_Primary1$parameters3.source)})}),Primary2.parameters=(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},Primary2.parameters),{},{docs:(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},null===(_Primary2$parameters=Primary2.parameters)||void 0===_Primary2$parameters?void 0:_Primary2$parameters.docs),{},{source:(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({originalSource:'{\n  render: () => {\n    return <Button onClick={handleClick2} btnType="success">\r\n        click\r\n      </Button>;\n  }\n}'},null===(_Primary2$parameters2=Primary2.parameters)||void 0===_Primary2$parameters2||null===(_Primary2$parameters3=_Primary2$parameters2.docs)||void 0===_Primary2$parameters3?void 0:_Primary2$parameters3.source)})}),Primary3.parameters=(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},Primary3.parameters),{},{docs:(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},null===(_Primary3$parameters=Primary3.parameters)||void 0===_Primary3$parameters?void 0:_Primary3$parameters.docs),{},{source:(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({originalSource:'{\n  render: () => {\n    return <Button onClick={handleClick3} btnType="danger">\r\n        click\r\n      </Button>;\n  }\n}'},null===(_Primary3$parameters2=Primary3.parameters)||void 0===_Primary3$parameters2||null===(_Primary3$parameters3=_Primary3$parameters2.docs)||void 0===_Primary3$parameters3?void 0:_Primary3$parameters3.source)})}),Primary4.parameters=(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},Primary4.parameters),{},{docs:(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},null===(_Primary4$parameters=Primary4.parameters)||void 0===_Primary4$parameters?void 0:_Primary4$parameters.docs),{},{source:(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({originalSource:'{\n  render: () => {\n    return <Button onClick={handleClick4} btnType="default">\r\n        click\r\n      </Button>;\n  }\n}'},null===(_Primary4$parameters2=Primary4.parameters)||void 0===_Primary4$parameters2||null===(_Primary4$parameters3=_Primary4$parameters2.docs)||void 0===_Primary4$parameters3?void 0:_Primary4$parameters3.source)})});var __namedExportsOrder=["Primary1","Primary2","Primary3","Primary4"]},"./src/components/Button/button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["btnType","className","disabled","rounded","size","children","href","ellipse"],Button=function Button(props){var _classNames,btnType=props.btnType,className=props.className,disabled=props.disabled,rounded=props.rounded,size=props.size,children=props.children,href=props.href,ellipse=props.ellipse,restProps=(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(props,_excluded),classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("btn",className,(_classNames={},(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_classNames,"btn-".concat(btnType),btnType),(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_classNames,"btn-".concat(size),size),(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_classNames,"disabled","link"===btnType&&disabled),(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_classNames,"btn-ellipse",ellipse),(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_classNames,"btn-rounded",rounded),_classNames));return"link"===btnType&&href?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({className:classes,href:href},restProps),{},{children:children})):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({className:classes,disabled:disabled},restProps),{},{children:children}))};Button.defaultProps={disabled:!1,btnType:"default"},__webpack_exports__.Z=Button;try{button.displayName="button",button.__docgenInfo={description:"",displayName:"button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},ellipse:{defaultValue:null,description:"",name:"ellipse",required:!1,type:{name:"boolean"}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},btnType:{defaultValue:{value:"default"},description:"",name:"btnType",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"primary"'},{value:'"default"'},{value:'"danger"'},{value:'"success"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/button.tsx#button"]={docgenInfo:button.__docgenInfo,name:"button",path:"src/components/Button/button.tsx#button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Button/button.tsx");__webpack_exports__.Z=_button__WEBPACK_IMPORTED_MODULE_0__.Z;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},ellipse:{defaultValue:null,description:"",name:"ellipse",required:!1,type:{name:"boolean"}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},btnType:{defaultValue:{value:"default"},description:"",name:"btnType",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"primary"'},{value:'"default"'},{value:'"danger"'},{value:'"success"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Icon/icon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","theme"];__webpack_exports__.Z=function Icon(props){var className=props.className,theme=props.theme,restProps=(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(props,_excluded),classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("viking-icon",className,(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},"icon-".concat(theme),theme));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.G,(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({className:classes},restProps))};try{icon.displayName="icon",icon.__docgenInfo={description:"",displayName:"icon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"success"'},{value:'"secondary"'},{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/icon.tsx#icon"]={docgenInfo:icon.__docgenInfo,name:"icon",path:"src/components/Icon/icon.tsx#icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Message/Message.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Message_Message}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),components_Icon=__webpack_require__("./src/components/Icon/icon.tsx").Z;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"success"'},{value:'"secondary"'},{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/index.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Icon/index.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}var fontawesome_svg_core=__webpack_require__("./node_modules/@fortawesome/fontawesome-svg-core/index.mjs"),free_solid_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),client=__webpack_require__("./node_modules/react-dom/client.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");fontawesome_svg_core.vI.add(free_solid_svg_icons.mRB);var div=document.createElement("div");document.body.appendChild(div);var timer,root=(0,client.createRoot)(div);function notice(args){return root.render((0,jsx_runtime.jsx)(Message,(0,objectSpread2.Z)({},args)))}function Message(props){var _useState=(0,react.useState)([]),_useState2=(0,slicedToArray.Z)(_useState,2),msgs=_useState2[0],setMsgs=_useState2[1],content=props.content,type=props.type,showIcon=function showIcon(){return"info"===type?(0,jsx_runtime.jsx)(components_Icon,{className:"message-content-icon",icon:"info"}):"success"===type?(0,jsx_runtime.jsx)(components_Icon,{className:"message-content-icon",icon:"check-circle"}):"warn"===type?(0,jsx_runtime.jsx)(components_Icon,{className:"message-content-icon",icon:"radiation-alt"}):"danger"===type?(0,jsx_runtime.jsx)(components_Icon,{className:"message-content-icon",icon:"exclamation-triangle"}):void console.log("show",type)};(0,react.useEffect)((function(){setMsgs([].concat((0,toConsumableArray.Z)(msgs),[props]))}),[props]),(0,react.useEffect)((function(){if(msgs.length){var msgscopy=JSON.parse(JSON.stringify(msgs));clearInterval(timer),timer=setInterval((function(setMsgs){msgscopy.shift(),setMsgs(JSON.parse(JSON.stringify(msgscopy))),msgscopy.length||clearInterval(timer)}),1e3*props.duration,setMsgs)}}),[msgs]);var classes=classnames_default()("message-content",(0,defineProperty.Z)({},"message-".concat(type),type));return(0,jsx_runtime.jsx)("div",{className:"message",children:msgs.map((function(item,index){return(0,jsx_runtime.jsxs)("div",{className:classes,children:[showIcon(),(0,jsx_runtime.jsx)("span",{className:"message-content-text",children:content})]},index)}))})}var api={info:function info(content){return notice({content:content,duration:arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"info"})},success:function success(content){return notice({content:content,duration:arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"success"})},warn:function warn(content){return notice({content:content,duration:arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"warn"})},danger:function danger(content){return notice({content:content,duration:arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"danger"})}},Message_Message=api;Message.__docgenInfo={description:"",methods:[],displayName:"Message"}}}]);