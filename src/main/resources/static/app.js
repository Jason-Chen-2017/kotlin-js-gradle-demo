if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'app'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'app'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'app'.");
}
var app = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var toString = Kotlin.toString;
  var Unit = Kotlin.kotlin.Unit;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var th = $module$kotlinx_html_js.kotlinx.html.th_bncpyi$;
  var tr = $module$kotlinx_html_js.kotlinx.html.tr_lut1f9$;
  var thead = $module$kotlinx_html_js.kotlinx.html.thead_j1nulr$;
  var td = $module$kotlinx_html_js.kotlinx.html.td_vlzo05$;
  var tr_0 = $module$kotlinx_html_js.kotlinx.html.tr_tlv0jx$;
  var tbody = $module$kotlinx_html_js.kotlinx.html.tbody_cbte6n$;
  var table = $module$kotlinx_html_js.kotlinx.html.table_dmqmme$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var li = $module$kotlinx_html_js.kotlinx.html.li_yzv5uh$;
  var ul = $module$kotlinx_html_js.kotlinx.html.ul_pzlyaf$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  function App() {
  }
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: []
  };
  function say() {
    println('Hello,World');
  }
  function getDate(n) {
    var d = new Date();
    var ntime = d.getTime() + (((n * 24 | 0) * 3600 | 0) * 1000 | 0);
    return new Date(ntime);
  }
  function renderTitle() {
    var e = document.getElementById('title');
    e != null ? (e.innerHTML = trimIndent('\n        <h1>Kotlin VS. JavaScript<\/h1>\n    ')) : null;
  }
  function main(args) {
    say();
    getDate(2);
    renderTitle();
    (new UserList()).users();
    (new BookList()).books();
  }
  function BookList() {
  }
  function BookList$books$lambda(closure$request) {
    return function (it) {
      println(toString(it.currentTarget));
      var readyState = closure$request.readyState;
      println('readyState=' + readyState);
      if (readyState === 4) {
        if (closure$request.status === 200) {
          var responseText = closure$request.responseText;
          var data = JSON.parse(responseText);
          println(data);
        }
         else {
          println(closure$request.status);
        }
      }
       else {
        println('HTTP\u8BF7\u6C42\u8FD8\u5728\u7EE7\u7EED...');
      }
      return Unit;
    };
  }
  BookList.prototype.books = function () {
    var data = ['Kotlin \u6781\u7B80\u6559\u7A0B', 'Spring Boot \u5F00\u53D1\u5B9E\u6218', 'Kotlin \u4ECE\u5165\u95E8\u5230\u8FDB\u9636\u5B9E\u6218'];
    this.renderBooks_0(data);
    var request = new XMLHttpRequest();
    request.onreadystatechange = BookList$books$lambda(request);
    request.open('GET', '/book/list.json', true);
    request.send();
  };
  function BookList$renderBooks$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('ID');
    return Unit;
  }
  function BookList$renderBooks$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Name');
    return Unit;
  }
  function BookList$renderBooks$lambda$lambda$lambda$lambda($receiver) {
    th($receiver, void 0, void 0, BookList$renderBooks$lambda$lambda$lambda$lambda$lambda);
    th($receiver, void 0, void 0, BookList$renderBooks$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function BookList$renderBooks$lambda$lambda$lambda($receiver) {
    tr($receiver, void 0, BookList$renderBooks$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function BookList$renderBooks$lambda$lambda$lambda$lambda$lambda$lambda(closure$index) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$index.toString());
      return Unit;
    };
  }
  function BookList$renderBooks$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$s) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$s);
      return Unit;
    };
  }
  function BookList$renderBooks$lambda$lambda$lambda$lambda$lambda_1(closure$index, closure$s) {
    return function ($receiver) {
      td($receiver, void 0, BookList$renderBooks$lambda$lambda$lambda$lambda$lambda$lambda(closure$index));
      td($receiver, void 0, BookList$renderBooks$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$s));
      return Unit;
    };
  }
  function BookList$renderBooks$lambda$lambda$lambda_0(closure$data) {
    return function ($receiver) {
      var $receiver_0 = closure$data;
      var tmp$, tmp$_0;
      var index = 0;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        tr_0($receiver, void 0, BookList$renderBooks$lambda$lambda$lambda$lambda$lambda_1((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0), item));
      }
      return Unit;
    };
  }
  function BookList$renderBooks$lambda$lambda(closure$data) {
    return function ($receiver) {
      thead($receiver, void 0, BookList$renderBooks$lambda$lambda$lambda);
      tbody($receiver, void 0, BookList$renderBooks$lambda$lambda$lambda_0(closure$data));
      return Unit;
    };
  }
  function BookList$renderBooks$lambda(closure$data) {
    return function ($receiver) {
      table($receiver, 'table table-hover', BookList$renderBooks$lambda$lambda(closure$data));
      return Unit;
    };
  }
  BookList.prototype.renderBooks_0 = function (data) {
    var tmp$;
    var books = div(get_create(document), 'books', BookList$renderBooks$lambda(data));
    (tmp$ = document.getElementById('books')) != null ? tmp$.appendChild(books) : null;
  };
  BookList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BookList',
    interfaces: []
  };
  function UserList() {
    this.data_0 = listOf(['Java', 'Kotlin', 'JavaScript', 'Groovy']);
  }
  function UserList$users$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$it);
      return Unit;
    };
  }
  function UserList$users$lambda$lambda(this$UserList) {
    return function ($receiver) {
      var tmp$;
      tmp$ = this$UserList.data_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        println(element);
        li($receiver, 'li', UserList$users$lambda$lambda$lambda$lambda(element));
      }
      return Unit;
    };
  }
  function UserList$users$lambda(this$UserList) {
    return function ($receiver) {
      ul($receiver, void 0, UserList$users$lambda$lambda(this$UserList));
      return Unit;
    };
  }
  UserList.prototype.users = function () {
    var tmp$;
    var users = div(get_create(document), 'users', UserList$users$lambda(this));
    (tmp$ = document.getElementById('users')) != null ? tmp$.appendChild(users) : null;
  };
  UserList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserList',
    interfaces: []
  };
  var package$demo = _.demo || (_.demo = {});
  package$demo.App = App;
  package$demo.say = say;
  package$demo.getDate_za3lpa$ = getDate;
  package$demo.renderTitle = renderTitle;
  package$demo.main_kand9s$ = main;
  package$demo.BookList = BookList;
  package$demo.UserList = UserList;
  main([]);
  Kotlin.defineModule('app', _);
  return _;
}(typeof app === 'undefined' ? {} : app, kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=app.js.map
