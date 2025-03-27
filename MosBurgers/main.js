const usernameS = "admin";
const passwordS = "admin123";

let items = {
  Burgers: [
    {
      itemCode: "B1001",
      itemName: "Classic Burger(Large)",
      description: "Tasty Burger",
      price: "750.00",
      discount: "0",
      expDate: "03/27/2025",
      image: "burger.png",
    },
    {
      itemCode: "B1001",
      itemName: "Classic Burger(Large)",
      description: "Tasty Burger",
      price: "750.00",
      discount: "0",
      expDate: "03/27/2025",
      image: "burger.png",
    },
  ],
  Submarines: [
    {
      itemCode: "B1001",
      itemName: "Crispy Chicken Submarine (Large) ",
      description: "Tasty Submarine",
      price: "2000.00",
      discount: "0",
      expDate: "03/27/2025",
      image: "Submarine.png",
    },
  ],
  Fries: [
    {
      itemCode: "B1001",
      itemName: "Steak Fries (Large) ",
      description: "Tasty Submarine",
      price: "1200.00",
      discount: "0",
      expDate: "03/27/2025",
      image: "SteakFries .png",
    },
  ],
  Pasta: [
    {
      itemCode: "B1001",
      itemName: "Chicken n Cheese Pasta ",
      description: "Tasty Submarine",
      price: "1200.00",
      discount: "0",
      expDate: "03/27/2025",
      image: "Chicken_n_CheesePasta.png",
    },
  ],
  Chicken: [
    {
      itemCode: "B1040",
      itemName: "Fried Chicken (Small)",
      description: "Tasty Fried Chicken",
      price: "1200.00",
      discount: "0",
      expDate: "03/27/2025",
      image: "FriedChicken.png",
    },
    {
      itemCode: "B1041",
      itemName: "Fried Chicken (Regular)",
      description: "Fried Chicken (Regular) ",
      price: "2300.00",
      discount: "10",
      expDate: "03/27/2025",
      image: "HotWings.png",
    },
    {
      itemCode: "B1041",
      itemName: "Fried Chicken (Large) ",
      description: "Fried Chicken (Large) ",
      price: "2300.00",
      discount: "10",
      expDate: "03/27/2025",
      image: "FriedChicken.png",
    },
    {
      itemCode: "B1041",
      itemName: "Hot Wings (Large)",
      description: "Devilled Chicken",
      price: "2400.00",
      discount: "0",
      expDate: "03/27/2025",
      image: "HotWings.png",
    },
    {
      itemCode: "B1042",
      itemName: "Devilled Chicken (Large) ",
      description: "Devilled Chicken",
      price: "900.00",
      discount: "0",
      expDate: "03/27/2025",
      image: "BBQChicken.png",
    },
    {
      itemCode: "B1043",
      itemName: "BBQ Chicken (Regular)",
      description: "BBQChicken",
      price: "1200.00",
      discount: "0",
      expDate: "03/27/2025",
      image: "BBQChicken.png",
    },
  ],
  Beverages: [
    {
      itemCode: "B1044",
      itemName: " Pepsi (330ml) ",
      description: " Pepsi",
      price: "990.00",
      discount: "5",
      expDate: "03/27/2025",
      image: "Pepsi.png",
    },
    {
      itemCode: "B1045",
      itemName: "Coca-Cola",
      description: "Coca-Cola",
      price: "1230.00",
      discount: "0",
      expDate: "03/27/2025",
      image: "Coca-Cola (330ml).png",
    },
    {
      itemCode: "B1046",
      itemName: " Sprite (330ml)",
      description: " Sprite",
      price: "1500.00",
      discount: "3",
      expDate: "03/27/2025",
      image: "Sprite.png",
    },
    {
      itemCode: "B1047",
      itemName: " Mirinda (330ml)",
      description: "Mirinda",
      price: "850.00",
      discount: "7",
      expDate: "03/27/2025",
      image: "Mirinda.png",
    },
  ],
};
let itemsTest = {
  Burgers: [
    {
      itemCode: "B1001",
      itemName: "Classic Burger(Large)",
      description: "Tasty Burger",
      price: "750.00",
      discount: "0",
      expDate: "03/27/2025",
      image: "burger.png",
    },
    {
      itemCode: "B1001",
      itemName: "Classic Burger(Large)",
      description: "Tasty Burger",
      price: "750.00",
      discount: "0",
      expDate: "03/27/2025",
      image: "burger.png",
    },
  ],
  Submarines: [
    {
      itemCode: "B1001",
      itemName: "Crispy Chicken Submarine (Large) ",
      description: "Tasty Submarine",
      price: "2000.00",
      discount: "0",
      expDate: "03/27/2025",
      image: "Submarine.png",
    },
  ],
  Fries: [
    {
      itemCode: "B1001",
      itemName: "Steak Fries (Large) ",
      description: "Tasty Submarine",
      price: "1200.00",
      discount: "0",
      expDate: "03/27/2025",
      image: "SteakFries .png",
    },
  ],
  Pasta: [
    {
      itemCode: "B1001",
      itemName: "Chicken n Cheese Pasta ",
      description: "Tasty Submarine",
      price: "1200.00",
      discount: "0",
      expDate: "03/27/2025",
      image: "Chicken_n_CheesePasta.png",
    },
  ],
  Chicken: [
    {
      itemCode: "B1040",
      itemName: "Fried Chicken (Small)",
      description: "Tasty Fried Chicken",
      price: "1200.00",
      discount: "0",
      expDate: "03/27/2025",
      image: "FriedChicken.png",
    },
    {
      itemCode: "B1041",
      itemName: "Fried Chicken (Regular)",
      description: "Fried Chicken (Regular) ",
      price: "2300.00",
      discount: "10",
      expDate: "03/27/2025",
      image: "HotWings.png",
    },
    {
      itemCode: "B1041",
      itemName: "Fried Chicken (Large) ",
      description: "Fried Chicken (Large) ",
      price: "2300.00",
      discount: "10",
      expDate: "03/27/2025",
      image: "FriedChicken.png",
    },
    {
      itemCode: "B1041",
      itemName: "Hot Wings (Large)",
      description: "Devilled Chicken",
      price: "2400.00",
      discount: "0",
      expDate: "03/27/2025",
      image: "HotWings.png",
    },
    {
      itemCode: "B1042",
      itemName: "Devilled Chicken (Large) ",
      description: "Devilled Chicken",
      price: "900.00",
      discount: "0",
      expDate: "03/27/2025",
      image: "BBQChicken.png",
    },
    {
      itemCode: "B1043",
      itemName: "BBQ Chicken (Regular)",
      description: "BBQChicken",
      price: "1200.00",
      discount: "0",
      expDate: "03/27/2025",
      image: "BBQChicken.png",
    },
  ],
  Beverages: [
    {
      itemCode: "B1044",
      itemName: " Pepsi (330ml) ",
      description: " Pepsi",
      price: "990.00",
      discount: "5",
      expDate: "03/27/2025",
      image: "Pepsi.png",
    },
    {
      itemCode: "B1045",
      itemName: "Coca-Cola",
      description: "Coca-Cola",
      price: "1230.00",
      discount: "0",
      expDate: "03/27/2025",
      image: "Coca-Cola (330ml).png",
    },
    {
      itemCode: "B1046",
      itemName: " Sprite (330ml)",
      description: " Sprite",
      price: "1500.00",
      discount: "3",
      expDate: "03/27/2025",
      image: "Sprite.png",
    },
    {
      itemCode: "B1047",
      itemName: " Mirinda (330ml)",
      description: "Mirinda",
      price: "850.00",
      discount: "7",
      expDate: "03/27/2025",
      image: "Mirinda.png",
    },
  ],
};

function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if ((username != "") & (password != "")) {
    if ((username === usernameS) & (password === passwordS)) {
      console.log(username, password);
      window.location.href = "home.html";
      username, (password = "");
    } else {
      alert("Invalid username or password!");
    }
    // localStorage.setItem(username, password);
  } else {
    alert("Please Fill Both Fields!");
  }
}

function get() {
  console.log(localStorage.getItem(usernameS));
  console.log(localStorage.getItem(passwordS));
}

get();

//load cards

function fetchItems() {
  let select = document.getElementById("dropDownMenu").value;

  for (let item in items) {
    console.log(item, "lp");
    const cardRow = document.querySelector(".cardRow");
    if (select === item) {
      for (let obj in item) {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        const row = document.createElement("div");
        row.setAttribute("class", "row");

        const img = document.createElement("img");
        img.setAttribute("id", "cardImg");
        img.setAttribute("src", `${items[item][obj].image}`);
        img.setAttribute("alt", `${items[item][obj].itemName}.png`);
        //console.log(items[item][obj], "po");
        row.appendChild(img);
        const desc = document.createElement("div");

        desc.innerHTML = `
        <p>${items[item][obj].description}</p>
        `;
        row.appendChild(desc);
        card.appendChild(row);
        const midR = document.createElement("div");
        midR.setAttribute("class", "midR");
        midR.innerHTML = `
             
              <p>Exp Date:${items[item][obj].expDate}</p>
            
        `;
        card.appendChild(midR);
        const bRow = document.createElement("div");
        bRow.setAttribute("class", "bRow");
        bRow.innerHTML;
        const prcD = document.createElement("div");
        prcD.innerHTML = `
        <p id="cardPrc">Rs. ${items[item][obj].price}</p>
                <span id="cardDisc">Discount: ${items[item][obj].discount}%</span>
        `;
        bRow.innerHTML = `
        <button>Add To Cart</button>

        `;
        bRow.appendChild(prcD);
        card.appendChild(bRow);
        document.querySelector(".cardRow").appendChild(card);
      }
    }
    document.querySelector(".items").appendChild(cardRow);
  }
}
fetchItems();

// load menu
const fetchTable = () => {
  const tableBody = document.querySelector(".itemsTable tbody");
  tableBody.innerHTML = "";

  for (let item in items) {
    for (let obj in items[item]) {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td class="itmCode">${items[item][obj].itemCode}</td>
        <td class="itmName">${items[item][obj].itemName}</td>
        <td class="prc">${items[item][obj].price}</td>
        <td class="expD">${items[item][obj].expDate}</td>
        <td class="disc">${items[item][obj].discount}</td>
        <td class="descrp">${items[item][obj].description}</td>
        <td class="action">
            <button id="btnEdit" onclick="editItem('${item}',${obj})">Edit</button>
            <button id="btnDelete" onclick="deleteItem('${item}',${obj},'${items[item][obj].itemCode}')">Delete</button>
            </td>
    `;
      tableBody.appendChild(row);
      console.log(item, "ko");

      //    <button id="btnEdit" onclick="editItem(${items[item][obj]})">Edit</button>
      //<button id="btnDelete" onclick="deleteItem(${items[item]},${items[item][obj]})">Delete</button>
    }
  }
};

fetchTable();
function displayAddForm() {
  document.getElementById("addFormItem").style.display = "block";
}
function addItem() {
  const f = document.getElementById("addFormItem");
  console.log(f);

  let selcDrop = document.getElementById("addFormDropDownMenu").value;
  let itemCode = document.getElementById("itemCode").value;
  let itemName = document.getElementById("itemName").value;
  let description = document.getElementById("itmDescription").value;
  let price = document.getElementById("itmPrice").value;
  let discount = document.getElementById("itmDiscount").value;
  let expDate = document.getElementById("itmExpDate");
  let imgLink = document.getElementById("itmImg").files[0];

  let addItem = {
    itemCode: itemCode,
    itemName: itemName,
    description: description,
    price: price,
    discount: discount,
    expDate: expDate,
    image: URL.createObjectURL(imgLink),
  };
  for (let item in items) {
    if (
      selcDrop === item &&
      itemCode != null &&
      (itemName != null) &
        (description != null) &
        (price != null) &
        (discount != null) &&
      expDate != null &&
      imgLink != null
    ) {
      console.log(addItem);
      items[item].push(addItem);
      console.log("Hiiii");

      fetchTable();
      fetchItems();
    }
  }
}

function deleteItem(category, index, code) {
  console.log(category, index, code);

  if (items[category][index].itemCode === code) {
    let del = items[category].splice(index);
    alert(del);
  }
  fetchTable();
}

function editItem(itm, obj) {
  console.log("koo", itm, obj);
}

function closeAddItemForm() {
  document.querySelector(".addForm").style.display = "none";
}
