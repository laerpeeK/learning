class Application extends EventEmitter {
    constructor() {
        super();
        this.proxy = false;
        this.middleware = [];
        this.subdomainOffset = 2;
        this.env = process.env.NODE_ENV || 'development'
        this.context = Object.create(context)
        this.request = Object.create(request)
    }
}