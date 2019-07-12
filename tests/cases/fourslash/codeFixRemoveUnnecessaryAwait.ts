/// <reference path="fourslash.ts" />
////declare class C { foo(): void }
////declare function foo(): string;
////async function f() {
////  await "";
////  await 0;
////  (await foo()).toLowerCase();
////  (await 0).toFixed();
////  (await new C).foo();
////}

verify.codeFix({
  description: ts.Diagnostics.Remove_unnecessary_await.message,
  index: 0,
  newFileContent:
`declare class C { foo(): void }
declare function foo(): string;
async function f() {
  "";
  await 0;
  (await foo()).toLowerCase();
  (await 0).toFixed();
  (await new C).foo();
}`
});

verify.codeFixAll({
  fixAllDescription: ts.Diagnostics.Remove_all_unnecessary_uses_of_await.message,
  fixId: "removeUnnecessaryAwait",
  newFileContent:
`declare class C { foo(): void }
declare function foo(): string;
async function f() {
  "";
  0;
  foo().toLowerCase();
  (0).toFixed();
  (new C).foo();
}`
});
