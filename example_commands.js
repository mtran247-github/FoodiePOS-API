// GET on the 'burrito' endpoint to list the current menu
// curl -v -k http://localhost:3000/api/burrito -H 'Content-Type:application/json'

// POST on the 'orders' endpoint to post a new order

// single burrito order
// curl -X POST -d '{"orderItems":[{"burrito": {"name": "Chicken Burrito", "size": "regular"}, "quantity": 3}]}' -H 'Content-Type:application/json' http://localhost:3000/api/orders

// multiple burrito order
// curl -X POST -d '{"orderItems":[{"burrito": {"name": "Chicken Burrito", "size": "regular"}, "quantity": 3}, {"burrito": {"name": "Vegetarian Burrito", "size": "XL"}, "quantity": 30}]}' -H 'Content-Type:application/json' http://localhost:3000/api/orders

// GET on the 'orders' get order details for a specific order id. Note the order id in the api path
// curl -v -k http://localhost:3000/api/orders/1 -H 'Content-Type:application/json'

