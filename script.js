let sales_id_number = document.querySelector('#sales-id-number');
let password = document.querySelector('#password');
let loginWrapper = document.querySelector('.login-wrapper');
let body = document.querySelector('body');
let sidebar = document.querySelector('.sidebar');
let dashboardBTN = document.querySelector('#dashboard-btn');
let foodBTN = document.querySelector('#food-btn');
let pageWrapper = document.querySelector('.page-wrapper');
let categories = document.querySelector('.categories');
let category = document.getElementsByClassName('category');
// let coldDrinksCat = document.querySelector('#cold-drinks-cat');
let burgerCat = document.querySelector('#burger-cat');
let burgers = document.querySelector('.burgers');
let hamburger = document.querySelector('#hamburger');
let beefBurger = document.querySelector('#beef-burger');
let ordersT = document.querySelector('.orders');
let insertable = document.querySelector('#insertable-section');
let orders = [];
let hamburgerCounter = 1;
let beefBurgerCounter = 1;
let total = 0;
let totalH = document.querySelector('#total');
let checkCredits = () => {
    if (sales_id_number.value == '1234' && password.value == '5678') {
        loginWrapper.classList.add('d-none');
        body.classList.add('d-block');
        pageWrapper.classList.add('d-flex');
    } else {
        alert('The entered credentials are wrong.')
    }
}

foodBTN.onclick = () => {
    foodBTN.classList.add('active');
    dashboardBTN.classList.remove('active');
    categories.classList.remove('d-none');
    categories.classList.add('d-block');
    burgers.classList.add('d-none');

}

dashboardBTN.onclick = () => {
    burgerCat.classList.remove('active');
    // coldDrinksCat.classList.remove('active');
    dashboardBTN.classList.add('active');
    foodBTN.classList.remove('active');
    categories.classList.remove('d-block');
    categories.classList.add('d-none');
    burgers.classList.add('d-none');
    ordersT.classList.add('d-none');
}

// coldDrinksCat.onclick = () => {
//     burgerCat.classList.remove('active');
//     coldDrinksCat.classList.add('active');
//     burgers.classList.add('d-none');
// }

burgerCat.onclick = () => {
    // coldDrinksCat.classList.remove('active');
    burgerCat.classList.add('active');
    categories.classList.add('d-none');
    burgers.classList.remove('d-none');
    burgers.classList.add('d-block');

}

hamburger.onclick = () => {
    hamburger.classList.add('active');
    let obj = {
        name: 'Hamburger',
        price: 6
    }
    orders.push(obj);
    console.log(orders);
    let hamburgerRow = document.querySelector('#hamburgerRow');
    if (!hamburgerRow) {
        total += obj.price * hamburgerCounter;
        insertable.innerHTML += `<tr id="hamburgerRow">
            <td>${obj.name}</td>
            <td id="hamburgerCounter">${hamburgerCounter}</td>
            <td>$${obj.price}</td>
            <td id="hamburgerTotal">$${obj.price}</td>
            <td><button class="btn btn-danger delete-hamburger-btn">Delete</button></td>
        </tr>`;
    } else {
        document.querySelector('#hamburgerCounter').innerHTML = hamburgerCounter;
        document.querySelector('#hamburgerTotal').innerHTML = `$${obj.price * hamburgerCounter}`;
        total += obj.price;
    }
    totalH.innerHTML = `$${total}`;
    hamburgerCounter++;
    ordersT.classList.remove('d-none');
    ordersT.classList.add('d-block');
}

beefBurger.onclick = () => {
    beefBurger.classList.add('active');
    let obj = {
        name: 'Beef Burger',
        price: 8
    }
    orders.push(obj);
    console.log(orders);
    let beefBurgerRow = document.querySelector('#beefBurgerRow');
    if (!beefBurgerRow) {
        total += obj.price * beefBurgerCounter;
        insertable.innerHTML += `<tr id="beefBurgerRow">
            <td>${obj.name}</td>
            <td id="beefBurgerCounter">${beefBurgerCounter}</td>
            <td>$${obj.price}</td>
            <td id="beefBurgerTotal">$${obj.price}</td>
            <td><button class="btn btn-danger delete-btn">Delete</button></td>
        </tr>`;
    } else {
        document.querySelector('#beefBurgerCounter').innerHTML = beefBurgerCounter;
        document.querySelector('#beefBurgerTotal').innerHTML = `$${obj.price * beefBurgerCounter}`;
        total += obj.price;
    }
    totalH.innerHTML = `$${total}`;
    beefBurgerCounter++;
    ordersT.classList.remove('d-none');
    ordersT.classList.add('d-block');
}

insertable.onclick = (e) => {
    if (e.target && e.target.classList.contains('delete-btn')) {
        let row = e.target.parentNode.parentNode;
        let rowTotal = parseFloat(row.querySelector('#beefBurgerTotal').textContent.substring(1));
        total -= rowTotal;
        totalH.innerHTML = `$${total}`;
        row.remove();
        orders = orders.filter(order => order.name !== 'Beef Burger');
        beefBurgerCounter = 1;
    } else if (e.target && e.target.classList.contains('delete-hamburger-btn')) {
        let row = e.target.parentNode.parentNode;
        let rowTotal = parseFloat(row.querySelector('#hamburgerTotal').textContent.substring(1));
        total -= rowTotal;
        totalH.innerHTML = `$${total}`;
        row.remove();
        orders = orders.filter(order => order.name !== 'Hamburger');
        hamburgerCounter = 1;
    }

    if (insertable.children.length === 0) {
        ordersT.classList.remove('d-block');
        ordersT.classList.add('d-none');

    }

    console.log("Updated Orders:", orders);
}




