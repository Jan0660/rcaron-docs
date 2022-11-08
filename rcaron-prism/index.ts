import * as prismjs from 'prismjs';

const PrismLanguages: prismjs.Languages = globalThis.Prism.languages;

const punctuation = /[()[\]{},;]/;
const builtInFunction = {
    pattern: /(print|open|open_ext)/i,
    alias: 'builtin',
};
const builtInConversionFunction = {
    pattern: /(float|string|int32|int64)/i,
    alias: 'builtin',
};
const controlKeyword = {
    pattern: /((dowhile)|(loop)|(while)|(return)|(foreach)|(qfor)|(for)|(else)|(if)|(switch)|(default)|(try)|(catch)|(finally)|(throw))/i,
    alias: 'keyword',
};

PrismLanguages['rcaron'] = {
    // Prism.languages['rcaron'] = {
    'comment': {
        pattern: /(\/\/.*)|(\/\*(.|\n)*?\*\/)/,
        greedy: true,
        multiline: true,
    },
    'null': /\$null/,
    'string': /'(.|\n)*?'/,
    'variable': /\$[a-zA-Z0-9_]+/,
    'functionDefinition': {
        pattern: /(func)\s+(\w+)/i,
        inside: {
            'keyword': /^func/i,
            'function': /\w+/i
        }
    },
    'methodCall':{
        pattern: /(\w+)\s*\(/i,
        alias: 'function',
        inside: {
            'punctuation': punctuation,
            'builtInFunction': builtInFunction,
            'builtInConversionFunction': builtInConversionFunction,
            'controlKeyword': controlKeyword,
        }
    },
    'punctuation': punctuation,
    'hashbang': {
        pattern: /^#!.*/,
        greedy: true,
        alias: 'comment'
    },
    'controlKeyword': controlKeyword,
    'builtInFunction': builtInFunction,
    'builtInConversionFunction': builtInConversionFunction,
    'boolean': /\$(true|false)/,
    'number': /[0-9]/,
    'class-name': /#([\w\._]+)/i,
    'classDefinition': {
        pattern: /(class)\s+(\w+)/i,
        inside: {
            'keyword': /class/i,
            'class-name': /\w+/i
        }
    },
}
