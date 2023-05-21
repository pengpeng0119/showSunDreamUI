"use strict";(self.webpackChunksun_dream_ui=self.webpackChunksun_dream_ui||[]).push([[148],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/stories/Menu.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultButton:function(){return DefaultButton},DefaultButton1:function(){return DefaultButton1},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Menu_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=(__webpack_require__("./src/styles/index.scss"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js")),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),MenuItem=function MenuItem(props){var index=props.index,disabled=props.disabled,className=props.className,style=props.style,children=props.children,context=(0,react.useContext)(MenuContext),classes=classnames_default()("menu-item",className,{"is-disabled":disabled,"is-active":context.index===index});return(0,jsx_runtime.jsx)("li",{className:classes,style:style,onClick:function handleClick(){context.onSelect&&!disabled&&"string"==typeof index&&context.onSelect(index)},children:children})};MenuItem.displayName="MenuItem";var menuitem=MenuItem;try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"",displayName:"MenuItem",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menuitem.tsx#MenuItem"]={docgenInfo:MenuItem.__docgenInfo,name:"MenuItem",path:"src/components/Menu/menuitem.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}var icon=__webpack_require__("./src/components/Icon/icon.tsx"),SubMenu=function SubMenu(_ref){var timer,index=_ref.index,title=_ref.title,children=_ref.children,className=_ref.className,context=(0,react.useContext)(MenuContext),openedSubMenus=context.defaultOpenSubMenus,isOpend=!(!index||"vertical"!==context.mode)&&openedSubMenus.includes(index),_useState=(0,react.useState)(isOpend),_useState2=(0,slicedToArray.Z)(_useState,2),menuOpen=_useState2[0],setOpen=_useState2[1],classes=classnames_default()("menu-item submenu-item",className,{"is-active":context.index===index,"is-opened":menuOpen,"is-vertical":"vertical"===context.mode}),handleMouse=function handleMouse(e,toggle){clearTimeout(timer),e.preventDefault(),timer=setTimeout((function(){setOpen(toggle)}),200)},clickEvents="vertical"===context.mode?{onClick:function handleClick(e){e.preventDefault(),setOpen(!menuOpen)}}:{},hoverEvents="vertical"!==context.mode?{onMouseEnter:function onMouseEnter(e){handleMouse(e,!0)},onMouseLeave:function onMouseLeave(e){handleMouse(e,!1)}}:{};return(0,jsx_runtime.jsxs)("li",(0,objectSpread2.Z)((0,objectSpread2.Z)({className:classes},hoverEvents),{},{children:[(0,jsx_runtime.jsxs)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({className:"submenu-title"},clickEvents),{},{children:[title,(0,jsx_runtime.jsx)(icon.Z,{icon:"angle-down",className:"arrow-icon"})]})),function renderChildren(){var subMenuClasses=classnames_default()("viking-submenu",{"menu-opened":menuOpen}),childrenComponent=react.Children.map(children,(function(child,i){var childElement=child;if("MenuItem"===childElement.type.displayName)return react.cloneElement(childElement,{index:"".concat(index,"-").concat(i)});console.error("Warning:SubMenu has a child which is not a MenuItem")}));return(0,jsx_runtime.jsx)("ul",{className:subMenuClasses,children:childrenComponent})}()]}),index)};SubMenu.displayName="SubMenu";var subMenu=SubMenu;try{SubMenu.displayName="SubMenu",SubMenu.__docgenInfo={description:"",displayName:"SubMenu",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/subMenu.tsx#SubMenu"]={docgenInfo:SubMenu.__docgenInfo,name:"SubMenu",path:"src/components/Menu/subMenu.tsx#SubMenu"})}catch(__react_docgen_typescript_loader_error){}var MenuContext=(0,react.createContext)({index:"0"}),Menu=function Menu(props){var className=props.className,mode=props.mode,style=props.style,onSelect=props.onSelect,children=props.children,defaultIndex=props.defaultIndex,defaultOpenSubMenus=props.defaultOpenSubMenus,classes=classnames_default()("viking-menu",className,{"menu-vertical":"vertical"===mode,"menu-horizontal":"vertical"!==mode}),_useState=(0,react.useState)(defaultIndex),_useState2=(0,slicedToArray.Z)(_useState,2),currentActive=_useState2[0],setActive=_useState2[1],passedContext={index:currentActive||"0",onSelect:function handleClick(index){setActive(index),onSelect&&onSelect(index)},mode:mode,defaultOpenSubMenus:defaultOpenSubMenus};return(0,jsx_runtime.jsx)("ul",{className:classes,style:style,children:(0,jsx_runtime.jsx)(MenuContext.Provider,{value:passedContext,children:function renderChildren(){return react.Children.map(children,(function(child,index){var childElement=child,displayName=childElement.type.displayName;if("MenuItem"===displayName||"SubMenu"===displayName)return react.cloneElement(childElement,{index:index.toString()});console.error("Warning:Menu has a child which is not a MenuItem component")}))}()})})},ShowMenuH=function ShowMenuH(props){var mode=props.mode,onSelect=props.onSelect;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Menu,{defaultIndex:"1",defaultOpenSubMenus:["4"],mode:mode,onSelect:onSelect,children:[(0,jsx_runtime.jsx)(menuitem,{disabled:!0,children:"cool link 1"}),(0,jsx_runtime.jsx)(menuitem,{children:"cool link 2"}),(0,jsx_runtime.jsx)(menuitem,{children:"cool link 3"}),(0,jsx_runtime.jsx)(menuitem,{children:"cool link 4"}),(0,jsx_runtime.jsxs)(subMenu,{title:"dropdown",children:[(0,jsx_runtime.jsx)(menuitem,{children:"1MenuItem"}),(0,jsx_runtime.jsx)(menuitem,{children:"2MenuItem"}),(0,jsx_runtime.jsx)(menuitem,{children:"3MenuItem"})]})]}),(0,jsx_runtime.jsx)("div",{style:{height:"100px"}})]})};Menu.defaultProps={defaultIndex:"0",mode:"horizontal",defaultOpenSubMenus:[]};try{ShowMenuH.displayName="ShowMenuH",ShowMenuH.__docgenInfo={description:"",displayName:"ShowMenuH",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menu.tsx#ShowMenuH"]={docgenInfo:ShowMenuH.__docgenInfo,name:"ShowMenuH",path:"src/components/Menu/menu.tsx#ShowMenuH"})}catch(__react_docgen_typescript_loader_error){}try{menu.displayName="menu",menu.__docgenInfo={description:"",displayName:"menu",props:{defaultIndex:{defaultValue:{value:"0"},description:"",name:"defaultIndex",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selectedIndex: string) => void)"}},defaultOpenSubMenus:{defaultValue:{value:"[]"},description:"",name:"defaultOpenSubMenus",required:!1,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menu.tsx#menu"]={docgenInfo:menu.__docgenInfo,name:"menu",path:"src/components/Menu/menu.tsx#menu"})}catch(__react_docgen_typescript_loader_error){}var _DefaultButton$parame,_DefaultButton$parame2,_DefaultButton$parame3,_DefaultButton$parame4,_DefaultButton$parame5,_DefaultButton1$param,_DefaultButton1$param2,_DefaultButton1$param3,fontawesome_svg_core=__webpack_require__("./node_modules/@fortawesome/fontawesome-svg-core/index.mjs"),free_solid_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),Message=__webpack_require__("./src/components/Message/Message.jsx");fontawesome_svg_core.vI.add(free_solid_svg_icons.mRB);var handleClick=function handleClick(index){Message.Z.success("您点击的是".concat(index,"号menu"))},Menu_stories={title:"Example/Menu",component:ShowMenuH,tags:["autodocs"]},DefaultButton={args:{mode:"horizontal",onSelect:function onSelect(index){handleClick(index)}},name:"菜单"},DefaultButton1={args:{mode:"vertical",onSelect:function onSelect(index){handleClick(index)}},name:"菜单竖向"};DefaultButton.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},DefaultButton.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_DefaultButton$parame=DefaultButton.parameters)||void 0===_DefaultButton$parame?void 0:_DefaultButton$parame.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    mode: 'horizontal',\n    onSelect: (index: any) => {\n      handleClick(index);\n    }\n  },\n  name: '菜单'\n}"},null===(_DefaultButton$parame2=DefaultButton.parameters)||void 0===_DefaultButton$parame2||null===(_DefaultButton$parame3=_DefaultButton$parame2.docs)||void 0===_DefaultButton$parame3?void 0:_DefaultButton$parame3.source),description:(0,objectSpread2.Z)({story:"### 引入\r\n~~~js\r\nimport {Input} from 'sun-dream-ui'\r\n~~~"},null===(_DefaultButton$parame4=DefaultButton.parameters)||void 0===_DefaultButton$parame4||null===(_DefaultButton$parame5=_DefaultButton$parame4.docs)||void 0===_DefaultButton$parame5?void 0:_DefaultButton$parame5.description)})}),DefaultButton1.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},DefaultButton1.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_DefaultButton1$param=DefaultButton1.parameters)||void 0===_DefaultButton1$param?void 0:_DefaultButton1$param.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    mode: 'vertical',\n    onSelect: (index: any) => {\n      handleClick(index);\n    }\n  },\n  name: '菜单竖向'\n}"},null===(_DefaultButton1$param2=DefaultButton1.parameters)||void 0===_DefaultButton1$param2||null===(_DefaultButton1$param3=_DefaultButton1$param2.docs)||void 0===_DefaultButton1$param3?void 0:_DefaultButton1$param3.source)})});var __namedExportsOrder=["DefaultButton","DefaultButton1"]},"./src/components/Icon/icon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","theme"];__webpack_exports__.Z=function Icon(props){var className=props.className,theme=props.theme,restProps=(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(props,_excluded),classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("viking-icon",className,(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},"icon-".concat(theme),theme));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.G,(0,C_Users_peng_Desktop_react_sun_dream_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({className:classes},restProps))};try{icon.displayName="icon",icon.__docgenInfo={description:"",displayName:"icon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"success"'},{value:'"secondary"'},{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/icon.tsx#icon"]={docgenInfo:icon.__docgenInfo,name:"icon",path:"src/components/Icon/icon.tsx#icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Message/Message.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Message_Message}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),components_Icon=__webpack_require__("./src/components/Icon/icon.tsx").Z;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"success"'},{value:'"secondary"'},{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/index.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Icon/index.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}var fontawesome_svg_core=__webpack_require__("./node_modules/@fortawesome/fontawesome-svg-core/index.mjs"),free_solid_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),client=__webpack_require__("./node_modules/react-dom/client.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");fontawesome_svg_core.vI.add(free_solid_svg_icons.mRB);var div=document.createElement("div");document.body.appendChild(div);var timer,root=(0,client.createRoot)(div);function notice(args){return root.render((0,jsx_runtime.jsx)(Message,(0,objectSpread2.Z)({},args)))}function Message(props){var _useState=(0,react.useState)([]),_useState2=(0,slicedToArray.Z)(_useState,2),msgs=_useState2[0],setMsgs=_useState2[1],content=props.content,type=props.type,showIcon=function showIcon(){return"info"===type?(0,jsx_runtime.jsx)(components_Icon,{className:"message-content-icon",icon:"info"}):"success"===type?(0,jsx_runtime.jsx)(components_Icon,{className:"message-content-icon",icon:"check-circle"}):"warn"===type?(0,jsx_runtime.jsx)(components_Icon,{className:"message-content-icon",icon:"radiation-alt"}):"danger"===type?(0,jsx_runtime.jsx)(components_Icon,{className:"message-content-icon",icon:"exclamation-triangle"}):void console.log("show",type)};(0,react.useEffect)((function(){setMsgs([].concat((0,toConsumableArray.Z)(msgs),[props]))}),[props]),(0,react.useEffect)((function(){if(msgs.length){var msgscopy=JSON.parse(JSON.stringify(msgs));clearInterval(timer),timer=setInterval((function(setMsgs){msgscopy.shift(),setMsgs(JSON.parse(JSON.stringify(msgscopy))),msgscopy.length||clearInterval(timer)}),1e3*props.duration,setMsgs)}}),[msgs]);var classes=classnames_default()("message-content",(0,defineProperty.Z)({},"message-".concat(type),type));return(0,jsx_runtime.jsx)("div",{className:"message",children:msgs.map((function(item,index){return(0,jsx_runtime.jsxs)("div",{className:classes,children:[showIcon(),(0,jsx_runtime.jsx)("span",{className:"message-content-text",children:content})]},index)}))})}var api={info:function info(content){return notice({content:content,duration:arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"info"})},success:function success(content){return notice({content:content,duration:arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"success"})},warn:function warn(content){return notice({content:content,duration:arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"warn"})},danger:function danger(content){return notice({content:content,duration:arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"danger"})}},Message_Message=api;Message.__docgenInfo={description:"",methods:[],displayName:"Message"}},"./src/styles/index.scss":function(){}}]);