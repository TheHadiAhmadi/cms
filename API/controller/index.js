async function getRespond(req, res){
    res.status(200).json({message: "welcome to cms"})
}

async function postRespond(req, res){
    res.status(301).json({message: "welcome to cms"})
}
module.exports = {getRespond, postRespond}