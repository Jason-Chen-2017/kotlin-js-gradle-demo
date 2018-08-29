if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'app'.");
}
var app = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  function say() {
    println('Hello,World');
  }
  function getDate(n) {
    var d = new Date();
    var ntime = d.getTime() + (((n * 24 | 0) * 3600 | 0) * 1000 | 0);
    return new Date(ntime);
  }
  function renderTable() {
    var e = document.getElementById('title');
    e != null ? (e.innerHTML = trimIndent('\n        <h1>Kotlin VS. JavaScript<\/h1>\n    ')) : null;
  }
  function main(args) {
    say();
    getDate(2);
    renderTable();
  }
  var package$demo = _.demo || (_.demo = {});
  package$demo.say = say;
  package$demo.getDate_za3lpa$ = getDate;
  package$demo.renderTable = renderTable;
  package$demo.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('app', _);
  return _;
}(typeof app === 'undefined' ? {} : app, kotlin);

//# sourceMappingURL=app.js.map
