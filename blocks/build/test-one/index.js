(function(e,c,r,t){"use strict";const g="",h="";function l({attributes:{quote:n,person:o},setAttributes:s,isSelected:v}){const i=t.useBlockProps(),m=a=>{s({quote:a})},p=a=>{s({person:a})};return[e.createElement("div",{key:"render",...i},e.createElement(t.RichText,{tagName:"blockquote",onChange:m,value:n,placeholder:r.__("Put a new quote text here","vlow"),className:"quote"}),e.createElement(t.RichText,{tagName:"figcaption",onChange:p,value:o,placeholder:r.__("Person name & title here","vlow"),className:"person"}))]}function u({attributes:{quote:n,person:o}}){const s=t.useBlockProps.save();return e.createElement("div",{...s},e.createElement(t.RichText.Content,{tagName:"blockquote",value:n,className:"quote"},n),e.createElement(t.RichText.Content,{tagName:"figcaption",value:o,className:"person"},o))}c.registerBlockType("funtime/test-one",{edit:l,save:u,category:"widgets",attributes:{quote:{type:"string",source:"html",selector:".quote"},person:{type:"string",source:"html",selector:".person"}}})})(window.React,wp.blocks,wp.i18n,wp.blockEditor);