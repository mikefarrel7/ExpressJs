const getData = "SELECT * FROM track t";
const getDataIdTrack = "SELECT t.id_track FROM track t GROUP BY id_track ORDER BY id_track asc";
const insertData = "INSERT INTO track (lat, lon, heading, id_track) values($1,$2,$3,$4)";
const updateData = "Update track set lat = $1, lon= $2, heading=$3 where id_track=$4";
const deleteData = "DELETE FROM track where id_track=$1";
const maxData = "SELECT max(t.id_track) as max from track t";
const insertDataRecord = "INSERT INTO record_track (id_track, status_record, time_record) values($1,$2,$3)";
const getDataTrackRecord = "SELECT * FROM record_track t";
module.exports = {
    getData,
    insertData,
    updateData,
    deleteData,
    maxData,
    getDataIdTrack,
    insertDataRecord,
    getDataTrackRecord,
}