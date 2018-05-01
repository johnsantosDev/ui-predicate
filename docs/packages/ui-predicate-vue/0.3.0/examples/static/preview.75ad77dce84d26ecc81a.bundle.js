(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1336:function(e,t,r){"use strict";var o,n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],o=!0,n=!1,i=void 0;try{for(var a,d=e[Symbol.iterator]();!(o=(a=d.next()).done)&&(r.push(a.value),!t||r.length!==t);o=!0);}catch(e){n=!0,i=e}finally{try{!o&&d.return&&d.return()}finally{if(n)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=r(138),a=(o=i)&&o.__esModule?o:{default:o};function d(e){return a.default.component(e+"-argument",{methods:{_onChange:function(e){var t=e.target.value;this.$emit("change",t)}},props:{value:{type:null,required:!0}},template:'<div><input type="'+e+'" @change="_onChange" :value="value"></div>'})}e.exports={DEFAULT_CONFIG:{operators:[{operator_id:"is",label:"is",argumentType_id:"smallString"},{operator_id:"contains",label:"Contains",argumentType_id:"smallString"},{operator_id:"isLowerThan",label:"<",argumentType_id:"number"},{operator_id:"isEqualTo",label:"=",argumentType_id:"number"},{operator_id:"isHigherThan",label:">",argumentType_id:"number"},{operator_id:"is_date",label:"is",argumentType_id:"datepicker"},{operator_id:"isBetween_date",label:"is between",argumentType_id:"daterangepicker"},{operator_id:"isBrighterThan",label:"is brighter than",argumentType_id:"colorpicker"},{operator_id:"isDarkerThan",label:"is darker than",argumentType_id:"colorpicker"},{operator_id:"is_color",label:"is",argumentType_id:"colorpicker"}],types:[{type_id:"int",operator_ids:["isLowerThan","isEqualTo","isHigherThan"]},{type_id:"string",operator_ids:["is","contains"]},{type_id:"datetime",operator_ids:["is_date","isBetween_date"]},{type_id:"color",operator_ids:["isBrighterThan","isDarkerThan","is_color"]}],targets:[{target_id:"article.title",label:"Article title",type_id:"string"},{target_id:"article.videoCount",label:"Article video count",type_id:"int"},{target_id:"article.publishingAt",label:"Article publish date",type_id:"datetime"},{target_id:"article.color",label:"Article main color",type_id:"color"}],logicalTypes:[{logicalType_id:"any",label:"Any"},{logicalType_id:"all",label:"All"},{logicalType_id:"none",label:"None"}],argumentTypes:[{argumentType_id:"datepicker",component:d("date")},{argumentType_id:"colorpicker",component:d("color")},{argumentType_id:"daterangepicker",component:a.default.component("daterangepicker-argument",{props:{value:{type:null,required:!0}},data:function(){return this._fromValue(this.value)},methods:{_fromValue:function(e){var t=Array.isArray(e)?e:[],r=n(t,2);return{start:r[0],end:r[1]}},_toValue:function(){return[this.start,this.end]},_updated:function(){this.$emit("change",this._toValue())},_onStartChange:function(e){var t=e.target.value;this.start=t,this._updated()},_onEndChange:function(e){var t=e.target.value;this.end=t,this._updated()}},template:'<div style="display: flex;width: 260px;">\n          <input type="date" @change="_onStartChange" :value="start">\n          <span>and</span>\n          <input type="date" @change="_onEndChange" :value="end"></div>'})},{argumentType_id:"smallString",component:d("text")},{argumentType_id:"number",component:d("number")}]},DATASETS:{simple:{logicalType_id:"all",predicates:[{target_id:"article.videoCount",operator_id:"isHigherThan",argument:10}]},advanced:{logicalType_id:"all",predicates:[{target_id:"article.title",operator_id:"contains",argument:"paradise"},{target_id:"article.videoCount",operator_id:"isHigherThan",argument:2},{logicalType_id:"none",predicates:[{target_id:"article.publishingAt",operator_id:"isBetween_date",argument:["2017-10-05","2018-10-05"]},{target_id:"article.publishingAt",operator_id:"isBetween_date",argument:["2010-10-05","2011-10-05"]},{target_id:"article.color",operator_id:"is_color",argument:"#e20400"},{target_id:"article.color",operator_id:"isDarkerThan",argument:"#783d3e"}]}]}}}},1354:function(e,t,r){"use strict";(function(e){c(r(138));var t=r(685),o=r(137),n=c(r(1353)),i=c(r(1351)),a=r(1348),d=r(1346),s=r(1336);function c(e){return e&&e.__esModule?e:{default:e}}var u=r(134).withStorySource;(0,t.storiesOf)("ui-predicate",e).addDecorator(u("import Vue from 'vue';\nimport { storiesOf } from '@storybook/vue';\n\nimport { action, actions } from '@storybook/addon-actions';\nimport backgrounds from '@storybook/addon-backgrounds/vue';\nimport Centered from '@storybook/addon-centered';\nimport { withNotes } from '@storybook/addon-notes';\n\nimport { array, boolean, button, color, date, number, select, text, withKnobs } from '@storybook/addon-knobs/vue';\n\nimport { DEFAULT_CONFIG, DATASETS } from './__fixtures__';\n\nstoriesOf('ui-predicate', module)\n  .addDecorator(Centered)\n  .addDecorator(withKnobs)\n  .addDecorator(withNotes)\n  .addDecorator(\n    backgrounds([\n      {\n        name: 'gray',\n        value: 'whitesmoke',\n        default: true,\n      },\n      {\n        name: 'twitter',\n        value: '#00aced',\n      },\n      {\n        name: 'facebook',\n        value: '#3b5998',\n      },\n    ])\n  )\n  .add(\n    'minimal configuration',\n    () => {\n      return {\n        template: '<ui-predicate :config=\"config\"></ui-predicate>',\n        data() {\n          return { config: DEFAULT_CONFIG };\n        },\n      };\n    },\n    {\n      notes: {\n        markdown: `\n      ## minimal configuration\n\n      \\`<ui-predicate/>\\` only requires a \\`config\\` object.\n      That's how you will pass your \\`targets\\`,\\`operators\\` , \\`types\\` and \\`logicalTypes\\`.\n\n    `,\n      },\n    }\n  )\n  .add(\n    'events',\n    () => ({\n      template: '<ui-predicate :config=\"config\" :data=\"data\" @changed=\"onChange\" @initialized=\"onInit\"></ui-predicate>',\n      data() {\n        return {\n          config: DEFAULT_CONFIG,\n          data: DATASETS.advanced,\n        };\n      },\n      methods: {\n        onChange: action('`changed` event'),\n        onInit: action('`initialized` event'),\n      },\n    }),\n    { notes: '' }\n  )\n  .add(\n    'load/dump data',\n    () => {\n      const options = {\n        simple: 'Simple',\n        advanced: 'Advanced',\n      };\n\n      const selection = select('Example', options, 'advanced');\n\n      return {\n        template: `<div class=\"columns\" style=\"display:flex;width: 80vw;height:90vh\">\n          <div style=\"flex-direction:row;width:60vw\"><ui-predicate :config=\"config\" :data=\"data\" @changed=\"onChange\" @initialized=\"onChange\"></ui-predicate></div>\n          <div style=\"flex-direction:row;width:20vw\"><textarea style=\"width:100%;height:100%\">{{ serialized }}</textarea></div>\n        </div>`,\n        data() {\n          return {\n            config: DEFAULT_CONFIG,\n            serialized: '',\n            data: DATASETS[selection],\n          };\n        },\n        methods: {\n          onChange(ctrl) {\n            this.serialized = ctrl.toJSON();\n          },\n        },\n      };\n    },\n    { notes: '' }\n  );\n",{"ui-predicate@load/dump data":{startLoc:{col:4,line:74},endLoc:{col:17,line:102}},"ui-predicate@events":{startLoc:{col:4,line:57},endLoc:{col:17,line:71}},"ui-predicate@minimal configuration":{startLoc:{col:4,line:35},endLoc:{col:5,line:54}}})).addDecorator(i.default).addDecorator(d.withKnobs).addDecorator(a.withNotes).addDecorator((0,n.default)([{name:"gray",value:"whitesmoke",default:!0},{name:"twitter",value:"#00aced"},{name:"facebook",value:"#3b5998"}])).add("minimal configuration",function(){return{template:'<ui-predicate :config="config"></ui-predicate>',data:function(){return{config:s.DEFAULT_CONFIG}}}},{notes:{markdown:"\n      ## minimal configuration\n\n      `<ui-predicate/>` only requires a `config` object.\n      That's how you will pass your `targets`,`operators` , `types` and `logicalTypes`.\n\n    "}}).add("events",function(){return{template:'<ui-predicate :config="config" :data="data" @changed="onChange" @initialized="onInit"></ui-predicate>',data:function(){return{config:s.DEFAULT_CONFIG,data:s.DATASETS.advanced}},methods:{onChange:(0,o.action)("`changed` event"),onInit:(0,o.action)("`initialized` event")}}},{notes:""}).add("load/dump data",function(){var e=(0,d.select)("Example",{simple:"Simple",advanced:"Advanced"},"advanced");return{template:'<div class="columns" style="display:flex;width: 80vw;height:90vh">\n          <div style="flex-direction:row;width:60vw"><ui-predicate :config="config" :data="data" @changed="onChange" @initialized="onChange"></ui-predicate></div>\n          <div style="flex-direction:row;width:20vw"><textarea style="width:100%;height:100%">{{ serialized }}</textarea></div>\n        </div>',data:function(){return{config:s.DEFAULT_CONFIG,serialized:"",data:s.DATASETS[e]}},methods:{onChange:function(e){this.serialized=e.toJSON()}}}},{notes:""})}).call(this,r(90)(e))},1355:function(e,t,r){var o={"./ui-predicate.stories.js":1354};function n(e){var t=i(e);return r(t)}function i(e){var t=o[e];if(!(t+1)){var r=new Error('Cannot find module "'+e+'".');throw r.code="MODULE_NOT_FOUND",r}return t}n.keys=function(){return Object.keys(o)},n.resolve=i,e.exports=n,n.id=1355},1356:function(e){e.exports={name:"ui-predicate-vue",version:"0.3.0",description:"Finally a predicate UI component for VueJS",main:"src/index.js",scripts:{"examples:build":"npm run --silent storybook:build","examples:build:watch":"npm run --silent storybook:dev",test:"echo 'not ready for prime-time';true","test:":"jest","test:debugger":"node --inspect-brk node_modules/.bin/jest --watch","test:watch":"jest --watch --coverage=false","test:watch:coverage":"npm run --silent test:watch -- --coverage","test:coverage":"true",dev:"parcel --no-cache examples/index.html","storybook:build":"build-storybook --output-dir ../../docs/packages/$npm_package_name/$npm_package_version/examples","storybook:watch":"start-storybook -p 9001","image-snapshots":"npm run storybook:build && npm run image-snapshots:run","image-snapshots:run":"jest --projects=./image-snapshots",lint:"eslint --fix examples src",docs:"jsdoc -c ../../jsdoc.json","docs:private":"jsdoc -c ../../jsdoc.json -p"},author:"Francois-Guillaume Ribreau <npm@fgribreau.com> (http://fgribreau.com/)",license:"MIT",devDependencies:{"@storybook/addon-actions":"4.0.0-alpha.4","@storybook/addon-backgrounds":"4.0.0-alpha.4","@storybook/addon-centered":"4.0.0-alpha.4","@storybook/addon-jest":"4.0.0-alpha.4","@storybook/addon-knobs":"4.0.0-alpha.4","@storybook/addon-links":"4.0.0-alpha.4","@storybook/addon-notes":"4.0.0-alpha.4","@storybook/addon-options":"4.0.0-alpha.4","@storybook/addon-storyshots":"4.0.0-alpha.4","@storybook/addon-storysource":"4.0.0-alpha.4","@storybook/addon-viewport":"4.0.0-alpha.4","@storybook/addons":"4.0.0-alpha.4","@storybook/vue":"4.0.0-alpha.4","@vue/component-compiler-utils":"^1.2.1","@vue/test-utils":"^1.0.0-beta.15","babel-core":"^6.26.0","babel-loader":"^7.1.4","babel-preset-env":"^1.6.0","babel-preset-vue":"^2.0.2","cross-env":"^5.1.4",eslint:"^4.19.1","eslint-plugin-vue":"^4.5.0","file-loader":"^1.1.11",jest:"^22.4.3","jest-serializer-vue":"^1.0.0","jest-vue-preprocessor":"^1.4.0",jsdoc:"^3.5.5","parcel-bundler":"^1.7.1",react:"^16.3.2","react-dom":"^16.3.2","svg-url-loader":"^2.3.2","ui-predicate-core":"^0.3.0","vue-jest":"^2.5.0","vue-loader":"^14.2.2","vue-template-compiler":"^2.5.16",webpack:"^4.6.0","webpack-dev-server":"^3.1.3"},dependencies:{ramda:"^0.25.0",vue:"^2.5.16"}}},1358:function(e,t,r){const{merge:o,find:n,curry:i,prop:a,tap:d,pipe:s,filter:c,map:u,over:p,lens:l,lensPath:m,takeLast:g,clone:f,keys:h,startsWith:y,set:v,differenceWith:_,partition:T,lensProp:P,insert:b}=r(92),C=r(1357),{EventEmitter:A}=r(215);function w(e){return C.fromNullable(e[0]).value()}e.exports=function({dataclasses:e,invariants:t,errors:r,rules:a}){const{CompoundPredicate:d,ComparisonPredicate:p,Predicate:l,Target:m,LogicalType:f}=e,h=(e,r)=>t.Target_idMustReferToADefinedTarget(n(e=>e.target_id==r,e)),y=(e,r)=>t.LogicalType_idMustReferToADefinedLogicalType(n(e=>e.logicalType_id==r,e)),v=(e,r)=>t.Operator_idMustReferToADefinedOperator(n(e=>e.operator_id==r,e)),_=i((e,t)=>s(c(({operator_id:e})=>t.includes(e)))(e)),T=i((e,t)=>(t.$operators=_(e.operators,t.operator_ids),t)),P=i((e,r)=>{const o=((e,t)=>C.fromNullable(n(e=>e.type_id==t,e)))(e.types,r.type_id);return t.TargetMustReferToADefinedType(o,r).then(e=>(r.$type=e,r))}),O=(e,t)=>s(e,(e=>(function(t){return t.then(t=>(e(),t))}))(t)),k=t=>{t.operators=u(e.Operator,t.operators),t.logicalTypes=u(e.LogicalType,t.logicalTypes),t.argumentTypes=u(e.ArgumentType,t.argumentTypes||[]);const r=s(e.Type,T(t));t.types=u(r,t.types);const o=s(e.Target,P(t));return Promise.all(u(o,t.targets)).then(e=>(t.targets=e,t))};function S(n){const{columns:i,data:c,options:u}=n;return new Promise(function(t,r){try{e._requireProps(i,"operators,logicalTypes,types,targets")}catch(e){return r(e)}t()}).then(()=>k(i)).then(e=>{let n,i;const f=new A,_=o(S.defaults.options,u);const T=s(function(){const e=!a.predicateToRemoveIsTheLastComparisonPredicate(n,d,p);d.forEach(n,function(t){t.$canBeRemoved=e&&!a.predicateToRemoveIsRootPredicate(n,t)})},function(){f.emit("changed",i)});function P(e){return t.RootPredicateMustBeACompoundPredicate(e,d).then(()=>{n=e})}function k({where:o,how:n="after",type:i}){return Promise.resolve().then(()=>t.AddOnlySupportsAfter(n)).then(()=>t.PredicateTypeMustBeValid(i,l.Types)).then(()=>_[`getDefault${i}`](e,_)).then(e=>{const t=p.is(o);if(t||d.is(o)){if(t){const t=R(o),[r,[n,i]]=g(2,t);r.predicates=b(i+1,e,r.predicates)}else o.predicates.unshift(e);return e}return Promise.reject(new r.CannotAddSomethingElseThanACompoundPredicateOrAComparisonPredicate)})}function D(e){return Promise.resolve().then(()=>t.RemovePredicateMustDifferFromRootPredicate(n,e)).then(()=>t.RemovePredicateCannotBeTheLastComparisonPredicate(n,e,d,p)).then(()=>{if(d.is(e)||p.is(e)){const t=R(e),[r,[o,n]]=g(2,t);return r.predicates.splice(n,1),0===r.predicates.length?D(r):e}return Promise.reject(new r.CannotRemoveSomethingElseThanACompoundPredicateOrAComparisonPredicate)})}function M(r,o){return t.PredicateMustBeACompoundPredicate(r,d).then(()=>y(e.logicalTypes,o)).then(e=>{r.logic=e})}function I(r,o){return t.PredicateMustBeAComparisonPredicate(r,p).then(()=>h(e.targets,o)).then(e=>(r.target=e,L(r,w(r.target.$type.$operators).operator_id)))}function L(e,r){return Promise.resolve().then(()=>t.Operator_idMustReferToADefinedOperator(e.target.$type.$operators.find(e=>e.operator_id===r))).then(t=>{e.operator=t,e.argument=null})}function j(e,t){return Promise.resolve().then(()=>{e.argument=t})}function x(t){return C.fromNullable(e.argumentTypes.find(e=>e.argumentType_id===t)).map(e=>e.component).valueOrElse(()=>_.getDefaultArgumentComponent(e,_))}function R(e){return d.reduce(n,(t,r,o)=>e===r?o:t,null)}function N(){return l.toJSON(n)}function E(e,t){f.on(e,t)}function $(e,t){f.once(e,t)}function B(e,t){e?t?f.removeListener(e,t):f.removeAllListeners(e):f.removeAllListeners()}return(c?(m=c,l.fromJSON(m,{getTargetById:t=>h(e.targets,t),getLogicalTypeById:t=>y(e.logicalTypes,t),getOperatorById:t=>v(e.operators,t)})):_.getDefaultData(e,_)).then(O(P,T)).then(()=>i={on:E,once:$,off:B,setData:O(P,T),add:O(k,T),remove:O(D,T),setPredicateTarget_id:O(I,T),setPredicateOperator_id:O(L,T),setPredicateLogicalType_id:O(M,T),setArgumentValue:O(j,T),getArgumentTypeComponentById:x,toJSON:N,get root(){return n},get columns(){return e},get options(){return _}})});var m}return S.defaults={options:{getDefaultData:(e,t)=>t.getDefaultComparisonPredicate(e,t).then(r=>t.getDefaultCompoundPredicate(e,t,[r])),getDefaultCompoundPredicate:(e,t,r)=>(Array.isArray(r)&&0!==r.length?Promise.resolve(r):t.getDefaultComparisonPredicate(e,t).then(e=>[e])).then(r=>t.getDefaultLogicalType(r,e,t).then(e=>d(e,r))),getDefaultComparisonPredicate(e,t){const r=w(e.targets);return p(r,w(r.$type.$operators))},getDefaultLogicalType:(e,t,r)=>Promise.resolve(w(t.logicalTypes)),getDefaultArgumentComponent(e,t){throw new r.UIFrameworkMustImplementgetDefaultArgumentComponent("UIFrameworkMustImplementgetDefaultArgumentComponent")}}},S}},1359:function(e,t,r){const{merge:o,mergeAll:n}=r(92),i=r(678);e.exports=(({invariants:e,errors:t})=>{const{Target:a,Operator:d,LogicalType:s}=r(679);function c(t){return e.PredicateTypeMustBeValid(t.$name,c.Types).then(()=>o(i(t.$name),{$canBeRemoved:!0}))}function u(e,t,r=null){return c(u).then(n=>o(n,{target:e,operator:t,argument:r}))}function p(t,r){return e.CompoundPredicateMustHaveAtLeastOneSubPredicate(r,p).then(()=>c(p)).then(e=>o(e,{logic:t,predicates:r}))}return c.toJSON=function(e){return u.is(e)?u.toJSON(e):p.toJSON(e)},c.fromJSON=function(e,r){return u.isFromJSON(e)?u.fromJSON(e,r):p.isFromJSON(e)?p.fromJSON(e,r):Promise.reject(new t.UnknownJSONData)},c.Types={ComparisonPredicate:"ComparisonPredicate",CompoundPredicate:"CompoundPredicate"},u.$name=c.Types.ComparisonPredicate,u.toJSON=function(e){return n([a.toJSON(e.target),d.toJSON(e.operator),{argument:e.argument}])},u.fromJSON=function(e,t){return Promise.all([t.getTargetById(e.target_id),t.getOperatorById(e.operator_id)]).then(([t,r])=>u(t,r,e.argument))},u.is=(e=>e&&e.$_type===c.Types.ComparisonPredicate),u.isFromJSON=(e=>e&&e.target_id),p.$name=c.Types.CompoundPredicate,p.toJSON=function(e){return n([s.toJSON(e.logic),{predicates:e.predicates.map(c.toJSON)}])},p.fromJSON=function(t,r){return e.CompoundPredicateMustHaveAtLeastOneSubPredicate(t.predicates,p).then(()=>r.getLogicalTypeById(t.logicalType_id)).then(e=>Promise.all(t.predicates.map(e=>c.fromJSON(e,r))).then(t=>p(e,t)))},p.reduce=function(e,t,r,o=[]){return r=t(r,e,o),e.predicates.reduce((r,n,i)=>{const a=o.concat([e,[n,i]]);return p.is(n)?p.reduce(n,t,r,a):t(r,n,a)},r)},p.forEach=((e,t)=>{p.reduce(e,(e,r,o)=>{t(r)},null)}),p.is=(e=>e&&e.$_type===c.Types.CompoundPredicate),p.isFromJSON=(e=>e&&e.logicalType_id),{Predicate:c,ComparisonPredicate:u,CompoundPredicate:p}})},1360:function(e,t,r){const{merge:o}=r(92);e.exports=(e=>o(r(679),r(1359)(e)))},1361:function(e,t,r){const{is:o}=r(92);e.exports=(({errors:e,rules:t})=>({CompoundPredicateMustHaveAtLeastOneSubPredicate:t=>Array.isArray(t)&&0!==t.length?Promise.resolve():Promise.reject(new e.CompoundPredicateMustHaveAtLeastOneSubPredicate),PredicateTypeMustBeValid:(t,r)=>Object.keys(r).includes(t)?Promise.resolve():Promise.reject(new e.InvalidPredicateType),RootPredicateMustBeACompoundPredicate:(t,r)=>r.is(t)?Promise.resolve(t):Promise.reject(new e.RootPredicateMustBeACompoundPredicate),PredicateMustBeAComparisonPredicate:(t,r)=>r.is(t)?Promise.resolve():Promise.reject(new e.PredicateMustBeAComparisonPredicate),PredicateMustBeACompoundPredicate:(t,r)=>r.is(t)?Promise.resolve():Promise.reject(new e.PredicateMustBeACompoundPredicate),AddOnlySupportsAfter:t=>"after"!==t?Promise.reject(new e.AddCurrentlyOnlySupportAfterInsertion):Promise.resolve(),TargetMustReferToADefinedType:(t,r)=>t.isNone()?Promise.reject(new e.TargetMustReferToADefinedType(`target ${JSON.stringify(r.target_id)} does not refer to a defined type, target.type_id=${JSON.stringify(r.type_id)}`)):Promise.resolve(t.value()),LogicalType_idMustReferToADefinedLogicalType:t=>t?Promise.resolve(t):Promise.reject(new e.LogicalType_idMustReferToADefinedLogicalType),Target_idMustReferToADefinedTarget:t=>t?Promise.resolve(t):Promise.reject(new e.Target_idMustReferToADefinedTarget),Operator_idMustReferToADefinedOperator:t=>t?Promise.resolve(t):Promise.reject(new e.Operator_idMustReferToADefinedOperator),RemovePredicateMustDifferFromRootPredicate:(r,o)=>t.predicateToRemoveIsRootPredicate(r,o)?Promise.reject(new e.ForbiddenCannotRemoveRootCompoundPredicate):Promise.resolve(o),RemovePredicateCannotBeTheLastComparisonPredicate:(r,o,n,i)=>i.is(o)&&t.predicateToRemoveIsTheLastComparisonPredicate(r,n,i)?Promise.reject(new e.ForbiddenCannotRemoveLastComparisonPredicate):Promise.resolve()}))},1362:function(e,t){e.exports={predicateToRemoveIsRootPredicate:(e,t)=>e===t,predicateToRemoveIsTheLastComparisonPredicate:(e,t,r)=>{return 1===t.reduce(e,(e,t)=>r.is(t)?e+1:e,0)}}},1368:function(e,t,r){const{mergeAll:o}=r(92),n=r(1367);function i(e){return{[e]:n(e)}}e.exports=o([i("InvalidPredicateType"),i("UnknownJSONData"),i("CompoundPredicateMustHaveAtLeastOneSubPredicate"),i("RootPredicateMustBeACompoundPredicate"),i("PredicateMustBeACompoundPredicate"),i("PredicateMustBeAComparisonPredicate"),i("AddCurrentlyOnlySupportAfterInsertion"),i("TargetMustReferToADefinedType"),i("LogicalType_idMustReferToADefinedLogicalType"),i("Target_idMustReferToADefinedTarget"),i("Operator_idMustReferToADefinedOperator"),i("Operator_idMustReferToADefinedOperator"),i("ForbiddenCannotRemoveRootCompoundPredicate"),i("ForbiddenCannotRemoveLastComparisonPredicate"),i("CannotRemoveSomethingElseThanACompoundPredicateOrAComparisonPredicate"),i("CannotAddSomethingElseThanACompoundPredicateOrAComparisonPredicate"),i("UIFrameworkMustImplementgetDefaultArgumentComponent")])},1369:function(e,t,r){const{merge:o}=r(92),n=r(1368),i=r(1362),a=r(1361)({errors:n,rules:i}),d=r(1360)({invariants:a,errors:n}),s=r(1358)({dataclasses:d,invariants:a,errors:n,rules:i});e.exports={PredicateCore:s,errors:n,invariants:a,dataclasses:d}},1370:function(e,t,r){"use strict";var o,n=r(1369),i=r(138),a=(o=i)&&o.__esModule?o:{default:o};var d=r(690).merge,s={options:{getDefaultArgumentComponent:function(e,t){return a.default.component("default-argument-component",{methods:{_onChange:function(e){var t=e.target.value;this.$emit("change",t)}},props:{value:{type:null,required:!0}},template:'<div><input type="text" @change="_onChange" :value="value"></div>'})}}};function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.data,r=e.columns,o=e.options,i=d(s.options,o);return(0,n.PredicateCore)({data:t,columns:r,options:i})}c.defaults=s,e.exports={UIPredicateCoreVue:c}},1372:function(e,t,r){(e.exports=r(1371)(!1)).push([e.i,".ui-predicate.main{display:flex}.ui-predicate--row{flex-direction:row}.ui-predicate--col{display:inline-block}",""])},1373:function(e,t,r){var o=r(1372);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,r(688).default)("dbc4eb24",o,!0,{})},1374:function(e,t,r){"use strict";r.r(t);var o=r(219),n=r.n(o);for(var i in o)"default"!==i&&function(e){r.d(t,e,function(){return o[e]})}(i);var a=r(453),d=r(91);var s=function(e){r(1373)},c=Object(d.a)(n.a,a.a,a.b,!1,s,null,null);t.default=c.exports},1375:function(e,t,r){"use strict";r.r(t);var o=r(220),n=r.n(o);for(var i in o)"default"!==i&&function(e){r.d(t,e,function(){return o[e]})}(i);var a=r(454),d=r(91),s=Object(d.a)(n.a,a.a,a.b,!1,null,null,null);t.default=s.exports},1376:function(e,t,r){"use strict";var o,n=r(138),i=(o=n)&&o.__esModule?o:{default:o};e.exports=i.default.component("ui-predicate-comparison-argument",{render:function(e){return e(this.getArgumentTypeComponentById(this.predicate.operator.argumentType_id),{props:{value:this.predicate.argument,predicate:this.predicate},on:{change:this._setArgumentValue}})},inject:["getArgumentTypeComponentById","setArgumentValue"],methods:{_setArgumentValue:function(e){this.setArgumentValue(this.predicate,e)}},props:{predicate:{type:Object,required:!0}}})},1377:function(e,t,r){"use strict";r.r(t);var o=r(221),n=r.n(o);for(var i in o)"default"!==i&&function(e){r.d(t,e,function(){return o[e]})}(i);var a=r(455),d=r(91),s=Object(d.a)(n.a,a.a,a.b,!1,null,null,null);t.default=s.exports},1378:function(e,t,r){"use strict";r.r(t);var o=r(222),n=r.n(o);for(var i in o)"default"!==i&&function(e){r.d(t,e,function(){return o[e]})}(i);var a=r(456),d=r(91),s=Object(d.a)(n.a,a.a,a.b,!1,null,null,null);t.default=s.exports},1379:function(e,t,r){"use strict";var o=r(1378),n=r(1377),i=r(1376),a=r(1375),d=r(1374),s={"ui-predicate-options":o,"ui-predicate-comparison":n,"ui-predicate-comparison-argument":i,"ui-predicate-compound":a,"ui-predicate":d},c=function(e){Object.keys(s).forEach(function(t){e.component(t,s[t].default||s[t])})};"undefined"!=typeof window&&window.Vue&&c(window.Vue),e.exports={version:r(1356).version,install:c,components:s,UIPredicateOptions:o,UIPredicateComparison:n,UIPredicateComparisonArgument:i,UIPredicateCompound:a,UIPredicate:d},e.exports.default=e.exports},1392:function(e,t,r){"use strict";(function(e){var t=r(685),o=r(1381),n=a(r(138)),i=a(r(1379));function a(e){return e&&e.__esModule?e:{default:e}}n.default.use(i.default),(0,o.setOptions)({hierarchyRootSeparator:/\|/}),(0,t.configure)(function(){var e=r(1355);e.keys().forEach(function(t){return e(t)})},e)}).call(this,r(90)(e))},1394:function(e,t,r){r(452),r(1393),e.exports=r(1392)},219:function(e,t,r){"use strict";var o=r(1370);e.exports={name:"ui-predicate",props:{config:{type:Object,required:!0},data:{type:Object,required:!1}},data:function(){return{root:{},columns:{},isInAddCompoundMode:!1}},provide:function(){var e=this;return{getAddCompoundMode:function(){return e.isInAddCompoundMode},add:function(t){return e.ctrl.add({where:t,how:"after",type:e.isInAddCompoundMode?"CompoundPredicate":"ComparisonPredicate"})},remove:function(t){return e.ctrl.remove(t)},setPredicateLogicalType_id:function(t,r){return e.ctrl.setPredicateLogicalType_id(t,r)},setPredicateTarget_id:function(t,r){return e.ctrl.setPredicateTarget_id(t,r)},setPredicateOperator_id:function(t,r){return e.ctrl.setPredicateOperator_id(t,r)},getArgumentTypeComponentById:function(t){return e.ctrl.getArgumentTypeComponentById(t)},setArgumentValue:function(t,r){return e.ctrl.setArgumentValue(t,r)}}},methods:{setIsInAddCompoundMode:function(e){this.isInAddCompoundMode=e,this.$root.$emit("isInAddCompoundMode",e)},onAltPressed:function(e){18==e.keyCode&&this.setIsInAddCompoundMode(!0)},onAltReleased:function(e){18==e.keyCode&&this.setIsInAddCompoundMode(!1)},triggerChanged:function(){this.$emit("changed",this.ctrl)}},mounted:function(){var e=this;(0,o.UIPredicateCoreVue)({data:this.data,columns:this.config}).then(function(t){e.ctrl=t,e.root=t.root,e.columns=t.columns,e.$emit("initialized",t),t.on("changed",e.triggerChanged)},function(e){console.error(e)}),window.addEventListener("keyup",this.onAltReleased),window.addEventListener("keydown",this.onAltPressed)},destroyed:function(){this.ctrl&&this.ctrl.off(),window.removeEventListener("keyup",this.onAltReleased),window.removeEventListener("keydown",this.onAltPressed)}}},220:function(e,t,r){"use strict";e.exports={name:"ui-predicate-compound",props:{compound:{type:Object,required:!0},columns:{type:Object,required:!0}},inject:["add","setPredicateLogicalType_id"],methods:{changeLogic:function(e){var t=e.target.value;this.setPredicateLogicalType_id(this.compound,t)}}}},221:function(e,t,r){"use strict";e.exports={name:"ui-predicate-comparison",props:{predicate:{type:Object,required:!0},columns:{type:Object,required:!0}},inject:["add","setPredicateTarget_id","setPredicateOperator_id"],methods:{changeTarget:function(e){var t=e.target.value;this.setPredicateTarget_id(this.predicate,t)},changeOperator:function(e){var t=e.target.value;this.setPredicateOperator_id(this.predicate,t)}},mounted:function(){window.addEventListener("keyup",this.onAltReleased),window.addEventListener("keydown",this.onAltPressed)},destroyed:function(){window.removeEventListener("keyup",this.onAltReleased),window.removeEventListener("keydown",this.onAltPressed)}}},222:function(e,t,r){"use strict";e.exports={name:"ui-predicate-options",props:{predicate:{type:Object,required:!0}},data:function(){return{isInAddCompoundMode:this.getAddCompoundMode()}},inject:["remove","add","getAddCompoundMode"],methods:{isInAddCompoundModeChanged:function(e){this.isInAddCompoundMode=e}},mounted:function(){this.$root.$on("isInAddCompoundMode",this.isInAddCompoundModeChanged)},destroyed:function(){this.$root.$off("isInAddCompoundMode",this.isInAddCompoundModeChanged)}}},453:function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"b",function(){return n});var o=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{},[t("div",{staticClass:"ui-predicate main"},[t("ui-predicate-compound",{attrs:{compound:this.root,columns:this.columns}})],1)])},n=[]},454:function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"b",function(){return n});var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ui-predicate ui-predicate--row compound"},[r("div",{staticClass:"ui-predicate ui-predicate--row"},[r("div",{staticClass:"ui-predicate--col"},[e.compound.logic?r("select",{domProps:{value:e.compound.logic.logicalType_id},on:{change:e.changeLogic}},e._l(e.columns.logicalTypes,function(t){return r("option",{domProps:{value:t.logicalType_id}},[e._v(e._s(t.label))])})):e._e()]),e._v(" "),r("ui-predicate-options",{attrs:{predicate:e.compound}})],1),e._v(" "),r("div",{staticClass:"ui-predicate predicates ui-predicate--row"},e._l(e.compound.predicates,function(t,o){return r("div",{staticClass:"ui-predicate predicate"},["CompoundPredicate"===t.$_type?r("ui-predicate-compound",{attrs:{compound:t,columns:e.columns}}):e._e(),e._v(" "),"ComparisonPredicate"===t.$_type?r("ui-predicate-comparison",{attrs:{predicate:t,columns:e.columns}}):e._e()],1)}))])},n=[]},455:function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"b",function(){return n});var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ui-predicate--row comparison"},[r("div",{staticClass:"ui-predicate--col"},[r("select",{domProps:{value:e.predicate.target.target_id},on:{change:e.changeTarget}},e._l(e.columns.targets,function(t){return r("option",{domProps:{value:t.target_id}},[e._v(e._s(t.label))])}))]),e._v(" "),r("div",{staticClass:"ui-predicate--col"},[r("select",{domProps:{value:e.predicate.operator.operator_id},on:{change:e.changeOperator}},e._l(e.predicate.target.$type.$operators,function(t){return r("option",{domProps:{value:t.operator_id}},[e._v(e._s(t.label))])}))]),e._v(" "),r("div",{staticClass:"ui-predicate--col"},[r("ui-predicate-comparison-argument",{attrs:{predicate:e.predicate}})],1),e._v(" "),r("ui-predicate-options",{attrs:{predicate:e.predicate}})],1)},n=[]},456:function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"b",function(){return n});var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ui-predicate--col ui-predicate--option"},[r("button",{attrs:{type:"button",disabled:!1===e.predicate.$canBeRemoved},on:{click:function(t){e.remove(e.predicate)}}},[e._v("-")]),e._v(" "),r("button",{attrs:{type:"button"},on:{click:function(t){e.add(e.predicate)}}},[e._v(e._s(e.isInAddCompoundMode?"…":"+"))])])},n=[]},678:function(e,t){e.exports=function(e){return{$_type:e}}},679:function(e,t,r){const{mergeAll:o,trim:n}=r(92),i=r(678);function a(e){const{target_id:t,label:r,type_id:n}=u(e,"target_id,label,type_id");return o([i("Target"),{target_id:t,label:r,type_id:n},e])}function d(e){const{operator_id:t,label:r,argumentType_id:n}=u(e,"operator_id,label,argumentType_id");return o([i("Operator"),{operator_id:t,argumentType_id:n,label:r},e])}function s(e){const{logicalType_id:t,label:r}=u(e,"logicalType_id,label");return o([i("LogicalType"),{logicalType_id:t,label:r},e])}a.toJSON=function(e){return{target_id:e.target_id}},d.toJSON=function(e){return{operator_id:e.operator_id}},s.toJSON=function(e){return{logicalType_id:e.logicalType_id}};const c=Object.prototype.toString;function u(e,t){if(r=e,"[object Object]"!==c.call(r))throw new Error(`Object is required, got: ${JSON.stringify(e)}.`);var r;const o=t.split(",").map(n);let i;for(;i=o.pop();)if(!e.hasOwnProperty(i))throw new Error(`Object ${JSON.stringify(e)} MUST have a '${i}' property.`);return e}e.exports={Type:function(e){const{type_id:t,operator_ids:r}=u(e,"type_id,operator_ids");return o([i("Type"),{type_id:t,operator_ids:r},e])},Target:a,Operator:d,LogicalType:s,ArgumentType:function(e){const{argumentType_id:t,component:r}=u(e,"argumentType_id,component");return o([i("ArgumentType"),{argumentType_id:t,component:r},e])},_requireProps:u}}},[[1394,1,2]]]);
//# sourceMappingURL=preview.75ad77dce84d26ecc81a.bundle.js.map