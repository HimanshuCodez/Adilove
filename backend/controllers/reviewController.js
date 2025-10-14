import reviewModel from "../models/reviewModel.js";
import productModel from "../models/productModel.js";

// Add review
const addReview = async (req, res) => {
    try {
        const { productId, rating, comment } = req.body;
        const userId = req.body.userId; // userId is set by auth middleware in req.body

        if (!userId) {
            return res.json({ success: false, message: "Not authorized, please login" });
        }

        const newReview = new reviewModel({
            productId,
            userId,
            rating,
            comment,
        });

        await newReview.save();
        res.json({ success: true, message: "Review Added" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// List reviews for a product
const listReviews = async (req, res) => {
    try {
        const { productId } = req.params;
        const reviews = await reviewModel.find({ productId }).populate('userId', 'name'); // Populate user name
        res.json({ success: true, reviews });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { addReview, listReviews };