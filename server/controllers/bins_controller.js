module.exports = {
    getBin: (req, res) => {
        const dbInstance = req.app.get('db');
        const {params} = req;

        //Split the id into shelf id and bin id
        let id = params.id;
        let shelf_ID = id.charAt(0);
        let bin_ID = id.charAt(1);

        dbInstance.get_bin([shelf_ID, bin_ID])
        .then( bin => res.status(200).send(bin))
        .catch( () => res.status(500).send());
    },

    updateBin: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, price} = req.body;
        const {params} = req;

        //Split the id into shelf id and bin id
        let id = params.id;
        let shelf_ID = id.charAt(0);
        let bin_ID = id.charAt(1);

        
        dbInstance.update_bin([shelf_ID, bin_ID, ])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send());
    },

    deleteBin: (req, res) => {
        const dbInstance = req.app.get('db');

        const {params} = req;

    //Split the id into shelf id and bin id
        let id = params.id;
        let shelf_ID = id.charAt(0);
        let bin_ID = id.charAt(1);

        dbInstance.delete_bin([shelf_ID, bin_ID])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send());
},

createBin: (req, res) => {
    const dbInstance = req.app.get('db');
    const {name, price,} = req.body;
    const {params} = req;

    //Split the id into shelf id and bin id
    let id = params.id;
        let shelf_ID = id.charAt(0);
        let bin_ID = id.charAt(1);

    //id $1 name $2 price $3
    dbInstance.create_bin([shelf_ID, bin_ID, name, price])
    .then( () => res.status(200).send())
    .catch( () => res.status(500).send());
}
}



//To do
//Figure out how to manage endpoint accessibility
//