import React,{useState} from 'react'
import HeroSlider from 'react-slick'
import { NextArrow, PrevArrow } from './Arrow.Component';

const HeroCarousel = () => {

    const [images, setimages] = useState([
        {
          "adult": false,
          "backdrop_path": "/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
          "genre_ids": [
            28,
            12,
            53
          ],
          "id": 299054,
          "original_language": "en",
          "original_title": "Expend4bles",
          "overview": "Armed with every weapon they can get their hands on and the skills to use them, The Expendables are the world’s last line of defense and the team that gets called when all other options are off the table. But new team members with new styles and tactics are going to give “new blood” a whole new meaning.",
          "popularity": 2919.272,
          "poster_path": "/mOX5O6JjCUWtlYp5D8wajuQRVgy.jpg",
          "release_date": "2023-09-15",
          "title": "Expend4bles",
          "video": false,
          "vote_average": 6.4,  
          "vote_count": 307
        },
        {
          "adult": false,
          "backdrop_path": "/cHNqobjzfLj88lpIYqkZpecwQEC.jpg",
          "genre_ids": [
            28,
            53,
            80
          ],
          "id": 926393,
          "original_language": "en",
          "original_title": "The Equalizer 3",
          "overview": "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
          "popularity": 1692.461,
          "poster_path": "/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
          "release_date": "2023-08-30",
          "title": "The Equalizer 3",
          "video": false,
          "vote_average": 7.2,
          "vote_count": 969
        },
        {
          "adult": false,
          "backdrop_path": "/mRGmNnh6pBAGGp6fMBMwI8iTBUO.jpg",
          "genre_ids": [
            27,
            9648,
            53
          ],
          "id": 968051,
          "original_language": "en",
          "original_title": "The Nun II",
          "overview": "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
          "popularity": 1323.967,
          "poster_path": "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
          "release_date": "2023-09-06",
          "title": "The Nun II",
          "video": false,
          "vote_average": 7,
          "vote_count": 1056
        },
        {
          "adult": false,
          "backdrop_path": "/pA3vdhadJPxF5GA1uo8OPTiNQDT.jpg",
          "genre_ids": [
            28,
            18
          ],
          "id": 678512,
          "original_language": "en",
          "original_title": "Sound of Freedom",
          "overview": "The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
          "popularity": 1027.211,
          "poster_path": "/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg",
          "release_date": "2023-07-03",
          "title": "Sound of Freedom",
          "video": false,
          "vote_average": 8.1,
          "vote_count": 946
        },
        {
          "adult": false,
          "backdrop_path": "/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg",
          "genre_ids": [
            27,
            53
          ],
          "id": 1008042,
          "original_language": "en",
          "original_title": "Talk to Me",
          "overview": "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
          "popularity": 872.443,
          "poster_path": "/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
          "release_date": "2023-07-26",
          "title": "Talk to Me",
          "video": false,
          "vote_average": 7.2,
          "vote_count": 1486
        },
        {
          "adult": false,
          "backdrop_path": "/uvsL5Q5Juf8ivqBnlr4nFVUwVoa.jpg",
          "genre_ids": [
            80,
            18,
            53
          ],
          "id": 466420,
          "original_language": "en",
          "original_title": "Killers of the Flower Moon",
          "overview": "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
          "popularity": 650.129,
          "poster_path": "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
          "release_date": "2023-10-18",
          "title": "Killers of the Flower Moon",
          "video": false,
          "vote_average": 7.8,
          "vote_count": 96
        },
        {
          "adult": false,
          "backdrop_path": "/r7DuyYJ0N3cD8bRKsR5Ygq2P7oa.jpg",
          "genre_ids": [
            12,
            28,
            18
          ],
          "id": 980489,
          "original_language": "en",
          "original_title": "Gran Turismo",
          "overview": "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
          "popularity": 842.156,
          "poster_path": "/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg",
          "release_date": "2023-08-09",
          "title": "Gran Turismo",
          "video": false,
          "vote_average": 8.1,
          "vote_count": 1101
        },
        {
          "adult": false,
          "backdrop_path": "/jP3FatCTHc460ZGW57q9ypTdBqu.jpg",
          "genre_ids": [
            53,
            878,
            28
          ],
          "id": 937249,
          "original_language": "en",
          "original_title": "57 Seconds",
          "overview": "When a tech blogger lands an interview with a tech guru and stops an attack on him, he finds a mysterious ring that takes him back 57 seconds into the past.",
          "popularity": 806.498,
          "poster_path": "/dfS5qHWFuXyZQnwYREwb7N4qU5p.jpg",
          "release_date": "2023-09-29",
          "title": "57 Seconds",
          "video": false,
          "vote_average": 5.4,
          "vote_count": 104
        },
        {
          "adult": false,
          "backdrop_path": "/H6j5smdpRqP9a8UnhWp6zfl0SC.jpg",
          "genre_ids": [
            28,
            878,
            12
          ],
          "id": 565770,
          "original_language": "en",
          "original_title": "Blue Beetle",
          "overview": "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
          "popularity": 799.224,
          "poster_path": "/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
          "release_date": "2023-08-16",
          "title": "Blue Beetle",
          "video": false,
          "vote_average": 7.1,
          "vote_count": 1335
        },
        {
          "adult": false,
          "backdrop_path": "/gIchV01EUHd1zNBeql92L63kmHU.jpg",
          "genre_ids": [
            16,
            10751,
            28,
            878
          ],
          "id": 893723,
          "original_language": "en",
          "original_title": "PAW Patrol: The Mighty Movie",
          "overview": "A magical meteor crash-lands in Adventure City, gives the PAW Patrol pups superpowers, and transforms them into The Mighty Pups. When the Patrol's archrival Humdinger breaks out of jail and teams up with mad scientist Victoria Vance to steal the powers for themselves, the Mighty Pups must save Adventure City and stop the supervillains before it's too late.",
          "popularity": 784.002,
          "poster_path": "/aTvePCU7exLepwg5hWySjwxojQK.jpg",
          "release_date": "2023-09-21",
          "title": "PAW Patrol: The Mighty Movie",
          "video": false,
          "vote_average": 7.3,
          "vote_count": 57
        },
        {
          "adult": false,
          "backdrop_path": "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
          "genre_ids": [
            35,
            12,
            14
          ],
          "id": 346698,
          "original_language": "en",
          "original_title": "Barbie",
          "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
          "popularity": 580.436,
          "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
          "release_date": "2023-07-19",
          "title": "Barbie",
          "video": false,
          "vote_average": 7.2,
          "vote_count": 5507
        },
        {
          "adult": false,
          "backdrop_path": "/dZbLqRjjiiNCpTYzhzL2NMvz4J0.jpg",
          "genre_ids": [
            27,
            53
          ],
          "id": 951491,
          "original_language": "en",
          "original_title": "Saw X",
          "overview": "Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps.",
          "popularity": 749.58,
          "poster_path": "/b16RAVwj2QN6RAs752UJNzQ9Of0.jpg",
          "release_date": "2023-09-26",
          "title": "Saw X",
          "video": false,
          "vote_average": 7.3,
          "vote_count": 182
        },
        {
          "adult": false,
          "backdrop_path": "/o6kfGs1qTAaFX22YitIvlYMyeqA.jpg",
          "genre_ids": [
            27
          ],
          "id": 807172,
          "original_language": "en",
          "original_title": "The Exorcist: Believer",
          "overview": "When his daughter, Angela, and her friend Katherine, show signs of demonic possession, it unleashes a chain of events that forces single father Victor Fielding to confront the nadir of evil. Terrified and desperate, he seeks out Chris MacNeil, the only person alive who's witnessed anything like it before.",
          "popularity": 436.59,
          "poster_path": "/lxRLC3WOFM2INoyEa3bFGIUApvn.jpg",
          "release_date": "2023-10-04",
          "title": "The Exorcist: Believer",
          "video": false,
          "vote_average": 5.4,
          "vote_count": 131
        },
        {
          "adult": false,
          "backdrop_path": "/eSsMzJpzAwCa69tm6Wco2il44aJ.jpg",
          "genre_ids": [
            28,
            80,
            18,
            53
          ],
          "id": 939335,
          "original_language": "en",
          "original_title": "Muzzle",
          "overview": "LAPD K-9 officer Jake Rosser has just witnessed the shocking murder of his dedicated partner by a mysterious assailant. As he investigates the shooter’s identity, he uncovers a vast conspiracy that has a chokehold on the city in this thrilling journey through the tangled streets of Los Angeles and the corrupt bureaucracy of the LAPD.",
          "popularity": 664.059,
          "poster_path": "/qXChf7MFL36BgoLkiB3BzXiwW82.jpg",
          "release_date": "2023-09-29",
          "title": "Muzzle",
          "video": false,
          "vote_average": 6.2,
          "vote_count": 34
        },
        {
          "adult": false,
          "backdrop_path": "/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg",
          "genre_ids": [
            28,
            53,
            80
          ],
          "id": 762430,
          "original_language": "en",
          "original_title": "Retribution",
          "overview": "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks. With his kids trapped in the back seat and a bomb that will explode if they get out of the car, a normal commute becomes a twisted game of life or death as Matt follows the stranger's increasingly dangerous instructions in a race against time to save his family.",
          "popularity": 579.857,
          "poster_path": "/oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg",
          "release_date": "2023-08-23",
          "title": "Retribution",
          "video": false,
          "vote_average": 6.9,
          "vote_count": 419
        },
        {
          "adult": false,
          "backdrop_path": "/xHqTnPtpd9Qd7R0fVtoqxZYM67Q.jpg",
          "genre_ids": [
            80,
            53,
            28
          ],
          "id": 958006,
          "original_language": "en",
          "original_title": "The Kill Room",
          "overview": "A hitman, his boss, an art dealer and a money-laundering scheme that accidentally turns the assassin into an overnight avant-garde sensation, one that forces her to play the art world against the underworld.",
          "popularity": 574.62,
          "poster_path": "/qKpdy7N6zX05eisopvvviiTwPxb.jpg",
          "release_date": "2023-09-14",
          "title": "The Kill Room",
          "video": false,
          "vote_average": 5.5,
          "vote_count": 22
        },
        {
          "adult": false,
          "backdrop_path": "/jkKVLzLWjSvTnc84VzeljhSy6j8.jpg",
          "genre_ids": [
            10749,
            18
          ],
          "id": 820525,
          "original_language": "en",
          "original_title": "After Everything",
          "overview": "Besieged by writer’s block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past – and to find himself. Hoping to win back Tessa, he realizes he needs to change his ways before he can make the ultimate commitment.",
          "popularity": 372.663,
          "poster_path": "/uQxjZGU6rxSPSMeAJPJQlmfV3ys.jpg",
          "release_date": "2023-09-13",
          "title": "After Everything",
          "video": false,
          "vote_average": 6.8,
          "vote_count": 342
        },
        {
          "adult": false,
          "backdrop_path": "/oP03EF9eYWqvycFGN5TeEo3nN7l.jpg",
          "genre_ids": [
            27,
            9648
          ],
          "id": 1024773,
          "original_language": "en",
          "original_title": "It Lives Inside",
          "overview": "Desperate to fit in at school, Sam rejects her East Indian culture and family to be like everyone else. However, when a mythological demonic spirit latches onto her former best friend, she must come to terms with her heritage to defeat it.",
          "popularity": 535.08,
          "poster_path": "/73gIfV8gDwkVgUrFDzt4TfZC9Zc.jpg",
          "release_date": "2023-09-06",
          "title": "It Lives Inside",
          "video": false,
          "vote_average": 5.3,
          "vote_count": 35
        },
        {
          "adult": false,
          "backdrop_path": "/cK9LrH5Ggqf2005AhWrpDT98bHU.jpg",
          "genre_ids": [
            28,
            12
          ],
          "id": 732684,
          "original_language": "ru",
          "original_title": "Либерея: Охотники за сокровищами",
          "overview": "While digging one of the many tunnels for the Moscow metro, Soviet workers unearth ruins of a dungeon. The site is closed, the metro tunnel is diverted, and amidst the bustle no one notices the tunnel workers’ foreman pocketing a little ‘souvenir’ – a book-sized frame made of precious metals featuring an inscription in an unknown language. Decades later, the foreman’s grandson Ilya, who works as a courier, discovers the ancient relic in a pile of old junk. Oblivious to the true value of the family heirloom, he soon learns about it from a mysterious stranger. The relic is the key to the secret location of the priceless ancient library that belonged to Ivan the Terrible. What Ilya doesn’t know is that the search for the lost library has been going on for centuries, and now very powerful people are after him. Ilya and the mysterious stranger decide to try their luck in finding the library.",
          "popularity": 513.712,
          "poster_path": "/lc0KueWbDDwIsg76JnPohA7jday.jpg",
          "release_date": "2022-10-27",
          "title": "Raiders of the Lost Library",
          "video": false,
          "vote_average": 5.4,
          "vote_count": 14
        },
        {
          "adult": false,
          "backdrop_path": "/9qWD2PS8fWeUv3ud3yE9XMoorer.jpg",
          "genre_ids": [
            27,
            14,
            53
          ],
          "id": 675531,
          "original_language": "en",
          "original_title": "Dark Harvest",
          "overview": "In a cursed town, the annual harvest becomes a brutal battle for survival. On Halloween 1963, Sawtooth Jack, a terrifying legend, rises from the cornfields, threatening the town’s children. Groups of boys unite to defeat the murderous scarecrow before midnight. Richie, a rebellious outcast, joins the run, motivated by his brother’s previous victory. As the hunt progresses, Richie makes a shocking discovery and faces a pivotal choice to break the relentless cycle.",
          "popularity": 498.364,
          "poster_path": "/sFBDjWdw8gHSI2dMivP7H52iwvp.jpg",
          "release_date": "2023-10-11",
          "title": "Dark Harvest",
          "video": false,
          "vote_average": 5.9,
          "vote_count": 48
        }
      ]);


      const settingLG = {
        arrows : true,
        slidesToShow : 1,
        infinite : true,
        // speed : 500,
        slideToScroll : 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow : <NextArrow/>,
        prevArrow : <PrevArrow/>,
      };

      const settings = {
        arrows : true,
        slidesToShow : 1,
        infinite : true,
        // speed : 500,
        slideToScroll : 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow : <NextArrow /> ,
        prevArrow : <PrevArrow />,
      }


  return (
    <>
    <div className='lg:hidden'>
    <HeroSlider {...settings}>
        {
            images.map((images, index) =>(

                <div className='w-full h-56 md:h-80 py-3' key={index}>
                <img src= {`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="Hero-Banner" className="w-full h-full rounded-md object-cover" />
                </div>
            ))
        }
    </HeroSlider>
    </div>

    <div className='hidden lg:block'>
    <HeroSlider {...settingLG}>
        {
            images.map((images, index) =>(

                <div className='w-full h-96 px-2 py-3' key = {index} >
                <img src= {`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="Hero-Banner" className="w-full h-full rounded-md object-cover" />
                </div>
            ))
        }
    </HeroSlider>

    </div>  

    </>
  )
}

export default HeroCarousel;