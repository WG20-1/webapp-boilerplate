webapp-boilerplate
==================

# Introduction
This webapp boilerplate provides a starting point for any project complex enough to require a modular architecture.

It includes the following features:
- MV* architecture (backbonejs)
- AMD pattern (requirejs)
- Basic libs (jquery, handlebarsjs, underscorejs)
- External code management (bower)
- Automated build process (gruntjs)
- Automated code analysis (jshint)
- Unit testing (@todo)
- Javascript compilation (r.js)
- Javascript source map (r.js)
- CSS concatenation and minification (r.js)
- Images compression (@todo)


# 1. platform installation

## 1.1 mac os
- install brew 					`ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"`
- install git 					`brew install git`
- install nodejs				`brew install nodejs`

# 2. project setup 
- clone boilerplate repo		`git clone https://github.com/WG20-1/webapp-boilerplate.git`
- install node modules			`npm install`
- install javascript modules	`bower install`

# 3. build
- build app						`grunt`