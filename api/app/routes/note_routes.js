 var ObjectID = require('mongodb').ObjectID

module.exports = function(app, db) {

    app.get("/buscarCursos",  async (req, res) => {    
        db.collection('Cursos').distinct('curso', function(err, docs) {
            res.send(docs);
          });
        
    });    

    app.post("/buscarURLCursos",  async (req, res) => {    
        db.collection('Cursos').find({ curso: { $in: req.body.curso } }).sort({ curso: 1 }).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
          });
    });    

    app.post("/eliminarCurso",  async (req, res) => {   
        db.collection('Cursos').deleteMany({ curso: req.body.curso }, function(err, obj) {
            if (err) throw err;
            res.send("ok");
          }); 
    });    

    app.post("/eliminarURL",  async (req, res) => {   
        db.collection('Cursos').deleteOne({ curso: req.body.curso , linkyt: req.body.linkyt}, function(err, obj) {
            if (err) throw err;
            res.send("ok");
          }); 
    });   
    
    app.post("/updateURL",  async (req, res) => {   
        db.collection('Cursos').updateOne({ curso : req.body.curso, linkyt: req.body.linkyt },{ $set: { linkyt : req.body.newlinkyt } },{ upsert: true }, function(err, obj) {
            if (err) throw err;
            res.send("ok");
          }); 
    });    

    app.post("/CrearCurso",  async (req, res) => {  
        if(await db.collection('Cursos').find({ curso: req.body.curso }).count()==0){
            db.collection('Cursos').insertOne({ curso : req.body.curso, linkyt: "" }, function(err, obj) {
                if (err) throw err;                
                res.send({ 'error': 'ok' });
              }); 
        }else        
        res.send({ 'error': 'An error has occured' });
        

        
    });   


    
}