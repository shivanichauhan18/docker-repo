const ronin = require('ronin-server')
const mocks = require('ronin-mocks')
const database  = require( 'ronin-database' )

async function main() {
// fghghhh
    try {
    await database.connect("mongodb://172.17.0.1:27017/notes" )
    
    const server = ronin.server({
            port: process.env.SERVER_PORT
        })
        server.use( '/foo', (req, res) => {
            return res.json({ "foo": "bar" })
        })
        server.use( '/', mocks.server( server.Router()) )

    const result = await server.start()
        console.info( result )
    
    } catch( error ) {
        console.error( error )
    }
}
main()