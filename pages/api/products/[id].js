import { NextRequest } from "next/server";
import dbConnect from "../../../lib/mongodb";
import Product from "../../../model/Product";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  dbConnect();

  //   const id = req.query;
  const { method } = req;
  //   const {query:{id}} = req

  // get single Product
  if (method === "GET") {
    try {
      const product = await Product.findById(req.query.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
    // Handle any other HTTP method
  }

  // create product
  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // create product
  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
