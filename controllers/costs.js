const members = require('../mocks/members.json');

exports.calculateCosts = async (req, res) => {
    let { rentCost } = req.body;
    
    members.forEach((member) => {
        if(member.principal){
            rentCost += 300
        }else{
            rentCost += 150;
        }
    });

    res.status(200).json({
        totalCost: rentCost
    });
}