require("node-bash-title")("just the average items")
const fetch = require("node-fetch")
const fs = require("fs")

fs.writeFileSync("items.txt", "")

async function main() {
    const itemdata = await fetch("https://api.hypixel.net/resources/skyblock/items").then((res) => res.json())
    const withdupes = []
    for (const value in itemdata["items"]) {
        //console.log(itemdata["items"][value]["name"])
        withdupes.push(itemdata["items"][value]["name"])
        //fs.appendFileSync("items.txt", itemdata["items"][value]["name"] + "\n")
    }
    const nodupes = [...new Set(withdupes)]
    for (const nodupevalues in nodupes) {
        console.log(nodupes[nodupevalues])
        fs.appendFileSync("items.txt", nodupes[nodupevalues] + "\n")
    }
}

main()