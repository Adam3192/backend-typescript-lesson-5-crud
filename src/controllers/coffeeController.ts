import { RequestHandler } from "express";
import { Coffee } from "../models/coffee";
import { coffeeList } from '../models/coffee-data';

export const defaultCoffee: RequestHandler = (req, res, next) => {
    res.redirect('/coffee');
}

export const allCoffee: RequestHandler = (req, res, next) => {
    res.render('all-coffee', {
        coffeeList
    });
}

export const oneCoffee: RequestHandler = (req, res, next) => {

    // get the route parameter called "name"
    let itemName = req.params.name;

    // use the find method to get the coffee item that matches the provided name
    let foundCoffee = coffeeList.find(coffee => {
        return coffee.name === itemName;
    })

    // if the name was not found, return not found
    if (!foundCoffee) {
        return res.render('error', {
            message: "This is not the URL you are looking for!"
        })
    }

    // render the view with the found coffee item
    res.render('coffee-detail', {
        foundCoffee
    })
}

export const addCoffeePage: RequestHandler = (req, res, next) => {
    res.render('add-coffee');
}

export const addCoffee: RequestHandler = (req, res, next) => {
    // logging the received data to the console as a verification
    console.log(req.body);

    let newItem: Coffee = req.body;
    coffeeList.push(newItem);
    res.redirect('/coffee');
}