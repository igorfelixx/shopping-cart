(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{28:function(e,c,t){},29:function(e,c,t){},30:function(e,c,t){},39:function(e,c,t){},40:function(e,c,t){},41:function(e,c,t){},42:function(e,c,t){"use strict";t.r(c);var a=t(1),n=t.n(a),i=t(16),r=t.n(i),s=(t(28),t(18)),d=t(9),l=t(19),j=(t(29),{productItems:[{id:"1",name:"Beats Headphone",price:999,image:"./pics/image_product.png"},{id:"2",name:"Sol Headphone",price:500,image:"./pics/image_product.png"},{id:"3",name:"Sennheiser",price:799,image:"./pics/image_product.png"},{id:"4",name:"Iphone X",price:1199,image:"./pics/image_product.png"},{id:"5",name:"Samsung",price:1e3,image:"./pics/image_product.png"},{id:"6",name:"OnePlus",price:1299,image:"./pics/image_product.png"},{id:"7",name:"MacBook",price:2999,image:"./pics/image_product.png"},{id:"8",name:"Acer laptop",price:1099,image:"./pics/image_product.png"},{id:"9",name:"Asus LapTop",price:1299,image:"./pics/image_product.png"}]}),m=t(7),o=(t(30),t(0));function u(e){var c=e.cartItems;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:Object(o.jsx)(m.b,{to:"/",className:"logo",children:"Electronics Shop"})})}),Object(o.jsxs)("div",{className:"header-links",children:[Object(o.jsx)("ul",{children:Object(o.jsx)("li",{children:Object(o.jsx)(m.b,{to:"/",children:"Home"})})}),Object(o.jsx)("ul",{children:Object(o.jsx)("li",{children:Object(o.jsx)(m.b,{to:"/signup",children:"SignUp"})})}),Object(o.jsx)("ul",{children:Object(o.jsx)("li",{children:Object(o.jsxs)(m.b,{to:"/cart",className:"cart",children:[Object(o.jsx)("i",{class:"fas fa-shopping-cart"}),Object(o.jsx)("span",{className:"cart-length",children:0===c.length?"":c.length})]})})})]})]})})}t(39);function h(e){var c=e.productItems,t=e.handleAddProduct;return Object(o.jsx)("div",{className:"products",children:c.map((function(e){return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"product-image",src:e.image,alt:e.name})}),Object(o.jsx)("div",{children:Object(o.jsx)("h3",{className:"product-name",children:e.name})}),Object(o.jsxs)("div",{className:"product-price",children:["$",e.price]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"product-add-button",onClick:function(){t(e)},children:"Add to cart"})})]})}))})}t(40);function p(){return Object(o.jsx)("div",{className:"signup",children:"Signup"})}t(41);function b(e){var c=e.cartItems,t=e.handleAddProduct,a=e.handleRemoveProduct,n=e.handleCartClearance,i=c.reduce((function(e,c){return e+c.quantity*c.price}),0);return Object(o.jsxs)("div",{className:"cart-items",children:[Object(o.jsxs)("div",{className:"cart-items-header",children:[Object(o.jsx)("h2",{className:"cart-items-header",children:"Cart Items"}),Object(o.jsx)("div",{className:"clear-cart",children:c.length>=1&&Object(o.jsx)("button",{className:"clear-cart-button",onClick:n,children:"Clear Cart"})})]}),0===c.length&&Object(o.jsx)("div",{className:"cart-items-empty",children:" No items area added"}),Object(o.jsx)("div",{children:c.map((function(e){return Object(o.jsxs)("div",{className:"cart-item-list",children:[Object(o.jsx)("img",{className:"cart-items-image",src:e.image,alt:e.name}),Object(o.jsx)("div",{className:"cart-items-name",children:e.name}),Object(o.jsxs)("div",{className:"cart-items-functions",children:[Object(o.jsx)("button",{className:"cart-items-add",onClick:function(){t(e)},children:"+"}),Object(o.jsx)("button",{className:"cart-items-remove",onClick:function(){a(e)},children:"-"})]}),Object(o.jsxs)("div",{className:"cart-items-price",children:[e.quantity," * $",e.price]})]},e.id)}))}),Object(o.jsxs)("div",{className:"cart-items-total-price-name",children:["Total price",Object(o.jsxs)("div",{className:"cart-items-total-price",children:["$",i]})]})]})}var O=t(2);function x(e){var c=e.productItems,t=e.cartItems,a=e.handleAddProduct,n=e.handleRemoveProduct,i=e.handleCartClearance;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(O.c,{children:[Object(o.jsx)(O.a,{path:"/",exact:!0,children:Object(o.jsx)(h,{productItems:c,handleAddProduct:a})}),Object(o.jsx)(O.a,{path:"/signup",exact:!0,children:Object(o.jsx)(p,{})}),Object(o.jsx)(O.a,{path:"/cart",exact:!0,children:Object(o.jsx)(b,{cartItems:t,handleAddProduct:a,handleRemoveProduct:n,handleCartClearance:i})})]})})}var g=function(){var e=j.productItems,c=Object(a.useState)([]),t=Object(l.a)(c,2),n=t[0],i=t[1];return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(m.a,{children:[Object(o.jsx)(u,{cartItems:n}),Object(o.jsx)(x,{productItems:e,cartItems:n,handleAddProduct:function(e){var c=n.find((function(c){return c.id===e.id}));i(c?n.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},c),{},{quantity:c.quantity+1}):t})):[].concat(Object(s.a)(n),[Object(d.a)(Object(d.a)({},e),{},{quantity:1})]))},handleRemoveProduct:function(e){var c=n.find((function(c){return c.id===e.id}));1===c.quantity?i(n.filter((function(c){return c.id!==e.id}))):i(n.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},c),{},{quantity:c.quantity-1}):t})))},handleCartClearance:function(){i([])}})]})})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(c){var t=c.getCLS,a=c.getFID,n=c.getFCP,i=c.getLCP,r=c.getTTFB;t(e),a(e),n(e),i(e),r(e)}))};r.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(g,{})})),v()}},[[42,1,2]]]);
//# sourceMappingURL=main.d22238a0.chunk.js.map