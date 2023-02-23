"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8883,1534,5701,2586,2793,2138,5425,3156,2875],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){return function(t){var n=p(t.components);return a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,m=c["".concat(i,".").concat(d)]||c[d]||f[d]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.default)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function h(e){var t,n,a,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,p=d(e),h=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),y=h[0],g=h[1],v=f({queryString:s,groupId:u}),b=v[0],x=v[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=k[0],N=k[1],C=function(){var e=null!=b?b:w;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){C&&g(C)}),[C]),{selectedValue:y,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),x(e),N(e)}),[x,N,p]),tabValues:p}}var y=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},i,{className:(0,o.default)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function x(e){var t=h(e);return r.createElement("div",{className:(0,o.default)("tabs-container",g.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function k(e){var t=(0,y.default)();return r.createElement(x,(0,a.Z)({key:String(t)},e))}},7772:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(23746),i=n(7694),l=n(13618),s="0.47.0",u="0.48.0-SNAPSHOT",c="0.10.4",p="0.142.0",d=n(86668);const m=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,s).replace(/{{site.soloaderVersion}}/g,c).replace(/{{site.lithoSnapshotVersion}}/g,u).replace(/{{site.flipperVersion}}/g,p).trim(),m=(0,d.L)().isDarkTheme?l.Z:i.Z;return r.createElement(o.ZP,(0,a.Z)({},o.lG,{code:n,language:t,theme:m}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,i=e.getTokenProps;return r.createElement("pre",{className:t,style:n},a.map((function(e,t){return r.createElement("div",o({line:e,key:t}),e.map((function(e,t){return r.createElement("span",i({token:e,key:t}))})))})))}))}},79730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=(n(74866),n(85162),n(7772),["components"]),l={id:"use-ref",title:"useRef"},s=void 0,u={unversionedId:"mainconcepts/use-ref",id:"mainconcepts/use-ref",title:"useRef",description:"useRef is a hook that allows a component to maintain a mutable reference that doesn't trigger a re-render when updated. It returns an instance of Ref which has a single mutable value property, which should only be read/written on the UI thread.",source:"@site/../docs/mainconcepts/use-ref.mdx",sourceDirName:"mainconcepts",slug:"/mainconcepts/use-ref",permalink:"/docs/mainconcepts/use-ref",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/use-ref.mdx",tags:[],version:"current",frontMatter:{id:"use-ref",title:"useRef"},sidebar:"mainSidebar",previous:{title:"useEffect",permalink:"/docs/mainconcepts/use-effect"},next:{title:"useCached",permalink:"/docs/mainconcepts/use-cached"}},c={},p=[{value:"Managing UI Thread State with <code>useRef</code>",id:"managing-ui-thread-state-with-useref",level:2},{value:"Example: Logging Seen State",id:"example-logging-seen-state",level:3},{value:"Example: Starting/Stopping Animators",id:"example-startingstopping-animators",level:3},{value:"Pairing with <code>useEffect</code>",id:"pairing-with-useeffect",level:2}],d={toc:p},m="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.mdx)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"useRef")," is a hook that allows a component to maintain a mutable reference that doesn't trigger a re-render when updated. It returns an instance of ",(0,o.mdx)("inlineCode",{parentName:"p"},"Ref")," which has a single mutable ",(0,o.mdx)("inlineCode",{parentName:"p"},"value")," property, which should only be read/written on the UI thread."),(0,o.mdx)("p",null,"To familiarize yourself with the concept and rules for hooks, see the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/hooks-intro"},"Introduction to Hooks")," page."),(0,o.mdx)("h2",{id:"managing-ui-thread-state-with-useref"},"Managing UI Thread State with ",(0,o.mdx)("inlineCode",{parentName:"h2"},"useRef")),(0,o.mdx)("admonition",{type:"note"},(0,o.mdx)("p",{parentName:"admonition"},(0,o.mdx)("strong",{parentName:"p"},"Ref.value should only be read/written from the main thread.")," Since there is no guarantee that a component's render function is executed on the main thread, it should not be accessed during the execution of render."),(0,o.mdx)("p",{parentName:"admonition"},"Some locations where it ",(0,o.mdx)("em",{parentName:"p"},"is")," safe to access and mutate ",(0,o.mdx)("inlineCode",{parentName:"p"},"Ref.value"),":"),(0,o.mdx)("ul",{parentName:"admonition"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"onClick")," and other View events."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"onVisible")," and other visibility events."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"useEffect")," and its cleanup lambda."))),(0,o.mdx)("p",null,"Appropriate use cases of ",(0,o.mdx)("inlineCode",{parentName:"p"},"useRef")," are best shown by example. Note that none of these examples read or write ",(0,o.mdx)("inlineCode",{parentName:"p"},"useRef")," off the main thread or during the execution of the main body of the component's ",(0,o.mdx)("inlineCode",{parentName:"p"},"render()")," function."),(0,o.mdx)("h3",{id:"example-logging-seen-state"},"Example: Logging Seen State"),(0,o.mdx)("p",null,"In the below code, ",(0,o.mdx)("inlineCode",{parentName:"p"},"useRef")," is used to track whether we've handled the ",(0,o.mdx)("inlineCode",{parentName:"p"},"onVisible")," event previously. Updating ",(0,o.mdx)("inlineCode",{parentName:"p"},"hasLoggedVisible.value")," to true doesn't trigger a re-render, unlike storing and updating it via ",(0,o.mdx)("inlineCode",{parentName:"p"},"useState"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/LogOnceComponent.kt start=start_useref_example end=end_useref_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/LogOnceComponent.kt",start:"start_useref_example",end:"end_useref_example"},"class LogOnceComponent : KComponent() {\n  override fun ComponentScope.render(): Component {\n    val hasLoggedVisible = useRef<Boolean> { false }\n\n    return Text(\n        style =\n            Style.onVisible {\n              // onVisible executes on the main thread, so it's safe to read/write hasLoggedVisible\n              if (!hasLoggedVisible.value) {\n                doLogVisible(androidContext)\n                hasLoggedVisible.value = true\n              }\n            },\n        text = \"I'll let you know when I'm visible, but only once!\")\n  }\n}\n")),(0,o.mdx)("h3",{id:"example-startingstopping-animators"},"Example: Starting/Stopping Animators"),(0,o.mdx)("p",null,"In the below code, an animator is started and stopped when the Component is attached/detached on the main thread. It uses ",(0,o.mdx)("inlineCode",{parentName:"p"},"useRef")," to maintain a reference to the Animator created when the Component was attached."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/animations/animatedcounter/AnimatedCounter.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/animations/animatedcounter/AnimatedCounter.kt",start:"start_example",end:"end_example"},'class AnimatingCounter(private val count: Int) : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    val animation = useRef<AnimatedAnimation?> { null }\n    val translationY = useBinding(0f)\n\n    useEffect(count) {\n      // Animate the text to a Y-offset based on count\n      val newAnimation = Animated.spring(translationY, to = count * 10.dp.toPixels().toFloat())\n      newAnimation.start()\n      animation.value = newAnimation\n\n      onCleanup { animation.value?.cancel() }\n    }\n\n    return Text(style = Style.translationY(translationY), text = "$count", textSize = 24.sp)\n  }\n}\n')),(0,o.mdx)("h2",{id:"pairing-with-useeffect"},"Pairing with ",(0,o.mdx)("inlineCode",{parentName:"h2"},"useEffect")),(0,o.mdx)("p",null,"Pairing ",(0,o.mdx)("inlineCode",{parentName:"p"},"useRef")," with ",(0,o.mdx)("inlineCode",{parentName:"p"},"useEffect")," is a common pattern. For more information on ",(0,o.mdx)("inlineCode",{parentName:"p"},"useEffect"),", see the code samples in the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/use-effect"},"useEffect")," page."))}f.isMDXComponent=!0},23746:(e,t,n)=>{n.d(t,{ZP:()=>f,lG:()=>i});var a=n(87410);const r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var o=n(67294),i={Prism:a.Z,theme:r};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}var u=/\r\n|\r|\n/,c=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=s({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=s({},n,{backgroundColor:null}),r};function m(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const f=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=s({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==r&&(o.style=void 0!==o.style?s({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),l(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var i=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,i=s({},m(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?s({},i.style,r):r),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i})),l(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,i=0,l=[],s=[l];i>-1;){for(;(o=a[i]++)<r[i];){var d=void 0,m=t[i],f=n[i][o];if("string"==typeof f?(m=i>0?m:["plain"],d=f):(m=p(m,f.type),f.alias&&(m=p(m,f.alias)),d=f.content),"string"==typeof d){var h=d.split(u),y=h.length;l.push({types:m,content:h[0]});for(var g=1;g<y;g++)c(l),s.push(l=[]),l.push({types:m,content:h[g]})}else i++,t.push(m),n.push(d),a.push(0),r.push(d.length)}i--,t.pop(),n.pop(),a.pop(),r.pop()}return c(l),s}(void 0!==i?this.tokenize(t,a,i,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component)},13618:(e,t,n)=>{n.d(t,{Z:()=>a});const a={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,n)=>{n.d(t,{Z:()=>a});const a={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);