"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8807],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),m=function(e){return function(t){var n=c(t.components);return o.createElement(e,r({},t,{components:n}))}},c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(h,i(i({ref:t},l),{},{components:n})):o.createElement(h,i({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},13919:(e,t,n)=>{function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,{b:()=>o,Z:()=>a})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>r,default:()=>s});var o=n(52263),a=n(13919);function r(){var e=(0,o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var r=void 0===o?{}:o,s=r.forcePrependBaseUrl,i=void 0!==s&&s,p=r.absolute,l=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(i)return t+n;var m=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+m:m}(r,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},55458:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>m,toc:()=>c,default:()=>u});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=n(44996),i=["components"],p={id:"prop-matching",title:"Matching @Prop"},l=void 0,m={unversionedId:"testing/prop-matching",id:"testing/prop-matching",isDocsHomePage:!1,title:"Matching @Prop",description:"For help with setting up the Test environment, see the Getting Started page.",source:"@site/../docs/testing/prop-matching.mdx",sourceDirName:"testing",slug:"/testing/prop-matching",permalink:"/docs/testing/prop-matching",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/testing/prop-matching.mdx",tags:[],version:"current",frontMatter:{id:"prop-matching",title:"Matching @Prop"}},c=[{value:"Complex Components",id:"complex-components",children:[{value:"Testing Complex Components",id:"testing-complex-components",children:[],level:3}],level:2},{value:"Props Matching with <code>@TestSpec</code>",id:"props-matching-with-testspec",children:[{value:"Using <code>@TestSpec</code>",id:"using-testspec",children:[],level:3},{value:"Advanced Matchers",id:"advanced-matchers",children:[],level:3},{value:"Matching Matchers",id:"matching-matchers",children:[],level:3}],level:2},{value:"A Note on Buck",id:"a-note-on-buck",children:[],level:2},{value:"TL;DR",id:"tldr",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.mdx)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tips")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"For help with setting up the Test environment, see the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/testing/unit-testing"},"Getting Started")," page."),(0,r.mdx)("p",{parentName:"div"},"Before learning about ",(0,r.mdx)("inlineCode",{parentName:"p"},"@Prop")," matching, it's recommended you become familiar with ",(0,r.mdx)("a",{parentName:"p",href:"/docs/testing/subcomponent-testing"},"sub-component testing"),"."))),(0,r.mdx)("p",null,"Within this page, you'll explore TestSpecs to test individual props of Components, even if you don't know all of them."),(0,r.mdx)("h2",{id:"complex-components"},"Complex Components"),(0,r.mdx)("p",null,"Composability is one of Litho's greatest strengths. It enables you to encapsulate your logic in small components and combine them effortlessly into larger ones. But, despite all good efforts, there is sometimes no clear dividing line and your component may grow beyond its original scope."),(0,r.mdx)("p",null,"Having complex components shouldn't prevent you from using them confidently. A set of powerful APIs give you the ability to test your components no matter what their size or complexity."),(0,r.mdx)("p",null,"Consider the following LayoutSpec 'ComplexComponentSpec':"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec\npublic class ComplexComponentSpec {\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c,\n      @Prop StoryProps<ComplexAttachment> storyProps,\n      @Prop ImageRequest imageRequest,\n      @Prop DraweeController draweeController,\n      @Prop String title,\n      @Prop(resType = ResType.DIMEN_TEXT) int titleTextSize,\n      @Prop int visiblePhotoCount,\n      @Prop(optional = true) Artist favoriteArtist,\n      @Prop(optional = true) boolean shouldHavePuppies) {\n    return Row.create(c).build();\n  }\n}\n")),(0,r.mdx)("h3",{id:"testing-complex-components"},"Testing Complex Components"),(0,r.mdx)("p",null,"Within the props of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ComplexComponentSpec"),", there are a a lot of opaque objects that we may have trouble getting hold of for our tests. ",(0,r.mdx)("inlineCode",{parentName:"p"},"StoryProps")," might be something we obtain through some dependency injection mechanism. A ",(0,r.mdx)("inlineCode",{parentName:"p"},"DraweeController")," is an implementation detail we shouldn't have to worry about for ensuring that the component tree has the right shape. However, if you recall from the ",(0,r.mdx)("inlineCode",{parentName:"p"},"SubComponent.of")," API, it's necessary to specify all non-optional props for it to succeed."),(0,r.mdx)("img",{src:(0,s.default)("/images/complex-component-0.svg"),align:"right",width:"200px",className:"white-background"}),(0,r.mdx)("br",null),(0,r.mdx)("p",null,"To carry out the testing, you create a standard JUnit test suite and run it with a ",(0,r.mdx)("inlineCode",{parentName:"p"},"RobolectricTestRunner"),"-compatible implementation like ",(0,r.mdx)("inlineCode",{parentName:"p"},"LithoTestRunner"),"."),(0,r.mdx)("p",null,"As shown in the diagram to the right, assume that a ",(0,r.mdx)("inlineCode",{parentName:"p"},"FeedItemComponent")," contains the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ComplexComponent")," specified above.\nThe ",(0,r.mdx)("inlineCode",{parentName:"p"},"FeedItemComponent")," contains the logic for populating our complex props which we want to verify, as shown in the following code:"),(0,r.mdx)("br",{clear:"right"}),(0,r.mdx)("br",null),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void testComplexSubComponent() {\n  final ComponentContext c = mLithoViewRule.getContext();\n  final Component<FeedItemComponent> component = makeComponent("Two Brothers");\n\n  assertThat(c, component)\n    .has(\n      subComponentWith(\n        c, legacySubComponent(SubComponent.of(\n          // ERROR: This fails at runtime as we haven\'t provided all\n          // required parameters.\n          ComplexComponent.create(c)\n            .title("Two Brothers")\n            .build()))));\n}\n\n')),(0,r.mdx)("p",null,"Sadly, this test fails with the following error message:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"java.lang.IllegalStateException: The following props are not marked as optional and were not supplied: [storyProps, imageRequest, draweeController,titleTextSize, visiblePhotoCount]\n")),(0,r.mdx)("p",null,"If it's not possible to provide these props in your tests, or if you we don't want to test implementation details like the image loading controller, you could simply choose not to test any props at all and decide to verify only the presence of your component:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void testComplexSpecIsPresent() {\n  final ComponentContext c = mLithoViewRule.getContext();\n  final Component<FeedItemComponent> component = makeComponent("Rixty Minutes");\n\n  assertThat(c, component)\n    .has(\n      subComponentWith(\n        c, inspectedTypeIs(ComplexComponent.class)));\n}\n')),(0,r.mdx)("p",null,"While this type of testing is not perfect, it's better than nothing."),(0,r.mdx)("h2",{id:"props-matching-with-testspec"},"Props Matching with ",(0,r.mdx)("inlineCode",{parentName:"h2"},"@TestSpec")),(0,r.mdx)("p",null,"TestSpecs enable you to exactly match against those props that you want to test. Just as with LayoutSpecs and MountSpecs, TestSpecs make use of the powerful annotation processing mechanism Java offers and generate code for you."),(0,r.mdx)("p",null,"To start your testing project, create a new class and link it the original spec for which you want to generate the TestSpec:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"@TestSpec(ComplexComponentSpec.class)\npublic interface TestComplexComponentSpec {}\n")),(0,r.mdx)("p",null,"The above two lines are enough to generate a powerful 'matcher' that can be used in your tests."),(0,r.mdx)("p",null,"There are a few items of note:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The class you reference in ",(0,r.mdx)("inlineCode",{parentName:"li"},"@TestSpec")," must be a LayoutSpec or MountSpec."),(0,r.mdx)("li",{parentName:"ul"},"You must link to the Spec and not the generated component, for example, ",(0,r.mdx)("inlineCode",{parentName:"li"},"ComplexComponentSpec.class")," not ",(0,r.mdx)("inlineCode",{parentName:"li"},"ComplexComponent.class"),"."),(0,r.mdx)("li",{parentName:"ul"},"In contrast to other specs, TestSpecs are generated from an interface, not a class."),(0,r.mdx)("li",{parentName:"ul"},"The interface must be empty: it cannot have any members."),(0,r.mdx)("li",{parentName:"ul"},"By convention, you prefix your TestSpec with ",(0,r.mdx)("inlineCode",{parentName:"li"},"Test"),", followed by the original spec name.")),(0,r.mdx)("p",null,"Now that the TestSpec is created, it's time to put it to use."),(0,r.mdx)("h3",{id:"using-testspec"},"Using ",(0,r.mdx)("inlineCode",{parentName:"h3"},"@TestSpec")),(0,r.mdx)("p",null,"Where normal components have a ",(0,r.mdx)("inlineCode",{parentName:"p"},"create")," function, test specs come with a ",(0,r.mdx)("inlineCode",{parentName:"p"},"matcher")," function.\nIt does take the same props as the underlying component but enable you to omit non-optional props, as shown in the following code:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void testComplexTestSpecProps() {\n  final ComponentContext c = mLithoViewRule.getContext();\n  final Component<FeedItemComponent> component = makeComponent("Two Brothers");\n\n  assertThat(c, component)\n    .has(\n      subComponentWith(\n        c, TestComplexComponent.matcher(c)\n          .shouldHavePuppies(false)\n          .build()));\n}\n')),(0,r.mdx)("p",null,"This omission of puppies (.shouldHavePuppies(false)) couldn't possibly pass the test run. It will fail with the following 'helpful' error message:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},'java.lang.AssertionError:\nExpecting:\n <FeedItemComponent{0, 0 - 100, 100}\n  ComplexComponent{0, 0 - 100, 0}\n  Column{0, 0 - 100, 50}\n    FeedImageComponent{0, 0 - 100, 50}\n      RecyclerCollectionComponent{0, 0 - 100, 50}\n        Recycler{0, 0 - 100, 0}\n    TitleComponent{4, 46 - 16, 46}\n      Text{4, 46 - 16, 46 text="Some Name"}\n    ActionsComponent{60, 4 - 96, 40}\n      FavouriteButton{2, 2 - 34, 34 [clickable]}\n  FooterComponent{0, 50 - 100, 66}\n    Text{8, 8 - 92, 8 text="Two Brothers"}>\nto have:\n <sub component with <Sub-component of type <ComplexComponent> with prop <shouldHavePuppies> is <false> (doesn\'t match true)>>\n')),(0,r.mdx)("p",null,"From the error message, you can see a brief overview of the hierarchy you were matching against and the matcher that failed."),(0,r.mdx)("h3",{id:"advanced-matchers"},"Advanced Matchers"),(0,r.mdx)("p",null,"Instead of just matching against partial props, you can also provide 'hamcrest' matchers in any place that accepts concrete values. For props that take resource types, you can make use of all the same matchers you find in regular components:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'@Test\npublic void testComplexTestSpecAdvancedProps() {\n  final ComponentContext c = mLithoViewRule.getContext();\n  final Component<FeedItemComponent> component =\n      makeComponent("Rixty Minutes");\n\n  assertThat(c, component)\n    .has(\n      subComponentWith(\n        c, TestComplexComponent.matcher(c)\n          // titleTextSizeDip, Sp etc. work too!\n          .titleTextSizeRes(R.dimen.notification_subtext_size)\n          .title(containsString("Minutes"))\n          .build()));\n}\n')),(0,r.mdx)("h3",{id:"matching-matchers"},"Matching Matchers"),(0,r.mdx)("p",null,"There is one type of prop that requires some special treatment: a Component."),(0,r.mdx)("p",null,"While you could just match against child components via normal equality (there is support for this), it is not particularly helpful. Rarely is it known what exact instance of a component is passed down to the props and you'll face many of the same problems discussed above: the props of the Component may not be known in full or perhaps you don't want to provide them all."),(0,r.mdx)("p",null,"The solution to these problems is to match matchers!"),(0,r.mdx)("p",null,"For any prop that takes a Component, the TestSpec generates a matcher that takes another matcher. This allows for ",(0,r.mdx)("strong",{parentName:"p"},"declarative matching against entire trees of components"),"."),(0,r.mdx)("p",null,"Continuing with the given example, suppose that the ",(0,r.mdx)("inlineCode",{parentName:"p"},"FeedItemComponent")," wraps the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ComplexComponent")," in a ",(0,r.mdx)("inlineCode",{parentName:"p"},"Card"),", as shown in the following code:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void testComplexTestSpecProps() {\n  final ComponentContext c = mLithoViewRule.getContext();\n  final Component<FeedItemComponent> component = makeComponent("Ricksy Business");\n\n  assertThat(c, component)\n    .has(\n      subComponentWith(\n        c, TestCard.matcher(c)\n          .content(TestComplexComponent.matcher(c)\n            .title(endsWith("Business"))\n            .build())\n          .build()));\n}\n')),(0,r.mdx)("p",null,"Notice the ",(0,r.mdx)("inlineCode",{parentName:"p"},"TestCard")," used to declare the hierarchy; the ",(0,r.mdx)("inlineCode",{parentName:"p"},"litho-testing")," package comes with TestSpecs for all standard Litho widgets."),(0,r.mdx)("h2",{id:"a-note-on-buck"},"A Note on Buck"),(0,r.mdx)("p",null,"If you use Gradle, it should 'just work' and shouldn't require any additional setup."),(0,r.mdx)("p",null,"With Buck or Blaze/Bazel, you may need some additional configuration for the annotation processing step to work."),(0,r.mdx)("p",null,"In order to save your copy-pasting boilerplate all over your project, it is recommended to keep a rule definition like this in a well-known location (such as ",(0,r.mdx)("inlineCode",{parentName:"p"},"//tools/build_defs/android/litho_testspec.bzl"),"). You would obviously have to adjust the library paths to the corresponding targets in your code base."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'"""Provides macros for working with litho testspec."""\n\ndef litho_testspec(\n  name,\n  deps=None,\n  annotation_processors=None,\n  annotation_processor_deps=None,\n  **kwargs\n):\n  """Litho testspec."""\n  deps = deps or []\n  annotation_processors = annotation_processors or []\n  annotation_processor_deps = annotation_processor_deps or []\n\n  deps.extend(\n    [\n      "//java/com/facebook/litho:litho",\n      "//third-party/android/androidx:support-v4",\n      "//libraries/components/litho-testing/src/main/java/com/facebook/litho/testing:testing",\n      "//libraries/components/litho-testing/src/main/java/com/facebook/litho/testing/assertj:assertj",\n      "//third-party/java/jsr-305:jsr-305",\n      "//third-party/java/hamcrest:hamcrest",\n      "//third-party/java/hamcrest:hamcrest-library",\n    ]\n  )\n\n  annotation_processor_deps.extend(\n    [\n      "//libraries/components/litho-processor/src/main/java/com/facebook/litho/specmodels/processor:processor-lib"\n    ]\n  )\n\n  annotation_processors.extend(\n    [\n      "com.facebook.litho.specmodels.processor.testing.ComponentsTestingProcessor",\n    ]\n  )\n\n  return android_library(\n    name,\n    deps=deps,\n    annotation_processors=annotation_processors,\n    annotation_processor_deps=annotation_processor_deps,\n    **kwargs\n  )\n')),(0,r.mdx)("p",null,"In the definitions for your test suite, you can then create a separate target for your test specs:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'load("//buck_imports:litho_testspec.bzl", "litho_testspec")\n\nlitho_testspec(\n  name = "testspecs",\n  srcs = glob(["*Spec.java"]),\n  deps = [\n    "//my/library/dependencies",\n    # ...\n  ],\n)\n\nrobolectric_test(\n  name = "test",\n  srcs = glob(["*Test.java*"]),\n  deps = [\n    ":testspecs",\n    # ...\n  ]\n)\n')),(0,r.mdx)("p",null,"This ensures that test specs are processed by the dedicated ",(0,r.mdx)("inlineCode",{parentName:"p"},"ComponentsTestingProcessor"),"."),(0,r.mdx)("h2",{id:"tldr"},"TL;DR"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Step 1")," - Create a TestSpec for your LayoutSpec or MountSpec."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"@TestSpec(MyLayoutSpec.class)\npublic interface TestMyLayoutSpec {}\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Step 2")," - Use the generated test matcher in your suite."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void testComplexTestSpecAdvancedProps() {\n  final ComponentContext c = mLithoViewRule.getContext();\n  final Component<MyWrapperComponent> component = ...;\n\n  assertThat(c, component)\n    .has(\n      subComponentWith(\n        c, TestMyLayout.matcher(c)\n          .titleTextSizeRes(R.dimen.notification_subtext_size)\n          .title(containsString("Minutes"))\n          .child(TestChildComponent.matcher(c).size(greaterThan(5)).build())\n          .build()));\n}\n')))}u.isMDXComponent=!0}}]);