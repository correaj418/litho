"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8465],{3905:(e,i,n)=>{n.r(i),n.d(i,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>u,useMDXComponents:()=>m,withMDXComponents:()=>d});var t=n(67294);function a(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function o(){return o=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function l(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?l(Object(n),!0).forEach((function(i){a(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function s(e,i){if(null==e)return{};var n,t,a=function(e,i){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),d=function(e){return function(i){var n=m(i.components);return t.createElement(e,o({},i,{components:n}))}},m=function(e){var i=t.useContext(c),n=i;return e&&(n="function"==typeof e?e(i):r(r({},i),e)),n},p=function(e){var i=m(e.components);return t.createElement(c.Provider,{value:i},e.children)},h={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},v=t.forwardRef((function(e,i){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(n),p=a,v=d["".concat(l,".").concat(p)]||d[p]||h[p]||o;return n?t.createElement(v,r(r({ref:i},c),{},{components:n})):t.createElement(v,r({ref:i},c))}));function u(e,i){var n=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=v;var r={};for(var s in i)hasOwnProperty.call(i,s)&&(r[s]=i[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}v.displayName="MDXCreateElement"},58215:(e,i,n)=>{n.r(i),n.d(i,{default:()=>a});var t=n(67294);const a=function(e){var i=e.children,n=e.hidden,a=e.className;return t.createElement("div",{role:"tabpanel",hidden:n,className:a},i)}},55064:(e,i,n)=>{n.r(i),n.d(i,{default:()=>p});var t=n(87462),a=n(67294),o=n(72389),l=n(79443);const r=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=n(83039),c=n(86010);const d="tabItem_1uMI";function m(e){var i,n,t,o=e.lazy,l=e.block,m=e.defaultValue,p=e.values,h=e.groupId,v=e.className,u=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:u.map((function(e){var i=e.props;return{value:i.value,label:i.label}})),b=(0,s.duplicates)(f,(function(e,i){return e.value===i.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(i=null!=m?m:null==(n=u.find((function(e){return e.props.default})))?void 0:n.props.value)?i:null==(t=u[0])?void 0:t.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=r(),x=g.tabGroupChoices,w=g.setTabGroupChoices,N=(0,a.useState)(y),L=N[0],C=N[1],V=[],P=(0,s.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=h){var k=x[h];null!=k&&k!==L&&f.some((function(e){return e.value===k}))&&C(k)}var I=function(e){var i=e.currentTarget,n=V.indexOf(i),t=f[n].value;t!==L&&(P(i),C(t),null!=h&&w(h,t))},T=function(e){var i,n=null;switch(e.key){case"ArrowRight":var t=V.indexOf(e.currentTarget)+1;n=V[t]||V[0];break;case"ArrowLeft":var a=V.indexOf(e.currentTarget)-1;n=V[a]||V[V.length-1]}null==(i=n)||i.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.default)("tabs",{"tabs--block":l},v)},f.map((function(e){var i=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:L===i?0:-1,"aria-selected":L===i,className:(0,c.default)("tabs__item",d,{"tabs__item--active":L===i}),key:i,ref:function(e){return V.push(e)},onKeyDown:T,onFocus:I,onClick:I},null!=n?n:i)}))),o?(0,a.cloneElement)(u.filter((function(e){return e.props.value===L}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},u.map((function(e,i){return(0,a.cloneElement)(e,{key:i,hidden:e.props.value!==L})}))))}function p(e){var i=(0,o.default)();return a.createElement(m,(0,t.Z)({key:String(i)},e))}},31737:(e,i,n)=>{n.r(i),n.d(i,{frontMatter:()=>r,contentTitle:()=>s,metadata:()=>c,toc:()=>d,default:()=>p});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),l=(n(55064),n(58215),["components"]),r={id:"visibility-handling",title:"Handling Visibility",description:"Describes the APIs to handle visibility of components",keywords:["visibility","visible","invisible","focus"]},s=void 0,c={unversionedId:"mainconcepts/coordinate-state-actions/visibility-handling",id:"mainconcepts/coordinate-state-actions/visibility-handling",isDocsHomePage:!1,title:"Handling Visibility",description:"Describes the APIs to handle visibility of components",source:"@site/../docs/mainconcepts/coordinate-state-actions/visibility-handling.mdx",sourceDirName:"mainconcepts/coordinate-state-actions",slug:"/mainconcepts/coordinate-state-actions/visibility-handling",permalink:"/docs/mainconcepts/coordinate-state-actions/visibility-handling",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/coordinate-state-actions/visibility-handling.mdx",tags:[],version:"current",frontMatter:{id:"visibility-handling",title:"Handling Visibility",description:"Describes the APIs to handle visibility of components",keywords:["visibility","visible","invisible","focus"]},sidebar:"mainSidebar",previous:{title:"Animating View Properties with Dynamic Props",permalink:"/docs/animations/dynamic-props"},next:{title:"Overview",permalink:"/docs/accessibility/accessibility-overview"}},d=[{value:"Types of Visibility Callbacks",id:"types-of-visibility-callbacks",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Custom visibility percentage",id:"custom-visibility-percentage",children:[],level:3}],level:2},{value:"Changing LithoView Visibility",id:"changing-lithoview-visibility",children:[{value:"LithoLifecycleProvider API",id:"litholifecycleprovider-api",children:[{value:"Valid LithoLifecycleProvider states:",id:"valid-litholifecycleprovider-states",children:[],level:4},{value:"Listening to a <code>LithoLifecycleProvider</code> state changes:",id:"listening-to-a-litholifecycleprovider-state-changes",children:[],level:4}],level:3},{value:"Android AOSP implementation",id:"android-aosp-implementation",children:[],level:3},{value:"Handling custom state changes",id:"handling-custom-state-changes",children:[{value:"ViewPager example",id:"viewpager-example",children:[],level:4},{value:"Fragment Transaction example",id:"fragment-transaction-example",children:[],level:4}],level:3},{value:"Nested Component Trees",id:"nested-component-trees",children:[],level:3}],level:2},{value:"(Deprecated) setVisibilityHint",id:"deprecated-setvisibilityhint",children:[],level:2}],m={toc:d};function p(e){var i=e.components,n=(0,a.Z)(e,l);return(0,o.mdx)("wrapper",(0,t.Z)({},m,n,{components:i,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Litho provides predefined APIs to support a range of use cases where components\nrequire callbacks when the on-screen position relative to the visible viewport changes."),(0,o.mdx)("h2",{id:"types-of-visibility-callbacks"},"Types of Visibility Callbacks"),(0,o.mdx)("p",null,"The framework currently supports six types of Visibility callbacks:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/VisibleEvent.html"},"Visible"),": Invoked when at least 1\npixel of the Component is visible. If the component mounts some content, then the ",(0,o.mdx)("inlineCode",{parentName:"li"},"event.content"),"\nwill be a reference to that content."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/InvisibleEvent.html"},"Invisible"),": Invoked when the\nComponent no longer has any pixels on the screen."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/FocusedVisibleEvent.html"},"Focused"),": Invoked when\neither the Component occupies at least 50% of the viewport or if the Component is smaller than\nhalf the viewport, when it is fully visible."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/UnfocusedVisibleEvent.html"},"Unfocused"),": Invoked\nwhen the Component is no longer focused, such as if it's not fully visible and does not occupy at\nleast half the viewport."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/FullImpressionVisibleEvent.html"},"Full Impression"),":\nIf the Component is smaller than the viewport, this callback is invoked when the entire Component\nis visible in the viewport. If the Component is bigger than the viewport, then just covering the\nviewport won't invoke this callback: it will be invoked when all the edges have passed through the\nviewport once."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/VisibilityChangedEvent.html"},"Visibility Changed"),": Invoked\nwhen the visible bounds of the Component change. The event object will tell you the visible top\nand left coordinate, and the current visible width and height of the content.")),(0,o.mdx)("h2",{id:"usage"},"Usage"),(0,o.mdx)("p",null,"The following example illustrates setting visibility callbacks on a component."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/VisibilityHandlingExampleComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/VisibilityHandlingExampleComponent.kt",start:"start_example",end:"end_example"},'class VisibilityHandlingExampleComponent : KComponent() {\n\n  override fun ComponentScope.render(): Component {\n    return Column(\n        style =\n            Style.onVisible { event ->\n                  // If the handler was set on a component which mounts content then the\n                  // event.content will be a reference to the mounted content.\n                  if (event.content is View) {\n                    log("Visible", "View")\n                  } else {\n                    log("Visible", "Drawable")\n                  }\n                }\n                .onInvisible { log("Invisible", "null") }) {\n      child(Text("hello world"))\n      child(\n          Row(\n              style =\n                  Style.onVisibilityChanged { event ->\n                    if (event.percentVisibleHeight > 50) {\n                      Log.d(\n                          "visibility-changed",\n                          "View is mostly visible now. With: " +\n                              "\\ntop: ${event.visibleTop}" +\n                              "\\nleft: ${event.visibleLeft}" +\n                              "\\nvisible width: ${event.visibleWidth}" +\n                              "\\nvisible height: ${event.visibleHeight}" +\n                              "\\npercentage visible height: ${event.percentVisibleHeight}" +\n                              "\\npercentage visible width: ${event.percentVisibleWidth}")\n                    }\n                  }) { child(Text("This is an example.")) })\n    }\n  }\n\n  fun log(type: String, content: String) {\n    Log.d("visibility", "Visibility callback: $type content: $content")\n  }\n}\n')),(0,o.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"Visibility change callbacks should be used with particular care since they will be invoked on every\nframe while scrolling. No heavy work should be done inside the visibility changed callbacks.\n'Visible', 'Invisible', 'Focused', 'Unfocused', and 'Full Impression' are recommended over visibility changed\nwhenever possible."))),(0,o.mdx)("h3",{id:"custom-visibility-percentage"},"Custom visibility percentage"),(0,o.mdx)("p",null,"By default, ",(0,o.mdx)("inlineCode",{parentName:"p"},"VisibleEvent")," is triggered when at least 1 pixel of the Component is visible. In some\ncases you may want to listen to custom visibility changes and perform an action when the Component\nis only partially visible. You can specify a ratio of the Component width or height for the visibility\ncallback to be dispatched by using ",(0,o.mdx)("inlineCode",{parentName:"p"},"visibleHeightRatio")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"visibleWidthRatio")," props when specifying a visibility handler."),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"Currently, the Kotlin API does not expose ",(0,o.mdx)("inlineCode",{parentName:"p"},"visibleHeightRatio")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"visibleWidthRatio"),". Please use the Codengen APIs.\nif you need to leverage that."))),(0,o.mdx)("p",null,"For the example above, a Visibility Event is dispatched when at least 80% of the Component's\nheight and 10% of the Component's width is visible. When the Component's visible percentage\nchanges to less than 80% of total height, an invisible event will be dispatched. If not specified,\nthe default width or height ratio is 1f."),(0,o.mdx)("h2",{id:"changing-lithoview-visibility"},"Changing LithoView Visibility"),(0,o.mdx)("p",null,"There are cases when the visibility callback needs to be invoked on the LithoView components because the\nLithoView's visibility changed but did not receive any callbacks to inform it of this change.\nFor example, when an activity is added to the back stack, covering the current UI. For such cases, Litho\nprovides the ",(0,o.mdx)("a",{parentName:"p",href:"#litholifecycleprovider-api"},"LithoLifecycleProvider API")," to notify LithoView about changes\nin its visibility, and to dispatch correct events to components inside."),(0,o.mdx)("h3",{id:"litholifecycleprovider-api"},"LithoLifecycleProvider API"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider")," API can be used to inform LithoView about  changes in its visibility state.\n",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider.moveToLifecycle()")," method should be called from ",(0,o.mdx)("inlineCode",{parentName:"p"},"Fragment.setUserVisibleHint()"),"\nor ",(0,o.mdx)("inlineCode",{parentName:"p"},"onResume()/onPause()")," methods of ",(0,o.mdx)("inlineCode",{parentName:"p"},"Activity")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"Fragment"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"public interface LithoLifecycleProvider {\n\n  // Should be called to inform Litho that its visiblity state has changed\n  void moveToLifecycle(LithoLifecycle lithoLifecycle);\n\n}\n")),(0,o.mdx)("h4",{id:"valid-litholifecycleprovider-states"},"Valid LithoLifecycleProvider states:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"HINT_INVISIBLE")," - indicates that the lifecycle provider is considered to be not visible on\nscreen. Lifecycle observers can perform operations which are associated with invisibility status.\nAn example of moving to a ",(0,o.mdx)("inlineCode",{parentName:"p"},"HINT_INVISIBLE")," state is when a fragment goes from ",(0,o.mdx)("strong",{parentName:"p"},"Resumed")," to ",(0,o.mdx)("strong",{parentName:"p"},"Paused"),"\nbecause the app was backgrounded. The ",(0,o.mdx)("strong",{parentName:"p"},"invisible")," events will be dispatched to all Components inside\nthe ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoView")," that were visible.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"HINT_VISIBLE")," - indicates that the lifecycle provider is considered visible on screen.\nLifecycle observers can perform operations that are associated with visibility status. An example\nof moving to ",(0,o.mdx)("inlineCode",{parentName:"p"},"HINT_VISIBLE")," state is when a fragment goes from ",(0,o.mdx)("strong",{parentName:"p"},"Paused")," to ",(0,o.mdx)("strong",{parentName:"p"},"Resumed")," because the\napp was foregrounded. ",(0,o.mdx)("strong",{parentName:"p"},"Visible ")," events will be dispatched to all Components inside the ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoView"),"\nwhich meet the visibility criteria.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"DESTROYED")," - the final state of a lifecycle provider. Lifecycle observers can perform\noperations associated with releasing resources. An example of moving to ",(0,o.mdx)("inlineCode",{parentName:"p"},"DESTROYED")," state is when\nthe hosting Activity is destroyed. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"ComponentTree")," associated with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoView")," will be\nreleased; all the ",(0,o.mdx)("strong",{parentName:"p"},"invisible")," events will be dispatched to all Components that were visible,\nand all content will be unmounted."))),(0,o.mdx)("h4",{id:"listening-to-a-litholifecycleprovider-state-changes"},"Listening to a ",(0,o.mdx)("inlineCode",{parentName:"h4"},"LithoLifecycleProvider")," state changes:"),(0,o.mdx)("p",null,"You can register a ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoView")," to listen to state changes of a ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider")," instance when you create it:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"final LithoView lithoView = LithoView.create(c, component, lithoLifecycleProvider);\n")),(0,o.mdx)("h3",{id:"android-aosp-implementation"},"Android AOSP implementation"),(0,o.mdx)("p",null,"This is an implementation of ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider")," which has the state tied to that of an AOSP\n",(0,o.mdx)("a",{parentName:"p",href:"https://developer.android.com/topic/libraries/architecture/lifecycle#lco"},"LifecycleOwner"),"."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"LifecycleOwner")," in ",(0,o.mdx)("inlineCode",{parentName:"p"},"ON_PAUSE")," state will move the ",(0,o.mdx)("inlineCode",{parentName:"p"},"AOSPLithoLifecycleProvider")," to ",(0,o.mdx)("inlineCode",{parentName:"p"},"HINT_INVISIBLE")," state")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"LifecycleOwner")," in ",(0,o.mdx)("inlineCode",{parentName:"p"},"ON_RESUME")," state will move the ",(0,o.mdx)("inlineCode",{parentName:"p"},"AOSPLithoLifecycleProvider")," to ",(0,o.mdx)("inlineCode",{parentName:"p"},"HINT_VISIBLE")," state")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"LifecycleOwner")," in ",(0,o.mdx)("inlineCode",{parentName:"p"},"ON_DESTROY")," state will move the ",(0,o.mdx)("inlineCode",{parentName:"p"},"AOSPLithoLifecycleProvider")," to ",(0,o.mdx)("inlineCode",{parentName:"p"},"DESTROYED")," state"))),(0,o.mdx)("p",null,"Use ",(0,o.mdx)("inlineCode",{parentName:"p"},"AOSPLithoLifecycleProvider")," when you want to associate a LithoView's visibility status with the\nlifecycle of a Fragment, Activity or custom LifecycleOwner, where ",(0,o.mdx)("strong",{parentName:"p"},"Resumed")," means the LithoView is\non screen and ",(0,o.mdx)("strong",{parentName:"p"},"Paused")," means the LithoView is hidden."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/lifecycle/LifecycleDelegateActivity.kt start=start_example_lifecycleprovider end=end_example_lifecycleprovider",file:"sample/src/main/java/com/facebook/samples/litho/java/lifecycle/LifecycleDelegateActivity.kt",start:"start_example_lifecycleprovider",end:"end_example_lifecycleprovider"},"val lifecycleProvider = AOSPLithoLifecycleProvider(this)\nval componentContext = ComponentContext(this)\nlithoView =\n    LithoView.create(\n        this,\n        LifecycleDelegateComponent.create(componentContext)\n            .id(atomicId.getAndIncrement().toString())\n            .delegateListener(delegateListener)\n            .consoleDelegateListener(consoleDelegateListener)\n            .build(),\n        lifecycleProvider /* The LithoLifecycleProvider for this LithoView */)\n")),(0,o.mdx)("h3",{id:"handling-custom-state-changes"},"Handling custom state changes"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"AOSPLithoLifecycleProvider")," covers most of the common cases, but there are scenarios where a\nLifecycleOwner's state doesn't match what we see on screen, as shown in the following examples:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Fragments in a ViewPager, where Fragments for the previous and next pages are prepared and in a\n",(0,o.mdx)("strong",{parentName:"p"},"Resumed")," state before they're actually visible.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Adding a Fragment on top of another Fragment doesn't move the first Fragment to a ",(0,o.mdx)("strong",{parentName:"p"},"Paused"),"\nstate, and there's no indication that it's no longer visible to the user."))),(0,o.mdx)("p",null,"When you need to handle these state changes manually, you can use ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProviderDelegate"),",\na generic ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider")," implementation, to change state when appropriate."),(0,o.mdx)("h4",{id:"viewpager-example"},"ViewPager example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/lifecycle/ScreenSlidePageFragment.kt start=start_example_lifecycleprovider end=end_example_lifecycleprovider",file:"sample/src/main/java/com/facebook/samples/litho/java/lifecycle/ScreenSlidePageFragment.kt",start:"start_example_lifecycleprovider",end:"end_example_lifecycleprovider"},"private val delegate = LithoLifecycleProviderDelegate()\n\noverride fun setUserVisibleHint(isVisibleToUser: Boolean) {\n  super.setUserVisibleHint(isVisibleToUser)\n  if (wasVisible == isVisibleToUser) {\n    return\n  }\n  if (isVisibleToUser) {\n    wasVisible = true\n    delegate.moveToLifecycle(LithoLifecycleProvider.LithoLifecycle.HINT_VISIBLE)\n  } else {\n    wasVisible = false\n    delegate.moveToLifecycle(LithoLifecycleProvider.LithoLifecycle.HINT_INVISIBLE)\n  }\n}\n\noverride fun onCreateView(\n    inflater: LayoutInflater,\n    container: ViewGroup?,\n    savedInstanceState: Bundle?\n): View {\n  val parent = inflater.inflate(R.layout.screen_slide_fragment, container, false) as ViewGroup\n  val c = ComponentContext(requireContext())\n  lithoView =\n      LithoView.create(\n          c,\n          getComponent(c),\n          delegate /* The LithoLifecycleProvider delegate for this LithoView */)\n\n")),(0,o.mdx)("h4",{id:"fragment-transaction-example"},"Fragment Transaction example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/lifecycle/LifecycleFragment.kt start=start_example_lifecycleprovider end=end_example_lifecycleprovider",file:"sample/src/main/java/com/facebook/samples/litho/java/lifecycle/LifecycleFragment.kt",start:"start_example_lifecycleprovider",end:"end_example_lifecycleprovider"},"private val delegate: LithoLifecycleProviderDelegate = LithoLifecycleProviderDelegate()\n\noverride fun onClick(view: View) {\n\n  // Replaces the current fragment with a new fragment\n  replaceFragment()\n\n  // inform the LithoView\n  delegate.moveToLifecycle(LithoLifecycleProvider.LithoLifecycle.HINT_VISIBLE)\n}\n\noverride fun onCreateView(\n    inflater: LayoutInflater,\n    container: ViewGroup?,\n    savedInstanceState: Bundle?\n): View {\n  val parent =\n      inflater.inflate(R.layout.activity_fragment_transactions_lifecycle, container, false)\n          as ViewGroup\n  val c = ComponentContext(requireContext())\n  lithoView =\n      LithoView.create(\n          c,\n          getComponent(c),\n          delegate /* The LithoLifecycleProvider delegate for this LithoView */)\n\n")),(0,o.mdx)("h3",{id:"nested-component-trees"},"Nested Component Trees"),(0,o.mdx)("p",null,"The Litho components for building Lists (",(0,o.mdx)("inlineCode",{parentName:"p"},"Section"),"s, ",(0,o.mdx)("inlineCode",{parentName:"p"},"VerticalScrollSpec"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"HorizontalScrollSpec"),") create\nhierarchies of nested ",(0,o.mdx)("inlineCode",{parentName:"p"},"ComponentTree"),"s:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"A ComponentTree at the root of the hierarchy, encapsulating the entire list (associated with a root LithoView)"),(0,o.mdx)("li",{parentName:"ul"},"A ComponentTree for each item in the List (associated with a LithoView child of the root LithoView)")),(0,o.mdx)("p",null,"If the root LithoView is subscribed to listen to a ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider"),", then all nested\nComponent Trees / child LithoViews will listen to the outer ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider")," too and will\nreceive the correct information about visibility/destroyed state."),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"The section below contains information about deprecated APIs. Please consider using\n",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoLifecycleProvider")," for manually informing a ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoView")," about visibility changes."))),(0,o.mdx)("h2",{id:"deprecated-setvisibilityhint"},"(Deprecated) setVisibilityHint"),(0,o.mdx)("p",null,"After calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoView.setVisibilityHint(false)"),", the LithoView will consider itself not visible\nand will ignore any requests to mount until ",(0,o.mdx)("inlineCode",{parentName:"p"},"setVisibilityHint(true)")," is called.\nYou may still unmount the entire LithoView content by calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"unmountAll")," if the visibility hint\nwas set to false."),(0,o.mdx)("p",null,"Resetting the visibility hint to true after it was set to false will also trigger a mount pass, in\ncase the visible bounds changed while the LithoView was ignoring mount requests."),(0,o.mdx)("p",null,"Example usage:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"// To dispatch visible/focused events as necessary on all components inside this LithoView\nLithoView.setVisibilityHint(true);\n\n// To dispatch invisible/unfocused events as necessary on all components inside this LithoView\nLithoView.setVisibilityHint(false);\n")))}p.isMDXComponent=!0}}]);