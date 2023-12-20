const express = require('express');
//let axios = require('axios');
//var app = express();
const axios = require('axios')
const app = express();


app.use(express.json());

app.get('/', function(req, res) {
  return res.send('Hello World!');
});

app.post('/', function(req, res, next) {
    getResults(req, res, next)
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
 
});

async function getResults(req, res, next)
{
  console.log("req.body:");
  console.log(req.body);
  const d = req.body.developers;
  console.log(`Developers----> ${d}`);

  res = await axios.get(`https://api.github.com/users/${d}`);
  console.log("res.data:");
  console.log(res.data);
  try {
    let results = req.body.developers.map( (d, res) => {
      console.log("----->res----->")
      console.log(res)

      return res;
    });
  } catch(err) {
    next(err);
  }
}



app.listen(3000);
