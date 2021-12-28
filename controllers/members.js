const members = require('../mocks/members.json');

exports.getAllMembers = async (req, res) => {
    setTimeout(() => {
        res.status(200).json(members);
    },1500);
}

exports.getMemberById = async (req, res) => {
    setTimeout(() => {

        console.log(req.params.memberId, typeof req.params.memberId);

        const selectedMember = members.find((member) => {
            return member.id == req.params.memberId
        });

        if(!selectedMember){
            res.status(400).json({error: "Member not found"});
        }

        res.status(200).json(selectedMember);

    },1500);
}