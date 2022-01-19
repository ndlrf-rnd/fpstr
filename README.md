# fpstr

Structural **F**inger**P**rinting for **STR**ings.

package: `fpstr`

## Installation

This library is targeted [Node.js](https://nodejs.org/en/download/) and browser environment.

### Installation via package

```shell script
$ npm install fpstr
```

### Installation from sources

```shell script
$ git clone http://gitlab.rsl.ru/bibliometrics/fpstr.git
$ cd ./fpstr
$ npm install -g .
```

## Usage

### Basic
```
const fpstr = require('string-fingerprint');

console.info(fpstr('47269bb9-9a29-4645-aebe-4f3782f10797'));
// => 'NNNNNllN-NlNN-NNNN-w-NlNNNNlNNNNN'

console.info(fpstr('47269BB9-9A29-4645-AEBE-4F3782F10797'));
// => 'NNNNNUUN-NUNN-NNNN-w-NUNNNNUNNNNN'
```

### Groupings
- `none` 
  ```
  console.info(fpstr('Hello world!!! Hello another world!!!111', fpstr.GROUPING.none));
  // => 'Ullll lllll!!! Ullll lllllll lllll!!!NNN'
  ```

- `letter`
  ```
  console.info(fpstr('Hello world!!! Hello another world!!!111', fpstr.GROUPING.letter));
  // => 'Ull ll!! Ull ll ll!!NNN'
  ```

- `word`
  ```
  console.info(fpstr('Hello world!!! Hello another world!!!111', fpstr.GROUPING.word));
  // => 'w w!!! w w w!!!NNN'
  ```

- `words` (default)
  ```
  console.info(fpstr('Hello world!!! Hello another world!!!111', fpstr.GROUPING.words));
  // => 'WW!!! WW!!!NNN'
  ```

```

## License notes

This program is authored by [Ilya Kutukov](https://github.com/mrjj) ([i@leninka.ru](mailto:i@leninka.ru), [post.ilya@gmail.com](mailto:post.ilya@gmail.com)) and distributed under MIT License.

---

The MIT License (MIT)

Copyright (c) 2019 Ilya Kutukov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Owl

```
   ◯  .       .        .           .     *     .
 .  .     .      ___---===(OvO)===---___  .      °     *
                  .              
,~^~,   .      .     ◯         .            .      ,~^~^^                
    ~^\$~^~~^#*~-^\_  __ _ _ _ _ ____/*-~^~~^^~^##~^~^
                  = * - _-  =_- . - 
```
