# Template Development Guide
This guide explains how to make a Base9 for you favorite app from both design
and development stand point.

In order to be accepted, you should follow this guide as close as possible.

1. Create a folder under templates/[app-name].
2. Write mustache file(s) following style guide.
3. Write `config.yml`, which will be used to generate README.md. Follow
   `templates/alacritty` as example.
4. Use `scripts/generate_readme.sh` to generate README.md

TODO(CONTRIB): Add github action to auto generate readme.

## Style Guide

The guide will assume it's a dark theme.

Try to follow the following design guide because it will make the theme more
consistent with other Base9 themes.

If following this guide makes the theme look worse in certain situations,
submit a PR to change this guide.

If this guide does not describe how you should write certain parts of the theme,
use your own judgement or reference existing themes.

Here is a list of well supported themes:
- vscode

### What color to pick

[This file](https://github.com/base9-theme/base9-builder/blob/main/src/default_config.yml)
has the list of variables available to use in mustache.

TODO(CONTRIB): explain how this file works.

You should choose a variable that closest to the purpose of where you use
it.

Generally, most of interactable UI element should be `primary` and most other
interactable UI elements should be `secondary`.
Most non-interactable UI elements should be `foreground`.

Avoid using absolute and relative colors in the same place, since there might be
color collisions.

### What shade to pick

Other than the background, each color has 6 shades to choose from. They are
`p10`, `p25`, `p50`, `p75`, `p100`, `p125` from darkest to brightest. The names
roughly corresponds to the percentage of brightness compared to the original
color.

`p125` should be avoided since there might not be a color brighter than the
original color.

Here is how to pick them in different scenarios:

#### Foreground color of text

Use `p100` by default.

Use `p75` for a darker shade, such as:
- less important things
- comments
- disabled

Use `p50` for even less important things that are ok not to be readable.

To highlight a text, when methods like background highlight, border, bold
font are not possible, use `p125` as last resort.
#### Background highlight

Use `p25` for things requiring some user attention.

For elements requiring high attention, use inverted.

Use `p10` for to indicate a difference from regular background but does not need
user attention.

#### Border

Borders defined as UI elements that are much narrower than text height and
is only a few pixels wide.


Use `p50` by default.

Use `p75` for things requiring user attension. There should be only one UI
element with `p75` border in most cases.

Use `p25` for less important things, such as:
- character limit guide
- tree view vertical guide

#### Inverted

Inverted element is one with bright foreground and dark background.

Places where inverted should be used:
- buttons
- statusbar
- highlighting section of text where regular background highlight is
not strong enough or not ideal.

Use `p75` as background by default. `p100` as even brighter variant.

Use `background` as the text color.

#### Scroll bar

Scroll bar can be think of a special case for inverted element.

Use `p25` by default.

Use `p50` as brighter variant.

#### Selection

Use `selection.p25` as background by default.

However, if the theme is for something that can select on top of some other
highlight, use inverted style.

For example, terminal selection should use inverted style, since some terminal
app already has some highlights. And terminal selection could be selecting the
highlighted text. TODO(CONTRIB): reword this.

### How to deal with terminal apps

#### differentiate UI sections

Sometimes we need to differentiate UI sections,
but border is not possible/ideal. In that case, use either inverted element
or `p25` as background.

#### Limitted to ANSI 16

Use `ansi.*` only.

TODO support `primary`, `secondary`, and aboslute color aliases.

#### Limitted to ANSI 256

base9 does not support ANSI 256 and will not support it in the near future.

