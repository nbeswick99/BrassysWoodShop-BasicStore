import Listing from '../models/listing.models.js';

const listingControllers = {
    createListing: async (req, res) => {
        try {
            const createListing = await Listing.create(req.body)
            res.json(createListing)
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    getAllListings: async (req, res) => {
        try{
            const allListings = await Listing.find();
            res.json(allListings);
        } catch(error) {
            console.log(error)
            res.status(400).json(error);
        }
    },
    getOneListing: async (req, res) => {
        try {
            const oneListing = await Listing.findById(req.params.id);
            res.json(oneListing)
        } catch(error) {
            console.log(error)
            res.status(400).json(error);
        }
    },
    updateListing: async (req, res) => {
        const options = {
            new: true,
            runValidators: true,
        };
        try{
            const updatedListing = await Listing.findByIdAndUpdate(req.params.id, req.body, options);
            res.json(updatedListing);
        } catch(error) {
            console.log(error)
            res.status(400).json(error);
        }
    },
    deleteListing: async (req, res) =>{
        try {
            const listingToDelete = await Listing.findByIdAndDelete(req.params.id);
            res.json(listingToDelete)
        } catch(error) {
            console.log(error)
            res.status(400).json(error);
        }
    }
}
export default listingControllers