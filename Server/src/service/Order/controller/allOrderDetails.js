// const {OrderModels} = require("../models/index");

// module.exports = async (req, res) => {
//   const query = req.query.id;
//   try {
//     const Orders = query
//       ? await OrderModels.find().sort({ _id: -1 }).limit(5)
//       : await OrderModels.find();
//       if(Orders){
//         res.status(200).send({
//           payload: Orders,
//           message: "all Orders list  ...",
//           responseCode: 200
//         })
//       }else{
//         res.status(400).send({
//           payload: Orders,
//           message: "no Orders list  ...",
//           responseCode: 400
//         })
//       }

//   } catch (err) {
//     res.status(401).send({
//       payload: {},
//       message: "some thing is wrong",
//       responseCode: 401
//     });
//   }
// }
// const { OrderModels } = require("../models/index");
// const { UserModal } = require('../../User/models/index');
// const mongoose = require('mongoose');

// module.exports = async (req, res) => {
//   const query = req.query.id;
//   try {
//     const Orders = query
//       ? await OrderModels.find().sort({ _id: -1 }).limit(5)
//       : await OrderModels.find();
//     if (Orders) {
//       console.log("Orders", Orders)
//       // Retrieve user names based on Orders.u  serId
//       const userIds = Orders.map(order => order.userId);
//       const uniqueUserIds = [...new Set(userIds)];
//       console.log(uniqueUserIds);

//       const users = await UserModal.find({ _id: { $in: uniqueUserIds } });
//       console.log("users", users)
//       // Map user names to the respective orders
//       const ordersWithUserNames = Orders.map(order => {
//         const user = users.find(user => user._id.toString() === order.userId.toString());
//         const userName = user ? user.name : 'Unknown';
//         return {
//           ...order.toObject(),
//           userName
//         };
//       });

//       res.status(200).send({
//         payload: ordersWithUserNames,
//         message: "All orders list with user names",
//         responseCode: 200
//       });
//       // res.status(200).send({
//       //   payload: Orders,
//       //   message: "all Orders list  ...",
//       //   responseCode: 200
//       // })
//     } else {
//       res.status(400).send({
//         payload: Orders,
//         message: "No Orders list",
//         responseCode: 400
//       });
//     }

//   } catch (err) {
//     res.status(401).send({
//       payload: {},
//       message: "Something went wrong",
//       err: err,
//       responseCode: 401
//     });
//   }
// };
const { OrderModels } = require("../models/index");
const { UserModal } = require('../../User/models/index');

module.exports = async (req, res) => {
  const query = req.query.id;

  try {
    const orders = query
      ? await OrderModels.find().sort({ _id: -1 }).limit(5)
      : await OrderModels.find();

    if (orders.length > 0) {
      // Extract unique user IDs from the orders
      const userIds = [...new Set(orders.map(order => order.userId))];
      // Fetch user details based on user IDs
      const users = await UserModal.find();
      const filteredUsers = users.filter(user => userIds.includes(user._id.toString()));
      const ordersWithUserNames = orders.map(order => {
        const user = filteredUsers.find(user => user._id.toString() === order.userId.toString());
        const userName = user ? user?.firstName : 'Unknown';
        return {
          ...order.toObject(),
          userName
        };
      });

      res.status(200).send({
        payload: ordersWithUserNames,
        message: "Orders list with user names",
        responseCode: 200
      });
    } else {
      res.status(400).send({
        payload: [],
        message: "No orders found",
        responseCode: 400
      });
    }
  } catch (error) {
    res.status(500).send({
      payload: [],
      message: "Something went wrong",
      responseCode: 500,
      error: error
    });
  }
};

