(this["webpackJsonpreact-payment"]=this["webpackJsonpreact-payment"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),s=n.n(r),l=n(4),i=n(3),o=n(2),d=n(0),u=function(){return Object(d.jsx)("button",{className:"h-4 w-4",children:Object(d.jsx)("svg",{width:"17",height:"17",viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M8.30426 1L1.36476 8.78658L9.15134 15.7261",stroke:"#525252",strokeWidth:"1.5"})})})},m=function(e){var t=e.size,n=void 0===t?"middle":t,a=e.name,c=void 0===a?"NAME":a,r=e.expiration,s=e.cardCompany,l=e.cardNumbers;return Object(d.jsxs)("div",{className:"".concat({small:"w-208 h-130",middle:"w-213 h-133",large:"w-293 h-183"}[n]," px-4 py-2 rounded-xl bg-gray-350 ").concat(s.color," shadow-lg font-mono tracking-wide"),children:[Object(d.jsx)("span",{className:"".concat("large"===n?"text-sm":"text-xxs"," inline-block text-black-500"),children:s.name}),Object(d.jsx)("div",{className:"w-1/5 h-1/5 ".concat("large"===n?"mt-8":"mt-4"," rounded-md bg-yellow-450")}),Object(d.jsx)("ul",{className:"flex mt-3 text-sm ".concat({small:"h-5",middle:"h-5",large:"h-10"}[n]," items-center mx-1"),children:Array.from({length:4}).map((function(e,t){var a,c=Object.keys(l)[t];return Object(d.jsx)("li",{className:"".concat("large"===n?"text-lg mr-9":"text-sm mr-3"," text-black-700 w-8"),children:Object(d.jsx)("div",{children:t>1?(a=l[c],"*".repeat(a.length)):l[c]})},"cardNumber-".concat(c))}))}),Object(d.jsxs)("div",{className:"flex justify-between ".concat("large"===n?"text-base":"text-xs"," text-black-700 mt-1 mx-0.5"),children:[Object(d.jsx)("div",{children:c}),Object(d.jsx)("div",{children:r})]})]})},j=function(e){return Object(d.jsx)("section",{className:"max-w-375 max-h-701 mt-5 p-5 mx-auto flex fixed inset-0 z-10 bg-gray-400 bg-opacity-70 rounded-3xl",role:"dialog","aria-modal":"true","aria-label":"\uce74\ub4dc\uc0ac \uc120\ud0dd modal",children:Object(d.jsx)("div",{className:"absolute flex items-center p-7 rounded-3xl rounded-b-none bg-white left-0 bottom-0 \n        ".concat(e.width||"w-full"," ").concat(e.height||"h-227"),children:e.children})})},b=function(e){var t=e.company,n=e.onClick;return Object(d.jsx)("li",{className:"mt-4 list-none",onClick:n,"data-company":t,children:Object(d.jsxs)("button",{className:"flex flex-col justify-center items-center text-center h-16 w-16",children:[Object(d.jsx)("div",{className:"w-10 h-10 rounded-full justify-center bg-".concat(t)}),Object(d.jsx)("span",{className:"mt-1 text-xs text-black-700",children:"".concat(t," \uce74\ub4dc")})]})})},x=function(e){var t=e.onClick;return Object(d.jsx)(j,{children:Object(d.jsx)("ul",{className:"flex flex-wrap justify-around h-full",children:["\ud3ec\ucf54","\uc900","\uacf5\uc6d0","\ub85c\uc774\ub4dc","\ud2f0\ucf00","\uc740\ud604","\uc720\uc870","\uc724\ud638"].map((function(e){return Object(d.jsx)(b,{company:e,onClick:t},e)}))})})},h=function(e){var t=e.text,n=e.type,a=void 0===n?"submit":n,c=e.color,r=void 0===c?"text-green-350":c;return Object(d.jsx)("button",{type:a,className:"absolute right-10 ".concat(r," font-bold"),children:t})},O=function(e){var t=e.type,n=void 0===t?"text":t,a=e.name,c=void 0===a?"":a,r=e.min,s=e.max,l=e.minLength,i=e.length,o=e.required,u=void 0===o||o,m=e.value,j=e.placeholder,b=void 0===j?"":j,x=e.onChange,h=e.className,O=void 0===h?"":h,p=e.disabled,g=void 0!==p&&p;return Object(d.jsx)("input",{type:n,name:c,min:r,max:s,minLength:null!==l&&void 0!==l?l:i,maxLength:i,placeholder:b,value:m,className:"bg-gray-250 text-green-350 h-10 w-full text-left outline-none focus:border border-gray-400 rounded ".concat(O),required:u,onChange:x,disabled:g})},p=function(e){var t=e.title,n=e.children,a=e.width,c=e.bgColor,r=void 0===c?"":c,s=e.count,l=void 0!==s&&s;return Object(d.jsxs)("div",{className:"flex w-full flex-col mt-5",children:[Object(d.jsxs)("div",{className:"flex justify-between items-center",children:[Object(d.jsx)("label",{className:"text-xs ",children:t}),Object(d.jsx)("span",{className:"mr-1 text-xs",children:l||0===l?"".concat(l,"/30"):""})]}),Object(d.jsx)("div",{className:"".concat(a," flex items-center mt-1.5 font-gray-350 ").concat(r," rounded"),children:n})]})},g=function(e){var t=e.cardNumbers,n=e.handleCardNumbersInput;return Object(d.jsx)(p,{title:"\uce74\ub4dc \ubc88\ud638",bgColor:"bg-gray-250",width:"w-full",children:Object(d.jsx)(d.Fragment,{children:Array.from({length:4}).map((function(e,a){var r=Object.keys(t)[a];return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(O,{type:a>1?"password":"text",length:4,placeholder:"0000",value:t[r],onChange:function(e){return n(e,r)},className:"px-3.5 text-center"}),3===a?"":Object(d.jsx)("span",{children:"-"})]},"cardNumber-".concat(r))}))})})},f=function(e){var t=e.expiration,n=e.handleExpirationInput;return Object(d.jsx)(p,{title:"\ub9cc\ub8cc\uc77c",width:"w-5/12",bgColor:"bg-gray-250",children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{placeholder:"MM",type:"number",min:1,max:12,value:t.month,onChange:function(e){return n(e,"month")},className:"text-center pl-4"}),Object(d.jsx)("span",{className:"text-gray-400 ",children:"/"}),Object(d.jsx)(O,{placeholder:"YY",type:"number",min:21,value:t.year,onChange:function(e){return n(e,"year")},className:"text-center pr-4"})]})})},v=function(e){var t=e.ownerName,n=e.handleOwnerNameInput;return Object(d.jsx)(p,{title:"\uce74\ub4dc \uc18c\uc720\uc790 \uc774\ub984(\uc120\ud0dd)",bgColor:"bg-gray-250",count:t.length,width:"w-full",children:Object(d.jsx)(O,{minLength:0,length:30,placeholder:"\uce74\ub4dc\uc5d0 \ud45c\uc2dc\ub41c \uc774\ub984\uacfc \ub3d9\uc77c\ud558\uac8c \uc785\ub825\ud558\uc138\uc694.",value:t,onChange:n,required:!1,className:"px-4"})})},N=function(e){var t=e.innerText,n=void 0===t?"?":t,c=e.content,r=Object(a.useState)(!1),s=Object(o.a)(r,2),l=s[0],i=s[1];return Object(d.jsxs)("div",{className:"relative",children:[Object(d.jsx)("button",{type:"button",className:"w-6 h-6  ml-2 flex justify-center items-center rounded-full ring-1 ring-gray-400 text-lg text-gray-400 focus:outline-none",onClick:function(){i(!l)},children:n}),l&&Object(d.jsx)("div",{className:"ring-1 rounded-2xl rounded-tl-none ring-gray-400 w-24 absolute left-7 top-4 bg-gray-100",children:c})]})},y=function(e){var t=e.securityCode,n=e.handleSecurityCodeInput;return Object(d.jsx)(p,{title:"\ubcf4\uc548\ucf54\ub4dc(CVC/CVV)",width:"w-1/3",children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{type:"password",length:3,value:t,className:"px-4 text-center",onChange:n}),Object(d.jsx)(N,{content:Object(d.jsx)("img",{src:"images/CVC.png",alt:"\uce74\ub4dc \ub4b7\uba74 \uc11c\uba85\ub780 \ub05d\uc758 \uc138\uc790\ub9ac \uc22b\uc790\uc785\ub2c8\ub2e4."})})]})})},w=function(e){var t=e.password,n=e.handlePasswordInput;return Object(d.jsx)(p,{title:"\uce74\ub4dc \ube44\ubc00\ubc88\ud638",width:"w-7/12",children:Object(d.jsx)(d.Fragment,{children:Array.from({length:4}).map((function(e,a){var c,r,s=null!==(c=Object.keys(t)[a])&&void 0!==c?c:"";return Object(d.jsx)(O,{className:"mr-1.5 text-center ".concat(a>1&&"bg-opacity-0"),width:"small",type:"password",length:1,name:null!==s&&void 0!==s?s:"",value:null!==(r=t[s])&&void 0!==r?r:"*",onChange:n},a)}))})})},C=function(e){var t=e.cardNumbers,n=e.cardCompany,a=e.expiration,c=e.ownerName,r=e.securityCode,s=e.password,l=e.isModalOpened,i=e.handleCardNumbersInput,o=e.handleCardCompany,j=e.handleExpirationInput,b=e.handleOwnerNameInput,O=e.handleSecurityCodeInput,p=e.handlePasswordInput,N=e.handleCardInfoSubmit;return Object(d.jsxs)("div",{className:"p-5",children:[Object(d.jsxs)("div",{className:"flex items-center",children:[Object(d.jsx)(u,{}),Object(d.jsx)("h1",{className:"text-xl ml-4",children:"\uce74\ub4dc \ucd94\uac00"})]}),Object(d.jsx)("div",{className:"flex justify-center my-7",children:Object(d.jsx)(m,{name:c||"NAME",expiration:"".concat(a.month||"MM","/").concat(a.year||"YY"),cardCompany:n,cardNumbers:t})}),Object(d.jsxs)("form",{onSubmit:N,children:[Object(d.jsx)(g,{cardNumbers:t,handleCardNumbersInput:i}),Object(d.jsx)(f,{expiration:a,handleExpirationInput:j}),Object(d.jsx)(v,{ownerName:c,handleOwnerNameInput:b}),Object(d.jsx)(y,{securityCode:r,handleSecurityCodeInput:O}),Object(d.jsx)(w,{password:s,handlePasswordInput:p}),Object(d.jsx)(h,{text:"\ub2e4\uc74c"})]}),l&&Object(d.jsx)(x,{onClick:o})]})},I=function(e){var t=e.name;return Object(d.jsx)("input",{type:"text",placeholder:"\uce74\ub4dc \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",maxLength:10,className:"border-b border-black-500 w-3/4 text-center outline-none\t",name:t})},S=function(e){var t=e.cardCompany,n=e.cardNumbers,a=e.expiration,c=e.ownerName,r=e.resetState,s=e.setCardName;return Object(d.jsxs)("form",{className:"h-full p-5 flex flex-col items-center",onSubmit:function(e){e.preventDefault();var t=e.target.elements.cardName.value;s(t),r()},children:[Object(d.jsx)("h1",{className:"mt-20 text-2xl text-gray-600",children:"\uce74\ub4dc \ub4f1\ub85d\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),Object(d.jsx)("div",{className:"mt-20 mb-10",children:Object(d.jsx)(m,{size:"large",name:c||"NAME",expiration:"".concat(a.month||"MM","/").concat(a.year||"YY"),cardCompany:t,cardNumbers:n})}),Object(d.jsx)(I,{name:"cardName"}),Object(d.jsx)("div",{className:"mt-40",children:Object(d.jsx)(h,{text:"\uc644\ub8cc"})})]})},k=function(e){return!!/^[0-9]/gi.test(Number(e))};var M=function(){var e=Object(a.useState)({name:"",color:""}),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({month:"",year:""}),s=Object(o.a)(r,2),u=s[0],m=s[1],j=Object(a.useState)(""),b=Object(o.a)(j,2),x=b[0],h=b[1],O=Object(a.useState)(""),p=Object(o.a)(O,2),g=p[0],f=p[1],v=Object(a.useState)({first:"",second:""}),N=Object(o.a)(v,2),y=N[0],w=N[1],I=Object(a.useState)({first:"",second:"",third:"",fourth:""}),M=Object(o.a)(I,2),E=M[0],A=M[1],L=Object(a.useState)(!1),Y=Object(o.a)(L,2),F=Y[0],V=Y[1],P=Object(a.useState)(!1),q=Object(o.a)(P,2),z=q[0],B=q[1],D=Object(a.useState)(""),J=Object(o.a)(D,2),T=(J[0],J[1]);return Object(a.useEffect)((function(){E.first.length+E.second.length!==8||n.name||V(!0)}),[E,n]),Object(d.jsx)("div",{className:"relative max-w-375 mt-5 p-5 mx-auto bg-white rounded-3xl",children:z?Object(d.jsx)(S,{cardCompany:n,cardNumbers:E,expiration:u,ownerName:x,setIsAllValid:B,resetState:function(){c({name:"",color:""}),m({month:"",year:""}),h(""),f(""),w({first:"",second:""}),A({first:"",second:"",third:"",fourth:""}),V(!1),B(!1)},setCardName:T}):Object(d.jsx)(C,{cardNumbers:E,cardCompany:n,expiration:u,ownerName:x,securityCode:g,password:y,isModalOpened:F,handleCardNumbersInput:function(e,t){var n=e.target.value;k(n)&&A(Object(i.a)(Object(i.a)({},E),{},Object(l.a)({},t,n.trim())))},handleCardCompany:function(e){var t=e.target.closest("li").dataset.company;c({name:"".concat(t," \uce74\ub4dc"),color:"bg-".concat(t)}),V(!1)},handleExpirationInput:function(e,t){var n=e.target.value,a=String(n);a.length>2||m(Object(i.a)(Object(i.a)({},u),{},Object(l.a)({},t,a.replace(/[^0-9]s/g,""))))},handleOwnerNameInput:function(e){var t=e.target.value;h(t.trimStart())},handleSecurityCodeInput:function(e){var t=e.target.value;k(t)&&f(t.trim())},handlePasswordInput:function(e){var t=e.target,n=t.value,a=t.name;k(n)&&w(Object(i.a)(Object(i.a)({},y),{},Object(l.a)({},a,n.trim())))},handleCardInfoSubmit:function(e){e.preventDefault(),B(!0)}})})};n(12);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.1a999e51.chunk.js.map