import { ColorType } from './types';

export const summerOrWinterColorCode: { [key in string]: ColorType } = {
  '1111': ColorType.SummerCool,
  '1112': ColorType.SummerCool,
  '1121': ColorType.SummerCool,
  '1122': ColorType.SummerCool,
  '1211': ColorType.SummerCool,
  '1212': ColorType.SummerCool,
  '2111': ColorType.SummerCool,
  '2112': ColorType.SummerCool,

  '1221': ColorType.WinterCool,
  '1222': ColorType.WinterCool,
  '2121': ColorType.WinterCool,
  '2122': ColorType.WinterCool,
  '2211': ColorType.WinterCool,
  '2212': ColorType.WinterCool,
  '2221': ColorType.WinterCool,
  '2222': ColorType.WinterCool,
};

export const springOrAutumnColorCode: { [key in string]: ColorType } = {
  '1111': ColorType.SpringWarm,
  '1112': ColorType.SpringWarm,
  '1121': ColorType.SpringWarm,
  '1211': ColorType.SpringWarm,
  '1212': ColorType.SpringWarm,
  '2111': ColorType.SpringWarm,
  '2112': ColorType.SpringWarm,
  '2121': ColorType.SpringWarm,

  '1122': ColorType.AutumnWarm,
  '1221': ColorType.AutumnWarm,
  '1222': ColorType.AutumnWarm,
  '2122': ColorType.AutumnWarm,
  '2211': ColorType.AutumnWarm,
  '2212': ColorType.AutumnWarm,
  '2221': ColorType.AutumnWarm,
  '2222': ColorType.AutumnWarm,
};
