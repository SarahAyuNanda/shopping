let memberID = "1820RzKrnWn08"
let money = 525000
let listShop = [{ product: "Stacattu Shoes", price: 1500000 }, { product: "Zoro Shirt", price: 500000 }, { product: "H&N Shirt", price: 250000 }, { product: "Uniklooh Sweater", price: 175000 }, { product: "Handphone Casing", price: 50000 }]
let listPurchased = []

console.log("                       WELCOME TO MY SHOP                       ")
console.log("================================================================")
console.log(`Your budget\t: Rp.${money}`)
function isMember(memberID) {
    if (memberID == undefined) {
        return false
    } else {
        return true
    }
}

function getListInfo(budget, listShop) {
    console.log("================================================================")
    let getInfo
    let change
    for (i in listShop) {
        priceItem = listShop[i].price
        getItem = listShop[i].product
        if (money >= priceItem) {
            listPurchased.push(getItem)
            change = money - priceItem
            money -= priceItem
            console.log("----------------------------------------------------------------")
            console.log(`You can buy ${getItem} for Rp.${priceItem} and get the change Rp.${change}`)
            console.log("----------------------------------------------------------------")
        } else {
            console.log(`You have Rp.${money} but can't buy ${getItem} for Rp.${priceItem}`)
            continue
        }
    }
    console.log("================================================================")
    console.log("\n                            RECEIPT                            ")
    console.log("================================================================")
    getInfo = {
        memberID: memberID,
        money: budget,
        listPurchased: listPurchased,
        changeMoney: change
    }
    return getInfo
}

function shoppingTime(memberID, money) {
    value = isMember(memberID)
    const budget = money
    if (value == false) {
        console.log("Only for member shop")
    } else {
        console.log(getListInfo(budget, listShop))
        console.log("================================================================")
    }
}

shoppingTime(memberID, money)
