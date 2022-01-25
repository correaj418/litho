"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2544],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>p,withMDXComponents:()=>d});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),d=function(e){return function(n){var t=p(n.components);return o.createElement(e,a({},n,{components:t}))}},p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,h=d["".concat(r,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(h,l(l({ref:n},s),{},{components:t})):o.createElement(h,l({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=h;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},11198:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>s,toc:()=>d,default:()=>m});var o=t(87462),i=t(63366),a=(t(67294),t(3905)),r=["components"],l={id:"recycler-collection-component",title:"Adding and adapting RecyclerCollection to your App"},c=void 0,s={unversionedId:"sections/recycler-collection-component",id:"sections/recycler-collection-component",isDocsHomePage:!1,title:"Adding and adapting RecyclerCollection to your App",description:"RecyclerView is one of the fundamental building blocks of any Android application that contain a scrolling list of items. Litho recommends using RecyclerCollectionComponent and Sections to build scrolling Lists easily.  These APIs can be used to build apps from simple, homogeneous Lists to complex, heterogeneous Lists backed by multiple data sources, all while taking advantage of features such as background layout and incremental mount.",source:"@site/../docs/sections/recycler-collection-component.md",sourceDirName:"sections",slug:"/sections/recycler-collection-component",permalink:"/docs/sections/recycler-collection-component",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/sections/recycler-collection-component.md",tags:[],version:"current",frontMatter:{id:"recycler-collection-component",title:"Adding and adapting RecyclerCollection to your App"},sidebar:"mainSidebar",previous:{title:"The Basics: DiffSection and GroupSection",permalink:"/docs/sections/start"},next:{title:"Best Practices and Performance",permalink:"/docs/sections/best-practices"}},d=[{value:"Create a RecyclerCollectionComponent",id:"create-a-recyclercollectioncomponent",children:[],level:3},{value:"Batteries Included",id:"batteries-included",children:[{value:"Horizontal Lists",id:"horizontal-lists",children:[{value:"Grid Lists",id:"grid-lists",children:[],level:4}],level:3},{value:"Snapping",id:"snapping",children:[],level:3},{value:"Setting the Height of a Horizontal RecyclerCollectionComponent",id:"setting-the-height-of-a-horizontal-recyclercollectioncomponent",children:[],level:3},{value:"Pull to Refresh",id:"pull-to-refresh",children:[],level:3},{value:"Loading, Empty, and Error screens",id:"loading-empty-and-error-screens",children:[],level:3}],level:2}],p={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,r);return(0,a.mdx)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://developer.android.com/reference/android/support/v7/widget/RecyclerView.html"},"RecyclerView")," is one of the fundamental building blocks of any Android application that contain a scrolling list of items. Litho recommends using ",(0,a.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/widget/RecyclerCollectionComponent.html"},"RecyclerCollectionComponent")," and ",(0,a.mdx)("a",{parentName:"p",href:"/docs/sections/start"},"Sections")," to build scrolling Lists easily.  These APIs can be used to build apps from simple, homogeneous Lists to complex, heterogeneous Lists backed by multiple data sources, all while taking advantage of features such as background layout and incremental mount."),(0,a.mdx)("p",null,"Within this page, you'll cover some of the properties available for the ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," that you may need for your use case, such as horizontal Lists, snapping or fixed height."),(0,a.mdx)("h3",{id:"create-a-recyclercollectioncomponent"},"Create a RecyclerCollectionComponent"),(0,a.mdx)("p",null,"You can use ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent"),", as you would any other component in the framework, by building it and adding it as a child in your layout:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"@OnCreateLayout\nstatic Component onCreateLayout(\n    final ComponentContext c) {\n  return RecyclerCollectionComponent.create(c)\n      .section(createSection())\n      .build();\n}\n")),(0,a.mdx)("p",null,"The above code will eventually render as a ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerView")," whose rows are backed by the contents of the section.\nYou can learn more about how to create sections by reading about some of the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/sections/start"},"building blocks")," included in the library."),(0,a.mdx)("h2",{id:"batteries-included"},"Batteries Included"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," includes several practical features for working with Lists. You can see the full list of props it accepts in ",(0,a.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/widget/RecyclerCollectionComponent.html"},"the javadocs"),". The following sub-sections detail some of its more noteable features."),(0,a.mdx)("h3",{id:"horizontal-lists"},"Horizontal Lists"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," takes a ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerConfiguration")," prop to determine which Layout Manager to use. By default, if this prop is not specified, it uses an implementation of ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerConfiguration")," called ",(0,a.mdx)("inlineCode",{parentName:"p"},"ListRecyclerConfiguration"),", which will create a LinearLayoutManager with vertical orientation to be used by the ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent"),"."),(0,a.mdx)("p",null,"For a horizontal layout, you pass a ",(0,a.mdx)("inlineCode",{parentName:"p"},"ListRecyclerConfiguration")," with a horizontal orientation:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"final RecyclerCollectionComponentSpec.RecyclerConfiguration\n      recyclerConfiguration =\n          new ListRecyclerConfiguration(\n              LinearLayoutManager.HORIZONTAL, false /* reverse layout */);\n\nfinal Component component =\n    RecyclerCollectionComponent.create(c)\n        .section(FooSection.create(new SectionContext(c)).build())\n        .recyclerConfiguration(recyclerConfiguration)\n        .build();\n")),(0,a.mdx)("h4",{id:"grid-lists"},"Grid Lists"),(0,a.mdx)("p",null,"You can also create a Grid List by using ",(0,a.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/widget/GridRecyclerConfiguration.html"},"GridRecyclerConfiguration"),", as shown in the following code:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"GridRecyclerConfiguration.create()\n          .orientation(LinearLayoutManager.VERTICAL)\n          .numColumns(BOOKMARKS_GRID_NUM_COLUMNS)\n          .recyclerBinderConfiguration(RecyclerBinderConfiguration.create().build())\n          .build();\n")),(0,a.mdx)("h3",{id:"snapping"},"Snapping"),(0,a.mdx)("p",null,"In horizontally scrollable Lists, the snapping mode for the ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," can also be configured through the ",(0,a.mdx)("inlineCode",{parentName:"p"},"ListRecyclerConfiguration"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"final RecyclerCollectionComponentSpec.RecyclerConfiguration\n      recyclerConfiguration =\n          new ListRecyclerConfiguration(\n              LinearLayoutManager.HORIZONTAL, false /* reverse layout */, SNAP_TO_START);\n\nfinal Component component =\n    RecyclerCollectionComponent.create(c)\n        .section(FooSection.create(new SectionContext(c)).build())\n        .recyclerConfiguration(recyclerConfiguration)\n        .build();\n")),(0,a.mdx)("p",null,"Other snapping options are ",(0,a.mdx)("inlineCode",{parentName:"p"},"SNAP_NONE"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"SNAP_TO_END"),", and ",(0,a.mdx)("inlineCode",{parentName:"p"},"SNAP_TO_CENTER"),"."),(0,a.mdx)("h3",{id:"setting-the-height-of-a-horizontal-recyclercollectioncomponent"},"Setting the Height of a Horizontal RecyclerCollectionComponent"),(0,a.mdx)("p",null,"There are three methods to set the height of a horizontally scrolling ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent"),":"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Fixed height method")," - a fixed height is set on the H-Scroll component. This is the most performant method and is recommended where possible."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Unknown height method")," - the height is not known when the Component is created so let the h-scroll set its height to the height of the first item."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Dynamic height method")," - lets the h-scroll dynamically change its height to fit the tallest item. This is the least performant method.")),(0,a.mdx)("p",null,"For more information on these methods, see the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/sections/hscrolls"},"Nested Scrolling and Measurement")," page of the Litho documentation."),(0,a.mdx)("h3",{id:"pull-to-refresh"},"Pull to Refresh"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," enables pull-to-refresh by default and sends an event handler to the underlying ",(0,a.mdx)("inlineCode",{parentName:"p"},"Recycler")," that will trigger a refresh on the SectionTree."),(0,a.mdx)("p",null,"To disable this functionality, you need to set the ",(0,a.mdx)("inlineCode",{parentName:"p"},"disablePTR")," prop to true:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"final Component component =\n    RecyclerCollectionComponent.create(c)\n        .section(FooSection.create(new SectionContext(c)).build())\n        .recyclerConfiguration(recyclerConfiguration)\n        .disablePTR(true)\n        .build();\n")),(0,a.mdx)("h3",{id:"loading-empty-and-error-screens"},"Loading, Empty, and Error screens"),(0,a.mdx)("p",null,"With the sections API, you can integrate data fetching through ",(0,a.mdx)("a",{parentName:"p",href:"/docs/communicating-with-the-ui#loadingstate-loadingstate"},"loading events")," and ",(0,a.mdx)("a",{parentName:"p",href:"/docs/sections/services"},"services"),".  ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," can listen to these ",(0,a.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/LoadingEvent.html"},"loading events")," and respond accordingly.  Through the props ",(0,a.mdx)("inlineCode",{parentName:"p"},"loadingComponent"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"emptyComponent"),", and ",(0,a.mdx)("inlineCode",{parentName:"p"},"errorComponent"),", you can specify what to show when certain things occur when fetching data:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"loadingComponent")," - data is being loaded and there's nothing in the list"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"emptyComponent")," - data has finished loading and there's nothing to show."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"errorComponent")," - data loading has failed and there's nothing in the list.")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},'final Component component =\n    RecyclerCollectionComponent.create(c)\n        .section(FooSection.create(new SectionContext(c)).build())\n        .recyclerConfiguration(recyclerConfiguration)\n        .loadingComponent(\n            Progress.create(c)\n                .build())\n        .errorComponent(\n            Text.create(c)\n                .text("Data Fetch has failed").build())\n        .emptyComponent(\n            Text.create(c)\n                .text("No data to show").build())\n        .build();\n')),(0,a.mdx)("p",null,"For details of props supported by ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent"),", see it's ",(0,a.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/widget/RecyclerCollectionComponent.html"},"Javadoc web page"),"."))}m.isMDXComponent=!0}}]);