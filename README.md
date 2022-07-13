# Base9 Templates
List of all supported apps for Base9.

For now, it only hosts simple apps, and more complicated apps are hosted in
separate repo. Apps not in this list:

- vscode



## How to add new template

1. Create a folder under templates/[app-name].
2. Write mustache file(s)
3. Write `config.yml`, which will be used to generate README.md. Follow
   `templates/alacritty` as example.
4. Use `scripts/generate_readme.sh` to generate README.md

TODO(CONTRIB): Add github action to auto generate readme.
