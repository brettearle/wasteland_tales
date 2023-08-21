import { Router } from "express";

export interface IAppServices {
  port: number;
  router: Router;
}

type Suit = "spades" | "hearts" | "diamonds" | "clubs";

type Face =
  | "ace"
  | "two"
  | "three"
  | "four"
  | "five"
  | "six"
  | "seven"
  | "eight"
  | "nine"
  | "ten"
  | "jack"
  | "queen"
  | "king";
export interface ICard {
  suit: Suit;
  face: Face;
}

export type Deck = ICard[];

export interface IDeck {
  makeDeck: () => Deck;
}
