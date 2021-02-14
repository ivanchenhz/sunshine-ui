# Sunshine UI

[Demo](https://sunshine-ui.vercel.app/)

Sunshine UI is a component library on top of Svelte and Tailwind CSS, beautiful like sunshine ...

### Installation

To get you started 

```
$ npm install sunshine-ui or yarn add sunshine-ui
```

Then import css style and each component

```js
import 'sunshine-ui/dist/index.css'

import { Avatar, Select } from 'sunshine-ui'
```

For icons, need to copy 'sunshine-ui/dist/heroicons.svg' to your public path, (same as index.html); then could use all the svg icons from (https://heroicons.com/) as following:
```js
<Icon icon="outline--sun" class="tw-w-8 tw-h-8 tw-text-pink-40"></Icon>
<Icon icon="solid--sun" class="tw-text-theme-60"></Icon>
<Icon icon="outline--moon" style="width: 8px; height: 20px"></Icon>
<Icon icon="solid--moon"></Icon>
```
SVG Sprite, the heroicons.svg is a svg sprite, which means would need to load the whole sprite even only used one icon, if matters could try purge svg. 


### Components

- [x] Avatar
- [x] Card
- [x] Input
- [x] Radio
- [x] Select
- [x] Icon