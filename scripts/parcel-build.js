const fs = require("fs");
const { execSync } = require("child_process");
const { MultiSelect } = require("enquirer");

const pkg = require("../package.json");

const targets = [];
Object.keys(pkg.targets).forEach((k) => {
  const item = pkg.targets[k];

  if (k.indexOf("dev") < 0 && item.source) {
    targets.push({ name: k, value: k });
  } else {
    console.log("filter target: %s", k);
  }
});

// console.log(targets);

const prompt = new MultiSelect({
  name: "value",
  message: "Choose(support multipe items)",
  choices: [{ name: "All", value: "all" }].concat(targets),
  multiple: true,
});

prompt
  .run()
  .then((result) => {
    let choices = [];
    if (result.indexOf("All") > -1) {
      choices = targets.map((i) => i.value);
    } else {
      choices = result.filter((i) => i !== "All");
    }
    console.log("choices ", choices);
    if (choices.length > 0) {
      const targetsBuild = choices
        .map((target) => `\"yarn parcel build --target ${target}\"`)
        .join(" ");
      const buildCommand = `yarn concurrently ${targetsBuild}`;
      const start = Date.now();
      console.log("Start build %s", buildCommand);
      execSync(buildCommand, {
        stdio: "inherit",
      });
      console.log("Finish build %sS", (Date.now() - start) / 1000);
    } else {
      console.log("You should choose one of list");
    }
  })
  .catch(console.error);
