export enum ColorType {
  Cool = 'cool',
  Warm = 'warn',
  SpringWarm = 'spring-warm',
  SummerCool = 'summer-cool',
  AutumnWarm = 'autumn-warm',
  WinterCool = 'winter-cool',
}

export type AppContextType = {
  name: string;
  responses: Array<number>;
  updateName: (_: string) => void;
  updateResponses: (_: Array<number>) => void;
};

export enum Path {
  home = '/',
  q1 = '/q1',
  q2 = '/q2',
  q3 = '/q3',
  q4 = '/q4',
  q5 = '/q5',
  q6 = '/q6',
  q7 = '/q7',
  q8cool = '/q8-cool',
  q9cool = '/q9-cool',
  q10cool = '/q10-cool',
  q11cool = '/q11-cool',
  q8warm = '/q8-warm',
  q9warm = '/q9-warm',
  q10warm = '/q10-warm',
  q11warm = '/q11-warm',
  spring = '/spring',
  summer = '/summer',
  autumn = '/autumn',
  winter = '/winter',
}
