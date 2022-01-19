// noinspection JSUnusedLocalSymbols

const GROUPING_LETTER = 'letter';
const GROUPING_WORD = 'word';
const GROUPING_WORDS = 'words';
const GROUPING_NONE = 'none';

const GROUPING = {
  [GROUPING_LETTER]: GROUPING_LETTER,
  [GROUPING_WORD]: GROUPING_WORD,
  [GROUPING_WORDS]: GROUPING_WORDS,
  [GROUPING_NONE]: GROUPING_NONE,
};

const DEFAULT_OPTIONS = {
  grouping: GROUPING_WORDS,
  roman: false,
  letterNumber: false,
  sep: '',
};

// https://en.wikipedia.org/wiki/Comma#Comma_variants
const COMMAS = [
  '\u002C', // COMMA Prose in European languages Decimal separator in Continental Europe
  // Brazil, and some other Latin American countries
  '\u02BB', // MODIFIER LETTER TURNED COMMA Used as ʻokina in Hawaiian
  '\u060C', // ARABIC COMMA Used in all languages using Arabic alphabet Also used in other
  // languages, including Syriac and Thaana
  '\u2E32', // TURNED COMMA Palaeotype transliteration symbol; indicates nasalization
  '\u2E34', // RAISED COMMA
  '\u2E41', // REVERSED COMMA Used in Sindhi, among others
  '\u2E49', // DOUBLE STACKED COMMA Used in the Eastern Orthodox liturgical book Typikon
  '\u3001', // IDEOGRAPHIC COMMA Used in Chinese and Japanese writing systems
  // (see § In other languages, below)
  '\uFE10', // PRESENTATION FORM FOR VERTICAL COMMA Used in vertical writing
  '\uFE11', // PRESENTATION FORM FOR VERTICAL IDEOGRAPHIC COMMA Used in vertical writing
  '\uFE50', // SMALL COMMA
  '\uFE51', // SMALL IDEOGRAPHIC COMMA
  '\uFF0C', // FULLWIDTH COMMA
  '\uFF64', // HALFWIDTH IDEOGRAPHIC COMMA
];

const APOSTROPHE = [
  '\u0027', // ' APOSTROPHE Typewriter apostrophe.
  '\u2019', // ’ RIGHT SINGLE QUOTATION MARK Punctuation apostrophe. Serves as both an
  /*
   * apostrophe and closing single quotation mark. This is the preferred character to
   * use for apostrophe according to the Unicode standard.[4][102]
   */
  '\u02BC', // ʼ MODIFIER LETTER APOSTROPHE
];

const MATHOPS = [
  '\u002B', // Plus +  &#43; %2B &plus;
  '\u2212', // Minus −  %E2%88%92 &minus; &#x2212; &#8722;
  '\u002D', // Hyphen-minus -  &#45; %2D
  '\uFE63', // Small Hyphen-minus ﹣  %EF%B9%A3 &#xfe63; &#65123;
  '\uFF0B', // Full-width Plus ＋  %EF%BC%8B &#xff0b; &#65291;
  '\uFF0D', // Full-width Hyphen-minus －  %EF%BC%8D &#xff0d; &#65293;
];

// https://en.wikipedia.org/wiki/Full_stop#Full_stops_in_other_scripts
const FULL_STOP = [
  '.', // . full stop 056 46  &#46;
  '\u0964', /* In the Devanagari script, used to write Hindi and Sanskrit among other Indian
             * languages, a vertical line ("।") (U+0964 "Devanagari Danda") is used to mark
             * the end of a sentence. It is known as poorna viraam (full stop) in Hindi, and
             * Daa`ri in Bengali. Some Indian languages also use the full stop, such as Marathi.
             * In Tamil, it is known as mutrupulli, which means end dot.[38]
             */
  '\u0DF4', /* In Sinhala, it is known as kundaliya: "෴" ((U+0DF4) symbol "full stop").
             * Periods were later introduced into Sinhala script after the introduction of paper
             * due to the influence of Western languages. See also Sinhala numerals.
             */

  '\u0589', // ։ armenian full stop 02611 1417  &#1417;
  '\u06D4', // ۔ arabic full stop 03324 1748  &#1748; Urdu uses the "۔" (U+06D4) symbol.
  '\u0701', // ܁ syriac supralinear full stop 03401 1793  &#1793;
  '\u0702', // ܂ syriac sublinear full stop 03402 1794  &#1794;
  '\u1362', // ። ethiopic full stop 011542 4962  &#4962;
  '\u166E', // ᙮ canadian syllabics full stop 013156 5742  &#5742;
  '\u1803', // ᠃ mongolian full stop 014003 6147  &#6147;
  '\u1809', // ᠉ mongolian manchu full stop 014011 6153  &#6153;
  '\u2488', // ⒈ digit one full stop 022210 9352  &#9352;
  '\u2489', // ⒉ digit two full stop 022211 9353  &#9353;
  '\u248A', // ⒊ digit three full stop 022212 9354  &#9354;
  '\u248B', // ⒋ digit four full stop 022213 9355  &#9355;
  '\u248C', // ⒌ digit five full stop 022214 9356  &#9356;
  '\u248D', // ⒍ digit six full stop 022215 9357  &#9357;
  '\u248E', // ⒎ digit seven full stop 022216 9358  &#9358;
  '\u248F', // ⒏ digit eight full stop 022217 9359  &#9359;
  '\u2490', // ⒐ digit nine full stop 022220 9360  &#9360;
  '\u2491', // ⒑ number ten full stop 022221 9361  &#9361;
  '\u2492', // ⒒ number eleven full stop 022222 9362  &#9362;
  '\u2493', // ⒓ number twelve full stop 022223 9363  &#9363;
  '\u2494', // ⒔ number thirteen full stop 022224 9364  &#9364;
  '\u2495', // ⒕ number fourteen full stop 022225 9365  &#9365;
  '\u2496', // ⒖ number fifteen full stop 022226 9366  &#9366;
  '\u2497', // ⒗ number sixteen full stop 022227 9367  &#9367;
  '\u2498', // ⒘ number seventeen full stop 022230 9368  &#9368;
  '\u2499', // ⒙ number eighteen full stop 022231 9369  &#9369;
  '\u249A', // ⒚ number nineteen full stop 022232 9370  &#9370;
  '\u249B', // ⒛ number twenty full stop 022233 9371  &#9371;
  '\u2CF9', // ⳹ coptic old nubian full stop 026371 11513  &#11513;
  '\u2CFE', // ⳾ coptic full stop 026376 11518  &#11518;
  /*
   * // In some East Asian languages, notably Chinese and Japanese, a small circle is used instea
   * of a solid dot: "。" (U+3002 "Ideographic Full Stop", simplified Chinese: 句号, traditional
   * Chinese: 句號, Japanese: 句点). Notably, in Taiwan, Hong Kong, and Macao usage, the full stop
   * is written at center height instead of on the line.
   */
  '\u3002', // ideographic full stop 030002 12290  &#12290;
  '\uFE12', // presentation form for vertical ideographic full stop 0177022 65042  &#65042;
  '\uFE52', // small full stop 0177122 65106  &#65106;
  '\uFF0E', // fullwidth full stop 0177416 65294  &#65294;
  '\uFF61', // ｡ halfwidth ideographic full stop 0177541 65377  &#65377;
  '\uE002E', // tag full stop 03400056 917550  &#917550;
];

// https://unicodelookup.com/#exclamation/1
const EXCLAMATION_MARK = [
  '!', //   ! exclamation mark 041 33  &#33;
  '\u00A1', // ¡ inverted exclamation mark 0241 161  &iexcl;
  '\u055C', // ՜ armenian exclamation mark 02534 1372  &#1372;
  '\u1944', // ᥄ limbu exclamation mark 014504 6468  &#6468;
  '\u203C', // ‼ double exclamation mark 020074 8252  &#8252;
  '\u2048', // ⁈ question exclamation mark 020110 8264  &#8264;
  '\u2049', // ⁉ exclamation question mark 020111 8265  &#8265;
  '\u2762', // ❢ heavy exclamation mark ornament 023542 10082  &#10082;
  '\u2763', // ❣ heavy heart exclamation mark ornament 023543 10083  &#10083;
  '\uFE15', // ︕ presentation form for vertical exclamation mark 0177025 65045  &#65045;
  '\uFE57', // ﹗ small exclamation mark 0177127 65111  &#65111;
  '\uFF01', // ！ fullwidth exclamation mark 0177401 65281  &#65281;
];

// https://unicodelookup.com/#question/1
const QUESTION_MARK = [
  '?', // question mark 077 63 0x3F &#63;
  '\u00BF', // ¿ inverted question mark 0277 191  &iquest;
  '\u037E', // ; greek question mark 01576 894  &#894;
  '\u055E', // ՞ armenian question mark 02536 1374  &#1374;
  '\u061F', // ؟ arabic question mark 03037 1567  &#1567;
  '\u1367', // ፧ ethiopic question mark 011547 4967  &#4967;
  '\u1945', // ᥅ limbu question mark 014505 6469  &#6469;
  '\u2047', // ⁇ double question mark 020107 8263  &#8263;
  '\u2048', // ⁈ question exclamation mark 020110 8264  &#8264;
  '\u2049', // ⁉ exclamation question mark 020111 8265  &#8265;
  '\u225F', // ≟ questioned equal to 021137 8799  &#8799;
  '\u2370', // ⍰ apl functional symbol quad question 021560 9072  &#9072;
  '\u2A7B', // ⩻ less-than with question mark above 025173 10875  &#10875;
  '\u2A7C', // ⩼ greater-than with question mark above 025174 10876  &#10876;
  '\u2CFA', // ⳺ coptic old nubian direct question mark 026372 11514  &#11514;
  '\u2CFB', // ⳻ coptic old nubian indirect question mark 026373 11515  &#11515;
  '\uFE16', // ︖ presentation form for vertical question mark 0177026 65046  &#65046;
  '\uFE56', // ﹖ small question mark 0177126 65110  &#65110;
  '\uFF1F', // ？ fullwidth question mark 0177437 65311  &#65311;
];

// noinspection JSUnusedLocalSymbols
// eslint-disable-next-line no-unused-vars
const SENTENCE_LETTERS = [
  '\\p{Pd}',
  '\\p{Pc}',
  '\\p{Letter}',
  '\\d',
  ...FULL_STOP,
  ...EXCLAMATION_MARK,
  ...QUESTION_MARK,
  ...MATHOPS,
  ...APOSTROPHE,
  ...COMMAS,
].join('');

/*
 * // Letter
 * Unicode character codes expressions
 * Source: https://www.regular-expressions.info/unicode.html#prop
 * \p{Z} === \p{Separator}               // any kind of whitespace or invisible separator.
 * \p{S} === \p{Symbol}                  // math symbols, currency signs, dingbats,
 * // box-drawing characters, etc.
 *
 * \p{Pd} === \p{Dash_Punctuation}       // any kind of hyphen or dash.
 * \p{Pc} === \p{Connector_Punctuation}  // a punctuation character such as an underscore
 * // that connects words.
 *
 * \d === \p{Number}
 * \p{L} === \p{Letter}
 * \p{Lu} === \p{Uppercase_Letter}
 * \p{Ll} === \p{Lowercase_Letter}
 * \p{Lt} === \p{Titlecase_Letter}
 * \p{Lo} === \p{Other_Letter}
 */

const LETTER_LOWER_RE = /[\p{Ll}\p{Lt}]/gu;
const LETTER_UPPER_RE = /[\p{Lu}\p{Lo}]/gu;

const DIGIT_RE = /[\p{N}]/gu;

/**
 * TODO: Add better roman numbers support
 * @type {RegExp}
 */
const ROMAN_NUMBERS_RE = /(?<![\p{L}\d])M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})(\p{S}*\p{Pd}+\p{S}*M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3}))?(?![\p{L}\d])/gu;

/*
 * TODO: Add better letter numbers support combining them with normal digits
 * https://www.regular-expressions.info/unicode.html#category
 */
const LETTER_NUMBER_DIGIT_RE = /[\p{N}]|(?<=[\p{N}\p{Letter_Number}])\p{Letter_Number}|\p{Letter_Number}(?=[\p{N}\p{Letter_Number}])/gu;

// Word
const WORD_MIXED_RE = /(?<![\p{L}\d])[lU\p{Pd}\p{Pc}\p{Pd}]+(?![\p{L}\d])/gu;

// Words

/* eslint-disable no-unused-vars */
// noinspection JSUnusedLocalSymbols
const WORDS_CAMEL_RE = /U[\p{Z}l\p{Pc}\-&,]*\p{Z}+[\p{Z}l\p{Pc}\-&,.]*l/gu;
// noinspection JSUnusedLocalSymbols
const WORDS_LOWER_RE = /l[\p{Z}l\p{Pc}\-&,]*\p{Z}+[\p{Z}l\p{Pc}\-&,.]*l/gu;
// noinspection JSUnusedLocalSymbols
const WORDS_UPPER_RE = /U[\p{Z}U\p{Pc}\-&,]*\p{Z}+[\p{Z}U\p{Pc}\-&,.]*U/gu;
// noinspection JSUnusedLocalSymbols
const WORDS_MIXED_RE = /[lU][\p{Z}lU\p{Pc}\-&,]*\p{Z}+[\p{Z}lU\p{Pc}\-&,.]*[lU]/gu;
/* eslint-enable no-unused-vars */

/**
 * Test if value string of one or more characters.
 * @param x {string}
 * @returns {boolean}
 */
function isNonEmptyStr(x) {
  return (typeof x === 'string') && (x.length > 0);
}

/**
 * Convert string to fingerpring pattern
 * @param str {string}
 * @param options {Object}
 * @returns {?string}
 */
const fpstr = (
  str,
  options = DEFAULT_OPTIONS,
) => {
  const o = {
    ...DEFAULT_OPTIONS,
    ...isNonEmptyStr(options) ? { grouping: options } : (options || {}),
  };

  if (typeof GROUPING[o.grouping] === 'undefined') {
    throw new Error(`Invalid grouping: ${o.grouping}`);
  }

  let symbolKindTokens = str
    .replace(LETTER_LOWER_RE, 'l')
    .replace(LETTER_UPPER_RE, 'U');

  if (options.letterNumber) {
    symbolKindTokens = symbolKindTokens.replace(LETTER_NUMBER_DIGIT_RE, 'N');
  } else {
    symbolKindTokens = symbolKindTokens.replace(DIGIT_RE, 'N');
  }

  if (options.roman) {
    symbolKindTokens = symbolKindTokens.replace(ROMAN_NUMBERS_RE, 'R');
  }

  if (o.grouping === GROUPING.letter) {
    let p = symbolKindTokens[0];
    let acc = 0;
    const res = [];
    for (let i = 0; i < symbolKindTokens.length + 1; i += 1) {
      const c = symbolKindTokens[i];
      if (c !== p) {
        let suffix = '';
        if (acc > 1) {
          if (p === 'N') {
            suffix = 'N'.repeat(acc - 1);
          } else {
            suffix = p;
          }
        }
        res.push(`${p}${suffix}`);
        acc = 0;
      }
      acc += 1;
      if (i < symbolKindTokens.length) {
        p = c;
      }
    }
    return res.join(o.sep);
  }

  const wordTokens = symbolKindTokens
    .replace(WORD_MIXED_RE, 'w');

  if (o.grouping === GROUPING.word) {
    return wordTokens;
  }

  if (o.grouping === GROUPING.words) {
    return wordTokens.replace(
      // eslint-disable-next-line no-useless-escape
      /w([\p{Z} ][w])+/ug,
      'WW',
    );
  }
  if (o.grouping === GROUPING.none) {
    return symbolKindTokens;
  }
  return null;
};

fpstr.GROUPING = GROUPING;

module.exports = fpstr;
