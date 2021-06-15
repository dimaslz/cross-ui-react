module.exports = {
  "github": {
    "push": false
  },
	"npm": {
    "publish": false,
	},
	"hooks": {
    // "before:init": ["npm run lint", "npm test"],
    // "after:my-plugin:bump": "./bin/my-script.sh",
    "after:bump": "yarn build",
    "after:git:release": "echo After git push, before github release",
    "after:release": "echo Successfully released ${name} v${version} to ${repo.repository}."
  },
  "git": {
    "commitMessage": "chore: release v${version}",
    "requireCleanWorkingDir": false
  }
}