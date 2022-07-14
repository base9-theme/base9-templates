# Base9 Wezterm
Base9 theme for [WezTerm](https://wezfurlong.org/wezterm).

## Installation

### Linux
Make sure wezterm has color_scheme set to `Base9`:
```lua
return {
  -- ...
  color_scheme: 'Base9',
  -- ...
}
```


Set your Base9 palette code to shell:
```bash
BASE9_PALETTE="282828-ebdbb2-83a598-8ec07c-fe8019-fabd2f-b8bb26-d3869b-fb4934"
```

Generate theme and copy to WezTerm's config:
```bash
curl -L https://github.com/base9-theme/base9-builder/releases/download/0.1/base9-builder --output base9-builder
chmod +x base9-builder

curl -L \
https://raw.githubusercontent.com/base9-theme/base9-templates/main/templates/wezterm/default.toml.mustache \
--output base9.mustache

DESTINATION=~/.config/wezterm/colors/Base9.toml
./base9-builder render $BASE9_PALETTE base9.mustache $DESTINATION
```

Clean up:
```bash
rm base9-builder
rm base9.mustache
```


