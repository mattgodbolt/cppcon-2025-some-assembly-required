<h2>The process of putting<br> together a set of pieces</h2>

<!-- .element: class="r-fit-text" -->

---

gcc logo | clang logo | msvc logo

Notes:
glorious choice of compilers
history of cfront? My first C++ compiler was cfront
  gcc -> g++
msvc early intro
clang/llvm project

ask me how I know we have lots of compilers to pick from

---

vi | emacs | MASSIVE IDE

Notes:
- spaces vs tabs. joke I use one of each so everyone's unhappy

LSP
Tooling, libclang, llvm
- profactor?
- IDEs refactoring
- sanitizers

---

make etc list them all here

Notes:

- modules?

---

PACKAGE managers
vcpkg conan tarballs, zipfiles, github submodules...CPM

---

<h2>The process of putting<br> together a set of pieces</h2>

CHECK

---

Notes:

How _do_ we put together software? There's a number of ways
- Creating, editing and understanding the code
- Building it
- Using those libraries, at least the ones that don't ship with the compiler

Got add compilers to the list of things that where some assembly is required. We need compilers 
We can also do a little bit of a history of the compilers, maybe even some cfront
While we're talking about compilers, we can show off compiler explorers, list of compilers and say we have lots of compilers. Ask me how I know 
We can talk about refactoring tools like libclang
I can even allude to what Nik and I did at profactor
If it fits in, I can plug bronto source
We can show vim and emacs and a completely tricked out IDE
Maybe mention AI coding assistance

Then how do we build

So many choices

How do we even get the code? Packaging etc

---

- software development itself
  - IDEs
  - vim emacs
    - joke about contentious
  - spaces vs tabs
  - language servers
- actually building software
  - make etc
  - msbuild
  - modules?
- packaging, luckily less contentious than vi/emacs?
  - maybe?

---

<img class="r-stretch" src="images/IKEA-ish.jpeg">

Notes:

maybe do this image later?
c++ requires compilation, which is thankfully a simple, straightforward process, right?

- could do a poll of the room
- modules complexities


---

### make
### cmake
### ninja
### bazel/buck
### scons
### meson
### evoke

---

### bash scripts and python side tooling
### Maybe more in C++ with reflection!
### libclang
### dehydra story?

---

### packaging

---

### CPM
### vcpkg
### conan

---

### other tools
### sanitizers?

---

### Human side
- documentation!
- the how and why, the Tao
- coding conventions
- linters
- formatters
- Wall Wextra Wsign-conversion
- Compiler Explorer!? :D
