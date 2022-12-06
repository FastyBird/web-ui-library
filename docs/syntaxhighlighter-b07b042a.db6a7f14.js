var ne = Object.defineProperty;
var n = (r, a) => ne(r, "name", { value: a, configurable: !0 });
import { Z as wr, _ as $r, $ as oe, a0 as le, a1 as xr, j as Q, a2 as ie, a3 as se, r as ea, a4 as ce, b as kr, a5 as ve, a6 as ue } from "./iframe.f8011b09.js";
import "./es.string.from-code-point.ba06b949.js";
import "./es.regexp.flags.133c865a.js";
import "vue";
function pe(r, a, e) {
  return a in r ? Object.defineProperty(r, a, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[a] = e, r;
}
n(pe, "_defineProperty2");
function qa(r, a) {
  return me(r) || fe(r, a) || ge(r, a) || de();
}
n(qa, "_slicedToArray");
function de() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
n(de, "_nonIterableRest");
function ge(r, a) {
  if (!!r) {
    if (typeof r == "string")
      return ta(r, a);
    var e = Object.prototype.toString.call(r).slice(8, -1);
    if (e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set")
      return Array.from(r);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return ta(r, a);
  }
}
n(ge, "_unsupportedIterableToArray2");
function ta(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, t = new Array(a); e < a; e++)
    t[e] = r[e];
  return t;
}
n(ta, "_arrayLikeToArray2");
function fe(r, a) {
  var e = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (e != null) {
    var t = [], l = !0, c = !1, d, i;
    try {
      for (e = e.call(r); !(l = (d = e.next()).done) && (t.push(d.value), !(a && t.length === a)); l = !0)
        ;
    } catch (m) {
      c = !0, i = m;
    } finally {
      try {
        !l && e.return != null && e.return();
      } finally {
        if (c)
          throw i;
      }
    }
    return t;
  }
}
n(fe, "_iterableToArrayLimit");
function me(r) {
  if (Array.isArray(r))
    return r;
}
n(me, "_arrayWithHoles");
function J(r) {
  return J = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, J(r);
}
n(J, "_typeof");
var Aa = Dr;
Dr.displayName = "jsx";
Dr.aliases = [];
function Dr(r) {
  (function(a) {
    var e = a.util.clone(a.languages.javascript), t = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, l = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, c = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
    function d(S, h) {
      return S = S.replace(/<S>/g, function() {
        return t;
      }).replace(/<BRACES>/g, function() {
        return l;
      }).replace(/<SPREAD>/g, function() {
        return c;
      }), RegExp(S, h);
    }
    n(d, "re"), c = d(c).source, a.languages.jsx = a.languages.extend("markup", e), a.languages.jsx.tag.pattern = d(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), a.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, a.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, a.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, a.languages.jsx.tag.inside.comment = e.comment, a.languages.insertBefore("inside", "attr-name", {
      spread: {
        pattern: d(/<SPREAD>/.source),
        inside: a.languages.jsx
      }
    }, a.languages.jsx.tag), a.languages.insertBefore("inside", "special-attr", {
      script: {
        pattern: d(/=<BRACES>/.source),
        alias: "language-javascript",
        inside: {
          "script-punctuation": {
            pattern: /^=(?=\{)/,
            alias: "punctuation"
          },
          rest: a.languages.jsx
        }
      }
    }, a.languages.jsx.tag);
    var i = /* @__PURE__ */ n(function S(h) {
      return h ? typeof h == "string" ? h : typeof h.content == "string" ? h.content : h.content.map(S).join("") : "";
    }, "stringifyToken"), m = /* @__PURE__ */ n(function S(h) {
      for (var g = [], b = 0; b < h.length; b++) {
        var y = h[b], N = !1;
        if (typeof y != "string" && (y.type === "tag" && y.content[0] && y.content[0].type === "tag" ? y.content[0].content[0].content === "</" ? g.length > 0 && g[g.length - 1].tagName === i(y.content[0].content[1]) && g.pop() : y.content[y.content.length - 1].content === "/>" || g.push({
          tagName: i(y.content[0].content[1]),
          openedBraces: 0
        }) : g.length > 0 && y.type === "punctuation" && y.content === "{" ? g[g.length - 1].openedBraces++ : g.length > 0 && g[g.length - 1].openedBraces > 0 && y.type === "punctuation" && y.content === "}" ? g[g.length - 1].openedBraces-- : N = !0), (N || typeof y == "string") && g.length > 0 && g[g.length - 1].openedBraces === 0) {
          var E = i(y);
          b < h.length - 1 && (typeof h[b + 1] == "string" || h[b + 1].type === "plain-text") && (E += i(h[b + 1]), h.splice(b + 1, 1)), b > 0 && (typeof h[b - 1] == "string" || h[b - 1].type === "plain-text") && (E = i(h[b - 1]) + E, h.splice(b - 1, 1), b--), h[b] = new a.Token("plain-text", E, null, E);
        }
        y.content && typeof y.content != "string" && S(y.content);
      }
    }, "walkTokens");
    a.hooks.add("after-tokenize", function(S) {
      S.language !== "jsx" && S.language !== "tsx" || m(S.tokens);
    });
  })(r);
}
n(Dr, "jsx");
var he = Aa, be = Cr;
Cr.displayName = "bash";
Cr.aliases = ["shell"];
function Cr(r) {
  (function(a) {
    var e = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", t = {
      pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
      lookbehind: !0,
      alias: "punctuation",
      inside: null
    }, l = {
      bash: t,
      environment: {
        pattern: RegExp("\\$" + e),
        alias: "constant"
      },
      variable: [
        {
          pattern: /\$?\(\([\s\S]+?\)\)/,
          greedy: !0,
          inside: {
            variable: [{
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: !0
            }, /^\$\(\(/],
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
            operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
            punctuation: /\(\(?|\)\)?|,|;/
          }
        },
        {
          pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
          greedy: !0,
          inside: {
            variable: /^\$\(|^`|\)$|`$/
          }
        },
        {
          pattern: /\$\{[^}]+\}/,
          greedy: !0,
          inside: {
            operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
            punctuation: /[\[\]]/,
            environment: {
              pattern: RegExp("(\\{)" + e),
              lookbehind: !0,
              alias: "constant"
            }
          }
        },
        /\$(?:\w+|[#?*!@$])/
      ],
      entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
    };
    a.languages.bash = {
      shebang: {
        pattern: /^#!\s*\/.*/,
        alias: "important"
      },
      comment: {
        pattern: /(^|[^"{\\$])#.*/,
        lookbehind: !0
      },
      "function-name": [
        {
          pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
          lookbehind: !0,
          alias: "function"
        },
        {
          pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
          alias: "function"
        }
      ],
      "for-or-select": {
        pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
        alias: "variable",
        lookbehind: !0
      },
      "assign-left": {
        pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
        inside: {
          environment: {
            pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + e),
            lookbehind: !0,
            alias: "constant"
          }
        },
        alias: "variable",
        lookbehind: !0
      },
      string: [
        {
          pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
          lookbehind: !0,
          greedy: !0,
          inside: l
        },
        {
          pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
          lookbehind: !0,
          greedy: !0,
          inside: {
            bash: t
          }
        },
        {
          pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
          lookbehind: !0,
          greedy: !0,
          inside: l
        },
        {
          pattern: /(^|[^$\\])'[^']*'/,
          lookbehind: !0,
          greedy: !0
        },
        {
          pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
          greedy: !0,
          inside: {
            entity: l.entity
          }
        }
      ],
      environment: {
        pattern: RegExp("\\$?" + e),
        alias: "constant"
      },
      variable: l.variable,
      function: {
        pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
        lookbehind: !0
      },
      keyword: {
        pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
        lookbehind: !0
      },
      builtin: {
        pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
        lookbehind: !0,
        alias: "class-name"
      },
      boolean: {
        pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
        lookbehind: !0
      },
      "file-descriptor": {
        pattern: /\B&\d\b/,
        alias: "important"
      },
      operator: {
        pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
        inside: {
          "file-descriptor": {
            pattern: /^\d/,
            alias: "important"
          }
        }
      },
      punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
      number: {
        pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
        lookbehind: !0
      }
    }, t.inside = a.languages.bash;
    for (var c = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], d = l.variable[1].inside, i = 0; i < c.length; i++)
      d[c[i]] = a.languages.bash[c[i]];
    a.languages.shell = a.languages.bash;
  })(r);
}
n(Cr, "bash");
var ye = be, Ea = Rr;
Rr.displayName = "css";
Rr.aliases = [];
function Rr(r) {
  (function(a) {
    var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    a.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
        }
      },
      url: {
        pattern: RegExp("\\burl\\((?:" + e.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + e.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + e.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: e,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, a.languages.css.atrule.inside.rest = a.languages.css;
    var t = a.languages.markup;
    t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
  })(r);
}
n(Rr, "css$1");
var we = Ea, xe = Ir;
Ir.displayName = "jsExtras";
Ir.aliases = [];
function Ir(r) {
  (function(a) {
    a.languages.insertBefore("javascript", "function-variable", {
      "method-variable": {
        pattern: RegExp("(\\.\\s*)" + a.languages.javascript["function-variable"].pattern.source),
        lookbehind: !0,
        alias: ["function-variable", "method", "function", "property-access"]
      }
    }), a.languages.insertBefore("javascript", "function", {
      method: {
        pattern: RegExp("(\\.\\s*)" + a.languages.javascript.function.source),
        lookbehind: !0,
        alias: ["function", "property-access"]
      }
    }), a.languages.insertBefore("javascript", "constant", {
      "known-class-name": [{
        pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
        alias: "class-name"
      }, {
        pattern: /\b(?:[A-Z]\w*)Error\b/,
        alias: "class-name"
      }]
    });
    function e(m, S) {
      return RegExp(m.replace(/<ID>/g, function() {
        return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
      }), S);
    }
    n(e, "withId"), a.languages.insertBefore("javascript", "keyword", {
      imports: {
        pattern: e(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
        lookbehind: !0,
        inside: a.languages.javascript
      },
      exports: {
        pattern: e(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
        lookbehind: !0,
        inside: a.languages.javascript
      }
    }), a.languages.javascript.keyword.unshift({
      pattern: /\b(?:as|default|export|from|import)\b/,
      alias: "module"
    }, {
      pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
      alias: "control-flow"
    }, {
      pattern: /\bnull\b/,
      alias: ["null", "nil"]
    }, {
      pattern: /\bundefined\b/,
      alias: "nil"
    }), a.languages.insertBefore("javascript", "operator", {
      spread: {
        pattern: /\.{3}/,
        alias: "operator"
      },
      arrow: {
        pattern: /=>/,
        alias: "operator"
      }
    }), a.languages.insertBefore("javascript", "punctuation", {
      "property-access": {
        pattern: e(/(\.\s*)#?<ID>/.source),
        lookbehind: !0
      },
      "maybe-class-name": {
        pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
        lookbehind: !0
      },
      dom: {
        pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
        alias: "variable"
      },
      console: {
        pattern: /\bconsole(?=\s*\.)/,
        alias: "class-name"
      }
    });
    for (var t = ["function", "function-variable", "method", "method-variable", "property-access"], l = 0; l < t.length; l++) {
      var c = t[l], d = a.languages.javascript[c];
      a.util.type(d) === "RegExp" && (d = a.languages.javascript[c] = {
        pattern: d
      });
      var i = d.inside || {};
      d.inside = i, i["maybe-class-name"] = /^[A-Z][\s\S]*/;
    }
  })(r);
}
n(Ir, "jsExtras");
var Se = xe, qe = Or;
Or.displayName = "json";
Or.aliases = ["webmanifest"];
function Or(r) {
  r.languages.json = {
    property: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      lookbehind: !0,
      greedy: !0
    },
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: !0,
      greedy: !0
    },
    comment: {
      pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: !0
    },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: {
      pattern: /\bnull\b/,
      alias: "keyword"
    }
  }, r.languages.webmanifest = r.languages.json;
}
n(Or, "json");
var Ae = qe, Ee = Fr;
Fr.displayName = "graphql";
Fr.aliases = [];
function Fr(r) {
  r.languages.graphql = {
    comment: /#.*/,
    description: {
      pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
      greedy: !0,
      alias: "string",
      inside: {
        "language-markdown": {
          pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: r.languages.markdown
        }
      }
    },
    string: {
      pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
      greedy: !0
    },
    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    boolean: /\b(?:false|true)\b/,
    variable: /\$[a-z_]\w*/i,
    directive: {
      pattern: /@[a-z_]\w*/i,
      alias: "function"
    },
    "attr-name": {
      pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
      greedy: !0
    },
    "atom-input": {
      pattern: /\b[A-Z]\w*Input\b/,
      alias: "class-name"
    },
    scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
    constant: /\b[A-Z][A-Z_\d]*\b/,
    "class-name": {
      pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
      lookbehind: !0
    },
    fragment: {
      pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: "function"
    },
    "definition-mutation": {
      pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: "function"
    },
    "definition-query": {
      pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: "function"
    },
    keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
    operator: /[!=|&]|\.{3}/,
    "property-query": /\w+(?=\s*\()/,
    object: /\w+(?=\s*\{)/,
    punctuation: /[!(){}\[\]:=,]/,
    property: /\w+/
  }, r.hooks.add("after-tokenize", /* @__PURE__ */ n(function(e) {
    if (e.language !== "graphql")
      return;
    var t = e.tokens.filter(function(A) {
      return typeof A != "string" && A.type !== "comment" && A.type !== "scalar";
    }), l = 0;
    function c(A) {
      return t[l + A];
    }
    n(c, "getToken");
    function d(A, k) {
      k = k || 0;
      for (var v = 0; v < A.length; v++) {
        var o = c(v + k);
        if (!o || o.type !== A[v])
          return !1;
      }
      return !0;
    }
    n(d, "isTokenType");
    function i(A, k) {
      for (var v = 1, o = l; o < t.length; o++) {
        var u = t[o], p = u.content;
        if (u.type === "punctuation" && typeof p == "string") {
          if (A.test(p))
            v++;
          else if (k.test(p) && (v--, v === 0))
            return o;
        }
      }
      return -1;
    }
    n(i, "findClosingBracket");
    function m(A, k) {
      var v = A.alias;
      v ? Array.isArray(v) || (A.alias = v = [v]) : A.alias = v = [], v.push(k);
    }
    for (n(m, "addAlias"); l < t.length; ) {
      var S = t[l++];
      if (S.type === "keyword" && S.content === "mutation") {
        var h = [];
        if (d(["definition-mutation", "punctuation"]) && c(1).content === "(") {
          l += 2;
          var g = i(/^\($/, /^\)$/);
          if (g === -1)
            continue;
          for (; l < g; l++) {
            var b = c(0);
            b.type === "variable" && (m(b, "variable-input"), h.push(b.content));
          }
          l = g + 1;
        }
        if (d(["punctuation", "property-query"]) && c(0).content === "{" && (l++, m(c(0), "property-mutation"), h.length > 0)) {
          var y = i(/^\{$/, /^\}$/);
          if (y === -1)
            continue;
          for (var N = l; N < y; N++) {
            var E = t[N];
            E.type === "variable" && h.indexOf(E.content) >= 0 && m(E, "variable-input");
          }
        }
      }
    }
  }, "afterTokenizeGraphql"));
}
n(Fr, "graphql");
var ke = Ee, ka = Ur;
Ur.displayName = "markup";
Ur.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"];
function Ur(r) {
  r.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [{
              pattern: /^=/,
              alias: "attr-equals"
            }, /"|'/]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [{
      pattern: /&[\da-z]{1,8};/i,
      alias: "named-entity"
    }, /&#x?[\da-f]{1,8};/i]
  }, r.languages.markup.tag.inside["attr-value"].inside.entity = r.languages.markup.entity, r.languages.markup.doctype.inside["internal-subset"].inside = r.languages.markup, r.hooks.add("wrap", function(a) {
    a.type === "entity" && (a.attributes.title = a.content.value.replace(/&amp;/, "&"));
  }), Object.defineProperty(r.languages.markup.tag, "addInlined", {
    value: /* @__PURE__ */ n(function(e, t) {
      var l = {};
      l["language-" + t] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: r.languages[t]
      }, l.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var c = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: l
        }
      };
      c["language-" + t] = {
        pattern: /[\s\S]+/,
        inside: r.languages[t]
      };
      var d = {};
      d[e] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return e;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: c
      }, r.languages.insertBefore("markup", "cdata", d);
    }, "addInlined")
  }), Object.defineProperty(r.languages.markup.tag, "addAttribute", {
    value: /* @__PURE__ */ n(function(e, t) {
      r.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [t, "language-" + t],
                inside: r.languages[t]
              },
              punctuation: [{
                pattern: /^=/,
                alias: "attr-equals"
              }, /"|'/]
            }
          }
        }
      });
    }, "value")
  }), r.languages.html = r.languages.markup, r.languages.mathml = r.languages.markup, r.languages.svg = r.languages.markup, r.languages.xml = r.languages.extend("markup", {}), r.languages.ssml = r.languages.xml, r.languages.atom = r.languages.xml, r.languages.rss = r.languages.xml;
}
n(Ur, "markup$1");
var Le = ka, Ne = _r;
_r.displayName = "markdown";
_r.aliases = ["md"];
function _r(r) {
  (function(a) {
    var e = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
    function t(g) {
      return g = g.replace(/<inner>/g, function() {
        return e;
      }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + g + ")");
    }
    n(t, "createInline");
    var l = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, c = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
      return l;
    }), d = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
    a.languages.markdown = a.languages.extend("markup", {}), a.languages.insertBefore("markdown", "prolog", {
      "front-matter-block": {
        pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          punctuation: /^---|---$/,
          "front-matter": {
            pattern: /\S+(?:\s+\S+)*/,
            alias: ["yaml", "language-yaml"],
            inside: a.languages.yaml
          }
        }
      },
      blockquote: {
        pattern: /^>(?:[\t ]*>)*/m,
        alias: "punctuation"
      },
      table: {
        pattern: RegExp("^" + c + d + "(?:" + c + ")*", "m"),
        inside: {
          "table-data-rows": {
            pattern: RegExp("^(" + c + d + ")(?:" + c + ")*$"),
            lookbehind: !0,
            inside: {
              "table-data": {
                pattern: RegExp(l),
                inside: a.languages.markdown
              },
              punctuation: /\|/
            }
          },
          "table-line": {
            pattern: RegExp("^(" + c + ")" + d + "$"),
            lookbehind: !0,
            inside: {
              punctuation: /\||:?-{3,}:?/
            }
          },
          "table-header-row": {
            pattern: RegExp("^" + c + "$"),
            inside: {
              "table-header": {
                pattern: RegExp(l),
                alias: "important",
                inside: a.languages.markdown
              },
              punctuation: /\|/
            }
          }
        }
      },
      code: [{
        pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
        lookbehind: !0,
        alias: "keyword"
      }, {
        pattern: /^```[\s\S]*?^```$/m,
        greedy: !0,
        inside: {
          "code-block": {
            pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
            lookbehind: !0
          },
          "code-language": {
            pattern: /^(```).+/,
            lookbehind: !0
          },
          punctuation: /```/
        }
      }],
      title: [{
        pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
        alias: "important",
        inside: {
          punctuation: /==+$|--+$/
        }
      }, {
        pattern: /(^\s*)#.+/m,
        lookbehind: !0,
        alias: "important",
        inside: {
          punctuation: /^#+|#+$/
        }
      }],
      hr: {
        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: !0,
        alias: "punctuation"
      },
      list: {
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: !0,
        alias: "punctuation"
      },
      "url-reference": {
        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
          variable: {
            pattern: /^(!?\[)[^\]]+/,
            lookbehind: !0
          },
          string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
          punctuation: /^[\[\]!:]|[<>]/
        },
        alias: "url"
      },
      bold: {
        pattern: t(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^..)[\s\S]+(?=..$)/,
            lookbehind: !0,
            inside: {}
          },
          punctuation: /\*\*|__/
        }
      },
      italic: {
        pattern: t(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^.)[\s\S]+(?=.$)/,
            lookbehind: !0,
            inside: {}
          },
          punctuation: /[*_]/
        }
      },
      strike: {
        pattern: t(/(~~?)(?:(?!~)<inner>)+\2/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^~~?)[\s\S]+(?=\1$)/,
            lookbehind: !0,
            inside: {}
          },
          punctuation: /~~?/
        }
      },
      "code-snippet": {
        pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
        lookbehind: !0,
        greedy: !0,
        alias: ["code", "keyword"]
      },
      url: {
        pattern: t(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
          operator: /^!/,
          content: {
            pattern: /(^\[)[^\]]+(?=\])/,
            lookbehind: !0,
            inside: {}
          },
          variable: {
            pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
            lookbehind: !0
          },
          url: {
            pattern: /(^\]\()[^\s)]+/,
            lookbehind: !0
          },
          string: {
            pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
            lookbehind: !0
          }
        }
      }
    }), ["url", "bold", "italic", "strike"].forEach(function(g) {
      ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(b) {
        g !== b && (a.languages.markdown[g].inside.content.inside[b] = a.languages.markdown[b]);
      });
    }), a.hooks.add("after-tokenize", function(g) {
      if (g.language !== "markdown" && g.language !== "md")
        return;
      function b(y) {
        if (!(!y || typeof y == "string"))
          for (var N = 0, E = y.length; N < E; N++) {
            var A = y[N];
            if (A.type !== "code") {
              b(A.content);
              continue;
            }
            var k = A.content[1], v = A.content[3];
            if (k && v && k.type === "code-language" && v.type === "code-block" && typeof k.content == "string") {
              var o = k.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
              o = (/[a-z][\w-]*/i.exec(o) || [""])[0].toLowerCase();
              var u = "language-" + o;
              v.alias ? typeof v.alias == "string" ? v.alias = [v.alias, u] : v.alias.push(u) : v.alias = [u];
            }
          }
      }
      n(b, "walkTokens"), b(g.tokens);
    }), a.hooks.add("wrap", function(g) {
      if (g.type === "code-block") {
        for (var b = "", y = 0, N = g.classes.length; y < N; y++) {
          var E = g.classes[y], A = /language-(.+)/.exec(E);
          if (A) {
            b = A[1];
            break;
          }
        }
        var k = a.languages[b];
        if (k)
          g.content = a.highlight(h(g.content.value), k, b);
        else if (b && b !== "none" && a.plugins.autoloader) {
          var v = "md-" + new Date().valueOf() + "-" + Math.floor(Math.random() * 1e16);
          g.attributes.id = v, a.plugins.autoloader.loadLanguages(b, function() {
            var o = document.getElementById(v);
            o && (o.innerHTML = a.highlight(o.textContent, a.languages[b], b));
          });
        }
      }
    });
    var i = RegExp(a.languages.markup.tag.pattern.source, "gi"), m = {
      amp: "&",
      lt: "<",
      gt: ">",
      quot: '"'
    }, S = String.fromCodePoint || String.fromCharCode;
    function h(g) {
      var b = g.replace(i, "");
      return b = b.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(y, N) {
        if (N = N.toLowerCase(), N[0] === "#") {
          var E;
          return N[1] === "x" ? E = parseInt(N.slice(2), 16) : E = Number(N.slice(1)), S(E);
        } else {
          var A = m[N];
          return A || y;
        }
      }), b;
    }
    n(h, "textContent"), a.languages.md = a.languages.markdown;
  })(r);
}
n(_r, "markdown");
var Te = Ne, $e = Br;
Br.displayName = "yaml";
Br.aliases = ["yml"];
function Br(r) {
  (function(a) {
    var e = /[*&][^\s[\]{},]+/, t = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, l = "(?:" + t.source + "(?:[ 	]+" + e.source + ")?|" + e.source + "(?:[ 	]+" + t.source + ")?)", c = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
      return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
    }), d = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
    function i(m, S) {
      S = (S || "").replace(/m/g, "") + "m";
      var h = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
        return l;
      }).replace(/<<value>>/g, function() {
        return m;
      });
      return RegExp(h, S);
    }
    n(i, "createValuePattern"), a.languages.yaml = {
      scalar: {
        pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
          return l;
        })),
        lookbehind: !0,
        alias: "string"
      },
      comment: /#.*/,
      key: {
        pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
          return l;
        }).replace(/<<key>>/g, function() {
          return "(?:" + c + "|" + d + ")";
        })),
        lookbehind: !0,
        greedy: !0,
        alias: "atrule"
      },
      directive: {
        pattern: /(^[ \t]*)%.+/m,
        lookbehind: !0,
        alias: "important"
      },
      datetime: {
        pattern: i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
        lookbehind: !0,
        alias: "number"
      },
      boolean: {
        pattern: i(/false|true/.source, "i"),
        lookbehind: !0,
        alias: "important"
      },
      null: {
        pattern: i(/null|~/.source, "i"),
        lookbehind: !0,
        alias: "important"
      },
      string: {
        pattern: i(d),
        lookbehind: !0,
        greedy: !0
      },
      number: {
        pattern: i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
        lookbehind: !0
      },
      tag: t,
      important: e,
      punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
    }, a.languages.yml = a.languages.yaml;
  })(r);
}
n(Br, "yaml");
var De = $e, La = jr;
jr.displayName = "typescript";
jr.aliases = ["ts"];
function jr(r) {
  (function(a) {
    a.languages.typescript = a.languages.extend("javascript", {
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: !0,
        greedy: !0,
        inside: null
      },
      builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    }), a.languages.typescript.keyword.push(
      /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
      /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
      /\btype\b(?=\s*(?:[\{*]|$))/
    ), delete a.languages.typescript.parameter, delete a.languages.typescript["literal-property"];
    var e = a.languages.extend("typescript", {});
    delete e["class-name"], a.languages.typescript["class-name"].inside = e, a.languages.insertBefore("typescript", "function", {
      decorator: {
        pattern: /@[$\w\xA0-\uFFFF]+/,
        inside: {
          at: {
            pattern: /^@/,
            alias: "operator"
          },
          function: /^[\s\S]+/
        }
      },
      "generic-function": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
        greedy: !0,
        inside: {
          function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
          generic: {
            pattern: /<[\s\S]+/,
            alias: "class-name",
            inside: e
          }
        }
      }
    }), a.languages.ts = a.languages.typescript;
  })(r);
}
n(jr, "typescript");
var Ce = La, Re = Aa, Ie = La, Oe = Hr;
Hr.displayName = "tsx";
Hr.aliases = [];
function Hr(r) {
  r.register(Re), r.register(Ie), function(a) {
    var e = a.util.clone(a.languages.typescript);
    a.languages.tsx = a.languages.extend("jsx", e), delete a.languages.tsx.parameter, delete a.languages.tsx["literal-property"];
    var t = a.languages.tsx.tag;
    t.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + t.pattern.source + ")", t.pattern.flags), t.lookbehind = !0;
  }(r);
}
n(Hr, "tsx");
var Fe = Oe;
function Ue(r, a) {
  if (r == null)
    return {};
  var e = ue(r, a), t, l;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(r);
    for (l = 0; l < c.length; l++)
      t = c[l], !(a.indexOf(t) >= 0) && (!Object.prototype.propertyIsEnumerable.call(r, t) || (e[t] = r[t]));
  }
  return e;
}
n(Ue, "_objectWithoutProperties");
function Lr(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, t = new Array(a); e < a; e++)
    t[e] = r[e];
  return t;
}
n(Lr, "_arrayLikeToArray");
function _e(r) {
  if (Array.isArray(r))
    return Lr(r);
}
n(_e, "_arrayWithoutHoles");
function Be(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
n(Be, "_iterableToArray");
function je(r, a) {
  if (!!r) {
    if (typeof r == "string")
      return Lr(r, a);
    var e = Object.prototype.toString.call(r).slice(8, -1);
    if (e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set")
      return Array.from(r);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return Lr(r, a);
  }
}
n(je, "_unsupportedIterableToArray");
function He() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
n(He, "_nonIterableSpread");
function Ge(r) {
  return _e(r) || Be(r) || je(r) || He();
}
n(Ge, "_toConsumableArray");
function Ve(r, a, e) {
  return a in r ? Object.defineProperty(r, a, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[a] = e, r;
}
n(Ve, "_defineProperty");
function ar(r) {
  for (var a = 1; a < arguments.length; a++) {
    var e = arguments[a] != null ? Object(arguments[a]) : {}, t = Object.keys(e);
    typeof Object.getOwnPropertySymbols == "function" && t.push.apply(t, Object.getOwnPropertySymbols(e).filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), t.forEach(function(l) {
      Ve(r, l, e[l]);
    });
  }
  return r;
}
n(ar, "_objectSpread");
function ze(r) {
  var a = r.length;
  if (a === 0 || a === 1)
    return r;
  if (a === 2)
    return [r[0], r[1], "".concat(r[0], ".").concat(r[1]), "".concat(r[1], ".").concat(r[0])];
  if (a === 3)
    return [r[0], r[1], r[2], "".concat(r[0], ".").concat(r[1]), "".concat(r[0], ".").concat(r[2]), "".concat(r[1], ".").concat(r[0]), "".concat(r[1], ".").concat(r[2]), "".concat(r[2], ".").concat(r[0]), "".concat(r[2], ".").concat(r[1]), "".concat(r[0], ".").concat(r[1], ".").concat(r[2]), "".concat(r[0], ".").concat(r[2], ".").concat(r[1]), "".concat(r[1], ".").concat(r[0], ".").concat(r[2]), "".concat(r[1], ".").concat(r[2], ".").concat(r[0]), "".concat(r[2], ".").concat(r[0], ".").concat(r[1]), "".concat(r[2], ".").concat(r[1], ".").concat(r[0])];
  if (a >= 4)
    return [r[0], r[1], r[2], r[3], "".concat(r[0], ".").concat(r[1]), "".concat(r[0], ".").concat(r[2]), "".concat(r[0], ".").concat(r[3]), "".concat(r[1], ".").concat(r[0]), "".concat(r[1], ".").concat(r[2]), "".concat(r[1], ".").concat(r[3]), "".concat(r[2], ".").concat(r[0]), "".concat(r[2], ".").concat(r[1]), "".concat(r[2], ".").concat(r[3]), "".concat(r[3], ".").concat(r[0]), "".concat(r[3], ".").concat(r[1]), "".concat(r[3], ".").concat(r[2]), "".concat(r[0], ".").concat(r[1], ".").concat(r[2]), "".concat(r[0], ".").concat(r[1], ".").concat(r[3]), "".concat(r[0], ".").concat(r[2], ".").concat(r[1]), "".concat(r[0], ".").concat(r[2], ".").concat(r[3]), "".concat(r[0], ".").concat(r[3], ".").concat(r[1]), "".concat(r[0], ".").concat(r[3], ".").concat(r[2]), "".concat(r[1], ".").concat(r[0], ".").concat(r[2]), "".concat(r[1], ".").concat(r[0], ".").concat(r[3]), "".concat(r[1], ".").concat(r[2], ".").concat(r[0]), "".concat(r[1], ".").concat(r[2], ".").concat(r[3]), "".concat(r[1], ".").concat(r[3], ".").concat(r[0]), "".concat(r[1], ".").concat(r[3], ".").concat(r[2]), "".concat(r[2], ".").concat(r[0], ".").concat(r[1]), "".concat(r[2], ".").concat(r[0], ".").concat(r[3]), "".concat(r[2], ".").concat(r[1], ".").concat(r[0]), "".concat(r[2], ".").concat(r[1], ".").concat(r[3]), "".concat(r[2], ".").concat(r[3], ".").concat(r[0]), "".concat(r[2], ".").concat(r[3], ".").concat(r[1]), "".concat(r[3], ".").concat(r[0], ".").concat(r[1]), "".concat(r[3], ".").concat(r[0], ".").concat(r[2]), "".concat(r[3], ".").concat(r[1], ".").concat(r[0]), "".concat(r[3], ".").concat(r[1], ".").concat(r[2]), "".concat(r[3], ".").concat(r[2], ".").concat(r[0]), "".concat(r[3], ".").concat(r[2], ".").concat(r[1]), "".concat(r[0], ".").concat(r[1], ".").concat(r[2], ".").concat(r[3]), "".concat(r[0], ".").concat(r[1], ".").concat(r[3], ".").concat(r[2]), "".concat(r[0], ".").concat(r[2], ".").concat(r[1], ".").concat(r[3]), "".concat(r[0], ".").concat(r[2], ".").concat(r[3], ".").concat(r[1]), "".concat(r[0], ".").concat(r[3], ".").concat(r[1], ".").concat(r[2]), "".concat(r[0], ".").concat(r[3], ".").concat(r[2], ".").concat(r[1]), "".concat(r[1], ".").concat(r[0], ".").concat(r[2], ".").concat(r[3]), "".concat(r[1], ".").concat(r[0], ".").concat(r[3], ".").concat(r[2]), "".concat(r[1], ".").concat(r[2], ".").concat(r[0], ".").concat(r[3]), "".concat(r[1], ".").concat(r[2], ".").concat(r[3], ".").concat(r[0]), "".concat(r[1], ".").concat(r[3], ".").concat(r[0], ".").concat(r[2]), "".concat(r[1], ".").concat(r[3], ".").concat(r[2], ".").concat(r[0]), "".concat(r[2], ".").concat(r[0], ".").concat(r[1], ".").concat(r[3]), "".concat(r[2], ".").concat(r[0], ".").concat(r[3], ".").concat(r[1]), "".concat(r[2], ".").concat(r[1], ".").concat(r[0], ".").concat(r[3]), "".concat(r[2], ".").concat(r[1], ".").concat(r[3], ".").concat(r[0]), "".concat(r[2], ".").concat(r[3], ".").concat(r[0], ".").concat(r[1]), "".concat(r[2], ".").concat(r[3], ".").concat(r[1], ".").concat(r[0]), "".concat(r[3], ".").concat(r[0], ".").concat(r[1], ".").concat(r[2]), "".concat(r[3], ".").concat(r[0], ".").concat(r[2], ".").concat(r[1]), "".concat(r[3], ".").concat(r[1], ".").concat(r[0], ".").concat(r[2]), "".concat(r[3], ".").concat(r[1], ".").concat(r[2], ".").concat(r[0]), "".concat(r[3], ".").concat(r[2], ".").concat(r[0], ".").concat(r[1]), "".concat(r[3], ".").concat(r[2], ".").concat(r[1], ".").concat(r[0])];
}
n(ze, "powerSetPermutations");
var Er = {};
function Me(r) {
  if (r.length === 0 || r.length === 1)
    return r;
  var a = r.join(".");
  return Er[a] || (Er[a] = ze(r)), Er[a];
}
n(Me, "getClassNameCombinations");
function Pe(r) {
  var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = arguments.length > 2 ? arguments[2] : void 0, t = r.filter(function(c) {
    return c !== "token";
  }), l = Me(t);
  return l.reduce(function(c, d) {
    return ar({}, c, e[d]);
  }, a);
}
n(Pe, "createStyleObject");
function na(r) {
  return r.join(" ");
}
n(na, "createClassNameString");
function Ze(r, a) {
  var e = 0;
  return function(t) {
    return e += 1, t.map(function(l, c) {
      return Na({
        node: l,
        stylesheet: r,
        useInlineStyles: a,
        key: "code-segment-".concat(e, "-").concat(c)
      });
    });
  };
}
n(Ze, "createChildren");
function Na(r) {
  var a = r.node, e = r.stylesheet, t = r.style, l = t === void 0 ? {} : t, c = r.useInlineStyles, d = r.key, i = a.properties, m = a.type, S = a.tagName, h = a.value;
  if (m === "text")
    return h;
  if (S) {
    var g = Ze(e, c), b;
    if (!c)
      b = ar({}, i, {
        className: na(i.className)
      });
    else {
      var y = Object.keys(e).reduce(function(k, v) {
        return v.split(".").forEach(function(o) {
          k.includes(o) || k.push(o);
        }), k;
      }, []), N = i.className && i.className.includes("token") ? ["token"] : [], E = i.className && N.concat(i.className.filter(function(k) {
        return !y.includes(k);
      }));
      b = ar({}, i, {
        className: na(E) || void 0,
        style: Pe(i.className, Object.assign({}, i.style, l), e)
      });
    }
    var A = g(a.children);
    return /* @__PURE__ */ Q(S, {
      ...b,
      children: A
    }, d);
  }
}
n(Na, "createElement");
var Ye = /* @__PURE__ */ n(function(a, e) {
  var t = a.listLanguages();
  return t.indexOf(e) !== -1;
}, "checkForListedLanguage"), We = /\n/g;
function Je(r) {
  return r.match(We);
}
n(Je, "getNewLines");
function Ke(r) {
  var a = r.lines, e = r.startingLineNumber, t = r.style;
  return a.map(function(l, c) {
    var d = c + e;
    return /* @__PURE__ */ Q("span", {
      className: "react-syntax-highlighter-line-number",
      style: typeof t == "function" ? t(d) : t,
      children: "".concat(d, `
`)
    }, "line-".concat(c));
  });
}
n(Ke, "getAllLineNumbers");
function Xe(r) {
  var a = r.codeString, e = r.codeStyle, t = r.containerStyle, l = t === void 0 ? {
    float: "left",
    paddingRight: "10px"
  } : t, c = r.numberStyle, d = c === void 0 ? {} : c, i = r.startingLineNumber;
  return /* @__PURE__ */ Q("code", {
    style: Object.assign({}, e, l),
    children: Ke({
      lines: a.replace(/\n$/, "").split(`
`),
      style: d,
      startingLineNumber: i
    })
  });
}
n(Xe, "AllLineNumbers");
function Qe(r) {
  return "".concat(r.toString().length, ".25em");
}
n(Qe, "getEmWidthOfNumber");
function Ta(r, a) {
  return {
    type: "element",
    tagName: "span",
    properties: {
      key: "line-number--".concat(r),
      className: ["comment", "linenumber", "react-syntax-highlighter-line-number"],
      style: a
    },
    children: [{
      type: "text",
      value: r
    }]
  };
}
n(Ta, "getInlineLineNumber");
function $a(r, a, e) {
  var t = {
    display: "inline-block",
    minWidth: Qe(e),
    paddingRight: "1em",
    textAlign: "right",
    userSelect: "none"
  }, l = typeof r == "function" ? r(a) : r, c = ar({}, t, l);
  return c;
}
n($a, "assembleLineNumberStyles");
function yr(r) {
  var a = r.children, e = r.lineNumber, t = r.lineNumberStyle, l = r.largestLineNumber, c = r.showInlineLineNumbers, d = r.lineProps, i = d === void 0 ? {} : d, m = r.className, S = m === void 0 ? [] : m, h = r.showLineNumbers, g = r.wrapLongLines, b = typeof i == "function" ? i(e) : i;
  if (b.className = S, e && c) {
    var y = $a(t, e, l);
    a.unshift(Ta(e, y));
  }
  return g & h && (b.style = ar({}, b.style, {
    display: "flex"
  })), {
    type: "element",
    tagName: "span",
    properties: b,
    children: a
  };
}
n(yr, "createLineElement");
function Da(r) {
  for (var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], t = 0; t < r.length; t++) {
    var l = r[t];
    if (l.type === "text")
      e.push(yr({
        children: [l],
        className: Ge(new Set(a))
      }));
    else if (l.children) {
      var c = a.concat(l.properties.className);
      e = e.concat(Da(l.children, c));
    }
  }
  return e;
}
n(Da, "flattenCodeTree");
function rt(r, a, e, t, l, c, d, i, m) {
  var S, h = Da(r.value), g = [], b = -1, y = 0;
  function N(p, s) {
    var f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return yr({
      children: p,
      lineNumber: s,
      lineNumberStyle: i,
      largestLineNumber: d,
      showInlineLineNumbers: l,
      lineProps: e,
      className: f,
      showLineNumbers: t,
      wrapLongLines: m
    });
  }
  n(N, "createWrappedLine");
  function E(p, s) {
    if (t && s && l) {
      var f = $a(i, s, d);
      p.unshift(Ta(s, f));
    }
    return p;
  }
  n(E, "createUnwrappedLine");
  function A(p, s) {
    var f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return a || f.length > 0 ? N(p, s, f) : E(p, s);
  }
  n(A, "createLine");
  for (var k = /* @__PURE__ */ n(function() {
    var s = h[y], f = s.children[0].value, w = Je(f);
    if (w) {
      var x = f.split(`
`);
      x.forEach(function(q, T) {
        var I = t && g.length + c, O = {
          type: "text",
          value: "".concat(q, `
`)
        };
        if (T === 0) {
          var z = h.slice(b + 1, y).concat(yr({
            children: [O],
            className: s.properties.className
          })), H = A(z, I);
          g.push(H);
        } else if (T === x.length - 1) {
          var B = h[y + 1] && h[y + 1].children && h[y + 1].children[0];
          if (B) {
            var K = {
              type: "text",
              value: "".concat(q)
            }, $ = yr({
              children: [K],
              className: s.properties.className
            });
            h.splice(y + 1, 0, $);
          } else {
            var F = [O], R = A(F, I, s.properties.className);
            g.push(R);
          }
        } else {
          var D = [O], U = A(D, I, s.properties.className);
          g.push(U);
        }
      }), b = y;
    }
    y++;
  }, "_loop"); y < h.length; )
    k();
  if (b !== h.length - 1) {
    var v = h.slice(b + 1, h.length);
    if (v && v.length) {
      var o = t && g.length + c, u = A(v, o);
      g.push(u);
    }
  }
  return a ? g : (S = []).concat.apply(S, g);
}
n(rt, "processLines");
function at(r) {
  var a = r.rows, e = r.stylesheet, t = r.useInlineStyles;
  return a.map(function(l, c) {
    return Na({
      node: l,
      stylesheet: e,
      useInlineStyles: t,
      key: "code-segement".concat(c)
    });
  });
}
n(at, "defaultRenderer");
function Ca(r) {
  return r && typeof r.highlightAuto < "u";
}
n(Ca, "isHighlightJs");
function et(r) {
  var a = r.astGenerator, e = r.language, t = r.code, l = r.defaultCodeValue;
  if (Ca(a)) {
    var c = Ye(a, e);
    return e === "text" ? {
      value: l,
      language: "text"
    } : c ? a.highlight(e, t) : a.highlightAuto(t);
  }
  try {
    return e && e !== "text" ? {
      value: a.highlight(t, e)
    } : {
      value: l
    };
  } catch {
    return {
      value: l
    };
  }
}
n(et, "getCodeTree");
function tt(r, a) {
  return /* @__PURE__ */ n(function(t) {
    var l = t.language, c = t.children, d = t.style, i = d === void 0 ? a : d, m = t.customStyle, S = m === void 0 ? {} : m, h = t.codeTagProps, g = h === void 0 ? {
      className: l ? "language-".concat(l) : void 0,
      style: ar({}, i['code[class*="language-"]'], i['code[class*="language-'.concat(l, '"]')])
    } : h, b = t.useInlineStyles, y = b === void 0 ? !0 : b, N = t.showLineNumbers, E = N === void 0 ? !1 : N, A = t.showInlineLineNumbers, k = A === void 0 ? !0 : A, v = t.startingLineNumber, o = v === void 0 ? 1 : v, u = t.lineNumberContainerStyle, p = t.lineNumberStyle, s = p === void 0 ? {} : p, f = t.wrapLines, w = t.wrapLongLines, x = w === void 0 ? !1 : w, q = t.lineProps, T = q === void 0 ? {} : q, I = t.renderer, O = t.PreTag, z = O === void 0 ? "pre" : O, H = t.CodeTag, B = H === void 0 ? "code" : H, K = t.code, $ = K === void 0 ? Array.isArray(c) ? c[0] : c : K, F = t.astGenerator, R = Ue(t, ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"]);
    F = F || r;
    var D = E ? /* @__PURE__ */ Q(Xe, {
      containerStyle: u,
      codeStyle: g.style || {},
      numberStyle: s,
      startingLineNumber: o,
      codeString: $
    }) : null, U = i.hljs || i['pre[class*="language-"]'] || {
      backgroundColor: "#fff"
    }, or = Ca(F) ? "hljs" : "prismjs", G = y ? Object.assign({}, R, {
      style: Object.assign({}, U, S)
    }) : Object.assign({}, R, {
      className: R.className ? "".concat(or, " ").concat(R.className) : or,
      style: Object.assign({}, S)
    });
    if (!F)
      return /* @__PURE__ */ kr(z, {
        ...G,
        children: [D, /* @__PURE__ */ Q(B, {
          ...g,
          children: $
        })]
      });
    (f === void 0 && I || x) && (f = !0), I = I || at;
    var W = [{
      type: "text",
      value: $
    }], M = et({
      astGenerator: F,
      language: l,
      code: $,
      defaultCodeValue: W
    });
    M.language === null && (M.value = W);
    var X = M.value.length + o, cr = rt(M, f, T, E, k, o, X, s, x);
    return x ? g.style = ar({}, g.style, {
      whiteSpace: "pre-wrap"
    }) : g.style = ar({}, g.style, {
      whiteSpace: "pre"
    }), /* @__PURE__ */ Q(z, {
      ...G,
      children: /* @__PURE__ */ kr(B, {
        ...g,
        children: [!k && D, I({
          rows: cr,
          stylesheet: i,
          useInlineStyles: y
        })]
      })
    });
  }, "SyntaxHighlighter");
}
n(tt, "highlight$1");
var nt = lt, ot = Object.prototype.hasOwnProperty;
function lt() {
  for (var r = {}, a = 0; a < arguments.length; a++) {
    var e = arguments[a];
    for (var t in e)
      ot.call(e, t) && (r[t] = e[t]);
  }
  return r;
}
n(lt, "extend");
var Ra = Ia, Gr = Ia.prototype;
Gr.space = null;
Gr.normal = {};
Gr.property = {};
function Ia(r, a, e) {
  this.property = r, this.normal = a, e && (this.space = e);
}
n(Ia, "Schema$2");
var oa = nt, it = Ra, st = ct;
function ct(r) {
  for (var a = r.length, e = [], t = [], l = -1, c, d; ++l < a; )
    c = r[l], e.push(c.property), t.push(c.normal), d = c.space;
  return new it(oa.apply(null, e), oa.apply(null, t), d);
}
n(ct, "merge$1");
var Vr = vt;
function vt(r) {
  return r.toLowerCase();
}
n(vt, "normalize$3");
var Oa = Fa, Z = Fa.prototype;
Z.space = null;
Z.attribute = null;
Z.property = null;
Z.boolean = !1;
Z.booleanish = !1;
Z.overloadedBoolean = !1;
Z.number = !1;
Z.commaSeparated = !1;
Z.spaceSeparated = !1;
Z.commaOrSpaceSeparated = !1;
Z.mustUseProperty = !1;
Z.defined = !1;
function Fa(r, a) {
  this.property = r, this.attribute = a;
}
n(Fa, "Info$2");
var rr = {}, ut = 0;
rr.boolean = nr();
rr.booleanish = nr();
rr.overloadedBoolean = nr();
rr.number = nr();
rr.spaceSeparated = nr();
rr.commaSeparated = nr();
rr.commaOrSpaceSeparated = nr();
function nr() {
  return Math.pow(2, ++ut);
}
n(nr, "increment");
var Ua = Oa, la = rr, _a = zr;
zr.prototype = new Ua();
zr.prototype.defined = !0;
var Ba = ["boolean", "booleanish", "overloadedBoolean", "number", "commaSeparated", "spaceSeparated", "commaOrSpaceSeparated"], pt = Ba.length;
function zr(r, a, e, t) {
  var l = -1, c;
  for (ia(this, "space", t), Ua.call(this, r, a); ++l < pt; )
    c = Ba[l], ia(this, c, (e & la[c]) === la[c]);
}
n(zr, "DefinedInfo$2");
function ia(r, a, e) {
  e && (r[a] = e);
}
n(ia, "mark");
var sa = Vr, dt = Ra, gt = _a, gr = ft;
function ft(r) {
  var a = r.space, e = r.mustUseProperty || [], t = r.attributes || {}, l = r.properties, c = r.transform, d = {}, i = {}, m, S;
  for (m in l)
    S = new gt(m, c(t, m), l[m], a), e.indexOf(m) !== -1 && (S.mustUseProperty = !0), d[m] = S, i[sa(m)] = m, i[sa(S.attribute)] = m;
  return new dt(d, i, a);
}
n(ft, "create$5");
var mt = gr, ht = mt({
  space: "xlink",
  transform: bt,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});
function bt(r, a) {
  return "xlink:" + a.slice(5).toLowerCase();
}
n(bt, "xlinkTransform");
var yt = gr, wt = yt({
  space: "xml",
  transform: xt,
  properties: {
    xmlLang: null,
    xmlBase: null,
    xmlSpace: null
  }
});
function xt(r, a) {
  return "xml:" + a.slice(3).toLowerCase();
}
n(xt, "xmlTransform");
var St = qt;
function qt(r, a) {
  return a in r ? r[a] : a;
}
n(qt, "caseSensitiveTransform$1");
var At = St, ja = Et;
function Et(r, a) {
  return At(r, a.toLowerCase());
}
n(Et, "caseInsensitiveTransform$2");
var kt = gr, Lt = ja, Nt = kt({
  space: "xmlns",
  attributes: {
    xmlnsxlink: "xmlns:xlink"
  },
  transform: Lt,
  properties: {
    xmlns: null,
    xmlnsXLink: null
  }
}), Mr = rr, Tt = gr, V = Mr.booleanish, P = Mr.number, tr = Mr.spaceSeparated, $t = Tt({
  transform: Dt,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: V,
    ariaAutoComplete: null,
    ariaBusy: V,
    ariaChecked: V,
    ariaColCount: P,
    ariaColIndex: P,
    ariaColSpan: P,
    ariaControls: tr,
    ariaCurrent: null,
    ariaDescribedBy: tr,
    ariaDetails: null,
    ariaDisabled: V,
    ariaDropEffect: tr,
    ariaErrorMessage: null,
    ariaExpanded: V,
    ariaFlowTo: tr,
    ariaGrabbed: V,
    ariaHasPopup: null,
    ariaHidden: V,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: tr,
    ariaLevel: P,
    ariaLive: null,
    ariaModal: V,
    ariaMultiLine: V,
    ariaMultiSelectable: V,
    ariaOrientation: null,
    ariaOwns: tr,
    ariaPlaceholder: null,
    ariaPosInSet: P,
    ariaPressed: V,
    ariaReadOnly: V,
    ariaRelevant: null,
    ariaRequired: V,
    ariaRoleDescription: tr,
    ariaRowCount: P,
    ariaRowIndex: P,
    ariaRowSpan: P,
    ariaSelected: V,
    ariaSetSize: P,
    ariaSort: null,
    ariaValueMax: P,
    ariaValueMin: P,
    ariaValueNow: P,
    ariaValueText: null,
    role: null
  }
});
function Dt(r, a) {
  return a === "role" ? a : "aria-" + a.slice(4).toLowerCase();
}
n(Dt, "ariaTransform");
var sr = rr, Ct = gr, Rt = ja, L = sr.boolean, It = sr.overloadedBoolean, vr = sr.booleanish, C = sr.number, j = sr.spaceSeparated, hr = sr.commaSeparated, Ot = Ct({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: Rt,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: hr,
    acceptCharset: j,
    accessKey: j,
    action: null,
    allow: null,
    allowFullScreen: L,
    allowPaymentRequest: L,
    allowUserMedia: L,
    alt: null,
    as: null,
    async: L,
    autoCapitalize: null,
    autoComplete: j,
    autoFocus: L,
    autoPlay: L,
    capture: L,
    charSet: null,
    checked: L,
    cite: null,
    className: j,
    cols: C,
    colSpan: null,
    content: null,
    contentEditable: vr,
    controls: L,
    controlsList: j,
    coords: C | hr,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: L,
    defer: L,
    dir: null,
    dirName: null,
    disabled: L,
    download: It,
    draggable: vr,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: L,
    formTarget: null,
    headers: j,
    height: C,
    hidden: L,
    high: C,
    href: null,
    hrefLang: null,
    htmlFor: j,
    httpEquiv: j,
    id: null,
    imageSizes: null,
    imageSrcSet: hr,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: L,
    itemId: null,
    itemProp: j,
    itemRef: j,
    itemScope: L,
    itemType: j,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: L,
    low: C,
    manifest: null,
    max: null,
    maxLength: C,
    media: null,
    method: null,
    min: null,
    minLength: C,
    multiple: L,
    muted: L,
    name: null,
    nonce: null,
    noModule: L,
    noValidate: L,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextMenu: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: L,
    optimum: C,
    pattern: null,
    ping: j,
    placeholder: null,
    playsInline: L,
    poster: null,
    preload: null,
    readOnly: L,
    referrerPolicy: null,
    rel: j,
    required: L,
    reversed: L,
    rows: C,
    rowSpan: C,
    sandbox: j,
    scope: null,
    scoped: L,
    seamless: L,
    selected: L,
    shape: null,
    size: C,
    sizes: null,
    slot: null,
    span: C,
    spellCheck: vr,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: hr,
    start: C,
    step: null,
    style: null,
    tabIndex: C,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: L,
    useMap: null,
    value: vr,
    width: C,
    wrap: null,
    align: null,
    aLink: null,
    archive: j,
    axis: null,
    background: null,
    bgColor: null,
    border: C,
    borderColor: null,
    bottomMargin: C,
    cellPadding: null,
    cellSpacing: null,
    char: null,
    charOff: null,
    classId: null,
    clear: null,
    code: null,
    codeBase: null,
    codeType: null,
    color: null,
    compact: L,
    declare: L,
    event: null,
    face: null,
    frame: null,
    frameBorder: null,
    hSpace: C,
    leftMargin: C,
    link: null,
    longDesc: null,
    lowSrc: null,
    marginHeight: C,
    marginWidth: C,
    noResize: L,
    noHref: L,
    noShade: L,
    noWrap: L,
    object: null,
    profile: null,
    prompt: null,
    rev: null,
    rightMargin: C,
    rules: null,
    scheme: null,
    scrolling: vr,
    standby: null,
    summary: null,
    text: null,
    topMargin: C,
    valueType: null,
    version: null,
    vAlign: null,
    vLink: null,
    vSpace: C,
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: L,
    disableRemotePlayback: L,
    prefix: null,
    property: null,
    results: C,
    security: null,
    unselectable: null
  }
}), Ft = st, Ut = ht, _t = wt, Bt = Nt, jt = $t, Ht = Ot, Gt = Ft([_t, Ut, Bt, jt, Ht]), Vt = Vr, zt = _a, Mt = Oa, Pr = "data", Pt = Wt, Zt = /^data[-\w.:]+$/i, Ha = /-[a-z]/g, Yt = /[A-Z]/g;
function Wt(r, a) {
  var e = Vt(a), t = a, l = Mt;
  return e in r.normal ? r.property[r.normal[e]] : (e.length > 4 && e.slice(0, 4) === Pr && Zt.test(a) && (a.charAt(4) === "-" ? t = Jt(a) : a = Kt(a), l = zt), new l(t, a));
}
n(Wt, "find$1");
function Jt(r) {
  var a = r.slice(5).replace(Ha, Qt);
  return Pr + a.charAt(0).toUpperCase() + a.slice(1);
}
n(Jt, "datasetToProperty");
function Kt(r) {
  var a = r.slice(4);
  return Ha.test(a) ? r : (a = a.replace(Yt, Xt), a.charAt(0) !== "-" && (a = "-" + a), Pr + a);
}
n(Kt, "datasetToAttribute");
function Xt(r) {
  return "-" + r.toLowerCase();
}
n(Xt, "kebab");
function Qt(r) {
  return r.charAt(1).toUpperCase();
}
n(Qt, "camelcase");
var rn = an, ca = /[#.]/g;
function an(r, a) {
  for (var e = r || "", t = a || "div", l = {}, c = 0, d, i, m; c < e.length; )
    ca.lastIndex = c, m = ca.exec(e), d = e.slice(c, m ? m.index : e.length), d && (i ? i === "#" ? l.id = d : l.className ? l.className.push(d) : l.className = [d] : t = d, c += d.length), m && (i = m[0], c++);
  return {
    type: "element",
    tagName: t,
    properties: l,
    children: []
  };
}
n(an, "parse$3");
var Zr = {};
Zr.parse = nn;
Zr.stringify = on;
var va = "", en = " ", tn = /[ \t\n\r\f]+/g;
function nn(r) {
  var a = String(r || va).trim();
  return a === va ? [] : a.split(tn);
}
n(nn, "parse$2");
function on(r) {
  return r.join(en).trim();
}
n(on, "stringify$2");
var Yr = {};
Yr.parse = ln;
Yr.stringify = sn;
var Nr = ",", ua = " ", pr = "";
function ln(r) {
  for (var a = [], e = String(r || pr), t = e.indexOf(Nr), l = 0, c = !1, d; !c; )
    t === -1 && (t = e.length, c = !0), d = e.slice(l, t).trim(), (d || !c) && a.push(d), l = t + 1, t = e.indexOf(Nr, l);
  return a;
}
n(ln, "parse$1");
function sn(r, a) {
  var e = a || {}, t = e.padLeft === !1 ? pr : ua, l = e.padRight ? ua : pr;
  return r[r.length - 1] === pr && (r = r.concat(pr)), r.join(l + Nr + t).trim();
}
n(sn, "stringify$1");
var cn = Pt, pa = Vr, vn = rn, da = Zr.parse, ga = Yr.parse, un = dn, pn = {}.hasOwnProperty;
function dn(r, a, e) {
  var t = e ? bn(e) : null;
  return l;
  function l(d, i) {
    var m = vn(d, a), S = Array.prototype.slice.call(arguments, 2), h = m.tagName.toLowerCase(), g;
    if (m.tagName = t && pn.call(t, h) ? t[h] : h, i && gn(i, m) && (S.unshift(i), i = null), i)
      for (g in i)
        c(m.properties, g, i[g]);
    return Ga(m.children, S), m.tagName === "template" && (m.content = {
      type: "root",
      children: m.children
    }, m.children = []), m;
  }
  function c(d, i, m) {
    var S, h, g;
    m == null || m !== m || (S = cn(r, i), h = S.property, g = m, typeof g == "string" && (S.spaceSeparated ? g = da(g) : S.commaSeparated ? g = ga(g) : S.commaOrSpaceSeparated && (g = da(ga(g).join(" ")))), h === "style" && typeof m != "string" && (g = hn(g)), h === "className" && d.className && (g = d.className.concat(g)), d[h] = mn(S, h, g));
  }
}
n(dn, "factory$1");
function gn(r, a) {
  return typeof r == "string" || "length" in r || fn(a.tagName, r);
}
n(gn, "isChildren");
function fn(r, a) {
  var e = a.type;
  return r === "input" || !e || typeof e != "string" ? !1 : J(a.children) === "object" && "length" in a.children ? !0 : (e = e.toLowerCase(), r === "button" ? e !== "menu" && e !== "submit" && e !== "reset" && e !== "button" : "value" in a);
}
n(fn, "isNode");
function Ga(r, a) {
  var e, t;
  if (typeof a == "string" || typeof a == "number") {
    r.push({
      type: "text",
      value: String(a)
    });
    return;
  }
  if (J(a) === "object" && "length" in a) {
    for (e = -1, t = a.length; ++e < t; )
      Ga(r, a[e]);
    return;
  }
  if (J(a) !== "object" || !("type" in a))
    throw new Error("Expected node, nodes, or string, got `" + a + "`");
  r.push(a);
}
n(Ga, "addChild");
function mn(r, a, e) {
  var t, l, c;
  if (J(e) !== "object" || !("length" in e))
    return fa(r, a, e);
  for (l = e.length, t = -1, c = []; ++t < l; )
    c[t] = fa(r, a, e[t]);
  return c;
}
n(mn, "parsePrimitives");
function fa(r, a, e) {
  var t = e;
  return r.number || r.positiveNumber ? !isNaN(t) && t !== "" && (t = Number(t)) : (r.boolean || r.overloadedBoolean) && typeof t == "string" && (t === "" || pa(e) === pa(a)) && (t = !0), t;
}
n(fa, "parsePrimitive");
function hn(r) {
  var a = [], e;
  for (e in r)
    a.push([e, r[e]].join(": "));
  return a.join("; ");
}
n(hn, "style");
function bn(r) {
  for (var a = r.length, e = -1, t = {}, l; ++e < a; )
    l = r[e], t[l.toLowerCase()] = l;
  return t;
}
n(bn, "createAdjustMap");
var yn = Gt, wn = un, Va = wn(yn, "div");
Va.displayName = "html";
var xn = Va, Sn = xn, qn = "\xC6", An = "&", En = "\xC1", kn = "\xC2", Ln = "\xC0", Nn = "\xC5", Tn = "\xC3", $n = "\xC4", Dn = "\xA9", Cn = "\xC7", Rn = "\xD0", In = "\xC9", On = "\xCA", Fn = "\xC8", Un = "\xCB", _n = ">", Bn = "\xCD", jn = "\xCE", Hn = "\xCC", Gn = "\xCF", Vn = "<", zn = "\xD1", Mn = "\xD3", Pn = "\xD4", Zn = "\xD2", Yn = "\xD8", Wn = "\xD5", Jn = "\xD6", Kn = '"', Xn = "\xAE", Qn = "\xDE", ro = "\xDA", ao = "\xDB", eo = "\xD9", to = "\xDC", no = "\xDD", oo = "\xE1", lo = "\xE2", io = "\xB4", so = "\xE6", co = "\xE0", vo = "&", uo = "\xE5", po = "\xE3", go = "\xE4", fo = "\xA6", mo = "\xE7", ho = "\xB8", bo = "\xA2", yo = "\xA9", wo = "\xA4", xo = "\xB0", So = "\xF7", qo = "\xE9", Ao = "\xEA", Eo = "\xE8", ko = "\xF0", Lo = "\xEB", No = "\xBD", To = "\xBC", $o = "\xBE", Do = ">", Co = "\xED", Ro = "\xEE", Io = "\xA1", Oo = "\xEC", Fo = "\xBF", Uo = "\xEF", _o = "\xAB", Bo = "<", jo = "\xAF", Ho = "\xB5", Go = "\xB7", Vo = "\xA0", zo = "\xAC", Mo = "\xF1", Po = "\xF3", Zo = "\xF4", Yo = "\xF2", Wo = "\xAA", Jo = "\xBA", Ko = "\xF8", Xo = "\xF5", Qo = "\xF6", rl = "\xB6", al = "\xB1", el = "\xA3", tl = '"', nl = "\xBB", ol = "\xAE", ll = "\xA7", il = "\xAD", sl = "\xB9", cl = "\xB2", vl = "\xB3", ul = "\xDF", pl = "\xFE", dl = "\xD7", gl = "\xFA", fl = "\xFB", ml = "\xF9", hl = "\xA8", bl = "\xFC", yl = "\xFD", wl = "\xA5", xl = "\xFF", Sl = {
  AElig: qn,
  AMP: An,
  Aacute: En,
  Acirc: kn,
  Agrave: Ln,
  Aring: Nn,
  Atilde: Tn,
  Auml: $n,
  COPY: Dn,
  Ccedil: Cn,
  ETH: Rn,
  Eacute: In,
  Ecirc: On,
  Egrave: Fn,
  Euml: Un,
  GT: _n,
  Iacute: Bn,
  Icirc: jn,
  Igrave: Hn,
  Iuml: Gn,
  LT: Vn,
  Ntilde: zn,
  Oacute: Mn,
  Ocirc: Pn,
  Ograve: Zn,
  Oslash: Yn,
  Otilde: Wn,
  Ouml: Jn,
  QUOT: Kn,
  REG: Xn,
  THORN: Qn,
  Uacute: ro,
  Ucirc: ao,
  Ugrave: eo,
  Uuml: to,
  Yacute: no,
  aacute: oo,
  acirc: lo,
  acute: io,
  aelig: so,
  agrave: co,
  amp: vo,
  aring: uo,
  atilde: po,
  auml: go,
  brvbar: fo,
  ccedil: mo,
  cedil: ho,
  cent: bo,
  copy: yo,
  curren: wo,
  deg: xo,
  divide: So,
  eacute: qo,
  ecirc: Ao,
  egrave: Eo,
  eth: ko,
  euml: Lo,
  frac12: No,
  frac14: To,
  frac34: $o,
  gt: Do,
  iacute: Co,
  icirc: Ro,
  iexcl: Io,
  igrave: Oo,
  iquest: Fo,
  iuml: Uo,
  laquo: _o,
  lt: Bo,
  macr: jo,
  micro: Ho,
  middot: Go,
  nbsp: Vo,
  not: zo,
  ntilde: Mo,
  oacute: Po,
  ocirc: Zo,
  ograve: Yo,
  ordf: Wo,
  ordm: Jo,
  oslash: Ko,
  otilde: Xo,
  ouml: Qo,
  para: rl,
  plusmn: al,
  pound: el,
  quot: tl,
  raquo: nl,
  reg: ol,
  sect: ll,
  shy: il,
  sup1: sl,
  sup2: cl,
  sup3: vl,
  szlig: ul,
  thorn: pl,
  times: dl,
  uacute: gl,
  ucirc: fl,
  ugrave: ml,
  uml: hl,
  uuml: bl,
  yacute: yl,
  yen: wl,
  yuml: xl
}, ql = {
  0: "\uFFFD",
  128: "\u20AC",
  130: "\u201A",
  131: "\u0192",
  132: "\u201E",
  133: "\u2026",
  134: "\u2020",
  135: "\u2021",
  136: "\u02C6",
  137: "\u2030",
  138: "\u0160",
  139: "\u2039",
  140: "\u0152",
  142: "\u017D",
  145: "\u2018",
  146: "\u2019",
  147: "\u201C",
  148: "\u201D",
  149: "\u2022",
  150: "\u2013",
  151: "\u2014",
  152: "\u02DC",
  153: "\u2122",
  154: "\u0161",
  155: "\u203A",
  156: "\u0153",
  158: "\u017E",
  159: "\u0178"
}, za = Al;
function Al(r) {
  var a = typeof r == "string" ? r.charCodeAt(0) : r;
  return a >= 48 && a <= 57;
}
n(Al, "decimal$2");
var El = kl;
function kl(r) {
  var a = typeof r == "string" ? r.charCodeAt(0) : r;
  return a >= 97 && a <= 102 || a >= 65 && a <= 70 || a >= 48 && a <= 57;
}
n(kl, "hexadecimal$1");
var Ll = Nl;
function Nl(r) {
  var a = typeof r == "string" ? r.charCodeAt(0) : r;
  return a >= 97 && a <= 122 || a >= 65 && a <= 90;
}
n(Nl, "alphabetical$1");
var Tl = Ll, $l = za, Dl = Cl;
function Cl(r) {
  return Tl(r) || $l(r);
}
n(Cl, "alphanumerical$1");
var Rl = "\xC6", Il = "\xC6", Ol = "&", Fl = "&", Ul = "\xC1", _l = "\xC1", Bl = "\u0102", jl = "\xC2", Hl = "\xC2", Gl = "\u0410", Vl = "\u{1D504}", zl = "\xC0", Ml = "\xC0", Pl = "\u0391", Zl = "\u0100", Yl = "\u2A53", Wl = "\u0104", Jl = "\u{1D538}", Kl = "\u2061", Xl = "\xC5", Ql = "\xC5", ri = "\u{1D49C}", ai = "\u2254", ei = "\xC3", ti = "\xC3", ni = "\xC4", oi = "\xC4", li = "\u2216", ii = "\u2AE7", si = "\u2306", ci = "\u0411", vi = "\u2235", ui = "\u212C", pi = "\u0392", di = "\u{1D505}", gi = "\u{1D539}", fi = "\u02D8", mi = "\u212C", hi = "\u224E", bi = "\u0427", yi = "\xA9", wi = "\xA9", xi = "\u0106", Si = "\u22D2", qi = "\u2145", Ai = "\u212D", Ei = "\u010C", ki = "\xC7", Li = "\xC7", Ni = "\u0108", Ti = "\u2230", $i = "\u010A", Di = "\xB8", Ci = "\xB7", Ri = "\u212D", Ii = "\u03A7", Oi = "\u2299", Fi = "\u2296", Ui = "\u2295", _i = "\u2297", Bi = "\u2232", ji = "\u201D", Hi = "\u2019", Gi = "\u2237", Vi = "\u2A74", zi = "\u2261", Mi = "\u222F", Pi = "\u222E", Zi = "\u2102", Yi = "\u2210", Wi = "\u2233", Ji = "\u2A2F", Ki = "\u{1D49E}", Xi = "\u22D3", Qi = "\u224D", rs = "\u2145", as = "\u2911", es = "\u0402", ts = "\u0405", ns = "\u040F", os = "\u2021", ls = "\u21A1", is = "\u2AE4", ss = "\u010E", cs = "\u0414", vs = "\u2207", us = "\u0394", ps = "\u{1D507}", ds = "\xB4", gs = "\u02D9", fs = "\u02DD", ms = "`", hs = "\u02DC", bs = "\u22C4", ys = "\u2146", ws = "\u{1D53B}", xs = "\xA8", Ss = "\u20DC", qs = "\u2250", As = "\u222F", Es = "\xA8", ks = "\u21D3", Ls = "\u21D0", Ns = "\u21D4", Ts = "\u2AE4", $s = "\u27F8", Ds = "\u27FA", Cs = "\u27F9", Rs = "\u21D2", Is = "\u22A8", Os = "\u21D1", Fs = "\u21D5", Us = "\u2225", _s = "\u2193", Bs = "\u2913", js = "\u21F5", Hs = "\u0311", Gs = "\u2950", Vs = "\u295E", zs = "\u21BD", Ms = "\u2956", Ps = "\u295F", Zs = "\u21C1", Ys = "\u2957", Ws = "\u22A4", Js = "\u21A7", Ks = "\u21D3", Xs = "\u{1D49F}", Qs = "\u0110", rc = "\u014A", ac = "\xD0", ec = "\xD0", tc = "\xC9", nc = "\xC9", oc = "\u011A", lc = "\xCA", ic = "\xCA", sc = "\u042D", cc = "\u0116", vc = "\u{1D508}", uc = "\xC8", pc = "\xC8", dc = "\u2208", gc = "\u0112", fc = "\u25FB", mc = "\u25AB", hc = "\u0118", bc = "\u{1D53C}", yc = "\u0395", wc = "\u2A75", xc = "\u2242", Sc = "\u21CC", qc = "\u2130", Ac = "\u2A73", Ec = "\u0397", kc = "\xCB", Lc = "\xCB", Nc = "\u2203", Tc = "\u2147", $c = "\u0424", Dc = "\u{1D509}", Cc = "\u25FC", Rc = "\u25AA", Ic = "\u{1D53D}", Oc = "\u2200", Fc = "\u2131", Uc = "\u2131", _c = "\u0403", Bc = ">", jc = ">", Hc = "\u0393", Gc = "\u03DC", Vc = "\u011E", zc = "\u0122", Mc = "\u011C", Pc = "\u0413", Zc = "\u0120", Yc = "\u{1D50A}", Wc = "\u22D9", Jc = "\u{1D53E}", Kc = "\u2265", Xc = "\u22DB", Qc = "\u2267", rv = "\u2AA2", av = "\u2277", ev = "\u2A7E", tv = "\u2273", nv = "\u{1D4A2}", ov = "\u226B", lv = "\u042A", iv = "\u02C7", sv = "^", cv = "\u0124", vv = "\u210C", uv = "\u210B", pv = "\u210D", dv = "\u2500", gv = "\u210B", fv = "\u0126", mv = "\u224E", hv = "\u224F", bv = "\u0415", yv = "\u0132", wv = "\u0401", xv = "\xCD", Sv = "\xCD", qv = "\xCE", Av = "\xCE", Ev = "\u0418", kv = "\u0130", Lv = "\u2111", Nv = "\xCC", Tv = "\xCC", $v = "\u2111", Dv = "\u012A", Cv = "\u2148", Rv = "\u21D2", Iv = "\u222C", Ov = "\u222B", Fv = "\u22C2", Uv = "\u2063", _v = "\u2062", Bv = "\u012E", jv = "\u{1D540}", Hv = "\u0399", Gv = "\u2110", Vv = "\u0128", zv = "\u0406", Mv = "\xCF", Pv = "\xCF", Zv = "\u0134", Yv = "\u0419", Wv = "\u{1D50D}", Jv = "\u{1D541}", Kv = "\u{1D4A5}", Xv = "\u0408", Qv = "\u0404", ru = "\u0425", au = "\u040C", eu = "\u039A", tu = "\u0136", nu = "\u041A", ou = "\u{1D50E}", lu = "\u{1D542}", iu = "\u{1D4A6}", su = "\u0409", cu = "<", vu = "<", uu = "\u0139", pu = "\u039B", du = "\u27EA", gu = "\u2112", fu = "\u219E", mu = "\u013D", hu = "\u013B", bu = "\u041B", yu = "\u27E8", wu = "\u2190", xu = "\u21E4", Su = "\u21C6", qu = "\u2308", Au = "\u27E6", Eu = "\u2961", ku = "\u21C3", Lu = "\u2959", Nu = "\u230A", Tu = "\u2194", $u = "\u294E", Du = "\u22A3", Cu = "\u21A4", Ru = "\u295A", Iu = "\u22B2", Ou = "\u29CF", Fu = "\u22B4", Uu = "\u2951", _u = "\u2960", Bu = "\u21BF", ju = "\u2958", Hu = "\u21BC", Gu = "\u2952", Vu = "\u21D0", zu = "\u21D4", Mu = "\u22DA", Pu = "\u2266", Zu = "\u2276", Yu = "\u2AA1", Wu = "\u2A7D", Ju = "\u2272", Ku = "\u{1D50F}", Xu = "\u22D8", Qu = "\u21DA", rp = "\u013F", ap = "\u27F5", ep = "\u27F7", tp = "\u27F6", np = "\u27F8", op = "\u27FA", lp = "\u27F9", ip = "\u{1D543}", sp = "\u2199", cp = "\u2198", vp = "\u2112", up = "\u21B0", pp = "\u0141", dp = "\u226A", gp = "\u041C", fp = "\u205F", mp = "\u2133", hp = "\u{1D510}", bp = "\u2213", yp = "\u{1D544}", wp = "\u2133", xp = "\u039C", Sp = "\u040A", qp = "\u0143", Ap = "\u0147", Ep = "\u0145", kp = "\u041D", Lp = "\u200B", Np = "\u200B", Tp = "\u200B", $p = "\u200B", Dp = "\u226B", Cp = "\u226A", Rp = `
`, Ip = "\u{1D511}", Op = "\u2060", Fp = "\xA0", Up = "\u2115", _p = "\u2AEC", Bp = "\u2262", jp = "\u226D", Hp = "\u2226", Gp = "\u2209", Vp = "\u2260", zp = "\u2242\u0338", Mp = "\u2204", Pp = "\u226F", Zp = "\u2271", Yp = "\u2267\u0338", Wp = "\u226B\u0338", Jp = "\u2279", Kp = "\u2A7E\u0338", Xp = "\u2275", Qp = "\u224E\u0338", rd = "\u224F\u0338", ad = "\u22EA", ed = "\u29CF\u0338", td = "\u22EC", nd = "\u226E", od = "\u2270", ld = "\u2278", id = "\u226A\u0338", sd = "\u2A7D\u0338", cd = "\u2274", vd = "\u2AA2\u0338", ud = "\u2AA1\u0338", pd = "\u2280", dd = "\u2AAF\u0338", gd = "\u22E0", fd = "\u220C", md = "\u22EB", hd = "\u29D0\u0338", bd = "\u22ED", yd = "\u228F\u0338", wd = "\u22E2", xd = "\u2290\u0338", Sd = "\u22E3", qd = "\u2282\u20D2", Ad = "\u2288", Ed = "\u2281", kd = "\u2AB0\u0338", Ld = "\u22E1", Nd = "\u227F\u0338", Td = "\u2283\u20D2", $d = "\u2289", Dd = "\u2241", Cd = "\u2244", Rd = "\u2247", Id = "\u2249", Od = "\u2224", Fd = "\u{1D4A9}", Ud = "\xD1", _d = "\xD1", Bd = "\u039D", jd = "\u0152", Hd = "\xD3", Gd = "\xD3", Vd = "\xD4", zd = "\xD4", Md = "\u041E", Pd = "\u0150", Zd = "\u{1D512}", Yd = "\xD2", Wd = "\xD2", Jd = "\u014C", Kd = "\u03A9", Xd = "\u039F", Qd = "\u{1D546}", rg = "\u201C", ag = "\u2018", eg = "\u2A54", tg = "\u{1D4AA}", ng = "\xD8", og = "\xD8", lg = "\xD5", ig = "\xD5", sg = "\u2A37", cg = "\xD6", vg = "\xD6", ug = "\u203E", pg = "\u23DE", dg = "\u23B4", gg = "\u23DC", fg = "\u2202", mg = "\u041F", hg = "\u{1D513}", bg = "\u03A6", yg = "\u03A0", wg = "\xB1", xg = "\u210C", Sg = "\u2119", qg = "\u2ABB", Ag = "\u227A", Eg = "\u2AAF", kg = "\u227C", Lg = "\u227E", Ng = "\u2033", Tg = "\u220F", $g = "\u2237", Dg = "\u221D", Cg = "\u{1D4AB}", Rg = "\u03A8", Ig = '"', Og = '"', Fg = "\u{1D514}", Ug = "\u211A", _g = "\u{1D4AC}", Bg = "\u2910", jg = "\xAE", Hg = "\xAE", Gg = "\u0154", Vg = "\u27EB", zg = "\u21A0", Mg = "\u2916", Pg = "\u0158", Zg = "\u0156", Yg = "\u0420", Wg = "\u211C", Jg = "\u220B", Kg = "\u21CB", Xg = "\u296F", Qg = "\u211C", rf = "\u03A1", af = "\u27E9", ef = "\u2192", tf = "\u21E5", nf = "\u21C4", of = "\u2309", lf = "\u27E7", sf = "\u295D", cf = "\u21C2", vf = "\u2955", uf = "\u230B", pf = "\u22A2", df = "\u21A6", gf = "\u295B", ff = "\u22B3", mf = "\u29D0", hf = "\u22B5", bf = "\u294F", yf = "\u295C", wf = "\u21BE", xf = "\u2954", Sf = "\u21C0", qf = "\u2953", Af = "\u21D2", Ef = "\u211D", kf = "\u2970", Lf = "\u21DB", Nf = "\u211B", Tf = "\u21B1", $f = "\u29F4", Df = "\u0429", Cf = "\u0428", Rf = "\u042C", If = "\u015A", Of = "\u2ABC", Ff = "\u0160", Uf = "\u015E", _f = "\u015C", Bf = "\u0421", jf = "\u{1D516}", Hf = "\u2193", Gf = "\u2190", Vf = "\u2192", zf = "\u2191", Mf = "\u03A3", Pf = "\u2218", Zf = "\u{1D54A}", Yf = "\u221A", Wf = "\u25A1", Jf = "\u2293", Kf = "\u228F", Xf = "\u2291", Qf = "\u2290", rm = "\u2292", am = "\u2294", em = "\u{1D4AE}", tm = "\u22C6", nm = "\u22D0", om = "\u22D0", lm = "\u2286", im = "\u227B", sm = "\u2AB0", cm = "\u227D", vm = "\u227F", um = "\u220B", pm = "\u2211", dm = "\u22D1", gm = "\u2283", fm = "\u2287", mm = "\u22D1", hm = "\xDE", bm = "\xDE", ym = "\u2122", wm = "\u040B", xm = "\u0426", Sm = "	", qm = "\u03A4", Am = "\u0164", Em = "\u0162", km = "\u0422", Lm = "\u{1D517}", Nm = "\u2234", Tm = "\u0398", $m = "\u205F\u200A", Dm = "\u2009", Cm = "\u223C", Rm = "\u2243", Im = "\u2245", Om = "\u2248", Fm = "\u{1D54B}", Um = "\u20DB", _m = "\u{1D4AF}", Bm = "\u0166", jm = "\xDA", Hm = "\xDA", Gm = "\u219F", Vm = "\u2949", zm = "\u040E", Mm = "\u016C", Pm = "\xDB", Zm = "\xDB", Ym = "\u0423", Wm = "\u0170", Jm = "\u{1D518}", Km = "\xD9", Xm = "\xD9", Qm = "\u016A", rh = "_", ah = "\u23DF", eh = "\u23B5", th = "\u23DD", nh = "\u22C3", oh = "\u228E", lh = "\u0172", ih = "\u{1D54C}", sh = "\u2191", ch = "\u2912", vh = "\u21C5", uh = "\u2195", ph = "\u296E", dh = "\u22A5", gh = "\u21A5", fh = "\u21D1", mh = "\u21D5", hh = "\u2196", bh = "\u2197", yh = "\u03D2", wh = "\u03A5", xh = "\u016E", Sh = "\u{1D4B0}", qh = "\u0168", Ah = "\xDC", Eh = "\xDC", kh = "\u22AB", Lh = "\u2AEB", Nh = "\u0412", Th = "\u22A9", $h = "\u2AE6", Dh = "\u22C1", Ch = "\u2016", Rh = "\u2016", Ih = "\u2223", Oh = "|", Fh = "\u2758", Uh = "\u2240", _h = "\u200A", Bh = "\u{1D519}", jh = "\u{1D54D}", Hh = "\u{1D4B1}", Gh = "\u22AA", Vh = "\u0174", zh = "\u22C0", Mh = "\u{1D51A}", Ph = "\u{1D54E}", Zh = "\u{1D4B2}", Yh = "\u{1D51B}", Wh = "\u039E", Jh = "\u{1D54F}", Kh = "\u{1D4B3}", Xh = "\u042F", Qh = "\u0407", rb = "\u042E", ab = "\xDD", eb = "\xDD", tb = "\u0176", nb = "\u042B", ob = "\u{1D51C}", lb = "\u{1D550}", ib = "\u{1D4B4}", sb = "\u0178", cb = "\u0416", vb = "\u0179", ub = "\u017D", pb = "\u0417", db = "\u017B", gb = "\u200B", fb = "\u0396", mb = "\u2128", hb = "\u2124", bb = "\u{1D4B5}", yb = "\xE1", wb = "\xE1", xb = "\u0103", Sb = "\u223E", qb = "\u223E\u0333", Ab = "\u223F", Eb = "\xE2", kb = "\xE2", Lb = "\xB4", Nb = "\xB4", Tb = "\u0430", $b = "\xE6", Db = "\xE6", Cb = "\u2061", Rb = "\u{1D51E}", Ib = "\xE0", Ob = "\xE0", Fb = "\u2135", Ub = "\u2135", _b = "\u03B1", Bb = "\u0101", jb = "\u2A3F", Hb = "&", Gb = "&", Vb = "\u2227", zb = "\u2A55", Mb = "\u2A5C", Pb = "\u2A58", Zb = "\u2A5A", Yb = "\u2220", Wb = "\u29A4", Jb = "\u2220", Kb = "\u2221", Xb = "\u29A8", Qb = "\u29A9", ry = "\u29AA", ay = "\u29AB", ey = "\u29AC", ty = "\u29AD", ny = "\u29AE", oy = "\u29AF", ly = "\u221F", iy = "\u22BE", sy = "\u299D", cy = "\u2222", vy = "\xC5", uy = "\u237C", py = "\u0105", dy = "\u{1D552}", gy = "\u2248", fy = "\u2A70", my = "\u2A6F", hy = "\u224A", by = "\u224B", yy = "'", wy = "\u2248", xy = "\u224A", Sy = "\xE5", qy = "\xE5", Ay = "\u{1D4B6}", Ey = "*", ky = "\u2248", Ly = "\u224D", Ny = "\xE3", Ty = "\xE3", $y = "\xE4", Dy = "\xE4", Cy = "\u2233", Ry = "\u2A11", Iy = "\u2AED", Oy = "\u224C", Fy = "\u03F6", Uy = "\u2035", _y = "\u223D", By = "\u22CD", jy = "\u22BD", Hy = "\u2305", Gy = "\u2305", Vy = "\u23B5", zy = "\u23B6", My = "\u224C", Py = "\u0431", Zy = "\u201E", Yy = "\u2235", Wy = "\u2235", Jy = "\u29B0", Ky = "\u03F6", Xy = "\u212C", Qy = "\u03B2", rw = "\u2136", aw = "\u226C", ew = "\u{1D51F}", tw = "\u22C2", nw = "\u25EF", ow = "\u22C3", lw = "\u2A00", iw = "\u2A01", sw = "\u2A02", cw = "\u2A06", vw = "\u2605", uw = "\u25BD", pw = "\u25B3", dw = "\u2A04", gw = "\u22C1", fw = "\u22C0", mw = "\u290D", hw = "\u29EB", bw = "\u25AA", yw = "\u25B4", ww = "\u25BE", xw = "\u25C2", Sw = "\u25B8", qw = "\u2423", Aw = "\u2592", Ew = "\u2591", kw = "\u2593", Lw = "\u2588", Nw = "=\u20E5", Tw = "\u2261\u20E5", $w = "\u2310", Dw = "\u{1D553}", Cw = "\u22A5", Rw = "\u22A5", Iw = "\u22C8", Ow = "\u2557", Fw = "\u2554", Uw = "\u2556", _w = "\u2553", Bw = "\u2550", jw = "\u2566", Hw = "\u2569", Gw = "\u2564", Vw = "\u2567", zw = "\u255D", Mw = "\u255A", Pw = "\u255C", Zw = "\u2559", Yw = "\u2551", Ww = "\u256C", Jw = "\u2563", Kw = "\u2560", Xw = "\u256B", Qw = "\u2562", rx = "\u255F", ax = "\u29C9", ex = "\u2555", tx = "\u2552", nx = "\u2510", ox = "\u250C", lx = "\u2500", ix = "\u2565", sx = "\u2568", cx = "\u252C", vx = "\u2534", ux = "\u229F", px = "\u229E", dx = "\u22A0", gx = "\u255B", fx = "\u2558", mx = "\u2518", hx = "\u2514", bx = "\u2502", yx = "\u256A", wx = "\u2561", xx = "\u255E", Sx = "\u253C", qx = "\u2524", Ax = "\u251C", Ex = "\u2035", kx = "\u02D8", Lx = "\xA6", Nx = "\xA6", Tx = "\u{1D4B7}", $x = "\u204F", Dx = "\u223D", Cx = "\u22CD", Rx = "\\", Ix = "\u29C5", Ox = "\u27C8", Fx = "\u2022", Ux = "\u2022", _x = "\u224E", Bx = "\u2AAE", jx = "\u224F", Hx = "\u224F", Gx = "\u0107", Vx = "\u2229", zx = "\u2A44", Mx = "\u2A49", Px = "\u2A4B", Zx = "\u2A47", Yx = "\u2A40", Wx = "\u2229\uFE00", Jx = "\u2041", Kx = "\u02C7", Xx = "\u2A4D", Qx = "\u010D", rS = "\xE7", aS = "\xE7", eS = "\u0109", tS = "\u2A4C", nS = "\u2A50", oS = "\u010B", lS = "\xB8", iS = "\xB8", sS = "\u29B2", cS = "\xA2", vS = "\xA2", uS = "\xB7", pS = "\u{1D520}", dS = "\u0447", gS = "\u2713", fS = "\u2713", mS = "\u03C7", hS = "\u25CB", bS = "\u29C3", yS = "\u02C6", wS = "\u2257", xS = "\u21BA", SS = "\u21BB", qS = "\xAE", AS = "\u24C8", ES = "\u229B", kS = "\u229A", LS = "\u229D", NS = "\u2257", TS = "\u2A10", $S = "\u2AEF", DS = "\u29C2", CS = "\u2663", RS = "\u2663", IS = ":", OS = "\u2254", FS = "\u2254", US = ",", _S = "@", BS = "\u2201", jS = "\u2218", HS = "\u2201", GS = "\u2102", VS = "\u2245", zS = "\u2A6D", MS = "\u222E", PS = "\u{1D554}", ZS = "\u2210", YS = "\xA9", WS = "\xA9", JS = "\u2117", KS = "\u21B5", XS = "\u2717", QS = "\u{1D4B8}", rq = "\u2ACF", aq = "\u2AD1", eq = "\u2AD0", tq = "\u2AD2", nq = "\u22EF", oq = "\u2938", lq = "\u2935", iq = "\u22DE", sq = "\u22DF", cq = "\u21B6", vq = "\u293D", uq = "\u222A", pq = "\u2A48", dq = "\u2A46", gq = "\u2A4A", fq = "\u228D", mq = "\u2A45", hq = "\u222A\uFE00", bq = "\u21B7", yq = "\u293C", wq = "\u22DE", xq = "\u22DF", Sq = "\u22CE", qq = "\u22CF", Aq = "\xA4", Eq = "\xA4", kq = "\u21B6", Lq = "\u21B7", Nq = "\u22CE", Tq = "\u22CF", $q = "\u2232", Dq = "\u2231", Cq = "\u232D", Rq = "\u21D3", Iq = "\u2965", Oq = "\u2020", Fq = "\u2138", Uq = "\u2193", _q = "\u2010", Bq = "\u22A3", jq = "\u290F", Hq = "\u02DD", Gq = "\u010F", Vq = "\u0434", zq = "\u2146", Mq = "\u2021", Pq = "\u21CA", Zq = "\u2A77", Yq = "\xB0", Wq = "\xB0", Jq = "\u03B4", Kq = "\u29B1", Xq = "\u297F", Qq = "\u{1D521}", rA = "\u21C3", aA = "\u21C2", eA = "\u22C4", tA = "\u22C4", nA = "\u2666", oA = "\u2666", lA = "\xA8", iA = "\u03DD", sA = "\u22F2", cA = "\xF7", vA = "\xF7", uA = "\xF7", pA = "\u22C7", dA = "\u22C7", gA = "\u0452", fA = "\u231E", mA = "\u230D", hA = "$", bA = "\u{1D555}", yA = "\u02D9", wA = "\u2250", xA = "\u2251", SA = "\u2238", qA = "\u2214", AA = "\u22A1", EA = "\u2306", kA = "\u2193", LA = "\u21CA", NA = "\u21C3", TA = "\u21C2", $A = "\u2910", DA = "\u231F", CA = "\u230C", RA = "\u{1D4B9}", IA = "\u0455", OA = "\u29F6", FA = "\u0111", UA = "\u22F1", _A = "\u25BF", BA = "\u25BE", jA = "\u21F5", HA = "\u296F", GA = "\u29A6", VA = "\u045F", zA = "\u27FF", MA = "\u2A77", PA = "\u2251", ZA = "\xE9", YA = "\xE9", WA = "\u2A6E", JA = "\u011B", KA = "\xEA", XA = "\xEA", QA = "\u2255", rE = "\u044D", aE = "\u0117", eE = "\u2147", tE = "\u2252", nE = "\u{1D522}", oE = "\u2A9A", lE = "\xE8", iE = "\xE8", sE = "\u2A96", cE = "\u2A98", vE = "\u2A99", uE = "\u23E7", pE = "\u2113", dE = "\u2A95", gE = "\u2A97", fE = "\u0113", mE = "\u2205", hE = "\u2205", bE = "\u2205", yE = "\u2004", wE = "\u2005", xE = "\u2003", SE = "\u014B", qE = "\u2002", AE = "\u0119", EE = "\u{1D556}", kE = "\u22D5", LE = "\u29E3", NE = "\u2A71", TE = "\u03B5", $E = "\u03B5", DE = "\u03F5", CE = "\u2256", RE = "\u2255", IE = "\u2242", OE = "\u2A96", FE = "\u2A95", UE = "=", _E = "\u225F", BE = "\u2261", jE = "\u2A78", HE = "\u29E5", GE = "\u2253", VE = "\u2971", zE = "\u212F", ME = "\u2250", PE = "\u2242", ZE = "\u03B7", YE = "\xF0", WE = "\xF0", JE = "\xEB", KE = "\xEB", XE = "\u20AC", QE = "!", rk = "\u2203", ak = "\u2130", ek = "\u2147", tk = "\u2252", nk = "\u0444", ok = "\u2640", lk = "\uFB03", ik = "\uFB00", sk = "\uFB04", ck = "\u{1D523}", vk = "\uFB01", uk = "fj", pk = "\u266D", dk = "\uFB02", gk = "\u25B1", fk = "\u0192", mk = "\u{1D557}", hk = "\u2200", bk = "\u22D4", yk = "\u2AD9", wk = "\u2A0D", xk = "\xBC", Sk = "\xBD", qk = "\u2153", Ak = "\xBC", Ek = "\u2155", kk = "\u2159", Lk = "\u215B", Nk = "\u2154", Tk = "\u2156", $k = "\xBE", Dk = "\xBE", Ck = "\u2157", Rk = "\u215C", Ik = "\u2158", Ok = "\u215A", Fk = "\u215D", Uk = "\u215E", _k = "\u2044", Bk = "\u2322", jk = "\u{1D4BB}", Hk = "\u2267", Gk = "\u2A8C", Vk = "\u01F5", zk = "\u03B3", Mk = "\u03DD", Pk = "\u2A86", Zk = "\u011F", Yk = "\u011D", Wk = "\u0433", Jk = "\u0121", Kk = "\u2265", Xk = "\u22DB", Qk = "\u2265", r1 = "\u2267", a1 = "\u2A7E", e1 = "\u2A7E", t1 = "\u2AA9", n1 = "\u2A80", o1 = "\u2A82", l1 = "\u2A84", i1 = "\u22DB\uFE00", s1 = "\u2A94", c1 = "\u{1D524}", v1 = "\u226B", u1 = "\u22D9", p1 = "\u2137", d1 = "\u0453", g1 = "\u2277", f1 = "\u2A92", m1 = "\u2AA5", h1 = "\u2AA4", b1 = "\u2269", y1 = "\u2A8A", w1 = "\u2A8A", x1 = "\u2A88", S1 = "\u2A88", q1 = "\u2269", A1 = "\u22E7", E1 = "\u{1D558}", k1 = "`", L1 = "\u210A", N1 = "\u2273", T1 = "\u2A8E", $1 = "\u2A90", D1 = ">", C1 = ">", R1 = "\u2AA7", I1 = "\u2A7A", O1 = "\u22D7", F1 = "\u2995", U1 = "\u2A7C", _1 = "\u2A86", B1 = "\u2978", j1 = "\u22D7", H1 = "\u22DB", G1 = "\u2A8C", V1 = "\u2277", z1 = "\u2273", M1 = "\u2269\uFE00", P1 = "\u2269\uFE00", Z1 = "\u21D4", Y1 = "\u200A", W1 = "\xBD", J1 = "\u210B", K1 = "\u044A", X1 = "\u2194", Q1 = "\u2948", rL = "\u21AD", aL = "\u210F", eL = "\u0125", tL = "\u2665", nL = "\u2665", oL = "\u2026", lL = "\u22B9", iL = "\u{1D525}", sL = "\u2925", cL = "\u2926", vL = "\u21FF", uL = "\u223B", pL = "\u21A9", dL = "\u21AA", gL = "\u{1D559}", fL = "\u2015", mL = "\u{1D4BD}", hL = "\u210F", bL = "\u0127", yL = "\u2043", wL = "\u2010", xL = "\xED", SL = "\xED", qL = "\u2063", AL = "\xEE", EL = "\xEE", kL = "\u0438", LL = "\u0435", NL = "\xA1", TL = "\xA1", $L = "\u21D4", DL = "\u{1D526}", CL = "\xEC", RL = "\xEC", IL = "\u2148", OL = "\u2A0C", FL = "\u222D", UL = "\u29DC", _L = "\u2129", BL = "\u0133", jL = "\u012B", HL = "\u2111", GL = "\u2110", VL = "\u2111", zL = "\u0131", ML = "\u22B7", PL = "\u01B5", ZL = "\u2105", YL = "\u221E", WL = "\u29DD", JL = "\u0131", KL = "\u222B", XL = "\u22BA", QL = "\u2124", rN = "\u22BA", aN = "\u2A17", eN = "\u2A3C", tN = "\u0451", nN = "\u012F", oN = "\u{1D55A}", lN = "\u03B9", iN = "\u2A3C", sN = "\xBF", cN = "\xBF", vN = "\u{1D4BE}", uN = "\u2208", pN = "\u22F9", dN = "\u22F5", gN = "\u22F4", fN = "\u22F3", mN = "\u2208", hN = "\u2062", bN = "\u0129", yN = "\u0456", wN = "\xEF", xN = "\xEF", SN = "\u0135", qN = "\u0439", AN = "\u{1D527}", EN = "\u0237", kN = "\u{1D55B}", LN = "\u{1D4BF}", NN = "\u0458", TN = "\u0454", $N = "\u03BA", DN = "\u03F0", CN = "\u0137", RN = "\u043A", IN = "\u{1D528}", ON = "\u0138", FN = "\u0445", UN = "\u045C", _N = "\u{1D55C}", BN = "\u{1D4C0}", jN = "\u21DA", HN = "\u21D0", GN = "\u291B", VN = "\u290E", zN = "\u2266", MN = "\u2A8B", PN = "\u2962", ZN = "\u013A", YN = "\u29B4", WN = "\u2112", JN = "\u03BB", KN = "\u27E8", XN = "\u2991", QN = "\u27E8", rT = "\u2A85", aT = "\xAB", eT = "\xAB", tT = "\u2190", nT = "\u21E4", oT = "\u291F", lT = "\u291D", iT = "\u21A9", sT = "\u21AB", cT = "\u2939", vT = "\u2973", uT = "\u21A2", pT = "\u2AAB", dT = "\u2919", gT = "\u2AAD", fT = "\u2AAD\uFE00", mT = "\u290C", hT = "\u2772", bT = "{", yT = "[", wT = "\u298B", xT = "\u298F", ST = "\u298D", qT = "\u013E", AT = "\u013C", ET = "\u2308", kT = "{", LT = "\u043B", NT = "\u2936", TT = "\u201C", $T = "\u201E", DT = "\u2967", CT = "\u294B", RT = "\u21B2", IT = "\u2264", OT = "\u2190", FT = "\u21A2", UT = "\u21BD", _T = "\u21BC", BT = "\u21C7", jT = "\u2194", HT = "\u21C6", GT = "\u21CB", VT = "\u21AD", zT = "\u22CB", MT = "\u22DA", PT = "\u2264", ZT = "\u2266", YT = "\u2A7D", WT = "\u2A7D", JT = "\u2AA8", KT = "\u2A7F", XT = "\u2A81", QT = "\u2A83", r$ = "\u22DA\uFE00", a$ = "\u2A93", e$ = "\u2A85", t$ = "\u22D6", n$ = "\u22DA", o$ = "\u2A8B", l$ = "\u2276", i$ = "\u2272", s$ = "\u297C", c$ = "\u230A", v$ = "\u{1D529}", u$ = "\u2276", p$ = "\u2A91", d$ = "\u21BD", g$ = "\u21BC", f$ = "\u296A", m$ = "\u2584", h$ = "\u0459", b$ = "\u226A", y$ = "\u21C7", w$ = "\u231E", x$ = "\u296B", S$ = "\u25FA", q$ = "\u0140", A$ = "\u23B0", E$ = "\u23B0", k$ = "\u2268", L$ = "\u2A89", N$ = "\u2A89", T$ = "\u2A87", $$ = "\u2A87", D$ = "\u2268", C$ = "\u22E6", R$ = "\u27EC", I$ = "\u21FD", O$ = "\u27E6", F$ = "\u27F5", U$ = "\u27F7", _$ = "\u27FC", B$ = "\u27F6", j$ = "\u21AB", H$ = "\u21AC", G$ = "\u2985", V$ = "\u{1D55D}", z$ = "\u2A2D", M$ = "\u2A34", P$ = "\u2217", Z$ = "_", Y$ = "\u25CA", W$ = "\u25CA", J$ = "\u29EB", K$ = "(", X$ = "\u2993", Q$ = "\u21C6", rD = "\u231F", aD = "\u21CB", eD = "\u296D", tD = "\u200E", nD = "\u22BF", oD = "\u2039", lD = "\u{1D4C1}", iD = "\u21B0", sD = "\u2272", cD = "\u2A8D", vD = "\u2A8F", uD = "[", pD = "\u2018", dD = "\u201A", gD = "\u0142", fD = "<", mD = "<", hD = "\u2AA6", bD = "\u2A79", yD = "\u22D6", wD = "\u22CB", xD = "\u22C9", SD = "\u2976", qD = "\u2A7B", AD = "\u2996", ED = "\u25C3", kD = "\u22B4", LD = "\u25C2", ND = "\u294A", TD = "\u2966", $D = "\u2268\uFE00", DD = "\u2268\uFE00", CD = "\u223A", RD = "\xAF", ID = "\xAF", OD = "\u2642", FD = "\u2720", UD = "\u2720", _D = "\u21A6", BD = "\u21A6", jD = "\u21A7", HD = "\u21A4", GD = "\u21A5", VD = "\u25AE", zD = "\u2A29", MD = "\u043C", PD = "\u2014", ZD = "\u2221", YD = "\u{1D52A}", WD = "\u2127", JD = "\xB5", KD = "\xB5", XD = "\u2223", QD = "*", r0 = "\u2AF0", a0 = "\xB7", e0 = "\xB7", t0 = "\u2212", n0 = "\u229F", o0 = "\u2238", l0 = "\u2A2A", i0 = "\u2ADB", s0 = "\u2026", c0 = "\u2213", v0 = "\u22A7", u0 = "\u{1D55E}", p0 = "\u2213", d0 = "\u{1D4C2}", g0 = "\u223E", f0 = "\u03BC", m0 = "\u22B8", h0 = "\u22B8", b0 = "\u22D9\u0338", y0 = "\u226B\u20D2", w0 = "\u226B\u0338", x0 = "\u21CD", S0 = "\u21CE", q0 = "\u22D8\u0338", A0 = "\u226A\u20D2", E0 = "\u226A\u0338", k0 = "\u21CF", L0 = "\u22AF", N0 = "\u22AE", T0 = "\u2207", $0 = "\u0144", D0 = "\u2220\u20D2", C0 = "\u2249", R0 = "\u2A70\u0338", I0 = "\u224B\u0338", O0 = "\u0149", F0 = "\u2249", U0 = "\u266E", _0 = "\u266E", B0 = "\u2115", j0 = "\xA0", H0 = "\xA0", G0 = "\u224E\u0338", V0 = "\u224F\u0338", z0 = "\u2A43", M0 = "\u0148", P0 = "\u0146", Z0 = "\u2247", Y0 = "\u2A6D\u0338", W0 = "\u2A42", J0 = "\u043D", K0 = "\u2013", X0 = "\u2260", Q0 = "\u21D7", rC = "\u2924", aC = "\u2197", eC = "\u2197", tC = "\u2250\u0338", nC = "\u2262", oC = "\u2928", lC = "\u2242\u0338", iC = "\u2204", sC = "\u2204", cC = "\u{1D52B}", vC = "\u2267\u0338", uC = "\u2271", pC = "\u2271", dC = "\u2267\u0338", gC = "\u2A7E\u0338", fC = "\u2A7E\u0338", mC = "\u2275", hC = "\u226F", bC = "\u226F", yC = "\u21CE", wC = "\u21AE", xC = "\u2AF2", SC = "\u220B", qC = "\u22FC", AC = "\u22FA", EC = "\u220B", kC = "\u045A", LC = "\u21CD", NC = "\u2266\u0338", TC = "\u219A", $C = "\u2025", DC = "\u2270", CC = "\u219A", RC = "\u21AE", IC = "\u2270", OC = "\u2266\u0338", FC = "\u2A7D\u0338", UC = "\u2A7D\u0338", _C = "\u226E", BC = "\u2274", jC = "\u226E", HC = "\u22EA", GC = "\u22EC", VC = "\u2224", zC = "\u{1D55F}", MC = "\xAC", PC = "\xAC", ZC = "\u2209", YC = "\u22F9\u0338", WC = "\u22F5\u0338", JC = "\u2209", KC = "\u22F7", XC = "\u22F6", QC = "\u220C", rR = "\u220C", aR = "\u22FE", eR = "\u22FD", tR = "\u2226", nR = "\u2226", oR = "\u2AFD\u20E5", lR = "\u2202\u0338", iR = "\u2A14", sR = "\u2280", cR = "\u22E0", vR = "\u2AAF\u0338", uR = "\u2280", pR = "\u2AAF\u0338", dR = "\u21CF", gR = "\u219B", fR = "\u2933\u0338", mR = "\u219D\u0338", hR = "\u219B", bR = "\u22EB", yR = "\u22ED", wR = "\u2281", xR = "\u22E1", SR = "\u2AB0\u0338", qR = "\u{1D4C3}", AR = "\u2224", ER = "\u2226", kR = "\u2241", LR = "\u2244", NR = "\u2244", TR = "\u2224", $R = "\u2226", DR = "\u22E2", CR = "\u22E3", RR = "\u2284", IR = "\u2AC5\u0338", OR = "\u2288", FR = "\u2282\u20D2", UR = "\u2288", _R = "\u2AC5\u0338", BR = "\u2281", jR = "\u2AB0\u0338", HR = "\u2285", GR = "\u2AC6\u0338", VR = "\u2289", zR = "\u2283\u20D2", MR = "\u2289", PR = "\u2AC6\u0338", ZR = "\u2279", YR = "\xF1", WR = "\xF1", JR = "\u2278", KR = "\u22EA", XR = "\u22EC", QR = "\u22EB", rI = "\u22ED", aI = "\u03BD", eI = "#", tI = "\u2116", nI = "\u2007", oI = "\u22AD", lI = "\u2904", iI = "\u224D\u20D2", sI = "\u22AC", cI = "\u2265\u20D2", vI = ">\u20D2", uI = "\u29DE", pI = "\u2902", dI = "\u2264\u20D2", gI = "<\u20D2", fI = "\u22B4\u20D2", mI = "\u2903", hI = "\u22B5\u20D2", bI = "\u223C\u20D2", yI = "\u21D6", wI = "\u2923", xI = "\u2196", SI = "\u2196", qI = "\u2927", AI = "\u24C8", EI = "\xF3", kI = "\xF3", LI = "\u229B", NI = "\xF4", TI = "\xF4", $I = "\u043E", DI = "\u229D", CI = "\u0151", RI = "\u2A38", II = "\u2299", OI = "\u29BC", FI = "\u0153", UI = "\u29BF", _I = "\u{1D52C}", BI = "\u02DB", jI = "\xF2", HI = "\xF2", GI = "\u29C1", VI = "\u29B5", zI = "\u03A9", MI = "\u222E", PI = "\u21BA", ZI = "\u29BE", YI = "\u29BB", WI = "\u203E", JI = "\u29C0", KI = "\u014D", XI = "\u03C9", QI = "\u03BF", rO = "\u29B6", aO = "\u2296", eO = "\u{1D560}", tO = "\u29B7", nO = "\u29B9", oO = "\u2295", lO = "\u2228", iO = "\u21BB", sO = "\xBA", cO = "\u2134", vO = "\u2134", uO = "\xAA", pO = "\xBA", dO = "\u22B6", gO = "\u2A56", fO = "\u2A57", mO = "\u2A5B", hO = "\u2134", bO = "\xF8", yO = "\xF8", wO = "\u2298", xO = "\xF5", SO = "\xF5", qO = "\u2297", AO = "\u2A36", EO = "\xF6", kO = "\xF6", LO = "\u233D", NO = "\xB6", TO = "\xB6", $O = "\u2225", DO = "\u2AF3", CO = "\u2AFD", RO = "\u2202", IO = "\u043F", OO = "%", FO = ".", UO = "\u2030", _O = "\u22A5", BO = "\u2031", jO = "\u{1D52D}", HO = "\u03C6", GO = "\u03D5", VO = "\u2133", zO = "\u260E", MO = "\u03C0", PO = "\u22D4", ZO = "\u03D6", YO = "\u210F", WO = "\u210E", JO = "\u210F", KO = "+", XO = "\u2A23", QO = "\u229E", rF = "\u2A22", aF = "\u2214", eF = "\u2A25", tF = "\u2A72", nF = "\xB1", oF = "\xB1", lF = "\u2A26", iF = "\u2A27", sF = "\xB1", cF = "\u2A15", vF = "\u{1D561}", uF = "\xA3", pF = "\xA3", dF = "\u227A", gF = "\u2AB3", fF = "\u2AB7", mF = "\u227C", hF = "\u2AAF", bF = "\u227A", yF = "\u2AB7", wF = "\u227C", xF = "\u2AAF", SF = "\u2AB9", qF = "\u2AB5", AF = "\u22E8", EF = "\u227E", kF = "\u2032", LF = "\u2119", NF = "\u2AB5", TF = "\u2AB9", $F = "\u22E8", DF = "\u220F", CF = "\u232E", RF = "\u2312", IF = "\u2313", OF = "\u221D", FF = "\u221D", UF = "\u227E", _F = "\u22B0", BF = "\u{1D4C5}", jF = "\u03C8", HF = "\u2008", GF = "\u{1D52E}", VF = "\u2A0C", zF = "\u{1D562}", MF = "\u2057", PF = "\u{1D4C6}", ZF = "\u210D", YF = "\u2A16", WF = "?", JF = "\u225F", KF = '"', XF = '"', QF = "\u21DB", rU = "\u21D2", aU = "\u291C", eU = "\u290F", tU = "\u2964", nU = "\u223D\u0331", oU = "\u0155", lU = "\u221A", iU = "\u29B3", sU = "\u27E9", cU = "\u2992", vU = "\u29A5", uU = "\u27E9", pU = "\xBB", dU = "\xBB", gU = "\u2192", fU = "\u2975", mU = "\u21E5", hU = "\u2920", bU = "\u2933", yU = "\u291E", wU = "\u21AA", xU = "\u21AC", SU = "\u2945", qU = "\u2974", AU = "\u21A3", EU = "\u219D", kU = "\u291A", LU = "\u2236", NU = "\u211A", TU = "\u290D", $U = "\u2773", DU = "}", CU = "]", RU = "\u298C", IU = "\u298E", OU = "\u2990", FU = "\u0159", UU = "\u0157", _U = "\u2309", BU = "}", jU = "\u0440", HU = "\u2937", GU = "\u2969", VU = "\u201D", zU = "\u201D", MU = "\u21B3", PU = "\u211C", ZU = "\u211B", YU = "\u211C", WU = "\u211D", JU = "\u25AD", KU = "\xAE", XU = "\xAE", QU = "\u297D", r_ = "\u230B", a_ = "\u{1D52F}", e_ = "\u21C1", t_ = "\u21C0", n_ = "\u296C", o_ = "\u03C1", l_ = "\u03F1", i_ = "\u2192", s_ = "\u21A3", c_ = "\u21C1", v_ = "\u21C0", u_ = "\u21C4", p_ = "\u21CC", d_ = "\u21C9", g_ = "\u219D", f_ = "\u22CC", m_ = "\u02DA", h_ = "\u2253", b_ = "\u21C4", y_ = "\u21CC", w_ = "\u200F", x_ = "\u23B1", S_ = "\u23B1", q_ = "\u2AEE", A_ = "\u27ED", E_ = "\u21FE", k_ = "\u27E7", L_ = "\u2986", N_ = "\u{1D563}", T_ = "\u2A2E", $_ = "\u2A35", D_ = ")", C_ = "\u2994", R_ = "\u2A12", I_ = "\u21C9", O_ = "\u203A", F_ = "\u{1D4C7}", U_ = "\u21B1", __ = "]", B_ = "\u2019", j_ = "\u2019", H_ = "\u22CC", G_ = "\u22CA", V_ = "\u25B9", z_ = "\u22B5", M_ = "\u25B8", P_ = "\u29CE", Z_ = "\u2968", Y_ = "\u211E", W_ = "\u015B", J_ = "\u201A", K_ = "\u227B", X_ = "\u2AB4", Q_ = "\u2AB8", rB = "\u0161", aB = "\u227D", eB = "\u2AB0", tB = "\u015F", nB = "\u015D", oB = "\u2AB6", lB = "\u2ABA", iB = "\u22E9", sB = "\u2A13", cB = "\u227F", vB = "\u0441", uB = "\u22C5", pB = "\u22A1", dB = "\u2A66", gB = "\u21D8", fB = "\u2925", mB = "\u2198", hB = "\u2198", bB = "\xA7", yB = "\xA7", wB = ";", xB = "\u2929", SB = "\u2216", qB = "\u2216", AB = "\u2736", EB = "\u{1D530}", kB = "\u2322", LB = "\u266F", NB = "\u0449", TB = "\u0448", $B = "\u2223", DB = "\u2225", CB = "\xAD", RB = "\xAD", IB = "\u03C3", OB = "\u03C2", FB = "\u03C2", UB = "\u223C", _B = "\u2A6A", BB = "\u2243", jB = "\u2243", HB = "\u2A9E", GB = "\u2AA0", VB = "\u2A9D", zB = "\u2A9F", MB = "\u2246", PB = "\u2A24", ZB = "\u2972", YB = "\u2190", WB = "\u2216", JB = "\u2A33", KB = "\u29E4", XB = "\u2223", QB = "\u2323", rj = "\u2AAA", aj = "\u2AAC", ej = "\u2AAC\uFE00", tj = "\u044C", nj = "/", oj = "\u29C4", lj = "\u233F", ij = "\u{1D564}", sj = "\u2660", cj = "\u2660", vj = "\u2225", uj = "\u2293", pj = "\u2293\uFE00", dj = "\u2294", gj = "\u2294\uFE00", fj = "\u228F", mj = "\u2291", hj = "\u228F", bj = "\u2291", yj = "\u2290", wj = "\u2292", xj = "\u2290", Sj = "\u2292", qj = "\u25A1", Aj = "\u25A1", Ej = "\u25AA", kj = "\u25AA", Lj = "\u2192", Nj = "\u{1D4C8}", Tj = "\u2216", $j = "\u2323", Dj = "\u22C6", Cj = "\u2606", Rj = "\u2605", Ij = "\u03F5", Oj = "\u03D5", Fj = "\xAF", Uj = "\u2282", _j = "\u2AC5", Bj = "\u2ABD", jj = "\u2286", Hj = "\u2AC3", Gj = "\u2AC1", Vj = "\u2ACB", zj = "\u228A", Mj = "\u2ABF", Pj = "\u2979", Zj = "\u2282", Yj = "\u2286", Wj = "\u2AC5", Jj = "\u228A", Kj = "\u2ACB", Xj = "\u2AC7", Qj = "\u2AD5", r2 = "\u2AD3", a2 = "\u227B", e2 = "\u2AB8", t2 = "\u227D", n2 = "\u2AB0", o2 = "\u2ABA", l2 = "\u2AB6", i2 = "\u22E9", s2 = "\u227F", c2 = "\u2211", v2 = "\u266A", u2 = "\u2283", p2 = "\xB9", d2 = "\xB2", g2 = "\xB3", f2 = "\u2AC6", m2 = "\u2ABE", h2 = "\u2AD8", b2 = "\u2287", y2 = "\u2AC4", w2 = "\u27C9", x2 = "\u2AD7", S2 = "\u297B", q2 = "\u2AC2", A2 = "\u2ACC", E2 = "\u228B", k2 = "\u2AC0", L2 = "\u2283", N2 = "\u2287", T2 = "\u2AC6", $2 = "\u228B", D2 = "\u2ACC", C2 = "\u2AC8", R2 = "\u2AD4", I2 = "\u2AD6", O2 = "\u21D9", F2 = "\u2926", U2 = "\u2199", _2 = "\u2199", B2 = "\u292A", j2 = "\xDF", H2 = "\xDF", G2 = "\u2316", V2 = "\u03C4", z2 = "\u23B4", M2 = "\u0165", P2 = "\u0163", Z2 = "\u0442", Y2 = "\u20DB", W2 = "\u2315", J2 = "\u{1D531}", K2 = "\u2234", X2 = "\u2234", Q2 = "\u03B8", rH = "\u03D1", aH = "\u03D1", eH = "\u2248", tH = "\u223C", nH = "\u2009", oH = "\u2248", lH = "\u223C", iH = "\xFE", sH = "\xFE", cH = "\u02DC", vH = "\xD7", uH = "\xD7", pH = "\u22A0", dH = "\u2A31", gH = "\u2A30", fH = "\u222D", mH = "\u2928", hH = "\u22A4", bH = "\u2336", yH = "\u2AF1", wH = "\u{1D565}", xH = "\u2ADA", SH = "\u2929", qH = "\u2034", AH = "\u2122", EH = "\u25B5", kH = "\u25BF", LH = "\u25C3", NH = "\u22B4", TH = "\u225C", $H = "\u25B9", DH = "\u22B5", CH = "\u25EC", RH = "\u225C", IH = "\u2A3A", OH = "\u2A39", FH = "\u29CD", UH = "\u2A3B", _H = "\u23E2", BH = "\u{1D4C9}", jH = "\u0446", HH = "\u045B", GH = "\u0167", VH = "\u226C", zH = "\u219E", MH = "\u21A0", PH = "\u21D1", ZH = "\u2963", YH = "\xFA", WH = "\xFA", JH = "\u2191", KH = "\u045E", XH = "\u016D", QH = "\xFB", rG = "\xFB", aG = "\u0443", eG = "\u21C5", tG = "\u0171", nG = "\u296E", oG = "\u297E", lG = "\u{1D532}", iG = "\xF9", sG = "\xF9", cG = "\u21BF", vG = "\u21BE", uG = "\u2580", pG = "\u231C", dG = "\u231C", gG = "\u230F", fG = "\u25F8", mG = "\u016B", hG = "\xA8", bG = "\xA8", yG = "\u0173", wG = "\u{1D566}", xG = "\u2191", SG = "\u2195", qG = "\u21BF", AG = "\u21BE", EG = "\u228E", kG = "\u03C5", LG = "\u03D2", NG = "\u03C5", TG = "\u21C8", $G = "\u231D", DG = "\u231D", CG = "\u230E", RG = "\u016F", IG = "\u25F9", OG = "\u{1D4CA}", FG = "\u22F0", UG = "\u0169", _G = "\u25B5", BG = "\u25B4", jG = "\u21C8", HG = "\xFC", GG = "\xFC", VG = "\u29A7", zG = "\u21D5", MG = "\u2AE8", PG = "\u2AE9", ZG = "\u22A8", YG = "\u299C", WG = "\u03F5", JG = "\u03F0", KG = "\u2205", XG = "\u03D5", QG = "\u03D6", rV = "\u221D", aV = "\u2195", eV = "\u03F1", tV = "\u03C2", nV = "\u228A\uFE00", oV = "\u2ACB\uFE00", lV = "\u228B\uFE00", iV = "\u2ACC\uFE00", sV = "\u03D1", cV = "\u22B2", vV = "\u22B3", uV = "\u0432", pV = "\u22A2", dV = "\u2228", gV = "\u22BB", fV = "\u225A", mV = "\u22EE", hV = "|", bV = "|", yV = "\u{1D533}", wV = "\u22B2", xV = "\u2282\u20D2", SV = "\u2283\u20D2", qV = "\u{1D567}", AV = "\u221D", EV = "\u22B3", kV = "\u{1D4CB}", LV = "\u2ACB\uFE00", NV = "\u228A\uFE00", TV = "\u2ACC\uFE00", $V = "\u228B\uFE00", DV = "\u299A", CV = "\u0175", RV = "\u2A5F", IV = "\u2227", OV = "\u2259", FV = "\u2118", UV = "\u{1D534}", _V = "\u{1D568}", BV = "\u2118", jV = "\u2240", HV = "\u2240", GV = "\u{1D4CC}", VV = "\u22C2", zV = "\u25EF", MV = "\u22C3", PV = "\u25BD", ZV = "\u{1D535}", YV = "\u27FA", WV = "\u27F7", JV = "\u03BE", KV = "\u27F8", XV = "\u27F5", QV = "\u27FC", rz = "\u22FB", az = "\u2A00", ez = "\u{1D569}", tz = "\u2A01", nz = "\u2A02", oz = "\u27F9", lz = "\u27F6", iz = "\u{1D4CD}", sz = "\u2A06", cz = "\u2A04", vz = "\u25B3", uz = "\u22C1", pz = "\u22C0", dz = "\xFD", gz = "\xFD", fz = "\u044F", mz = "\u0177", hz = "\u044B", bz = "\xA5", yz = "\xA5", wz = "\u{1D536}", xz = "\u0457", Sz = "\u{1D56A}", qz = "\u{1D4CE}", Az = "\u044E", Ez = "\xFF", kz = "\xFF", Lz = "\u017A", Nz = "\u017E", Tz = "\u0437", $z = "\u017C", Dz = "\u2128", Cz = "\u03B6", Rz = "\u{1D537}", Iz = "\u0436", Oz = "\u21DD", Fz = "\u{1D56B}", Uz = "\u{1D4CF}", _z = "\u200D", Bz = "\u200C", jz = {
  AEli: Rl,
  AElig: Il,
  AM: Ol,
  AMP: Fl,
  Aacut: Ul,
  Aacute: _l,
  Abreve: Bl,
  Acir: jl,
  Acirc: Hl,
  Acy: Gl,
  Afr: Vl,
  Agrav: zl,
  Agrave: Ml,
  Alpha: Pl,
  Amacr: Zl,
  And: Yl,
  Aogon: Wl,
  Aopf: Jl,
  ApplyFunction: Kl,
  Arin: Xl,
  Aring: Ql,
  Ascr: ri,
  Assign: ai,
  Atild: ei,
  Atilde: ti,
  Aum: ni,
  Auml: oi,
  Backslash: li,
  Barv: ii,
  Barwed: si,
  Bcy: ci,
  Because: vi,
  Bernoullis: ui,
  Beta: pi,
  Bfr: di,
  Bopf: gi,
  Breve: fi,
  Bscr: mi,
  Bumpeq: hi,
  CHcy: bi,
  COP: yi,
  COPY: wi,
  Cacute: xi,
  Cap: Si,
  CapitalDifferentialD: qi,
  Cayleys: Ai,
  Ccaron: Ei,
  Ccedi: ki,
  Ccedil: Li,
  Ccirc: Ni,
  Cconint: Ti,
  Cdot: $i,
  Cedilla: Di,
  CenterDot: Ci,
  Cfr: Ri,
  Chi: Ii,
  CircleDot: Oi,
  CircleMinus: Fi,
  CirclePlus: Ui,
  CircleTimes: _i,
  ClockwiseContourIntegral: Bi,
  CloseCurlyDoubleQuote: ji,
  CloseCurlyQuote: Hi,
  Colon: Gi,
  Colone: Vi,
  Congruent: zi,
  Conint: Mi,
  ContourIntegral: Pi,
  Copf: Zi,
  Coproduct: Yi,
  CounterClockwiseContourIntegral: Wi,
  Cross: Ji,
  Cscr: Ki,
  Cup: Xi,
  CupCap: Qi,
  DD: rs,
  DDotrahd: as,
  DJcy: es,
  DScy: ts,
  DZcy: ns,
  Dagger: os,
  Darr: ls,
  Dashv: is,
  Dcaron: ss,
  Dcy: cs,
  Del: vs,
  Delta: us,
  Dfr: ps,
  DiacriticalAcute: ds,
  DiacriticalDot: gs,
  DiacriticalDoubleAcute: fs,
  DiacriticalGrave: ms,
  DiacriticalTilde: hs,
  Diamond: bs,
  DifferentialD: ys,
  Dopf: ws,
  Dot: xs,
  DotDot: Ss,
  DotEqual: qs,
  DoubleContourIntegral: As,
  DoubleDot: Es,
  DoubleDownArrow: ks,
  DoubleLeftArrow: Ls,
  DoubleLeftRightArrow: Ns,
  DoubleLeftTee: Ts,
  DoubleLongLeftArrow: $s,
  DoubleLongLeftRightArrow: Ds,
  DoubleLongRightArrow: Cs,
  DoubleRightArrow: Rs,
  DoubleRightTee: Is,
  DoubleUpArrow: Os,
  DoubleUpDownArrow: Fs,
  DoubleVerticalBar: Us,
  DownArrow: _s,
  DownArrowBar: Bs,
  DownArrowUpArrow: js,
  DownBreve: Hs,
  DownLeftRightVector: Gs,
  DownLeftTeeVector: Vs,
  DownLeftVector: zs,
  DownLeftVectorBar: Ms,
  DownRightTeeVector: Ps,
  DownRightVector: Zs,
  DownRightVectorBar: Ys,
  DownTee: Ws,
  DownTeeArrow: Js,
  Downarrow: Ks,
  Dscr: Xs,
  Dstrok: Qs,
  ENG: rc,
  ET: ac,
  ETH: ec,
  Eacut: tc,
  Eacute: nc,
  Ecaron: oc,
  Ecir: lc,
  Ecirc: ic,
  Ecy: sc,
  Edot: cc,
  Efr: vc,
  Egrav: uc,
  Egrave: pc,
  Element: dc,
  Emacr: gc,
  EmptySmallSquare: fc,
  EmptyVerySmallSquare: mc,
  Eogon: hc,
  Eopf: bc,
  Epsilon: yc,
  Equal: wc,
  EqualTilde: xc,
  Equilibrium: Sc,
  Escr: qc,
  Esim: Ac,
  Eta: Ec,
  Eum: kc,
  Euml: Lc,
  Exists: Nc,
  ExponentialE: Tc,
  Fcy: $c,
  Ffr: Dc,
  FilledSmallSquare: Cc,
  FilledVerySmallSquare: Rc,
  Fopf: Ic,
  ForAll: Oc,
  Fouriertrf: Fc,
  Fscr: Uc,
  GJcy: _c,
  G: Bc,
  GT: jc,
  Gamma: Hc,
  Gammad: Gc,
  Gbreve: Vc,
  Gcedil: zc,
  Gcirc: Mc,
  Gcy: Pc,
  Gdot: Zc,
  Gfr: Yc,
  Gg: Wc,
  Gopf: Jc,
  GreaterEqual: Kc,
  GreaterEqualLess: Xc,
  GreaterFullEqual: Qc,
  GreaterGreater: rv,
  GreaterLess: av,
  GreaterSlantEqual: ev,
  GreaterTilde: tv,
  Gscr: nv,
  Gt: ov,
  HARDcy: lv,
  Hacek: iv,
  Hat: sv,
  Hcirc: cv,
  Hfr: vv,
  HilbertSpace: uv,
  Hopf: pv,
  HorizontalLine: dv,
  Hscr: gv,
  Hstrok: fv,
  HumpDownHump: mv,
  HumpEqual: hv,
  IEcy: bv,
  IJlig: yv,
  IOcy: wv,
  Iacut: xv,
  Iacute: Sv,
  Icir: qv,
  Icirc: Av,
  Icy: Ev,
  Idot: kv,
  Ifr: Lv,
  Igrav: Nv,
  Igrave: Tv,
  Im: $v,
  Imacr: Dv,
  ImaginaryI: Cv,
  Implies: Rv,
  Int: Iv,
  Integral: Ov,
  Intersection: Fv,
  InvisibleComma: Uv,
  InvisibleTimes: _v,
  Iogon: Bv,
  Iopf: jv,
  Iota: Hv,
  Iscr: Gv,
  Itilde: Vv,
  Iukcy: zv,
  Ium: Mv,
  Iuml: Pv,
  Jcirc: Zv,
  Jcy: Yv,
  Jfr: Wv,
  Jopf: Jv,
  Jscr: Kv,
  Jsercy: Xv,
  Jukcy: Qv,
  KHcy: ru,
  KJcy: au,
  Kappa: eu,
  Kcedil: tu,
  Kcy: nu,
  Kfr: ou,
  Kopf: lu,
  Kscr: iu,
  LJcy: su,
  L: cu,
  LT: vu,
  Lacute: uu,
  Lambda: pu,
  Lang: du,
  Laplacetrf: gu,
  Larr: fu,
  Lcaron: mu,
  Lcedil: hu,
  Lcy: bu,
  LeftAngleBracket: yu,
  LeftArrow: wu,
  LeftArrowBar: xu,
  LeftArrowRightArrow: Su,
  LeftCeiling: qu,
  LeftDoubleBracket: Au,
  LeftDownTeeVector: Eu,
  LeftDownVector: ku,
  LeftDownVectorBar: Lu,
  LeftFloor: Nu,
  LeftRightArrow: Tu,
  LeftRightVector: $u,
  LeftTee: Du,
  LeftTeeArrow: Cu,
  LeftTeeVector: Ru,
  LeftTriangle: Iu,
  LeftTriangleBar: Ou,
  LeftTriangleEqual: Fu,
  LeftUpDownVector: Uu,
  LeftUpTeeVector: _u,
  LeftUpVector: Bu,
  LeftUpVectorBar: ju,
  LeftVector: Hu,
  LeftVectorBar: Gu,
  Leftarrow: Vu,
  Leftrightarrow: zu,
  LessEqualGreater: Mu,
  LessFullEqual: Pu,
  LessGreater: Zu,
  LessLess: Yu,
  LessSlantEqual: Wu,
  LessTilde: Ju,
  Lfr: Ku,
  Ll: Xu,
  Lleftarrow: Qu,
  Lmidot: rp,
  LongLeftArrow: ap,
  LongLeftRightArrow: ep,
  LongRightArrow: tp,
  Longleftarrow: np,
  Longleftrightarrow: op,
  Longrightarrow: lp,
  Lopf: ip,
  LowerLeftArrow: sp,
  LowerRightArrow: cp,
  Lscr: vp,
  Lsh: up,
  Lstrok: pp,
  Lt: dp,
  Map: "\u2905",
  Mcy: gp,
  MediumSpace: fp,
  Mellintrf: mp,
  Mfr: hp,
  MinusPlus: bp,
  Mopf: yp,
  Mscr: wp,
  Mu: xp,
  NJcy: Sp,
  Nacute: qp,
  Ncaron: Ap,
  Ncedil: Ep,
  Ncy: kp,
  NegativeMediumSpace: Lp,
  NegativeThickSpace: Np,
  NegativeThinSpace: Tp,
  NegativeVeryThinSpace: $p,
  NestedGreaterGreater: Dp,
  NestedLessLess: Cp,
  NewLine: Rp,
  Nfr: Ip,
  NoBreak: Op,
  NonBreakingSpace: Fp,
  Nopf: Up,
  Not: _p,
  NotCongruent: Bp,
  NotCupCap: jp,
  NotDoubleVerticalBar: Hp,
  NotElement: Gp,
  NotEqual: Vp,
  NotEqualTilde: zp,
  NotExists: Mp,
  NotGreater: Pp,
  NotGreaterEqual: Zp,
  NotGreaterFullEqual: Yp,
  NotGreaterGreater: Wp,
  NotGreaterLess: Jp,
  NotGreaterSlantEqual: Kp,
  NotGreaterTilde: Xp,
  NotHumpDownHump: Qp,
  NotHumpEqual: rd,
  NotLeftTriangle: ad,
  NotLeftTriangleBar: ed,
  NotLeftTriangleEqual: td,
  NotLess: nd,
  NotLessEqual: od,
  NotLessGreater: ld,
  NotLessLess: id,
  NotLessSlantEqual: sd,
  NotLessTilde: cd,
  NotNestedGreaterGreater: vd,
  NotNestedLessLess: ud,
  NotPrecedes: pd,
  NotPrecedesEqual: dd,
  NotPrecedesSlantEqual: gd,
  NotReverseElement: fd,
  NotRightTriangle: md,
  NotRightTriangleBar: hd,
  NotRightTriangleEqual: bd,
  NotSquareSubset: yd,
  NotSquareSubsetEqual: wd,
  NotSquareSuperset: xd,
  NotSquareSupersetEqual: Sd,
  NotSubset: qd,
  NotSubsetEqual: Ad,
  NotSucceeds: Ed,
  NotSucceedsEqual: kd,
  NotSucceedsSlantEqual: Ld,
  NotSucceedsTilde: Nd,
  NotSuperset: Td,
  NotSupersetEqual: $d,
  NotTilde: Dd,
  NotTildeEqual: Cd,
  NotTildeFullEqual: Rd,
  NotTildeTilde: Id,
  NotVerticalBar: Od,
  Nscr: Fd,
  Ntild: Ud,
  Ntilde: _d,
  Nu: Bd,
  OElig: jd,
  Oacut: Hd,
  Oacute: Gd,
  Ocir: Vd,
  Ocirc: zd,
  Ocy: Md,
  Odblac: Pd,
  Ofr: Zd,
  Ograv: Yd,
  Ograve: Wd,
  Omacr: Jd,
  Omega: Kd,
  Omicron: Xd,
  Oopf: Qd,
  OpenCurlyDoubleQuote: rg,
  OpenCurlyQuote: ag,
  Or: eg,
  Oscr: tg,
  Oslas: ng,
  Oslash: og,
  Otild: lg,
  Otilde: ig,
  Otimes: sg,
  Oum: cg,
  Ouml: vg,
  OverBar: ug,
  OverBrace: pg,
  OverBracket: dg,
  OverParenthesis: gg,
  PartialD: fg,
  Pcy: mg,
  Pfr: hg,
  Phi: bg,
  Pi: yg,
  PlusMinus: wg,
  Poincareplane: xg,
  Popf: Sg,
  Pr: qg,
  Precedes: Ag,
  PrecedesEqual: Eg,
  PrecedesSlantEqual: kg,
  PrecedesTilde: Lg,
  Prime: Ng,
  Product: Tg,
  Proportion: $g,
  Proportional: Dg,
  Pscr: Cg,
  Psi: Rg,
  QUO: Ig,
  QUOT: Og,
  Qfr: Fg,
  Qopf: Ug,
  Qscr: _g,
  RBarr: Bg,
  RE: jg,
  REG: Hg,
  Racute: Gg,
  Rang: Vg,
  Rarr: zg,
  Rarrtl: Mg,
  Rcaron: Pg,
  Rcedil: Zg,
  Rcy: Yg,
  Re: Wg,
  ReverseElement: Jg,
  ReverseEquilibrium: Kg,
  ReverseUpEquilibrium: Xg,
  Rfr: Qg,
  Rho: rf,
  RightAngleBracket: af,
  RightArrow: ef,
  RightArrowBar: tf,
  RightArrowLeftArrow: nf,
  RightCeiling: of,
  RightDoubleBracket: lf,
  RightDownTeeVector: sf,
  RightDownVector: cf,
  RightDownVectorBar: vf,
  RightFloor: uf,
  RightTee: pf,
  RightTeeArrow: df,
  RightTeeVector: gf,
  RightTriangle: ff,
  RightTriangleBar: mf,
  RightTriangleEqual: hf,
  RightUpDownVector: bf,
  RightUpTeeVector: yf,
  RightUpVector: wf,
  RightUpVectorBar: xf,
  RightVector: Sf,
  RightVectorBar: qf,
  Rightarrow: Af,
  Ropf: Ef,
  RoundImplies: kf,
  Rrightarrow: Lf,
  Rscr: Nf,
  Rsh: Tf,
  RuleDelayed: $f,
  SHCHcy: Df,
  SHcy: Cf,
  SOFTcy: Rf,
  Sacute: If,
  Sc: Of,
  Scaron: Ff,
  Scedil: Uf,
  Scirc: _f,
  Scy: Bf,
  Sfr: jf,
  ShortDownArrow: Hf,
  ShortLeftArrow: Gf,
  ShortRightArrow: Vf,
  ShortUpArrow: zf,
  Sigma: Mf,
  SmallCircle: Pf,
  Sopf: Zf,
  Sqrt: Yf,
  Square: Wf,
  SquareIntersection: Jf,
  SquareSubset: Kf,
  SquareSubsetEqual: Xf,
  SquareSuperset: Qf,
  SquareSupersetEqual: rm,
  SquareUnion: am,
  Sscr: em,
  Star: tm,
  Sub: nm,
  Subset: om,
  SubsetEqual: lm,
  Succeeds: im,
  SucceedsEqual: sm,
  SucceedsSlantEqual: cm,
  SucceedsTilde: vm,
  SuchThat: um,
  Sum: pm,
  Sup: dm,
  Superset: gm,
  SupersetEqual: fm,
  Supset: mm,
  THOR: hm,
  THORN: bm,
  TRADE: ym,
  TSHcy: wm,
  TScy: xm,
  Tab: Sm,
  Tau: qm,
  Tcaron: Am,
  Tcedil: Em,
  Tcy: km,
  Tfr: Lm,
  Therefore: Nm,
  Theta: Tm,
  ThickSpace: $m,
  ThinSpace: Dm,
  Tilde: Cm,
  TildeEqual: Rm,
  TildeFullEqual: Im,
  TildeTilde: Om,
  Topf: Fm,
  TripleDot: Um,
  Tscr: _m,
  Tstrok: Bm,
  Uacut: jm,
  Uacute: Hm,
  Uarr: Gm,
  Uarrocir: Vm,
  Ubrcy: zm,
  Ubreve: Mm,
  Ucir: Pm,
  Ucirc: Zm,
  Ucy: Ym,
  Udblac: Wm,
  Ufr: Jm,
  Ugrav: Km,
  Ugrave: Xm,
  Umacr: Qm,
  UnderBar: rh,
  UnderBrace: ah,
  UnderBracket: eh,
  UnderParenthesis: th,
  Union: nh,
  UnionPlus: oh,
  Uogon: lh,
  Uopf: ih,
  UpArrow: sh,
  UpArrowBar: ch,
  UpArrowDownArrow: vh,
  UpDownArrow: uh,
  UpEquilibrium: ph,
  UpTee: dh,
  UpTeeArrow: gh,
  Uparrow: fh,
  Updownarrow: mh,
  UpperLeftArrow: hh,
  UpperRightArrow: bh,
  Upsi: yh,
  Upsilon: wh,
  Uring: xh,
  Uscr: Sh,
  Utilde: qh,
  Uum: Ah,
  Uuml: Eh,
  VDash: kh,
  Vbar: Lh,
  Vcy: Nh,
  Vdash: Th,
  Vdashl: $h,
  Vee: Dh,
  Verbar: Ch,
  Vert: Rh,
  VerticalBar: Ih,
  VerticalLine: Oh,
  VerticalSeparator: Fh,
  VerticalTilde: Uh,
  VeryThinSpace: _h,
  Vfr: Bh,
  Vopf: jh,
  Vscr: Hh,
  Vvdash: Gh,
  Wcirc: Vh,
  Wedge: zh,
  Wfr: Mh,
  Wopf: Ph,
  Wscr: Zh,
  Xfr: Yh,
  Xi: Wh,
  Xopf: Jh,
  Xscr: Kh,
  YAcy: Xh,
  YIcy: Qh,
  YUcy: rb,
  Yacut: ab,
  Yacute: eb,
  Ycirc: tb,
  Ycy: nb,
  Yfr: ob,
  Yopf: lb,
  Yscr: ib,
  Yuml: sb,
  ZHcy: cb,
  Zacute: vb,
  Zcaron: ub,
  Zcy: pb,
  Zdot: db,
  ZeroWidthSpace: gb,
  Zeta: fb,
  Zfr: mb,
  Zopf: hb,
  Zscr: bb,
  aacut: yb,
  aacute: wb,
  abreve: xb,
  ac: Sb,
  acE: qb,
  acd: Ab,
  acir: Eb,
  acirc: kb,
  acut: Lb,
  acute: Nb,
  acy: Tb,
  aeli: $b,
  aelig: Db,
  af: Cb,
  afr: Rb,
  agrav: Ib,
  agrave: Ob,
  alefsym: Fb,
  aleph: Ub,
  alpha: _b,
  amacr: Bb,
  amalg: jb,
  am: Hb,
  amp: Gb,
  and: Vb,
  andand: zb,
  andd: Mb,
  andslope: Pb,
  andv: Zb,
  ang: Yb,
  ange: Wb,
  angle: Jb,
  angmsd: Kb,
  angmsdaa: Xb,
  angmsdab: Qb,
  angmsdac: ry,
  angmsdad: ay,
  angmsdae: ey,
  angmsdaf: ty,
  angmsdag: ny,
  angmsdah: oy,
  angrt: ly,
  angrtvb: iy,
  angrtvbd: sy,
  angsph: cy,
  angst: vy,
  angzarr: uy,
  aogon: py,
  aopf: dy,
  ap: gy,
  apE: fy,
  apacir: my,
  ape: hy,
  apid: by,
  apos: yy,
  approx: wy,
  approxeq: xy,
  arin: Sy,
  aring: qy,
  ascr: Ay,
  ast: Ey,
  asymp: ky,
  asympeq: Ly,
  atild: Ny,
  atilde: Ty,
  aum: $y,
  auml: Dy,
  awconint: Cy,
  awint: Ry,
  bNot: Iy,
  backcong: Oy,
  backepsilon: Fy,
  backprime: Uy,
  backsim: _y,
  backsimeq: By,
  barvee: jy,
  barwed: Hy,
  barwedge: Gy,
  bbrk: Vy,
  bbrktbrk: zy,
  bcong: My,
  bcy: Py,
  bdquo: Zy,
  becaus: Yy,
  because: Wy,
  bemptyv: Jy,
  bepsi: Ky,
  bernou: Xy,
  beta: Qy,
  beth: rw,
  between: aw,
  bfr: ew,
  bigcap: tw,
  bigcirc: nw,
  bigcup: ow,
  bigodot: lw,
  bigoplus: iw,
  bigotimes: sw,
  bigsqcup: cw,
  bigstar: vw,
  bigtriangledown: uw,
  bigtriangleup: pw,
  biguplus: dw,
  bigvee: gw,
  bigwedge: fw,
  bkarow: mw,
  blacklozenge: hw,
  blacksquare: bw,
  blacktriangle: yw,
  blacktriangledown: ww,
  blacktriangleleft: xw,
  blacktriangleright: Sw,
  blank: qw,
  blk12: Aw,
  blk14: Ew,
  blk34: kw,
  block: Lw,
  bne: Nw,
  bnequiv: Tw,
  bnot: $w,
  bopf: Dw,
  bot: Cw,
  bottom: Rw,
  bowtie: Iw,
  boxDL: Ow,
  boxDR: Fw,
  boxDl: Uw,
  boxDr: _w,
  boxH: Bw,
  boxHD: jw,
  boxHU: Hw,
  boxHd: Gw,
  boxHu: Vw,
  boxUL: zw,
  boxUR: Mw,
  boxUl: Pw,
  boxUr: Zw,
  boxV: Yw,
  boxVH: Ww,
  boxVL: Jw,
  boxVR: Kw,
  boxVh: Xw,
  boxVl: Qw,
  boxVr: rx,
  boxbox: ax,
  boxdL: ex,
  boxdR: tx,
  boxdl: nx,
  boxdr: ox,
  boxh: lx,
  boxhD: ix,
  boxhU: sx,
  boxhd: cx,
  boxhu: vx,
  boxminus: ux,
  boxplus: px,
  boxtimes: dx,
  boxuL: gx,
  boxuR: fx,
  boxul: mx,
  boxur: hx,
  boxv: bx,
  boxvH: yx,
  boxvL: wx,
  boxvR: xx,
  boxvh: Sx,
  boxvl: qx,
  boxvr: Ax,
  bprime: Ex,
  breve: kx,
  brvba: Lx,
  brvbar: Nx,
  bscr: Tx,
  bsemi: $x,
  bsim: Dx,
  bsime: Cx,
  bsol: Rx,
  bsolb: Ix,
  bsolhsub: Ox,
  bull: Fx,
  bullet: Ux,
  bump: _x,
  bumpE: Bx,
  bumpe: jx,
  bumpeq: Hx,
  cacute: Gx,
  cap: Vx,
  capand: zx,
  capbrcup: Mx,
  capcap: Px,
  capcup: Zx,
  capdot: Yx,
  caps: Wx,
  caret: Jx,
  caron: Kx,
  ccaps: Xx,
  ccaron: Qx,
  ccedi: rS,
  ccedil: aS,
  ccirc: eS,
  ccups: tS,
  ccupssm: nS,
  cdot: oS,
  cedi: lS,
  cedil: iS,
  cemptyv: sS,
  cen: cS,
  cent: vS,
  centerdot: uS,
  cfr: pS,
  chcy: dS,
  check: gS,
  checkmark: fS,
  chi: mS,
  cir: hS,
  cirE: bS,
  circ: yS,
  circeq: wS,
  circlearrowleft: xS,
  circlearrowright: SS,
  circledR: qS,
  circledS: AS,
  circledast: ES,
  circledcirc: kS,
  circleddash: LS,
  cire: NS,
  cirfnint: TS,
  cirmid: $S,
  cirscir: DS,
  clubs: CS,
  clubsuit: RS,
  colon: IS,
  colone: OS,
  coloneq: FS,
  comma: US,
  commat: _S,
  comp: BS,
  compfn: jS,
  complement: HS,
  complexes: GS,
  cong: VS,
  congdot: zS,
  conint: MS,
  copf: PS,
  coprod: ZS,
  cop: YS,
  copy: WS,
  copysr: JS,
  crarr: KS,
  cross: XS,
  cscr: QS,
  csub: rq,
  csube: aq,
  csup: eq,
  csupe: tq,
  ctdot: nq,
  cudarrl: oq,
  cudarrr: lq,
  cuepr: iq,
  cuesc: sq,
  cularr: cq,
  cularrp: vq,
  cup: uq,
  cupbrcap: pq,
  cupcap: dq,
  cupcup: gq,
  cupdot: fq,
  cupor: mq,
  cups: hq,
  curarr: bq,
  curarrm: yq,
  curlyeqprec: wq,
  curlyeqsucc: xq,
  curlyvee: Sq,
  curlywedge: qq,
  curre: Aq,
  curren: Eq,
  curvearrowleft: kq,
  curvearrowright: Lq,
  cuvee: Nq,
  cuwed: Tq,
  cwconint: $q,
  cwint: Dq,
  cylcty: Cq,
  dArr: Rq,
  dHar: Iq,
  dagger: Oq,
  daleth: Fq,
  darr: Uq,
  dash: _q,
  dashv: Bq,
  dbkarow: jq,
  dblac: Hq,
  dcaron: Gq,
  dcy: Vq,
  dd: zq,
  ddagger: Mq,
  ddarr: Pq,
  ddotseq: Zq,
  de: Yq,
  deg: Wq,
  delta: Jq,
  demptyv: Kq,
  dfisht: Xq,
  dfr: Qq,
  dharl: rA,
  dharr: aA,
  diam: eA,
  diamond: tA,
  diamondsuit: nA,
  diams: oA,
  die: lA,
  digamma: iA,
  disin: sA,
  div: cA,
  divid: vA,
  divide: uA,
  divideontimes: pA,
  divonx: dA,
  djcy: gA,
  dlcorn: fA,
  dlcrop: mA,
  dollar: hA,
  dopf: bA,
  dot: yA,
  doteq: wA,
  doteqdot: xA,
  dotminus: SA,
  dotplus: qA,
  dotsquare: AA,
  doublebarwedge: EA,
  downarrow: kA,
  downdownarrows: LA,
  downharpoonleft: NA,
  downharpoonright: TA,
  drbkarow: $A,
  drcorn: DA,
  drcrop: CA,
  dscr: RA,
  dscy: IA,
  dsol: OA,
  dstrok: FA,
  dtdot: UA,
  dtri: _A,
  dtrif: BA,
  duarr: jA,
  duhar: HA,
  dwangle: GA,
  dzcy: VA,
  dzigrarr: zA,
  eDDot: MA,
  eDot: PA,
  eacut: ZA,
  eacute: YA,
  easter: WA,
  ecaron: JA,
  ecir: KA,
  ecirc: XA,
  ecolon: QA,
  ecy: rE,
  edot: aE,
  ee: eE,
  efDot: tE,
  efr: nE,
  eg: oE,
  egrav: lE,
  egrave: iE,
  egs: sE,
  egsdot: cE,
  el: vE,
  elinters: uE,
  ell: pE,
  els: dE,
  elsdot: gE,
  emacr: fE,
  empty: mE,
  emptyset: hE,
  emptyv: bE,
  emsp13: yE,
  emsp14: wE,
  emsp: xE,
  eng: SE,
  ensp: qE,
  eogon: AE,
  eopf: EE,
  epar: kE,
  eparsl: LE,
  eplus: NE,
  epsi: TE,
  epsilon: $E,
  epsiv: DE,
  eqcirc: CE,
  eqcolon: RE,
  eqsim: IE,
  eqslantgtr: OE,
  eqslantless: FE,
  equals: UE,
  equest: _E,
  equiv: BE,
  equivDD: jE,
  eqvparsl: HE,
  erDot: GE,
  erarr: VE,
  escr: zE,
  esdot: ME,
  esim: PE,
  eta: ZE,
  et: YE,
  eth: WE,
  eum: JE,
  euml: KE,
  euro: XE,
  excl: QE,
  exist: rk,
  expectation: ak,
  exponentiale: ek,
  fallingdotseq: tk,
  fcy: nk,
  female: ok,
  ffilig: lk,
  fflig: ik,
  ffllig: sk,
  ffr: ck,
  filig: vk,
  fjlig: uk,
  flat: pk,
  fllig: dk,
  fltns: gk,
  fnof: fk,
  fopf: mk,
  forall: hk,
  fork: bk,
  forkv: yk,
  fpartint: wk,
  frac1: xk,
  frac12: Sk,
  frac13: qk,
  frac14: Ak,
  frac15: Ek,
  frac16: kk,
  frac18: Lk,
  frac23: Nk,
  frac25: Tk,
  frac3: $k,
  frac34: Dk,
  frac35: Ck,
  frac38: Rk,
  frac45: Ik,
  frac56: Ok,
  frac58: Fk,
  frac78: Uk,
  frasl: _k,
  frown: Bk,
  fscr: jk,
  gE: Hk,
  gEl: Gk,
  gacute: Vk,
  gamma: zk,
  gammad: Mk,
  gap: Pk,
  gbreve: Zk,
  gcirc: Yk,
  gcy: Wk,
  gdot: Jk,
  ge: Kk,
  gel: Xk,
  geq: Qk,
  geqq: r1,
  geqslant: a1,
  ges: e1,
  gescc: t1,
  gesdot: n1,
  gesdoto: o1,
  gesdotol: l1,
  gesl: i1,
  gesles: s1,
  gfr: c1,
  gg: v1,
  ggg: u1,
  gimel: p1,
  gjcy: d1,
  gl: g1,
  glE: f1,
  gla: m1,
  glj: h1,
  gnE: b1,
  gnap: y1,
  gnapprox: w1,
  gne: x1,
  gneq: S1,
  gneqq: q1,
  gnsim: A1,
  gopf: E1,
  grave: k1,
  gscr: L1,
  gsim: N1,
  gsime: T1,
  gsiml: $1,
  g: D1,
  gt: C1,
  gtcc: R1,
  gtcir: I1,
  gtdot: O1,
  gtlPar: F1,
  gtquest: U1,
  gtrapprox: _1,
  gtrarr: B1,
  gtrdot: j1,
  gtreqless: H1,
  gtreqqless: G1,
  gtrless: V1,
  gtrsim: z1,
  gvertneqq: M1,
  gvnE: P1,
  hArr: Z1,
  hairsp: Y1,
  half: W1,
  hamilt: J1,
  hardcy: K1,
  harr: X1,
  harrcir: Q1,
  harrw: rL,
  hbar: aL,
  hcirc: eL,
  hearts: tL,
  heartsuit: nL,
  hellip: oL,
  hercon: lL,
  hfr: iL,
  hksearow: sL,
  hkswarow: cL,
  hoarr: vL,
  homtht: uL,
  hookleftarrow: pL,
  hookrightarrow: dL,
  hopf: gL,
  horbar: fL,
  hscr: mL,
  hslash: hL,
  hstrok: bL,
  hybull: yL,
  hyphen: wL,
  iacut: xL,
  iacute: SL,
  ic: qL,
  icir: AL,
  icirc: EL,
  icy: kL,
  iecy: LL,
  iexc: NL,
  iexcl: TL,
  iff: $L,
  ifr: DL,
  igrav: CL,
  igrave: RL,
  ii: IL,
  iiiint: OL,
  iiint: FL,
  iinfin: UL,
  iiota: _L,
  ijlig: BL,
  imacr: jL,
  image: HL,
  imagline: GL,
  imagpart: VL,
  imath: zL,
  imof: ML,
  imped: PL,
  in: "\u2208",
  incare: ZL,
  infin: YL,
  infintie: WL,
  inodot: JL,
  int: KL,
  intcal: XL,
  integers: QL,
  intercal: rN,
  intlarhk: aN,
  intprod: eN,
  iocy: tN,
  iogon: nN,
  iopf: oN,
  iota: lN,
  iprod: iN,
  iques: sN,
  iquest: cN,
  iscr: vN,
  isin: uN,
  isinE: pN,
  isindot: dN,
  isins: gN,
  isinsv: fN,
  isinv: mN,
  it: hN,
  itilde: bN,
  iukcy: yN,
  ium: wN,
  iuml: xN,
  jcirc: SN,
  jcy: qN,
  jfr: AN,
  jmath: EN,
  jopf: kN,
  jscr: LN,
  jsercy: NN,
  jukcy: TN,
  kappa: $N,
  kappav: DN,
  kcedil: CN,
  kcy: RN,
  kfr: IN,
  kgreen: ON,
  khcy: FN,
  kjcy: UN,
  kopf: _N,
  kscr: BN,
  lAarr: jN,
  lArr: HN,
  lAtail: GN,
  lBarr: VN,
  lE: zN,
  lEg: MN,
  lHar: PN,
  lacute: ZN,
  laemptyv: YN,
  lagran: WN,
  lambda: JN,
  lang: KN,
  langd: XN,
  langle: QN,
  lap: rT,
  laqu: aT,
  laquo: eT,
  larr: tT,
  larrb: nT,
  larrbfs: oT,
  larrfs: lT,
  larrhk: iT,
  larrlp: sT,
  larrpl: cT,
  larrsim: vT,
  larrtl: uT,
  lat: pT,
  latail: dT,
  late: gT,
  lates: fT,
  lbarr: mT,
  lbbrk: hT,
  lbrace: bT,
  lbrack: yT,
  lbrke: wT,
  lbrksld: xT,
  lbrkslu: ST,
  lcaron: qT,
  lcedil: AT,
  lceil: ET,
  lcub: kT,
  lcy: LT,
  ldca: NT,
  ldquo: TT,
  ldquor: $T,
  ldrdhar: DT,
  ldrushar: CT,
  ldsh: RT,
  le: IT,
  leftarrow: OT,
  leftarrowtail: FT,
  leftharpoondown: UT,
  leftharpoonup: _T,
  leftleftarrows: BT,
  leftrightarrow: jT,
  leftrightarrows: HT,
  leftrightharpoons: GT,
  leftrightsquigarrow: VT,
  leftthreetimes: zT,
  leg: MT,
  leq: PT,
  leqq: ZT,
  leqslant: YT,
  les: WT,
  lescc: JT,
  lesdot: KT,
  lesdoto: XT,
  lesdotor: QT,
  lesg: r$,
  lesges: a$,
  lessapprox: e$,
  lessdot: t$,
  lesseqgtr: n$,
  lesseqqgtr: o$,
  lessgtr: l$,
  lesssim: i$,
  lfisht: s$,
  lfloor: c$,
  lfr: v$,
  lg: u$,
  lgE: p$,
  lhard: d$,
  lharu: g$,
  lharul: f$,
  lhblk: m$,
  ljcy: h$,
  ll: b$,
  llarr: y$,
  llcorner: w$,
  llhard: x$,
  lltri: S$,
  lmidot: q$,
  lmoust: A$,
  lmoustache: E$,
  lnE: k$,
  lnap: L$,
  lnapprox: N$,
  lne: T$,
  lneq: $$,
  lneqq: D$,
  lnsim: C$,
  loang: R$,
  loarr: I$,
  lobrk: O$,
  longleftarrow: F$,
  longleftrightarrow: U$,
  longmapsto: _$,
  longrightarrow: B$,
  looparrowleft: j$,
  looparrowright: H$,
  lopar: G$,
  lopf: V$,
  loplus: z$,
  lotimes: M$,
  lowast: P$,
  lowbar: Z$,
  loz: Y$,
  lozenge: W$,
  lozf: J$,
  lpar: K$,
  lparlt: X$,
  lrarr: Q$,
  lrcorner: rD,
  lrhar: aD,
  lrhard: eD,
  lrm: tD,
  lrtri: nD,
  lsaquo: oD,
  lscr: lD,
  lsh: iD,
  lsim: sD,
  lsime: cD,
  lsimg: vD,
  lsqb: uD,
  lsquo: pD,
  lsquor: dD,
  lstrok: gD,
  l: fD,
  lt: mD,
  ltcc: hD,
  ltcir: bD,
  ltdot: yD,
  lthree: wD,
  ltimes: xD,
  ltlarr: SD,
  ltquest: qD,
  ltrPar: AD,
  ltri: ED,
  ltrie: kD,
  ltrif: LD,
  lurdshar: ND,
  luruhar: TD,
  lvertneqq: $D,
  lvnE: DD,
  mDDot: CD,
  mac: RD,
  macr: ID,
  male: OD,
  malt: FD,
  maltese: UD,
  map: _D,
  mapsto: BD,
  mapstodown: jD,
  mapstoleft: HD,
  mapstoup: GD,
  marker: VD,
  mcomma: zD,
  mcy: MD,
  mdash: PD,
  measuredangle: ZD,
  mfr: YD,
  mho: WD,
  micr: JD,
  micro: KD,
  mid: XD,
  midast: QD,
  midcir: r0,
  middo: a0,
  middot: e0,
  minus: t0,
  minusb: n0,
  minusd: o0,
  minusdu: l0,
  mlcp: i0,
  mldr: s0,
  mnplus: c0,
  models: v0,
  mopf: u0,
  mp: p0,
  mscr: d0,
  mstpos: g0,
  mu: f0,
  multimap: m0,
  mumap: h0,
  nGg: b0,
  nGt: y0,
  nGtv: w0,
  nLeftarrow: x0,
  nLeftrightarrow: S0,
  nLl: q0,
  nLt: A0,
  nLtv: E0,
  nRightarrow: k0,
  nVDash: L0,
  nVdash: N0,
  nabla: T0,
  nacute: $0,
  nang: D0,
  nap: C0,
  napE: R0,
  napid: I0,
  napos: O0,
  napprox: F0,
  natur: U0,
  natural: _0,
  naturals: B0,
  nbs: j0,
  nbsp: H0,
  nbump: G0,
  nbumpe: V0,
  ncap: z0,
  ncaron: M0,
  ncedil: P0,
  ncong: Z0,
  ncongdot: Y0,
  ncup: W0,
  ncy: J0,
  ndash: K0,
  ne: X0,
  neArr: Q0,
  nearhk: rC,
  nearr: aC,
  nearrow: eC,
  nedot: tC,
  nequiv: nC,
  nesear: oC,
  nesim: lC,
  nexist: iC,
  nexists: sC,
  nfr: cC,
  ngE: vC,
  nge: uC,
  ngeq: pC,
  ngeqq: dC,
  ngeqslant: gC,
  nges: fC,
  ngsim: mC,
  ngt: hC,
  ngtr: bC,
  nhArr: yC,
  nharr: wC,
  nhpar: xC,
  ni: SC,
  nis: qC,
  nisd: AC,
  niv: EC,
  njcy: kC,
  nlArr: LC,
  nlE: NC,
  nlarr: TC,
  nldr: $C,
  nle: DC,
  nleftarrow: CC,
  nleftrightarrow: RC,
  nleq: IC,
  nleqq: OC,
  nleqslant: FC,
  nles: UC,
  nless: _C,
  nlsim: BC,
  nlt: jC,
  nltri: HC,
  nltrie: GC,
  nmid: VC,
  nopf: zC,
  no: MC,
  not: PC,
  notin: ZC,
  notinE: YC,
  notindot: WC,
  notinva: JC,
  notinvb: KC,
  notinvc: XC,
  notni: QC,
  notniva: rR,
  notnivb: aR,
  notnivc: eR,
  npar: tR,
  nparallel: nR,
  nparsl: oR,
  npart: lR,
  npolint: iR,
  npr: sR,
  nprcue: cR,
  npre: vR,
  nprec: uR,
  npreceq: pR,
  nrArr: dR,
  nrarr: gR,
  nrarrc: fR,
  nrarrw: mR,
  nrightarrow: hR,
  nrtri: bR,
  nrtrie: yR,
  nsc: wR,
  nsccue: xR,
  nsce: SR,
  nscr: qR,
  nshortmid: AR,
  nshortparallel: ER,
  nsim: kR,
  nsime: LR,
  nsimeq: NR,
  nsmid: TR,
  nspar: $R,
  nsqsube: DR,
  nsqsupe: CR,
  nsub: RR,
  nsubE: IR,
  nsube: OR,
  nsubset: FR,
  nsubseteq: UR,
  nsubseteqq: _R,
  nsucc: BR,
  nsucceq: jR,
  nsup: HR,
  nsupE: GR,
  nsupe: VR,
  nsupset: zR,
  nsupseteq: MR,
  nsupseteqq: PR,
  ntgl: ZR,
  ntild: YR,
  ntilde: WR,
  ntlg: JR,
  ntriangleleft: KR,
  ntrianglelefteq: XR,
  ntriangleright: QR,
  ntrianglerighteq: rI,
  nu: aI,
  num: eI,
  numero: tI,
  numsp: nI,
  nvDash: oI,
  nvHarr: lI,
  nvap: iI,
  nvdash: sI,
  nvge: cI,
  nvgt: vI,
  nvinfin: uI,
  nvlArr: pI,
  nvle: dI,
  nvlt: gI,
  nvltrie: fI,
  nvrArr: mI,
  nvrtrie: hI,
  nvsim: bI,
  nwArr: yI,
  nwarhk: wI,
  nwarr: xI,
  nwarrow: SI,
  nwnear: qI,
  oS: AI,
  oacut: EI,
  oacute: kI,
  oast: LI,
  ocir: NI,
  ocirc: TI,
  ocy: $I,
  odash: DI,
  odblac: CI,
  odiv: RI,
  odot: II,
  odsold: OI,
  oelig: FI,
  ofcir: UI,
  ofr: _I,
  ogon: BI,
  ograv: jI,
  ograve: HI,
  ogt: GI,
  ohbar: VI,
  ohm: zI,
  oint: MI,
  olarr: PI,
  olcir: ZI,
  olcross: YI,
  oline: WI,
  olt: JI,
  omacr: KI,
  omega: XI,
  omicron: QI,
  omid: rO,
  ominus: aO,
  oopf: eO,
  opar: tO,
  operp: nO,
  oplus: oO,
  or: lO,
  orarr: iO,
  ord: sO,
  order: cO,
  orderof: vO,
  ordf: uO,
  ordm: pO,
  origof: dO,
  oror: gO,
  orslope: fO,
  orv: mO,
  oscr: hO,
  oslas: bO,
  oslash: yO,
  osol: wO,
  otild: xO,
  otilde: SO,
  otimes: qO,
  otimesas: AO,
  oum: EO,
  ouml: kO,
  ovbar: LO,
  par: NO,
  para: TO,
  parallel: $O,
  parsim: DO,
  parsl: CO,
  part: RO,
  pcy: IO,
  percnt: OO,
  period: FO,
  permil: UO,
  perp: _O,
  pertenk: BO,
  pfr: jO,
  phi: HO,
  phiv: GO,
  phmmat: VO,
  phone: zO,
  pi: MO,
  pitchfork: PO,
  piv: ZO,
  planck: YO,
  planckh: WO,
  plankv: JO,
  plus: KO,
  plusacir: XO,
  plusb: QO,
  pluscir: rF,
  plusdo: aF,
  plusdu: eF,
  pluse: tF,
  plusm: nF,
  plusmn: oF,
  plussim: lF,
  plustwo: iF,
  pm: sF,
  pointint: cF,
  popf: vF,
  poun: uF,
  pound: pF,
  pr: dF,
  prE: gF,
  prap: fF,
  prcue: mF,
  pre: hF,
  prec: bF,
  precapprox: yF,
  preccurlyeq: wF,
  preceq: xF,
  precnapprox: SF,
  precneqq: qF,
  precnsim: AF,
  precsim: EF,
  prime: kF,
  primes: LF,
  prnE: NF,
  prnap: TF,
  prnsim: $F,
  prod: DF,
  profalar: CF,
  profline: RF,
  profsurf: IF,
  prop: OF,
  propto: FF,
  prsim: UF,
  prurel: _F,
  pscr: BF,
  psi: jF,
  puncsp: HF,
  qfr: GF,
  qint: VF,
  qopf: zF,
  qprime: MF,
  qscr: PF,
  quaternions: ZF,
  quatint: YF,
  quest: WF,
  questeq: JF,
  quo: KF,
  quot: XF,
  rAarr: QF,
  rArr: rU,
  rAtail: aU,
  rBarr: eU,
  rHar: tU,
  race: nU,
  racute: oU,
  radic: lU,
  raemptyv: iU,
  rang: sU,
  rangd: cU,
  range: vU,
  rangle: uU,
  raqu: pU,
  raquo: dU,
  rarr: gU,
  rarrap: fU,
  rarrb: mU,
  rarrbfs: hU,
  rarrc: bU,
  rarrfs: yU,
  rarrhk: wU,
  rarrlp: xU,
  rarrpl: SU,
  rarrsim: qU,
  rarrtl: AU,
  rarrw: EU,
  ratail: kU,
  ratio: LU,
  rationals: NU,
  rbarr: TU,
  rbbrk: $U,
  rbrace: DU,
  rbrack: CU,
  rbrke: RU,
  rbrksld: IU,
  rbrkslu: OU,
  rcaron: FU,
  rcedil: UU,
  rceil: _U,
  rcub: BU,
  rcy: jU,
  rdca: HU,
  rdldhar: GU,
  rdquo: VU,
  rdquor: zU,
  rdsh: MU,
  real: PU,
  realine: ZU,
  realpart: YU,
  reals: WU,
  rect: JU,
  re: KU,
  reg: XU,
  rfisht: QU,
  rfloor: r_,
  rfr: a_,
  rhard: e_,
  rharu: t_,
  rharul: n_,
  rho: o_,
  rhov: l_,
  rightarrow: i_,
  rightarrowtail: s_,
  rightharpoondown: c_,
  rightharpoonup: v_,
  rightleftarrows: u_,
  rightleftharpoons: p_,
  rightrightarrows: d_,
  rightsquigarrow: g_,
  rightthreetimes: f_,
  ring: m_,
  risingdotseq: h_,
  rlarr: b_,
  rlhar: y_,
  rlm: w_,
  rmoust: x_,
  rmoustache: S_,
  rnmid: q_,
  roang: A_,
  roarr: E_,
  robrk: k_,
  ropar: L_,
  ropf: N_,
  roplus: T_,
  rotimes: $_,
  rpar: D_,
  rpargt: C_,
  rppolint: R_,
  rrarr: I_,
  rsaquo: O_,
  rscr: F_,
  rsh: U_,
  rsqb: __,
  rsquo: B_,
  rsquor: j_,
  rthree: H_,
  rtimes: G_,
  rtri: V_,
  rtrie: z_,
  rtrif: M_,
  rtriltri: P_,
  ruluhar: Z_,
  rx: Y_,
  sacute: W_,
  sbquo: J_,
  sc: K_,
  scE: X_,
  scap: Q_,
  scaron: rB,
  sccue: aB,
  sce: eB,
  scedil: tB,
  scirc: nB,
  scnE: oB,
  scnap: lB,
  scnsim: iB,
  scpolint: sB,
  scsim: cB,
  scy: vB,
  sdot: uB,
  sdotb: pB,
  sdote: dB,
  seArr: gB,
  searhk: fB,
  searr: mB,
  searrow: hB,
  sec: bB,
  sect: yB,
  semi: wB,
  seswar: xB,
  setminus: SB,
  setmn: qB,
  sext: AB,
  sfr: EB,
  sfrown: kB,
  sharp: LB,
  shchcy: NB,
  shcy: TB,
  shortmid: $B,
  shortparallel: DB,
  sh: CB,
  shy: RB,
  sigma: IB,
  sigmaf: OB,
  sigmav: FB,
  sim: UB,
  simdot: _B,
  sime: BB,
  simeq: jB,
  simg: HB,
  simgE: GB,
  siml: VB,
  simlE: zB,
  simne: MB,
  simplus: PB,
  simrarr: ZB,
  slarr: YB,
  smallsetminus: WB,
  smashp: JB,
  smeparsl: KB,
  smid: XB,
  smile: QB,
  smt: rj,
  smte: aj,
  smtes: ej,
  softcy: tj,
  sol: nj,
  solb: oj,
  solbar: lj,
  sopf: ij,
  spades: sj,
  spadesuit: cj,
  spar: vj,
  sqcap: uj,
  sqcaps: pj,
  sqcup: dj,
  sqcups: gj,
  sqsub: fj,
  sqsube: mj,
  sqsubset: hj,
  sqsubseteq: bj,
  sqsup: yj,
  sqsupe: wj,
  sqsupset: xj,
  sqsupseteq: Sj,
  squ: qj,
  square: Aj,
  squarf: Ej,
  squf: kj,
  srarr: Lj,
  sscr: Nj,
  ssetmn: Tj,
  ssmile: $j,
  sstarf: Dj,
  star: Cj,
  starf: Rj,
  straightepsilon: Ij,
  straightphi: Oj,
  strns: Fj,
  sub: Uj,
  subE: _j,
  subdot: Bj,
  sube: jj,
  subedot: Hj,
  submult: Gj,
  subnE: Vj,
  subne: zj,
  subplus: Mj,
  subrarr: Pj,
  subset: Zj,
  subseteq: Yj,
  subseteqq: Wj,
  subsetneq: Jj,
  subsetneqq: Kj,
  subsim: Xj,
  subsub: Qj,
  subsup: r2,
  succ: a2,
  succapprox: e2,
  succcurlyeq: t2,
  succeq: n2,
  succnapprox: o2,
  succneqq: l2,
  succnsim: i2,
  succsim: s2,
  sum: c2,
  sung: v2,
  sup: u2,
  sup1: p2,
  sup2: d2,
  sup3: g2,
  supE: f2,
  supdot: m2,
  supdsub: h2,
  supe: b2,
  supedot: y2,
  suphsol: w2,
  suphsub: x2,
  suplarr: S2,
  supmult: q2,
  supnE: A2,
  supne: E2,
  supplus: k2,
  supset: L2,
  supseteq: N2,
  supseteqq: T2,
  supsetneq: $2,
  supsetneqq: D2,
  supsim: C2,
  supsub: R2,
  supsup: I2,
  swArr: O2,
  swarhk: F2,
  swarr: U2,
  swarrow: _2,
  swnwar: B2,
  szli: j2,
  szlig: H2,
  target: G2,
  tau: V2,
  tbrk: z2,
  tcaron: M2,
  tcedil: P2,
  tcy: Z2,
  tdot: Y2,
  telrec: W2,
  tfr: J2,
  there4: K2,
  therefore: X2,
  theta: Q2,
  thetasym: rH,
  thetav: aH,
  thickapprox: eH,
  thicksim: tH,
  thinsp: nH,
  thkap: oH,
  thksim: lH,
  thor: iH,
  thorn: sH,
  tilde: cH,
  time: vH,
  times: uH,
  timesb: pH,
  timesbar: dH,
  timesd: gH,
  tint: fH,
  toea: mH,
  top: hH,
  topbot: bH,
  topcir: yH,
  topf: wH,
  topfork: xH,
  tosa: SH,
  tprime: qH,
  trade: AH,
  triangle: EH,
  triangledown: kH,
  triangleleft: LH,
  trianglelefteq: NH,
  triangleq: TH,
  triangleright: $H,
  trianglerighteq: DH,
  tridot: CH,
  trie: RH,
  triminus: IH,
  triplus: OH,
  trisb: FH,
  tritime: UH,
  trpezium: _H,
  tscr: BH,
  tscy: jH,
  tshcy: HH,
  tstrok: GH,
  twixt: VH,
  twoheadleftarrow: zH,
  twoheadrightarrow: MH,
  uArr: PH,
  uHar: ZH,
  uacut: YH,
  uacute: WH,
  uarr: JH,
  ubrcy: KH,
  ubreve: XH,
  ucir: QH,
  ucirc: rG,
  ucy: aG,
  udarr: eG,
  udblac: tG,
  udhar: nG,
  ufisht: oG,
  ufr: lG,
  ugrav: iG,
  ugrave: sG,
  uharl: cG,
  uharr: vG,
  uhblk: uG,
  ulcorn: pG,
  ulcorner: dG,
  ulcrop: gG,
  ultri: fG,
  umacr: mG,
  um: hG,
  uml: bG,
  uogon: yG,
  uopf: wG,
  uparrow: xG,
  updownarrow: SG,
  upharpoonleft: qG,
  upharpoonright: AG,
  uplus: EG,
  upsi: kG,
  upsih: LG,
  upsilon: NG,
  upuparrows: TG,
  urcorn: $G,
  urcorner: DG,
  urcrop: CG,
  uring: RG,
  urtri: IG,
  uscr: OG,
  utdot: FG,
  utilde: UG,
  utri: _G,
  utrif: BG,
  uuarr: jG,
  uum: HG,
  uuml: GG,
  uwangle: VG,
  vArr: zG,
  vBar: MG,
  vBarv: PG,
  vDash: ZG,
  vangrt: YG,
  varepsilon: WG,
  varkappa: JG,
  varnothing: KG,
  varphi: XG,
  varpi: QG,
  varpropto: rV,
  varr: aV,
  varrho: eV,
  varsigma: tV,
  varsubsetneq: nV,
  varsubsetneqq: oV,
  varsupsetneq: lV,
  varsupsetneqq: iV,
  vartheta: sV,
  vartriangleleft: cV,
  vartriangleright: vV,
  vcy: uV,
  vdash: pV,
  vee: dV,
  veebar: gV,
  veeeq: fV,
  vellip: mV,
  verbar: hV,
  vert: bV,
  vfr: yV,
  vltri: wV,
  vnsub: xV,
  vnsup: SV,
  vopf: qV,
  vprop: AV,
  vrtri: EV,
  vscr: kV,
  vsubnE: LV,
  vsubne: NV,
  vsupnE: TV,
  vsupne: $V,
  vzigzag: DV,
  wcirc: CV,
  wedbar: RV,
  wedge: IV,
  wedgeq: OV,
  weierp: FV,
  wfr: UV,
  wopf: _V,
  wp: BV,
  wr: jV,
  wreath: HV,
  wscr: GV,
  xcap: VV,
  xcirc: zV,
  xcup: MV,
  xdtri: PV,
  xfr: ZV,
  xhArr: YV,
  xharr: WV,
  xi: JV,
  xlArr: KV,
  xlarr: XV,
  xmap: QV,
  xnis: rz,
  xodot: az,
  xopf: ez,
  xoplus: tz,
  xotime: nz,
  xrArr: oz,
  xrarr: lz,
  xscr: iz,
  xsqcup: sz,
  xuplus: cz,
  xutri: vz,
  xvee: uz,
  xwedge: pz,
  yacut: dz,
  yacute: gz,
  yacy: fz,
  ycirc: mz,
  ycy: hz,
  ye: bz,
  yen: yz,
  yfr: wz,
  yicy: xz,
  yopf: Sz,
  yscr: qz,
  yucy: Az,
  yum: Ez,
  yuml: kz,
  zacute: Lz,
  zcaron: Nz,
  zcy: Tz,
  zdot: $z,
  zeetrf: Dz,
  zeta: Cz,
  zfr: Rz,
  zhcy: Iz,
  zigrarr: Oz,
  zopf: Fz,
  zscr: Uz,
  zwj: _z,
  zwnj: Bz
}, ma = jz, Hz = Vz, Gz = {}.hasOwnProperty;
function Vz(r) {
  return Gz.call(ma, r) ? ma[r] : !1;
}
n(Vz, "decodeEntity$1");
var ha = Sl, ba = ql, zz = za, Mz = El, Ma = Dl, Pz = Hz, Zz = l3, Yz = {}.hasOwnProperty, lr = String.fromCharCode, Wz = Function.prototype, ya = {
  warning: null,
  reference: null,
  text: null,
  warningContext: null,
  referenceContext: null,
  textContext: null,
  position: {},
  additional: null,
  attribute: !1,
  nonTerminated: !0
}, Jz = 9, wa = 10, Kz = 12, Xz = 32, xa = 38, Qz = 59, r3 = 60, a3 = 61, e3 = 35, t3 = 88, n3 = 120, o3 = 65533, ir = "named", Wr = "hexadecimal", Jr = "decimal", Kr = {};
Kr[Wr] = 16;
Kr[Jr] = 10;
var Sr = {};
Sr[ir] = Ma;
Sr[Jr] = zz;
Sr[Wr] = Mz;
var Pa = 1, Za = 2, Ya = 3, Wa = 4, Ja = 5, Tr = 6, Ka = 7, er = {};
er[Pa] = "Named character references must be terminated by a semicolon";
er[Za] = "Numeric character references must be terminated by a semicolon";
er[Ya] = "Named character references cannot be empty";
er[Wa] = "Numeric character references cannot be empty";
er[Ja] = "Named character references must be known";
er[Tr] = "Numeric character references cannot be disallowed";
er[Ka] = "Numeric character references cannot be outside the permissible Unicode range";
function l3(r, a) {
  var e = {}, t, l;
  a || (a = {});
  for (l in ya)
    t = a[l], e[l] = t ?? ya[l];
  return (e.position.indent || e.position.start) && (e.indent = e.position.indent || [], e.position = e.position.start), i3(r, e);
}
n(l3, "parseEntities");
function i3(r, a) {
  var e = a.additional, t = a.nonTerminated, l = a.text, c = a.reference, d = a.warning, i = a.textContext, m = a.referenceContext, S = a.warningContext, h = a.position, g = a.indent || [], b = r.length, y = 0, N = -1, E = h.column || 1, A = h.line || 1, k = "", v = [], o, u, p, s, f, w, x, q, T, I, O, z, H, B, K, $, F, R, D;
  for (typeof e == "string" && (e = e.charCodeAt(0)), $ = U(), q = d ? or : Wz, y--, b++; ++y < b; )
    if (f === wa && (E = g[N] || 1), f = r.charCodeAt(y), f === xa) {
      if (x = r.charCodeAt(y + 1), x === Jz || x === wa || x === Kz || x === Xz || x === xa || x === r3 || x !== x || e && x === e) {
        k += lr(f), E++;
        continue;
      }
      for (H = y + 1, z = H, D = H, x === e3 ? (D = ++z, x = r.charCodeAt(D), x === t3 || x === n3 ? (B = Wr, D = ++z) : B = Jr) : B = ir, o = "", O = "", s = "", K = Sr[B], D--; ++D < b && (x = r.charCodeAt(D), !!K(x)); )
        s += lr(x), B === ir && Yz.call(ha, s) && (o = s, O = ha[s]);
      p = r.charCodeAt(D) === Qz, p && (D++, u = B === ir ? Pz(s) : !1, u && (o = s, O = u)), R = 1 + D - H, !p && !t || (s ? B === ir ? (p && !O ? q(Ja, 1) : (o !== s && (D = z + o.length, R = 1 + D - z, p = !1), p || (T = o ? Pa : Ya, a.attribute ? (x = r.charCodeAt(D), x === a3 ? (q(T, R), O = null) : Ma(x) ? O = null : q(T, R)) : q(T, R))), w = O) : (p || q(Za, R), w = parseInt(s, Kr[B]), s3(w) ? (q(Ka, R), w = lr(o3)) : w in ba ? (q(Tr, R), w = ba[w]) : (I = "", c3(w) && q(Tr, R), w > 65535 && (w -= 65536, I += lr(w >>> 10 | 55296), w = 56320 | w & 1023), w = I + lr(w))) : B !== ir && q(Wa, R)), w ? (G(), $ = U(), y = D - 1, E += D - H + 1, v.push(w), F = U(), F.offset++, c && c.call(m, w, {
        start: $,
        end: F
      }, r.slice(H - 1, D)), $ = F) : (s = r.slice(H - 1, D), k += s, E += s.length, y = D - 1);
    } else
      f === 10 && (A++, N++, E = 0), f === f ? (k += lr(f), E++) : G();
  return v.join("");
  function U() {
    return {
      line: A,
      column: E,
      offset: y + (h.offset || 0)
    };
  }
  function or(W, M) {
    var X = U();
    X.column += M, X.offset += M, d.call(S, er[W], X, W);
  }
  function G() {
    k && (v.push(k), l && l.call(i, k, {
      start: $,
      end: U()
    }), k = "");
  }
}
n(i3, "parse");
function s3(r) {
  return r >= 55296 && r <= 57343 || r > 1114111;
}
n(s3, "prohibited");
function c3(r) {
  return r >= 1 && r <= 8 || r === 11 || r >= 13 && r <= 31 || r >= 127 && r <= 159 || r >= 64976 && r <= 65007 || (r & 65535) === 65535 || (r & 65535) === 65534;
}
n(c3, "disallowed");
var Xa = {
  exports: {}
};
(function(r) {
  var a = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var e = function(t) {
    var l = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, c = 0, d = {}, i = {
      manual: t.Prism && t.Prism.manual,
      disableWorkerMessageHandler: t.Prism && t.Prism.disableWorkerMessageHandler,
      util: {
        encode: /* @__PURE__ */ n(function v(o) {
          return o instanceof m ? new m(o.type, v(o.content), o.alias) : Array.isArray(o) ? o.map(v) : o.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        }, "encode"),
        type: /* @__PURE__ */ n(function(o) {
          return Object.prototype.toString.call(o).slice(8, -1);
        }, "type"),
        objId: /* @__PURE__ */ n(function(o) {
          return o.__id || Object.defineProperty(o, "__id", {
            value: ++c
          }), o.__id;
        }, "objId"),
        clone: /* @__PURE__ */ n(function v(o, u) {
          u = u || {};
          var p, s;
          switch (i.util.type(o)) {
            case "Object":
              if (s = i.util.objId(o), u[s])
                return u[s];
              p = {}, u[s] = p;
              for (var f in o)
                o.hasOwnProperty(f) && (p[f] = v(o[f], u));
              return p;
            case "Array":
              return s = i.util.objId(o), u[s] ? u[s] : (p = [], u[s] = p, o.forEach(function(w, x) {
                p[x] = v(w, u);
              }), p);
            default:
              return o;
          }
        }, "deepClone"),
        getLanguage: /* @__PURE__ */ n(function(o) {
          for (; o; ) {
            var u = l.exec(o.className);
            if (u)
              return u[1].toLowerCase();
            o = o.parentElement;
          }
          return "none";
        }, "getLanguage"),
        setLanguage: /* @__PURE__ */ n(function(o, u) {
          o.className = o.className.replace(RegExp(l, "gi"), ""), o.classList.add("language-" + u);
        }, "setLanguage"),
        currentScript: /* @__PURE__ */ n(function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document && 1 < 2)
            return document.currentScript;
          try {
            throw new Error();
          } catch (s) {
            var o = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(s.stack) || [])[1];
            if (o) {
              var u = document.getElementsByTagName("script");
              for (var p in u)
                if (u[p].src == o)
                  return u[p];
            }
            return null;
          }
        }, "currentScript"),
        isActive: /* @__PURE__ */ n(function(o, u, p) {
          for (var s = "no-" + u; o; ) {
            var f = o.classList;
            if (f.contains(u))
              return !0;
            if (f.contains(s))
              return !1;
            o = o.parentElement;
          }
          return !!p;
        }, "isActive")
      },
      languages: {
        plain: d,
        plaintext: d,
        text: d,
        txt: d,
        extend: /* @__PURE__ */ n(function(o, u) {
          var p = i.util.clone(i.languages[o]);
          for (var s in u)
            p[s] = u[s];
          return p;
        }, "extend"),
        insertBefore: /* @__PURE__ */ n(function(o, u, p, s) {
          s = s || i.languages;
          var f = s[o], w = {};
          for (var x in f)
            if (f.hasOwnProperty(x)) {
              if (x == u)
                for (var q in p)
                  p.hasOwnProperty(q) && (w[q] = p[q]);
              p.hasOwnProperty(x) || (w[x] = f[x]);
            }
          var T = s[o];
          return s[o] = w, i.languages.DFS(i.languages, function(I, O) {
            O === T && I != o && (this[I] = w);
          }), w;
        }, "insertBefore"),
        DFS: /* @__PURE__ */ n(function v(o, u, p, s) {
          s = s || {};
          var f = i.util.objId;
          for (var w in o)
            if (o.hasOwnProperty(w)) {
              u.call(o, w, o[w], p || w);
              var x = o[w], q = i.util.type(x);
              q === "Object" && !s[f(x)] ? (s[f(x)] = !0, v(x, u, null, s)) : q === "Array" && !s[f(x)] && (s[f(x)] = !0, v(x, u, w, s));
            }
        }, "DFS")
      },
      plugins: {},
      highlightAll: /* @__PURE__ */ n(function(o, u) {
        i.highlightAllUnder(document, o, u);
      }, "highlightAll"),
      highlightAllUnder: /* @__PURE__ */ n(function(o, u, p) {
        var s = {
          callback: p,
          container: o,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        i.hooks.run("before-highlightall", s), s.elements = Array.prototype.slice.apply(s.container.querySelectorAll(s.selector)), i.hooks.run("before-all-elements-highlight", s);
        for (var f = 0, w; w = s.elements[f++]; )
          i.highlightElement(w, u === !0, s.callback);
      }, "highlightAllUnder"),
      highlightElement: /* @__PURE__ */ n(function(o, u, p) {
        var s = i.util.getLanguage(o), f = i.languages[s];
        i.util.setLanguage(o, s);
        var w = o.parentElement;
        w && w.nodeName.toLowerCase() === "pre" && i.util.setLanguage(w, s);
        var x = o.textContent, q = {
          element: o,
          language: s,
          grammar: f,
          code: x
        };
        function T(O) {
          q.highlightedCode = O, i.hooks.run("before-insert", q), q.element.innerHTML = q.highlightedCode, i.hooks.run("after-highlight", q), i.hooks.run("complete", q), p && p.call(q.element);
        }
        if (n(T, "insertHighlightedCode"), i.hooks.run("before-sanity-check", q), w = q.element.parentElement, w && w.nodeName.toLowerCase() === "pre" && !w.hasAttribute("tabindex") && w.setAttribute("tabindex", "0"), !q.code) {
          i.hooks.run("complete", q), p && p.call(q.element);
          return;
        }
        if (i.hooks.run("before-highlight", q), !q.grammar) {
          T(i.util.encode(q.code));
          return;
        }
        if (u && t.Worker) {
          var I = new Worker(i.filename);
          I.onmessage = function(O) {
            T(O.data);
          }, I.postMessage(JSON.stringify({
            language: q.language,
            code: q.code,
            immediateClose: !0
          }));
        } else
          T(i.highlight(q.code, q.grammar, q.language));
      }, "highlightElement"),
      highlight: /* @__PURE__ */ n(function(o, u, p) {
        var s = {
          code: o,
          grammar: u,
          language: p
        };
        if (i.hooks.run("before-tokenize", s), !s.grammar)
          throw new Error('The language "' + s.language + '" has no grammar.');
        return s.tokens = i.tokenize(s.code, s.grammar), i.hooks.run("after-tokenize", s), m.stringify(i.util.encode(s.tokens), s.language);
      }, "highlight"),
      tokenize: /* @__PURE__ */ n(function(o, u) {
        var p = u.rest;
        if (p) {
          for (var s in p)
            u[s] = p[s];
          delete u.rest;
        }
        var f = new g();
        return b(f, f.head, o), h(o, f, u, f.head, 0), N(f);
      }, "tokenize"),
      hooks: {
        all: {},
        add: /* @__PURE__ */ n(function(o, u) {
          var p = i.hooks.all;
          p[o] = p[o] || [], p[o].push(u);
        }, "add"),
        run: /* @__PURE__ */ n(function(o, u) {
          var p = i.hooks.all[o];
          if (!(!p || !p.length))
            for (var s = 0, f; f = p[s++]; )
              f(u);
        }, "run")
      },
      Token: m
    };
    t.Prism = i;
    function m(v, o, u, p) {
      this.type = v, this.content = o, this.alias = u, this.length = (p || "").length | 0;
    }
    n(m, "Token"), m.stringify = /* @__PURE__ */ n(function v(o, u) {
      if (typeof o == "string")
        return o;
      if (Array.isArray(o)) {
        var p = "";
        return o.forEach(function(q) {
          p += v(q, u);
        }), p;
      }
      var s = {
        type: o.type,
        content: v(o.content, u),
        tag: "span",
        classes: ["token", o.type],
        attributes: {},
        language: u
      }, f = o.alias;
      f && (Array.isArray(f) ? Array.prototype.push.apply(s.classes, f) : s.classes.push(f)), i.hooks.run("wrap", s);
      var w = "";
      for (var x in s.attributes)
        w += " " + x + '="' + (s.attributes[x] || "").replace(/"/g, "&quot;") + '"';
      return "<" + s.tag + ' class="' + s.classes.join(" ") + '"' + w + ">" + s.content + "</" + s.tag + ">";
    }, "stringify");
    function S(v, o, u, p) {
      v.lastIndex = o;
      var s = v.exec(u);
      if (s && p && s[1]) {
        var f = s[1].length;
        s.index += f, s[0] = s[0].slice(f);
      }
      return s;
    }
    n(S, "matchPattern");
    function h(v, o, u, p, s, f) {
      for (var w in u)
        if (!(!u.hasOwnProperty(w) || !u[w])) {
          var x = u[w];
          x = Array.isArray(x) ? x : [x];
          for (var q = 0; q < x.length; ++q) {
            if (f && f.cause == w + "," + q)
              return;
            var T = x[q], I = T.inside, O = !!T.lookbehind, z = !!T.greedy, H = T.alias;
            if (z && !T.pattern.global) {
              var B = T.pattern.toString().match(/[imsuy]*$/)[0];
              T.pattern = RegExp(T.pattern.source, B + "g");
            }
            for (var K = T.pattern || T, $ = p.next, F = s; $ !== o.tail && !(f && F >= f.reach); F += $.value.length, $ = $.next) {
              var R = $.value;
              if (o.length > v.length)
                return;
              if (!(R instanceof m)) {
                var D = 1, U;
                if (z) {
                  if (U = S(K, F, v, O), !U || U.index >= v.length)
                    break;
                  var M = U.index, or = U.index + U[0].length, G = F;
                  for (G += $.value.length; M >= G; )
                    $ = $.next, G += $.value.length;
                  if (G -= $.value.length, F = G, $.value instanceof m)
                    continue;
                  for (var W = $; W !== o.tail && (G < or || typeof W.value == "string"); W = W.next)
                    D++, G += W.value.length;
                  D--, R = v.slice(F, G), U.index -= F;
                } else if (U = S(K, 0, R, O), !U)
                  continue;
                var M = U.index, X = U[0], cr = R.slice(0, M), aa = R.slice(M + X.length), qr = F + R.length;
                f && qr > f.reach && (f.reach = qr);
                var mr = $.prev;
                cr && (mr = b(o, mr, cr), F += cr.length), y(o, mr, D);
                var te = new m(w, I ? i.tokenize(X, I) : X, H, X);
                if ($ = b(o, mr, te), aa && b(o, $, aa), D > 1) {
                  var Ar = {
                    cause: w + "," + q,
                    reach: qr
                  };
                  h(v, o, u, $.prev, F, Ar), f && Ar.reach > f.reach && (f.reach = Ar.reach);
                }
              }
            }
          }
        }
    }
    n(h, "matchGrammar");
    function g() {
      var v = {
        value: null,
        prev: null,
        next: null
      }, o = {
        value: null,
        prev: v,
        next: null
      };
      v.next = o, this.head = v, this.tail = o, this.length = 0;
    }
    n(g, "LinkedList");
    function b(v, o, u) {
      var p = o.next, s = {
        value: u,
        prev: o,
        next: p
      };
      return o.next = s, p.prev = s, v.length++, s;
    }
    n(b, "addAfter");
    function y(v, o, u) {
      for (var p = o.next, s = 0; s < u && p !== v.tail; s++)
        p = p.next;
      o.next = p, p.prev = o, v.length -= s;
    }
    n(y, "removeRange");
    function N(v) {
      for (var o = [], u = v.head.next; u !== v.tail; )
        o.push(u.value), u = u.next;
      return o;
    }
    if (n(N, "toArray"), !t.document)
      return t.addEventListener && (i.disableWorkerMessageHandler || t.addEventListener("message", function(v) {
        var o = JSON.parse(v.data), u = o.language, p = o.code, s = o.immediateClose;
        t.postMessage(i.highlight(p, i.languages[u], u)), s && t.close();
      }, !1)), i;
    var E = i.util.currentScript();
    E && (i.filename = E.src, E.hasAttribute("data-manual") && (i.manual = !0));
    function A() {
      i.manual || i.highlightAll();
    }
    if (n(A, "highlightAutomaticallyCallback"), !i.manual) {
      var k = document.readyState;
      k === "loading" || k === "interactive" && E && E.defer ? document.addEventListener("DOMContentLoaded", A) : window.requestAnimationFrame ? window.requestAnimationFrame(A) : window.setTimeout(A, 16);
    }
    return i;
  }(a);
  r.exports && (r.exports = e), typeof wr < "u" && (wr.Prism = e);
})(Xa);
var v3 = Xr;
Xr.displayName = "clike";
Xr.aliases = [];
function Xr(r) {
  r.languages.clike = {
    comment: [{
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: !0,
      greedy: !0
    }, {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0,
      greedy: !0
    }],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  };
}
n(Xr, "clike$1");
var u3 = Qr;
Qr.displayName = "javascript";
Qr.aliases = ["js"];
function Qr(r) {
  r.languages.javascript = r.languages.extend("clike", {
    "class-name": [r.languages.clike["class-name"], {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0
    }],
    keyword: [{
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: !0
    }, {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0
    }],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), r.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, r.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: r.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [{
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: r.languages.javascript
    }, {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: r.languages.javascript
    }, {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: r.languages.javascript
    }, {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: r.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), r.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: r.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), r.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), r.languages.markup && (r.languages.markup.tag.addInlined("script", "javascript"), r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), r.languages.js = r.languages.javascript;
}
n(Qr, "javascript");
var dr = (typeof globalThis > "u" ? "undefined" : J(globalThis)) === "object" ? globalThis : (typeof self > "u" ? "undefined" : J(self)) === "object" ? self : (typeof window > "u" ? "undefined" : J(window)) === "object" ? window : J(wr) === "object" ? wr : {}, p3 = L3();
dr.Prism = {
  manual: !0,
  disableWorkerMessageHandler: !0
};
var d3 = Sn, g3 = Zz, Qa = Xa.exports, f3 = ka, m3 = Ea, h3 = v3, b3 = u3;
p3();
var ra = {}.hasOwnProperty;
function re() {
}
n(re, "Refractor");
re.prototype = Qa;
var _ = new re(), ae = _;
_.highlight = w3;
_.register = fr;
_.alias = y3;
_.registered = x3;
_.listLanguages = S3;
fr(f3);
fr(m3);
fr(h3);
fr(b3);
_.util.encode = E3;
_.Token.stringify = q3;
function fr(r) {
  if (typeof r != "function" || !r.displayName)
    throw new Error("Expected `function` for `grammar`, got `" + r + "`");
  _.languages[r.displayName] === void 0 && r(_);
}
n(fr, "register");
function y3(r, a) {
  var e = _.languages, t = r, l, c, d, i;
  a && (t = {}, t[r] = a);
  for (l in t)
    for (c = t[l], c = typeof c == "string" ? [c] : c, d = c.length, i = -1; ++i < d; )
      e[c[i]] = e[l];
}
n(y3, "alias");
function w3(r, a) {
  var e = Qa.highlight, t;
  if (typeof r != "string")
    throw new Error("Expected `string` for `value`, got `" + r + "`");
  if (_.util.type(a) === "Object")
    t = a, a = null;
  else {
    if (typeof a != "string")
      throw new Error("Expected `string` for `name`, got `" + a + "`");
    if (ra.call(_.languages, a))
      t = _.languages[a];
    else
      throw new Error("Unknown language: `" + a + "` is not registered");
  }
  return e.call(this, r, t, a);
}
n(w3, "highlight");
function x3(r) {
  if (typeof r != "string")
    throw new Error("Expected `string` for `language`, got `" + r + "`");
  return ra.call(_.languages, r);
}
n(x3, "registered");
function S3() {
  var r = _.languages, a = [], e;
  for (e in r)
    ra.call(r, e) && J(r[e]) === "object" && a.push(e);
  return a;
}
n(S3, "listLanguages");
function q3(r, a, e) {
  var t;
  return typeof r == "string" ? {
    type: "text",
    value: r
  } : _.util.type(r) === "Array" ? A3(r, a) : (t = {
    type: r.type,
    content: _.Token.stringify(r.content, a, e),
    tag: "span",
    classes: ["token", r.type],
    attributes: {},
    language: a,
    parent: e
  }, r.alias && (t.classes = t.classes.concat(r.alias)), _.hooks.run("wrap", t), d3(t.tag + "." + t.classes.join("."), k3(t.attributes), t.content));
}
n(q3, "stringify");
function A3(r, a) {
  for (var e = [], t = r.length, l = -1, c; ++l < t; )
    c = r[l], c !== "" && c !== null && c !== void 0 && e.push(c);
  for (l = -1, t = e.length; ++l < t; )
    c = e[l], e[l] = _.Token.stringify(c, a, e);
  return e;
}
n(A3, "stringifyAll");
function E3(r) {
  return r;
}
n(E3, "encode");
function k3(r) {
  var a;
  for (a in r)
    r[a] = g3(r[a]);
  return r;
}
n(k3, "attributes");
function L3() {
  var r = "Prism" in dr, a = r ? dr.Prism : void 0;
  return e;
  function e() {
    r ? dr.Prism = a : delete dr.Prism, r = void 0, a = void 0;
  }
}
n(L3, "capture");
var ee = tt(ae, {});
ee.registerLanguage = function(r, a) {
  return ae.register(a);
};
var Y = ee, br = $r.navigator, ur = $r.document, Sa = $r.window;
Y.registerLanguage("jsextra", Se);
Y.registerLanguage("jsx", he);
Y.registerLanguage("json", Ae);
Y.registerLanguage("yml", De);
Y.registerLanguage("md", Te);
Y.registerLanguage("bash", ye);
Y.registerLanguage("css", we);
Y.registerLanguage("html", Le);
Y.registerLanguage("tsx", Fe);
Y.registerLanguage("typescript", Ce);
Y.registerLanguage("graphql", ke);
var N3 = oe(2)(function(r) {
  return Object.entries(r.code || {}).reduce(function(a, e) {
    var t = qa(e, 2), l = t[0], c = t[1];
    return Object.assign(Object.assign({}, a), pe({}, "* .".concat(l), c));
  }, {});
}), T3 = $3();
function $3() {
  var r = this;
  return br?.clipboard ? function(a) {
    return br.clipboard.writeText(a);
  } : function(a) {
    return le(r, void 0, void 0, /* @__PURE__ */ regeneratorRuntime.mark(/* @__PURE__ */ n(function e() {
      var t, l;
      return regeneratorRuntime.wrap(/* @__PURE__ */ n(function(d) {
        for (; ; )
          switch (d.prev = d.next) {
            case 0:
              t = ur.createElement("TEXTAREA"), l = ur.activeElement, t.value = a, ur.body.appendChild(t), t.select(), ur.execCommand("copy"), ur.body.removeChild(t), l.focus();
            case 8:
            case "end":
              return d.stop();
          }
      }, "_callee$"), e);
    }, "_callee")));
  };
}
n($3, "createCopyToClipboardFunction");
var D3 = xr.div(function(r) {
  var a = r.theme;
  return {
    position: "relative",
    overflow: "hidden",
    color: a.color.defaultText
  };
}, function(r) {
  var a = r.theme, e = r.bordered;
  return e ? {
    border: "1px solid ".concat(a.appBorderColor),
    borderRadius: a.borderRadius,
    background: a.background.content
  } : {};
}), C3 = xr(function(r) {
  var a = r.children, e = r.className;
  return /* @__PURE__ */ Q(ie, {
    horizontal: !0,
    vertical: !0,
    className: e,
    children: a
  });
})({
  position: "relative"
}, function(r) {
  var a = r.theme;
  return N3(a);
}), R3 = xr.pre(function(r) {
  var a = r.theme, e = r.padded;
  return {
    display: "flex",
    justifyContent: "flex-start",
    margin: 0,
    padding: e ? a.layoutMargin : 0
  };
}), I3 = xr.div(function(r) {
  var a = r.theme;
  return {
    flex: 1,
    paddingLeft: 2,
    paddingRight: a.layoutMargin,
    opacity: 1
  };
}), j3 = /* @__PURE__ */ n(function(a) {
  var e = a.children, t = a.language, l = t === void 0 ? "jsx" : t, c = a.copyable, d = c === void 0 ? !1 : c, i = a.bordered, m = i === void 0 ? !1 : i, S = a.padded, h = S === void 0 ? !1 : S, g = a.format, b = g === void 0 ? !0 : g, y = a.formatter, N = y === void 0 ? null : y, E = a.className, A = E === void 0 ? null : E, k = a.showLineNumbers, v = k === void 0 ? !1 : k, o = se(a, ["children", "language", "copyable", "bordered", "padded", "format", "formatter", "className", "showLineNumbers"]);
  if (typeof e != "string" || !e.trim())
    return null;
  var u = N ? N(b, e) : e.trim(), p = ea.exports.useState(!1), s = qa(p, 2), f = s[0], w = s[1], x = ea.exports.useCallback(function(q) {
    q.preventDefault();
    var T = Sa.getSelection().toString(), I = q.type !== "click" && T ? T : u;
    T3(I).then(function() {
      w(!0), Sa.setTimeout(function() {
        return w(!1);
      }, 1500);
    }).catch(ce.error);
  }, []);
  return /* @__PURE__ */ kr(D3, {
    bordered: m,
    padded: h,
    className: A,
    onCopyCapture: x,
    children: [/* @__PURE__ */ Q(C3, {
      children: /* @__PURE__ */ Q(Y, {
        ...Object.assign({
          padded: h || m,
          language: l,
          showLineNumbers: v,
          showInlineLineNumbers: v,
          useInlineStyles: !1,
          PreTag: R3,
          CodeTag: I3,
          lineNumberContainerStyle: {}
        }, o),
        children: u
      })
    }), d ? /* @__PURE__ */ Q(ve, {
      actionItems: [{
        title: f ? "Copied" : "Copy",
        onClick: x
      }]
    }) : null]
  });
}, "SyntaxHighlighter");
export {
  j3 as SyntaxHighlighter,
  $3 as createCopyToClipboardFunction,
  j3 as default
};
//# sourceMappingURL=syntaxhighlighter-b07b042a.db6a7f14.js.map
