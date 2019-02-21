import { isEqual, uniq } from 'lodash';

function validateDices(dices: number[]): void {
  const hasCorrectLength = dices.length === 5;
  const hasValidValues = dices.every((dice) => dice >= 1 && dice <= 6);
  if (!(hasCorrectLength && hasValidValues)) {
    throw new Error('There is a problem with the dices');
  }
}

function countDices(dices: number[]): number[] {
  return dices.reduce(
    (count, dice) => {
      count[dice - 1] += 1;
      return count;
    },
    [0, 0, 0, 0, 0, 0],
  );
}

export default class Yatzy {
  public static chance(...dices: number[]): number {
    validateDices(dices);
    return dices.reduce((acc, dice) => acc + dice);
  }

  public static yatzy(...dices: number[]): number {
    validateDices(dices);
    return uniq(dices).length === 1 ? 50 : 0;
  }

  public static ones(...dices: number[]): number {
    validateDices(dices);
    return this.sameNumber(dices, 1);
  }

  public static twos(...dices: number[]): number {
    validateDices(dices);
    return this.sameNumber(dices, 2);
  }

  public static threes(...dices: number[]): number {
    validateDices(dices);
    return this.sameNumber(dices, 3);
  }

  public static score_pair(...dices: number[]): number {
    validateDices(dices);
    const counts = countDices(dices);

    const hasPair = counts.some((count) => count >= 2);

    if (!hasPair) {
      return 0;
    }

    const pair = counts.lastIndexOf(2);

    return pair
      ? (pair + 1) * 2
      : (counts.indexOf(Math.max(...counts)) + 1) * 2;
  }

  public static two_pair(...dices: number[]): number {
    validateDices(dices);
    const counts = countDices(dices);

    const pairs = counts
      .reduce((pair: number[], count, i) => {
        if (count >= 2) {
          pair.push(i + 1);
        }
        return pair;
      }, [])
      .sort()
      .slice(0, 2)
      .reduce((acc, val) => acc + val * 2, 0);

    return pairs;
  }

  public static three_of_a_kind(...dices: number[]): number {
    return Yatzy.ofKind(dices, 3);
  }

  public static four_of_a_kind(...dices: number[]): number {
    return Yatzy.ofKind(dices, 4);
  }

  public static smallStraight(...dices: number[]): number {
    return Yatzy.getStraight(uniq(dices.sort()), [1, 2, 3, 4, 5], 15);
  }

  public static largeStraight(...dices: number[]): number {
    return Yatzy.getStraight(uniq(dices.sort()), [2, 3, 4, 5, 6], 20);
  }

  public static fullHouse(...dices: number[]): number {
    const counts = countDices(dices);

    const pairIndex = counts.indexOf(2);
    const thirdIndex = counts.indexOf(3);

    if (pairIndex === -1 || thirdIndex === -1) {
      return 0;
    }

    return (pairIndex + 1) * 2 + (thirdIndex + 1) * 3;
  }

  public static sameNumber(dices: number[], searchValue: number): number {
    return searchValue * dices.filter((dice) => dice === searchValue).length;
  }

  public static ofKind(dices: number[], val: number): number {
    validateDices(dices);
    const counts = countDices(dices);

    const third = counts.findIndex((count, i) => count >= val) as number;

    return third !== -1 ? (third + 1) * val : 0;
  }

  public static getStraight(
    dices: number[],
    straight: number[],
    returnValue: number,
  ): number {
    const sortedDices = uniq(dices.sort());

    return isEqual(sortedDices, straight) ? returnValue : 0;
  }

  private dices: number[];

  constructor(...dices: number[]) {
    validateDices(dices);
    this.dices = dices;
  }

  public fours(): number {
    validateDices(this.dices);
    return Yatzy.sameNumber(this.dices, 4);
  }

  public fives(): number {
    validateDices(this.dices);
    return Yatzy.sameNumber(this.dices, 5);
  }

  public sixes(): number {
    validateDices(this.dices);
    return Yatzy.sameNumber(this.dices, 6);
  }
}
