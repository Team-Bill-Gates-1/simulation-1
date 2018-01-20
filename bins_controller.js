module.exports = {
    getBin: (req, res) => {
        const dbInstance = req.app.get('db');
        const {params} = req;

        //Split the id into shelf id and bin id
        let id = params.id;
        let shelf_ID = id.charAt(0);
        let bin_ID = id.charAt(1);

        dbInstance.read_bin([shelf_ID, bin_ID])
        .then( bin => res.status(200).send(bin))
        .catch( () => res.status(500).send());
    },

    updateBin: (req, res) => {
        const dbInstance = req.app.get('db');
        const {product_name, product_price} = req.body;
        const {params} = req;

        //Split the id into shelf id and bin id
        let id = params.id;
        let shelf_ID = id.charAt(0);
        let bin_ID = id.charAt(1);

<<<<<<< HEAD:bins_controller.js
        
        dbInstance.update_bin([shelf_ID, bin_ID, product_name, product_price])
=======
        //add if statement to make the endpoint only accessible if there is a bin object
        dbInstance.update_bin([shelf_ID, bin_ID, ])
>>>>>>> master:server/controllers/bins_controller.js
        .then( (inventory) => {if(inventory.length > 0){res.status(200).send()}})
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
    const {product_name, product_price,} = req.body;
    const {params} = req;

    //Split the id into shelf id and bin id
    let id = params.id;
        let shelf_ID = id.charAt(0);
        let bin_ID = id.charAt(1);

    //add if statement to only make endpoint accessible if there is not a bin object already
    //id $1 name $2 price $3
<<<<<<< HEAD:bins_controller.js
    dbInstance.create_bin([shelf_ID, bin_ID, product_name, product_price])
    .then( (inventory) => {if(inventory.length == 0){res.status(200).send()}})
    .catch( () => res.status(500).send())
=======
    dbInstance.create_bin([shelf_ID, bin_ID, name, price])
    .then( (inventory) => {if(inventory == 0){res.status(200).send()}})
    .catch( () => res.status(500).send());
>>>>>>> master:server/controllers/bins_controller.js
}
}