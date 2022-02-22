"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2033,4957,8723,8e3],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){return function(t){var n=p(t.components);return r.createElement(e,a({},t,{components:n}))}},p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);const o=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),o=n(67294),a=n(72389),l=n(79443);const i=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=n(83039),c=n(86010);const u="tabItem_1uMI";function p(e){var t,n,r,a=e.lazy,l=e.block,p=e.defaultValue,d=e.values,m=e.groupId,y=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,s.duplicates)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=i(),k=b.tabGroupChoices,x=b.setTabGroupChoices,w=(0,o.useState)(v),T=w[0],N=w[1],O=[],C=(0,s.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=k[m];null!=P&&P!==T&&f.some((function(e){return e.value===P}))&&N(P)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),r=f[n].value;r!==T&&(C(t),N(r),null!=m&&x(m,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.currentTarget)-1;n=O[o]||O[O.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.default)("tabs",{"tabs--block":l},y)},f.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,c.default)("tabs__item",u,{"tabs__item--active":T===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:E,onClick:E},null!=n?n:t)}))),a?(0,o.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,a.default)();return o.createElement(p,(0,r.Z)({key:String(t)},e))}},82924:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(67294).createContext(void 0)},79443:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)(void 0)},85350:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(82924);const a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},75960:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),o=n(67294),a=n(24544),l=n(7694),i=n(13618),s="0.41.1",c="0.41.2-SNAPSHOT",u="0.9.0",p="0.46.0",d=n(85350);const m=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,s).replace(/{{site.soloaderVersion}}/g,u).replace(/{{site.lithoSnapshotVersion}}/g,c).replace(/{{site.flipperVersion}}/g,p).trim(),m=(0,d.Z)().isDarkTheme?i.Z:l.Z;return o.createElement(a.ZP,(0,r.Z)({},a.lG,{code:n,language:t,theme:m}),(function(e){var t=e.className,n=e.style,r=e.tokens,a=e.getLineProps,l=e.getTokenProps;return o.createElement("pre",{className:t,style:n},r.map((function(e,t){return o.createElement("div",a({line:e,key:t}),e.map((function(e,t){return o.createElement("span",l({token:e,key:t}))})))})))}))}},81682:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>c,toc:()=>u,default:()=>d});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=(n(55064),n(58215),n(75960),["components"]),i={id:"testing-getting-started",title:"Getting Started"},s=void 0,c={unversionedId:"kotlin/testing-getting-started",id:"kotlin/testing-getting-started",isDocsHomePage:!1,title:"Getting Started",description:"The Kotlin Litho Testing API is presented through the LithoViewRule class. It allows you to:",source:"@site/../docs/kotlin/testing-getting-started.mdx",sourceDirName:"kotlin",slug:"/kotlin/testing-getting-started",permalink:"/docs/kotlin/testing-getting-started",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/kotlin/testing-getting-started.mdx",tags:[],version:"current",frontMatter:{id:"testing-getting-started",title:"Getting Started"},sidebar:"mainSidebar",previous:{title:"Internal \ud83c\udfd7: Sections implementation architecture",permalink:"/docs/sections/architecture"},next:{title:"Assertions",permalink:"/docs/kotlin/testing-assertions"}},u=[{value:"Adding Dependencies",id:"adding-dependencies",children:[],level:3},{value:"Basics",id:"basics",children:[],level:3}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"The ",(0,a.mdx)("strong",{parentName:"p"},"Kotlin Litho Testing API")," is presented through the ",(0,a.mdx)("inlineCode",{parentName:"p"},"LithoViewRule")," class. It allows you to:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"make assertions against the component hierarchy,"),(0,a.mdx)("li",{parentName:"ul"},"mark assertions against the view hierarchy,"),(0,a.mdx)("li",{parentName:"ul"},"and gives access to utility functions to interact with the view hierarchy, e.g. by clicking")),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"LithoViewRule")," uses ",(0,a.mdx)("inlineCode",{parentName:"p"},"Junit TestRule")," which provides a flexible mechanism to execute code before and after a test method, as a result of which, we are able to prepare the environment and then clean it up after test, so you don't have to worry about it."),(0,a.mdx)("p",null,"If you would like to read more about the TestRules, please ",(0,a.mdx)("a",{parentName:"p",href:"https://junit.org/junit4/javadoc/4.12/org/junit/rules/TestRule.html"},"visit the official JUnit documentation.")),(0,a.mdx)("h3",{id:"adding-dependencies"},"Adding Dependencies"),(0,a.mdx)("p",null,"In order to use Kotlin Litho Testing API you'll need to add the ",(0,a.mdx)("inlineCode",{parentName:"p"},"litho-testing")," dependency into your BUCK file:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="BUCK"',title:'"BUCK"'},'deps = [\n    "//fbandroid/libraries/components/litho-testing/src/main/java/com/facebook/litho/testing:testing"\n],\n')),(0,a.mdx)("h3",{id:"basics"},"Basics"),(0,a.mdx)("p",null,"In order to use the @Rule inside of your test class you need to initialise it:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt start=start_example end=end_example",file:"litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt",start:"start_example",end:"end_example"},"@Rule @JvmField val lithoViewRule = LithoViewRule()\n")),(0,a.mdx)("p",null,"Then, within a test, you will generally render your component with the help of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"LithoViewRule.render(Component)")," method and perform assertions or other actions on the ",(0,a.mdx)("inlineCode",{parentName:"p"},"LithoView")," returned by the ",(0,a.mdx)("inlineCode",{parentName:"p"},"render")," call."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt start=start_render_example end=end_render_example",file:"litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt",start:"start_render_example",end:"end_render_example"},"val testLithoView = lithoViewRule.render { TestComponent() }\n")),(0,a.mdx)("p",null,"In the next Sections we will describe how to use well known ",(0,a.mdx)("inlineCode",{parentName:"p"},"Assertions")," and how to interact with your ",(0,a.mdx)("inlineCode",{parentName:"p"},"Components"),"."))}d.isMDXComponent=!0},24544:(e,t,n)=>{n.d(t,{ZP:()=>y,lG:()=>l});var r=n(87410);const o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var a=n(67294),l={Prism:r.default,theme:o};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=s({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=s({},n,{backgroundColor:null}),o};function m(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const y=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=s({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?s({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var l=r?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(i))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,l=s({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?s({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),i(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,l=0,i=[],s=[i];l>-1;){for(;(a=r[l]++)<o[l];){var d=void 0,m=t[l],y=n[l][a];if("string"==typeof y?(m=l>0?m:["plain"],d=y):(m=p(m,y.type),y.alias&&(m=p(m,y.alias)),d=y.content),"string"==typeof d){var h=d.split(c),f=h.length;i.push({types:m,content:h[0]});for(var g=1;g<f;g++)u(i),s.push(i=[]),i.push({types:m,content:h[g]})}else l++,t.push(m),n.push(d),r.push(0),o.push(d.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return u(i),s}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)},13618:(e,t,n)=>{n.d(t,{Z:()=>r});const r={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,n)=>{n.d(t,{Z:()=>r});const r={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);