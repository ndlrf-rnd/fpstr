const fpstr = require('../fpstr');

/**
 * Zips values being gentle with total length alightment
 * @param dirtyArrays {Array<any>}
 * @returns {Array<Array<any>>}
 */
function zip(...dirtyArrays) {
  const cleanArrays = dirtyArrays.filter(
    (a) => Array.isArray(a),
  );
  if (cleanArrays.length > 0) {
    const lengths = cleanArrays.map((a) => (Array.isArray(a) ? a.length : 0));
    const maxLength = Math.max(...lengths);
    const result = new Array(maxLength);

    for (let i = 0; i < maxLength; i += 1) {
      result[i] = cleanArrays.map(
        (a, aIdx) => (i < lengths[aIdx] ? a[i] : undefined),
      );
    }
    return result;
  }
  return [];
}

/* eslint-disable no-multi-spaces, max-len, indent */
const INPUT = [
  ['Всеобщая', 'система', 'преференций', '[Текст]', ':', 'Правила', 'о', 'происхождении.', 'TD/B/C.5/Origin...', '/', 'Конф.', 'ООН', 'по', 'вопросам', 'торговли', 'и', 'развития.', 'Совет', 'по', 'торговле.', 'Спец.', 'ком.', 'по', 'преференциям'].join(' '),
  ['Connaissance',  'des',  'temps',  'ou',  'des',  'mouveméns',  'célestes,',  'à',  'l\'\'usage',  'des',  'astronomes',  'et',  'des',  'navigateurs...',  '/',  'Publ.',  'par',  'le',  'Bureau',  'des',  'Longltudes'].join(' '),
  ['International', 'solar-terrestrial', 'physics', 'program', '[Электронный', 'ресурс]', ':', 'USA', 'NASA', 'DDF', 'ISTP', '/', 'NASA', '(Nat.', 'aeronautics', 'a.', 'space', 'administration),', 'Goddard', 'space', 'flight', 'center,', 'Mission', 'operations', 'a.', 'systems', 'development', 'div.'].join(' '),
  '.RU\\NLR\\AUTH\\661437512',
];

const LETTER_CASES = [
  ['Ull',      'll',      'll',          '[Ull]',   ':', 'Ull',     'l', 'll.',            'UU/U/U.N/Ull..',     '/', 'Ull.',  'UU',  'll', 'll',        'll',      'l',       'll.', 'Ull',   'll',       'll.', 'Ull.',  'll.',  'll', 'll'].join(' '),
  ['Ull',            'll',  'll',     'll',  'll',   'll',         'll,',        'l',  'l\'\'ll',     'll',   'll',          'll',  'll',   'll..',            '/',  'Ull.',   'll',   'll',  'Ull',     'll',   'Ull'].join(' '),
  ['Ull',           'll-ll',             'll',      'll',      '[Ull',         'll]',     ':', 'UU',  'UU',   'UU',  'UU',   '/', 'UU',   '(Ull.', 'll',          'l.', 'll',    'll),',             'Ull',     'll',    'll',     'll,',     'Ull',     'll',         'l.', 'll',      'll',          'll.'].join(' '),
  '.UU\\UU\\UU\\NNNNNNNNN',
];

const WORD_CASES = [
  //   Всеобщая   система    преференций     [Текст]    :    Правила    о     происхождении.    TD/B/C.5/Origin...    /   Конф.     ООН    по    вопросам    торговли     и    развития.     Совет    по    торговле.    Спец.    ком.    по    преференциям'
     ['w',       'w',      'w',          '[w]',    ':', 'w',      'w', 'w.',            'w/w/w.N/w...',   '/', 'w.',   'w',  'w', 'w',       'w',        'w', 'w.',       'w',    'w', 'w.',       'w.',   'w.',  'w', 'w'].join(' '),
  //  'Connaissance     des     temps     ou     des     mouveméns     célestes,     à     l\'\'usage     des     astronomes     et     des     navigateurs...     /     Publ.     par     le     Bureau     des     Longltudes'
     ['w',            'w',   'w',     'w',  'w',   'w',         'w,',        'w', 'w\'\'w',    'w',   'w',          'w',  'w',   'w...',           '/',  'w.',    'w',   'w',  'w',      'w',   'w'].join(' '),
  //   International    solar-terrestrial    physics    program    [Электронный    ресурс]    :    USA    NASA    DDF    ISTP    /    NASA    (Nat.    aeronautics    a.    space    administration),    Goddard    space    flight    center,    Mission    operations    a.    systems    development    div.'
     ['w',            'w',                'w',      'w',      '[w',          'w]',     ':', 'w',  'w',   'w',  'w',   '/', 'w',   '(w.',  'w',          'w.', 'w',    'w),',             'w',      'w',    'w',     'w,',     'w',      'w',         'w.', 'w',      'w',          'w.'].join(' '),
    '.w\\w\\w\\NNNNNNNNN',
];

const WORDS_CASES = [
  //   Всеобщая   система    преференций     [Текст]    :    Правила    о     происхождении.    TD/B/C.5/Origin...    /    Конф. ООН по вопросам торговли и развития. Совет по торговле. Спец. ком.  по преференциям'
     ['WW',                                 '[w]',     ':', 'WW.',                             'w/w/w.N/w...',       '/', 'w.', 'WW.',                               'WW.',             'w.', 'w.', 'WW'].join(' '),
  //  'Connaissance    des    temps    ou    des    mouveméns    célestes,    à    l\'\'usage    des    astronomes    et    des    navigateurs...    /    Publ.    par    le    Bureau    des    Longltudes'
     ['WW,', 'WW\'\'WW...', '/', 'w.', 'WW'].join(' '),
  //  'International    solar-terrestrial    physics    program    [Электронный    ресурс]    :    USA    NASA    DDF    ISTP    /    NASA    (Nat.    aeronautics    a.    space    administration),    Goddard    space    flight    center,    Mission    operations    a.    systems    development    div.'
     ['WW',                                                       '[WW]',                    ':', 'WW',                         '/', 'w',   '(w.', 'WW.', 'WW),', 'WW,', 'WW.',                                                   'WW.'].join(' '),
     '.w\\w\\w\\NNNNNNNNN',

];

const NONE_CASES = [
  //  'Всеобщая    система    преференций    [Текст]    :    Правила    о    происхождении.    TD/B/C.5/Origin...    /    Конф.    ООН    по    вопросам    торговли    и    развития.    Совет    по    торговле.    Спец.    ком.    по    преференциям'
     ['Ulllllll', 'lllllll', 'lllllllllll', '[Ullll]', ':', 'Ullllll', 'l', 'lllllllllllll.', 'UU/U/U.N/Ulllll...', '/', 'Ulll.', 'UUU', 'll', 'llllllll', 'llllllll', 'l', 'llllllll.', 'Ullll', 'll', 'llllllll.', 'Ulll.', 'lll.', 'll', 'llllllllllll'].join(' '),
  //  'Connaissance    des    temps    ou    des    mouveméns    célestes,    à    l\'\'usage    des    astronomes    et    des    navigateurs...    /    Publ.    par    le    Bureau    des    Longltudes'
     ['Ulllllllllll', 'lll', 'lllll', 'll', 'lll', 'lllllllll', 'llllllll,', 'l', 'l\'\'lllll', 'lll', 'llllllllll', 'll', 'lll', 'lllllllllll...', '/', 'Ulll.', 'lll', 'll', 'Ulllll', 'lll', 'Ulllllllll'].join(' '),
  //  'International    solar-terrestrial    physics    program    [Электронный    ресурс]    :    USA    NASA    DDF    ISTP    /    NASA    (Nat.    aeronautics    a.    space    administration),    Goddard    space    flight    center,    Mission    operations    a.    systems    development    div.'
     ['Ullllllllllll', 'lllll-lllllllllll', 'lllllll', 'lllllll', '[Ullllllllll', 'llllll]', ':', 'UUU', 'UUUU', 'UUU', 'UUUU', '/', 'UUUU', '(Ull.', 'lllllllllll', 'l.', 'lllll', 'llllllllllllll),', 'Ullllll', 'lllll', 'llllll', 'llllll,', 'Ullllll', 'llllllllll', 'l.', 'lllllll', 'lllllllllll', 'lll.'].join(' '),
  '.UU\\UUU\\UUUU\\NNNNNNNNN',
];
/* eslint-enable no-multi-spaces, max-len, indent */

test('letter grouping', () => {
  zip(INPUT, LETTER_CASES).forEach(([i, o]) => {
    expect(fpstr(i, fpstr.GROUPING.letter)).toEqual(o);
  });
});

test('word grouping', () => {
  zip(INPUT, WORD_CASES).forEach(([i, o]) => {
    expect(fpstr(i, fpstr.GROUPING.word)).toEqual(o);
  });
});

test('words grouping', () => {
  zip(INPUT, WORDS_CASES).forEach(([i, o]) => {
    expect(fpstr(i, fpstr.GROUPING.words)).toEqual(o);
  });
});

test('default grouping', () => {
  zip(INPUT, WORDS_CASES).forEach(([i, o]) => {
    expect(fpstr(i)).toEqual(o);
  });
});

test('none grouping', () => {
  zip(INPUT, NONE_CASES).forEach(([i, o]) => {
    expect(fpstr(i, fpstr.GROUPING.none)).toEqual(o);
  });
});
