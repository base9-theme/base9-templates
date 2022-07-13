# Base9 Alacritty
Base9 theme for [Alacritty](https://github.com/alacritty/alacritty).

## Installation

### Linux
Make sure `~/.config/alacritty/alacritty.yml` has the following:
```yaml
import:
  - '~/.config/alacritty/themes/base9.yml'
```


```bash
curl https://raw.github.com/builder > base9-builder
chmod +x base9-builder

curl https://raw.github.com/alacritty/default.yml.mustache > base9.mustache

BASE9_PALATTE="282828-ebdbb2-83a598-8ec07c-fe8019-fabd2f-b8bb26-d3869b-fb4934"
DESTINATION="~/.config/alacritty/themes/base9.yml"
base9-builder render $BASE9_PALETTE base9.mustache > $DESTINATION
```

## Screenshots
282828-ebdbb2-83a598-8ec07c-fe8019-fabd2f-b8bb26-d3869b-fb4934

![282828-ebdbb2-83a598-8ec07c-fe8019-fabd2f-b8bb26-d3869b-fb4934](./screenshots/Screenshot_282828-ebdbb2-83a598-8ec07c-fe8019-fabd2f-b8bb26-d3869b-fb4934.png)


