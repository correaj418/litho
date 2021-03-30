(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),o=n(7),r=(n(0),n(182)),a={id:"sections-testing",title:"Testing Sections"},s={unversionedId:"testing/sections-testing",id:"testing/sections-testing",isDocsHomePage:!1,title:"Testing Sections",description:"SectionsTestHelper provides helper functions to easily test the output of GroupSectionSpecs and state updates.",source:"@site/../docs/testing/sections-testing.md",slug:"/testing/sections-testing",permalink:"/docs/testing/sections-testing",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/testing/sections-testing.md",version:"current",sidebar:"mainSidebar",previous:{title:"Event Handler Testing",permalink:"/docs/testing/event-handler-testing"},next:{title:"End-to-End Tests",permalink:"/docs/testing/espresso-testing"}},c=[{value:"Testing Children",id:"testing-children",children:[]},{value:"Testing State",id:"testing-state",children:[]},{value:"Testing events",id:"testing-events",children:[]},{value:"Testing other lifecycle methods",id:"testing-other-lifecycle-methods",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/testing/sections/SectionsTestHelper.html"},"SectionsTestHelper")," provides helper functions to easily test the output of GroupSectionSpecs and state updates."),Object(r.b)("p",null,"To demonstrate the testing functionality, consider this simple group section with a a list of text and an optional image header."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'/**\n * Dummy {@link GroupSectionSpec} to illustrate how to test sections.\n */\n@GroupSectionSpec\npublic class VerySimpleGroupSectionSpec {\n\n  @OnCreateInitialState\n  protected static void onCreateInitialState(\n      SectionContext c,\n      StateValue<Integer> extra) {\n    extra.set(0);\n  }\n\n  @OnCreateChildren\n  protected static Children onCreateChildren(\n      SectionContext c,\n      @State int extra,\n      @Prop int numberOfDummy) {\n    Children.Builder builder = Children.create();\n\n    if (extra > 0) {\n      builder.child(SingleComponentSection.create(c)\n          .component(Image.create(c).drawable(new ColorDrawable()).build()));\n    }\n\n    for (int i = 0; i < numberOfDummy+extra; i++) {\n      builder.child(SingleComponentSection.create(c)\n          .component(Text.create(c).text("Lol hi " + i).build())\n          .key("key" + i)\n          .build());\n    }\n    return builder.build();\n  }\n\n  @OnDataBound\n  static void onDataBound(\n      SectionContext c,\n      @Prop int numberOfDummy,\n      @State(canUpdateLazily = true) int extra) {\n    VerySimpleGroupSection.lazyUpdateExtra(c, extra - numberOfDummy);\n  }\n\n  @OnUpdateState\n  static void onUpdateState(\n      StateValue<Integer> extra,\n      @Param int newExtra) {\n    extra.set(newExtra);\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onImageClick(\n      SectionContext c) {\n    VerySimpleGroupSection.onUpdateState(3);\n  }\n}\n')),Object(r.b)("h2",{id:"testing-children"},"Testing Children"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"SectionComponentTestHelper")," helps you test a group section spec's ",Object(r.b)("inlineCode",{parentName:"p"},"@OnCreateChildren")," method by returning\nthe children of a section as a list of ",Object(r.b)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/testing/sections/SubSection.html"},"SubSection"),". SubSections can either be matched by exact props or by section class.  These are best used as existence checks."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'\n  @Test\n  public void testInitialChildren() throws Exception {\n\n    Section s = mTester.prepare(\n        VerySimpleGroupSection.create(mTester.getContext()).numberOfDummy(4).build());\n\n    List<SubSection> subSections = mTester.getChildren(s);\n\n    assertThat(subSections)\n        .isEqualTo(\n            ImmutableList.of(\n                SubSection.of(\n                    SingleComponentSection.create(mTester.getContext())\n                        .key("key0")\n                        .component(Text.create(mTester.getContext()).text("Lol hi 0"))\n                        .build()),\n                SubSection.of(SingleComponentSection.class),\n                SubSection.of(SingleComponentSection.class),\n                SubSection.of(SingleComponentSection.class)));\n  }\n\n')),Object(r.b)("h2",{id:"testing-state"},"Testing State"),Object(r.b)("p",null,"Sometimes your section's behavior is based on both external props and internal state.  You can change state variables and test new behavior by performing state updates on the scoped context."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"\n  @Test\n  public void testStateUpdate() throws Exception {\n\n    Section s = mTester.prepare(\n        VerySimpleGroupSection.create(mTester.getContext()).numberOfDummy(4).build());\n\n    assertThat(mTester.getChildren(s).size()).isEqualTo(4);\n\n    VerySimpleGroupSection.onUpdateState(mTester.getScopedContext(s), 5);\n\n    assertThat(mTester.getChildren(s).size()).isGreaterThan(4);\n  }\n\n")),Object(r.b)("h2",{id:"testing-events"},"Testing events"),Object(r.b)("p",null,"Sections heavily uses the ",Object(r.b)("a",{parentName:"p",href:"/docs/mainconcepts/coordinate-state-actions/events"},"event handling system")," and ",Object(r.b)("inlineCode",{parentName:"p"},"SectionComponentTestHelper")," has helper methods to make testing events easier. Simply create an event handler using the scoped context and dispatch your event to execute the event handler."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"\n  @Test\n  public void testClickHandler() throws Exception {\n    Section s = mTester.prepare(\n        VerySimpleGroupSection.create(mTester.getContext()).numberOfDummy(4).build());\n\n\n    SectionComponentTestHelper.dispatchEvent(\n        s,\n        VerySimpleGroupSection.onImageClick(mTester.getScopedContext(s)),\n        new ClickEvent());\n\n    VerySimpleGroupSection.VerySimpleGroupSectionStateContainerImpl stateContainer =\n        mTester.getStateContainer(s);\n\n    assertThat(stateContainer.extra).isEqualTo(3);\n  }\n")),Object(r.b)("h2",{id:"testing-other-lifecycle-methods"},"Testing other lifecycle methods"),Object(r.b)("p",null,"Testing other lifecycle methods is as simple as calling the lifecycle method with the section under test and it's corresponding scoped context."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"  @Test\n  public void testDataBound() throws Exception {\n    Section<VerySimpleGroupSection> s = mTester.prepare(\n        VerySimpleGroupSection.create(mTester.getContext()).numberOfDummy(4).build());\n\n    s.dataBound(mTester.getScopedContext(s), s);\n\n    VerySimpleGroupSection.VerySimpleGroupSectionStateContainerImpl stateContainer =\n        mTester.getStateContainer(s);\n\n    assertThat(stateContainer.extra).isEqualTo(-4);\n  }\n")),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebook/litho/blob/master/litho-it/src/test/java/com/facebook/litho/sections/common/VerySimpleGroupSectionSpecTest.java"},"VerySimpleGroupSectionSpecTest")," for the full source of this example!  Testing for sections is still very basic so if you run into any missing functionality please ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebook/litho/issues/new"},"reach out to us")," and describe your use case."))}p.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,b=u["".concat(a,".").concat(d)]||u[d]||m[d]||r;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);