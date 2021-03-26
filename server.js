const express = require('express');
const app=express();
const cors=require('cors');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// setup cors
// const client=['http://localhost:1323/api/data','http://127.0.1:1323/api/data']
// const corsOptions = {
//     origin: function (origin, callback) {
//       if (client.indexOf(origin) !== -1 || !origin) {
//         callback(null, true)
//       } else {
//         callback(new Error('Blocked by cors'))
//       }
//     }
//   }
//   app.use(cors(corsOptions))
// // setup socket.io
// const server=http.createServer(app);
// const io=socketIo(server,{
//     cors: client.map((origin) => ({ origin }))

// });
// io.on('connection', () => {
//     console.log('a user connected')
//   })

app.use(cors([
  {origin:'http://localhost:1323/api/profile_data'}
]))
app.get('/',(req,res)=>{
    res.send('Api is Work');
});

app.use('/api',require('./route/api/data'));


const port= process.env.PORT || 1323;

app.listen(port,()=>{
    console.log(`Server running to PORT ${port}`)
});
