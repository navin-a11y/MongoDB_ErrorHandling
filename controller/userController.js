const catchAsync = require('./../utils/catchAsync');
const appError = require('./../utils/appError');
const User = require('./../model/userModel');
const express = require('express');
const { response } = require('express');


exports.createUser = catchAsync(async(req, res) => {
    console.log(User);
    const {name, email, postal_codes} = req.body;
   // console.log(req);

    let response;
    const user = new User({name: name, email: email, postal_code: postal_code});
    
    response = await user.save();
    
    res.status(200).json({
        status: "success",
        result: response.length,
        data: response
    });
});

exports.getUser = catchAsync(async(req, res) => {
    let response;

    response = await User.find();

    res.status(200).json({
        status: "success",
        result: response.length,
        data: response
    });
});

exports.viewUser = catchAsync(async(req, res) => {
    const id = req.params.id;

    let response;
    response = await User.findById(id);

    res.status(200).json({
        status: "success",
        result: response.length,
        data: response
    });
});

exports.getUpdate = catchAsync(async(req,res) => {
    const id = req.params.id;
    const {name, email, postal_code} = req.body;
    let response;

    response = await User.findByIdAndUpdate({_id: id}, {name: name, email: email, postal_code: postal_code}, {
        new: true,
        runValidators: true
    });
    res.status(200).json({
        status: "success",
        result: response.length,
        data: response
    });
});

exports.deleteUser = catchAsync(async(req, res) => {
    const id = req.params.id;

    response = await User.findByIdAndDelete(id);
    res.status(200).json({
        status: "success",
        //result: response.length,
        data: null
    });
});