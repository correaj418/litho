"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[915],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){return function(t){var n=u(t.components);return o.createElement(e,a({},t,{components:n}))}},u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||y[d]||a;return n?o.createElement(m,l(l({ref:t},c),{},{components:n})):o.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7772:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(87462),r=n(67294),a=n(23746),i=n(7694),l=n(13618),s="0.47.0",c="0.48.0-SNAPSHOT",p="0.10.4",u="0.142.0",d=n(86668);const m=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,s).replace(/{{site.soloaderVersion}}/g,p).replace(/{{site.lithoSnapshotVersion}}/g,c).replace(/{{site.flipperVersion}}/g,u).trim(),m=(0,d.L)().isDarkTheme?l.Z:i.Z;return r.createElement(a.ZP,(0,o.Z)({},a.lG,{code:n,language:t,theme:m}),(function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,i=e.getTokenProps;return r.createElement("pre",{className:t,style:n},o.map((function(e,t){return r.createElement("div",a({line:e,key:t}),e.map((function(e,t){return r.createElement("span",i({token:e,key:t}))})))})))}))}},55929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=n(44996),l=n(7772),s=["components"],c={id:"event-handler-testing",title:"Event Handler Testing"},p=void 0,u={unversionedId:"testing/event-handler-testing",id:"testing/event-handler-testing",title:"Event Handler Testing",description:"This document provides a quick example of how to write tests for your event",source:"@site/../docs/testing/event-handler-testing.mdx",sourceDirName:"testing",slug:"/testing/event-handler-testing",permalink:"/docs/testing/event-handler-testing",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/testing/event-handler-testing.mdx",tags:[],version:"current",frontMatter:{id:"event-handler-testing",title:"Event Handler Testing"}},d={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"What to test for",id:"what-to-test-for",level:2},{value:"Testing handler presence",id:"testing-handler-presence",level:2},{value:"Next",id:"next",level:2}],y={toc:m},g="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.mdx)(g,(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"This document provides a quick example of how to write tests for your event\nhandlers. You should be familiar with ",(0,a.mdx)("a",{parentName:"p",href:"/docs/testing/subcomponent-testing"},"TestSpecs"),"\nbefore diving into this topic."),(0,a.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.mdx)("p",null,"The package is shipped as a separate module. It is available via maven as\n",(0,a.mdx)("inlineCode",{parentName:"p"},"com.facebook.litho:litho-testing"),". To include it in your gradle build, add this\nline to your ",(0,a.mdx)("inlineCode",{parentName:"p"},"dependencies")," block:"),(0,a.mdx)(l.Z,{language:"groovy",code:"\ntestImplementation 'com.facebook.litho:litho-testing:{{site.lithoVersion}}'\n",mdxType:"VersionedCodeBlock"}),(0,a.mdx)("h2",{id:"what-to-test-for"},"What to test for"),(0,a.mdx)("p",null,"We are going to work with this spec in our example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},'@LayoutSpec\npublic class LearningStateComponentSpec {\n\n  @PropDefault static final boolean canClick = true;\n\n  @OnCreateInitialState\n  static void onCreateInitialState(\n    ComponentContext c,\n    StateValue<Integer> count) {\n\n    count.set(0);\n  }\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n    ComponentContext c,\n    @Prop(optional = true) boolean canClick,\n    @State Integer count) {\n\n    return Text.create(c)\n        .text("Clicked " + count + " times.")\n        .textSizeDip(50)\n        .clickHandler(canClick ? LearningStateComponent.onClick(c) : null)\n        .backgroundRes(android.R.color.holo_blue_light)\n        .alignSelf(STRETCH)\n        .paddingDip(BOTTOM, 20)\n        .paddingDip(TOP, 40)\n        .build();\n  }\n\n  @OnUpdateState\n  static void incrementClickCount(StateValue<Integer> count) {\n    count.set(count.get() + 1);\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClick(ComponentContext c) {\n    LearningStateComponent.incrementClickCount(c);\n  }\n}\n')),(0,a.mdx)("video",{loop:"true",autoplay:"true",class:"video",width:"300px"},(0,a.mdx)("source",{type:"video/mp4",src:(0,i.default)("/videos/state_taps.mp4")})),(0,a.mdx)("p",null,"When testing event handlers, it is important to remember what you actually want\nto validate in your unit test. You may be getting this inkling to ensure that a\nclick event you issue triggers the callback you pass in as your prop. ",(0,a.mdx)("em",{parentName:"p"},"When you\ndo this, you are actually testing the framework.")," This is not what you want to\nspend your time on. While writing high-level end-to-end tests ensuring that your\ntouch events have the right effects, this is not what you should concern\nyourself with for unit tests."),(0,a.mdx)("h2",{id:"testing-handler-presence"},"Testing handler presence"),(0,a.mdx)("p",null,"Instead, let's focus on the actual logic that we have in our spec. Whether or\nnot we have a click handler depends on the prop ",(0,a.mdx)("inlineCode",{parentName:"p"},"canClick"),". It is very common\nfor handlers to be set conditionally based on a prop. In our test, we are going\nto limit ourselves to checking if a handler is set or not. For that we can use\nthe TestSpec matchers we have learned about before."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"@RunWith(LithoTestRunner.class)\npublic class LearningStateComponentSpecTest {\n  @Rule public LithoViewRule mLithoViewRule = new LithoViewRule();\n\n  @Test\n  public void testComponentOnClick() {\n    final ComponentContext c = mLithoViewRule.getContext();\n    final Component component = LearningStateComponent.create(\n        c)\n        .canClick(true)\n        .build();\n\n    LegacyLithoAssertions.assertThat(c, component).has(\n        SubComponentExtractor.subComponentWith(\n          c,\n          TestText.matcher(c)\n            .clickHandler(IsNull.<EventHandler<ClickEvent>>notNullValue(null)).build())\n    );\n  }\n\n  @Test\n  public void testNoComponentOnClick() {\n    final ComponentContext c = mLithoViewRule.getContext();\n    final Component component = LearningStateComponent.create(\n        c)\n        .canClick(false)\n        .build();\n\n    LegacyLithoAssertions.assertThat(c, component).has(\n        SubComponentExtractor.subComponentWith(\n          c,\n          TestText.matcher(c)\n            .clickHandler(IsNull.<EventHandler<ClickEvent>>nullValue(null)).build())\n    );\n  }\n}\n")),(0,a.mdx)("p",null,"As you can see here, we can match against a click handler just like any other\nprop set on a sub-component. Matching against a specific instance of an\n",(0,a.mdx)("inlineCode",{parentName:"p"},"EventHandler")," is currently not supported."),(0,a.mdx)("h2",{id:"next"},"Next"),(0,a.mdx)("p",null,"Either head back to the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/testing/testing-overview"},"testing overview")," or\ncontinue with the next section, ",(0,a.mdx)("a",{parentName:"p",href:"/docs/testing/espresso-testing"},"Espresso"),"."))}h.isMDXComponent=!0},23746:(e,t,n)=>{n.d(t,{ZP:()=>y,lG:()=>i});var o=n(87410);const r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var a=n(67294),i={Prism:o.Z,theme:r};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=s({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=s({},n,{backgroundColor:null}),r};function m(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const y=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=s({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==r&&(a.style=void 0!==a.style?s({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),l(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var i=o?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,i=s({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?s({},i.style,r):r),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i})),l(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,i=0,l=[],s=[l];i>-1;){for(;(a=o[i]++)<r[i];){var d=void 0,m=t[i],y=n[i][a];if("string"==typeof y?(m=i>0?m:["plain"],d=y):(m=u(m,y.type),y.alias&&(m=u(m,y.alias)),d=y.content),"string"==typeof d){var g=d.split(c),h=g.length;l.push({types:m,content:g[0]});for(var f=1;f<h;f++)p(l),s.push(l=[]),l.push({types:m,content:g[f]})}else i++,t.push(m),n.push(d),o.push(0),r.push(d.length)}i--,t.pop(),n.pop(),o.pop(),r.pop()}return p(l),s}(void 0!==i?this.tokenize(t,o,i,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)},13618:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);