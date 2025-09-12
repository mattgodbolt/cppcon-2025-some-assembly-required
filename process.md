<h2>The process of putting<br> together a set of pieces</h2>

<!-- .element: class="r-fit-text" -->

Notes:
ASK THE AUDIENCE

---

<img class="r-stretch" src="images/IKEA-ish.png">

Notes:

How _do_ we put together software? There's a number of ways

ASK THE AUDIENCE

- Compiling code
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

<div class="libs">
<div class="lib"><img src="images/GNU_Compiler_Collection_logo.svg"></div>
<div class="lib"><img src="images/DragonFull.png"></div>
<div class="lib"><img src="images/Visual_Studio_Icon_2022.svg.png"></div>
</div>

Notes:
glorious choice of compilers
history of cfront? My first C++ compiler was cfront
gcc -> g++
msvc early intro
clang/llvm project

ask me how I know we have lots of compilers to pick from

---

<div class="libs">
<div class="lib"><img src="images/Vimlogo.svg"></div>
<div class="lib"><img src="images/Neovim-mark.svg"></div>
<div class="lib"><img src="images/1200px-EmacsIcon.svg.png"></div>
</div>

Notes:

- spaces vs tabs. joke I use one of each so everyone's unhappy

---

<div class="libs">
<div class="lib"><img src="images/eclipse-11-logo-png-transparent.png"></div>
<div class="lib"><img src="images/Visual_Studio_Code_1.35_icon.svg.png"></div>
<div class="lib"><img src="images/Visual_Studio_Icon_2022.svg.png"></div>
<div class="lib"><img src="images/Apache_NetBeans_Logo.svg"></div>
<div class="lib"><img src="images/Qt_logo_neon_2022.svg.png"></div>
<div class="lib"><img src="images/Clion.svg.png"></div>
</div>

---

<img src="images/vi.png" class="r-stretch">

---

<img src="images/emacs.png" class="r-stretch">

---

<img src="images/vscode.png" class="r-stretch">

---

<img src="images/clion.png" class="r-stretch">

---

<img src="images/clion-ai.png" class="r-stretch">

---

<div class="libs lots">
<div class="lib"><img src="images/The_GNU_logo.png"><div class="name">make</div></div>
<div class="lib"><img src="images/MSBuild_logo_(2024).svg.png"><div class="name">msbuild</div></div>
<div class="lib"><img src="images/CMake_logo.svg.png"><div class="name">cmake</div></div>
<div class="lib"><img src="images/ninja-build.svg"><div class="name">ninja</div></div>
<div class="lib"><img src="images/bazel-icon.svg"><div class="name">bazel</div></div>
<div class="lib"><img src="images/buck-logo.svg"><div class="name">buck</div></div>
</div>
<div class="libs lots">
<div class="lib"><img src="images/SCons-Bricks.png"><div class="name">SCons</div></div>
<div class="lib"><img src="images/meson_logo.png"><div class="name">meson</div></div>
<div class="lib"><img src="images/evoke_logo.png" class="blur-edges"><div class="name">evoke</div></div>
<div class="lib"><img src="images/pixi.png" class="blur-edges"><div class="name">Pixi</div></div>
</div>

---

<div class="libs lots">
<div class="lib"><img src="images/Tar_gz_archive_icon.svg.png"><div class="name">.tar.gz</div></div>
<div class="lib"><img src="images/git.png"><div class="name">submodule</div></div>
<div class="lib"><img src="images/vcpkg-product-mark.png"><div class="name">vcpkg</div></div>
<div class="lib"><img src="images/Conan_package_manager_logo.png"><div class="name">Conan 2.0</div></div>
<div class="lib"><img src="images/CPM.png"></div>
</div>

Notes:
vcpkg conan tarballs, zipfiles, github submodules...CPM vendoring in the code
discuss problems here
why it's tricky
ABI ... helps?

---

<div class="libs lots">
<div class="lib"><img src="images/bash_logo.png"><div class="name">bash</div></div>
<div class="lib"><img src="images/Python-logo-notext.svg.png"><div class="name">python</div></div>
<div class="lib"><img src="images/DragonFull.png"><div class="name">clang-tidy</div></div>
<div class="lib"><img src="images/DragonFull.png"><div class="name">libclang</div></div>
<div class="lib"><img src="images/cpplint.png"><div class="name">cpplint</div></div>
<div class="lib"><img src="images/cppcheck.png"><div class="name">cppcheck</div></div>
<div class="lib"><img src="images/pvs_logo_4.svg"></div>
<div class="lib"><img src="images/Sonar.svg"></div>
<div class="lib"><img src="images/bronto.webp"><div class="name">BrontoSource</div>
</div>

Notes:

- Maybe more in C++ with reflection! Reflection placholder!
- dehydra story
- sanitizers

---

<img src="images/humans.png" class="r-stretch blur-edges">

Notes:

Have you ever thought about the most tricky part of all in assembling C++ programs? The people! Much has been said about this by great people like Kate Gregory and other but, by making the process of assembling pieces as easy as possible you make things great for everyone.

Consider an OSS project:

- well documentewd
- clear rules
- automatic enforcement on checkins
- designs for local changes having local impact
- well manicured bug list

Great for onboarding new folks! And that makes OSS good.

But also works in closed source projects! Encourages other teams to make bugfixes in your code; makes it easier to switch team.

And... AI. Your favourite (or least favourite) new team-mate gets on much better if the process of assembling is clear, and simple.

---

<h2>The process of putting<br> together a set of pieces</h2>

<p class="checkmark fragment">✅</p>

Notes:

C++ is almost defined by the complex process of putting things together. as C++ developers we learn to negotiate all this.

Coming soon is reflection which may help for somet of this. PLACEHOLDER HERE.

Builds are complex, but our software is often complex. Reflects diversity.

WE ARE A DIVERSE BUNCH
