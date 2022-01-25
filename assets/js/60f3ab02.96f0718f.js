"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[989],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){return function(t){var n=m(t.components);return a.createElement(e,r({},t,{components:n}))}},m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=m(n),p=i,u=d["".concat(o,".").concat(p)]||d[p]||h[p]||r;return n?a.createElement(u,c(c({ref:t},l),{},{components:n})):a.createElement(u,c({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17934:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>l,toc:()=>d,default:()=>p});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],c={id:"architecture",title:"Internal \ud83c\udfd7: Sections implementation architecture"},s=void 0,l={unversionedId:"sections/architecture",id:"sections/architecture",isDocsHomePage:!1,title:"Internal \ud83c\udfd7: Sections implementation architecture",description:"At its core, the Sections framework is responsible for producing a ChangeSet from immutable props and a hierarchy of Sections. The framework produces these ChangeSets by creating a new section hierarchy whenever a SectionTree is set with a Section with new props, or whenever a Section in the hierarchy updates its internal state when comparing the new hierarchy with the old hierarchy.",source:"@site/../docs/sections/architecture.md",sourceDirName:"sections",slug:"/sections/architecture",permalink:"/docs/sections/architecture",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/sections/architecture.md",tags:[],version:"current",frontMatter:{id:"architecture",title:"Internal \ud83c\udfd7: Sections implementation architecture"},sidebar:"mainSidebar",previous:{title:"Advanced: Writing your own DiffSection",permalink:"/docs/sections/diff-sections"},next:{title:"Built-in widgets",permalink:"/docs/widgets/builtin-widgets"}},d=[{value:"What is a SectionTree?",id:"what-is-a-sectiontree",children:[],level:2},{value:"Updating the SectionTree",id:"updating-the-sectiontree",children:[],level:2},{value:"Computing ChangeSets",id:"computing-changesets",children:[{value:"Generating Trees",id:"generating-trees",children:[],level:3},{value:"Generating a Changeset",id:"generating-a-changeset",children:[],level:3},{value:"SectionTree and RecyclerCollectionComponent",id:"sectiontree-and-recyclercollectioncomponent",children:[],level:3}],level:2}],m={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.mdx)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"At its core, the Sections framework is responsible for producing a ",(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/ChangeSet.html"},"ChangeSet")," from immutable props and a hierarchy of ",(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/Section.html"},"Sections"),". The framework produces these ",(0,r.mdx)("inlineCode",{parentName:"p"},"ChangeSets")," by creating a new section hierarchy whenever a ",(0,r.mdx)("inlineCode",{parentName:"p"},"SectionTree")," is set with a Section with new props, or whenever a Section in the hierarchy updates its internal state when comparing the new hierarchy with the old hierarchy."),(0,r.mdx)("h2",{id:"what-is-a-sectiontree"},"What is a SectionTree?"),(0,r.mdx)("p",null,"Using the Sections framework begins with creating a ",(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/SectionTree.html"},"SectionTree"),"."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"SectionTree")," instances are responsible for:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Computing/recomputing changes whenever state & props values change."),(0,r.mdx)("li",{parentName:"ul"},"Communicating with a ",(0,r.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/sections/SectionTree.Target.html"},"Target")," implementation that can update the UI (including telling the ",(0,r.mdx)("inlineCode",{parentName:"li"},"Target")," about new changes).")),(0,r.mdx)("p",null,"SectionTrees must be created with a ",(0,r.mdx)("inlineCode",{parentName:"p"},"Target")," implementation. The ",(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/SectionTree.Target.html"},"Target")," interface is the API between ",(0,r.mdx)("inlineCode",{parentName:"p"},"SectionTree")," and the UI."),(0,r.mdx)("p",null,"After computing a ChangeSet from a section hierarchy, a ",(0,r.mdx)("inlineCode",{parentName:"p"},"SectionTree")," instance will relay the changes to its ",(0,r.mdx)("inlineCode",{parentName:"p"},"Target"),". You can create a ",(0,r.mdx)("inlineCode",{parentName:"p"},"Target' for whatever custom UI you want, but the Sections framework has already implemented some "),"Targets",(0,r.mdx)("inlineCode",{parentName:"p"},"for you. [SectionBinderTarget](pathname:///javadoc/com/facebook/litho/sections/widget/SectionBinderTarget.html) is a"),"Target",(0,r.mdx)("inlineCode",{parentName:"p"},"implementation that relays changes to a"),"RecyclerBinder` for rendering."),(0,r.mdx)("h2",{id:"updating-the-sectiontree"},"Updating the SectionTree"),(0,r.mdx)("p",null,"The framework can perform incremental and conditional updates on the structure of Sections whenever any props or state values change. The infrastructure also calculates the minimal operations it needs to perform on the existing hierarchy to update the list to reflect the new data."),(0,r.mdx)("p",null,"To update a section tree to reflect new props, create a section with the new prop values and call ",(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/SectionTree.html#setRoot-com.facebook.litho.sections.Section-"},"SectionTree#setRoot()"),". This is also how you set an initial root section on a tree since it's essentially diffing a new section hierarchy with an empty hierarchy."),(0,r.mdx)("p",null,"To update a section tree when a state value changes, perform a regular state update, as described in the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/coordinate-state-actions/state-overview"},"State Overview")," page of the Litho documentation."),(0,r.mdx)("p",null,"You may notice that the ",(0,r.mdx)("inlineCode",{parentName:"p"},"setRoot()")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"updateState()")," methods also have 'async' implementations, which are (",(0,r.mdx)("inlineCode",{parentName:"p"},"setRootAsync()")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"updateStateAsync()"),") respectively.  The ",(0,r.mdx)("inlineCode",{parentName:"p"},"*async()")," methods will ensure that the resulting ChangeSet calculation is performed on a background thread.  Otherwise, the resulting ChangeSet calculation will be done synchronously on whatever thread ",(0,r.mdx)("inlineCode",{parentName:"p"},"setRoot()")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"updateState()")," was called."),(0,r.mdx)("h2",{id:"computing-changesets"},"Computing ChangeSets"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"SectionTree")," instances compute changes in two steps: ",(0,r.mdx)("a",{parentName:"p",href:"#generating-trees"},"generating trees")," based on props/state values, then ",(0,r.mdx)("a",{parentName:"p",href:"#generating-a-changeset"},"generating a changeset")," by comparing two trees."),(0,r.mdx)("h3",{id:"generating-trees"},"Generating Trees"),(0,r.mdx)("p",null,"A tree is generated from a single root section by recursively calling ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnCreateChildren")," on group section specs until it reaches the leaf sections, diff section specs.  As it visits a new section, ",(0,r.mdx)("inlineCode",{parentName:"p"},"SectionTree")," will:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Create a new ",(0,r.mdx)("inlineCode",{parentName:"li"},"SectionContext")," scoped to this new section."),(0,r.mdx)("li",{parentName:"ul"},"Check if there's a corresponding section in the current hierarchy, via ",(0,r.mdx)("a",{parentName:"li",href:"/docs/mainconcepts/coordinate-state-actions/state-overview#keys-and-identifying-components"},"key"),") and transfer any state and service values over to the new section."),(0,r.mdx)("li",{parentName:"ul"},"Check if there's any pending state updates for the new section, via ",(0,r.mdx)("a",{parentName:"li",href:"/docs/mainconcepts/coordinate-state-actions/state-overview#keys-and-identifying-components"},"key"),") and perform the updates if they exist."),(0,r.mdx)("li",{parentName:"ul"},"Create the new child sections by calling ",(0,r.mdx)("inlineCode",{parentName:"li"},"SectionLifecycle#createChildren")," then recursively visit those child sections.")),(0,r.mdx)("h3",{id:"generating-a-changeset"},"Generating a Changeset"),(0,r.mdx)("p",null,"After generating a new tree, ",(0,r.mdx)("inlineCode",{parentName:"p"},"SectionTree")," will recursively traverse the new tree and compare it against the current tree to generate a ",(0,r.mdx)("inlineCode",{parentName:"p"},"ChangeSet"),". This is where you call ",(0,r.mdx)("inlineCode",{parentName:"p"},"SectionLifecycle#generateChangeSet")," on Diff Sections. When traversing the new tree, the framework translates local indexes to global indexes as it merges all ",(0,r.mdx)("inlineCode",{parentName:"p"},"ChangeSet"),"s into a single ",(0,r.mdx)("inlineCode",{parentName:"p"},"ChangeSet")," for the whole hierarchy."),(0,r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/SectionContext.html"},"SectionContext")," is an object that is used to associate each ",(0,r.mdx)("inlineCode",{parentName:"p"},"Section")," instance in a hierarchy with its ",(0,r.mdx)("inlineCode",{parentName:"p"},"SectionTree"),". ",(0,r.mdx)("inlineCode",{parentName:"p"},"SectionContext")," instances are released and recreated every time a ",(0,r.mdx)("inlineCode",{parentName:"p"},"SectionTree")," re-calculates its changeset (anytime props or state change). This means you should not rely on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"SectionContext")," passed into your spec delegate methods to always be associated with a valid ",(0,r.mdx)("inlineCode",{parentName:"p"},"Section")," instance. As a general rule, a ",(0,r.mdx)("inlineCode",{parentName:"p"},"SectionContext")," object is only valid between the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnBindService")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnUnbindService")," methods. You should not keep an instance of ",(0,r.mdx)("inlineCode",{parentName:"p"},"SectionContext")," alive outside this window."))),(0,r.mdx)("h3",{id:"sectiontree-and-recyclercollectioncomponent"},"SectionTree and RecyclerCollectionComponent"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/docs/sections/recycler-collection-component"},"RecyclerCollectionComponent")," is a Litho component that creates and binds a ",(0,r.mdx)("inlineCode",{parentName:"p"},"SectionTree")," to a ",(0,r.mdx)("inlineCode",{parentName:"p"},"Recycler")," behind the scenes to make it incredibly easy to use the Sections framework with Litho. ",(0,r.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," creates and holds onto a ",(0,r.mdx)("inlineCode",{parentName:"p"},"SectionTree")," instance as state and exposes a prop to accept new sections.  Updating the SectionTree when using ",(0,r.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," is as simple as updating the section prop passed into it."))}p.isMDXComponent=!0}}]);