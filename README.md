#项目名称:找家纺网
---------
*官网http://h5.zhaojiafang.com/home 

*WebApp上线地址：http://47.95.146.227:2009

*后台管理系统地址：http://47.95.146.227:2010（账号test，密码12345）

git仓库地址

*github地址：https://github.com/gzh51906/zjfw 

团队与分工
组长：张俊
组员：汤宇 姚美利
负责模块说明：
----------------
*技术栈：vue2.x + vue-router + vue -cli + Vuex + axios + VantUI +  git + eleementui + node + mongodb

*张俊：负责 项目搭建、项目分配、合并解决冲突 爬取数据  负责首页开发 传参到详情页面 构建node服务器

*姚美丽：负责列表页，详情页 ，购物车静态页面以及对接api接口实现页面渲染，结合vuex实现购物车逻辑

*汤于：负责页面注册和登录，后端api的编写，以及后台管理系统的实现

项目目录
-----------------------------------
├─assets
├─imgs
│  └─ser
│      ├─db
│      ├─node_modules
│      │  ├─.bin
│      │  ├─@types
│      │  │  └─node
│      │  │      └─ts3.2
│      │  ├─accepts
│      │  ├─ajv
│      │  │  ├─dist
│      │  │  ├─lib
│      │  │  │  ├─compile
│      │  │  │  ├─dot
│      │  │  │  ├─dotjs
│      │  │  │  └─refs
│      │  │  └─scripts
│      │  ├─array-flatten
│      │  ├─asn1
│      │  │  └─lib
│      │  │      └─ber
│      │  ├─assert-plus
│      │  ├─async-limiter
│      │  ├─asynckit
│      │  │  └─lib
│      │  ├─aws-sign2
│      │  ├─aws4
│      │  ├─bcrypt-pbkdf
│      │  ├─bignumber.js
│      │  │  └─doc
│      │  ├─body-parser
│      │  │  └─lib
│      │  │      └─types
│      │  ├─boolbase
│      │  ├─bson
│      │  │  ├─browser_build
│      │  │  └─lib
│      │  │      └─bson
│      │  │          └─parser
│      │  ├─buffer-equal-constant-time
│      │  ├─bytes
│      │  ├─caseless
│      │  ├─cheerio
│      │  │  └─lib
│      │  │      └─api
│      │  ├─combined-stream
│      │  │  └─lib
│      │  ├─content-disposition
│      │  ├─content-type
│      │  ├─cookie
│      │  ├─cookie-signature
│      │  ├─core-util-is
│      │  │  └─lib
│      │  ├─css-select
│      │  │  └─lib
│      │  ├─css-what
│      │  ├─dashdash
│      │  │  ├─etc
│      │  │  └─lib
│      │  ├─debug
│      │  │  └─src
│      │  ├─delayed-stream
│      │  │  └─lib
│      │  ├─depd
│      │  │  └─lib
│      │  │      ├─browser
│      │  │      └─compat
│      │  ├─destroy
│      │  ├─dom-serializer
│      │  ├─domelementtype
│      │  ├─domhandler
│      │  │  ├─lib
│      │  │  └─test
│      │  │      └─cases
│      │  ├─domutils
│      │  │  ├─lib
│      │  │  └─test
│      │  │      └─tests
│      │  ├─ecc-jsbn
│      │  │  └─lib
│      │  ├─ecdsa-sig-formatter
│      │  │  └─src
│      │  ├─ee-first
│      │  ├─encodeurl
│      │  ├─entities
│      │  │  ├─lib
│      │  │  ├─maps
│      │  │  └─test
│      │  ├─escape-html
│      │  ├─etag
│      │  ├─express
│      │  │  └─lib
│      │  │      ├─middleware
│      │  │      └─router
│      │  ├─extend
│      │  ├─extsprintf
│      │  │  └─lib
│      │  ├─fast-deep-equal
│      │  ├─fast-json-stable-stringify
│      │  │  ├─benchmark
│      │  │  ├─example
│      │  │  └─test
│      │  ├─finalhandler
│      │  ├─forever-agent
│      │  ├─form-data
│      │  │  └─lib
│      │  ├─forwarded
│      │  ├─fresh
│      │  ├─getpass
│      │  │  └─lib
│      │  ├─har-schema
│      │  │  └─lib
│      │  ├─har-validator
│      │  │  └─lib
│      │  ├─htmlparser2
│      │  │  ├─lib
│      │  │  └─node_modules
│      │  │      └─readable-stream
│      │  │          └─lib
│      │  │              └─internal
│      │  │                  └─streams
│      │  ├─http-errors
│      │  ├─http-signature
│      │  │  └─lib
│      │  ├─iconv-lite
│      │  │  ├─encodings
│      │  │  │  └─tables
│      │  │  └─lib
│      │  ├─inherits
│      │  ├─ipaddr.js
│      │  │  └─lib
│      │  ├─is-typedarray
│      │  ├─isarray
│      │  ├─isstream
│      │  ├─jsbn
│      │  ├─json-schema
│      │  │  ├─draft-00
│      │  │  ├─draft-01
│      │  │  ├─draft-02
│      │  │  ├─draft-03
│      │  │  │  └─examples
│      │  │  ├─draft-04
│      │  │  ├─lib
│      │  │  └─test
│      │  ├─json-schema-traverse
│      │  │  └─spec
│      │  │      └─fixtures
│      │  ├─json-stringify-safe
│      │  │  └─test
│      │  ├─jsonwebtoken
│      │  │  ├─lib
│      │  │  └─node_modules
│      │  │      └─ms
│      │  ├─jsprim
│      │  │  └─lib
│      │  ├─jwa
│      │  ├─jws
│      │  │  └─lib
│      │  ├─lodash
│      │  │  └─fp
│      │  ├─lodash.includes
│      │  ├─lodash.isboolean
│      │  ├─lodash.isinteger
│      │  ├─lodash.isnumber
│      │  ├─lodash.isplainobject
│      │  ├─lodash.isstring
│      │  ├─lodash.once
│      │  ├─media-typer
│      │  ├─merge-descriptors
│      │  ├─methods
│      │  ├─mime
│      │  │  └─src
│      │  ├─mime-db
│      │  ├─mime-types
│      │  ├─mongodb
│      │  │  └─lib
│      │  │      ├─async
│      │  │      ├─bulk
│      │  │      ├─core
│      │  │      │  ├─auth
│      │  │      │  ├─connection
│      │  │      │  ├─sdam
│      │  │      │  ├─tools
│      │  │      │  ├─topologies
│      │  │      │  └─wireprotocol
│      │  │      ├─gridfs
│      │  │      ├─gridfs-stream
│      │  │      ├─operations
│      │  │      └─topologies
│      │  ├─ms
│      │  ├─mysql
│      │  │  └─lib
│      │  │      └─protocol
│      │  │          ├─constants
│      │  │          ├─packets
│      │  │          └─sequences
│      │  ├─negotiator
│      │  │  └─lib
│      │  ├─nth-check
│      │  ├─oauth-sign
│      │  ├─on-finished
│      │  ├─parse5
│      │  │  └─lib
│      │  │      ├─common
│      │  │      ├─extensions
│      │  │      │  ├─location_info
│      │  │      │  └─position_tracking
│      │  │      ├─parser
│      │  │      ├─sax
│      │  │      ├─serializer
│      │  │      ├─tokenizer
│      │  │      ├─tree_adapters
│      │  │      └─utils
│      │  ├─parseurl
│      │  ├─path-to-regexp
│      │  ├─performance-now
│      │  │  ├─lib
│      │  │  ├─src
│      │  │  └─test
│      │  │      └─scripts
│      │  ├─process-nextick-args
│      │  ├─proxy-addr
│      │  ├─psl
│      │  │  ├─data
│      │  │  └─dist
│      │  ├─punycode
│      │  ├─qs
│      │  │  ├─dist
│      │  │  ├─lib
│      │  │  └─test
│      │  ├─range-parser
│      │  ├─raw-body
│      │  ├─readable-stream
│      │  │  ├─doc
│      │  │  │  └─wg-meetings
│      │  │  └─lib
│      │  │      └─internal
│      │  │          └─streams
│      │  ├─request
│      │  │  ├─lib
│      │  │  └─node_modules
│      │  │      └─qs
│      │  │          ├─dist
│      │  │          ├─lib
│      │  │          └─test
│      │  ├─require_optional
│      │  │  └─test
│      │  │      └─nestedTest
│      │  ├─resolve-from
│      │  ├─safe-buffer
│      │  ├─safer-buffer
│      │  ├─semver
│      │  │  └─bin
│      │  │  └─node_modules
│      │  │      └─ms
│      │  ├─serve-static
│      │  ├─setprototypeof
│      │  │  └─test
│      │  ├─sqlstring
│      │  │  └─lib
│      │  ├─sshpk
│      │  │  ├─bin
│      │  │  ├─lib
│      │  │  │  └─formats
│      │  │  └─man
│      │  │      └─man1
│      │  ├─statuses
│      │  ├─string_decoder
│      │  │  └─lib
│      │  ├─toidentifier
│      │  ├─tough-cookie
│      │  │  ├─lib
│      │  │  └─node_modules
│      │  │      └─punycode
│      │  ├─tunnel-agent
│      │  ├─tweetnacl
│      │  ├─type-is
│      │  ├─unpipe
│      │  ├─uri-js
│      │  │  ├─dist
│      │  │  │  ├─es5
│      │  │  │  └─esnext
│      │  │  │      └─schemes
│      │  │  ├─src
│      │  │  │  └─schemes
│      │  │  └─tests
│      │  ├─util-deprecate
│      │  ├─utils-merge
│      │  ├─uuid
│      │  │  ├─bin
│      │  │  └─lib
│      │  ├─vary
│      │  ├─verror
│      │  │  └─lib
│      │  └─ws
│      │      └─lib
│      ├─router
│      └─utils
├─pages
├─router

---------------------
项目页截图
-----------
