import { Injectable } from '@angular/core';
import { delay, of, type Observable } from 'rxjs';
import type { Movie, Movies } from './movies.type';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor() {}

  public getItem(movieID: number): Observable<Movie> {
    const movie = movies.find(({ id }: Movie): boolean => movieID === id);
    if (!movie) {
      throw new Error(`Movie with ID = ${movieID} does not exist.`);
    }

    return of(movie).pipe(delay(500));
  }

  public getList(titleFilter: string): Observable<Movies> {
    const titleFilterPrepared = titleFilter.toLocaleLowerCase();
    const result = movies.filter((movie: Movie): boolean => {
      return movie.title.toLocaleLowerCase().includes(titleFilterPrepared);
    });

    return of(result).pipe(delay(500));
  }
}

const movies: Movies = [
  {
    description: 'It\'s the 1980s, a quiet provincial American town. The pleasant local life is disrupted by the mysterious disappearance of a teenager named Will. The boy\'s family and the local sheriff are determined to uncover the circumstances of the case, and the events also touch upon Will\'s best friend, Mike.',
    genres: ['Horror', 'Science', 'Fiction', 'Fantasy'],
    id: 1,
    imageURL: 'stranger-things.webp',
    rating: 8.6,
    releaseYear: '2016',
    title: 'Stranger Things',
  },
  {
    description: 'Life isn\'t exactly sweet for ten-year-old Harry Potter: his parents died when he was barely a year old, and the aunt and uncle who took him in as an orphan are nothing but jabs and slaps. But on Harry\'s eleventh birthday, everything changes.',
    genres: ['Fantasy', 'Adventure', 'Family'],
    id: 2,
    imageURL: 'harry-potter.webp',
    rating: 7.7,
    releaseYear: '2001',
    title: 'Harry Potter and the Sorcerer\'s Stone',
  },
  {
    description: 'Four children are sent from London to the countryside by their parents, to live with an elderly professor and family friend. In his house, the children discover a mysterious wardrobe, which leads them to the magical land of Narnia, home to fantastic people, animals, and creatures.',
    genres: ['Fantasy', 'Adventure', 'Family'],
    id: 3,
    imageURL: 'the-chronicles-of-narnia.webp',
    rating: 6.9,
    releaseYear: '2005',
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
  },
  {
    description: 'The Tales of Middle-earth chronicle the Great War of the Ring, which lasted for thousands of years. Whoever wielded the Ring gained unlimited power, but was bound to serve evil.',
    genres: ['Fantasy', 'Adventure'],
    id: 4,
    imageURL: 'the-lord-of-the-rings.webp',
    rating: 8.9,
    releaseYear: '2001',
    title: 'The Lord of the Rings: The Fellowship of the Ring',
  },
  {
    description: 'The search for and study of extraordinary magical creatures leads magizoologist Newt Scamander to New York.',
    genres: ['Fantasy', 'Adventure', 'Family'],
    id: 5,
    imageURL: 'fantastic-beasts.webp',
    rating: 7.2,
    releaseYear: '2016',
    title: 'Fantastic Beasts and Where to Find Them',
  },
  {
    description: 'Jacob spent his childhood listening to his grandfather\'s stories about an orphanage for unusual children. Among its inhabitants were a girl who could hold fire, a girl whose feet never touched the ground, an invisible boy, and twins who could communicate without words.',
    genres: ['Fantasy', 'Adventure', 'Drama'],
    id: 6,
    imageURL: 'miss-peregrine.webp',
    rating: 6.7,
    releaseYear: '2016',
    title: 'Miss Peregrine\'s Home for Peculiar Children',
  },
  {
    description: 'When drought, dust storms, and plant extinction lead humanity to a food crisis, a team of researchers and scientists ventures through a wormhole.',
    genres: ['Fantasy', 'Adventure', 'Drama'],
    id: 7,
    imageURL: 'interstellar.webp',
    rating: 8.7,
    releaseYear: '2014',
    title: 'Interstellar',
  },
  {
    description: 'The surviving members of the Avengers team and their allies must develop a new plan to counter the destructive actions of the powerful Titan Thanos.',
    genres: ['Fantasy', 'Adventure', 'Action movie', 'Drama'],
    id: 8,
    imageURL: 'avengers.webp',
    rating: 8.4,
    releaseYear: '2019',
    title: 'Avengers: Endgame',
  },
  {
    description: 'Teenager Hiccup is not very close to the traditions of his heroic tribe, which has been waging war against dragons for many years.',
    genres: ['Fantasy', 'Adventure', 'Drama'],
    id: 9,
    imageURL: 'dragon.webp',
    rating: 7.8,
    releaseYear: '2025',
    title: 'How to Train Your Dragon',
  },
  {
    description: 'The battle between the good and evil forces of the wizarding world escalates into an all-out war.',
    genres: ['Fantasy', 'Adventure'],
    id: 10,
    imageURL: 'harry-potter-part-2.webp',
    rating: 8.1,
    releaseYear: '2011',
    title: 'Harry Potter and the Deathly Hallows - Part 2',
  },
  {
    description: 'Former Marine Jake Sully is confined to a wheelchair. Despite his frail body, Jake remains a warrior at heart.',
    genres: ['Fantasy', 'Adventure', 'Action movie', 'Drama'],
    id: 11,
    imageURL: 'avatar.webp',
    rating: 7.9,
    releaseYear: '2009',
    title: 'Avatar',
  },
  {
    description: 'Chihiro moves into a new house with her mom and dad. After getting lost along the way, they find themselves in a strange deserted town where a magnificent feast awaits them.',
    genres: ['Fantasy', 'Anime', 'Cartoon'],
    id: 12,
    imageURL: 'chihiro.webp',
    rating: 8.6,
    releaseYear: '2001',
    title: 'Sen to Chihiro no kamikakushi',
  },
  {
    description: 'A young cook named Tosya Kislitsyna, a naive and eccentric girl, has arrived in a Siberian village. She sticks her nose into everything and is eager to help everyone. A handsome local, Ilya, bets Tosya and starts an affair.',
    genres: ['Melodrama', 'Comedy'],
    id: 13,
    imageURL: 'girls.webp',
    rating: 7.8,
    releaseYear: '1961',
    title: 'Girls',
  },
  {
    description: 'A package containing the robot assistant ROZZUM 7134 falls onto a desert island. After struggling to find tasks to complete, the robot learns the language of animals and, under the guidance of an experienced opossum mother, begins caring for a tiny gosling whose family it accidentally crushed.',
    genres: ['Fantasy', 'Cartoon'],
    id: 14,
    imageURL: 'robot.webp',
    rating: 8.2,
    releaseYear: '2024',
    title: 'The Wild Robot',
  },
  {
    description: 'During the revolution and the brief period of War Communism that followed, many hid their valuables as securely as possible.',
    genres: ['Comedy', 'Adventure', 'Crime'],
    id: 15,
    imageURL: 'chairs.webp',
    rating: 8.2,
    releaseYear: '1971',
    title: '12 chairs',
  },
  {
    description: 'An American family leaves Chicago for Europe, but in their rush to get ready, the clueless parents forget at home... one of their children.',
    genres: ['Comedy', 'Family'],
    id: 16,
    imageURL: 'alone.webp',
    rating: 7.7,
    releaseYear: '1990',
    title: 'Home Alone',
  },
];
