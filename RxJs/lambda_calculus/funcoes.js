let r;

const I = (a) => a;
r = I(3);
r; //3

r = I(I);
r; //I

const SELF = (f) => f(f);
r = SELF(I);
r; //I Aplica a função a ela mesma

const PRI = (a) => (_) => a;
r = PRI(7)(11);
r; //7

const ULT = (_) => (b) => b;
r = ULT(7)(11);
r; //11s
