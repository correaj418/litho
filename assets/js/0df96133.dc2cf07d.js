"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9418],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>y,useMDXComponents:()=>m,withMDXComponents:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),d=function(e){return function(t){var n=m(t.components);return a.createElement(e,i({},t,{components:n}))}},m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=o,h=d["".concat(r,".").concat(u)]||d[u]||p[u]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(67294),o=n(86010);const i="tabItem_Ymn6";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.default)(i,r),hidden:n},t)}},65488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(83117),o=n(67294),i=n(86010),r=n(72389),s=n(67392),l=n(7094),c=n(12466);const d="tabList__CuJ",m="tabItem_LNqP";function u(e){var t,n,r=e.lazy,u=e.block,p=e.defaultValue,h=e.values,y=e.groupId,f=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.l)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),x=w.tabGroupChoices,N=w.setTabGroupChoices,C=(0,o.useState)(k),T=C[0],O=C[1],I=[],j=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var E=x[y];null!=E&&E!==T&&g.some((function(e){return e.value===E}))&&O(E)}var _=function(e){var t=e.currentTarget,n=I.indexOf(t),a=g[n].value;a!==T&&(j(t),O(a),null!=y&&N(y,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,o=I.indexOf(e.currentTarget)+1;n=null!=(a=I[o])?a:I[0];break;case"ArrowLeft":var i,r=I.indexOf(e.currentTarget)-1;n=null!=(i=I[r])?i:I[I.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.default)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":u},f)},g.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return I.push(e)},onKeyDown:P,onFocus:_,onClick:_},r,{className:(0,i.default)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),r?(0,o.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,r.default)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},87913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>y,frontMatter:()=>c,metadata:()=>m,toc:()=>p});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=n(65488),s=n(85162),l=["components"],c={id:"keys-and-identity",title:"Keys and Component Identity",description:"Explains how Component identity works in Litho using keys and why manual keys are sometimes necessary."},d=void 0,m={unversionedId:"mainconcepts/coordinate-state-actions/keys-and-identity",id:"mainconcepts/coordinate-state-actions/keys-and-identity",title:"Keys and Component Identity",description:"Explains how Component identity works in Litho using keys and why manual keys are sometimes necessary.",source:"@site/../docs/mainconcepts/coordinate-state-actions/keys-and-identity.md",sourceDirName:"mainconcepts/coordinate-state-actions",slug:"/mainconcepts/coordinate-state-actions/keys-and-identity",permalink:"/docs/mainconcepts/coordinate-state-actions/keys-and-identity",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/coordinate-state-actions/keys-and-identity.md",tags:[],version:"current",frontMatter:{id:"keys-and-identity",title:"Keys and Component Identity",description:"Explains how Component identity works in Litho using keys and why manual keys are sometimes necessary."},sidebar:"mainSidebar",previous:{title:"Flexbox Troubleshooting",permalink:"/docs/mainconcepts/troubleshooting"},next:{title:"Sections Basics",permalink:"/docs/sections/start"}},u={},p=[{value:"Automatically assigned keys",id:"automatically-assigned-keys",level:2},{value:"Assigning manual keys",id:"assigning-manual-keys",level:2}],h={toc:p};function y(e){var t=e.components,c=(0,o.Z)(e,l);return(0,i.mdx)("wrapper",(0,a.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Keys help Litho to set a unique identity on a component that represents a node in the component tree. Litho uses keys to keep track of component identity between layout changes and correctly identify a component as the target of a state update."),(0,i.mdx)("p",null,"Based on its type and the key of its parent, Litho automatically sets a key on each component.\nHowever, there are situations when you might need to add, remove or rearrange components in your UI, or conditionally add certain components."),(0,i.mdx)("p",null,"This page explains how keys are autogenerated by Litho and why sometimes it's necessary to provide manual keys when they can't be autogenerated."),(0,i.mdx)("p",null,"As long as a component is rendered in the same node in the component tree (see the images, below), it will be assigned the same key.\nIf that node changes position (for example, it's moved to a different parent or it changes position because other sibling nodes are removed or inserted), its key is not guaranteed to be same between UI updates."),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"This is an important consideration because Litho uses the key to determine which component you want to update when calling a state update and to correctly identify this component when traversing the tree and setting the new state value."))),(0,i.mdx)("h2",{id:"automatically-assigned-keys"},"Automatically assigned keys"),(0,i.mdx)("p",null,"Litho generates component keys based on their type and position relative to the parent, as shown in the folowing Component Tree."),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Tree example",src:n(8862).Z,width:"1582",height:"524"})),(0,i.mdx)("p",null,"The key of a component is a concatenation of the following:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Parent's key")," - when the component is a child."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Component's key")," - determined by its type."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Deduplication ID")," - the position of this component between the other sibling components of the same type.")),(0,i.mdx)("p",null,"To reduce the chance of accidental key collision, there are other separators that are included in the key calculation but, for simplification, they are not included in this example.\nThe following diagram shows the same Component Tree with added keys."),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Tree example",src:n(65714).Z,width:"1583",height:"524"})),(0,i.mdx)("p",null,"Whenever a key collision is detected in a ComponentTree, which can happen when a parent component created multiple children components of the same type, Litho assigns a unique key to those siblings depending on their order.\nThis means that the keys that are autogenerated are not stable if a component moves its position."),(0,i.mdx)("p",null,"The following diagram shows the Component Tree with the first Row Component removed.\n",(0,i.mdx)("img",{alt:"Tree example",src:n(97602).Z,width:"1583",height:"524"})),(0,i.mdx)("p",null,"After the update, the second Row component in the initial tree is now the first child of type Row, so its key will change!"),(0,i.mdx)("p",null,"Litho was mapping this Row's state to its initial key, so all its state values will be reset after the update. Of greater consequence is that the state for that key will be associated with the next Row component, which is being assigned that key!\nYou can imagine how this can lead to undesirable UI bugs."),(0,i.mdx)("p",null,"Litho key autogeneration is best-effort, but cannot be fully determinist with a runtime implementation."),(0,i.mdx)("h2",{id:"assigning-manual-keys"},"Assigning manual keys"),(0,i.mdx)("p",null,"For dynamic UI hierarchies where components can change position, manual keys that are stable between UI updates must be assigned to components.\nThe manual key will always take precedence over the autogenerated one."),(0,i.mdx)(r.default,{groupId:"keys-and-identity",defaultValue:"kotlin",values:[{label:"Kotlin API",value:"kotlin"},{label:"Spec API",value:"java"}],mdxType:"Tabs"},(0,i.mdx)(s.default,{value:"kotlin",mdxType:"TabItem"},"In the Kotlin API, a manual key can be set via the built-in global `key()` method:",(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/state/IdentityRootComponent.kt start=start_manual_key end=end_manual_key",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/state/IdentityRootComponent.kt",start:"start_manual_key",end:"end_manual_key"},'return Column(\n    style =\n        Style.onVisible {\n          if (!logOnce.value) {\n            // do some logging\n            logOnce.value = true\n          }\n        }) { // end_use_ref\n      if (isFirstCounterEnabled.value) {\n        child(\n            key("first_row") {\n              Row {\n                child(CounterComponent())\n                child(\n                    Text(\n                        text = "X",\n                        textSize = 30.dp,\n                        style =\n                            Style.margin(all = 30.dp).onClick {\n                              isFirstCounterEnabled.update(false)\n                            }))\n              }\n            })\n      }\n'))),(0,i.mdx)(s.default,{value:"java",mdxType:"TabItem"},"In the Spec API, you can use the common `key` component prop to manually set a key when a component is created:",(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/identity/IdentityRootComponentSpec.java start=start_manual_key end=end_manual_key",file:"sample/src/main/java/com/facebook/samples/litho/java/identity/IdentityRootComponentSpec.java",start:"start_manual_key",end:"end_manual_key"},'Row.create(c)\n    .key("first_row")\n    .child(CounterComponent.create(c))\n    .child(\n        Text.create(c)\n            .text("X")\n            .clickHandler(IdentityRootComponent.onClickRemoveFirstChild(c)))\n')))),(0,i.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Setting manual keys is also a nifty way to force a component's state value to be initialised again based on the value of certain props for example, if the manual key is a function of those props."))))}y.isMDXComponent=!0},97602:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/key-tree-remove-child-67e678c6b452ad8294fe5b6dfe06d29f.png"},65714:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/key-tree-with-keys-119162131f591e1d4466c5281abbae65.png"},8862:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/key-tree-51b1340799869efc5ad80723f77692c0.png"}}]);