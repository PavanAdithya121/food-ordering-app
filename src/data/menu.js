const menuItems = [
  {
    id: 1,
    name: "Mysore Masala Dosa",
    category: "Dessert",
    price: 80,
    popular: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1694849789325-914b71ab4075?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXlzb3JlJTIwbWFzYWxhJTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    name: "Plain Dosa",
    category: "South Indian",
    price: 60,
    image: "https://images.unsplash.com/photo-1606888476625-ddf0393a172d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYW5lJTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 3,
    name: "Masala Dosa",
    category: "South Indian",
    price: 90,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzYWxhJTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    name: "butter-rich Benne Masala Dosa",
    category: "South Indian",
    price: 110,
    image: "https://static.toiimg.com/photo/105483025/105483025.jpg"
  },
  {
    id: 5,
    name: "Rava Dosa",
    category: "South Indian",
    price: 100,
    image: "https://images.unsplash.com/photo-1743615467363-250466982515?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmF2YSUyMGRvc2F8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 6,
    name: "Set Dosa",
    category: "South Indian",
    price: 80,
    image: "https://media.istockphoto.com/id/2238287969/photo/a-plate-of-set-dosa-served.webp?a=1&b=1&s=612x612&w=0&k=20&c=dW1e_0rA8RJOK6Rn2eWD_sxg47319tUFr3rQzC2jdKg="
  },
  {
    id: 7,
    name: "Onion Dosa",
    category: "South Indian",
    price: 95,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzX7DcB-4qiI9BzZ19seoxJB58cceA2iEAnSJCStPwQg22Vbm8n2tcS2mN&s=10"
  },
  {
    id: 8,
    name: "Ghee Roast",
    category: "South Indian",
    price: 120,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxFJUopfzlqOPychPREvRRQkmE8Cp9loY3sRutiGgtYEwiJj7g4om-3g&s=10"
  },
  {
    id: 9,
    name: "Idli",
    category: "South Indian",
    price: 40,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWRsaXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 10,
    name: "Rava Idli",
    category: "South Indian",
    price: 55,
    image: "https://media.istockphoto.com/id/1320150077/photo/rava-idli-south-indain-stock-image.webp?a=1&b=1&s=612x612&w=0&k=20&c=KewSroJOHzpkgH_iCx_8gbzCu1Wwuxl5YMK6C4yertY="
  },
  {
    id: 11,
    name: "Mini Idli",
    category: "South Indian",
    price: 65,
    image: "https://media.istockphoto.com/id/1424489174/photo/idly-sambar-or-idli-with-sambhar-and-green-red-chutney-popular-south-indian-breakfast.webp?a=1&b=1&s=612x612&w=0&k=20&c=PVwUqQGw155iEczXtDG300_RnRBfvfojEKO10HmRxls="
  },
  {
    id: 12,
    name: "Poori",
    category: "South Indian",
    price: 70,
    image: "https://images.unsplash.com/photo-1643892467625-65df6a500524?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9vcml8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 13,
    name: "Poori Sagu",
    category: "South Indian",
    price: 85,
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2016/09/veg-saagu-recipe.jpg"
  },
  {
    id: 14,
    name: "Vada",
    category: "South Indian",
    price: 35,
    image: "https://images.unsplash.com/photo-1730191843435-073792ba22bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFkYXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 15,
    name: "Medu Vada",
    category: "South Indian",
    price: 45,
    image: "https://images.unsplash.com/photo-1683533678059-63c6a0e9e3ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFkdSUyMHZhZGF8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 16,
    name: "Upma",
    category: "South Indian",
    price: 50,
    image: "https://media.istockphoto.com/id/1488737992/photo/upma-recipe-suji-ka-upma-rava-upma-with-red-and-coconut-chutney.webp?a=1&b=1&s=612x612&w=0&k=20&c=1zjO85hiNAi55VhDbcISJjm2291mEw_pszwU1QuJKzs="
  },
  {
    id: 17,
    name: "Khara Bath",
    category: "South Indian",
    price: 60,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkfWKYZM2F0364-E5Li4MJT9yngJ8vl9hdrarI3KtGKoQBFM3HDaJ3-go&s=10"
  },
  {
    id: 18,
    name: "Kesari Bath",
    category: "South Indian",
    price: 65,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBhAT05K70lxeBvtw3YZd3nogUFScs7Raztn-B3TzUg&s=10"
  },
  {
    id: 19,
    name: "Bisi Bele Bath",
    category: "South Indian",
    price: 90,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSda3EJ0RAKjkS8FELU69-suk6DobJICbkPFdlk1eoAhoXyk_-YnyfSWTQ&s=10"
  },
  {
    id: 20,
    name: "Veg Fried Rice",
    category: "Chinese",
    price: 130,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgf84QbiWtER1MKlbQpZjvOesxavJx5lN--ABSxBJnQPjTuJYbT-ORWl4&s=10"
  },
  {
    id: 21,
    name: "Gobi Manchurian",
    category: "Chinese",
    price: 140,
    popular: true,
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbmcDNUwLuttigDmERmbdGD99gTskUVIyF8ETUEBBf4SO1AlcDoJKFR_mv&s=10"
  },
  {
    id: 22,
    name: "Veg Noodles",
    category: "Chinese",
    price: 120,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1P8RU0StHLRbBIx6l51ol-Mmi-KLpHwDZD1cEpty9vtv5kMsrapw9UDAR&s=10"
  },
  {
    id: 23,
    name: "Paneer Fried Rice",
    category: "Chinese",
    price: 160,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Ac0LX0FQ70fHwtzdn1SUsxSTWdd3pCpvRP7xiVDEJSIcXfVpXDe-gPVv&s=10"
  },
  {
    id: 24,
    name: "Paneer Butter Masala",
    category: "North Indian",
    price: 220,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOVMP2fEMYu-VdHQFY0CkmYVldsFsq00cvSiVwN838g&s=10"
  },
  {
    id: 25,
    name: "Butter Naan",
    category: "North Indian",
    price: 45,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOVMP2fEMYu-VdHQFY0CkmYVldsFsq00cvSiVwN838g&s=10"
  },
  {
    id: 26,
    name: "Jeera Rice",
    category: "North Indian",
    price: 140,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGa48zKqCnlIMzILmzKkCKvZ3uLEXjxUKszJd-mu5KQ&s=10"
  },
  {
    id: 27,
    name: "Veg Biryani",
    category: "Rice",
    price: 180,
    popular: true,
    rating: 4.9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj22-TLBBmDCmL4fdTyqTALjac_5gHK5vfNBDquWiKhtlCD7ULsAfXw14&s=10"
  },
  {
    id: 28,
    name: "Paneer Biryani",
    category: "Rice",
    price: 220,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbB2dNJPeHHY1U-VAVLZCeMwBmfrbkvWFctC_6RXD5LQ&s=10"
  },
  {
    id: 29,
    name: "Curd Rice",
    category: "Rice",
    price: 90,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMYKC1cF_YRgt9lKgnvBUJbWI8KWH7hR3B41_WLbK3ir37wg5EWrkP548&s=10"
  },
  {
    id: 30,
    name: "Gulab Jamun",
    category: "Dessert",
    price: 70,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnkiEZFfbgDaqgpM5YleUxN61m9duQN029zCaALb65wdSKe_i_7U1JhIs&s=10"
  },{
  id: 31,
  name: "Vanilla Ice Cream",
  category: "Ice Cream",
  price: 80,
  image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFuaWxsYSUyMGljZWNyZWFtfGVufDB8fDB8fHww"
},
{
  id: 32,
  name: "Chocolate Ice Cream",
  category: "Ice Cream",
  price: 90,
  image: "https://media.istockphoto.com/id/936155834/photo/belgian-chocolate-ice-creams.webp?a=1&b=1&s=612x612&w=0&k=20&c=X4CHqo0iBqhn5wBZWu55ZocAtexJgRRrLOl1A7c8EvY="
},
{
  id: 33,
  name: "Strawberry Ice Cream",
  category: "Ice Cream",
  price: 90,
  image: "https://images.unsplash.com/photo-1621096229451-38ce90f1035c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0cmF3YmVycnklMjBpY2UlMjBjcmVhbXxlbnwwfHwwfHx8MA%3D%3D"
},
{
  id: 34,
  name: "Butterscotch Ice Cream",
  category: "Ice Cream",
  price: 100,
  image: "https://media.istockphoto.com/id/2193449031/photo/sweet-creamy-ice-cream-and-pieces-of-melon-on-the-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=nP9wvBcqcWo6vn5F4s0eMmmLNTWv-mknrDqbFt016Mk="
},
{
  id: 35,
  name: "Mango Ice Cream",
  category: "Ice Cream",
  price: 100,
  image: "https://images.unsplash.com/photo-1663904458920-f153c162fa79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuZ28lMjBpY2UlMjBjcmVhbXxlbnwwfHwwfHx8MA%3D%3D"
},
{
  id: 36,
  name: "Fresh Lime Juice",
  category: "Juice",
  price: 60,
  image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGltZSUyMGp1aWNlfGVufDB8fDB8fHww"
},
{
  id: 37,
  name: "Orange Juice",
  category: "Juice",
  price: 80,
  image: "https://images.unsplash.com/photo-1607690506833-498e04ab3ffa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D"
},
{
  id: 38,
  name: "Watermelon Juice",
  category: "Juice",
  price: 70,
  image: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJtZWxvbiUyMGp1aWNlfGVufDB8fDB8fHww"
},
{
  id: 39,
  name: "Mango Juice",
  category: "Juice",
  price: 90,
  image: "https://images.unsplash.com/photo-1697642452436-9c40773cbcbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuZ28lMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D"
},
{
  id: 40,
  name: "Pineapple Juice",
  category: "Juice",
  price: 85,
  image: "https://images.unsplash.com/photo-1631065565414-c810ce96f078?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBpbmVhcHBsZSUyMGp1aWNlfGVufDB8fDB8fHww"
}

];

export default menuItems;