"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8045],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>m,MDXProvider:()=>u,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>s});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=r.createContext({}),s=function(e){return function(n){var t=p(n.components);return r.createElement(e,i({},n,{components:t}))}},p=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(m.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(t),u=o,d=s["".concat(a,".").concat(u)]||s[u]||h[u]||i;return t?r.createElement(d,c(c({ref:n},m),{},{components:t})):r.createElement(d,c({ref:n},m))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var m=2;m<i;m++)a[m]=t[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},57822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>m,toc:()=>p});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={id:"incremental-mount",title:"Incremental Mount"},l=void 0,m={unversionedId:"deep-dive/incremental-mount",id:"deep-dive/incremental-mount",title:"Incremental Mount",description:"Even though components provide flatter view hierarchies and perform layout off the main thread, the mount operation (creating, recycling and attaching views and drawables) can still have a cost in the UI thread for very complex components, especially for the ones containing many views.",source:"@site/../docs/deep-dive/incremental-mount.md",sourceDirName:"deep-dive",slug:"/deep-dive/incremental-mount",permalink:"/docs/deep-dive/incremental-mount",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/deep-dive/incremental-mount.md",tags:[],version:"current",frontMatter:{id:"incremental-mount",title:"Incremental Mount"}},s={},p=[],u={toc:p},d="wrapper";function h(e){var n=e.components,c=(0,o.Z)(e,a);return(0,i.mdx)(d,(0,r.Z)({},u,c,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Even though components provide flatter view hierarchies and perform ",(0,i.mdx)("a",{parentName:"p",href:"/docs/asynchronous-layout"},"layout off the main thread"),", the mount operation (creating, recycling and attaching views and drawables) can still have a cost in the UI thread for very complex components, especially for the ones containing many views.\nSince there's no benefit of maintaining views outside the viewport, Incremental Mount plays a pivotal role in boosting overall performance by ensuring such views are excluded from the view hierarchy."),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"It is easy to confuse Litho's Incremental Mount feature with similar Android features such as view recycling in a RecyclerView. However, unlike Android's RecyclerView, Incremental Mount operates on a view-by-view resolution, rather than entire list items as in a RecyclerView.\nThis means that unlike with a RecyclerView, when an individual view has exited the viewport, it will be unmounted from the view hierarchy, even if its container is partially visible within the viewport.")),(0,i.mdx)("p",null,"With Incremental Mount enabled (which it is by default), the ",(0,i.mdx)("inlineCode",{parentName:"p"},"LithoView")," will only mount enough content to fill its visible region and unmount (and recycle) components that are no longer visible."),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Incremental Mount Diagram",src:t(26503).Z,width:"575",height:"289"})),(0,i.mdx)("p",null,"When using a prebuilt collection component such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," or a ",(0,i.mdx)("a",{parentName:"p",href:"/docs/kotlin/lazycollections/"},"Lazy Collection"),", the framework will seamlessly perform Incremental Mount.\nWhen not using a prebuilt collection component (such as ",(0,i.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/widget/Recycler.html"},"Recycler"),"), or when manually resizing a ",(0,i.mdx)("inlineCode",{parentName:"p"},"LithoView"),"'s container, you can still integrate Incremental Mount in your existing UI implementation."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"myLithoView.notifyVisibleBoundsChanged();\n")),(0,i.mdx)("p",null,"For example, if a ",(0,i.mdx)("inlineCode",{parentName:"p"},"LithoView")," is nested within a custom scrolling container, ",(0,i.mdx)("inlineCode",{parentName:"p"},"myLithoView.notifyVisibleBoundsChanged()")," should be called within a ",(0,i.mdx)("inlineCode",{parentName:"p"},"OnScrollListener"),"."))}h.isMDXComponent=!0},26503:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/incremental-mount-c3788c2981ecf94f60f8a39c43b2452c.png"}}]);