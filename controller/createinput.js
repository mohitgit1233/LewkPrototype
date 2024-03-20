const express = require('express');
const fs = require('fs');

//use this to create the catalogue file
const createInput = async (req,res) => {

    const response = await fetch("https://shopwoven.ca/products.json");
    const data = await response.json()
    console.log("success")

    fs.writeFile("clothes.txt", JSON.stringify(data), (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully\n");
            console.log("The written has the following contents:");
            console.log(fs.readFileSync("clothes.txt", "utf8"));
            return res.json(data)
        }
    });

    
};

module.exports = {createInput}