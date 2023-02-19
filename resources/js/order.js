async function main() {
    try {
      // constants
      const EMPTY_STRINGIFIED_OBJECT = JSON.stringify([]);
      let isOrdersEmpty = false;
      const PARENT_ORDER_DIV = document.querySelector(".orders");
      const COLLECT_BTN = document.querySelectorAll(".collect");
      const DELETE_ORDER = document.querySelectorAll("#delete")
  
      /*
          If localstorage does not hold any orders, set a key "orders" with value of EMPTY_STRINGIFIED_OBJECT.
      */
      let orders = localStorage.getItem("orders");
      if (!orders) {
        localStorage.setItem("orders", EMPTY_STRINGIFIED_OBJECT);
      }
  
      /*
          Orders in localstorage are in string format. The code below parses them to
          object (array) in order to perform other operations on the data.
      */
      orders = JSON.parse(orders);
  
      // set isOrderEmpty to true if there are no orders
      if (orders.length === 0) {
        isOrdersEmpty = true;
      }
  
      // render orders in the orders page
      orders.map((item) => {
        const orderDiv = document.createElement("div");
        orderDiv.setAttribute("class", "order");
        PARENT_ORDER_DIV.append(orderDiv);
      });
  
  
      // collect garbage
      COLLECT_BTN.forEach((item) => {
          item.addEventListener("click", collectOrder);
      })
  
      function collectOrder() {
        let doCollect = confirm("Do you want to proceed to collect garbage ?");
        if (doCollect) {
          alert("Garbage collection procedure initiated.");
        } else {
          alert("Operation cancelled.");
        }
      }
  
      // delete order
      DELETE_ORDER.forEach((item) => {
          item.addEventListener("click", deleteOrder);
      })
  
      function deleteOrder(e) {
        let doCollect = confirm("Do you want to proceed to delete order ?");
        if (doCollect) {
          alert("Order has been removed");
        } else {
          alert("Operation cancelled.");
        }
      }
  
  
    } catch (error) {
      console.log(error);
    }
  }
  
  main();