(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"Button",(function(){return b})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(7),i=(n(0),n(182)),a={id:"builtin-widgets",title:"Built-in widgets"},l={unversionedId:"widgets/builtin-widgets",id:"widgets/builtin-widgets",isDocsHomePage:!1,title:"Built-in widgets",description:"Litho provides a number of build-in components.",source:"@site/../docs/widgets/builtin-widgets.mdx",slug:"/widgets/builtin-widgets",permalink:"/docs/widgets/builtin-widgets",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/widgets/builtin-widgets.mdx",version:"current",sidebar:"mainSidebar",previous:{title:"Internal \ud83c\udfd7: Sections implementation architecture",permalink:"/docs/sections/architecture"},next:{title:"Android Studio Plugin",permalink:"/docs/devtools/android-studio-plugin"}},c=[{value:"Text",id:"text",children:[]},{value:"TextInput",id:"textinput",children:[]},{value:"Image",id:"image",children:[]},{value:"Card",id:"card",children:[]},{value:"SolidColor",id:"solidcolor",children:[]},{value:"Progress",id:"progress",children:[]},{value:"Spinner",id:"spinner",children:[]},{value:"VerticalScroll",id:"verticalscroll",children:[]},{value:"HorizontalScroll",id:"horizontalscroll",children:[]},{value:"Recycler",id:"recycler",children:[]}],b=function(e){var t=e.label,n=e.url;return Object(i.b)("a",{class:"button button--primary widget-button",href:n},t)},p={toc:c,Button:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Litho provides a number of build-in components.\nYou can find the full list of components and APIs within our ",Object(i.b)("a",{parentName:"p",href:"pathname:///javadoc/index.html?com/facebook/litho/widget/package-summary.html"},"javadocs for the com.facebook.litho.widget package"),"."),Object(i.b)("p",null,"We'll show and explain here a list of the most basic widgets."),Object(i.b)("p",null,"Font Size:\nbold italic\nSize\nVertical Size:\nHorizontal Size:\nBorder\nBorder Radius:\nBorder Size:\nBox Shadow\nText Shadow\nVertical Position:\nHorizontal Position:\nBlur Radius:"),Object(i.b)(b,{label:"Text",url:"#text",mdxType:"Button"}),Object(i.b)(b,{label:"TextInput",url:"#textinput",mdxType:"Button"}),Object(i.b)(b,{label:"Image",url:"#image",mdxType:"Button"}),Object(i.b)(b,{label:"Card",url:"#card",mdxType:"Button"}),Object(i.b)(b,{label:"SolidColor",url:"#solidcolor",mdxType:"Button"}),Object(i.b)(b,{label:"Progress",url:"#progress",mdxType:"Button"}),Object(i.b)(b,{label:"Spinner",url:"#spinner",mdxType:"Button"}),Object(i.b)(b,{label:"VerticalScroll",url:"#verticalscroll",mdxType:"Button"}),Object(i.b)(b,{label:"HorizontalScroll",url:"#horizontalscroll",mdxType:"Button"}),Object(i.b)(b,{label:"Recycler",url:"#recycler",mdxType:"Button"}),Object(i.b)("h2",{id:"text"},"Text"),Object(i.b)("p",null,"This is the most basic Litho component to show simple text. It's the equivalent of an Android ",Object(i.b)("inlineCode",{parentName:"p"},"TextView")," within Litho."),Object(i.b)("h5",{id:"required-props"},"Required Props"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CharSequence text"),": Text to display.")),Object(i.b)("h4",{id:"usage"},"Usage"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Text")," has numerous optional props you can use to style your text, same as ",Object(i.b)("inlineCode",{parentName:"p"},"TextView")," since both use ",Object(i.b)("inlineCode",{parentName:"p"},"android.text.Layout")," under the hood. A full list of them is available in the ",Object(i.b)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/widget/Text.html"},"javadocs"),".\nMost props directly accept resources ids too."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'final Component component =\n    Text.create(c)\n        .text("This is my example text")\n        .textSizeRes(R.dimen.my_text_size)\n        .textColorRes(R.color.my_text_color)\n        .textAlignment(Layout.Alignment.ALIGN_CENTER)\n        .build()\n')),Object(i.b)("h2",{id:"textinput"},"TextInput"),Object(i.b)("p",null," Component that renders an editable text input using an Android ",Object(i.b)("inlineCode",{parentName:"p"},"EditText"),"."),Object(i.b)("h5",{id:"required-props-1"},"Required Props"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"None.")),Object(i.b)("h4",{id:"usage-1"},"Usage"),Object(i.b)("p",null,"Because this component is backed by Android's ",Object(i.b)("inlineCode",{parentName:"p"},"EditText"),", many native capabilities are applicable!"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use an ",Object(i.b)("inlineCode",{parentName:"li"},"android.text.InputFilter ")," to set a text length limit or modify text input."),Object(i.b)("li",{parentName:"ul"},"Change the input representation by passing an ",Object(i.b)("inlineCode",{parentName:"li"},"android.text.InputType")," constants."),Object(i.b)("li",{parentName:"ul"},"For performance reasons, avoid re-creating the Component with different props to change its configuration. You can instead use Event triggers ",Object(i.b)("inlineCode",{parentName:"li"},"OnTrigger")," to update text, request view focus or set selection. e.g. ",Object(i.b)("inlineCode",{parentName:"li"},'TextInput.setText(c, "myTextInputKey", "myText")'),".")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"private static final InputFilter lenFilter = new InputFilter.LengthFilter(maxLength);\nComponent component =\n    TextInput.create(c)\n        .initialText(text)\n        .textColorStateList(ColorStateList.valueOf(color))\n        .multiline(true)\n        .inputFilter(lenFilter)\n        .backgroundColor(Color.TRANSPARENT)\n        .inputType(InputType.TYPE_CLASS_TEXT | InputType.TYPE_TEXT_FLAG_CAP_SENTENCES)\n        .build()\n")),Object(i.b)("h2",{id:"image"},"Image"),Object(i.b)("p",null,"A component that is able to display drawable resources."),Object(i.b)("h5",{id:"required-props-2"},"Required Props"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Drawable drawable"),": Drawable to display.")),Object(i.b)("h4",{id:"usage-2"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"Component component =\n    Image.create(c)\n        .drawableRes(R.drawable.my_drawable)\n        .scaleType(ImageView.ScaleType.CENTER_CROP)\n        .build()\n")),Object(i.b)("h2",{id:"card"},"Card"),Object(i.b)("p",null,"The Litho equivalent of an Android ",Object(i.b)("inlineCode",{parentName:"p"},"CardView"),". ",Object(i.b)("inlineCode",{parentName:"p"},"Card"),' applies borders with shadows/elevation to a given component.\nIf your card is rendered on top of a dynamically colored background which cannot be "faked" using the ',Object(i.b)("inlineCode",{parentName:"p"},"Card")," component, use the less performant prop ",Object(i.b)("inlineCode",{parentName:"p"},"transparencyEnabled(true)"),"."),Object(i.b)("h5",{id:"required-props-3"},"Required Props"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Component content"),": The component to decorate.")),Object(i.b)("h4",{id:"usage-3"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"Component component =\n    Card.create(c)\n        .content(myContentComponent)\n        .clippingColorRes(R.color.my_clipping_color)\n        .cornerRadiusDip(8)\n        .build()\n")),Object(i.b)("h2",{id:"solidcolor"},"SolidColor"),Object(i.b)("p",null,"A simple Component to render solid color."),Object(i.b)("h5",{id:"required-props-4"},"Required Props"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"int color"),": Color to display.")),Object(i.b)("h4",{id:"usage-4"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"Component component =\n    SolidColor.create(c)\n        .color(Color.RED)\n        .alpha(0.5)\n        .build()\n")),Object(i.b)("h2",{id:"progress"},"Progress"),Object(i.b)("p",null,"Renders an infinitely spinning progress bar backed by the Android's ",Object(i.b)("inlineCode",{parentName:"p"},"ProgressBar"),"."),Object(i.b)("h5",{id:"required-props-5"},"Required Props"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"None.")),Object(i.b)("h4",{id:"usage-5"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"Component component =\n      Progress.create(c)\n        .indeterminateDrawableRes(R.drawable.my_loading_spinner)\n        .build()\n")),Object(i.b)("h2",{id:"spinner"},"Spinner"),Object(i.b)("p",null,"A simple spinner (dropdown) component. Derived from the standard Android ",Object(i.b)("inlineCode",{parentName:"p"},"Spinner"),"."),Object(i.b)("h5",{id:"required-props-6"},"Required Props"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"List<String> options"),": List of possible options to select from."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"String selectedOption"),": Currently selected option.")),Object(i.b)("h4",{id:"usage-6"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"List<String> myOptions = ...\nComponent component =\n      Spinner.create(c)\n        .options(myOptions)\n        .selectedOption(myOptions.get(0))\n        .build()\n")),Object(i.b)("h2",{id:"verticalscroll"},"VerticalScroll"),Object(i.b)("p",null,"Component that wraps another component, allowing it to be vertically scrollable. It's analogous to Android's ",Object(i.b)("inlineCode",{parentName:"p"},"ScrollView"),"."),Object(i.b)("h5",{id:"required-props-7"},"Required Props"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Component childComponent"),": Component to vertically scroll.")),Object(i.b)("h4",{id:"usage-7"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"Component component =\n      VerticalScroll.create(c)\n        .childComponent(myComponentToScroll)\n        .verticalFadingEdgeEnabled(true)\n        .fadingEdgeLengthDip(FADING_EDGE_LENGTH_DP)\n        .build()\n")),Object(i.b)("h2",{id:"horizontalscroll"},"HorizontalScroll"),Object(i.b)("p",null,"Component that wraps another component, allowing it to be horizontally scrollable. It's\nanalogous to Android's ",Object(i.b)("inlineCode",{parentName:"p"},"HorizontalScrollView"),"."),Object(i.b)("h5",{id:"required-props-8"},"Required Props"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Component contentProps"),": Component to horizontally scroll.")),Object(i.b)("h4",{id:"usage-8"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"Component component =\n      HorizontalScroll.create(c)\n        .contentProps(myComponentToScroll)\n        .build()\n")),Object(i.b)("h2",{id:"recycler"},"Recycler"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Recycler")," is the equivalent of Android's ",Object(i.b)("inlineCode",{parentName:"p"},"RecyclerView"),". We suggest you to use ",Object(i.b)("a",{parentName:"p",href:"/docs/sections/start"},"Sections")," for efficient lists rendering, which is using ",Object(i.b)("inlineCode",{parentName:"p"},"Recycler")," under the hood.\nHowever, if you really want to use ",Object(i.b)("inlineCode",{parentName:"p"},"Recycler")," directly, we have an ",Object(i.b)("a",{parentName:"p",href:"/docs/sections/recycler-collection-component"},"advanced guide dedicated to it"),"."))}d.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,m=d["".concat(a,".").concat(u)]||d[u]||s[u]||i;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var b=2;b<i;b++)a[b]=n[b];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);