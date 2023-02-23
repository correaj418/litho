"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4384],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>l});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){return function(n){var t=m(n.components);return a.createElement(e,o({},n,{components:t}))}},m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=m(t),c=i,u=l["".concat(r,".").concat(c)]||l[c]||f[c]||o;return t?a.createElement(u,s(s({ref:n},p),{},{components:t})):a.createElement(u,s({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=h;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},751:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r=["components"],s={id:"transition-definitions",title:"More Ways to Define Transitions"},d=void 0,p={unversionedId:"animations/transition-definitions",id:"animations/transition-definitions",title:"More Ways to Define Transitions",description:"@State Arguments",source:"@site/../docs/animations/transition-definitions.md",sourceDirName:"animations",slug:"/animations/transition-definitions",permalink:"/docs/animations/transition-definitions",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/animations/transition-definitions.md",tags:[],version:"current",frontMatter:{id:"transition-definitions",title:"More Ways to Define Transitions"},sidebar:"mainSidebar",previous:{title:"Animating View Properties with Dynamic Props",permalink:"/docs/animations/dynamic-props-bindto"},next:{title:"Transition Key Scoping",permalink:"/docs/animations/transition-key-types"}},l={},m=[{value:"@State Arguments",id:"state-arguments",level:3},{value:"@Prop <code>Diff&lt;T&gt;</code> and @State <code>Diff&lt;T&gt;</code>",id:"prop-difft-and-state-difft",level:3},{value:"@OnUpdateStateWithTransition",id:"onupdatestatewithtransition",level:3}],c={toc:m},u="wrapper";function f(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.mdx)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h3",{id:"state-arguments"},"@State Arguments"),(0,o.mdx)("p",null,"If the Transition definition needs to take the value of the state into account, Litho enables ",(0,o.mdx)("inlineCode",{parentName:"p"},"@OnCreateTransition")," methods to take ",(0,o.mdx)("inlineCode",{parentName:"p"},"@State")," arguments, as shown in the following snippet:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'@OnCreateTransition\nstatic Transition onCreateTransition(\n      ComponentContext c, @State boolean animationsDisabled) {\n  if (animationsDisabled) {\n    return null;\n  }\n\n  return Transition.create("square").animate(AnimatedProperties.X);\n}\n')),(0,o.mdx)("admonition",{type:"note"},(0,o.mdx)("p",{parentName:"admonition"},"In order to make this happen, the framework needs to postpone the collection of ",(0,o.mdx)("inlineCode",{parentName:"p"},"Transition"),"s until ",(0,o.mdx)("inlineCode",{parentName:"p"},"MountState")," (always on UI thread). Normally, this would be done on ",(0,o.mdx)("inlineCode",{parentName:"p"},"LayoutState"),", which may be processed on a background thread.")),(0,o.mdx)("h3",{id:"prop-difft-and-state-difft"},"@Prop ",(0,o.mdx)("inlineCode",{parentName:"h3"},"Diff<T>")," and @State ",(0,o.mdx)("inlineCode",{parentName:"h3"},"Diff<T>")),(0,o.mdx)("p",null,"If a transition depends not only on the actual (updated) value of a ",(0,o.mdx)("inlineCode",{parentName:"p"},"@Prop")," or a ",(0,o.mdx)("inlineCode",{parentName:"p"},"@State"),", but also on the value change, a generic ",(0,o.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/Diff.html"},"Diff")," can be used for arguments, which provides access to both previous and next ",(0,o.mdx)("inlineCode",{parentName:"p"},"@State"),"/",(0,o.mdx)("inlineCode",{parentName:"p"},"@Prop")," values."),(0,o.mdx)("p",null,"The following snippet shows how one of the samples could be changed to only animate the expanding action (not the collapsing action):"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"@OnCreateTransition\nstatic Transition onCreateTransition(ComponentContext c, @Prop Diff<Boolean> expanded) {\n  boolean isExpanding = !expanded.getPrevious() && expanded.getNext();\n  if (isExpanding) {\n    return Transition.allLayout().animator(ANIMATOR);\n  } else {\n    return null;\n  }\n}\n")),(0,o.mdx)("h3",{id:"onupdatestatewithtransition"},"@OnUpdateStateWithTransition"),(0,o.mdx)("p",null,"To define transitions that run conditionally under certain circumstances, use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"@OnUpdateStateWithTranstion")," method:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"@OnEvent(ClickEvent.class)\nstatic void onClick(ComponentContext c) {\n  MyComponent.toggleWithTransition(c);\n}\n\n@OnUpdateStateWithTransition\nstatic Transition toggle(StateValue<Boolean> expanded) {\n  expanded.set(!expanded.get()); // Updating state value\n\n  boolean isExpanding = expanded.get();\n  if (isExpanding) {\n    return Transition.allLayout().animator(ANIMATOR);\n  } else {\n    return null;\n  }\n}\n")),(0,o.mdx)("p",null,"The method functions as the regular ",(0,o.mdx)("inlineCode",{parentName:"p"},"@OnUpdateState")," method but also returns ",(0,o.mdx)("inlineCode",{parentName:"p"},"Transition"),"."))}f.isMDXComponent=!0}}]);