webapp-boilerplate
==================

# Introduction
This webapp boilerplate provides a starting point for any project complex enough to require a modular architecture.

It includes the following features:
- MV* architecture (backbonejs)
- AMD pattern (requirejs)
- Basic libs (jquery, handlebars, underscorejs)
- External code management (bowerjs)
- Automatic code analysis (@todo)
- Unit testing (@todo)
- Build process (r.js)
	- concats and minifies javascript files
	- concats and minifies css files
	- compress images (@todo)


# 1. platform installation

## 2.1 mac os
- install brew 					`ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"`
- install git 					`brew install git`
- install nodejs				`brew install nodejs`

# 2. project setup 
- clone boilerplate repo		`git clone https://github.com/amessinger/webapp-boilerplate.git`
- install node modules			`npm install`
- install javascript modules	`bower install`

# 3. build
- build app						`./node_modules/requirejs/bin/r.js -o app/build/app.build.js`