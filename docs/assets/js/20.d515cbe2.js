(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{204:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"event"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event"}},[t._v("#")]),t._v(" Event "),s("Badge",{attrs:{text:"Abstract",type:"chariot"}})],1),t._v(" "),t._m(0),t._v(" "),s("p",[t._v("A more detailed event template along with explanations and event examples can be "),s("router-link",{attrs:{to:"./../examples/event.html"}},[t._v("found here.")])],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"table"},[s("table",[t._m(3),t._v(" "),s("tbody",[s("tr",[t._m(4),t._v(" "),s("td",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("String"),s("OutboundLink")],1)]),t._v(" "),s("td",[s("Fa-Times")],1),t._v(" "),s("td",[t._v("N/A")]),t._v(" "),s("td",[t._v("A valid Eris client event name. "),s("a",{attrs:{href:"https://abal.moe/Eris/docs/Client#event-callCreate",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reference"),s("OutboundLink")],1)])])])])]),t._v(" "),t._m(5),t._v(" "),s("div",{attrs:{id:"properties"}},[t._m(6),t._v(" "),s("property",{attrs:{"property-description":"The main Chariot.js bot client including its extended properties.","property-tail":"true","property-type":"Client","property-type-url":"./client.html"}})],1),t._v(" "),t._m(7),t._v(" "),s("div",{attrs:{id:"properties"}},[t._m(8),t._v(" "),s("Method",{attrs:{"method-description":"The main event executor running upon being triggered by its event. The event arguments passed to this method are always relative to the event it is processing. For instance the <code>ready</code> event has no args, whereas the <code>messageUpdate</code> event gets passed <code>message, oldMessage</code>. <a target='_blank' href='https://abal.moe/Eris/docs/Client#event-callCreate'>Click here</a> for a full event method argument reference."}}),t._v(" "),s("div",{staticClass:"table-methods"},[s("table",[t._m(9),t._v(" "),s("tbody",[s("tr",[t._m(10),t._v(" "),t._m(11),t._v(" "),s("td",[s("Fa-Question")],1),t._v(" "),s("td",[t._v("N/A")]),t._v(" "),s("td",[t._v("The event arguments passed to this method relative to its event.")])])])]),t._v(" "),s("ReturnValue",{attrs:{"return-type":"Promise<void>","return-type-url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise","return-help":"This method resolves with an empty Promise upon successful completion.",tail:"true"}}),t._v(" "),s("CodeExample"),t._v(" "),t._m(12)],1)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Abstract base class for all Chariot.js events. Every event created "),e("strong",[this._v("must")]),this._v(" extend this class, otherwise Chariot.js won't register the event upon initialization. This class should "),e("strong",[this._v("never")]),this._v(" be instantiated "),e("em",[this._v("as-is")]),this._v(" without being extended!")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"constructor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[this._v("#")]),this._v(" Constructor")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Instantiation: "),e("strong",[this._v("In event subclass via "),e("code",[this._v("super(eventName);")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Optional")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",[t._v("Description")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("eventName")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[this._v("#")]),this._v(" Properties")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"client"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[this._v("#")]),this._v(" client")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"execute-eventargs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#execute-eventargs"}},[this._v("#")]),this._v(" execute(...eventArgs)")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Optional")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",[t._v("Description")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("...eventArgs")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("a",{attrs:{href:"#"}},[this._v("Any?")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* Given the event handler has been initialized with "messageReactionAdd" */')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" emoji"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("author"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" added a reaction with the ID ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("emoji"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);