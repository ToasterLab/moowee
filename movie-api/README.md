# movie-api

    yarn build:dev
    yarn build:prod
    serverless deploy

## OMDb

[/OMDb?title={movie_title}](https://us-central1-general-192213.cloudfunctions.net/OMDb?title=Hot%20Fuzz)

    {
      "code": 200,
      "result": [
        {
          "title": "Hot Fuzz",
          "year": "2007",
          "imdbID": "tt0425112",
          "type": "movie",
          "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzg4MDJhMDMtYmJiMS00ZDZmLThmZWUtYTMwZDM1YTc5MWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        },
        {
          "title": "Hot Fuzz Special",
          "year": "2007",
          "imdbID": "tt0963176",
          "type": "movie",
          "poster": "N/A"
        },
        {
          "title": "'Hot Fuzz': The Fuzzball Rally",
          "year": "2007",
          "imdbID": "tt1164544",
          "type": "movie",
          "poster": "N/A"
        },
        {
          "title": "Hot Fuzz: Hot Funk: The TV Version",
          "year": "2007",
          "imdbID": "tt6368504",
          "type": "movie",
          "poster": "N/A"
        }
      ]
    }

## Common Sense Media

[/CommonSenseMedia?title={movie_title}](https://us-central1-general-192213.cloudfunctions.net/CommonSenseMedia)

    {
      "code": 200,
      "result": {
        "age": "age 12+",
        "parentsSay": "age 11+",
        "kidsSay": "age 11+",
        "oneLiner": "Lots of fun, but too scary for some kids.",
        "parentsNeedToKnow": "Parents need to know that comic mayhem and gross-out creatures from other planets define Men in Black. Scary creatures and life-threatening situations are frequent. The film, however, is as clever as it is exaggerated; some of the most destructive violence is implied, happening just off-camera. Still, young or sensitive kids who can't readily distinguish fantasy from reality may be disturbed by the barrage of exploding insects, grotesque morphing from human to alien life form, and cartoon violence (characters blow up, are vaporized, stabbed, shot with ray guns, and more). There's plenty of swearing (\"damn,\" \"goddamn,\" \"bastard,\" \"hell,\" \"s--t\") and a few insults, including \"d--k\" and \"pr--k\"). \n",
        "inThisMovie": {
          "message": {
              "rating": 1,
              "text": "Good triumphs over evil. Comically engenders a belief that if Earth were invaded by alien life forms, the situation would be controllable.\n"
          },
          "violence": {
              "rating": 4,
              "text": "All cartoon, all the time. Nothing is meant to be taken seriously, but rather to shock and awe the viewer with comic horror and laughter. Heads roll (literally), and there are explosions, crashes, stabbings, shootings, futuristic weapons. The \"ewww\" factor is high, as insects with massive tentacles capture humans; slimy creatures erupt into blue goo; a giant bug swallows one of the leads and spits him up later; a woman gives birth to a squid; a vacuum-hose is forced down a man's throat; bizarre-looking humans morph into all manner of even more bizarre creatures.\n \n"
          },
          "model": {
              "rating": 4,
              "text": "The heroes are flawless -- good, brave, highly intelligent, loyal, and strong. Lots of both ethnic and \"interplanetary\" diversity. Few women appear: A verbally abused wife and a sexy doctor are the only featured females.\n"
          },
          "sex": {
              "rating": 0,
              "text": "Some mild innuendo and flirting between one of the heroes and the very attractive (and sexy) female coroner.\n \n"
          },
          "language": {
              "rating": 3,
              "text": "Frequent swearing and mild profanity: \"goddamn,\" \"s--t,\" \"ass,\" \"bastard,\" hell,\" \"butt,\" \"pissed off.\"  \"D--k\" and \"pr--k\" are used as insults.\n"
          },
          "consumerism": {
              "rating": 1,
              "text": "Marlboro cigarettes, Gold's Gym, Bloomingdale's, Ford.\n \n"
          },
          "drugs": {
              "rating": 1,
              "text": "A running joke shows a species of small, slimy, highly literate insects as heavy smokers.\n \n"
          }
        },
        "familyTopics": "Families can talk about Men in Black's over-the-top weapons and violence. Does any of it seem real? Why or why not?\n\nFamilies can also discuss aliens. Do you think that there are other intelligent creatures out there?\n\nCan you see why Men in Black spawned the sequels Men in Black II and Men in Black III? Would you like the series to continue?\n\n"
      }
    }

## Rotten Tomatoes

[/RottenTomatoes?title={movie_title}](https://us-central1-general-192213.cloudfunctions.net/RottenTomatoes?title=Paddington%202)

    {
      "code": 200,
      "result": {
        "title": "Paddington 2",
        "image": "https://resizing.flixster.com/MLaVsS51Yo5Gn4v-yFuCNsxnSS4=/1733x1000/v1.bjsxNzg1Mzk3O2o7MTc2NjA7MTIwMDsxNzMzOzEwMDA",
        "contentRating": "PG",
        "url": "https://www.rottentomatoes.com/m/paddington_2",
        "productionCompany": "Warner Bros. Pictures",
        "aggregateRating": {
          "ratingValue": 100,
          "bestRating": "100",
          "worstRating": "0",
          "reviewCount": 192,
          "name": "Tomatometer",
          "description": "The Tomatometer rating – based on the published opinions of hundreds of film and television critics – is a trusted measurement of movie and TV programming quality for millions of moviegoers. It represents the percentage of professional critic reviews that are positive for a given film or television show."
        },
        "review": [
          {
            "url": "https://www.chicagoreader.com/Bleader/archives/2018/01/31/in-praise-of-the-acting-in-paddington-2c",
            "body": "The Paddington films preach a message of acceptance that's no less straightforward than that of The Shape of Water, encouraging viewers to share in the hero's tolerant worldview. ",
            "dateCreated": "2018-02-01T03:24:56-08:00",
            "author": {
              "name": "Ben Sachs"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "Chicago Reader",
              "url": "https://www.rottentomatoes.com/source-66"
            }
          },
          {
            "url": "https://www.arcamax.com/entertainment/entertainmenttoday/s-2038060?print",
            "body": "A dash of Wes Anderson and a sprinkle of Jean-Pierre Jeunet, swirled around with a wonderfully fluid sense of airiness and light. It's mannered, yet carefree, colorful, and evocative. ",
            "dateCreated": "2018-01-24T16:08:29-08:00",
            "author": {
              "name": "Katie Walsh"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "Tribune News Service",
              "url": "https://www.rottentomatoes.com/source-2448"
            }
          },
          {
            "url": "https://www.csmonitor.com/The-Culture/Movies/2018/0118/An-optimistic-bear-returns-in-transcendentally-cheerful-Paddington-2",
            "body": "A movie that promotes the importance of family and good manners might seem like it could become the squarest of snoozes, but Paddington 2 is so transcendentally cheerful that it carries the day - and then some. ",
            "dateCreated": "2018-01-19T04:03:00-08:00",
            "author": {
              "name": "Peter Rainer"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "Christian Science Monitor",
              "url": "https://www.rottentomatoes.com/source-71"
            }
          },
          {
            "url": "https://www.newsday.com/entertainment/movies/paddington-2-review-1.16070933",
            "body": "All in all, \"Paddington 2\" has a warmth and wit that's missing from many a children's movie. Don't let your January go by without it.",
            "dateCreated": "2018-01-17T08:18:10-08:00",
            "author": {
              "name": "Rafer Guzman"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "Newsday",
              "url": "https://www.rottentomatoes.com/source-338"
            }
          },
          {
            "url": "https://www.newyorker.com/culture/richard-brody/the-chilling-sweetness-of-paddington-2?mbid=social_twitter",
            "body": "[Paddington 2] has one out-loud laugh, plenty of sincere cleverness, vast technical ingenuity, a warm heart, lively performances and enough gyroscopic camera moves to make Max Ophüls jealous.",
            "dateCreated": "2018-01-16T08:20:39-08:00",
            "author": {
              "name": "Richard Brody"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "New Yorker",
              "url": "https://www.rottentomatoes.com/source-924"
            }
          },
          {
            "url": "http://www.reelviews.net/reelviews/paddington-2",
            "body": "This is one sequel it's a pleasure to review.",
            "dateCreated": "2018-01-15T06:36:03-08:00",
            "author": {
              "name": "James Berardinelli"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "ReelViews",
              "url": "https://www.rottentomatoes.com/source-387"
            }
          },
          {
            "url": "his film feels like watching a series of fight sequences that are loosely connected by a wafer thin plot.",
            "body": "How can you possibly match or even top that splendid soiree for the Peruvian bear? You'd think it would be an impossible task, but marvellously King has somehow shocked us once more.",
            "dateCreated": "2018-03-06T03:34:10-08:00",
            "author": {
              "name": "Andrew Pollard"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "Starburst",
              "url": "https://www.rottentomatoes.com/source-2424"
            }
          },
          {
            "url": "https://www.filmcomment.com/blog/deep-focus-paddington-2/",
            "body": "Is anything as improbable as a \"feel-good\" movie that actually leaves us feeling terrific? How about two of them in the same series?",
            "dateCreated": "2018-03-02T05:30:45-08:00",
            "author": {
              "name": "Michael Sragow"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "Film Comment Magazine",
              "url": "https://www.rottentomatoes.com/source-165"
            }
          },
          {
            "url": "http://www.letraslibres.com/espana-mexico/cinetv/paddington-el-oso-antibrexit",
            "body": "Well worth a marmalade sandwich. [Full Review in Spanish]",
            "dateCreated": "2018-02-26T05:04:26-08:00",
            "author": {
              "name": "Mauricio González Lara"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "Letras Libres",
              "url": "https://www.rottentomatoes.com/source-2613"
            }
          },
          {
            "url": "http://www.eluniversal.com.mx/alejandro-aleman/paddington-2-la-imaginacion-en-los-tiempos-del-brexit",
            "body": "Paddington 2 is not only an intelligent, fun and funny film, but now, in the times of Brexit, it has become counterculture. [Full Review in Spanish] ",
            "dateCreated": "2018-02-26T02:07:57-08:00",
            "author": {
              "name": "Alejandro Alemán"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "El Universal",
              "url": "https://www.rottentomatoes.com/source-2616"
            }
          },
          {
            "url": "https://www.youtube.com/watch?v=hyNkSbHar_Q&list=PLmjlrKRuaQAI7Job9Fv4cvaN-P0_O2lrF&index=4",
            "body": "It's just so charming and cute and adorable. It paces itself well, it takes it's time. It respects the original source material.",
            "dateCreated": "2018-02-20T02:53:11-08:00",
            "author": {
              "name": "Andre Meadows"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "Black Nerd Comedy",
              "url": "https://www.rottentomatoes.com/source-2963"
            }
          },
          {
            "url": "https://www.youtube.com/watch?v=0kxF5wOjoIo&index=4&list=PLeyJPHbRnGaYXTQthjWff4YBw2TUGic8H",
            "body": "It can be easy to forget there is good in the world and sometimes it comes in the form of a furry brown bear in a hat ",
            "dateCreated": "2018-02-16T19:31:42-08:00",
            "author": {
              "name": "Eli Glasner"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "CBC News Network",
              "url": "https://www.rottentomatoes.com/source-2931"
            }
          },
          {
            "url": "https://www.cinepremiere.com.mx/paddington-2-critica.html",
            "body": "Paddington 2 is a film full of life that picks up where the first left off and adds a more charismatic villain (sorry, Nicole Kidman)... [Full review in Spanish]",
            "dateCreated": "2018-02-13T03:56:27-08:00",
            "author": {
              "name": "Diana Su"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "Cine Premiere",
              "url": "https://www.rottentomatoes.com/source-2619"
            }
          },
          {
            "url": "http://www.excelsior.com.mx/opinion/la-critica/2018/02/12/1219703",
            "body": "This sequel is huggable, plush family entertainment, able to captivate audiences of all ages. [Full Review in Spanish] ",
            "dateCreated": "2018-02-12T05:58:38-08:00",
            "author": {
              "name": "Adrián Ruiz"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "Excelsior",
              "url": "https://www.rottentomatoes.com/source-2656"
            }
          },
          {
            "url": "http://qctimes.com/entertainment/columnists/linda-cook/paddington-provides-great-family-fun/article_1f000708-685a-5d2a-9b4c-8a69e622bb62.html",
            "body": "A colorful, good-hearted romp for all ages.",
            "dateCreated": "2018-02-08T12:12:51-08:00",
            "author": {
              "name": "Linda Cook"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "Quad City Times (Davenport, IA)",
              "url": "https://www.rottentomatoes.com/source-1057"
            }
          },
          {
            "url": "https://www.clarin.com/espectaculos/cine/critica-paddington-osito-queremos_0_S13mskK8f.html",
            "body": "[Hugh Grant's] role is the true hidden treasure in Paddington 2. [Full review in Spanish]",
            "dateCreated": "2018-02-08T07:41:17-08:00",
            "author": {
              "name": "Nazareno Brega"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "Clarín",
              "url": "https://www.rottentomatoes.com/source-2677"
            }
          },
          {
            "url": "http://www.escribiendocine.com/critica/0004082-no-robo-no-huyo-y-lo-pescaron/",
            "body": "Noble and nostalgic, colorful and visually striking, as well endearing entertainment for the whole family. [Full Review in Spanish] ",
            "dateCreated": "2018-02-08T03:37:58-08:00",
            "author": {
              "name": "Rolando Gallego"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "EscribiendoCine",
              "url": "https://www.rottentomatoes.com/source-2658"
            }
          },
          {
            "url": "http://illinoistimes.com/article-19645-paddington-2-a-balm-for-our-troubled-times.html",
            "body": " A balm for our troubled times.",
            "dateCreated": "2018-02-05T09:40:57-08:00",
            "author": {
              "name": "Charles Koplinski"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "Illinois Times",
              "url": "https://www.rottentomatoes.com/source-2026"
            }
          },
          {
            "url": "http://www.larsenonfilm.com/paddington-2",
            "body": "...creativity for the sheer joy of it.",
            "dateCreated": "2018-02-04T23:28:39-08:00",
            "author": {
              "name": "Josh Larsen"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "LarsenOnFilm",
              "url": "https://www.rottentomatoes.com/source-1959"
            }
          },
          {
            "url": "http://cinefiloz.com/critica-paddington-2/",
            "body": "The spirit of adventure is really strong in this continuation... [Full review in Spanish]",
            "dateCreated": "2018-02-01T03:53:03-08:00",
            "author": {
              "name": "Emmanuel Báez"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "Cinéfiloz",
              "url": "https://www.rottentomatoes.com/source-2806"
            }
          },
          {
            "url": "http://www.combustiblecelluloid.com/2018/paddington2.shtml",
            "body": "In 2015, I marveled at the very existence of a movie that championed good manners and kindness, but I had no idea how much more those things would matter in 2018. ",
            "dateCreated": "2018-01-26T02:49:32-08:00",
            "author": {
              "name": "Jeffrey M. Anderson"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "Combustible Celluloid",
              "url": "https://www.rottentomatoes.com/source-96"
            }
          },
          {
            "url": "https://www.chesapeakefamily.com/fun/movies/8718-family-movie-review-paddington-2-pg",
            "body": "How rare that a sequel improves upon its original, and rarer still is a perfect film. But Paddington 2 is both, encouraging gentleness, politeness, and decency.",
            "dateCreated": "2018-01-26T00:10:28-08:00",
            "author": {
              "name": "Roxana Hadadi"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "Chesapeake Family Magazine",
              "url": "https://www.rottentomatoes.com/source-2790"
            }
          },
          {
            "url": "http://www.screenit.com/ourtake/2018/paddington_2.html",
            "body": "Maintains all of the considerable charm of the first film and throws in a hefty bit of whimsy, cheer, and good fun. (Full Content Review for Parents - Violence, etc. - also Available)",
            "dateCreated": "2018-01-25T21:19:00-08:00",
            "author": {
              "name": "Teddy Durgin"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "Screen It!",
              "url": "https://www.rottentomatoes.com/source-411"
            }
          },
          {
            "url": "https://youtu.be/QquwxZyrmX8",
            "body": "Paddington 2 surprised the hell out of me, and this is coming from somebody who loved the first. This is a sequel that doesn't disappoint.",
            "dateCreated": "2018-01-25T07:23:19-08:00",
            "author": {
              "name": "Chris Stuckmann"
            },
            "reviewRating": {
              "ratingValue": 1,
              "bestRating": "1",
              "worstRating": "-1"
            },
            "publisher": {
              "name": "ChrisStuckmann.com",
              "url": "https://www.rottentomatoes.com/source-2676"
            }
          }
        ],
        "actors": [
          {
            "name": "Hugh Grant",
            "url": "https://www.rottentomatoes.com/celebrity/hugh_grant",
            "image": "https://resizing.flixster.com/yHm_AcI5AZbCB-758timmaS5o7A=/275x230/v1.cjs0MDM3MjtqOzE3NjQwOzEyMDA7Mjc1OzIzMA"
          },
          {
            "name": "Ben Whishaw",
            "url": "https://www.rottentomatoes.com/celebrity/1168177-ben_whishaw",
            "image": "https://resizing.flixster.com/MVqZVTryxJ7RIVhI5z05hgnwGJQ=/412x412/v1.cjs0ODI0MjtqOzE3NjQwOzEyMDA7NDEyOzQxMg"
          },
          {
            "name": "Brendan Gleeson",
            "url": "https://www.rottentomatoes.com/celebrity/brendon_gleeson",
            "image": "https://resizing.flixster.com/N2W6QMY1xb1VzgK14KqW3jYbeVg=/1200x1800/v1.bjs3ODI0ODM7ajsxNzY0OTsxMjAwOzEyMDA7MTgwMA"
          },
          {
            "name": "Hugh Bonneville",
            "url": "https://www.rottentomatoes.com/celebrity/hugh_bonneville",
            "image": "https://resizing.flixster.com/Cdn5gx6r8LFA6KRiBwYo6tjnCKY=/396x594/v1.bjs3NzI2OTI7ajsxNzY0ODsxMjAwOzM5Njs1OTQ"
          },
          {
            "name": "Sally Hawkins",
            "url": "https://www.rottentomatoes.com/celebrity/sally_hawkins",
            "image": "https://resizing.flixster.com/-d5DmmkaxS4zRzbwMdZwX0kGLjI=/1972x2187/v1.cjs0OTE5NTtqOzE3NjQwOzEyMDA7MTk3MjsyMTg3"
          },
          {
            "name": "Julie Walters",
            "url": "https://www.rottentomatoes.com/celebrity/julie_walters",
            "image": "https://resizing.flixster.com/zV_wASql1P1t5Cg3tr5p3RuXl3c=/540x720/v1.bjs3ODgwMzU7ajsxNzY0OTsxMjAwOzU0MDs3MjA"
          },
          {
            "name": "Jim Broadbent",
            "url": "https://www.rottentomatoes.com/celebrity/jim_broadbent",
            "image": "https://resizing.flixster.com/mu2StUm_c61PZ1BlkqcjJ7iQ6TI=/540x720/v1.bjs3ODg3MjI7ajsxNzY0OTsxMjAwOzU0MDs3MjA"
          },
          {
            "name": "Peter Capaldi",
            "url": "https://www.rottentomatoes.com/celebrity/peter_capaldi",
            "image": "https://resizing.flixster.com/Oi8euFev3c6lpfCbFVQQsHSCHUs=/187x187/v1.cjs0NzY2NjtqOzE3NjQwOzEyMDA7MTg3OzE4Nw"
          },
          {
            "name": "Madeleine Harris",
            "url": "https://www.rottentomatoes.com/celebrity/madeleine_harris"
          },
          {
            "name": "Samuel Joslin",
            "url": "https://www.rottentomatoes.com/celebrity/samuel_joslin",
            "image": "https://resizing.flixster.com/F4A4LnfcQxu2uVQlxVwTtIeqPlY=/2200x1650/v1.bjs0MDAzNztqOzE3NjQwOzEyMDA7MjIwMDsxNjUw"
          },
          {
            "name": "Imelda Staunton",
            "url": "https://www.rottentomatoes.com/celebrity/imelda_staunton",
            "image": "https://resizing.flixster.com/15AXZMpHqV5NwNUaoMfbZgUQyRk=/300x200/v1.bjszMjk2NDU7ajsxNzY0MzsxMjAwOzMwMDsyMDA"
          }
        ],
        "director": [
          {
            "name": "Paul King (VII) ",
            "url": "https://www.rottentomatoes.com/celebrity/paul_king"
          }
        ],
        "author": [
          {
            "name": "Paul King (VII) ",
            "url": "https://www.rottentomatoes.com/celebrity/paul_king"
          },
          {
            "name": "Simon Farnaby",
            "url": "https://www.rottentomatoes.com/celebrity/simon-farnaby"
          }
        ],
        "genre": [
          "Animation",
          "Comedy",
          "Kids & Family"
        ]
      }
    }