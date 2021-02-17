// The keys of the array returned become class names in the spans that the text is rendered in. So changing the keyname changes the CSS

const ret = {
  // YAML uses # prefixed comments
  comment: /#.*/,
  // Selects text that come after `Name:`
  entity: {
    pattern: /(-\sName:\s)(.*)/,
    lookbehind: true
  },
  // Selects text that is suffixed by `:`
  key: {
    pattern: /(\S*)(?=:)/
  },
  // Keywords used in DSL
  function: /\b(?:AND|OR|NOT|COUNT OF|AS|ThisYear|LastYear)\b/,
  // Used to select numbers. Copied from javascript regex
  number: /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
  // Used to select operators. Copied from javascript regex
  operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
  // Used to select punctuations. Copied from YAML regex
  punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
};

export default ret;
