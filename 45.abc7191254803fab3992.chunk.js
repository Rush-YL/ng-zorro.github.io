webpackJsonp([45],{Ke6J:function(n,o){n.exports="\u56fd\u9645\u5316\n===\n`ng-zorro`\u76ee\u524d\u7684\u9ed8\u8ba4\u6587\u6848\u662f\u4e2d\u6587\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528\u82f1\u6587\u6216\u5176\u4ed6\u8bed\u8a00\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u7684\u65b9\u6848\u3002\n\n## NZ_LOCALE \u914d\u7f6e\n\n`ng-zorro`\u63d0\u4f9b\u4e86\u4e00\u4e2a\u914d\u7f6e\u578btoken `NZ_LOCALE` \u7528\u4e8e\u5168\u5c40\u914d\u7f6e\u56fd\u9645\u5316\u6587\u6848\u3002\n\n```ts\nimport { NZ_LOCALE, enUS } from '../../index.showcase';\n\n@NgModule({\n  ...\n  imports     : [ NgZorroAntdModule.forRoot() ],\n  providers   : [ { provide: NZ_LOCALE, useValue: enUS } ], // \u8fd9\u91cc\u8bbe\u7f6e\u5f53\u524d\u5168\u5c40\u4f7f\u7528\u7684\u8bed\u8a00\u5305\n})\nexport class AppModule { }\n```\n\n\u6ce8\u610f\uff1a\u5b9e\u9645\u8bed\u8a00\u5305\u6587\u4ef6\u540d\u53ef\u80fd\u662f `en-US.ts` \u683c\u5f0f\uff0c\u4f7f\u7528\u65f6\u5bf9\u5e94\u5bfc\u51fa\u4e3a `enUS`\uff08\u53bb\u6389\u51cf\u53f7\uff09\n\n\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u8bed\u8a00\uff1a\n\n| \u8bed\u8a00 | \u6587\u4ef6\u540d |\n| --- | --- |\n| \u7b80\u4f53\u4e2d\u6587(\u5927\u9646) | zh-CN |\n| \u7f8e\u5f0f\u82f1\u8bed | en-US |\n\n\u5177\u4f53\u7684\u4f7f\u7528\u65b9\u6cd5\u548c\u65b0\u8bed\u8a00\u5305\u8d21\u732e\u65b9\u5f0f\u8bf7\u53c2\u8003 [Locale](#/other/locale) \u6587\u6863\u3002\n"},i8uh:function(n,o,t){"use strict";function e(n){return u._44(0,[(n()(),u._20(0,0,null,null,1,"nz-markdown",[],null,null,null,c.b,c.a)),u._18(1,4308992,null,0,i.a,[u.o],{nzContent:[0,"nzContent"]},null),(n()(),u._42(-1,null,["\n"]))],function(n,o){n(o,1,0,o.component.markdownContent)},null)}function l(n){return u._44(0,[(n()(),u._20(0,0,null,null,1,"nz-intro-i18n",[],null,null,null,e,s)),u._18(1,114688,null,0,_,[],null,null)],function(n,o){n(o,1,0)},null)}Object.defineProperty(o,"__esModule",{value:!0});var u=t("/oeL"),r=function(){function n(){}return n}(),c=t("yhcn"),i=t("AXbG"),_=function(){function n(){this.markdownContent=t("Ke6J")}return n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[]},n}(),a=[],s=u._17({encapsulation:2,styles:a,data:{}}),f=u._15("nz-intro-i18n",_,l,{},{},[]),p=t("qbdv"),d=t("BkNc"),m=t("1n7c");t.d(o,"NzIntroI18nModuleNgFactory",function(){return L});var L=u._16(r,[],function(n){return u._31([u._32(512,u.l,u._11,[[8,[f]],[3,u.l],u.F]),u._32(4608,p.n,p.m,[u.B]),u._32(512,d.o,d.o,[[2,d.t],[2,d.l]]),u._32(512,p.c,p.c,[]),u._32(512,m.a,m.a,[]),u._32(512,r,r,[]),u._32(1024,d.j,function(){return[[{path:"",component:_}]]},[])])})}});