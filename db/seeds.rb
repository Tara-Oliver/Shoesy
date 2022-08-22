# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all
Product.destroy_all
# # Review.destroy_all

u1 = User.create!(
    email: 'guest@gmail.com',
    username: 'Demo User',
    password: '123456'
)

u2 = User.create!(
    username: Faker::Internet.unique.username,
    email: Faker::Internet.unique.email , 
    password:Faker::Internet.password(min_length: 6))
    
u3 = User.create!(
    username: Faker::Internet.unique.username,
    email: Faker::Internet.unique.email , 
    password:Faker::Internet.password(min_length: 6))

u4 = User.create!(
    username: Faker::Internet.unique.username,
    email: Faker::Internet.unique.email , 
    password:Faker::Internet.password(min_length: 6))
            
u5 = User.create!(
    username: Faker::Internet.unique.username,
    email: Faker::Internet.unique.email , 
    password:Faker::Internet.password(min_length: 6))
                
u6 = User.create!(
    username: Faker::Internet.unique.username,
    email: Faker::Internet.unique.email , 
    password:Faker::Internet.password(min_length: 6))

u7 = User.create!(
username: Faker::Internet.unique.username,
email: Faker::Internet.unique.email , 
password:Faker::Internet.password(min_length: 6))

u8 = User.create!(
    username: Faker::Internet.unique.username,
    email: Faker::Internet.unique.email , 
    password:Faker::Internet.password(min_length: 6))

u9 = User.create!(
    username: Faker::Internet.unique.username,
    email: Faker::Internet.unique.email , 
    password:Faker::Internet.password(min_length: 6))

u10 = User.create!(
    username: Faker::Internet.unique.username,
    email: Faker::Internet.unique.email , 
    password:Faker::Internet.password(min_length: 6))
                
                
sandal1 = Product.create!(
    name: "Handmade Genuine Leather Women's Strappy Sandals, Leather Lace Up Shoes",
    
    description: "Handmade Genuine Leather Women's Thong Sandals, one of the iconic sandals, show a strong stance by combining with genuine leather quality. One of the most popular strap sandal models of the new season, these women's shoes will be the signature of your style in your daily, office and special days. It is waiting to meet you with white, brown and black color options
    
    Material: Genuine Leather, EVA sole
    Height : 3 cm
    
    ✔ Make sure you check our size-chart before you place your order.

    • It is original and all models are designed.
    • It is completely handmade.
    • It is antibacterial, does not contain carcinogenic and allergen substances.
    • To be very light and comfortable, it creates unstoppable feelings.
    • It is suitable for living in the city.",
    
    seller_id: u5.id,
    price: 59.40,
    category: 'Sandals'
)

sandal2 = Product.create!(
    name: "Women's Metallic Greek leather gladiator sandals",
    
    description: "We can ensure that you will fall in love with our best seller leather sandals !
    A unique and simple design of Greek leather sandals, designed to surround your feet.
    Curves and braids come gently together offering beauty and strength.
    The ultimate choice for the bold and charming.",
    
    seller_id: u10.id,
    price: 76.78,
    category: 'Sandals'
)

sandal3 = Product.create!(
    name: "Handmade to order decorated sandals 'Chili Mango', Lace up Sandals, Leather Sandals, Boho Shoes, Pom pom Sandals, Gladiator Sandal",
    
    description: 'Women shoes handmade in Greece. Pom Pom sandals made out of natural leather and Pom Poms.

    🛩 Shipping via DHL Express worldwide 🛩
    🔸Please do not forget to include a phone number at checkout🔸

    Our "Chili mango" flats are made from genuine Greek leather. The leather straps are decorated with friendship bracelets in vibrant colors and motifs. The cord is embellished with semiprecious stones, gold-plated coins, multicolored charms and tassels.

    One of our first and best selling styles. No comments needed for this design! We are sure that everyone of you girls need a pair of these happy colorful beauties!

    SIZE CHART

    EU........USA........UK..........CM............INCHES
    35..........4.............2...........23,5 ..........9.2"
    36..........5.............3...........24..............9,4"
    37..........6.............4............25..............9,8"
    38..........7.............5............25,5...........10"
    39..........8............6............26..............10,2"
    40..........9............7............26,8............10,5"
    41..........10............8...........27,5............10,8"
    42..........11............9...........28...............11"

    ►whole sizes only
    ►If you take half size, go UP to the nearest whole size
    ►Fit: Normal
    •Please note that friendship bracelets may vary slightly or the pom poms may vary in colors or shades.',
    
    seller_id: u7.id,
    price: 188.26,
    category: 'Sandals'
)

sandal4 = Product.create!(
    name: "Gladiator leather sandals, gold lace up wedding sandals, greek strappy boho sandals",
    
    description: "The Medusa Gladiator leather sandal is the perfect summer statement. It laces up the front of the leg with a leather cord. The intricate back is full of handmade detail and style. We love this sandal with cut-offs or a summer dress

    In Greek mythology Medusa meaning guardian or protectorates was a monster, a Gorgon, generally described as a winged human female with a hideous face and living venomous snakes in place of hair. Gazers on her face would turn to stone.

    Medusa was beheaded by the hero Perseus, who thereafter used her head, which retained its ability to turn onlookers to stone, as a weapon until he gave it to the goddess Athena to place on her shield. In classical antiquity the image of the head of Medusa appeared in the evil-averting device known as the Gorgoneion.



    This sandal is made to order in will ship within 10 business days anywhere in the world.

    The all leather sole is perfect for absorbing the summer heat from your feet and the soft leather upper will mold to your feet for the perfect fit.

    • Hand-crafted Greek style sandal, all leather upper
    • Heel measures approximately 7.5mm/.3inches
    • 100% leather upper and lower sole keeps the feet cool and allows them to breathe
    • Gripped rubber heel for traction, durability and added comfort
    • Leather lacing ties at ankle
    • Toe strap for stability and style
    • Wearing these sandals in wet weather conditions is not recommended
    • Made on the Mediterranean island of Cyprus



    ALL ORDERS WILL BE SHIPPED FROM CYPRUS UNLESS OUT OF STOCK OR CUSTOM ORDER.
    Custom order ship from our factory directly in Greece.

    ALL STOCK ITEMS WILL BE SHIPPED VIA TNT COURIER SERVICE WITH DELIVERY 1-3 BUSINESS DAYS WORLDWIDE.
    Exceptions will be out of location that are categorized by TNT as out of area.If this occurs we will notify you.



    ALL ITEMS PURCHASED ON DISCOUNT CAN BE EXCHANGED OR GIVEN STORE CREDIT FOR THE FULL AMOUNT ( NO ADDITIONAL CHARGE FOR SHIPPING)
    ALL DISCOUNTED ITEMS RETURNED FOR A REFUND WILL RECEIVE THEIR FULL PAYMENT MINUS SHIPPING COSTS INCURED. ( Vary depening on item and method used $15 to $35)",
    
    seller_id: u2.id,
    price: 76.78,
    category: 'Sandals'
)


sandal5 = Product.create!(
    name: "Brown Leather Sandals, Ancient Grecian Sandals, Genuine Leather Sandals , Casual Leather Flats, Greek Strappy Sandals 'Nephele'",
    
    description: " Our elegant and sexy Nephele leather strappy sandals in brown. Made of the best quality soft leather with an ankle strap with metal buckles. They have an excellent fit. Perfect for all day chic and comfy wear.


    ♥ Our top quality genuine leather sandals are very soft, elegant, comfortable and durable.

    ♥ Carefully packaged in a box.

    ♥ Available in Brown, Black, Silver, Gold and Tan leather. Leather in natural color will eventually beautifully darken under the sun.",
    
    seller_id: u10.id,
    price: 67.31,
    category: 'Sandals'
)

sandal6 = Product.create!(
    name: "Greek Toe ring Sandals, Slip-on Leather Sandals, Braided Sandal, Ancient grecian sandals, Handmade sandals, Classic Greek Sandals 'Anemos'",
    
    description: " ♥ Anemos is a simple slip-on sandal with an intricate braid strap. As classic as it is versatile, this sandal showcases plenty of tanned skin, while also providing comfort for all your sunny adventures. Enlist a sundress and sweep your hair off your shoulders for maximum holiday impact.


    ♥ Our top quality genuine leather sandals are very soft, elegant, comfortable and durable.

    ♥ Carefully packaged in a box.",

    
    seller_id: u10.id,
    price: 67.31,
    category: 'Sandals'
)    

sandal7 = Product.create!(
    name: "Toe Ring Leather Sandals with Wide Straps Contemporary Modern Unique Style Slippers Greek Women Sliders Black Brown Silver",
    
    description: "For unique footwear choose these statement Greek Sandals. Entirely handmade from a premium quality leather from Crete by experienced craftsman according to traditional technique. A traditional style made with a contemporary twist. The slider sandal feature a partially curved upper part and chunky toe ring and a wide strap. Available in basic black, brown, or silver color, these modern sliders will satisfy all your footwear needs. Instantly, it brings attention to the beautiful curves of your feet and pretty toenail polished artwork, too!

    Made with comfort and style in mind, the Greek footwear features refined but casual elements! Thanks to its minimalist style, the low sandals pair effortlessly with a selection of outfits, go for party wear, a nice skirt, or put your favorite jeans on, a tee and you are ready to seize the day. Create a variety of trendy outfits with this pair of chic sandals! Order the summer wear now and indulge yourself in Greek fashion no matter where are you located

    Buy it for yourself or gift it. Stylish shoes make the perfect gift for her, for birthday, graduation, Christmas, Mother’s day, appreciation gift, or just because.

    ABOUT
    • Genuine leather sandals
    • The Celaeno sandals
    • Women’s footwear
    • High-quality chemical-free authentic leather from Crete
    • Available in black, brown, and silver
    • Modern, contemporary design
    • Toe ring
    • Wide strap
    • Elastic sole
    • Comfortable for all-day wear
    • Handmade in Greece by experienced sandal manufacturers
    • Timeless design to complement a variety of fashion styles
    • If you have any questions, please contact me

    Care Instructions
    This material should be cleaned by hand with a damp cloth without aggressive chemicals.",
    
    seller_id: u4.id,
    price: 71.10,
    category: 'Sandals'
)


sandal8 = Product.create!(
    name: "African leather sandals, women sandals, summer sandals, outdoor leather sandals,gift for her,christmas gift for loved ones, mothers day gift",

    description: "**This sandals are 100% handcrafted using Maasai beads.

    **All sizes are available as we custom make them.

    **They are made using blue,white ,gold ,red and orange beads.

    Perfect christmas gift for loved ones from beauty bounty


    **Custom order are welcome .

    **Ships via DHL Express.",

    seller_id: u5.id,
    price: 45.00,
    category: 'Sandals'
)

sandal9 = Product.create!(
    name: "Summer African beaded sandals, summer sandals, leather sandals, women sandals, gift for her, maasai beaded sandals, christmas gift for her",
    
    description: "African beaded sandals, summer sandals, leather sandals, women sandals, gift for her, maasai beaded sandals.

    100% handcrafted using maasai beads,


    Perfect christmas gift for her.


    All sizes are available as we custom make them.


    For perfect fitting kindly use the last image as a guide.

    Ships via dhl expressa",
    
    seller_id: u5.id,
    price: 23.40,
    category: 'Sandals'
)

sandal10 = Product.create!(
    name: "Handmade Bohemian Moroccan leather womens sandals dyed with natural color",
    
    description: "These pretty all-leather flip flops have a finely worked cutout on the strap.

    Light and very comfortable, they will perfectly match the shape of your feet, to better support you with each step. and will quickly become your essential ally for sunny days.

    A chic & trendy shape, appreciated by all!

    Our sandals are made from high quality vegetable tanned cow leather made in Morocco, on the straps and the top sole, using traditional techniques.
    Natural vegetable tanned cow leather gets darker by the sun and use, creating an amazing new style everyday!
    These sandals are designed for your everyday walks providing comfort and style at the same time!

    Our goal is to preserve traditional Moroccan craftsmanship and share its beauty with the world. Simple yet beautifully made, each piece is unique.

    For your wholesale orders or customizations for weeding or events please don't hesitate to contact me i'll be pleased to help.",
    
    seller_id: u7.id,
    price: 38.63,
    category: 'Sandals'
)









sneaker1 = Product.create!(
    name: "Japan Anime Inspired Casual Sneakers, Unisex Anime Shoes, Manga Sneakers",
    description:"UNISEX Streetwear Anime-Inspired Cosplay Sneakers.

    United Kingdom customers please be sure to buy 1 size bigger than usual for a comfy fit.

    Light and comfortable, basic printed shoes without brand.
    Material: Cotton, Rubber, and PU Leather.",
    
    seller_id: u3.id,
    price:48.79,
    category:'Sneakers'
)

 sneaker2 = Product.create!(
    name: "Starry Night Shoes | Van Gogh Sneakers | Art Shoes | Casual Shoes | Artist Gifts | Low Top Converse Style Shoes for Womens Mens Adults",

    description:"Our starry night shoes are sure to attrack some attention ! Our custom made shoes are sure to attrack some attention! All of our sneakers are custom-made-to-order and handcrafted to the highest quality standards


    Product Name: Starry Night Shoes | Van Gogh Sneakers | Art Shoes | Casual Shoes | Artist Gifts | Low Top Converse Style Shoes for Womens Mens Adults

    Product Features;
    ▶ Full canvas double sided print with rounded toe construction.

    ▶ Lace-up closure for a snug fit.

    ▶ Soft textile lining with lightweight construction for maximum comfort.

    ▶ High-quality outsole for traction and exceptional durability.

    ▶ Not sold in stores. This is a Custom Made to Order item.

    ▶ Ships worldwide from China.

    Sizing;
    Please measure your foot before choosing a size. Our sizes may not match exactly with other popular shoe brands. Checkout our Sizing Chart in photos to choose the best size for you.

    Quality of the shoes;
    All of our shoes are custom-made-to-order and handcrafted to the highest quality standards. Please allow 4-7 days for your order to be handmade and shipped out.",
    
    seller_id: u8.id,
    price:58.39,
    category:'Sneakers'
)

heel1 = Product.create!(
    name: "Classic Hologram Iridescent High Heels | 7 colors| Mirror Patent Leather | 12cm 10cm 8cm Wedding Shoes | Pointed Toe Slip-on Pumps",
    
    description: "Classic Pink Hologram Iridescent High Heels | Mirror Patent Leather | 12cm 10cm 8cm Wedding Shoes | Pointed Toe Slip-on Pumps

    Pump Type: Basic
    Heel Type: Thin Heels
    Upper Material: Patent Leather
    Heel Height: Super High (8cm-up)
    Fashion Element: Shallow
    Insole Material: PU
    Lining Material: PU
    Season: Spring/Autumn
    Toe Shape: Pointed Toe
    Outsole Material: Rubber
    Item Type: Pumps
    Closure Type: Slip-On
    HEEL: 12cm 10cm 8cm",
    
    seller_id: u2.id,
    price: 80.00,
    category:'Heels'
)

heel2 = Product.create!(
    name: "Patent T-Strap Stiletto Pumps",
    
    description: "Patent T-Strap Stilettoz || Chic Classy/Dressy || Summer/Spring/Fall/Winter


    Toe Shape: Round-Toe
    Heel Type: Thin Heel/Stiletto
    Heel Height: 4 inches
    Season: Spring/Summer/Fall/Winter
    Occasion: Chic Casual/Dressy",
    
    seller_id: u7.id,
    price: 90.99,
    category:'Heels'
)

heel3 = Product.create!(
    name: "Women Lace up Ankle Bow Strap High Heels Sandals",
    
    description: "Free worldwide shipping 🌎
    ❤️We ship using USPS, EMS, or another efficient trackable shipping method. Pls, understand that under normal circumstances you will typically receive your order(s) in-between or before the estimated delivery time…

    ❤️Women Lace up Ankle Bow Strap High Heels Sandals

    TOP QUALITY & 100% satisfaction guaranteed 👍🏻
    Don't miss our flash sales and NEW PRODUCTS

    Women Lace up ankle strap Square toe high heels Sandals
    We send PHOTOS of your PRODUCT before SHIPPING!",
    
    seller_id: u9.id,
    price: 49.99,
    category:'Heels'
)

heel4 = Product.create!(
    name: "Yellow Green Gradient Color Snakeskin High Heels | Sexy 12cm Thin Heel Pointed Toe Dress Pumps | Luxury Banquet Shoes",
    
    description: "Yellow Green Gradient Color Snakeskin High Heels | Sexy 12cm Thin Heel Pointed Toe Dress Pumps | Luxury Banquet Shoes

    Pump Type: Basic
    Heel Type: Thin Heels
    Upper Material: Split Leather
    Toe Shape: Pointed Toe
    Heel Height: Super High (8cm-up)
    Fashion Element: Shallow
    Insole Material: PU
    Lining Material: PU
    Season: Spring/Autumn
    Outsole Material: Rubber
    Item Type: Pumps
    Closure Type: Slip-On
    Heel: 12cm 10cm 8cm


    Please Check As Reference:

    US5=EURO35 fit for foot length about 22.5cm
    US6=EURO36 fit for foot length about 23cm
    US6.5=EURO37 fit for foot length about 23.5cm
    US7.5=EURO38 fit for foot length about 24cm
    US8.5=EURO39 fit for foot length about 24.5cm
    US9=EURO40 fit for foot length about 25cm
    US9.5=EURO41 fit for foot length about 25.5cm
    US10=EURO42 fit for foot length about 26cm
    US10.5=EURO43 fit for foot length about 26.5cm
    US12=EURO44 fit for foot length about 27cm
    US13=EURO45 fit for foot length about 27.5cm
    US13=EURO46 fit for foot length about 28cm",
    
    seller_id: u9.id,
    price: 84.00,
    category:'Heels'
)

heel5 = Product.create!(
    name: "Bow Stiletto Leather High Heels, Pointed Toe Women's Shoes",
    
    description: "Free worldwide shipping 🌎
    ❤️We ship using USPS, EMS, or another efficient trackable shipping method. Pls, understand that under normal circumstances you will typically receive your order(s) in-between or before the estimated delivery time…

    Bow Stiletto Leather High Heels, Pointed Toe Women's Shoes

    TOP QUALITY & 100% satisfaction guaranteed 👍🏻
    Follow our shop 🔝
    Don't miss our flash sales and NEW PRODUCTS

    We may send PHOTOS of your PRODUCT before SHIPPING!
    Please FOLLOW SIZE GUIDELINES Strictly…",
    
    seller_id: u9.id,
    price: 44.99,
    category:'Heels'
)



accs1 = Product.create!(
    name: "Crystal Rhinestone Applique Accessory Craft For Women Shoe Heel Barefoot Sandal Belt Headband Wedding Bridal",
    description: "A little colour to pop your look as you enter & major sparkle as you exit!
    The listing is for one piece of diamante motif.
    Please order two if you need them to decorate shoes.
    Dimensions Approxi.: (10.5cm x 5.8 cm)

    These motifs are perfect for making any heels that you want to wear more bridal!

    Bridesmaid can wear these motifs to create a cohesive look no matter what colour shoes they wear.

    This appliqué can be applied with a hot iron (checking regularly through the process to make sure it is stuck and the item doesn't become damaged), or alternatively with hot glue from a glue gun.",
   
    seller_id: u4.id,
    price: 12.43,
    category:'Accessories'
)

accs2 = Product.create!(
    name: "Crystal Rhinestone Applique Accessory Craft For Women Shoe Heel Barefoot Sandal Belt Headband Wedding Bridal",
    description: "A little colour to pop your look as you enter & major sparkle as you exit!
    The listing is for one piece of diamante motif.
    Please order two if you need them to decorate shoes.
    Dimensions Approxi.: (10.5cm x 5.8 cm)

    These motifs are perfect for making any heels that you want to wear more bridal!

    Bridesmaid can wear these motifs to create a cohesive look no matter what colour shoes they wear.

    This appliqué can be applied with a hot iron (checking regularly through the process to make sure it is stuck and the item doesn't become damaged), or alternatively with hot glue from a glue gun.",
   
    seller_id: u4.id,
    price: 12.43,
    category:'Accessories'
)

flat1 = Product.create!(
    name: "Huarache ~ All Sizes Boho- Hippie Vintage ~ Mexican Style ~ Colorful Leather ~ Mexican Huaraches",
    description: "This style is Beige with Black color

    Made in Mexico
    Handmade
    100% Natural Leather
    Completely handmade
    A unique style Huarache.


    We do not handle intermediate sizes, example 5.5, if you use 7.5 order a 7. If you are a 7 , order a 7. Huarache will mold by use- they stretch.",
    seller_id: 1,
    price: 39.99,
    category:'Flats'
)