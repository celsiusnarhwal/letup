(function(e,a,i,s,c){"use strict";const u=a.findByName("ChatInput");let r;var d={onLoad(){const f=["ic_thread_normal_24px","ic_gift"].map(function(){return s.getAssetIDByName(n)});r=i.after("render",u.prototype,function(l,p){const o=c.findInReactTree(p,function(t){return"forceAnimateButtons"in t.props&&t.props.actions});o.props.actions=o.props.actions.filter(function(t){return!f.includes(t.source)})})},onUnload:r};return e.default=d,Object.defineProperty(e,"__esModule",{value:!0}),e})({},vendetta.metro,vendetta.patcher,vendetta.ui.assets,vendetta.utils);
