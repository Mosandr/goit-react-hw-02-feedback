(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,n){t.exports={Container:"Container_Container__1fCKY"}},11:function(t,e,n){t.exports={Section:"Section_Section__E0syO"}},12:function(t,e,n){t.exports={Notification:"Notification_Notification__2TyIC"}},2:function(t,e,n){t.exports={FeedbackOptions:"FeedbackOptions_FeedbackOptions__C-_-r",Button:"FeedbackOptions_Button__1zwIP",neutral:"FeedbackOptions_neutral__MKl3m",bad:"FeedbackOptions_bad__3MPe2"}},21:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(6),o=n.n(i),s=(n(19),n(7)),r=n(8),b=n(9),d=n(14),u=n(13),l=n(10),j=n.n(l),f=n(0),O=function(t){var e=t.children;return Object(f.jsx)("div",{className:j.a.Container,children:e})},_=n(11),h=n.n(_),k=function(t){var e=t.title,n=t.children;return Object(f.jsxs)("section",{children:[Object(f.jsx)("h3",{className:h.a.Section,children:e}),n]})},p=n(2),v=n.n(p),x=n(5),F=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(f.jsx)("div",{className:v.a.FeedbackOptions,children:e.map((function(t){return Object(f.jsx)("button",{onClick:n,type:"button",className:x(v.a.Button,v.a[t]),children:t},t)}))})},g=n(12),m=n.n(g),S=function(t){var e=t.message;return Object(f.jsx)("p",{className:m.a.Notification,children:e})},C=n(4),N=n.n(C),P=n(5),y=function(t){var e=t.feedback,n=t.total,c=t.positivePercentage;return Object(f.jsxs)("div",{className:N.a.Statistics,children:[e.map((function(t){return Object(f.jsxs)("p",{className:P(N.a[t[0]]),children:[t[0]," : ",t[1]]},t[0])})),Object(f.jsxs)("p",{children:["Total: ",n]}),Object(f.jsxs)("p",{children:["Positive feedback: ",c,"%"]})]})},w=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.onFeedbackClick=function(e){var n=e.target.textContent.toLowerCase();t.setState((function(t){return Object(s.a)({},n,t[n]+1)}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.countPositiveFeedbackPercentage=function(){return 0===t.countTotalFeedback()?0:Math.round(100*t.state.good/t.countTotalFeedback())},t}return Object(b.a)(n,[{key:"render",value:function(){var t=Object.keys(this.state);return Object(f.jsxs)(O,{children:[Object(f.jsx)(k,{title:"Please leave feedback",children:Object(f.jsx)(F,{options:t,onLeaveFeedback:this.onFeedbackClick})}),Object(f.jsx)(k,{title:"Statistics",children:0===this.countTotalFeedback()?Object(f.jsx)(S,{message:"No feedback given"}):Object(f.jsx)(y,{feedback:Object.entries(this.state),total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(c.Component);o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={Statistics:"Statistics_Statistics__2enLV",good:"Statistics_good__2Q14E",neutral:"Statistics_neutral__iN9UY",bad:"Statistics_bad__3JRAq"}}},[[21,1,2]]]);
//# sourceMappingURL=main.6b6d558c.chunk.js.map