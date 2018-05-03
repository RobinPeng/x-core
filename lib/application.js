const Koa = require('koa')
const Loader = require('x-loader')

class Application extends Koa {
    constructor(options) {
        super()

        this.loader = new Loader()

        this.config = this.loader.loadConfig()

        this.init()
    }

    init () {

    }

    run () {

    }

    use () {

    }
}

module.exports = Application
