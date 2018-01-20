module.exports = {
    getShelves: (req, res) => {
        const dbInstance = req.app.get('db');
        const {params} = req;

        dbInstance.get_shelves([params.id])
        .then(shelves => res.status(200).send(shelves))
        .catch(err => {
            console.log(err);
            res.status(500).send(console.log(err))
        })
    }
}