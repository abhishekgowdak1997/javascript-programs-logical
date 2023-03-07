// write a function to give format to the given code output should be 
function transformPortfolio(portfolio) {
    const shareHolder = [];
    const stockMap = new Map();

    for (const item of portfolio) {
        const { name, stock } = item;
        const stockInfo = stockMap.get(stock);

        if (stockInfo) {
            stockInfo.name.push(name);
            stockInfo.count++;
        } else {
            stockMap.set(stock, { stock, name: [name], count: 1 });
        }
    }

    for (const [_, value] of stockMap) {
        shareHolder.push(value);
    }

    return shareHolder;
}

const portfolio = [
    { name: "mark", stock: "apple" },
    { name: "zen", stock: "fb" },
    { name: "tim", stock: "apple" },
    { name: "steve", stock: "fb" },
    { name: "bill", stock: "msft" },
    { name: "bill", stock: "apple" },
];

const shareHolder = transformPortfolio(portfolio);
console.log(shareHolder);

// Find the duplicate elements and find the 
function countValues(arr) {
    let counts = {};
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (counts[val] === undefined) {
            counts[val] = 1;
        } else {
            counts[val]++;
        }
    }
    let result = [];
    for (let key in counts) {
        result.push({ value: key, count: counts[key] });
    }
    return result;
}
let arr = [4, 5, 9, 6, 8, 5, 4];
let result = countValues(arr);
console.log(result);