Number.prototype.log = function () {
  console.log(this);
};

Function.prototype.log = function () {
  console.log(this);
};

let r;

const I = (a) => a;
r = I(3);
r.log(); //3

r = I(I);
r.log(); //I

const SELF = (f) => f(f);
r = SELF(I);
r.log(); //I Aplica a função a ela mesma

const PRI = (a) => (_) => a;
r = PRI(7)(11);
r.log(); //7

const ULT = (_) => (b) => b;
r = ULT(7)(11);
r.log(); //11s

const TRO = (f) => (a) => (b) => f(b)(a);
r = TRO(PRI)(7)(11);
r.log(); //11

//boolean true e false --> condicao ? verd : falso
const T = PRI;
const F = ULT;
T.inspect = () => "Verdadeiro (PRI)";
F.inspect = () => "Falso (ULT)";

T.log(); //Verdadeiro
F.log(); //False

// NOT
const NOT = (a) => a(F)(T);
r = NOT(F);
r.log(); //Verdadeiro
r = NOT(T);
r.log(); //Falso

//AND
const AND = (a) => (b) => a(b)(F);
r = AND(T)(T);
r.log(); //Verdadeiro

r = AND(F)(T);
r.log(); //Falso

r = AND(T)(F);
r.log(); //Falso

r = AND(F)(F);
r.log(); //Falso

//OR
const OR = (a) => (b) => a(T)(b);
r = OR(T)(T);
r.log(); //Verdadeiro

r = OR(F)(T);
r.log(); //Verdadeiro

r = OR(T)(F);
r.log(); //Verdadeiro

r = OR(F)(F);
r.log(); //Falso

//EQ

const EQ = (a) => (b) => a(b)(NOT(b));
r = EQ(T)(T);
r.log(); //Verdadeiro

r = EQ(T)(F);
r.log(); //Falso

r = EQ(F)(T);
r.log(); //Falso

r = EQ(F)(F);
r.log(); //Verdadeiro

//XOR

const XOR = (a) => (b) => NOT(EQ(a)(b));

r = XOR(T)(T);
r.log(); //Falso

r = XOR(F)(F);
r.log(); //Falso

r = XOR(T)(F);
r.log(); //Verdadeiro
