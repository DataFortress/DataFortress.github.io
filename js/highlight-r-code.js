/*
hljs.registerLanguage("r",function(e){var r="([\\w]|\\.[\\w.])[\\w0-9._]*";var f="([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*\\(";return{c:[e.HCM,{b:r,l:r,k:{keyword:"function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ... data head tail glimpse group_by summarize class print install.packages",literal:"NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"},r:0},{cN:"number",b:"0[xX][0-9a-fA-F]+[Li]?\\b",r:0},{cN:"number",b:"\\d+(?:[eE][+\\-]?\\d*)?L\\b",r:0},{cN:"number",b:"\\d+\\.(?!\\d)(?:i\\b)?",r:0},{cN:"number",b:"\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",r:0},{cN:"symbol",v:[{b:"%(>|<>|$|R|o|\\*)%",r:0},{b:"\\:{2,3}"},{b:"\\$|;"}]},{cN:"number",b:"\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",r:0},{b:"`",e:"`",r:0},{cN:"string",c:[e.BE],v:[{b:'"',e:'"'},{b:"'",e:"'"}]},{cN:"variable",b:"\\(|\\)"}]}});
*/

hljs.registerLanguage("r",function(e){var r="([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";return{c:[e.HCM,{b:r,l:r,k:{keyword:"function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ... print",literal:"NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"},r:0},{cN:"number",b:"0[xX][0-9a-fA-F]+[Li]?\\b",r:0},{cN:"number",b:"\\d+(?:[eE][+\\-]?\\d*)?L\\b",r:0},{cN:"number",b:"\\d+\\.(?!\\d)(?:i\\b)?",r:0},{cN:"number",b:"\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",r:0},{cN:"number",b:"\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",r:0},{b:"`",e:"`",r:0},{cN:"string",c:[e.BE],v:[{b:'"',e:'"'},{b:"'",e:"'"}]},


/* Package highlight */
{cN: "keyword", b: /(^|\s*)\w+[\.\w+]*(?=:::?|$)/,r: 0}, 

/* Function highlight */
{cN: "keyword", b: /(^|\s*)[\.\w\_]+(?=\(|$)/},
{cN: "keyword", b: /(^|\s*)(:::?|\$|\.)[\.\w\_]+(?=\(|$)/},
/* {cN: "keyword", b: /(^|\s*)(:::?|\.)\w+(?=\(|$)/}, */

/* Symbol highlight */
{cN:"symbol",v:[{b:"%.{1,2}%",r:0},
                {b:"\\:{2,3}",r:0},
                {b:"\\@|\\$|;|,|~|&|\\||\\(|\\)|<-|=|\{|\}",r:0}]},
                


]}});


/*
data head tail glimpse group_by summarize class print install.packages
{cN:"keyword",b:":::|::",e:"\\(",eB:!0,eE:!0},
{cN:"keyword",b:r,e:"\\(",eE:!0,r:0},
{cN:"variable",b:r,e:"\\:{2,3}",eE:!0,r:0},
*/



/*

https://highlightjs.org/download/

https://github.com/isagalaev/highlight.js/blob/master/src/styles/agate.css

https://github.com/isagalaev/highlight.js/blob/master/src/highlight.js
http://cdn.bootcss.com/highlight.js/9.12.0/highlight.min.js

https://github.com/isagalaev/highlight.js/blob/master/src/languages/r.js
http://cdn.bootcss.com/highlight.js/9.12.0/languages/r.min.js

https://github.com/isagalaev/highlight.js/blob/905119aad47d4bb3d4fbaa14df7598034dccb6a3/tools/utility.js

https://stackoverflow.com/questions/28630379/highlight-js-custom-language-definition
*/
