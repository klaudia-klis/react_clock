(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n.n(c),a=n(2),i=n(3),s=n(5),r=n(4),l=n(1),u=n.n(l),m=(n(12),n(0)),d=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={time:new Date},e.timerId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({time:new Date})}),1e3)}},{key:"componentDidUpdate",value:function(e){e.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.props.clockName)),console.info(this.state.time.toUTCString().slice(-12,-4))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.props.clockName;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:this.state.time.toUTCString().slice(-12,-4)})]})}}]),n}(u.a.Component);function h(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var k=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={hasClock:!0,clockName:"Clock-0"},e.timerId=0,e.handleMouseClick=function(t){t.preventDefault(),e.setState({hasClock:!0})},e.handleContextMenu=function(t){t.preventDefault(),e.setState({hasClock:!1})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({clockName:h()})}),3300),document.addEventListener("contextmenu",this.handleContextMenu),document.addEventListener("click",this.handleMouseClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleMouseClick),document.removeEventListener("contextmenu",this.handleContextMenu),window.clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),t&&Object(m.jsx)(d,{hasClock:t,clockName:n})]})}}]),n}(u.a.Component);o.a.render(Object(m.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2c905d70.chunk.js.map