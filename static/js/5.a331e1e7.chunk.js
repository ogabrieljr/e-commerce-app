(this["webpackJsonpe-commerce-crw"]=this["webpackJsonpe-commerce-crw"]||[]).push([[5],{103:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(16),i=n(26),l=(n(93),n(25));var s=Object(r.b)(null,(function(e){return{clearItem:function(t){return e(Object(l.c)(t))},addItem:function(t){return e(Object(l.a)(t))},removeItem:function(t){return e(Object(l.d)(t))}}}))((function(e){var t=e.item,n=e.clearItem,o=e.addItem,r=e.removeItem,i=t.name,l=t.imageUrl,s=t.price,c=t.quantity;return a.a.createElement("div",{className:"checkout-item"},a.a.createElement("div",{className:"image-container"},a.a.createElement("img",{src:l,alt:"item"})),a.a.createElement("span",{className:"name"},i),a.a.createElement("span",{className:"quantity"},a.a.createElement("div",{className:"arrow",onClick:function(){return r(t)}},"\u276e"),a.a.createElement("span",{className:"value"},c),a.a.createElement("div",{className:"arrow",onClick:function(){return o(t)}},"\u276f")),a.a.createElement("span",{className:"price"},"$",s),a.a.createElement("div",{className:"remove-button",onClick:function(){return n(t)}},"\u2715"))})),c=(n(94),n(18)),u=n(95),d=n.n(u);function p(e){var t=e.totalPrice;return a.a.createElement(a.a.Fragment,null,a.a.createElement(d.a,{token:function(e){console.log(e)},name:"Crown",description:"Total: $".concat(t),stripeKey:"pk_test_orFeQiHoizVs9ecOr3HVhmQk0072NJr84l",billingAddress:!0,shippingAddress:!0,amount:100*t,currency:"USD"}))}var f=Object(c.b)({getItems:i.b,totalPrice:i.d});t.default=Object(r.b)(f)((function(e){var t=e.getItems,n=e.totalPrice;return a.a.createElement("div",{className:"checkout-page"},a.a.createElement("div",{className:"checkout-header"},a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Product")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Description")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Quantity")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Price")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Remove"))),t.map((function(e){return a.a.createElement(s,{key:e.id,item:e})})),a.a.createElement("div",{className:"total"},"TOTAL: $",n),a.a.createElement(p,{totalPrice:n}))}))},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=l(n(0)),i=l(n(11));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!1,u=!1,d=!1,p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onScriptLoaded=function(){t.stripeHandler||(t.stripeHandler=StripeCheckout.configure({key:n.props.stripeKey}),n.hasPendingClick&&n.showStripeDialog())},n.onScriptError=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];n.hideLoadingDialog(),n.props.onScriptError&&n.props.onScriptError.apply(n,t)},n.onClosed=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];n._isMounted&&n.setState({open:!1}),n.props.closed&&n.props.closed.apply(n,t)},n.onOpened=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];n.setState({open:!0}),n.props.opened&&n.props.opened.apply(n,t)},n.getConfig=function(){return["token","image","name","description","amount","locale","currency","panelLabel","zipCode","shippingAddress","billingAddress","email","allowRememberMe","bitcoin","alipay","alipayReusable"].reduce((function(e,t){return o({},e,n.props.hasOwnProperty(t)&&s({},t,n.props[t]))}),{opened:n.onOpened,closed:n.onClosed})},n.onClick=function(){if(!n.props.disabled)if(d)try{throw new Error("Tried to call onClick, but StripeCheckout failed to load")}catch(e){}else t.stripeHandler?n.showStripeDialog():(n.showLoadingDialog(),n.hasPendingClick=!0)},n.handleOnMouseDown=function(){n.setState({buttonActive:!0})},n.handleOnMouseUp=function(){n.setState({buttonActive:!1})},n.state={open:!1,buttonActive:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this;if(this._isMounted=!0,!u&&!c){c=!0;var t=document.createElement("script");"function"===typeof this.props.onScriptTagCreated&&this.props.onScriptTagCreated(t),t.src="https://checkout.stripe.com/checkout.js",t.async=1,this.loadPromise=function(){var n=!1,o=new Promise((function(n,o){t.onload=function(){u=!0,c=!1,n(),e.onScriptLoaded()},t.onerror=function(t){d=!0,c=!1,o(t),e.onScriptError(t)}}));return{promise:new Promise((function(e,t){o.then((function(){return n?t({isCanceled:!0}):e()})),o.catch((function(e){return t(n?{isCanceled:!0}:e)}))})),cancel:function(){n=!0}}}(),this.loadPromise.promise.then(this.onScriptLoaded).catch(this.onScriptError),document.body.appendChild(t)}}},{key:"componentDidUpdate",value:function(){c||this.updateStripeHandler()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.loadPromise&&this.loadPromise.cancel(),t.stripeHandler&&this.state.open&&t.stripeHandler.close()}},{key:"updateStripeHandler",value:function(){t.stripeHandler&&!this.props.reconfigureOnUpdate||(t.stripeHandler=StripeCheckout.configure({key:this.props.stripeKey}))}},{key:"showLoadingDialog",value:function(){if(this.props.showLoadingDialog){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.props.showLoadingDialog.apply(this,t)}}},{key:"hideLoadingDialog",value:function(){if(this.props.hideLoadingDialog){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.props.hideLoadingDialog.apply(this,t)}}},{key:"showStripeDialog",value:function(){this.hideLoadingDialog(),t.stripeHandler.open(this.getConfig())}},{key:"renderDefaultStripeButton",value:function(){return r.default.createElement("button",o({},s({},this.props.triggerEvent,this.onClick),{className:this.props.className,onMouseDown:this.handleOnMouseDown,onFocus:this.handleOnMouseDown,onMouseUp:this.handleOnMouseUp,onMouseOut:this.handleOnMouseUp,onBlur:this.handleOnMouseUp,style:o({},{overflow:"hidden",display:"inline-block",background:"linear-gradient(#28a0e5,#015e94)",border:0,padding:1,textDecoration:"none",borderRadius:5,boxShadow:"0 1px 0 rgba(0,0,0,0.2)",cursor:"pointer",visibility:"visible",userSelect:"none"},this.state.buttonActive&&{background:"#005d93"},this.props.style)}),r.default.createElement("span",{style:o({},{backgroundImage:"linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",color:"#fff",fontWeight:"bold",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",textShadow:"0 -1px 0 rgba(0,0,0,0.25)",borderRadius:4},this.state.buttonActive&&{color:"#eee",boxShadow:"inset 0 1px 0 rgba(0,0,0,0.1)",backgroundImage:"linear-gradient(#008cdd,#008cdd 85%,#239adf)"},this.props.textStyle)},this.props.label))}},{key:"renderDisabledButton",value:function(){return r.default.createElement("button",{disabled:!0,style:{background:"rgba(0,0,0,0.2)",overflow:"hidden",display:"inline-block",border:0,padding:1,textDecoration:"none",borderRadius:5,userSelect:"none"}},r.default.createElement("span",{style:{boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",borderRadius:4,color:"#999",background:"#f8f9fa",textShadow:"0 1px 0 rgba(255,255,255,0.5)"}},this.props.label))}},{key:"render",value:function(){!0!==this.props.desktopShowModal||this.state.open?!1===this.props.desktopShowModal&&this.state.open&&t.stripeHandler.close():this.onClick();var e=this.props.ComponentClass;return this.props.children?r.default.createElement(e,o({},s({},this.props.triggerEvent,this.onClick),{children:this.props.children})):this.props.disabled?this.renderDisabledButton():this.renderDefaultStripeButton()}}]),t}(r.default.Component);p.defaultProps={className:"StripeCheckout",label:"Pay With Card",locale:"auto",ComponentClass:"span",reconfigureOnUpdate:!1,triggerEvent:"onClick"},p.propTypes={desktopShowModal:i.default.bool,triggerEvent:i.default.oneOf(["onClick","onTouchTap","onTouchStart"]),label:i.default.string,style:i.default.object,textStyle:i.default.object,disabled:i.default.bool,ComponentClass:i.default.string,showLoadingDialog:i.default.func,hideLoadingDialog:i.default.func,onScriptError:i.default.func,onScriptTagCreated:i.default.func,reconfigureOnUpdate:i.default.bool,stripeKey:i.default.string.isRequired,token:i.default.func.isRequired,name:i.default.string,description:i.default.string,image:i.default.string,amount:i.default.number,locale:i.default.oneOf(["auto","zh","da","nl","en","fr","de","it","ja","no","es","sv"]),currency:i.default.oneOf(["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BIF","BMD","BND","BOB","BRL","BSD","BWP","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ETB","EUR","FJD","FKP","GBP","GEL","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","ISK","JMD","JPY","KES","KGS","KHR","KMF","KRW","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","MAD","MDL","MGA","MKD","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SZL","THB","TJS","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMW"]),panelLabel:i.default.string,zipCode:i.default.bool,billingAddress:i.default.bool,shippingAddress:i.default.bool,email:i.default.string,allowRememberMe:i.default.bool,bitcoin:i.default.bool,alipay:i.default.oneOf(["auto",!0,!1]),alipayReusable:i.default.bool,opened:i.default.func,closed:i.default.func},p._isMounted=!1,t.default=p}}]);
//# sourceMappingURL=5.a331e1e7.chunk.js.map