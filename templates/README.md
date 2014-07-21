<%= name %>
=================

Backend server for awesome application

### Install Database

```bash
brew install mongodb
ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist
```

### Bootstrap Application

```bash
bin/test.sh
```

### Start Server

```bash
npm -g install gulp
gulp
```

### Test Server

We are running dredd under nodejs 0.10 because [Protagonist](https://github.com/apiaryio/protagonist) is not compatible with nodejs 0.11, see [apiaryio/protagonist#16](https://github.com/apiaryio/protagonist/issues/16).

```bash
bin/test.sh
```
