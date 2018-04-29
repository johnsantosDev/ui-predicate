(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1351:function(e,t,o){"use strict";(function(e){d(o(315));var t=o(684),n=o(137),r=d(o(1350)),i=d(o(1348)),a=o(1345),s=o(1343);function d(e){return e&&e.__esModule?e:{default:e}}var c=o(134).withStorySource,u={operators:[{operator_id:"is",label:"Is"},{operator_id:"contains",label:"Contains"},{operator_id:"isLowerThan",label:"<"},{operator_id:"isEqualTo",label:"="},{operator_id:"isHigherThan",label:">"},{operator_id:"isBetween",label:"is between"}],types:[{type_id:"int",operator_ids:["isLowerThan","isEqualTo","isHigherThan"]},{type_id:"string",operator_ids:["is","contains"]},{type_id:"datetime",operator_ids:["is","isBetween"]}],targets:[{target_id:"article.title",label:"Article title",type_id:"string"},{target_id:"article.videoCount",label:"Article video count",type_id:"int"},{target_id:"article.publishingAt",label:"Article publish date",type_id:"datetime"}],logicalTypes:[{logicalType_id:"any",label:"Any"},{logicalType_id:"all",label:"All"},{logicalType_id:"none",label:"None"}]};(0,t.storiesOf)("ui-predicate",e).addDecorator(c("import Vue from 'vue';\nimport { storiesOf } from '@storybook/vue';\n\nimport { action, actions } from '@storybook/addon-actions';\nimport backgrounds from '@storybook/addon-backgrounds/vue';\nimport Centered from '@storybook/addon-centered';\nimport { withNotes } from '@storybook/addon-notes';\n\nimport { array, boolean, button, color, date, number, select, text, withKnobs } from '@storybook/addon-knobs/vue';\n\nconst DEFAULT_CONFIG = {\n  // besides array list names, everything else follows convention https://github.com/FGRibreau/sql-convention\n  operators: [\n    {\n      operator_id: 'is',\n      label: 'Is',\n    },\n    {\n      operator_id: 'contains',\n      label: 'Contains',\n    },\n    {\n      operator_id: 'isLowerThan',\n      label: '<',\n    },\n    {\n      operator_id: 'isEqualTo',\n      label: '=',\n    },\n    {\n      operator_id: 'isHigherThan',\n      label: '>',\n    },\n    {\n      operator_id: 'isBetween',\n      label: 'is between',\n    },\n  ],\n  types: [\n    {\n      type_id: 'int',\n      operator_ids: ['isLowerThan', 'isEqualTo', 'isHigherThan'],\n    },\n    {\n      type_id: 'string',\n      operator_ids: ['is', 'contains'],\n    },\n    {\n      type_id: 'datetime',\n      operator_ids: ['is', 'isBetween'],\n    },\n  ],\n  targets: [\n    {\n      target_id: 'article.title',\n      label: 'Article title',\n      type_id: 'string',\n    },\n    {\n      target_id: 'article.videoCount',\n      label: 'Article video count',\n      type_id: 'int',\n    },\n    {\n      target_id: 'article.publishingAt',\n      label: 'Article publish date',\n      type_id: 'datetime',\n    },\n  ],\n  logicalTypes: [\n    {\n      logicalType_id: 'any',\n      label: 'Any',\n    },\n    {\n      logicalType_id: 'all',\n      label: 'All',\n    },\n    {\n      logicalType_id: 'none',\n      label: 'None',\n    },\n  ],\n};\n\nstoriesOf('ui-predicate', module)\n  .addDecorator(Centered)\n  .addDecorator(withKnobs)\n  .addDecorator(withNotes)\n  .addDecorator(\n    backgrounds([\n      {\n        name: 'gray',\n        value: 'whitesmoke',\n        default: true,\n      },\n      {\n        name: 'twitter',\n        value: '#00aced',\n      },\n      {\n        name: 'facebook',\n        value: '#3b5998',\n      },\n    ])\n  )\n  .add(\n    'minimal configuration',\n    () => {\n      return {\n        template: '<ui-predicate :config=\"config\"></ui-predicate>',\n        data() {\n          return { config: DEFAULT_CONFIG };\n        },\n      };\n    },\n    {\n      notes: {\n        markdown: `\n      ## minimal configuration\n\n      \\`<ui-predicate/>\\` only requires a \\`config\\` object.\n      That's how you will pass your \\`targets\\`,\\`operators\\` , \\`types\\` and \\`logicalTypes\\`.\n\n    `,\n      },\n    }\n  )\n  .add(\n    'events|@onChange',\n    () => ({\n      template: '<ui-predicate :config=\"config\" @onChange=\"onChange\"></ui-predicate>',\n      data() {\n        return { config: DEFAULT_CONFIG };\n      },\n      methods: { onChange: action('onChange') },\n    }),\n    { notes: '' }\n  );\n",{"ui-predicate@events|@onChange":{startLoc:{col:4,line:130},endLoc:{col:17,line:138}},"ui-predicate@minimal configuration":{startLoc:{col:4,line:108},endLoc:{col:5,line:127}}})).addDecorator(i.default).addDecorator(s.withKnobs).addDecorator(a.withNotes).addDecorator((0,r.default)([{name:"gray",value:"whitesmoke",default:!0},{name:"twitter",value:"#00aced"},{name:"facebook",value:"#3b5998"}])).add("minimal configuration",function(){return{template:'<ui-predicate :config="config"></ui-predicate>',data:function(){return{config:u}}}},{notes:{markdown:"\n      ## minimal configuration\n\n      `<ui-predicate/>` only requires a `config` object.\n      That's how you will pass your `targets`,`operators` , `types` and `logicalTypes`.\n\n    "}}).add("events|@onChange",function(){return{template:'<ui-predicate :config="config" @onChange="onChange"></ui-predicate>',data:function(){return{config:u}},methods:{onChange:(0,n.action)("onChange")}}},{notes:""})}).call(this,o(90)(e))},1352:function(e,t,o){var n={"./ui-predicate.stories.js":1351};function r(e){var t=i(e);return o(t)}function i(e){var t=n[e];if(!(t+1)){var o=new Error('Cannot find module "'+e+'".');throw o.code="MODULE_NOT_FOUND",o}return t}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=1352},1353:function(e){e.exports={name:"ui-predicate-vue",version:"0.1.2",description:"Finally a predicate UI component for VueJS",main:"src/index.js",scripts:{"examples:build":"npm run --silent storybook:build","examples:build:watch":"npm run --silent storybook:dev",test:"jest","test:debugger":"node --inspect-brk node_modules/.bin/jest --watch","test:watch":"jest  --coverage --watch","test:coverage":"true","storybook:build":"build-storybook --output-dir ../../docs/packages/$npm_package_name/$npm_package_version/examples","storybook:watch":"start-storybook -p 9001","image-snapshots":"npm run storybook:build && npm run image-snapshots:run","image-snapshots:run":"jest --projects=./image-snapshots",lint:"eslint --fix examples src",docs:"jsdoc -c ../../jsdoc.json","docs:private":"jsdoc -c ../../jsdoc.json -p"},author:"Francois-Guillaume Ribreau <npm@fgribreau.com> (http://fgribreau.com/)",license:"MIT",devDependencies:{"@storybook/addon-actions":"4.0.0-alpha.4","@storybook/addon-backgrounds":"4.0.0-alpha.4","@storybook/addon-centered":"4.0.0-alpha.4","@storybook/addon-jest":"4.0.0-alpha.4","@storybook/addon-knobs":"4.0.0-alpha.4","@storybook/addon-links":"4.0.0-alpha.4","@storybook/addon-notes":"4.0.0-alpha.4","@storybook/addon-options":"4.0.0-alpha.4","@storybook/addon-storyshots":"4.0.0-alpha.4","@storybook/addon-storysource":"4.0.0-alpha.4","@storybook/addon-viewport":"4.0.0-alpha.4","@storybook/addons":"4.0.0-alpha.4","@storybook/vue":"4.0.0-alpha.4","@vue/test-utils":"^1.0.0-beta.15","babel-core":"^6.26.0","babel-loader":"^7.1.4","babel-preset-env":"^1.6.0","babel-preset-vue":"^2.0.2","cross-env":"^5.1.4",eslint:"^4.19.1","eslint-plugin-vue":"^4.5.0","file-loader":"^1.1.11",jest:"^22.4.3","jest-serializer-vue":"^1.0.0","jest-vue-preprocessor":"^1.4.0",jsdoc:"^3.5.5",react:"^16.3.2","react-dom":"^16.3.2","svg-url-loader":"^2.3.2","ui-predicate-core":"0.*","vue-jest":"^2.5.0","vue-loader":"^14.2.2","vue-template-compiler":"^2.5.16",webpack:"^4.6.0","webpack-dev-server":"^3.1.3"},dependencies:{vue:"^2.5.16"}}},1355:function(e,t,o){const{merge:n,find:r,curry:i,prop:a,tap:s,pipe:d,filter:c,map:u,over:l,lens:p,lensPath:m,takeLast:f,set:g,differenceWith:y,lensProp:h,insert:v}=o(92),b=o(1354);function _(e){return b.fromNullable(e[0]).value()}e.exports=function({dataclasses:e,invariants:t,errors:o,rules:a}){const{CompoundPredicate:s,ComparisonPredicate:l,Predicate:p,Target:m,LogicalType:g}=e,y=(e,t)=>b.fromNullable(r(e=>e.target_id==t,e)),h=(e,t)=>b.fromNullable(r(e=>e.logicalType_id==t,e)),P=i((e,t)=>d(c(({operator_id:e})=>t.includes(e)))(e)),T=i((e,t)=>(t.$operators=P(e.operators,t.operator_ids),t)),C=i((e,o)=>{const n=((e,t)=>b.fromNullable(r(e=>e.type_id==t,e)))(e.types,o.type_id);return t.TargetMustReferToADefinedType(n,o).then(e=>(o.$type=e,o))}),A=(e,t)=>d(e,(e=>(function(t){return t.then(t=>(e(),t))}))(t)),w=t=>{t.operators=u(e.Operator,t.operators),t.logicalTypes=u(e.LogicalType,t.logicalTypes);const o=d(e.Type,T(t));t.types=u(o,t.types);const n=d(e.Target,C(t));return Promise.all(u(n,t.targets)).then(e=>(t.targets=e,t))};function k({data:e,columns:r,options:i}={}){return w(r||k.defaults.columns).then(r=>{let d;const c=n(k.defaults.options,i);function u(){const e=!a.predicateToRemoveIsTheLastComparisonPredicate(d,s,l);s.forEach(d,function(t){t.$canBeRemoved=e&&!a.predicateToRemoveIsRootPredicate(d,t)})}function m(e){return t.RootPredicateMustBeACompoundPredicate(e,s).then(()=>{d=e})}function g({where:e,how:n="after",type:i}){return Promise.resolve().then(()=>t.AddOnlySupportsAfter(n)).then(()=>t.PredicateTypeMustBeValid(i,p.Types)).then(()=>c[`getDefault${i}`](r,c)).then(t=>{const n=l.is(e);if(n||s.is(e)){if(n){const o=M(e),[n,[r,i]]=f(2,o);n.predicates=v(i+1,t,n.predicates)}else e.predicates.unshift(t);return t}return Promise.reject(new o.CannotAddSomethingElseThanACompoundPredicateOrAComparisonPredicate)})}function P(e){return Promise.resolve().then(()=>t.RemovePredicateMustDifferFromRootPredicate(d,e)).then(()=>t.RemovePredicateCannotBeTheLastComparisonPredicate(d,e,s,l)).then(()=>{if(s.is(e)||l.is(e)){const t=M(e),[o,[n,r]]=f(2,t);return o.predicates.splice(r,1),0===o.predicates.length?P(o):e}return Promise.reject(new o.CannotRemoveSomethingElseThanACompoundPredicateOrAComparisonPredicate)})}function T(e,o){return t.PredicateMustBeACompoundPredicate(e,s).then(()=>h(r.logicalTypes,o)).then(e=>t.LogicalType_idMustReferToADefinedLogicalType(e)).then(t=>{e.logic=t.value()})}function C(e,o){return t.PredicateMustBeAComparisonPredicate(e,l).then(()=>y(r.targets,o)).then(e=>t.Target_idMustReferToADefinedTarget(e)).then(t=>(e.target=t.value(),w(e,_(e.target.$type.$operators).operator_id)))}function w(e,o){return Promise.resolve().then(()=>b.fromNullable(e.target.$type.$operators.find(e=>e.operator_id===o))).then(e=>t.Operator_idMustReferToADefinedOperator(e)).then(t=>{e.operator=t.value(),e.arguments=[]})}function M(e){return s.reduce(d,(t,o,n)=>e===o?n:t,null)}return(e?Promise.resolve(e):c.getDefaultData(r,c)).then(A(m,u)).then(()=>({setData:A(m,u),add:A(g,u),remove:A(P,u),setPredicateTarget_id:A(C,u),setPredicateOperator_id:A(w,u),setPredicateLogicalType_id:A(T,u),get root(){return d},toJSON:()=>d,get columns(){return r},get options(){return c}}))})}return k.defaults={options:{getDefaultData:(e,t)=>t.getDefaultComparisonPredicate(e,t).then(o=>t.getDefaultCompoundPredicate(e,t,[o])),getDefaultCompoundPredicate:(e,t,o)=>(Array.isArray(o)&&0!==o.length?Promise.resolve(o):t.getDefaultComparisonPredicate(e,t).then(e=>[e])).then(o=>t.getDefaultLogicalType(o,e,t).then(e=>s(e,o))),getDefaultComparisonPredicate(e,t){const o=_(e.targets);return l(o,_(o.$type.$operators),[])},getDefaultLogicalType:(e,t,o)=>Promise.resolve(_(t.logicalTypes))},columns:{operators:[{operator_id:"is",label:"Est"},{operator_id:"contains",label:"Contient"},{operator_id:"isLowerThan",label:"<"},{operator_id:"isEqualTo",label:"="},{operator_id:"isHigherThan",label:">"},{operator_id:"isBetween",label:"est compris entre"}],types:[{type_id:"int",operator_ids:["isLowerThan","isEqualTo","isHigherThan"]},{type_id:"string",operator_ids:["is","contains"]},{type_id:"datetime",operator_ids:["is","isBetween"]}],targets:[{target_id:"article.title",label:"Titre article",type_id:"string"},{target_id:"videoCount",label:"Nombre de vidéo",type_id:"int"},{target_id:"publishingAt",label:"Date de publication",type_id:"datetime"}],logicalTypes:[{logicalType_id:"any",label:"Any"},{logicalType_id:"all",label:"All"},{logicalType_id:"none",label:"None"}]}},k}},1356:function(e,t,o){const{merge:n}=o(92),r=o(678);e.exports=(({invariants:e})=>{function t(o){return e.PredicateTypeMustBeValid(o.name,t.Types).then(()=>n(r(o.name),{$canBeRemoved:!0}))}function o(e,r,i){return t(o).then(t=>n(t,{target:e,operator:r,arguments:i}))}function i(o,r){return e.CompoundPredicateMustHaveAtLeastOneSubPredicate(r,i).then(()=>t(i)).then(e=>n(e,{logic:o,predicates:r}))}return t.Types={ComparisonPredicate:"ComparisonPredicate",CompoundPredicate:"CompoundPredicate"},o.is=(e=>e&&e.$_type===t.Types.ComparisonPredicate),i.reduce=function(e,t,o,n=[]){return o=t(o,e,n),e.predicates.reduce((o,r,a)=>{const s=n.concat([e,[r,a]]);return i.is(r)?i.reduce(r,t,o,s):t(o,r,s)},o)},i.forEach=((e,t)=>{i.reduce(e,(e,o,n)=>{t(o)},null)}),i.is=(e=>e&&e.$_type===t.Types.CompoundPredicate),{Predicate:t,ComparisonPredicate:o,CompoundPredicate:i}})},1357:function(e,t,o){const{mergeAll:n}=o(92),r=o(678);e.exports={Type:function(e){const{type_id:t,operator_ids:o}=e;return n([r("Type"),{type_id:t,operator_ids:o},e])},Target:function(e){const{target_id:t,label:o,type_id:i}=e;return n([r("Target"),{target_id:t,label:o,type_id:i},e])},Operator:function(e){const{operator_id:t,label:o}=e;return n([r("Operator"),{operator_id:t,label:o},e])},LogicalType:function(e){const{logicalType_id:t,label:o}=e;return n([r("LogicalType"),{logicalType_id:t,label:o},e])}}},1358:function(e,t,o){const{merge:n}=o(92);e.exports=(e=>n(o(1357),o(1356)(e)))},1359:function(e,t,o){const{is:n}=o(92);e.exports=(({errors:e,rules:t})=>({CompoundPredicateMustHaveAtLeastOneSubPredicate:t=>Array.isArray(t)&&0!==t.length?Promise.resolve():Promise.reject(new e.CompoundPredicateMustHaveAtLeastOneSubPredicate),PredicateTypeMustBeValid:(t,o)=>Object.keys(o).includes(t)?Promise.resolve():Promise.reject(new e.InvalidPredicateType),RootPredicateMustBeACompoundPredicate:(t,o)=>o.is(t)?Promise.resolve(t):Promise.reject(new e.RootPredicateMustBeACompoundPredicate),PredicateMustBeAComparisonPredicate:(t,o)=>o.is(t)?Promise.resolve():Promise.reject(new e.PredicateMustBeAComparisonPredicate),PredicateMustBeACompoundPredicate:(t,o)=>o.is(t)?Promise.resolve():Promise.reject(new e.PredicateMustBeACompoundPredicate),AddOnlySupportsAfter:t=>"after"!==t?Promise.reject(new e.AddCurrentlyOnlySupportAfterInsertion):Promise.resolve(),TargetMustReferToADefinedType:(t,o)=>t.isNone()?Promise.reject(new e.TargetMustReferToADefinedType(`target ${JSON.stringify(o.target_id)} does not refer to a defined type, target.type_id=${JSON.stringify(o.type_id)}`)):Promise.resolve(t.value()),LogicalType_idMustReferToADefinedLogicalType:t=>t.isNone()?Promise.reject(new e.LogicalType_idMustReferToADefinedLogicalType):Promise.resolve(t),Target_idMustReferToADefinedTarget:t=>t.isNone()?Promise.reject(new e.Target_idMustReferToADefinedTarget):Promise.resolve(t),Operator_idMustReferToADefinedOperator:t=>t.isNone()?Promise.reject(new e.Operator_idMustReferToADefinedOperator):Promise.resolve(t),RemovePredicateMustDifferFromRootPredicate:(o,n)=>t.predicateToRemoveIsRootPredicate(o,n)?Promise.reject(new e.ForbiddenCannotRemoveRootCompoundPredicate):Promise.resolve(n),RemovePredicateCannotBeTheLastComparisonPredicate:(o,n,r,i)=>i.is(n)&&t.predicateToRemoveIsTheLastComparisonPredicate(o,r,i)?Promise.reject(new e.ForbiddenCannotRemoveLastComparisonPredicate):Promise.resolve()}))},1360:function(e,t){e.exports={predicateToRemoveIsRootPredicate:(e,t)=>e===t,predicateToRemoveIsTheLastComparisonPredicate:(e,t,o)=>{return 1===t.reduce(e,(e,t)=>o.is(t)?e+1:e,0)}}},1366:function(e,t,o){const{mergeAll:n}=o(92),r=o(1365);function i(e){return{[e]:r(e)}}e.exports=n([i("InvalidPredicateType"),i("CompoundPredicateMustHaveAtLeastOneSubPredicate"),i("RootPredicateMustBeACompoundPredicate"),i("PredicateMustBeACompoundPredicate"),i("PredicateMustBeAComparisonPredicate"),i("AddCurrentlyOnlySupportAfterInsertion"),i("TargetMustReferToADefinedType"),i("LogicalType_idMustReferToADefinedLogicalType"),i("Target_idMustReferToADefinedTarget"),i("Operator_idMustReferToADefinedOperator"),i("ForbiddenCannotRemoveRootCompoundPredicate"),i("ForbiddenCannotRemoveLastComparisonPredicate"),i("CannotRemoveSomethingElseThanACompoundPredicateOrAComparisonPredicate"),i("CannotAddSomethingElseThanACompoundPredicateOrAComparisonPredicate")])},1367:function(e,t,o){const{merge:n}=o(92),r=o(1366),i=o(1360),a=o(1359)({errors:r,rules:i}),s=o(1358)({invariants:a}),d=o(1355)({dataclasses:s,invariants:a,errors:r,rules:i});e.exports={PredicateCore:d,errors:r,invariants:a,dataclasses:s}},1369:function(e,t,o){(e.exports=o(1368)(!1)).push([e.i,".ui-predicate.main{display:flex}.ui-predicate--row{flex-direction:row}.ui-predicate--col{display:inline-block}",""])},1370:function(e,t,o){var n=o(1369);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,o(687).default)("dbc4eb24",n,!0,{})},1371:function(e,t,o){"use strict";o.r(t);var n=o(217),r=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,function(){return n[e]})}(i);var a=o(453),s=o(91);var d=function(e){o(1370)},c=Object(s.a)(r.a,a.a,a.b,!1,d,null,null);t.default=c.exports},1372:function(e,t,o){"use strict";o.r(t);var n=o(218),r=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,function(){return n[e]})}(i);var a=o(454),s=o(91),d=Object(s.a)(r.a,a.a,a.b,!1,null,null,null);t.default=d.exports},1373:function(e,t,o){"use strict";o.r(t);var n=o(219),r=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,function(){return n[e]})}(i);var a=o(455),s=o(91),d=Object(s.a)(r.a,a.a,a.b,!1,null,null,null);t.default=d.exports},1374:function(e,t,o){"use strict";o.r(t);var n=o(220),r=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,function(){return n[e]})}(i);var a=o(456),s=o(91),d=Object(s.a)(r.a,a.a,a.b,!1,null,null,null);t.default=d.exports},1375:function(e,t,o){"use strict";var n=o(1374),r=o(1373),i=o(1372),a=o(1371),s={"ui-predicate-options":n,"ui-predicate-comparison":r,"ui-predicate-compound":i,"ui-predicate":a},d=function(e){Object.keys(s).forEach(function(t){return e.component(t,s[t].default)})};"undefined"!=typeof window&&window.Vue&&d(window.Vue),e.exports={version:o(1353).version,install:d,components:s,UIPredicateOptions:n,UIPredicateComparison:r,UIPredicateCompound:i,UIPredicate:a},e.exports.default=e.exports},1388:function(e,t,o){"use strict";(function(e){var t=o(684),n=o(1377),r=a(o(315)),i=a(o(1375));function a(e){return e&&e.__esModule?e:{default:e}}r.default.use(i.default),(0,n.setOptions)({hierarchyRootSeparator:/\|/}),(0,t.configure)(function(){var e=o(1352);e.keys().forEach(function(t){return e(t)})},e)}).call(this,o(90)(e))},1390:function(e,t,o){o(452),o(1389),e.exports=o(1388)},217:function(e,t,o){"use strict";var n=o(1367);e.exports={name:"ui-predicate",props:{config:{type:Object,required:!0},data:{type:Object,required:!1}},data:function(){return{root:{},columns:{},isInAddCompoundMode:!1}},provide:function(){var e=this;return{getAddCompoundMode:function(){return e.isInAddCompoundMode},add:function(t){return e.ctrl.add({where:t,how:"after",type:e.isInAddCompoundMode?"CompoundPredicate":"ComparisonPredicate"})},remove:function(t){return e.ctrl.remove(t)},setPredicateLogicalType_id:function(t,o){return e.ctrl.setPredicateLogicalType_id(t,o)},setPredicateTarget_id:function(t,o){return e.ctrl.setPredicateTarget_id(t,o)},setPredicateOperator_id:function(t,o){return e.ctrl.setPredicateOperator_id(t,o)}}},methods:{setIsInAddCompoundMode:function(e){this.isInAddCompoundMode=e,this.$root.$emit("isInAddCompoundMode",e)},onAltPressed:function(e){18==e.keyCode&&this.setIsInAddCompoundMode(!0)},onAltReleased:function(e){18==e.keyCode&&this.setIsInAddCompoundMode(!1)}},mounted:function(){var e=this;(0,n.PredicateCore)({data:this.data,columns:this.config}).then(function(t){e.ctrl=t,e.root=t.root,e.columns=t.columns},function(e){console.error(e)}),window.addEventListener("keyup",this.onAltReleased),window.addEventListener("keydown",this.onAltPressed)},destroyed:function(){window.removeEventListener("keyup",this.onAltReleased),window.removeEventListener("keydown",this.onAltPressed)}}},218:function(e,t,o){"use strict";e.exports={name:"ui-predicate-compound",props:{compound:{type:Object,required:!0},columns:{type:Object,required:!0}},inject:["add","setPredicateLogicalType_id"],methods:{changeLogic:function(e){var t=e.target.value;this.setPredicateLogicalType_id(this.compound,t)}}}},219:function(e,t,o){"use strict";e.exports={name:"ui-predicate-comparison",props:{predicate:{type:Object,required:!0},columns:{type:Object,required:!0}},inject:["add","setPredicateTarget_id","setPredicateOperator_id"],methods:{changeTarget:function(e){var t=e.target.value;this.setPredicateTarget_id(this.predicate,t)},changeOperator:function(e){var t=e.target.value;this.setPredicateOperator_id(this.predicate,t)}},mounted:function(){window.addEventListener("keyup",this.onAltReleased),window.addEventListener("keydown",this.onAltPressed)},destroyed:function(){window.removeEventListener("keyup",this.onAltReleased),window.removeEventListener("keydown",this.onAltPressed)}}},220:function(e,t,o){"use strict";e.exports={name:"ui-predicate-options",props:{predicate:{type:Object,required:!0}},data:function(){return{isInAddCompoundMode:this.getAddCompoundMode()}},inject:["remove","add","getAddCompoundMode"],methods:{isInAddCompoundModeChanged:function(e){this.isInAddCompoundMode=e}},mounted:function(){this.$root.$on("isInAddCompoundMode",this.isInAddCompoundModeChanged)},destroyed:function(){this.$root.$off("isInAddCompoundMode",this.isInAddCompoundModeChanged)}}},453:function(e,t,o){"use strict";o.d(t,"a",function(){return n}),o.d(t,"b",function(){return r});var n=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{},[t("div",{staticClass:"ui-predicate main"},[t("ui-predicate-compound",{attrs:{compound:this.root,columns:this.columns}})],1)])},r=[]},454:function(e,t,o){"use strict";o.d(t,"a",function(){return n}),o.d(t,"b",function(){return r});var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"ui-predicate ui-predicate--row compound"},[o("div",{staticClass:"ui-predicate ui-predicate--row"},[o("div",{staticClass:"ui-predicate--col"},[e.compound.logic?o("select",{domProps:{value:e.compound.logic.logicalType_id},on:{change:e.changeLogic}},e._l(e.columns.logicalTypes,function(t){return o("option",{domProps:{value:t.logicalType_id}},[e._v(e._s(t.label))])})):e._e()]),e._v(" "),o("ui-predicate-options",{attrs:{predicate:e.compound}})],1),e._v(" "),o("div",{staticClass:"ui-predicate predicates ui-predicate--row"},e._l(e.compound.predicates,function(t,n){return o("div",{staticClass:"ui-predicate predicate"},["CompoundPredicate"===t.$_type?o("ui-predicate-compound",{attrs:{compound:t,columns:e.columns}}):e._e(),e._v(" "),"ComparisonPredicate"===t.$_type?o("ui-predicate-comparison",{attrs:{predicate:t,columns:e.columns}}):e._e()],1)}))])},r=[]},455:function(e,t,o){"use strict";o.d(t,"a",function(){return n}),o.d(t,"b",function(){return r});var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"ui-predicate--row comparison"},[o("div",{staticClass:"ui-predicate--col"},[o("select",{domProps:{value:e.predicate.target.target_id},on:{change:e.changeTarget}},e._l(e.columns.targets,function(t){return o("option",{domProps:{value:t.target_id}},[e._v(e._s(t.label))])}))]),e._v(" "),o("div",{staticClass:"ui-predicate--col"},[o("select",{domProps:{value:e.predicate.operator.operator_id},on:{change:e.changeOperator}},e._l(e.predicate.target.$type.$operators,function(t){return o("option",{domProps:{value:t.operator_id}},[e._v(e._s(t.label))])}))]),e._v(" "),o("div",{staticClass:"ui-predicate--col"},[o("input",{attrs:{type:"text"},domProps:{value:e.predicate.arguments}})]),e._v(" "),o("ui-predicate-options",{attrs:{predicate:e.predicate}})],1)},r=[]},456:function(e,t,o){"use strict";o.d(t,"a",function(){return n}),o.d(t,"b",function(){return r});var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"ui-predicate--col ui-predicate--option"},[o("button",{attrs:{type:"button",disabled:!1===e.predicate.$canBeRemoved},on:{click:function(t){e.remove(e.predicate)}}},[e._v("-")]),e._v(" "),o("button",{attrs:{type:"button"},on:{click:function(t){e.add(e.predicate)}}},[e._v(e._s(e.isInAddCompoundMode?"…":"+"))])])},r=[]},678:function(e,t){e.exports=function(e){return{$_type:e}}}},[[1390,1,2]]]);
//# sourceMappingURL=preview.da357420abda97912fbe.bundle.js.map