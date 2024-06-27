import {Router} from 'express';
import listingControllers from '../controllers/listings.controllers.js';

const router = Router();
const {createListing, getAllListings, getOneListing, updateListing, deleteListing} = listingControllers

router.route("/listings")
    .get(getAllListings)
    .post(createListing)

router.route("/listings/:id")
    .get(getOneListing)
    .patch(updateListing)
    .delete(deleteListing)

export default router