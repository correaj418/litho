"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9088],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>m,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>p,withMDXComponents:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=a.createContext({}),d=function(e){return function(t){var n=p(t.components);return a.createElement(e,i({},t,{components:n}))}},p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,u=d["".concat(r,".").concat(c)]||d[c]||h[c]||i;return n?a.createElement(u,s(s({ref:t},m),{},{components:n})):a.createElement(u,s({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var m=2;m<i;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},60656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=n(44996),s=["components"],l={id:"transition-basics",title:"Animation Basics"},m=void 0,d={unversionedId:"animations/transition-basics",id:"animations/transition-basics",title:"Animation Basics",description:"Introduction",source:"@site/../docs/animations/transition-basics.mdx",sourceDirName:"animations",slug:"/animations/transition-basics",permalink:"/docs/animations/transition-basics",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/animations/transition-basics.mdx",tags:[],version:"current",frontMatter:{id:"transition-basics",title:"Animation Basics"},sidebar:"mainSidebar",previous:{title:"Working with Updates",permalink:"/docs/kotlin/lazycollections/lazycollections-working-with-updates"},next:{title:"Types of Transitions",permalink:"/docs/animations/transition-types"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Bounds Transitions",id:"bounds-transitions",level:2},{value:"Transitions",id:"transitions",level:2}],u={toc:c},h="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.mdx)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"introduction"},"Introduction"),(0,i.mdx)("p",null,"Within Litho, UI updates are performed by changing state or props on the Component Tree, instead of mutating the views directly.\nThe animation framework adds transitions to components that are triggered when regenerating a tree."),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"It's important to avoid accessing the underlying view to add animations as these values will probably not be preserved.")),(0,i.mdx)("p",null,"Transitions can be used to animate view properties when they change between layouts, which is due to a state update or new props from the parent.\nWhen changes to a tree occur due to a new state, these changes happen immediately."),(0,i.mdx)("p",null,"The following code and animation show a simple Component that renders a yellow square then aligns it to either the right or left edge of the screen, based on the value of ",(0,i.mdx)("inlineCode",{parentName:"p"},"toRight"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/SimpleAllLayoutTransitionComponent.kt start=layout_start end=layout_end",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/SimpleAllLayoutTransitionComponent.kt",start:"layout_start",end:"layout_end"},"override fun ComponentScope.render(): Component {\n  val toRight = useState { false }\n  return Column(\n      style = Style.margin(all = 10.dp).onClick { toRight.update { !it } },\n      alignItems = if (toRight.value) YogaAlign.FLEX_END else YogaAlign.FLEX_START) {\n        child(SolidColor.create(context).color(Color.YELLOW).widthDip(80f).heightDip(80f).build())\n      }\n}\n")),(0,i.mdx)("video",{loop:"true",autoplay:"true",class:"video",width:"100%",height:"200px"},(0,i.mdx)("source",{type:"video/webm",src:(0,r.default)("/videos/transitions/basics1.webm")}),(0,i.mdx)("p",null,"Your browser does not support the video element.")),(0,i.mdx)("p",null,"When the value of the state changes, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ComponentTree")," is re-rendered, which makes the square appear to 'jump' from its previous position to the new one.\nThe following section shows how to replace this 'jump' with a transition animation."),(0,i.mdx)("h2",{id:"bounds-transitions"},"Bounds Transitions"),(0,i.mdx)("p",null,"To add bounds animations to all transitioning components between tree changes, use the following:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/SimpleAllLayoutTransitionComponent.kt start=transition_start end=transition_end",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/SimpleAllLayoutTransitionComponent.kt",start:"transition_start",end:"transition_end"},"useTransition(Transition.allLayout())\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://staticdocs.thefacebook.com/litho/javadoc/com/facebook/litho/Transition.html#allLayout--"},(0,i.mdx)("inlineCode",{parentName:"a"},"Transition.allLayout()"))," creates a transition that automatically animates any changes to position, width, or height, as shown in the following animation."),(0,i.mdx)("video",{loop:"true",autoplay:"true",class:"video",width:"100%",height:"200px"},(0,i.mdx)("source",{type:"video/webm",src:(0,r.default)("/videos/transitions/basics2.webm")}),(0,i.mdx)("p",null,"Your browser does not support the video element.")),(0,i.mdx)("p",null,"This method only works when changing the bounds of a component.  It does not work with:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Other properties"),", including scale, alpha, and rotation."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Components")," being added or removed.")),(0,i.mdx)("h2",{id:"transitions"},"Transitions"),(0,i.mdx)("p",null,"For greater control over the transitions, use the following APIs:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"useTransition"))," - a hook that is used to define the transition animations. It accepts a ",(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/Transition.html"},"Transition")," as its parameter."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"Transition"))," - a description of the Component/Property (mandatory) and how (optional) to animate it. Instead of using a Constructor to create ",(0,i.mdx)("inlineCode",{parentName:"li"},"Transition")," instances, use one of the provided ",(0,i.mdx)("inlineCode",{parentName:"li"},"Builder"),"s."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"transitionKey"))," - an identifier normally assigned to a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Component")," that is to be animated. The key is then used when defining ",(0,i.mdx)("inlineCode",{parentName:"li"},"Transition"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"AnimatedProperties"))," - used to target the property of a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Component")," that should be animated when its value changes.")),(0,i.mdx)("p",null,"The following sample shows the APIs in use:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/AlphaTransitionComponent.kt start=component_start end=component_end",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/AlphaTransitionComponent.kt",start:"component_start",end:"component_end"},"override fun ComponentScope.render(): Component {\n  val isHalfAlpha = useState { false }\n  useTransition(Transition.create(SQUARE_KEY).animate(AnimatedProperties.ALPHA))\n  return Column(style = Style.onClick { isHalfAlpha.update { !it } }) {\n    child(\n        Row(\n            style =\n                Style.transitionKey(context, SQUARE_KEY, Transition.TransitionKeyType.GLOBAL)\n                    .backgroundColor(Color.YELLOW)\n                    .width(80.dp)\n                    .height(80.dp)\n                    .alpha(if (isHalfAlpha.value) 0.5f else 1.0f)))\n  }\n}\n")),(0,i.mdx)("p",null,"The above code features the following:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"transitionKey"),"- assigned to the component using the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Style.transitionKey")," method."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Transition")," - created using ",(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/Transition.html#create-java.lang.String-"},"Transition.create()")," that takes a ",(0,i.mdx)("inlineCode",{parentName:"li"},"transitionKey")," and specifies the property of the component using the ",(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/Transition.TransitionUnitsBuilder.html#animate-com.facebook.litho.animation.AnimatedProperty-"},".animate()")," method, which takes an ",(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/animation/AnimatedProperties.html"},"AnimatedProperty"),". Both of these methods take a ",(0,i.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/Transition.html#create-java.lang.String...-"},"variable number of arguments"),", which means multiple ",(0,i.mdx)("inlineCode",{parentName:"li"},"Transition"),"s may be expressed as follows:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin"},'private const val SQUARE_KEY: String = "square"\nprivate const val OVAL_KEY: String = "oval"\nprivate const val ANOTHER_SHAPE: String = "another_shape"\n\n// ...\nuseTransition(\n        Transition.create(SQUARE_KEY, OVAL_KEY, ANOTHER_SHAPE)\n            .animate(AnimatedProperties.X, AnimatedProperties.Y))\n\n')),(0,i.mdx)("p",null,"The following animation shows the AlphaTransitionComponentSpec in action."),(0,i.mdx)("video",{loop:"true",autoplay:"true",class:"video",width:"100%",height:"200px"},(0,i.mdx)("source",{type:"video/webm",src:(0,r.default)("/videos/transitions/basics3.webm")}),(0,i.mdx)("p",null,"Your browser does not support the video element.")),(0,i.mdx)("p",null,"The transitions animations API supports three ",(0,i.mdx)("a",{parentName:"p",href:"/docs/animations/transition-types"},"types of transitions"),": ",(0,i.mdx)("strong",{parentName:"p"},"Change"),", ",(0,i.mdx)("strong",{parentName:"p"},"Appear")," and ",(0,i.mdx)("strong",{parentName:"p"},"Disappear"),", which work differently depending on how the tree changes between states. The example in this page uses a Change transition."))}f.isMDXComponent=!0}}]);