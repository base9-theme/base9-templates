const mustache = require('mustache');
const yaml = require('js-yaml');
const _ = require('lodash');
const fs = require('fs');

function readFile(path) {
    return fs.readFileSync(path, {encoding:'utf8', flag:'r'});
}
const TEMPLATES = "templates";
const template = readFile("scripts/README.md.mustache");

const configs = [];
const root_data = {
    tags: [
        {name: "Terminals", key: "terminal", list: [] },
        {name: "Code Editors", key: "editor", list: [] },
        {name: "Graphical UI", key: "gui", list: [] },
        {name: "Libraries", key: "library", list: [] },
    ]
}

for(let app of fs.readdirSync("templates")) {
    const config = yaml.load(readFile(TEMPLATES + "/" + app + "/config.yml"));
    config.app.key = app;
    let tag_line = root_data.tags.find(x => x.key === config.type);
    tag_line.list.push(config);
    const readme = mustache.render(template, config);
    if(readme.length > 1) {
        fs.writeFileSync(TEMPLATES + "/" + app + "/README.md", readme);
    }
}

_.forEach(root_data.tags, tag_line => {
    _.sortBy(tag_line.list, a => a.app.name );
});

fs.writeFileSync("README.md", mustache.render(readFile("scripts/ROOT_README.md.mustache"), root_data));
