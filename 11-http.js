const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/')
    {
        res.end(`<h1>How are you kamkam?!?!</h1>`);
        return;
    }
    if(req.url === '/about')
    {
        res.end(`<h1>How dare you?!?! This is us?!?!</h1>`);
        return;
    }
    res.end(`<h1>You shouldnt be here!</h1>
    <p>We cannot find the page D:<</p>
    <a href="/">Back to home</a>
    `);
})
server.listen(5001)