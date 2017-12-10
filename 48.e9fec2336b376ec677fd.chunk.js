webpackJsonp([48],{h73v:function(n,t){n.exports="\u66f4\u65b0\u65e5\u5fd7\n===\n\n#### \u53d1\u5e03\u5468\u671f\n\n* \u6bcf\u5468\u672b\u4f1a\u8fdb\u884c\u65e5\u5e38 bugfix \u66f4\u65b0\u3002\uff08\u5982\u679c\u6709\u7d27\u6025\u7684 bugfix\uff0c\u5219\u4efb\u4f55\u65f6\u5019\u90fd\u53ef\u53d1\u5e03\uff09\u3002\n* \u6bcf\u6708\u53d1\u5e03\u4e00\u4e2a\u5e26\u6709\u65b0\u7279\u6027\u7684\u5411\u4e0b\u517c\u5bb9\u7684\u7248\u672c\u3002\n* \u542b\u6709\u7834\u574f\u6027\u5347\u7ea7\u7684\u7248\u672c\u66f4\u65b0\u4e0d\u5728\u53d1\u5e03\u5468\u671f\u5185\u3002\n\n\u66f4\u65b0\u65e5\u5fd7\u4e5f\u53ef\u4ee5\u5728[Github](https://github.com/NG-ZORRO/ng-zorro-antd/releases)\u67e5\u770b\n\n## 0.6.5\n`2017-12-10`\n\n### Bug Fixes\n* \u4fee\u590d `Modal` \u7c7b\u578b\u517c\u5bb9\u95ee\u9898 [#722](https://github.com/NG-ZORRO/ng-zorro-antd/pull/722)\n* \u4fee\u590d `i18n` \u66ff\u6362\u95ee\u9898 [#722](https://github.com/NG-ZORRO/ng-zorro-antd/pull/722)\n\n## 0.6.4\n`2017-12-10`\n\n### Features\n* `Form` \u652f\u6301\u9ed8\u8ba4`nzValidateStatus`\u5e76\u652f\u6301\u66f4\u591a\u9519\u8bef\u72b6\u6001 [#696](https://github.com/NG-ZORRO/ng-zorro-antd/pull/696)\n* `Select` \u652f\u6301\u6240\u6709\u573a\u666f\u4e0b\u65e0\u503c\u65f6\u663e\u793aPlaceholder\u5185\u5bb9 [#703](https://github.com/NG-ZORRO/ng-zorro-antd/pull/703)\n* `Grid` \u652f\u63010\u503c\u5e03\u5c40 [#704](https://github.com/NG-ZORRO/ng-zorro-antd/pull/704)\n* `Tooltip / Popover / Popconfirm` \u652f\u6301\u9f20\u6807\u79fb\u5165\u60ac\u6d6e\u6846\u5185\uff0c\u652f\u6301\u5f53\u60ac\u6d6e\u6846\u5185\u5bb9\u4e3a\u7a7a\u65f6\u4e0d\u663e\u793a [#714](https://github.com/NG-ZORRO/ng-zorro-antd/pull/714)\n\n### Bug Fixes\n* `InputNumber` \u4fee\u590d\u4f7f\u7528tab\u952e\u540e\u672a\u89e6\u53d1\u810f\u503c\u68c0\u67e5\u7684\u95ee\u9898 [#706](https://github.com/NG-ZORRO/ng-zorro-antd/pull/706)\n\n### Refactor\n* \u4fee\u6b63\u8bed\u6cd5\u4e66\u5199\u4ee5\u7b26\u5408\u65b0\u7684tslint\u89c4\u8303 [#691](https://github.com/NG-ZORRO/ng-zorro-antd/pull/691) [@Trotyl Yu](https://github.com/trotyl)\n\n### Docs\n* \u4fee\u6b63\u5355\u8bcd\u6587\u6848 [#694](https://github.com/NG-ZORRO/ng-zorro-antd/pull/694) [@chunghha](https://github.com/chunghha)\n\n## 0.6.3\n`2017-12-07`\n\n### BREAK CHANGES\n* `DropDownButton` \u7528 `nzDisabled` \u53d6\u4ee3 `nzDisable` [#459](https://github.com/NG-ZORRO/ng-zorro-antd/pull/459) [@Trotyl Yu](https://github.com/trotyl)\n\n### Features\n* `Select` \u652f\u6301 `option` \u76f4\u63a5\u6e32\u67d3 `ng-template` \u5185\u5bb9 [#689](https://github.com/NG-ZORRO/ng-zorro-antd/pull/689)\n* `Carousel` \u652f\u6301\u66f4\u591a API [#688](https://github.com/NG-ZORRO/ng-zorro-antd/pull/688) [@Hsuan Lee](https://github.com/HsuanXyz)\n* `Select` \u652f\u6301\u4e0b\u62c9\u6eda\u52a8\u5230\u5e95\u90e8\u4e8b\u4ef6 `nzScrollToBottom`\uff0c\u7528\u4e8e\u6eda\u52a8\u52a0\u8f7d [#678](https://github.com/NG-ZORRO/ng-zorro-antd/pull/678)\n* \u6253\u5305\u7248\u672c\u652f\u6301 `sourcemaps` [#666](https://github.com/NG-ZORRO/ng-zorro-antd/pull/666) [@Trotyl Yu](https://github.com/trotyl)\n* \u56fd\u9645\u5316\u652f\u6301\u571f\u8033\u5176\u8bed [#634](https://github.com/NG-ZORRO/ng-zorro-antd/pull/634) [@Emrullah TUNCAY](https://github.com/etuncay)\n* \u56fd\u9645\u5316\u652f\u6301\u7e41\u4f53\u4e2d\u6587 [#687](https://github.com/NG-ZORRO/ng-zorro-antd/pull/687)\n* \u6240\u6709 `boolean` \u7c7b\u578b\u7684\u5c5e\u6027\u652f\u6301\u76f4\u63a5\u4ee5 `attribute` \u65b9\u5f0f\u4f7f\u7528 [#459](https://github.com/NG-ZORRO/ng-zorro-antd/pull/459) [@Trotyl Yu](https://github.com/trotyl)\n\n### Bug Fixes\n* `Radio` \u4fee\u590d\u52a8\u6001\u6539\u53d8\u9009\u9879\u65f6\u7684\u95ee\u9898 [#677](https://github.com/NG-ZORRO/ng-zorro-antd/pull/677) [@Hsuan Lee](https://github.com/HsuanXyz)\n* `Select` \u4fee\u590d `disabled` \u9009\u9879\u53ef\u4ee5\u4f7f\u7528\u65b9\u5411\u952e\u9009\u4e2d\u7684\u95ee\u9898 [#675](https://github.com/NG-ZORRO/ng-zorro-antd/pull/675) [@\u5361\u8272](https://github.com/cipchk)\n* `Affix` \u4fee\u590d\u4f4d\u7f6e\u95ee\u9898 [#672](https://github.com/NG-ZORRO/ng-zorro-antd/pull/672) [@\u5361\u8272](https://github.com/cipchk)\n\n### Refactor\n* \u91cd\u6784\u6240\u6709\u9759\u6001 `className` \u7ed1\u5b9a\u7684\u65b9\u5f0f [#664](https://github.com/NG-ZORRO/ng-zorro-antd/pull/664) [@Trotyl Yu](https://github.com/trotyl)\n\n### CI\n* \u5e76\u884c\u52a0\u901fCI\u6d4b\u8bd5 [#655](https://github.com/NG-ZORRO/ng-zorro-antd/pull/655) [@Trotyl Yu](https://github.com/trotyl)\n\n## 0.6.2\n`2017-11-29`\n\n### Features\n* `Steps` \u652f\u6301\u52a8\u6001\u6570\u636e\u66f4\u65b0 [#629](https://github.com/NG-ZORRO/ng-zorro-antd/pull/629)\n* `Slider` \u652f\u6301 `nzMarks`\u5c5e\u6027\u52a8\u6001\u66f4\u65b0 [#636](https://github.com/NG-ZORRO/ng-zorro-antd/pull/636)\n* `Table` \u548c `Pagination` \u652f\u6301\u81ea\u5b9a\u4e49\u5206\u9875\u4e0b\u62c9\u6570\u636e [#608](https://github.com/NG-ZORRO/ng-zorro-antd/pull/608) [@hllinc](https://github.com/hllinc)\n\n\n## 0.6.1\n`2017-11-26`\n\n### Features\n* `DatePicker` \u652f\u6301\u4e86\u5168\u90e8 `momentjs` \u7684\u65f6\u95f4\u683c\u5f0f [#593](https://github.com/NG-ZORRO/ng-zorro-antd/pull/593) [@JuniorTour](https://github.com/JuniorTour)\n\n### Bug Fixes\n* `DatePicker` \u4fee\u590d `nzDisabledDate` \u5bf9 `Today` \u6309\u94ae\u4e0d\u751f\u6548\u7684\u95ee\u9898 [#611](https://github.com/NG-ZORRO/ng-zorro-antd/pull/611)\n* `Select` \u4fee\u590d\u9009\u9879\u91cd\u590d\u7684\u95ee\u9898 [#609](https://github.com/NG-ZORRO/ng-zorro-antd/pull/609)\n* `Transfer` \u4fee\u590d\u5168\u9009\u7684\u95ee\u9898 [#602](https://github.com/NG-ZORRO/ng-zorro-antd/pull/602) [@\u5361\u8272](https://github.com/cipchk)\n\n## 0.6.0\n`2017-11-17`\n\n### BREAK CHANGES\n\n* \u517c\u5bb9 `Angular 5.0` \u7248\u672c\uff0c`Angular 4.x` \u7248\u672c\u8bf7\u4f7f\u7528 `0.5.5` \u7248\u672c\u7684 `NG-ZORRO`  [#552](https://github.com/NG-ZORRO/ng-zorro-antd/pull/552) \n\n### Features\n\n* \u65b0\u589e `Transfer` \u7ec4\u4ef6 [#578](https://github.com/NG-ZORRO/ng-zorro-antd/pull/578) [@\u5361\u8272](https://github.com/cipchk)\n* `Tooltip` \u652f\u6301 `Directive` \u7528\u6cd5 [#545](https://github.com/NG-ZORRO/ng-zorro-antd/pull/545)\n* `Modal` \u652f\u6301 `Esc` \u952e\u5173\u95ed\u9009\u9879 [#567](https://github.com/NG-ZORRO/ng-zorro-antd/pull/567) [@Hsuan Lee](https://github.com/HsuanXyz)\n* `TimePicker` \u652f\u6301 `nzDisabledHours` \u52a8\u6001\u8c03\u6574 [#568](https://github.com/NG-ZORRO/ng-zorro-antd/pull/568) [@Hsuan Lee](https://github.com/HsuanXyz)\n* `Steps` \u7684 `nzDescription` \u9009\u9879\u652f\u6301\u4f20\u5165 `Template` [#556](https://github.com/NG-ZORRO/ng-zorro-antd/pull/556) [@\u5361\u8272](https://github.com/cipchk) \n\n### Bug Fixes\n* Hover \u540e\u7acb\u523b\u70b9\u51fb `Menu` \u65f6\u4e0d\u518d\u9690\u85cf\u4e8c\u7ea7\u83dc\u5355 [#576](https://github.com/NG-ZORRO/ng-zorro-antd/pull/576)\n* \u4fee\u590d `Select` \u5728\u591a\u9009\u72b6\u6001\u4e0b\u7c98\u8d34\u65f6\u5bbd\u5ea6\u4e0d\u4f1a\u6539\u53d8\u7684\u95ee\u9898 [#575](https://github.com/NG-ZORRO/ng-zorro-antd/pull/575)\n* \u4fee\u590d `Popover` `Title`\u65e0\u6570\u636e\u65f6\u4ecd\u7136\u663e\u793a\u7684\u95ee\u9898 [#556](https://github.com/NG-ZORRO/ng-zorro-antd/pull/556) [@\u5361\u8272](https://github.com/cipchk)\n\n### Docs\n* \u589e\u52a0ISSUE\u52a9\u624b\u529f\u80fd\uff0c\u672a\u6309\u8981\u6c42\u4e66\u5199\u7684ISSUE\u5c06\u4f1a\u88ab\u5173\u95ed [#565](https://github.com/NG-ZORRO/ng-zorro-antd/pull/565) \n* \u5728\u6587\u6863\u9875\u9762\u589e\u52a0\u7248\u672c\u5207\u6362\u529f\u80fd [#577](https://github.com/NG-ZORRO/ng-zorro-antd/pull/577)\n\n## 0.6.0-rc.3\n`2017-11-04`\n\n### Bug Fixes\n* \u4fee\u590d `Tabs` \u7ec4\u4ef6\u4e2d\u91cd\u590d\u6e32\u67d3 `nzTabBarExtraContent` \u7684\u95ee\u9898 [#489](https://github.com/NG-ZORRO/ng-zorro-antd/pull/489) [@Hsuan Lee](https://github.com/HsuanXyz)\n* \u4fee\u590d `Pagination` \u7ec4\u4ef6\u4e2d `nzPageIndexClickChange` \u88ab\u9519\u8bef\u89e6\u53d1\u7684\u95ee\u9898 [#486](https://github.com/NG-ZORRO/ng-zorro-antd/pull/486) [@Hsuan Lee](https://github.com/HsuanXyz)\n* \u4fee\u590d `Affix` \u951a\u70b9\u6eda\u52a8\u65f6\u7684\u95ee\u9898 [#490](https://github.com/NG-ZORRO/ng-zorro-antd/pull/490) [@\u5361\u8272](https://github.com/cipchk)\n\n### Features\n* `DatePicker` \u5728 `month` \u6a21\u5f0f\u4e0b\u652f\u6301 `nzDisabledDate` \u5c5e\u6027 [#451](https://github.com/NG-ZORRO/ng-zorro-antd/pull/451) [@Hsuan Lee](https://github.com/HsuanXyz)\n\n### Build\n* \u4fee\u590d `rollup` \u4e2d\u7684\u914d\u7f6e [#509](https://github.com/NG-ZORRO/ng-zorro-antd/pull/509)\n* \u540c\u6b65\u96c6\u6210\u6d4b\u8bd5\u4e2d\u7684\u4f9d\u8d56\u7248\u672c [#469](https://github.com/NG-ZORRO/ng-zorro-antd/pull/469) [@Trotyl Yu](https://github.com/trotyl)\n\n### Performance\n* \u51cf\u5c11\u90e8\u5206\u7ec4\u4ef6\u7684\u4e0d\u5fc5\u8981\u7684\u6837\u5f0f\u66f4\u65b0 [#528](https://github.com/NG-ZORRO/ng-zorro-antd/pull/528)\n* \u7edf\u4e00\u6240\u6709\u7ec4\u4ef6\u7684request animation polyfill\n\n\n## 0.6.0-rc.2\n`2017-10-28`\n\n### Build\n* \u589e\u52a0 `rollup` \u4e2d\u5bf9\u90e8\u5206 `rxjs` \u64cd\u4f5c\u7b26\u7684\u652f\u6301\n* \u4fee\u590d `ngc` \u4e0d\u652f\u6301 `import from 'FOLDER_NAME'` \u7684\u65b9\u5f0f\n* \u79fb\u9664 `ci` \u914d\u7f6e\u4e2d\u591a\u4f59\u7684 `npm install`\n\n### Features\n* \u65b0\u589e\u56fd\u9645\u5316\u652f\u6301\uff08\u901a\u8fc7 `Locale` \u6a21\u5757\u5b9e\u73b0\uff09\n\n### Docs\n* \u589e\u52a0 `\u56fd\u9645\u5316` \u6587\u6848\u53ca\u4f7f\u7528\u4ecb\u7ecd\n* \u589e\u52a0 `Locale` \u6a21\u5757\u7684\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\uff0c\u4ee5\u53ca\u8bed\u8a00\u5207\u6362\u7684\u4ee3\u7801\u6f14\u793a\n\n### BREAKING CHANGES\n* `Table` \u4fee\u590d `nzShowExpand` \u503c\u7684\u8bed\u4e49\u8868\u793a\u9519\u8bef\uff08\u539f\u9ed8\u8ba4\u503c\u5c06\u6539\u53d8\uff09\n* \u4f9d\u8d56 `@angular/cdk` \u7248\u672c\u5347\u7ea7\u81f3 `2.0.0-beta.12`\uff08\u5927\u90e8\u5206\u6a21\u5757\u7684\u4f7f\u7528\u65b9\u5f0f\u6539\u53d8\uff09\n* \u4f9d\u8d56 `angular` \u7248\u672c\u5347\u7ea7\u81f3 `^4.4.4`\n* \u4f9d\u8d56 `@angular/cli` \u7248\u672c\u5347\u7ea7\u81f3 `1.4.7`\n\n## 0.5.5\n`2017-10-21`\n\n### Features\n* `Steps` \u5728 `vertical` \u6a21\u5f0f\u4e0b\u652f\u6301 `nzProgressDot` \u5c5e\u6027  [#446](https://github.com/NG-ZORRO/ng-zorro-antd/pull/446) [@Hsuan Lee](https://github.com/HsuanXyz)\n* `Calendar` \u589e\u52a0\u5e74\u4efd\u53d8\u91cf\u81f3\u6a21\u677f\u5c5e\u6027 [#465](https://github.com/NG-ZORRO/ng-zorro-antd/pull/465)\n\n### Bug Fixes\n* `Dropdown` \u4fee\u590d\u7279\u5b9a\u60c5\u51b5\u4e0b `unsubscribe` \u7684\u95ee\u9898 [#464](https://github.com/NG-ZORRO/ng-zorro-antd/pull/464) \n* `Dropdown` \u4fee\u590d nzVisibleChange \u4e8b\u4ef6\u89e6\u53d1\u7684\u903b\u8f91 [#466](https://github.com/NG-ZORRO/ng-zorro-antd/pull/466) \n\n### Docs\n* \u589e\u52a0\u5bf9 `Input` \u4e2d `Textarea` \u5c5e\u6027\u7684\u8bf4\u660e [#435](https://github.com/NG-ZORRO/ng-zorro-antd/pull/435) [@Liu, An-Chi](https://github.com/tigercosmos)\n\n\n## 0.5.4\n`2017-10-14`\n\n### Features\n* `InputNumber` \u589e\u52a0\u5bf9 `nzBlur`, `nzFocus` \u5c5e\u6027\uff08\u4e8b\u4ef6\uff09\u7684\u652f\u6301 [#406](https://github.com/NG-ZORRO/ng-zorro-antd/pull/406) [@Hsuan Lee](https://github.com/HsuanXyz)\n\n### Bug Fixes\n* `DatePicker` \u4fee\u590d\u4e86\u5f53`nzMode`\u7f6e\u4e3a`month`\u65f6\u6ca1\u6709\u6539\u53d8`ngModel`\u503c\u7684\u95ee\u9898 [#421](https://github.com/NG-ZORRO/ng-zorro-antd/pull/421) [@Hsuan Lee](https://github.com/HsuanXyz)\n* `Modal` \u4fee\u590d\u4e86\u5f53\u5f39\u51fa\u6846\u663e\u793a\u540e\u5207\u6362\u8def\u7531\u65f6\uff0cbody\u6eda\u52a8\u6761\u6ca1\u6709\u6062\u590d\u663e\u793a\u7684\u95ee\u9898 [#415](https://github.com/NG-ZORRO/ng-zorro-antd/pull/415) [@Hsuan Lee](https://github.com/HsuanXyz)\n\n### Docs\n* \u4fee\u6b63`Modal`\u6587\u6863\u4e2d`nzClickHide`\u7684\u9ed8\u8ba4\u503c [#408](https://github.com/NG-ZORRO/ng-zorro-antd/pull/408) [@zverbeta](https://github.com/zverbeta)\n\n## 0.5.3\n`2017-09-30`\n\n### Features\n* `DatePicker` \u652f\u6301\u4e86\u9009\u62e9\u6708\u4efd\u7684\u529f\u80fd [#397](https://github.com/NG-ZORRO/ng-zorro-antd/pull/397) [@Hsuan Lee](https://github.com/HsuanXyz)\n* `Select` \u652f\u6301Tab\u805a\u7126\u5e76\u53ef\u4ee5\u4f7f\u7528\u56de\u8f66\u548c\u5411\u4e0b\u952e\u5c55\u5f00 [#389](https://github.com/NG-ZORRO/ng-zorro-antd/pull/389) [@Hsuan Lee](https://github.com/HsuanXyz)\n* `Menu` \u589e\u52a0\u4e86 `Horizontal` \u548c `Inline` \u6a21\u5f0f\u4e0b\u7684\u9ad8\u5ea6\u52a8\u753b [#330](https://github.com/NG-ZORRO/ng-zorro-antd/pull/330) [@\u5218\u6653\u519b](https://github.com/Maroon1)\n* `Collapse` \u652f\u6301\u81ea\u5b9a\u4e49\u5934\u90e8\u5185\u5bb9 [#383](https://github.com/NG-ZORRO/ng-zorro-antd/pull/383) [@SangKa.Z](https://github.com/SangKa)\n* \u5728\u53d1\u5e03\u5305\u4e2d\u5bfc\u51fa\u4e86\u5168\u90e8 `Component` \u4fbf\u4e8e\u5f15\u7528 [#404](https://github.com/NG-ZORRO/ng-zorro-antd/pull/404)\n\n### Bug Fixes\n* `Table` \u4fee\u590d\u4e86 `nzIsPageIndexReset` \u9009\u9879\u7684\u95ee\u9898 [#372](https://github.com/NG-ZORRO/ng-zorro-antd/pull/372) [#373](https://github.com/NG-ZORRO/ng-zorro-antd/pull/373) Alche\n* \u4fee\u590d\u4e86\u5b98\u65b9\u7f51\u7ad9\u7684\u6027\u80fd\u95ee\u9898 [#403](https://github.com/NG-ZORRO/ng-zorro-antd/pull/403)\n\n### Docs\n* \u589e\u52a0\u4e86\u5bf9 `Input` \u4e2d `nzPlaceHolder` \u7684\u4f7f\u7528\u8bf4\u660e [#379](https://github.com/NG-ZORRO/ng-zorro-antd/pull/379) [@Liu, An-Chi](https://github.com/tigercosmos)\n\n## 0.5.2\n`2017-09-23`\n### Features\n* `Modal` \u589e\u52a0 `showConfirmLoading` \u9009\u9879\u6539\u53d8\u70b9\u51fb\u786e\u8ba4\u6309\u94ae\u65f6\u7684loading\u72b6\u6001 [#340](https://github.com/NG-ZORRO/ng-zorro-antd/pull/340) [@Alche](https://github.com/AlcheXie)\n* `Table` \u589e\u52a0\u786e\u5b9a\u6570\u636e\u53d8\u66f4\u540e\u662f\u5426\u4fdd\u7559\u5728\u6570\u636e\u53d8\u66f4\u524d\u7684\u9875\u7801\u7684\u9009\u9879 `nzIsPageIndexReset` [#348](https://github.com/NG-ZORRO/ng-zorro-antd/pull/348) [#359](https://github.com/NG-ZORRO/ng-zorro-antd/pull/359) [@Alche](https://github.com/AlcheXie)\n* `Select` \u589e\u52a0\u5728 `ngModel` \u5728 `undefined` \u65f6\u7684\u91cd\u7f6e\u903b\u8f91 [#363](https://github.com/NG-ZORRO/ng-zorro-antd/pull/363) \n\n### Bug Fixes\n* `Menu`\u4fee\u590d\u5728\u7279\u5b9a\u60c5\u51b5\u4e0b\u7684 `ExpressionChangedAfterItHasBeenCheckedError` \u95ee\u9898 [#368](https://github.com/NG-ZORRO/ng-zorro-antd/pull/368)\n* `Select` \u4fee\u590d\u5728 `Form` \u8868\u5355 `inline` \u72b6\u6001\u7684\u5bf9\u9f50\u95ee\u9898 [#362](https://github.com/NG-ZORRO/ng-zorro-antd/pull/362)\n* `Carousel` \u4fee\u590d\u5728 `nzAutoPlay` \u4e0b\u7684\u64ad\u653e\u95ee\u9898 [#347](https://github.com/NG-ZORRO/ng-zorro-antd/pull/347) [@Bin](https://github.com/soulhat)\n* `Cascader` \u4fee\u590d `label` \u663e\u793a\u53ca\u5728 `ReactiveForm` \u4e0b\u91cd\u7f6e\u7684\u95ee\u9898 [#335](https://github.com/NG-ZORRO/ng-zorro-antd/pull/335) [#336](https://github.com/NG-ZORRO/ng-zorro-antd/pull/336) [#356](https://github.com/NG-ZORRO/ng-zorro-antd/pull/356) [@fbchen](https://github.com/fbchen)\n* `Select` \u4fee\u590d\u5728\u540c\u6b65\u52a0\u8f7d\u6570\u636e\u60c5\u51b5\u7684\u663e\u793a\u95ee\u9898 [#338](https://github.com/NG-ZORRO/ng-zorro-antd/pull/338) [@Hsuan Lee](https://github.com/HsuanXyz)\n* `Table` \u4fee\u590d `nzWidth` \u4e0e `*ngIf` \u7ed3\u5408\u4f7f\u7528\u65f6\u5bbd\u5ea6\u9519\u4f4d\u7684\u95ee\u9898 [#349](https://github.com/NG-ZORRO/ng-zorro-antd/pull/349)\n* `Anchor` \u4fee\u590d\u70b9\u51fb\u65f6url\u6539\u53d8\u7684\u95ee\u9898 [#343](https://github.com/NG-ZORRO/ng-zorro-antd/pull/343) [@\u5361\u8272](https://github.com/cipchk)\n* \u4fee\u6539 `moment`\u7684\u6253\u5305\u65b9\u5f0f [#331](https://github.com/NG-ZORRO/ng-zorro-antd/pull/331) [@LinBo len](https://github.com/LinBoLen)\n\n### Docs\n* \u4fee\u6b63\u6587\u6863\u4e2dAngular\u5b98\u7f51\u7684\u6559\u7a0b\u5730\u5740 [#325](https://github.com/NG-ZORRO/ng-zorro-antd/pull/325) [@JuniorTour](https://github.com/JuniorTour)\n* \u589e\u52a0 plunker\u7684\u5728\u7ebf\u8fd0\u884c\u6a21\u677f[#357](https://github.com/NG-ZORRO/ng-zorro-antd/pull/357) [@Trotyl Yu](https://github.com/trotyl)\n\n### Other\n* `Badge` \u683c\u5f0f\u5316\u4e86template\u4ee3\u7801 [#314](https://github.com/NG-ZORRO/ng-zorro-antd/pull/314) [@Hsuan Lee](https://github.com/HsuanXyz)\n\n## 0.5.1\n`2017-09-16`\n\n### Features\n* `Menu`\u652f\u6301\u5b50\u83dc\u5355\u9009\u4e2d\u65f6\uff0c\u7236\u7ea7\u83dc\u5355\u9ad8\u4eae\u663e\u793a [#264](https://github.com/NG-ZORRO/ng-zorro-antd/pull/264) [HsuanXyz](https://github.com/HsuanXyz)\n\n### Bug Fixes\n* `Pagination`\u4fee\u590d`nzPageIndexChange`\u4e8b\u4ef6\u88ab\u591a\u6b21\u89e6\u53d1 [#281](https://github.com/NG-ZORRO/ng-zorro-antd/pull/281) [HsuanXyz](https://github.com/HsuanXyz)\n* `Pagination`\u4fee\u590d\u9f20\u6807\u53cc\u51fb\u65f6\uff0c\u5206\u9875\u6587\u672c\u88ab\u9009\u4e2d\u7684\u60c5\u51b5 [#268](https://github.com/NG-ZORRO/ng-zorro-antd/pull/268) [HsuanXyz](https://github.com/HsuanXyz)\n* `Input`\u4fee\u590d\u7c7b\u578b\u9519\u8bef\u63d0\u793a [#283](https://github.com/NG-ZORRO/ng-zorro-antd/pull/283) [deart1mer](https://github.com/deart1mer)\n* `Datepicker`\u4fee\u590d\u5e74\u9009\u62e9\u6846\u8303\u56f4\u9519\u8bef [#301](https://github.com/NG-ZORRO/ng-zorro-antd/pull/301) [giscafer](https://github.com/giscafer)\n* `\bLayout`\u4fee\u590d\u624b\u673a\u4e0b\u54cd\u5e94\u5f0f\u5e03\u5c40\u884c\u4e3a\u4e0d\u4e00\u81f4 [#299](https://github.com/NG-ZORRO/ng-zorro-antd/pull/299)\n\n### Docs\n* `DEMO:Badge`\u53c2\u6570\u4f7f\u7528\u9519\u8bef [#297](https://github.com/NG-ZORRO/ng-zorro-antd/pull/297) [HsuanXyz](https://github.com/HsuanXyz)\n* `DEMO:Select`\u79fb\u9664\u672a\u4f7f\u7528\u7684\u53d8\u91cf [#308](https://github.com/NG-ZORRO/ng-zorro-antd/pull/308) [tigercosmos](https://github.com/tigercosmos)\n* `DEMO:Select`\u589e\u52a0nzShowSearch\u7684\u8bf4\u660e [#279](https://github.com/NG-ZORRO/ng-zorro-antd/pull/279) [SangKa.Z](https://github.com/SangKa)\n\n## 0.5.0\n`2017-09-09`\n\n### Build\n* \u91cd\u5199\u4e86\u6253\u5305\u903b\u8f91\uff0c\u63d0\u4f9b\u4e86\u89c4\u8303\u7684package\u683c\u5f0f\uff0c\u517c\u5bb9\u4e86\u66f4\u591a\u6253\u5305\u5de5\u5177 [#240](https://github.com/NG-ZORRO/ng-zorro-antd/pull/240)  [Trotyl Yu](https://github.com/trotyl)\n\n### Features\n* `Table`\u652f\u6301\u53ef\u5c55\u5f00\u548c\u6811\u5f62\u6570\u636e\u5c55\u793a [#259](https://github.com/NG-ZORRO/ng-zorro-antd/pull/259)\n* `Table`\u652f\u6301\u56fa\u5b9a\u8868\u5934\uff0c\u81ea\u5b9a\u4e49\u7b5b\u9009\uff0c\u589e\u52a0\u8fdc\u7a0b\u6392\u5e8f\u3001\u8868\u683c\u884c\u5217\u6392\u5e8f\u3001\u53ef\u7f16\u8f91\u884c\u7b49DEMO [#210](https://github.com/NG-ZORRO/ng-zorro-antd/pull/210)\n* `Input`\u652f\u6301`nzReadOnly`\u5c5e\u6027 [#236](https://github.com/NG-ZORRO/ng-zorro-antd/pull/236) [SangKa.Z](https://github.com/SangKa)\n* `Input`\u652f\u6301`nzAutoResize`\u5c5e\u6027 [#251](https://github.com/NG-ZORRO/ng-zorro-antd/pull/251) [Hsuan Lee](https://github.com/HsuanXyz)\n* `Menu`\u652f\u6301\u7f29\u8d77\u5185\u5d4c\u83dc\u5355 [#225](https://github.com/NG-ZORRO/ng-zorro-antd/pull/225) [Hsuan Lee](https://github.com/HsuanXyz)\n* `Grid`\u4e2d`Col`\u652f\u6301\u5c5e\u6027\u5185\u5d4c [#247](https://github.com/NG-ZORRO/ng-zorro-antd/pull/247)\n\n### Bug Fixes\n* `Form`\u4fee\u590d\u4e86\u591a\u79cd\u7ec4\u4ef6\u5728\u8868\u5355\u4e2d\u4e0d\u5fc5\u8981\u7684Control\u89e6\u53d1\u903b\u8f91 [#257](https://github.com/NG-ZORRO/ng-zorro-antd/pull/257)\n* `CheckBox`\u4fee\u590d\u4e86\u5728safari\u4e2d\u7684\u9009\u4e2d\u95ee\u9898 [#256](https://github.com/NG-ZORRO/ng-zorro-antd/pull/256) [SangKa.Z](https://github.com/SangKa)\n* `Carousel`\u4fee\u590d\u4e86\u9ad8\u5ea6\u8ba1\u7b97\u7684\u95ee\u9898 [#242](https://github.com/NG-ZORRO/ng-zorro-antd/pull/242)\n* `DropdownButton`\u4fee\u590d\u4e86\u4e0b\u62c9\u83dc\u5355\u65e0\u6cd5\u9009\u4e2d\u7684\u95ee\u9898 [#237](https://github.com/NG-ZORRO/ng-zorro-antd/pull/237) [LongYinan](https://github.com/Brooooooklyn)\n* `Datepicker`\u4fee\u590d\u4e86\u4e0eReact\u7248\u672c\u987a\u5e8f\u4e0d\u4e00\u81f4\u7684\u95ee\u9898 [#243](https://github.com/NG-ZORRO/ng-zorro-antd/pull/243) [Nickbing Lao](https://github.com/giscafer)\n* `InputNumber`\u4fee\u590d\u4e86\u6570\u636e\u6821\u9a8c\u903b\u8f91 [#230](https://github.com/NG-ZORRO/ng-zorro-antd/pull/230)\n* `Cascader`\u4fee\u590d\u4e86\u5728`nzOptions`\u53d8\u5316\u65f6\u4e0d\u5237\u65b0\u7684\u95ee\u9898 [#221](https://github.com/NG-ZORRO/ng-zorro-antd/pull/221) [fbchen](https://github.com/fbchen)\n* `Form`\u4fee\u590d\u4e86\u591a\u79cd\u7ec4\u4ef6\u4e2d`setDisabledState`\u4e0d\u751f\u6548\u7684\u95ee\u9898 [#188](https://github.com/NG-ZORRO/ng-zorro-antd/pull/188) [Zhaoming Li](https://github.com/deart1mer)\n* `Select`,`Datepicker`,`Timepicker`\u4fee\u590d\u4e86\u5f53disable\u65f6\u4e0b\u62c9\u83dc\u5355\u4e0d\u6536\u8d77\u7684\u95ee\u9898 [#222](https://github.com/NG-ZORRO/ng-zorro-antd/pull/222) [Zhaoming Li](https://github.com/deart1mer)\n* `Select`, `Datepicker`, `Timepicker`, `Radio`, `Checkbox`, `InputNumber`\u4fee\u590d\u4e86`touched`\u72b6\u6001\u4e0d\u751f\u6548\u7684\u95ee\u9898 [#248](https://github.com/NG-ZORRO/ng-zorro-antd/pull/248) [Zhaoming Li](https://github.com/deart1mer)\n* `Input`\u4fee\u590d\u4e86`nzSize`\u4e0d\u751f\u6548\u7684\u95ee\u9898 [#209](https://github.com/NG-ZORRO/ng-zorro-antd/pull/209) [laobeiV5](https://github.com/gsbybb)\n* \u4fee\u6539\u4e86\u5bf9`DOCUMENT`\u7684\u9519\u8bef\u4f9d\u8d56 [#233](https://github.com/NG-ZORRO/ng-zorro-antd/pull/233) [Trotyl Yu](https://github.com/trotyl)\n\n### Refactor\n* \u5220\u9664\u4e86\u4e0d\u5fc5\u8981\u7684`@angular/cdk`\u4f9d\u8d56 [#241](https://github.com/NG-ZORRO/ng-zorro-antd/pull/241) [Trotyl Yu](https://github.com/trotyl)\n\n## 0.5.0-rc.4\n`2017-08-31`\n\n### Features\n* `Tooltip`,`Popconfirm`,`Popover`\u7ec4\u4ef6\u652f\u6301 OnPush [#143](https://github.com/NG-ZORRO/ng-zorro-antd/pull/143) [@csyszf](https://github.com/csyszf)\n* `Modal` \u63d0\u4f9b\u4e86 `open`,`close`,`setConfirmLoading`\u7684\u65b0\u65b9\u6cd5 [@giscafer](https://github.com/giscafer)\n\n### Bug Fixes\n* \u6307\u5b9a\u4e86 `@angular/cdk` \u7248\u672c\uff0c\u4fee\u590d\u56e0`@angular/cdk`\u4e0d\u517c\u5bb9\u5347\u7ea7\u5bfc\u81f4\u7684\u95ee\u9898\n* `Pagination` \u4fee\u590d\u4e86 `nzPageIndexChange` \u4e8b\u4ef6\u5728\u90e8\u5206\u60c5\u51b5\u4e0b\u4e0d\u89e6\u53d1\u7684\u95ee\u9898 [#189](https://github.com/NG-ZORRO/ng-zorro-antd/pull/189)\t[@SangKa](https://github.com/SangKa)\n\n### Refactor\n* `Dropdown` \u4e2d\u4f18\u5316\u4e86`rxjs`\u7684\u4f7f\u7528\u65b9\u5f0f [#148](https://github.com/NG-ZORRO/ng-zorro-antd/pull/148) [@Brooooooklyn](https://github.com/Brooooooklyn)\n* `Calendar` \u4e0d\u518d\u4f7f\u7528 ngOutletContext [#200](https://github.com/NG-ZORRO/ng-zorro-antd/pull/200)  [@chunghha](https://github.com/chunghha)\n\n### Doc\n* \u4fee\u6b63`Form`\u6837\u4f8b\u8bf4\u660e\u4e2d`nz-demo-form-dynamic` [#186](https://github.com/NG-ZORRO/ng-zorro-antd/pull/186)  [@thegatheringstorm](https://github.com/thegatheringstorm)\n* \u4fee\u6b63`Datapicker`\u6837\u4f8b\u4e2d\u4e8b\u4ef6\u8303\u56f4\u7684\u7981\u6b62\u9009\u62e9\u8303\u56f4 [#102](https://github.com/NG-ZORRO/ng-zorro-antd/pull/102) [@HsuanXyz](https://github.com/HsuanXyz)\n\n## 0.5.0-rc.3\n`2017-08-26`\n\n### Features\n* `nz-root`\u4e0d\u518d\u4f5c\u4e3a\u5fc5\u987b\u9879\u5f15\u5165\uff0c\u63d0\u4f9b\u4e86[\u65b0\u7684\u65b9\u6cd5](https://ng.ant.design/#/components/icon)\u914d\u7f6e\u672c\u5730\u5b57\u4f53\u6587\u4ef6\uff0c\u539f\u6709`nz-root`\u7684\u4f7f\u7528\u65b9\u5f0f\u7ee7\u7eed\u517c\u5bb9\uff0c\u4f46\u4e0d\u5efa\u8bae\u7ee7\u7eed\u4f7f\u7528 [#34](https://github.com/NG-ZORRO/ng-zorro-antd/issues/34) [@trotyl](https://github.com/trotyl)\n* \u589e\u52a0`BackTop`,`Anchor`,`Affix`,`Avatar`\u56db\u4e2a\u7ec4\u4ef6 [#88](https://github.com/NG-ZORRO/ng-zorro-antd/pull/88) [@cipchk](https://github.com/cipchk)\n\n### Bug Fixes\n* \u4fee\u590d`checkbox`class\u540d\u79f0\u4e22\u5931\u7684\u95ee\u9898 [#104](https://github.com/NG-ZORRO/ng-zorro-antd/issues/104)  [@giscafer](https://github.com/giscafer)\n* \u4fee\u590d`input`\u4e2d`touched`\u4e8b\u4ef6\u89e6\u53d1\u7684\u95ee\u9898 [#65](https://github.com/NG-ZORRO/ng-zorro-antd/issues/65) [#117](https://github.com/NG-ZORRO/ng-zorro-antd/issues/117)\n* \u4fee\u590d`select`\u4e2d\u6fc0\u6d3b`option`\u6837\u5f0f\u7684\u95ee\u9898 [#139](https://github.com/NG-ZORRO/ng-zorro-antd/issues/139) [@SangKa](https://github.com/SangKa)\n* \u4fee\u590d`pgaination`\u4e2d`nzPageIndex`\u53cc\u5411\u7ed1\u5b9a\u7684\u95ee\u9898 [#107](https://github.com/NG-ZORRO/ng-zorro-antd/issues/107)\n* \u4fee\u590d`select`\u5728`multiple`\u60c5\u51b5\u4e0b\u8868\u5355\u4e2dreset\u65f6\u7684\u95ee\u9898 [#128](https://github.com/NG-ZORRO/ng-zorro-antd/issues/128)\n* \u4fee\u590d`input`\u7684`disable`\u60c5\u51b5\u4e0b\u6837\u5f0f\u672a\u751f\u6548\u7684\u95ee\u9898 [#103](https://github.com/NG-ZORRO/ng-zorro-antd/issues/103) [@giscafer](https://github.com/giscafer)\n* \u4fee\u590d`carousel`\u4e2d\u81ea\u52a8\u64ad\u653e\u7684\u95ee\u9898 [#161](https://github.com/NG-ZORRO/ng-zorro-antd/issues/161)\n\n### Doc\n* \u6587\u6863\u9875\u9762\u5207\u6362\u8def\u7531\u65f6\u81ea\u52a8\u6eda\u52a8\u81f3\u9876\u90e8 [#26](https://github.com/NG-ZORRO/ng-zorro-antd/issues/26)\n\n## 0.5.0-rc.2\n`2017-08-19`\n\n### Features\n* `Input`\u7ec4\u4ef6\u589e\u52a0`nzBlur`\u548c`nzFocus`\u4e8b\u4ef6 [#73](https://github.com/NG-ZORRO/ng-zorro-antd/issues/73) [@giscafer](https://github.com/giscafer)\n\n### Bug Fixes\n* \u4fee\u590d`Steps`\u7ec4\u4ef6\u5728`Tabs`\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u65f6\u7684\u6837\u5f0fBUG [#83](https://github.com/NG-ZORRO/ng-zorro-antd/issues/83)\n* \u4fee\u590d`Pagination`\u4e0a\u4e00\u9875\u548c\u4e0b\u4e00\u9875\u6837\u5f0fBUG [#17](https://github.com/NG-ZORRO/ng-zorro-antd/issues/17)\n* \u4fee\u590d`Menu`\u7ec4\u4ef6\u5728\u61d2\u52a0\u8f7d\u6a21\u5757\u4e2d\u4e0e`routerLinkActive`\u51b2\u7a81\u7684BUG [#52](https://github.com/NG-ZORRO/ng-zorro-antd/issues/52)\n* \u4fee\u590d`Menu`\u7ec4\u4ef6\u5728`Layout`\u6536\u8d77\u72b6\u6001\u4e0b\u6837\u5f0f\u9519\u8bef\u7684BUG [#35](https://github.com/NG-ZORRO/ng-zorro-antd/issues/35) [#74](https://github.com/NG-ZORRO/ng-zorro-antd/issues/74)\n* \u4fee\u590d`Timeline`\u7ec4\u4ef6\u4f7f\u7528`ngFor`\u6e32\u67d3\u65f6\u7684BUG [#66](https://github.com/NG-ZORRO/ng-zorro-antd/issues/66) [@SangKa](https://github.com/SangKa)\n* \u4fee\u590d`Carousel`\u7ec4\u4ef6\u5185\u5bb9\u52a8\u6001\u6539\u53d8\u65f6\u7684BUG [#56](https://github.com/NG-ZORRO/ng-zorro-antd/issues/56)\n* \u4fee\u590d`Pagination`\u4e2d\u5feb\u901f\u8df3\u8f6c\u65f6\u9996\u9875\u548c\u5c3e\u9875\u4e0d\u4f1a\u9ad8\u4eae\u7684BUG [#37](https://github.com/NG-ZORRO/ng-zorro-antd/issues/37) [@HsuanXyz](https://github.com/HsuanXyz)\n* \u4fee\u590d\u5b89\u88c5\u65f6`package.json`\u6587\u4ef6\u5b9a\u4e49\u5bfc\u81f4\u7684Angular\u7248\u672c\u51b2\u7a81\u95ee\u9898 [#23](https://github.com/NG-ZORRO/ng-zorro-antd/issues/23)\n* \u4fee\u6b63\u6587\u6863\u4e2d\u591a\u5904\u9519\u8bef [@SangKa](https://github.com/SangKa)\n\n### Performance Improvements\n* \u4fee\u6539\u4e86`rxjs`\u7684\u5f15\u5165\u65b9\u5f0f [#29](https://github.com/NG-ZORRO/ng-zorro-antd/pull/29) [@trotyl](https://github.com/trotyl)\n\n### Other\n* \u4fee\u6b63\u4e86`HostBinding`\u7684\u4f7f\u7528\u65b9\u5f0f [#19](https://github.com/NG-ZORRO/ng-zorro-antd/pull/19) [@trotyl](https://github.com/trotyl)\n\n## 0.5.0-rc.0\n`2017-08-15`\n\n### Features\n* \u5bf9\u5916\u7b2c\u4e00\u4e2a\u7248\u672c\uff0c\u6682\u65f6\u79fb\u9664\u4e86\u4e0d\u7a33\u5b9a\u548c\u5f3a\u4f9d\u8d56\u7684\u7ec4\u4ef6\u90e8\u5206\uff0c\u540e\u7eed\u5355\u72ec\u53d1\u5e03\n* \u65b0\u589e `Cascader`\u548c `Tag`\u7ec4\u4ef6\uff0c\u611f\u8c22fbchen\n* Select\u589e\u52a0\u4e86nzFilter\u5c5e\u6027\n* \u540c\u6b65Ant Design\u6837\u5f0f\u81f3`2.12.5`\u7248\u672c\n* \u5168\u7ad9\u4fee\u6539\u4e3aLazyLoad\n* \u8c03\u6574\u90e8\u5206\u6587\u4ef6\u5939\u540d\u79f0\n* \u8c03\u6574\u4e86\u5feb\u901f\u4e0a\u624b\u7b49\u90e8\u5206\u7684\u8bf4\u660e\n\n### THANK YOU\n\n\u611f\u8c22\u6240\u6709\u53c2\u4e0e\u8005\u7684\u8d21\u732e\n\nVTHINKXIE, Wilson Zeng, chensimeng, zjgzx1988, SunMing, fbchen, Trotyl Yu, \u96ea\u72fc, afc163, xufei, lightningtgc\n\n## 0.4.0\n`2017-07-20`\n\n### Features\n* `Select`,`DropDown`,`TimePicker`,`DatePicker`\u4e0b\u62c9\u83dc\u5355\u6539\u4e3aabsolute\u5e03\u5c40\uff0c\u4e0d\u518d\u53d7\u7236\u5143\u7d20overflow\u9650\u5236\n* `Select`,`DropDown`,`TimePicker`,`DatePicker`,`ContextMenu`\u4e0b\u62c9\u83dc\u5355\u4f4d\u7f6e\u8ddf\u968f\u89c6\u7a97\u8fb9\u754c\u81ea\u52a8\u5207\u6362\n* `Select` \u589e\u52a0nzMode\u65b9\u6cd5\n* `Modal`\u589e\u52a0`zIndex`\u9009\u9879\u7528\u4e8e\u914d\u7f6e\u591a\u7a97\u53e3\u65f6\u663e\u793a\u6b21\u5e8f\n* `Alert`\u589e\u52a0\u5173\u95ed\u65f6\u52a8\u753b\u6548\u679c\n* `Tooltip`\u7ec4\u4ef6\u52a0\u5165\n\n### Break Changes\n* `nz-table-sort`\u4fee\u590dascend\u548cdescend\u8bed\u4e49\u9519\u8bef\n* `Select`\u4e2dnz-option\u4fee\u6b63\u8f93\u5165\u8bed\u4e49\uff0cnzValue->nzLabel,nzKey->nzValue\n* `Tabs`\u7ec4\u4ef6\u91cd\u6784\uff0c\u4f7f\u7528\u65b9\u6cd5\u6539\u53d8\uff0c\u5177\u4f53\u89c1\u7ec4\u4ef6\u9875\u9762\u4ecb\u7ecd\n* `Select`\u7ec4\u4ef6\u4e0d\u518d\u652f\u6301\u4f4d\u7f6e\u9009\u9879\uff0c\u6539\u4e3a\u81ea\u52a8\u5e03\u5c40\n* `Popover`\u548c`Popconfirm`\u548c`DropDown`\u91cd\u6784\uff0c\u4f7f\u7528\u65b9\u6cd5\u6539\u53d8\uff0c\u5177\u4f53\u7ec4\u4ef6\u9875\u9762\u4ecb\u7ecd\n* \u6839Module\u7ec4\u4ef6\u9700\u8981\u4f7f\u7528` NgZorroAntdModule.forRoot()`\u65b9\u6cd5\uff0c\u4e0d\u518d\u9700\u8981\u624b\u52a8\u5728`Providers`\u4e2d\u52a0\u5165`  NzContextMenuService,NzMessageService,NzNotificationService`\n\n\n\n## 0.3.4\n`2017-06-27`\n\n### Features\n* `Popover`\u5361\u7247\u5185\u5bb9\uff1a\u589e\u52a0\u5bf9\u539f\u751fDOM HTMLElement\u5f15\u7528\u7684\u652f\u6301\n\n### Bug Fixes\n* `Popover`\u4fee\u590dremoveChild\u79fb\u9664\u4e0d\u5b58\u5728\u5143\u7d20\u65f6\u62a5\u9519\u7684\u95ee\u9898\n\n\n## 0.3.3\n`2017-06-10`\n\n### Features\n* `Select`\u7ec4\u4ef6\u652f\u6301\u4f4d\u7f6e\u9009\u9879\n* `ContextMenu`\u53f3\u952e\u83dc\u5355\u7ec4\u4ef6\u4f4d\u7f6e\u81ea\u52a8\u8c03\u6574\n* `Checkbox Group`\u7ec4\u4ef6\u652f\u6301nzDisable\u5c5e\u6027\n* `Directory`\u7ec4\u4ef6\u52a8\u753b\u65f6\u95f4\u8c03\u6574\n\n\n### Bug Fixes\n* `Table`\u7ec4\u4ef6PageSizeChange\u5c5e\u6027\u5728ViewInit\u4e4b\u524d\u4e0d\u518d\u4f1a\u88ab\u89e6\u53d1\n* `Tabs`\u4fee\u590d\u7ec4\u4ef6\u4f7f\u7528NgIf\u521d\u59cb\u5316\u65f6Change After View Check\u7684bug\n\n\n## 0.3.2\n\n`2017-05-26`\n\n### Features\n* \u589e\u52a0`Slider`\u7ec4\u4ef6\uff0c\u611f\u8c22 @\u51cc\u4ea6 \u63d0\u4f9b\n* `Graph`\u7ec4\u4ef6\u652f\u6301`ForeignObject`\u81ea\u52a8\u8ba1\u7b97\u9ad8\u5ea6\n* `Monaco Editor`\u7ec4\u4ef6\u652f\u6301\u52a8\u6001\u8c03\u6574\u5b57\u4f53\u3001\u4e3b\u9898\u3001\u6362\u884c\u7b49\u9009\u9879\n\n### Bug Fixes\n* \u4fee\u590d`Input`\u7ec4\u4ef6\u9996\u6b21\u4f20\u503c\u662f\u8c03\u7528`OnChanges`\u7684Bug\n* \u4fee\u590d`Dir`\u7ec4\u4ef6Focus\u6837\u5f0f\u7684Bug\n* \u4fee\u590d`DropDown`\u7ec4\u4ef6\u5728\u9996\u9875\u4f7f\u7528\u65f6\u7684Bug\n\n## 0.3.1-beta.0\n\n`2017-05-11`\n\n### Features\n* \u589e\u52a0`G2`\u56fe\u8868\u7ec4\u4ef6\n* \u589e\u52a0`Carousel`\u7ec4\u4ef6\n* \u589e\u52a0`Card`\u7ec4\u4ef6\n* `Menu`\u7ec4\u4ef6\u589e\u52a0`nzClickActive`\u5c5e\u6027\n* `Select`\u7ec4\u4ef6\u589e\u52a0\u8fdc\u7a0b\u641c\u7d22\u793a\u4f8b\n\n### Bug Fixes\n* \u4fee\u590d`Menu`\u5728disable\u72b6\u6001\u4e0b\u70b9\u51fb\u6837\u5f0f\uff0c\u4fee\u590d\u5b50\u83dc\u5355\u70b9\u51fb\u6536\u8d77\u7684bug\n* \u4fee\u590d`Steps`\u7ec4\u4ef6\u6837\u5f0fbug\n* \u4fee\u590d`Select`\u591a\u9009\u72b6\u6001\u4e0b\u521d\u59cb\u5316\u6570\u636e\u52a8\u753b\u6548\u679c\uff0c\u652f\u6301\u66f4\u591a\u5f02\u6b65\u52a0\u8f7d\u73af\u5883\n\n## 0.3.0\n\n`2017-05-09`\n\n### Features\n* \u4e0e`ant design 2.9.3`\u540c\u6b65\u6837\u5f0f\n* \u65b0\u589e`Layout`\u7ec4\u4ef6\n* \u65b0\u589e`Menu`\u7ec4\u4ef6\n* \u65b0\u589e`Dropdown`\u7ec4\u4ef6\n* \u65b0\u589e`Breadcrumb`\u7ec4\u4ef6\n* `Button`\u65b0\u589e`Danger`\u6309\u94ae\uff0c\u6539\u53d8`Ghost\u6309\u94ae`\u7684\u4f7f\u7528\u65b9\u5f0f\n* `Col`\u4fee\u6539`gutter`\u751f\u6548\u903b\u8f91\uff0c\u4ec5\u5f53\u7236\u8282\u70b9`Row`\u8bbe\u7f6e`gutter`\u540e\u751f\u6548\n* `Input`\u65b0\u589e`search`\u7c7b\u578b\uff0c\u589e\u52a0`prefix`\u4e0e`suffix`\u6807\u7b7e\u529f\u80fd\n* `Checkbox`\u589e\u52a0`nzIndeterminate`\u5c5e\u6027\n* `Badge`\u7ec4\u4ef6\u91cd\u5199\uff0c\u589e\u52a0\u72b6\u6001\u70b9\u529f\u80fd\n* `Calendar`\u7ec4\u4ef6\u589e\u52a0\u81ea\u5b9a\u4e49\u6e32\u67d3\u6570\u636e\u529f\u80fd\n\n### BREAKING CHANGES\n* \u6839\u7ec4\u4ef6\u5fc5\u987b\u52a0\u5165`nz-root`\u6807\u7b7e\uff0c\u4e0d\u518d\u9700\u8981\u624b\u52a8\u5f15\u5165`iconfont.css`\u6587\u4ef6\uff0c\u52a0\u5165`nz-root`\u540e\u4e0d\u518d\u5fc5\u987b\u5f15\u5165`nz-notifications`\u3001`nz-messages`\u548c`nz-context-menu`\u63d2\u5ea7\n* `Input`\u7ec4\u4ef6\u524d\u7f6e/\u540e\u7f6e\u6807\u7b7e\u4f7f\u7528\u65b9\u5f0f\u4fee\u6539\uff0c\u53c2\u7167\u6700\u65b0Demo\n* `Badge`\u7ec4\u4ef6\u5305\u542b\u6570\u636e\u65b9\u5f0f\u4fee\u6539\uff0c\u53c2\u7167\u6700\u65b0Demo\n\n\n## 0.2.0\n\n`2017-04-24`\n\n### BREAKING CHANGES\n* \u5347\u7ea7\u5230Angular `4.0`\u7248\u672c\uff0c\u5982\u679c\u8981\u4f7f\u7528Angular`2.x`\u8bf7\u4f7f\u7528`0.2.0`\u4e4b\u524d\u7684\u7248\u672c\n* \u4fee\u6539\u4e86`nz-ace`\u4e0e`nz-monaco-editor`\u7684\u5f15\u5165\u65b9\u6cd5\n* \u4fee\u6539`nzModalSubject`\u7684\u540d\u79f0\u4e3a`NzModalSubject`\uff0c\u89c4\u8303\u4e86\u6240\u6709component\u7684\u547d\u540d\u65b9\u5f0f\n\n## 0.1.9\n\n`2017-04-20`\n\n* \u589e\u52a0iconfont\u6587\u4ef6\u5f15\u5165\u8bf4\u660e\n* \u589e\u52a0`nz-dir`\u7ec4\u4ef6\u7684\u66ff\u6362\u6a21\u677f\u529f\u80fd\n\n## 0.1.8\n\n`2017-03-24`\n\n* \u4fee\u6539\u53d1\u5e03\u903b\u8f91\uff0c\u5f53\u524dnpm\u53d1\u5e03\u5305\u4e0d\u518d\u5305\u542bless\u6587\u4ef6\n* \u589e\u52a0`nz-graph`\u7ec4\u4ef6\u7684\u7f16\u8f91\u529f\u80fd\n\n## 0.1.7\n\n`2017-03-21`\n\n* \u589e\u52a0`nz-graph`\u7ec4\u4ef6\uff0c\u589e\u52a0\u590d\u6742\u56fe\u663e\u793a\u6a21\u5757\n* \u4fee\u590d\u90e8\u5206bug\n\n\n## 0.1.6\n\n`2017-03-08`\n\n* \u4fee\u590d\u4e86`select`\u7ec4\u4ef6\uff0c\u5728\u591a\u9009\u72b6\u6001\u4e0bEnter\u952e\u5165\u7684bug\n* \u79fb\u9664\u4e86\u90e8\u5206\u4e0d\u5fc5\u8981\u7684\u5f15\u5165\n\n## 0.1.5\n\n`2017-03-07`\n\n* \u65b0\u589e\u4e86`nz-dir`\u7ec4\u4ef6\uff0c\u7528\u4e8e\u8fdb\u884c\u6587\u4ef6\u548c\u6587\u4ef6\u5939\u7ba1\u7406\n* \u4fee\u590d\u4e86`nz-dir`\u7ec4\u4ef6\u6837\u5f0fbug\n\n## 0.1.3\n\n`2017-02-26`\n\n* \u4fee\u590d`nz-input-number`\u5728\u975efocus\u65f6\u7684\u6821\u9a8c\n* \u914d\u5408`@angular/cli`\u81f3`1.0.0-rc0`\uff0c\u5347\u7ea7\u6b65\u9aa4\u89c1`https://github.com/angular/angular-cli/blob/master/CHANGELOG.md`\n\n## 0.1.1\n\n`2017-02-15`\n\n* `modal-confirm`\u4e2d\u589e\u52a0maskCloseable\u9009\u9879\n* \u589e\u52a0`context-menu`\u5728LazyLoad\u4e2d\u7684\u4f7f\u7528\u89c4\u8303\n* \u589e\u52a0`nz-message`\u5728LazyLoad\u4e2d\u7684\u4f7f\u7528\u89c4\u8303\n* \u589e\u52a0`nz-notification`\u5728LazyLoad\u4e2d\u7684\u4f7f\u7528\u89c4\u8303\n\n## 0.1.0\n\n`2017-02-13`\n\n* \u5b8c\u5584monaco-editor\u7ec4\u4ef6\n* \u517c\u5bb9`@angular/cli`\u5230`1.0.0@beta.31`\n\n## 0.0.9\n\n`2017-02-08`\n\n* \u6dfb\u52a0monaco-editor\u7ec4\u4ef6\n* \u4fee\u6539nz-steps\u6587\u4ef6\uff0c\u517c\u5bb9webpack\u6253\u5305\u65b9\u5f0f\n\n## 0.0.8\n\n`2017-02-06`\n\n* \u517c\u5bb9\u81f3angular`2.4.6`\u7248\u672c\n* @angular/cli\u4ee3\u66ffangular-cli\n* \u652f\u6301LazyLoad\u548cPreLoad\u65b9\u5f0f\u52a0\u8f7d\n* \u4fee\u590dpopover\u53capopconfirm\u57282.4.6\u4e0btypescript\u652f\u6301bug\n\n## 0.0.7\n\n`2017-01-17`\n\n* \u4fee\u590dTabs\u6807\u7b7e\u9875\u7ec4\u4ef6\n\n## 0.0.6\n\n`2017-01-16`\n\n* \u517c\u5bb9angular 2.4.3\n* \u517c\u5bb9angular-cli@@1.0.0-beta.25.5\n* \u4fee\u590dwebpack raw loader\n\n## 0.0.5\n\n`2017-01-12`\n\n* \u589e\u52a0Steps\u7ec4\u4ef6\n* \u4fee\u590dProgress\u7ec4\u4ef6\n\n## 0.0.4\n\n`2017-01-12`\n\n* \u4fee\u590dbutton group\u5c55\u793a\u95ee\u9898\n* \u589e\u52a0Progress\u7ec4\u4ef6\n* iconfont\u76ee\u5f55\u5207\u6362\u81f3\u672c\u5730\n\n\n## 0.0.3\n\n`2017-01-11`\n\n* \u4e0e[ant.design 2.6.0](http://antd.alipay.net/changelog-cn#2.6.0)\u540c\u6b65UI\u6837\u5f0f\n* \u91cd\u5199DEMO\u7ad9\u70b9\u6837\u5f0f\n\n## 0.0.2\n\n`2016-12-25`\n\n* \u542f\u7528angular-cli\u4f5c\u4e3a\u9ed8\u8ba4\u811a\u624b\u67b6\u5de5\u5177\n* \u652f\u6301AoT\u7f16\u8bd1\n* \u52a0\u5165\u5355\u5143\u6d4b\u8bd5\n* \u52a0\u5165protractor e2e\u6d4b\u8bd5\n\n## 0.0.1\n\n`2016-12-08`\n\n* \u4eceNAZA-UI\u8fc1\u79fb\u6210\u529f\n"},sZjz:function(n,t,o){"use strict";function u(n){return r._34(0,[(n()(),r._10(0,0,null,null,1,"nz-markdown",[],null,null,null,c.b,c.a)),r._9(1,4308992,null,0,p.a,[r.l],{nzContent:[0,"nzContent"]},null),(n()(),r._32(-1,null,["\n"]))],function(n,t){n(t,1,0,t.component._markdownCode)},null)}Object.defineProperty(t,"__esModule",{value:!0});var r=o("LMZF"),e=(o("6Xbx"),function(){return function(){this._markdownCode=o("h73v")}}()),a=o("jlvU"),h=o("1n7c"),s=o("Un6q"),g=o("UHIZ"),i=function(){},l=function(){},c=o("DQNQ"),p=o("AXbG"),m=r._8({encapsulation:2,styles:[],data:{}}),b=r._6("nz-intro-changelog",e,function(n){return r._34(0,[(n()(),r._10(0,0,null,null,1,"nz-intro-changelog",[],null,null,null,u,m)),r._9(1,49152,null,0,e,[],null,null)],null,null)},{},{},[]);o.d(t,"NzIntroChangeLogModuleNgFactory",function(){return R});var R=r._7(l,[],function(n){return r._21([r._22(512,r.k,r._2,[[8,[b]],[3,r.k],r.z]),r._22(4608,s.n,s.m,[r.w,[2,s.v]]),r._22(512,s.c,s.c,[]),r._22(512,a.a,a.a,[]),r._22(512,g.o,g.o,[[2,g.t],[2,g.l]]),r._22(512,i,i,[]),r._22(512,h.a,h.a,[]),r._22(512,l,l,[]),r._22(1024,g.j,function(){return[[{path:"",component:e}]]},[])])})}});