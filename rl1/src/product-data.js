import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Edgar",
      email: "edgarcabrera33@gmail.com",
      password: bcrypt.hashSync("basura"),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id:'1',
      name: "Blue-Hoodie",
      slug: "blue-hoodie",
      price: 50,
      countInStock: 3,
      brand: "BBS",
      rating: 2,
      image: "/images/blue_hoodie.png",
      description: "BLACK BBS HODDIE confy as fuck",
    },

    {
      // _id:'2',
      name: "Black Hoodie",
      slug: "black-hoodie",
      price: 50,
      countInStock: 3,
      brand: "BBS",
      rating: 3.5,
      image: "/images/black_hoodie.png",
      description: "RED BBS HODDIE red like your blood",
    },

    {
      // _id:'3',
      name: "Shorts",
      slug: "black-shorts",
      price: 50,
      countInStock: 3,
      brand: "BBS",
      rating: 4.5,
      image: "/images/bbs_shorts.png",
      description: "BLACK BBS SHORTS fuck you bro",
    },
    {
      // _id:'4',
      name: "Gold Hoodie",
      slug: "gold-hoodie",
      price: 50,
      countInStock: 3,
      brand: "BBS",
      rating: 5,
      image: "/images/gold_hoodie.png",
      description: "BLACK BBS SHORTS fuck you bro",
    },
    {
      // _id:'5',
      name: "Blue Hoodie",
      slug: "hoodie",
      price: 50,
      countInStock: 3,
      brand: "BBS",
      rating: 3.5,
      image: "/images/bbs_shirt.png",
      description: "BLACK BBS SHORTS fuck you bro",
    },
  ],
};

export default data;
