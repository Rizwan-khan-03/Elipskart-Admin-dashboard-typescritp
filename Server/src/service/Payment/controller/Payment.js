const dotenv = require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_KEY);
const { v4: uuid } = require('uuid');
  module.exports = async (req, res) => {
    const { product, token } = req.body;
    const idempontencyKey = uuid();
  
    try {
      const customer = await stripe.customers.create({
        email: token?.email,
        source: token?.id
      });
  
      const charge = await stripe.charges.create({
        amount: parseInt(process.env.PROJECT_RENDER_USD,10) * 100,
        currency: process.env.PROJECT_RENDER_CURRENCY || "USD",
        customer: customer.id,
        receipt_email: token.email,
        description: `purchase of ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            country: token.card.address_country
          }
        }
      }, {
        idempotencyKey: idempontencyKey
      });
      
      res.status(200).send({
        success: true,
        charge: charge,
      });
    } catch (error) {
      res.status(500).json({error:error});
    }
  };
  
