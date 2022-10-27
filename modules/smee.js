const SmeeClient = require('smee-client')
console.log('Hello from smee-client');
exports.start = function() {
    const smee = new SmeeClient({
        source: 'https://smee.io/J4LAxDcMO9cB8o5',
        target: 'http://localhost:3000/events',
        logger: console
      })
    const events = smee.start()

    // Stop forwarding events
    events.close()
}
