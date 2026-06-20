const foods = [
// ===== ORIGINAL 12 (fixed) =====
{id:1,name:"Pambazos",type:"Mexican",diet:"veg",rating:4.5,time:"25 min",img:"https://practicalwanderlust.com/wp-content/uploads/2021/01/Obscure-Authentic-Mexican-Dishes-Pambazos.jpg",ingredients:["Bread rolls","Potatoes boiled & mashed","Chilli sauce","Garlic","Onion","Oil","Salt","Turmeric"],steps:["Step 1: Boil and mash potatoes with spices.","Step 2: Prepare chilli sauce.","Step 3: Fill bread with potato mixture.","Step 4: Dip bread in chilli sauce.","Step 5: Fry until crispy and serve hot."]},
{id:2,name:"Orecchiette",type:"Italian",diet:"veg",rating:4.7,time:"40 min",img:"https://eb3k7ewioxo.exactdn.com/wp-content/uploads/2022/01/Orecchiette-alle-cime-di-rapa.jpg",ingredients:["Orecchiette pasta","Broccoli rabe","Garlic","Olive oil","Chilli flakes","Salt","Parmesan"],steps:["Step 1: Boil salted water and cook pasta.","Step 2: Blanch broccoli rabe in same water.","Step 3: Sauté garlic and chilli in olive oil.","Step 4: Toss pasta and greens in garlic oil.","Step 5: Top with parmesan and serve."]},
{id:3,name:"Roasted Chicken",type:"French",diet:"nonveg",rating:4.3,time:"50 min",img:"https://m.ahstatic.com/is/image/accorhotels/GettyImages-1772098289?fmt=jpg",ingredients:["Whole chicken","Salt","Black pepper","Olive oil","Garlic","Rosemary","Thyme","Lemon"],steps:["Step 1: Preheat oven to 200°C.","Step 2: Rub chicken with oil, salt, pepper and herbs.","Step 3: Stuff cavity with lemon and garlic.","Step 4: Roast for 1 hour until golden.","Step 5: Rest 10 minutes before serving."]},
{id:4,name:"Nepali Momo",type:"Indian",diet:"nonveg",rating:4.8,time:"35 min",img:"https://data.tibettravel.org/assets/images/nepal/momo-nepal.jpg",ingredients:["Flour","Water","Minced chicken","Onion","Garlic","Ginger","Salt","Pepper","Oil"],steps:["Step 1: Make soft dough with flour and water.","Step 2: Mix chicken with onion, garlic, ginger, salt.","Step 3: Roll small circles and fill with mixture.","Step 4: Pleat and seal the momos.","Step 5: Steam for 12 minutes and serve with chutney."]},
{id:5,name:"Middle Eastern Platter",type:"Indian",diet:"veg",rating:4.6,time:"45 min",img:"https://cdn.tasteatlas.com/images/dishes/713e5f01cbb2463386be9bc57c037639.jpg",ingredients:["Hummus","Pita bread","Falafel","Chickpeas","Tahini","Olive oil","Lemon","Parsley","Spices"],steps:["Step 1: Blend chickpeas with tahini, lemon, garlic for hummus.","Step 2: Shape and fry falafel patties.","Step 3: Warm pita bread.","Step 4: Arrange on a large plate.","Step 5: Garnish with olive oil and parsley."]},
{id:6,name:"Classic Pasta",type:"Italian",diet:"veg",rating:4.4,time:"30 min",img:"https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/pasta-1509527885-785X440.jpg",ingredients:["Pasta","Tomatoes","Garlic","Olive oil","Basil","Salt","Pepper","Parmesan"],steps:["Step 1: Boil pasta until al dente.","Step 2: Sauté garlic in olive oil.","Step 3: Add crushed tomatoes and simmer.","Step 4: Toss pasta in sauce.","Step 5: Top with basil and parmesan."]},
{id:7,name:"Spinach Lasagna",type:"Italian",diet:"veg",rating:4.9,time:"60 min",img:"https://assets.bonappetit.com/photos/63dadf5316330e47d621f630/1:1/w_2240,c_limit/spinach-lasagna.jpg",ingredients:["Lasagna sheets","Spinach","Ricotta","Mozzarella","Tomato sauce","Garlic","Olive oil","Salt"],steps:["Step 1: Cook spinach and mix with ricotta.","Step 2: Layer sauce, sheets, filling alternately.","Step 3: Top with mozzarella.","Step 4: Bake at 180°C for 40 minutes.","Step 5: Cool 10 minutes and slice."]},
{id:8,name:"Braciole",type:"Italian",diet:"nonveg",rating:4.7,time:"90 min",img:"https://www.foodandwine.com/thmb/fVmYbaQzXCz1Prx8VxrW9sMcjMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Braciole-FT-RECIPE1122-66acf49cef0e4390bec780945709e7f3.jpg",ingredients:["Beef slices","Garlic","Parsley","Parmesan","Breadcrumbs","Tomato sauce","Olive oil","Salt","Pepper"],steps:["Step 1: Flatten beef with mallet.","Step 2: Spread filling of garlic, parsley, cheese.","Step 3: Roll tightly and secure with string.","Step 4: Brown in oil then simmer in tomato sauce 1 hour.","Step 5: Slice and serve with sauce."]},
{id:9,name:"Penne Pomodoro",type:"Italian",diet:"veg",rating:4.2,time:"25 min",img:"https://www.marcellinaincucina.com/wp-content/uploads/2025/01/penne-pomodoro-featured.jpg",ingredients:["Penne pasta","Tomatoes","Garlic","Basil","Olive oil","Salt","Sugar"],steps:["Step 1: Boil penne until al dente.","Step 2: Sauté garlic in olive oil.","Step 3: Add chopped tomatoes and simmer 15 min.","Step 4: Toss pasta in sauce.","Step 5: Garnish with fresh basil."]},
{id:10,name:"Indian Pakora",type:"Indian",diet:"veg",rating:4.3,time:"20 min",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLZq0RB_DGMHrn1pA7yhCWXgXcLmxjICfS6A&s",ingredients:["Chickpea flour","Onion","Chilli","Coriander","Salt","Turmeric","Water","Oil"],steps:["Step 1: Mix chickpea flour with spices and water into batter.","Step 2: Slice onions and coat in batter.","Step 3: Heat oil in deep pan.","Step 4: Fry in batches until golden.","Step 5: Drain and serve with chutney."]},
{id:11,name:"Chinese Noodles",type:"Chinese",diet:"veg",rating:4.5,time:"30 min",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6p2OvosVioxCJUJlw2kXtZxrwGAZSte6B5A&s",ingredients:["Noodles","Soy sauce","Garlic","Ginger","Vegetables","Oil","Sesame oil","Chilli flakes"],steps:["Step 1: Boil noodles and drain.","Step 2: Stir-fry garlic and ginger in oil.","Step 3: Add vegetables and toss.","Step 4: Add noodles and soy sauce.","Step 5: Finish with sesame oil and serve."]},
{id:12,name:"Eggplant Burrata",type:"Italian",diet:"veg",rating:4.6,time:"35 min",img:"https://www.foodandwine.com/thmb/sLivLrjDuasUcWw5Bdpwia47bYA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FWCOOKS_CharredEggplant_FT_RECIPE_085-fa1634b0ac3e4b40bcb1b57daaee6a33.jpg",ingredients:["Eggplant","Burrata cheese","Olive oil","Salt","Chilli flakes","Basil","Lemon"],steps:["Step 1: Slice eggplant and brush with olive oil.","Step 2: Roast at 200°C until charred.","Step 3: Arrange on plate and tear burrata over top.","Step 4: Season with chilli, salt and lemon.","Step 5: Finish with fresh basil."]},
 
// ===== 100 NEW DISHES =====
// ITALIAN
{id:13,name:"Spaghetti Carbonara",type:"Italian",diet:"nonveg",rating:4.9,time:"25 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Spaghetti_carbonara.jpg?width=640",ingredients:["Spaghetti","Pancetta","Eggs","Pecorino Romano","Black pepper","Salt","Olive oil"],steps:["Step 1: Boil spaghetti in salted water.","Step 2: Fry pancetta until crisp.","Step 3: Whisk eggs with grated pecorino and pepper.","Step 4: Toss hot pasta with pancetta off heat.","Step 5: Add egg mixture quickly, toss and serve."]},
{id:14,name:"Risotto ai Funghi",type:"Italian",diet:"veg",rating:4.8,time:"45 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Risotto_ai_funghi_porcini.JPG?width=640",ingredients:["Arborio rice","Porcini mushrooms","Onion","White wine","Parmesan","Butter","Stock","Garlic"],steps:["Step 1: Soak dried mushrooms in hot water.","Step 2: Sauté onion and garlic in butter.","Step 3: Add rice and toast 2 minutes.","Step 4: Add wine then stock ladle by ladle.","Step 5: Stir in mushrooms, parmesan, butter and serve."]},
{id:15,name:"Tiramisu",type:"Italian",diet:"veg",rating:4.9,time:"30 min",img:"https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2024/09/THUMB-VIDEO-2_rev1-56.jpeg",ingredients:["Ladyfinger biscuits","Espresso","Mascarpone","Eggs","Sugar","Cocoa powder","Marsala wine"],steps:["Step 1: Mix egg yolks and sugar until pale.","Step 2: Fold in mascarpone.","Step 3: Dip ladyfingers in espresso briefly.","Step 4: Layer biscuits and cream alternately.","Step 5: Dust with cocoa and refrigerate 4 hours."]},
{id:16,name:"Margherita Pizza",type:"Italian",diet:"veg",rating:4.9,time:"35 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Eq_it-na_pizza-margherita_sep2005_sml.jpg?width=640",ingredients:["Pizza dough","Tomato sauce","Mozzarella","Fresh basil","Olive oil","Salt"],steps:["Step 1: Preheat oven to maximum with a tray inside.","Step 2: Stretch dough into a round.","Step 3: Spread tomato sauce and top with mozzarella.","Step 4: Bake 8–10 minutes until crust is charred.","Step 5: Add fresh basil and drizzle olive oil."]},
{id:17,name:"Pesto Genovese",type:"Italian",diet:"veg",rating:4.7,time:"15 min",img:"https://substackcdn.com/image/fetch/$s_!m0VD!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F760ad1a3-febd-495a-870f-2513bb7952f7_1440x1410.jpeg",ingredients:["Fresh basil","Pine nuts","Garlic","Parmesan","Olive oil","Salt","Pasta"],steps:["Step 1: Blend basil, pine nuts and garlic.","Step 2: Add parmesan and olive oil gradually.","Step 3: Season with salt.","Step 4: Boil pasta and reserve some water.","Step 5: Toss pasta with pesto and a splash of water."]},
 
// INDIAN
{id:18,name:"Butter Chicken",type:"Indian",diet:"nonveg",rating:4.9,time:"50 min",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmqYZioDKBrqkLMt3lNTjNu_hbL2m6C4A42JfvrEt_bA&s=10",ingredients:["Chicken","Butter","Cream","Tomatoes","Onion","Garlic","Ginger","Garam masala","Cumin","Chilli"],steps:["Step 1: Marinate chicken in yogurt and spices.","Step 2: Grill or pan-fry until charred.","Step 3: Make sauce with butter, onion, tomatoes and spices.","Step 4: Add chicken to sauce with cream.","Step 5: Simmer 15 minutes and serve with naan."]},
{id:19,name:"Biryani",type:"Indian",diet:"nonveg",rating:4.9,time:"70 min",img:"https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2025/05/Veg-Kofta-Biryani-H1.jpg?fit=600%2C900&ssl=1",ingredients:["Basmati rice","Chicken","Yogurt","Onion","Saffron","Ghee","Whole spices","Mint","Coriander"],steps:["Step 1: Marinate chicken with yogurt and spices overnight.","Step 2: Fry onions until golden.","Step 3: Layer parboiled rice and chicken alternately.","Step 4: Add saffron milk and seal the pot.","Step 5: Cook on low heat (dum) 30 minutes."]},
{id:20,name:"Palak Paneer",type:"Indian",diet:"veg",rating:4.7,time:"35 min",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwa_lnMrKZbJmcmL5ET4_Hvv0QMj8owL5-5UpaqaMLBlkT3Xv60TaOdw&s=10",ingredients:["Spinach","Paneer","Onion","Tomato","Garlic","Ginger","Cream","Spices","Ghee"],steps:["Step 1: Blanch spinach and blend to puree.","Step 2: Fry onion, tomato, garlic, ginger.","Step 3: Add spices and spinach puree.","Step 4: Add fried paneer cubes.","Step 5: Stir in cream and serve with roti."]},
{id:21,name:"Chole Bhature",type:"Indian",diet:"veg",rating:4.8,time:"40 min",img:"https://madhurasrecipe.com/wp-content/uploads/2025/09/MR-Chole-Bhature-featured.jpg",ingredients:["Chickpeas","Flour","Yogurt","Onion","Tomato","Spices","Oil","Coriander"],steps:["Step 1: Soak and boil chickpeas.","Step 2: Make spicy tomato-onion gravy.","Step 3: Add chickpeas and simmer.","Step 4: Knead bhature dough with flour and yogurt.","Step 5: Deep fry bhature until puffed and serve hot."]},
{id:22,name:"Dal Makhani",type:"Indian",diet:"veg",rating:4.8,time:"60 min",img:"https://www.cookwithmanali.com/wp-content/uploads/2019/04/Restaurant-Style-Dal-Makhani.jpg",ingredients:["Black lentils","Kidney beans","Butter","Cream","Tomatoes","Garlic","Ginger","Spices"],steps:["Step 1: Soak lentils overnight and pressure cook.","Step 2: Make tomato-ginger-garlic base.","Step 3: Add cooked lentils to the base.","Step 4: Simmer with butter and cream for 30 minutes.","Step 5: Serve garnished with cream and butter."]},
{id:23,name:"Masala Dosa",type:"Indian",diet:"veg",rating:4.8,time:"45 min",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUSi3kv3y-BQuISrIOzKczhNy7MnttCQIJbQoV8kEWQ&s=10",ingredients:["Rice batter","Urad dal","Potatoes","Mustard seeds","Onion","Turmeric","Oil","Curry leaves"],steps:["Step 1: Ferment rice and dal batter overnight.","Step 2: Prepare potato masala with onion and spices.","Step 3: Spread thin crepe on hot griddle.","Step 4: Place potato filling in centre and fold.","Step 5: Serve with coconut chutney and sambar."]},
{id:24,name:"Chicken Tikka Masala",type:"Indian",diet:"nonveg",rating:4.9,time:"55 min",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Y5u7TuTEA3jyLmM9s3DoisKbx2zK1aFwmYhO-RkBiw&s=10",ingredients:["Chicken","Yogurt","Cream","Tomatoes","Onion","Garlic","Spices","Butter","Coriander"],steps:["Step 1: Marinate chicken in spiced yogurt.","Step 2: Grill or bake until charred.","Step 3: Make creamy tomato masala sauce.","Step 4: Add chicken and simmer 15 minutes.","Step 5: Finish with cream and serve with rice."]},
{id:25,name:"Rogan Josh",type:"Indian",diet:"nonveg",rating:4.7,time:"65 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mutton_rogan_josh.jpg?width=640",ingredients:["Lamb","Yogurt","Onion","Garlic","Kashmiri chilli","Whole spices","Ghee","Saffron"],steps:["Step 1: Brown lamb pieces in ghee.","Step 2: Add whole spices and onion.","Step 3: Add Kashmiri chilli paste for colour.","Step 4: Stir in yogurt and simmer 45 minutes.","Step 5: Garnish with saffron and serve."]},
{id:26,name:"Aloo Gobi",type:"Indian",diet:"veg",rating:4.5,time:"30 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Aloo_Gobi.jpg?width=640",ingredients:["Potatoes","Cauliflower","Onion","Tomato","Turmeric","Cumin","Coriander","Oil","Salt"],steps:["Step 1: Heat oil and fry cumin seeds.","Step 2: Add onion and tomato and cook down.","Step 3: Add turmeric and spices.","Step 4: Add potatoes and cauliflower.","Step 5: Cover and cook 20 minutes, serve with roti."]},
{id:27,name:"Samosa",type:"Indian",diet:"veg",rating:4.7,time:"40 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/South_Indian_Samosa.jpg?width=640",ingredients:["Flour","Potatoes","Peas","Spices","Oil","Ginger","Chilli","Coriander"],steps:["Step 1: Make stiff dough with flour and water.","Step 2: Prepare spiced potato and pea filling.","Step 3: Roll dough into cone shapes.","Step 4: Fill and seal the edges.","Step 5: Deep fry until golden and serve with chutney."]},
{id:28,name:"Hyderabadi Biryani",type:"Indian",diet:"nonveg",rating:4.9,time:"75 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/A_Plate_of_Hyderabadi_dum_biryani.jpg?width=640",ingredients:["Basmati rice","Mutton","Fried onion","Saffron","Mint","Yogurt","Ghee","Whole spices"],steps:["Step 1: Marinate mutton in yogurt and spices.","Step 2: Parboil basmati rice.","Step 3: Layer meat and rice in a heavy pot.","Step 4: Top with saffron milk and fried onions.","Step 5: Seal pot and cook on dum 35 minutes."]},
{id:29,name:"Pav Bhaji",type:"Indian",diet:"veg",rating:4.7,time:"35 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Pav_Bhaji_%28Plated%29.jpg?width=640",ingredients:["Mixed vegetables","Butter","Pav bread","Pav bhaji masala","Tomatoes","Onion","Lemon"],steps:["Step 1: Boil and mash all vegetables.","Step 2: Cook with tomatoes, onion and masala.","Step 3: Add butter generously.","Step 4: Toast pav buns with butter on griddle.","Step 5: Serve bhaji topped with onion and lemon."]},
 
// CHINESE
{id:30,name:"Kung Pao Chicken",type:"Chinese",diet:"nonveg",rating:4.7,time:"30 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Kung-pao-shanghai-china.jpg?width=640",ingredients:["Chicken","Peanuts","Dried chillies","Garlic","Ginger","Soy sauce","Vinegar","Sugar","Sesame oil"],steps:["Step 1: Marinate chicken in soy sauce and cornstarch.","Step 2: Stir-fry dried chillies and peanuts.","Step 3: Add chicken and cook through.","Step 4: Pour sauce of soy, vinegar, sugar.","Step 5: Toss and finish with sesame oil."]},
{id:31,name:"Dim Sum",type:"Chinese",diet:"nonveg",rating:4.8,time:"50 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Dimsum_of_Shenyang.jpg?width=640",ingredients:["Rice flour","Shrimp","Pork","Bamboo shoots","Sesame oil","Soy sauce","Ginger","Spring onion"],steps:["Step 1: Make wrappers from rice flour dough.","Step 2: Mix shrimp and pork filling with seasonings.","Step 3: Fill and pleat each dumpling.","Step 4: Place in bamboo steamer lined with paper.","Step 5: Steam 8 minutes and serve with soy sauce."]},
{id:32,name:"Peking Duck",type:"Chinese",diet:"nonveg",rating:4.9,time:"120 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Peking_Duck.jpg?width=640",ingredients:["Whole duck","Hoisin sauce","Spring onions","Cucumber","Pancakes","Chinese five spice","Honey","Soy sauce"],steps:["Step 1: Air-dry the duck overnight.","Step 2: Rub with five spice and honey.","Step 3: Roast at 200°C for 90 minutes.","Step 4: Slice skin and meat thinly.","Step 5: Serve wrapped in pancakes with hoisin."]},
{id:33,name:"Mapo Tofu",type:"Chinese",diet:"veg",rating:4.6,time:"25 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mapo_tofu_%28%E9%BA%BB%E5%A9%86%E8%B1%86%E8%85%90%29.jpg?width=640",ingredients:["Soft tofu","Doubanjiang","Garlic","Ginger","Sichuan peppercorn","Soy sauce","Chilli oil","Spring onion"],steps:["Step 1: Cut tofu into cubes.","Step 2: Fry doubanjiang, garlic and ginger.","Step 3: Add stock and bring to simmer.","Step 4: Slide in tofu and cook 5 minutes.","Step 5: Top with Sichuan pepper and spring onion."]},
{id:34,name:"Spring Rolls",type:"Chinese",diet:"veg",rating:4.5,time:"35 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Non-Fried_Spring_Rolls.jpg?width=640",ingredients:["Spring roll wrappers","Cabbage","Carrots","Vermicelli","Soy sauce","Ginger","Oil","Salt"],steps:["Step 1: Stir-fry shredded vegetables with ginger.","Step 2: Add soaked vermicelli and soy sauce.","Step 3: Cool filling completely.","Step 4: Roll in wrappers and seal with flour paste.","Step 5: Deep fry until golden and crispy."]},
{id:35,name:"Fried Rice",type:"Chinese",diet:"veg",rating:4.6,time:"20 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Fried_rice_as_food.jpg?width=640",ingredients:["Cooked rice","Eggs","Soy sauce","Garlic","Spring onion","Peas","Carrots","Sesame oil","Oil"],steps:["Step 1: Heat oil in wok until smoking.","Step 2: Add garlic and vegetables, toss.","Step 3: Push aside and scramble eggs.","Step 4: Add day-old rice and break clumps.","Step 5: Season with soy sauce and sesame oil."]},
{id:36,name:"Hot and Sour Soup",type:"Chinese",diet:"nonveg",rating:4.5,time:"25 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Hot_and_Sour_Soup.jpg?width=640",ingredients:["Tofu","Mushrooms","Bamboo shoots","Egg","Vinegar","Soy sauce","Cornstarch","White pepper","Stock"],steps:["Step 1: Bring stock to boil.","Step 2: Add mushrooms, bamboo shoots and tofu.","Step 3: Season with soy sauce and vinegar.","Step 4: Stir in cornstarch slurry.","Step 5: Drizzle beaten egg and serve hot."]},
 
// MEXICAN
{id:37,name:"Tacos al Pastor",type:"Mexican",diet:"nonveg",rating:4.8,time:"45 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Tacos_de_pastor.jpg?width=640",ingredients:["Pork","Pineapple","Corn tortillas","Chilli paste","Onion","Coriander","Lime","Guajillo chilli"],steps:["Step 1: Marinate pork in chilli paste overnight.","Step 2: Grill pork with pineapple until caramelised.","Step 3: Slice meat thinly.","Step 4: Warm tortillas on griddle.","Step 5: Top with meat, pineapple, onion and coriander."]},
{id:38,name:"Guacamole",type:"Mexican",diet:"veg",rating:4.7,time:"10 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Guacamole.jpg?width=640",ingredients:["Avocados","Lime juice","Onion","Tomato","Coriander","Jalapeño","Salt","Garlic"],steps:["Step 1: Halve and pit ripe avocados.","Step 2: Mash roughly with a fork.","Step 3: Add finely chopped onion, tomato and jalapeño.","Step 4: Squeeze in lime juice and add salt.","Step 5: Fold in coriander and serve immediately."]},
{id:39,name:"Enchiladas",type:"Mexican",diet:"nonveg",rating:4.6,time:"40 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Enchiladas_del_suelo.jpg?width=640",ingredients:["Corn tortillas","Chicken","Red chilli sauce","Cheese","Onion","Sour cream","Coriander"],steps:["Step 1: Shred cooked chicken and mix with cheese.","Step 2: Dip tortillas in warm chilli sauce.","Step 3: Fill and roll each tortilla.","Step 4: Place seam-down in dish and top with more sauce and cheese.","Step 5: Bake 20 minutes until bubbly."]},
{id:40,name:"Chiles Rellenos",type:"Mexican",diet:"veg",rating:4.5,time:"45 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Chile_relleno.jpg?width=640",ingredients:["Poblano peppers","Cheese","Eggs","Flour","Tomato sauce","Cumin","Oil","Salt"],steps:["Step 1: Roast and peel poblano peppers.","Step 2: Make a slit and stuff with cheese.","Step 3: Coat in flour then beaten egg batter.","Step 4: Fry until golden on all sides.","Step 5: Serve in tomato sauce."]},
 
// FRENCH
{id:41,name:"Croissant",type:"French",diet:"veg",rating:4.9,time:"180 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Croissant_070416.jpg?width=640",ingredients:["Flour","Butter","Yeast","Milk","Sugar","Salt","Egg wash"],steps:["Step 1: Make enriched dough and rest overnight.","Step 2: Laminate with cold butter in layers.","Step 3: Roll and cut into triangles.","Step 4: Roll up into crescent shape.","Step 5: Proof 2 hours, brush with egg wash and bake."]},
{id:42,name:"French Onion Soup",type:"French",diet:"veg",rating:4.7,time:"55 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/French_onion_soup.jpg?width=640",ingredients:["Onions","Beef stock","Baguette","Gruyère","Butter","White wine","Thyme","Bay leaf"],steps:["Step 1: Slowly caramelise onions in butter 40 minutes.","Step 2: Add wine and reduce.","Step 3: Add stock and thyme, simmer 15 minutes.","Step 4: Ladle into bowls with baguette slices on top.","Step 5: Cover with Gruyère and grill until bubbling."]},
{id:43,name:"Coq au Vin",type:"French",diet:"nonveg",rating:4.7,time:"90 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Coq_au_vin_recipe.jpg?width=640",ingredients:["Chicken","Red wine","Bacon","Mushrooms","Pearl onions","Garlic","Thyme","Butter","Stock"],steps:["Step 1: Brown chicken pieces in butter.","Step 2: Fry bacon, onions and mushrooms.","Step 3: Return chicken, add wine and stock.","Step 4: Add garlic and thyme.","Step 5: Braise 60 minutes until tender."]},
{id:44,name:"Crème Brûlée",type:"French",diet:"veg",rating:4.8,time:"60 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Cr%C3%A8me_br%C3%BBl%C3%A9e.jpg?width=640",ingredients:["Heavy cream","Egg yolks","Sugar","Vanilla bean"],steps:["Step 1: Heat cream with vanilla pod.","Step 2: Whisk egg yolks with sugar.","Step 3: Combine and pour into ramekins.","Step 4: Bake in water bath at 160°C for 40 minutes.","Step 5: Chill, sprinkle sugar and torch until caramelised."]},
{id:45,name:"Ratatouille",type:"French",diet:"veg",rating:4.6,time:"60 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ratatouille_-_stonesoup.jpg?width=640",ingredients:["Zucchini","Eggplant","Bell peppers","Tomatoes","Garlic","Olive oil","Thyme","Basil"],steps:["Step 1: Slice all vegetables thinly.","Step 2: Make tomato sauce base.","Step 3: Arrange vegetable slices overlapping in dish.","Step 4: Season and drizzle with olive oil.","Step 5: Bake at 180°C for 45 minutes."]},
 
// JAPANESE
{id:46,name:"Sushi",type:"Chinese",diet:"nonveg",rating:4.9,time:"50 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Sushi_platter.jpg?width=640",ingredients:["Sushi rice","Nori sheets","Salmon","Tuna","Cucumber","Avocado","Soy sauce","Wasabi","Pickled ginger"],steps:["Step 1: Cook and season rice with vinegar and sugar.","Step 2: Place nori on bamboo mat.","Step 3: Spread rice and add fillings.","Step 4: Roll tightly using mat.","Step 5: Slice and serve with soy sauce and wasabi."]},
{id:47,name:"Ramen",type:"Chinese",diet:"nonveg",rating:4.9,time:"60 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ramen.jpg?width=640",ingredients:["Ramen noodles","Pork belly","Soft boiled egg","Nori","Soy sauce","Mirin","Broth","Spring onion"],steps:["Step 1: Simmer broth with soy sauce and mirin.","Step 2: Cook noodles separately.","Step 3: Slice chashu pork thinly.","Step 4: Place noodles in bowl and pour hot broth.","Step 5: Top with pork, egg, nori and spring onion."]},
{id:48,name:"Tempura",type:"Chinese",diet:"nonveg",rating:4.7,time:"35 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Tempura_mixed.jpg?width=640",ingredients:["Shrimp","Vegetables","Tempura batter","Ice water","Flour","Egg","Dipping sauce"],steps:["Step 1: Make ice-cold batter with flour and egg.","Step 2: Pat shrimp and vegetables dry.","Step 3: Dip lightly in batter.","Step 4: Fry in hot oil until light golden.","Step 5: Drain and serve immediately with dipping sauce."]},
{id:49,name:"Miso Soup",type:"Chinese",diet:"veg",rating:4.6,time:"15 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/MisoSoup.jpg?width=640",ingredients:["Miso paste","Dashi stock","Tofu","Wakame seaweed","Spring onion"],steps:["Step 1: Heat dashi stock.","Step 2: Dissolve miso paste in a ladleful of stock.","Step 3: Return to pot, do not boil.","Step 4: Add tofu cubes and rehydrated wakame.","Step 5: Serve immediately garnished with spring onion."]},
{id:50,name:"Takoyaki",type:"Chinese",diet:"nonveg",rating:4.7,time:"30 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Takoyaki_01.jpg?width=640",ingredients:["Octopus","Batter","Cabbage","Takoyaki sauce","Bonito flakes","Mayonnaise","Spring onion"],steps:["Step 1: Heat takoyaki mould and oil each hole.","Step 2: Fill with batter.","Step 3: Add octopus piece and cabbage.","Step 4: Turn with skewer to form balls.","Step 5: Top with sauce, mayo and bonito flakes."]},
 
// PUNJABI / PAKISTANI
{id:51,name:"Sarson da Saag",type:"Punjabi",diet:"veg",rating:4.8,time:"50 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Sarson_Ka_Saag.jpg?width=640",ingredients:["Mustard greens","Spinach","Butter","Onion","Garlic","Ginger","Makki roti","Ghee","Spices"],steps:["Step 1: Boil and blend mustard greens and spinach.","Step 2: Fry onion, garlic and ginger in ghee.","Step 3: Add blended greens and cook 20 minutes.","Step 4: Finish with generous butter.","Step 5: Serve with makki roti and jaggery."]},
{id:52,name:"Tandoori Chicken",type:"Punjabi",diet:"nonveg",rating:4.8,time:"50 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Tandoori_chicken.jpg?width=640",ingredients:["Chicken","Yogurt","Tandoori masala","Chilli","Garlic","Ginger","Lemon","Oil"],steps:["Step 1: Score chicken and marinate in spiced yogurt 6 hours.","Step 2: Skewer the chicken.","Step 3: Cook in very hot tandoor or oven at 250°C.","Step 4: Turn once halfway.","Step 5: Serve with mint chutney and lemon wedges."]},
{id:53,name:"Nihari",type:"Pakistani",diet:"nonveg",rating:4.8,time:"180 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Nihari.jpg?width=640",ingredients:["Beef shank","Nihari masala","Ghee","Onion","Ginger","Wheat flour","Bone marrow","Coriander"],steps:["Step 1: Brown beef in ghee.","Step 2: Add nihari masala and cook.","Step 3: Add water and bone marrow and simmer 3 hours.","Step 4: Thicken with wheat flour.","Step 5: Serve garnished with ginger, chilli and coriander."]},
{id:54,name:"Bihari Kabab",type:"Pakistani",diet:"nonveg",rating:4.7,time:"45 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Bihari_kebab.jpg?width=640",ingredients:["Beef","Papaya paste","Yogurt","Cumin","Coriander","Chilli","Mustard oil","Ginger","Garlic"],steps:["Step 1: Tenderise beef with raw papaya paste.","Step 2: Marinate in spiced yogurt overnight.","Step 3: Skewer the marinated beef strips.","Step 4: Grill over hot coals or grill pan.","Step 5: Serve with naan and raita."]},
{id:55,name:"Makki di Roti",type:"Punjabi",diet:"veg",rating:4.6,time:"30 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Makke_Di_Roti.jpg?width=640",ingredients:["Maize flour","Warm water","Salt","Ghee","Butter"],steps:["Step 1: Mix maize flour with warm water and salt.","Step 2: Knead into stiff dough.","Step 3: Flatten into thick round bread.","Step 4: Cook on hot griddle turning frequently.","Step 5: Apply ghee and serve with sarson da saag."]},
 
// SPANISH / MEDITERRANEAN
{id:56,name:"Paella",type:"French",diet:"nonveg",rating:4.8,time:"55 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Paella_Valenciana_original.jpg?width=640",ingredients:["Bomba rice","Chicken","Chorizo","Shrimp","Saffron","Bell peppers","Tomatoes","Paprika","Stock"],steps:["Step 1: Fry chicken and chorizo in paella pan.","Step 2: Add vegetables and cook down.","Step 3: Add rice and stir with saffron stock.","Step 4: Do not stir, let rice form a crust.","Step 5: Add shrimp on top, cook 5 minutes and serve."]},
{id:57,name:"Gazpacho",type:"French",diet:"veg",rating:4.5,time:"15 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Gazpacho.jpg?width=640",ingredients:["Tomatoes","Cucumber","Bell pepper","Garlic","Bread","Olive oil","Vinegar","Salt"],steps:["Step 1: Soak bread in water briefly.","Step 2: Blend all vegetables with garlic.","Step 3: Add squeezed bread, olive oil and vinegar.","Step 4: Blend until smooth.","Step 5: Chill and serve cold with garnishes."]},
{id:58,name:"Patatas Bravas",type:"French",diet:"veg",rating:4.6,time:"30 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Patatas_bravas_-_2.jpg?width=640",ingredients:["Potatoes","Olive oil","Paprika","Tomatoes","Garlic","Vinegar","Salt","Cayenne"],steps:["Step 1: Cut potatoes into chunks.","Step 2: Deep fry or roast until golden.","Step 3: Make spicy tomato salsa brava sauce.","Step 4: Arrange potatoes on plate.","Step 5: Pour sauce on top and serve."]},
 
// THAI
{id:59,name:"Pad Thai",type:"Chinese",diet:"nonveg",rating:4.9,time:"25 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Pad_thai_kung.jpg?width=640",ingredients:["Rice noodles","Shrimp","Tofu","Eggs","Bean sprouts","Tamarind","Fish sauce","Palm sugar","Peanuts"],steps:["Step 1: Soak noodles in warm water.","Step 2: Stir-fry shrimp and tofu.","Step 3: Push aside and scramble eggs.","Step 4: Add noodles and tamarind-fish sauce-sugar mix.","Step 5: Toss with bean sprouts and top with peanuts."]},
{id:60,name:"Green Curry",type:"Chinese",diet:"nonveg",rating:4.7,time:"35 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Thai_green_curry.jpg?width=640",ingredients:["Chicken","Coconut milk","Green curry paste","Thai basil","Fish sauce","Palm sugar","Lime leaves","Bamboo shoots"],steps:["Step 1: Fry green curry paste in thick coconut cream.","Step 2: Add chicken and coat in paste.","Step 3: Pour in remaining coconut milk.","Step 4: Add bamboo shoots and lime leaves.","Step 5: Season with fish sauce and sugar, garnish with basil."]},
{id:61,name:"Tom Yum Soup",type:"Chinese",diet:"nonveg",rating:4.7,time:"25 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Tom_yam_kung.JPG?width=640",ingredients:["Shrimp","Lemongrass","Galangal","Lime leaves","Fish sauce","Lime juice","Mushrooms","Chilli","Coriander"],steps:["Step 1: Simmer lemongrass, galangal and lime leaves in stock.","Step 2: Add mushrooms and shrimp.","Step 3: Season with fish sauce and lime juice.","Step 4: Add chillies to taste.","Step 5: Garnish with coriander and serve."]},
{id:62,name:"Mango Sticky Rice",type:"Chinese",diet:"veg",rating:4.8,time:"30 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mango_Sticky_Rice.jpg?width=640",ingredients:["Glutinous rice","Fresh mango","Coconut milk","Sugar","Salt","Sesame seeds"],steps:["Step 1: Soak glutinous rice overnight.","Step 2: Steam rice until cooked.","Step 3: Warm coconut milk with sugar and salt.","Step 4: Pour coconut sauce over rice.","Step 5: Serve with sliced fresh mango."]},
 
// TURKISH / MIDDLE EASTERN
{id:63,name:"Shawarma",type:"Indian",diet:"nonveg",rating:4.8,time:"50 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_shawarma_wrap.jpg?width=640",ingredients:["Chicken thighs","Pita bread","Garlic sauce","Tomato","Onion","Pickles","Shawarma spices","Olive oil"],steps:["Step 1: Marinate chicken in shawarma spice blend.","Step 2: Roast or grill until charred.","Step 3: Slice thinly.","Step 4: Warm pita bread.","Step 5: Fill with chicken, garlic sauce and vegetables."]},
{id:64,name:"Kebab",type:"Indian",diet:"nonveg",rating:4.7,time:"40 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Seekh_kebab.jpg?width=640",ingredients:["Minced meat","Onion","Garlic","Coriander","Chilli","Garam masala","Oil","Lemon","Mint"],steps:["Step 1: Mix meat with spices and refrigerate 1 hour.","Step 2: Shape around skewers.","Step 3: Grill on hot barbecue or griddle.","Step 4: Turn frequently until cooked through.","Step 5: Serve with mint chutney and flatbread."]},
{id:65,name:"Falafel",type:"Indian",diet:"veg",rating:4.6,time:"30 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Pita_Falafels.jpg?width=640",ingredients:["Chickpeas","Parsley","Garlic","Cumin","Coriander","Onion","Flour","Oil","Salt"],steps:["Step 1: Soak chickpeas overnight.","Step 2: Blend with herbs, garlic and spices.","Step 3: Add flour to bind.","Step 4: Shape into balls or patties.","Step 5: Deep fry until dark golden."]},
{id:66,name:"Baklava",type:"Indian",diet:"veg",rating:4.8,time:"60 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Baklava%281%29.jpg?width=640",ingredients:["Filo pastry","Walnuts","Pistachios","Butter","Sugar","Honey","Cinnamon","Rose water"],steps:["Step 1: Brush each filo sheet with butter.","Step 2: Layer with crushed nuts and cinnamon.","Step 3: Score into diamond shapes.","Step 4: Bake at 180°C for 35 minutes until golden.","Step 5: Pour cold honey-rose water syrup over hot baklava."]},
{id:67,name:"Hummus",type:"Indian",diet:"veg",rating:4.7,time:"15 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Hummus_from_The_Nile.jpg?width=640",ingredients:["Chickpeas","Tahini","Lemon","Garlic","Olive oil","Salt","Cumin","Paprika"],steps:["Step 1: Cook chickpeas until very soft.","Step 2: Blend with tahini, lemon and garlic.","Step 3: Add olive oil and blend until silky.","Step 4: Season with salt and cumin.","Step 5: Serve topped with olive oil and paprika."]},
 
// AMERICAN / WESTERN
{id:68,name:"Beef Burger",type:"Mexican",diet:"nonveg",rating:4.8,time:"25 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Cheeseburger.jpg?width=640",ingredients:["Ground beef","Burger bun","Cheese","Lettuce","Tomato","Onion","Pickles","Mustard","Ketchup"],steps:["Step 1: Form beef into patties with salt and pepper.","Step 2: Grill on high heat 3 minutes per side.","Step 3: Add cheese and melt.","Step 4: Toast buns on grill.","Step 5: Assemble with vegetables and sauces."]},
{id:69,name:"BBQ Ribs",type:"Mexican",diet:"nonveg",rating:4.9,time:"180 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/BBQ_Ribs.jpg?width=640",ingredients:["Pork ribs","BBQ sauce","Brown sugar","Paprika","Garlic powder","Salt","Cayenne","Apple juice"],steps:["Step 1: Remove membrane from ribs.","Step 2: Rub with dry spice mix.","Step 3: Bake low and slow at 135°C for 3 hours.","Step 4: Brush with BBQ sauce.","Step 5: Grill 5 minutes each side and serve."]},
{id:70,name:"Mac and Cheese",type:"Mexican",diet:"veg",rating:4.7,time:"30 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Macaroni_and_cheese_2.jpg?width=640",ingredients:["Macaroni","Cheddar","Butter","Flour","Milk","Salt","Mustard","Breadcrumbs"],steps:["Step 1: Boil macaroni until al dente.","Step 2: Make roux with butter and flour.","Step 3: Add milk to make béchamel.","Step 4: Melt cheese into sauce.","Step 5: Toss pasta in sauce, top with breadcrumbs and bake."]},
 
// GREEK
{id:71,name:"Moussaka",type:"French",diet:"nonveg",rating:4.7,time:"75 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Moussaka_2.jpg?width=640",ingredients:["Eggplant","Minced lamb","Tomatoes","Onion","Béchamel sauce","Cinnamon","Nutmeg","Cheese","Olive oil"],steps:["Step 1: Fry eggplant slices until golden.","Step 2: Make spiced lamb mince with tomatoes.","Step 3: Layer eggplant and meat sauce.","Step 4: Pour béchamel on top.","Step 5: Bake at 180°C for 45 minutes."]},
{id:72,name:"Greek Salad",type:"French",diet:"veg",rating:4.5,time:"10 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Greek_salad.jpg?width=640",ingredients:["Tomatoes","Cucumber","Feta cheese","Olives","Red onion","Olive oil","Oregano","Salt"],steps:["Step 1: Chop tomatoes and cucumber roughly.","Step 2: Slice red onion thinly.","Step 3: Add olives.","Step 4: Place slab of feta on top.","Step 5: Drizzle olive oil and sprinkle oregano."]},
{id:73,name:"Spanakopita",type:"French",diet:"veg",rating:4.6,time:"55 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/SpanakopitaSingle.jpg?width=640",ingredients:["Filo pastry","Spinach","Feta","Onion","Eggs","Olive oil","Dill","Butter"],steps:["Step 1: Sauté spinach with onion and dill.","Step 2: Mix with crumbled feta and eggs.","Step 3: Brush filo sheets with olive oil.","Step 4: Fill and fold into triangles.","Step 5: Bake at 180°C until golden and flaky."]},
 
// MOROCCAN / AFRICAN
{id:74,name:"Tagine",type:"Indian",diet:"nonveg",rating:4.7,time:"90 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/20121215_Marrakesch_Tagine_Gark%C3%BCche_0677.jpg?width=640",ingredients:["Lamb","Prunes","Almonds","Onion","Cinnamon","Ginger","Saffron","Honey","Coriander"],steps:["Step 1: Brown lamb pieces in olive oil.","Step 2: Add spiced onion base.","Step 3: Add stock, prunes and saffron.","Step 4: Cover and slow cook 1.5 hours.","Step 5: Garnish with almonds and coriander."]},
{id:75,name:"Jollof Rice",type:"Indian",diet:"veg",rating:4.7,time:"50 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Jollof_rice_with_fried_chicken_and_coleslaw.jpg?width=640",ingredients:["Long grain rice","Tomatoes","Bell peppers","Onion","Tomato paste","Scotch bonnet","Stock","Thyme","Bay leaf"],steps:["Step 1: Blend tomatoes, peppers and onion.","Step 2: Fry tomato paste and blended mixture.","Step 3: Add stock and bring to boil.","Step 4: Wash rice and add to pot.","Step 5: Cook covered on low heat until rice is done."]},
{id:76,name:"Egusi Soup",type:"Indian",diet:"nonveg",rating:4.5,time:"60 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Egusi_soup_on_a_Nigerian_plate.jpg?width=640",ingredients:["Ground egusi seeds","Leafy greens","Palm oil","Stockfish","Meat","Onion","Crayfish","Scotch bonnet"],steps:["Step 1: Fry egusi in palm oil until fragrant.","Step 2: Add meat and stockfish.","Step 3: Pour in stock.","Step 4: Simmer 30 minutes.","Step 5: Add greens and cook 10 more minutes."]},
 
// KOREAN
{id:77,name:"Bibimbap",type:"Chinese",diet:"veg",rating:4.8,time:"35 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Dolsot-bibimbap.jpg?width=640",ingredients:["Steamed rice","Spinach","Carrots","Bean sprouts","Zucchini","Mushrooms","Egg","Gochujang","Sesame oil"],steps:["Step 1: Prepare each vegetable separately by blanching or sautéing.","Step 2: Place rice in hot stone bowl.","Step 3: Arrange vegetables in sections on top.","Step 4: Place fried egg in centre.","Step 5: Add gochujang and sesame oil, mix before eating."]},
{id:78,name:"Kimchi Jjigae",type:"Chinese",diet:"nonveg",rating:4.7,time:"30 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Kimchi_jjigae.jpg?width=640",ingredients:["Kimchi","Pork belly","Tofu","Gochugaru","Onion","Garlic","Sesame oil","Anchovy stock"],steps:["Step 1: Fry pork belly in sesame oil.","Step 2: Add kimchi and fry 5 minutes.","Step 3: Pour in anchovy stock.","Step 4: Simmer 20 minutes.","Step 5: Add tofu and simmer 5 more minutes."]},
{id:79,name:"Korean Fried Chicken",type:"Chinese",diet:"nonveg",rating:4.8,time:"40 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Korean_Fried_Chicken_%28Yangnyeom_chicken%29.jpg?width=640",ingredients:["Chicken wings","Gochujang","Garlic","Soy sauce","Honey","Ginger","Cornstarch","Sesame seeds"],steps:["Step 1: Coat chicken in seasoned cornstarch.","Step 2: Double fry: 160°C then 190°C.","Step 3: Make sauce with gochujang, honey and garlic.","Step 4: Toss hot chicken in sauce.","Step 5: Garnish with sesame seeds and serve."]},
 
// VIETNAMESE
{id:80,name:"Pho",type:"Chinese",diet:"nonveg",rating:4.9,time:"90 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Pho_bo_2.jpg?width=640",ingredients:["Rice noodles","Beef","Star anise","Cinnamon","Ginger","Onion","Fish sauce","Bean sprouts","Basil","Lime"],steps:["Step 1: Char ginger and onion and add to broth.","Step 2: Simmer broth with star anise and cinnamon 2 hours.","Step 3: Season with fish sauce.","Step 4: Place noodles and raw beef slices in bowl.","Step 5: Pour boiling broth over to cook beef."]},
{id:81,name:"Banh Mi",type:"Chinese",diet:"nonveg",rating:4.7,time:"20 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Banh_mi_with_pork_and_vegetables.jpg?width=640",ingredients:["Baguette","Pork","Pate","Pickled daikon","Carrots","Jalapeño","Coriander","Mayonnaise","Soy sauce"],steps:["Step 1: Grill or pan-fry pork until caramelised.","Step 2: Slice baguette lengthwise.","Step 3: Spread pate and mayonnaise.","Step 4: Fill with pork and pickled vegetables.","Step 5: Top with jalapeño and coriander."]},
{id:82,name:"Goi Cuon (Fresh Rolls)",type:"Chinese",diet:"veg",rating:4.6,time:"25 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Vietnam_goi_cuon.jpg?width=640",ingredients:["Rice paper","Shrimp","Vermicelli","Lettuce","Mint","Coriander","Bean sprouts","Peanut sauce"],steps:["Step 1: Soak rice paper in warm water briefly.","Step 2: Lay flat and add vegetables and herbs.","Step 3: Add shrimp and vermicelli.","Step 4: Roll tightly tucking in sides.","Step 5: Serve with peanut dipping sauce."]},
 
// BRAZILIAN / LATIN
{id:83,name:"Feijoada",type:"Mexican",diet:"nonveg",rating:4.7,time:"120 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Feijoada.jpg?width=640",ingredients:["Black beans","Pork ribs","Sausage","Bacon","Bay leaf","Garlic","Onion","Orange peel","Rice"],steps:["Step 1: Soak black beans overnight.","Step 2: Brown pork ribs, sausage and bacon.","Step 3: Cook beans with meats in large pot.","Step 4: Add bay leaf, garlic and orange peel.","Step 5: Simmer 2 hours and serve with rice."]},
{id:84,name:"Empanadas",type:"Mexican",diet:"nonveg",rating:4.6,time:"50 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Baked_Empanada.jpg?width=640",ingredients:["Flour","Beef mince","Onion","Bell pepper","Olive","Hard boiled egg","Cumin","Paprika","Oil"],steps:["Step 1: Make pastry dough.","Step 2: Cook spiced beef filling with vegetables.","Step 3: Cut circles from pastry.","Step 4: Fill and fold, crimping edges.","Step 5: Bake at 200°C or deep fry until golden."]},
{id:85,name:"Ceviche",type:"Mexican",diet:"nonveg",rating:4.7,time:"20 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ceviche_made_from_corvina_fish.jpg?width=640",ingredients:["White fish","Lime juice","Red onion","Coriander","Jalapeño","Tomato","Salt","Corn","Sweet potato"],steps:["Step 1: Dice fresh fish finely.","Step 2: Cover in lime juice and leave 15 minutes.","Step 3: Add thinly sliced red onion.","Step 4: Add chilli, coriander and tomato.","Step 5: Serve cold with corn and sweet potato."]},
 
// ETHIOPIAN
{id:86,name:"Injera with Doro Wat",type:"Indian",diet:"nonveg",rating:4.7,time:"90 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ethiopian-meal.jpg?width=640",ingredients:["Teff injera","Chicken","Berbere spice","Niter kibbeh","Onion","Hard boiled egg","Garlic","Ginger"],steps:["Step 1: Slow cook vast quantity of onion in dry pan.","Step 2: Add niter kibbeh, berbere and garlic.","Step 3: Add chicken and hard-boiled eggs.","Step 4: Simmer 40 minutes.","Step 5: Serve on spongy injera for scooping."]},
 
// INDONESIAN / MALAYSIAN
{id:87,name:"Nasi Goreng",type:"Chinese",diet:"nonveg",rating:4.8,time:"20 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Nasi_goreng_USA.jpg?width=640",ingredients:["Cooked rice","Egg","Chicken","Kecap manis","Shrimp paste","Shallots","Garlic","Chilli","Prawn crackers"],steps:["Step 1: Fry shallots, garlic and shrimp paste.","Step 2: Add chicken and stir-fry.","Step 3: Add day-old rice and toss.","Step 4: Add kecap manis and chilli.","Step 5: Top with fried egg and prawn crackers."]},
{id:88,name:"Satay",type:"Chinese",diet:"nonveg",rating:4.7,time:"35 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Satay_%28food%29_-_Bali.jpg?width=640",ingredients:["Chicken","Lemongrass","Turmeric","Coconut milk","Peanut sauce","Soy sauce","Cumin","Coriander"],steps:["Step 1: Marinate chicken in spices and coconut milk.","Step 2: Thread onto bamboo skewers.","Step 3: Grill over charcoal until charred.","Step 4: Prepare peanut sauce with peanuts and coconut milk.","Step 5: Serve with peanut sauce and cucumber."]},
{id:89,name:"Rendang",type:"Chinese",diet:"nonveg",rating:4.9,time:"150 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Rendang_daging.jpg?width=640",ingredients:["Beef","Coconut milk","Lemongrass","Galangal","Kaffir lime","Shallots","Garlic","Chilli","Turmeric"],steps:["Step 1: Blend spice paste and fry until fragrant.","Step 2: Brown beef in paste.","Step 3: Add coconut milk and lemongrass.","Step 4: Cook on low 2.5 hours until liquid is absorbed.","Step 5: Fry dry until dark brown and serve."]},
 
// PERUVIAN
{id:90,name:"Lomo Saltado",type:"Mexican",diet:"nonveg",rating:4.6,time:"30 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Lomo_saltado.jpg?width=640",ingredients:["Beef stir fry","Tomatoes","Red onion","Soy sauce","Vinegar","Chips","Rice","Coriander","Garlic"],steps:["Step 1: Stir-fry beef strips on very high heat.","Step 2: Add onion and tomatoes, keep stirring.","Step 3: Add soy sauce and vinegar.","Step 4: Toss with cooked chips.","Step 5: Serve alongside white rice."]},
 
// ARGENTINIAN
{id:91,name:"Asado",type:"Mexican",diet:"nonveg",rating:4.9,time:"120 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Asado-Arg.jpg?width=640",ingredients:["Beef ribs","Chorizo","Morcilla","Chimichurri","Salt","Lemon","Wood charcoal"],steps:["Step 1: Light wood charcoal fire early.","Step 2: Salt meat generously.","Step 3: Grill chorizo and morcilla first.","Step 4: Place ribs fat-side up for slow cooking.","Step 5: Serve with chimichurri sauce."]},
 
// RUSSIAN / EASTERN EUROPEAN
{id:92,name:"Beef Stroganoff",type:"French",diet:"nonveg",rating:4.7,time:"35 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Beef_Stroganoff.jpg?width=640",ingredients:["Beef strips","Mushrooms","Onion","Sour cream","Beef stock","Flour","Butter","Dijon mustard","Parsley"],steps:["Step 1: Sear beef strips quickly in butter.","Step 2: Sauté onion and mushrooms.","Step 3: Add flour and stock to make sauce.","Step 4: Stir in sour cream and mustard.","Step 5: Serve over egg noodles or rice."]},
{id:93,name:"Borscht",type:"French",diet:"veg",rating:4.5,time:"50 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Borscht_served.jpg?width=640",ingredients:["Beetroot","Cabbage","Carrots","Potatoes","Onion","Tomatoes","Sour cream","Dill","Stock"],steps:["Step 1: Roast or grate beetroot.","Step 2: Sauté onion, carrots and add tomatoes.","Step 3: Add stock, cabbage and potatoes.","Step 4: Add beetroot and simmer 30 minutes.","Step 5: Serve with a dollop of sour cream and dill."]},
 
// GERMAN
{id:94,name:"Schnitzel",type:"French",diet:"nonveg",rating:4.7,time:"25 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Schnitzel.JPG?width=640",ingredients:["Veal or pork","Breadcrumbs","Egg","Flour","Lemon","Butter","Parsley","Salt","Pepper"],steps:["Step 1: Pound meat until very thin.","Step 2: Coat in flour, beaten egg then breadcrumbs.","Step 3: Fry in hot butter/oil until golden.","Step 4: Do not press or flip too early.","Step 5: Drain and serve with lemon wedge."]},
{id:95,name:"Pretzels",type:"French",diet:"veg",rating:4.5,time:"60 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Wolfgang_pretzel.jpg?width=640",ingredients:["Flour","Yeast","Salt","Baking soda","Butter","Coarse salt","Warm water","Sugar"],steps:["Step 1: Make yeasted dough and let rise 1 hour.","Step 2: Roll into long ropes.","Step 3: Twist into pretzel shape.","Step 4: Dip in baking soda water briefly.","Step 5: Scatter coarse salt and bake at 220°C until deep brown."]},
 
// BRITISH
{id:96,name:"Fish and Chips",type:"French",diet:"nonveg",rating:4.7,time:"40 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Fish_and_chips_blackpool.jpg?width=640",ingredients:["Cod fillet","Potatoes","Beer batter","Flour","Salt","Malt vinegar","Mushy peas","Tartar sauce"],steps:["Step 1: Cut potatoes into thick chips and parboil.","Step 2: Make batter with flour and cold beer.","Step 3: Coat fish in batter.","Step 4: Fry chips first then fish until golden.","Step 5: Drain and serve with vinegar and tartar sauce."]},
{id:97,name:"Shepherd's Pie",type:"French",diet:"nonveg",rating:4.6,time:"60 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Shepherd%27s_Pie.jpg?width=640",ingredients:["Minced lamb","Potatoes","Onion","Carrots","Peas","Tomato paste","Stock","Butter","Rosemary"],steps:["Step 1: Brown lamb mince with onion and carrots.","Step 2: Add tomato paste, stock and herbs.","Step 3: Make creamy mashed potato.","Step 4: Spread meat in dish and top with mash.","Step 5: Bake at 200°C until top is golden."]},
 
// PERSIAN
{id:98,name:"Ghormeh Sabzi",type:"Indian",diet:"nonveg",rating:4.8,time:"90 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ghormeh_Sabzi.jpg?width=640",ingredients:["Lamb","Kidney beans","Dried limes","Fenugreek","Parsley","Coriander","Turmeric","Onion","Saffron"],steps:["Step 1: Fry large amount of herbs until dark.","Step 2: Brown lamb and onion.","Step 3: Add kidney beans and dried limes.","Step 4: Add fried herbs and stock.","Step 5: Simmer 1.5 hours and serve with rice."]},
{id:99,name:"Joojeh Kabab",type:"Indian",diet:"nonveg",rating:4.7,time:"45 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Jujeh_kabab.jpg?width=640",ingredients:["Chicken","Saffron","Lemon","Onion","Olive oil","Salt","Pepper","Butter"],steps:["Step 1: Marinate chicken in saffron, lemon and onion.","Step 2: Leave overnight for best flavour.","Step 3: Thread onto skewers.","Step 4: Grill over hot charcoal, basting with butter.","Step 5: Serve with saffron rice and grilled tomatoes."]},
 
// CAMBODIAN / SOUTH EAST ASIAN
{id:100,name:"Amok Fish",type:"Chinese",diet:"nonveg",rating:4.6,time:"45 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Amok_fish.jpg?width=640",ingredients:["White fish","Coconut milk","Kroeung paste","Egg","Kaffir lime","Fish sauce","Palm sugar","Banana leaves"],steps:["Step 1: Make kroeung paste from lemongrass, galangal, turmeric.","Step 2: Mix fish with paste and coconut milk.","Step 3: Add egg and fish sauce.","Step 4: Pour into banana leaf cups.","Step 5: Steam 20 minutes until set."]},
{id:101,name:"Laksa",type:"Chinese",diet:"nonveg",rating:4.8,time:"40 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Singapore_Laksa.jpg?width=640",ingredients:["Rice noodles","Coconut milk","Shrimp","Tofu","Bean sprouts","Laksa paste","Lemongrass","Lime","Coriander"],steps:["Step 1: Fry laksa paste and lemongrass until fragrant.","Step 2: Add coconut milk and stock.","Step 3: Add shrimp and tofu, simmer.","Step 4: Cook noodles separately.","Step 5: Ladle soup over noodles, top with sprouts and herbs."]},
{id:102,name:"Beef Pho Bo",type:"Chinese",diet:"nonveg",rating:4.9,time:"120 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Vietnamese_pho.jpg?width=640",ingredients:["Beef bones","Rice noodles","Star anise","Clove","Cinnamon","Ginger","Fish sauce","Lime","Chilli"],steps:["Step 1: Blanch and roast beef bones.","Step 2: Simmer with spices and charred ginger 3 hours.","Step 3: Strain the broth.","Step 4: Season with fish sauce.","Step 5: Serve over noodles with herbs and lime on side."]},
{id:103,name:"Butter Garlic Prawns",type:"Indian",diet:"nonveg",rating:4.7,time:"20 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Gambas_al_ajillo.jpg?width=640",ingredients:["Prawns","Butter","Garlic","Lemon","Chilli","Parsley","Salt","Pepper","White wine"],steps:["Step 1: Clean and devein prawns.","Step 2: Heat butter in pan until foaming.","Step 3: Add garlic and chilli.","Step 4: Add prawns and cook 2 minutes each side.","Step 5: Deglaze with wine and lemon, garnish parsley."]},
{id:104,name:"Lamb Kofta",type:"Indian",diet:"nonveg",rating:4.6,time:"35 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Kofta.jpg?width=640",ingredients:["Minced lamb","Onion","Parsley","Cumin","Coriander","Cinnamon","Chilli","Garlic","Egg"],steps:["Step 1: Mix lamb with all herbs and spices.","Step 2: Add egg to bind.","Step 3: Shape onto long skewers.","Step 4: Grill on hot barbecue turning often.","Step 5: Serve with flatbread, yogurt and salad."]},
{id:105,name:"Beef Tacos",type:"Mexican",diet:"nonveg",rating:4.7,time:"25 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/001_Tacos_de_carnitas%2C_carne_asada%2C_al_pastor.jpg?width=640",ingredients:["Ground beef","Corn tortillas","Onion","Garlic","Cumin","Chilli","Salsa","Cheese","Lettuce","Sour cream"],steps:["Step 1: Brown beef with onion, garlic and spices.","Step 2: Warm tortillas directly on flame.","Step 3: Fill tortillas with beef.","Step 4: Top with cheese and salsa.","Step 5: Finish with lettuce and sour cream."]},
{id:106,name:"Mole Sauce Chicken",type:"Mexican",diet:"nonveg",rating:4.7,time:"80 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mole_sauce.jpg?width=640",ingredients:["Chicken","Dried chillies","Dark chocolate","Tomatoes","Onion","Garlic","Cumin","Cinnamon","Sesame seeds"],steps:["Step 1: Toast and soak dried chillies.","Step 2: Blend chillies with tomatoes, spices and chocolate.","Step 3: Fry mole paste in oil until fragrant.","Step 4: Add chicken and stock.","Step 5: Simmer 1 hour until thick and dark."]},
{id:107,name:"Chana Masala",type:"Indian",diet:"veg",rating:4.7,time:"40 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Chana_masala_%28Chickpea_curry%29.jpg?width=640",ingredients:["Chickpeas","Tomatoes","Onion","Ginger","Garlic","Chole masala","Chilli","Oil","Coriander"],steps:["Step 1: Soak and pressure cook chickpeas.","Step 2: Fry onion, ginger and garlic until golden.","Step 3: Add tomatoes and masala, cook down.","Step 4: Add chickpeas and water.","Step 5: Simmer 20 minutes, garnish with coriander."]},
{id:108,name:"Paneer Tikka",type:"Indian",diet:"veg",rating:4.7,time:"35 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Paneer_tikka.jpg?width=640",ingredients:["Paneer","Yogurt","Tandoori masala","Bell peppers","Onion","Lemon","Oil","Chaat masala"],steps:["Step 1: Cut paneer into cubes.","Step 2: Marinate with yogurt and spices 2 hours.","Step 3: Thread with peppers and onion onto skewers.","Step 4: Grill or bake at 220°C until charred.","Step 5: Sprinkle chaat masala and serve with chutney."]},
{id:109,name:"Pulao",type:"Indian",diet:"veg",rating:4.5,time:"35 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Pulao_rice.jpg?width=640",ingredients:["Basmati rice","Whole spices","Onion","Ghee","Peas","Carrots","Stock","Salt","Coriander"],steps:["Step 1: Fry whole spices in ghee.","Step 2: Add onion and cook golden.","Step 3: Add vegetables.","Step 4: Add washed rice and hot stock.","Step 5: Cook covered on low heat 18 minutes."]},
{id:110,name:"Qorma",type:"Pakistani",diet:"nonveg",rating:4.8,time:"70 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_korma.jpg?width=640",ingredients:["Chicken","Yogurt","Onion","Ghee","Cardamom","Cinnamon","Cloves","Cream","Saffron","Almonds"],steps:["Step 1: Fry onion in ghee until golden brown.","Step 2: Add whole spices.","Step 3: Add chicken and yogurt.","Step 4: Cook covered until tender.","Step 5: Finish with cream, saffron and almonds."]},
{id:111,name:"Seekh Kebab",type:"Pakistani",diet:"nonveg",rating:4.7,time:"30 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Sheek_kebab.jpg?width=640",ingredients:["Minced beef","Onion","Chilli","Coriander","Ginger","Garlic","Cumin","Ghee","Garam masala"],steps:["Step 1: Mix mince with all spices.","Step 2: Leave in fridge 30 minutes.","Step 3: Wrap tightly around flat skewers.","Step 4: Grill on charcoal or grill pan.","Step 5: Serve with green chutney and naan."]},
{id:112,name:"Dal Tadka",type:"Indian",diet:"veg",rating:4.6,time:"35 min",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Dal_Tadka.jpg?width=640",ingredients:["Yellow lentils","Ghee","Cumin","Garlic","Dried red chilli","Tomatoes","Turmeric","Coriander","Onion"],steps:["Step 1: Boil lentils with turmeric until soft.","Step 2: Prepare tadka: fry cumin and garlic in ghee.","Step 3: Add dried chilli and onion.","Step 4: Add tomatoes and cook 5 minutes.","Step 5: Pour tadka over lentils and serve with rice."]}
];
 
/* WISHLIST */
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
 
/* STATE */
let currentSearch = "";
let currentFilter = "all";
let currentCategory = "all";
let currentView = "home"; // "home" | "wishlist" | "recipe"
 
/* RENDER HOME */
function render(){
let home = document.getElementById("home");
home.innerHTML = "";
 
let visible = foods.filter(f => {
let matchesSearch = f.name.toLowerCase().includes(currentSearch.toLowerCase());
let matchesFilter =
currentFilter === "all" ||
(currentFilter === "veg" && f.diet === "veg") ||
(currentFilter === "nonveg" && f.diet === "nonveg") ||
(currentFilter === "pureveg" && f.diet === "veg");
let matchesCategory =
currentCategory === "all" || f.type === currentCategory;
return matchesSearch && matchesFilter && matchesCategory;
});
 
if(visible.length === 0){
home.innerHTML = `<p style="grid-column:1/-1;padding:30px;text-align:center;color:#777;font-size:16px">No recipes found. Try a different search or filter.</p>`;
return;
}
 
visible.forEach(f => {
home.innerHTML += `
<div class="card" style="position:relative">
<img src="${f.img}" onclick="openRecipe(${f.id})" style="cursor:pointer" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/220x170/e63950/ffffff?text=' + encodeURIComponent(this.alt);" alt="${f.name}">
<div class="heart" onclick="toggleWish(event,${f.id})" title="${wishlist.includes(f.id) ? 'Remove from wishlist' : 'Add to wishlist'}">
${wishlist.includes(f.id) ? "❤" : "♡"}
</div>
<div style="padding:10px">
<b>${f.name}</b><br>
⭐ ${f.rating} &nbsp;|&nbsp; ⏱ ${f.time}<br>
<small style="color:#888">${f.type} • ${f.diet === "nonveg" ? "🍖 Non-Veg" : "🌿 Veg"}</small>
</div>
</div>
`;
});
}
 
/* TOGGLE WISHLIST */
function toggleWish(e, id){
e.stopPropagation();
if(wishlist.includes(id)){
wishlist = wishlist.filter(x => x !== id);
} else {
wishlist.push(id);
}
localStorage.setItem("wishlist", JSON.stringify(wishlist));
render();
if(currentView === "wishlist") renderWishlistPage();
}
 
/* OPEN WISHLIST PAGE */
function openWishlist(){
currentView = "wishlist";
document.getElementById("home").style.display = "none";
document.getElementById("recipePage").style.display = "none";
document.getElementById("wishlistPage").style.display = "block";
renderWishlistPage();
}
 
/* RENDER WISHLIST PAGE */
function renderWishlistPage(){
let page = document.getElementById("wishlistPage");
let savedFoods = foods.filter(f => wishlist.includes(f.id));
 
if(savedFoods.length === 0){
page.innerHTML = `
<div style="text-align:center;padding:60px 20px;color:#777">
<div style="font-size:50px;margin-bottom:15px">♡</div>
<h2>Your Wishlist is Empty</h2>
<p>Tap the ♡ on any dish to save it here.</p>
<button onclick="closeWishlist()" style="margin-top:20px;padding:12px 30px;font-size:16px;border-radius:8px;border:none;background:#e63950;color:white;cursor:pointer">← Back to Home</button>
</div>`;
return;
}
 
let html = `
<div style="padding:15px 15px 5px;display:flex;align-items:center;justify-content:space-between">
<h2 style="margin:0">❤ My Wishlist (${savedFoods.length})</h2>
<button onclick="closeWishlist()" style="padding:10px 20px;font-size:15px;border-radius:8px;border:2px solid #ccc;background:white;cursor:pointer">← Back</button>
</div>
<div class="grid" style="display:grid">`;
 
savedFoods.forEach(f => {
html += `
<div class="card" style="position:relative">
<img src="${f.img}" onclick="openRecipeFromWishlist(${f.id})" style="cursor:pointer" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/220x170/e63950/ffffff?text=' + encodeURIComponent(this.alt);" alt="${f.name}">
<div class="remove-x" onclick="removeFromWishlist(event,${f.id})" title="Remove from wishlist">✕</div>
<div style="padding:10px">
<b>${f.name}</b><br>
⭐ ${f.rating} &nbsp;|&nbsp; ⏱ ${f.time}<br>
<small style="color:#888">${f.type} • ${f.diet === "nonveg" ? "🍖 Non-Veg" : "🌿 Veg"}</small>
</div>
</div>`;
});
 
html += `</div>`;
page.innerHTML = html;
}
 
/* REMOVE FROM WISHLIST */
function removeFromWishlist(e, id){
e.stopPropagation();
wishlist = wishlist.filter(x => x !== id);
localStorage.setItem("wishlist", JSON.stringify(wishlist));
render();
renderWishlistPage();
}
 
/* CLOSE WISHLIST */
function closeWishlist(){
currentView = "home";
document.getElementById("wishlistPage").style.display = "none";
document.getElementById("home").style.display = "grid";
}
 
/* OPEN RECIPE FROM WISHLIST */
function openRecipeFromWishlist(id){
openRecipe(id, true);
}
 
/* OPEN RECIPE */
function openRecipe(id, fromWishlist = false){
let f = foods.find(x => x.id === id);
document.getElementById("home").style.display = "none";
document.getElementById("wishlistPage").style.display = "none";
let page = document.getElementById("recipePage");
page.style.display = "block";
 
page.innerHTML = `
<div class="center">
<div class="back" onclick="${fromWishlist ? 'closeRecipeToWishlist()' : 'closeRecipe()'}">← Back</div>
<h1>${f.name}</h1>
<img src="${f.img}" style="width:300px;border-radius:10px;object-fit:cover;height:220px" onerror="this.onerror=null;this.src='https://placehold.co/300x220/e63950/ffffff?text=' + encodeURIComponent(this.alt);" alt="${f.name}">
<p>⭐ ${f.rating} &nbsp; ⏱ ${f.time} &nbsp; ${f.diet === "nonveg" ? "🍖 Non-Veg" : "🌿 Veg"}</p>
<p style="color:#888">${f.type} Cuisine</p>
<h3>Ingredients</h3>
<p>${f.ingredients.map(i => "• " + i).join("<br>")}</p>
<h3>Steps</h3>
<p>${f.steps.map(i => "• " + i).join("<br>")}</p>
<div style="margin-top:20px">
<button onclick="toggleWishFromRecipe(${f.id})" id="wishBtn_${f.id}" style="padding:12px 25px;font-size:16px;border-radius:8px;border:2px solid #e63950;background:${wishlist.includes(f.id) ? '#e63950' : 'white'};color:${wishlist.includes(f.id) ? 'white' : '#e63950'};cursor:pointer">
${wishlist.includes(f.id) ? "❤ Saved to Wishlist" : "♡ Add to Wishlist"}
</button>
</div>
</div>
`;
}
 
/* TOGGLE WISHLIST FROM RECIPE PAGE */
function toggleWishFromRecipe(id){
if(wishlist.includes(id)){
wishlist = wishlist.filter(x => x !== id);
} else {
wishlist.push(id);
}
localStorage.setItem("wishlist", JSON.stringify(wishlist));
render();
let btn = document.getElementById("wishBtn_" + id);
if(btn){
btn.style.background = wishlist.includes(id) ? "#e63950" : "white";
btn.style.color = wishlist.includes(id) ? "white" : "#e63950";
btn.innerHTML = wishlist.includes(id) ? "❤ Saved to Wishlist" : "♡ Add to Wishlist";
}
}
 
/* CLOSE RECIPE */
function closeRecipe(){
currentView = "home";
document.getElementById("home").style.display = "grid";
document.getElementById("recipePage").style.display = "none";
}
 
/* CLOSE RECIPE BACK TO WISHLIST */
function closeRecipeToWishlist(){
currentView = "wishlist";
document.getElementById("wishlistPage").style.display = "block";
document.getElementById("recipePage").style.display = "none";
renderWishlistPage();
}
 
/* FILTER & CATEGORY */
function setFilter(value){
currentFilter = value;
render();
}
function setCategory(value){
currentCategory = value;
render();
}
 
/* SEARCH */
document.getElementById("search").addEventListener("input", function(e){
currentSearch = e.target.value;
render();
});
 
/* ===================== SETTINGS PANEL ===================== */
let settings = JSON.parse(localStorage.getItem("settings")) || { theme: "light", user: null };
 
function applySettings(){
document.body.setAttribute("data-theme", settings.theme);
let lightBtn = document.getElementById("themeLightBtn");
let darkBtn = document.getElementById("themeDarkBtn");
if(lightBtn && darkBtn){
lightBtn.classList.toggle("active", settings.theme === "light");
darkBtn.classList.toggle("active", settings.theme === "dark");
}
renderAccountSection();
}
 
function openSettings(){
document.getElementById("settingsPanel").classList.add("open");
document.getElementById("settingsOverlay").classList.add("show");
}
 
function closeSettings(){
document.getElementById("settingsPanel").classList.remove("open");
document.getElementById("settingsOverlay").classList.remove("show");
}
 
function setTheme(theme){
settings.theme = theme;
localStorage.setItem("settings", JSON.stringify(settings));
applySettings();
}
 
/* ACCOUNT (local-only sign in, no server) */
function renderAccountSection(){
let box = document.getElementById("accountBox");
if(!box) return;
if(settings.user){
box.innerHTML = `
<div class="account-row">
<div class="account-avatar">${settings.user.charAt(0).toUpperCase()}</div>
<div>
<b>${settings.user}</b><br>
<a href="#" onclick="signOut();return false;" class="signout-link">Sign out</a>
</div>
</div>`;
} else {
box.innerHTML = `
<input id="loginName" type="text" placeholder="Your name" class="settings-input" onkeydown="if(event.key==='Enter')signIn()">
<button onclick="signIn()" class="settings-btn">Sign In</button>
<p class="settings-note">Saved on this device only — there's no account server, so this just personalises CookSphere for you here.</p>`;
}
}
 
function signIn(){
let input = document.getElementById("loginName");
let name = input ? input.value.trim() : "";
if(!name){ alert("Please enter your name to sign in."); return; }
settings.user = name;
localStorage.setItem("settings", JSON.stringify(settings));
renderAccountSection();
}
 
function signOut(){
settings.user = null;
localStorage.setItem("settings", JSON.stringify(settings));
renderAccountSection();
}
 
/* CLEAR WISHLIST (extra setting) */
function clearWishlistData(){
if(wishlist.length === 0){
alert("Your wishlist is already empty.");
return;
}
if(confirm("Remove all saved recipes from your wishlist? This can't be undone.")){
wishlist = [];
localStorage.setItem("wishlist", JSON.stringify(wishlist));
render();
if(currentView === "wishlist") renderWishlistPage();
}
}
 
/* INIT */
render();
applySettings();