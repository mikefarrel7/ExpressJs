const pool = require('../config/db');
const queries = require("./queries");

const getTrack = (req,res) =>{
    pool.query(queries.getData)
    .then(result =>{
        //console.log('result',result);
        return res.status(200).json(result.rows);
    }).catch(e =>{
        console.log('error getTrack',e)
        return res.status(500).json({
            message:"Fail To Get The Data !",
        });
    });
}
const getTrackRecord = (req,res) =>{
    pool.query(queries.getDataTrackRecord)
    .then(result =>{
        //console.log('result',result);
        return res.status(200).json(result.rows);
    }).catch(e =>{
        console.log('error getTrack Record',e)
        return res.status(500).json({
            message:"Fail To Get The Data !",
        });
    });
}

const getTrackAllId = (req,res) =>{
    pool.query(queries.getDataIdTrack)
    .then(result =>{
        //console.log('result',result);
        return res.status(200).json(result.rows);
    }).catch(e =>{
        console.log('error getTrackAll',e)
        return res.status(500).json({
            message:"Fail To Get The Data All!",
        });
    });
}

const addTrack = (req,res) =>{
    const {lat,lon,heading,id_track} = req.body;
    pool.query(queries.insertData,[parseFloat(lat),parseFloat(lon),parseFloat(heading),parseInt(id_track)]).then((result)=>{
        return res.status(200).json({message: "Add Data Success !",
        });
    }).catch(e =>{
        console.log('error addTrack',e)
        return res.status(500).json({
            message:"Add Track Failed !",
        });
    });
}

const addTrackRecord = (req,res) =>{
    const {id_track,status_record,time_record} = req.body;
    console.log(req.body);
    pool.query(queries.insertDataRecord,[parseFloat(id_track),status_record,time_record]).then((result)=>{
        return res.status(200).json({message: "Add Data Record Success !",
        });
    }).catch(e =>{
        console.log('error addTrackRecord',status_record)
        return res.status(500).json({
            message:"Add Track Record Failed !",
        });
    });
}

const updateTrack = (req,res) =>{
    const {lat,lon,heading,id_track} = req.body;
    pool.query(queries.updateData,[parseFloat(lat),parseFloat(lon),parseFloat(heading),parseInt(id_track)]).then((result)=>{
        return res.status(200).json({message: "Update Data Success !",
        });
    }).catch(e =>{
        console.log('error updateTrack',e)
        return res.status(500).json({
            message:"Update Track Failed !",
        });
    });
}

const deleteTrack = (req,res) =>{
    const {id_track} = req.body;
    pool.query(queries.deleteData,[parseInt(id_track)]).then((result)=>{
        return res.status(200).json({message: "Delete Data Success !",
        });
    }).catch(e =>{
        console.log('error deleteTrack',e)
        return res.status(500).json({
            message:"Delete Data Failed !",
        });
    });
}

const maxTrack = (req,res) =>{
    pool.query(queries.maxData).then((result)=>{
        let max = result.rows[0].max
        return res.status(200).json({
            max:parseInt(max),
        });
    }).catch(e =>{
        console.log('error maxTrack',e)
        return res.status(500).json({
            message:"Failed maxTrack !",
        });
    });
}



module.exports ={
    getTrack,
    addTrack,
    updateTrack,
    deleteTrack,
    maxTrack,
    getTrackAllId,
    addTrackRecord,
    getTrackRecord,
};