const fpstr = require('./fpstr');

const info = (s) => process.stdout.write(`${s}\n`);

info(fpstr('47269bb9-9a29-4645-aebe-4f3782f10797'));
// => 'NNNNNllN-NlNN-NNNN-w-NlNNNNlNNNNN'

info(fpstr('47269BB9-9A29-4645-AEBE-4F3782F10797'));
// => 'NNNNNUUN-NUNN-NNNN-w-NUNNNNUNNNNN'

info(fpstr('Hello world!!! Hello another world!!!111', fpstr.GROUPING.none));
// => 'Ullll lllll!!! Ullll lllllll lllll!!!NNN'

info(fpstr('Hello world!!! Hello another world!!!111', fpstr.GROUPING.letter));
// => 'Ull ll!! Ull ll ll!!NNN'

info(fpstr('Hello world!!! Hello another world!!!111', fpstr.GROUPING.word));
// => 'w w!!! w w w!!!NNN'

info(fpstr('Hello world!!! Hello another world!!!111', fpstr.GROUPING.words)); // Default
// => 'WW!!! WW!!!NNN'
