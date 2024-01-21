import { largeShoe0, largeShoe1, largeShoe2, shoes3, shoes4, shoes5, shoes6, shoes7, customer1, customer2 } from "../assets/images"
import { shieldTick, support, truckFast, facebook, xTwitter, instagram  } from '../assets/icons'

export const navList = [
  {href: "#home", label: "Home"},
  {href: "#about-us", label: "About"},
  {href: "#products", label: "Products"},
  {href: "#contact-us", label: "Contact Us"}
]


export const statistics = [
  {value: '2k+', label: 'Brands'},
  {value: '800+', label: 'Shops'},
  {value: '360k+', label: 'Customers'},
]

export const shoes = [
  {
  thumbnail: largeShoe0,
  largeShoe: largeShoe0
  },
  {
  thumbnail: largeShoe1,
  largeShoe: largeShoe1
  },
  {
  thumbnail: largeShoe2,
  largeShoe: largeShoe2
  },
]

export const productShoes = [
  {
    imgURL: shoes3,
    name: "Fila Purple Gen",
    price: "$170",
    rating: "(4.8)"
  },
  {
    imgURL: shoes4,
    name: "Fila Purple Gen 2",
    price: "$160",
    rating: "(4.8)"
  },
  {
    imgURL: shoes5,
    name: "Fila Warriors Gen",
    price: "$180",
    rating: "(4.8)"
  },
  {
    imgURL: shoes6,
    name: "Fila Boston Gen",
    price: "$180",
    rating: "(4.8)"
  },
  {
    imgURL: shoes7,
    name: "Fila Pegasus Force",
    price: "$190",
    rating: "(4.8)"
  },
]

export const services = [
  {
      imgURL: truckFast,
      label: "Free shipping",
      subtext: "Enjoy seamless shopping with our complimentary shipping service."
  },
  {
      imgURL: shieldTick,
      label: "Secure Payment",
      subtext: "Experience worry-free transactions with our secure payment options."
  },
  {
      imgURL: support,
      label: "Love to help you",
      subtext: "Our dedicated team is here to assist you every step of the way."
  },
];

export const reviews = [
  {
      imgURL: customer1,
      customerName: 'John Doe',
      rating: 4.5,
      feedback: "Fila shoes are a perfect blend of style and comfort. The sleek design caught my eye, and the comfort is unbeatable - like walking on clouds! Versatile, durable, and worth every penny!"
  },
  {
      imgURL: customer2,
      customerName: 'Liza Hudson',
      rating: 4.5,
      feedback: "Fila shoes are a game-changer for my workouts. Stylish, supportive, and durable - they're my go-to for every fitness activity. Worth the investment for anyone serious about style and performance!"
  }
];

export const footerLinks = [
  {
      title: "Products",
      links: [
          { name: "Fila Ray Tracer", link: "/" },
          { name: "Grant Hill 2", link: "/" },
          { name: "Fila Disruptor", link: "/" },
          { name: "Ray Tracer Gen 2", link: "/" },
          { name: "Oakmont TR", link: "/" },
          { name: "Disruptor Zero", link: "/" },
      ],
  },
  {
      title: "Help",
      links: [
          { name: "About us", link: "/" },
          { name: "FAQs", link: "/" },
          { name: "How it works", link: "/" },
          { name: "Privacy policy", link: "/" },
          { name: "Payment policy", link: "/" },
      ],
  },
  {
      title: "Get in touch",
      links: [
          { name: "customer@fila.com", link: "mailto:customer@fila.com" },
          { name: "+639876543210", link: "tel:+639876543210" },
      ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: instagram, alt: "instagram logo" },
  { src: xTwitter, alt: "x-twitter logo" },
];