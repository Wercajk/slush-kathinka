# slush-kathinka [![Build Status](https://secure.travis-ci.org/Wercajk/slush-kathinka.png?branch=master)](https://travis-ci.org/Wercajk/slush-kathinka) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-kathinka.png?x=5dfg6s7yvdf78s)](http://badges.enytc.com/for/npm/slush-kathinka)

> A slush generator for [KaThinka](https://github.com/Wercajk/KaThinka) API framework


#### Install Slush to bootstrap app

```bash
$ npm -g install slush slush-kathinka
```

#### Install nvm to install 0.11 nodejs version

```bash
$ curl https://raw.githubusercontent.com/creationix/nvm/v0.12.1/install.sh | bash
```

#### Install MongoDB as database backend on OS X using [Homebrew](http://brew.sh/)


```bash
brew install mongodb
ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist
```


#### Bootstrap application

```bash
$ mkdir newAwesomeApp
$ cd newAwesomeApp
$ slush kathinka
```

#### Generate first resource

```bash
$ slush kathinka:resource
```

#### Start server

```bash
$ npm start
```

#### Check if app is up and running

```bash
$ curl http://localhost:54321/
{"status":"ok","version":"1"}
```


## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/klei/slush).

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/Wercajk/slush-kathinka/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/Wercajk/slush-kathinka/issues).

## License

The MIT License

Copyright (c) 2014, Mario Vejlupek

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
