<h2>A set of pieces <br>that work together</h2>

<!-- .element: class="r-fit-text" -->

---

## Libraries

Notes:

A language is a great thing, and C++ is a powerful language. However, if you have to do everythign yourself every time, then it becomes a drag. Part of the appeal of a language is the ecosystem of libraries that come with it, or are easily accessible.

Now, we'll get to the ease of accessing libraries in a second, but first, let's talk about the amazing library that ships with every C++ compiler - the Standard Template Library.

---

## <span data-id="ST">ST</span><span data-id="epanov" style="font-size: 0px">epanov and </span><span data-id="L">L</span><span data-id="ee" style="font-size: 0px">ee<span>

<!-- .slide: data-auto-animate -->

Notes:

- 70s -> 90s, Stepanov, first at GE with David Musser
- Later HP
- Scheme -> Ada -> C++
- "templates like Ada - explicit instantiation"
- implicit "crucial"
- STL -> early Jan 94, Andy Koenig "if you want STL in the standard, we need the proposal by the 25th"
- "Are you crazy?"
- 80h weeks
- 80% approval, largest ever

In the 70s through to early 90s, Alexander Stepanov (with the later help of Meng Lee) was working on a generic programming library (working with and following on from David Musser), first in Scheme, then Ada, before trying out C++. At first it wasn't possible to achieve his goals in C++ - as templates hadn't been invented yet. Stepanov apparently argued with Bjarne that C++'s templates should be more like Ada's, with explicit instantiation. Bjarne didn't listen, and ultimately their implicit nature turned out to be "crucial" for STL (Stepanov's words).

One of the interesting innovations was the fact that the complexity guarantees were part of the spec.

We very nearly didn't get the STL, early January 1994, Andy Koenig emailed Stepanov to say "if you want STL in the standard, we need the proposal by the 25th". Stepanov: "Are you crazy?" - Stepanov and Meng Lee worked 80h weeks to create the proposal, reimplementing several pieces as they found flaws. 80% approval from the committee - largest proposal ever. Even after they said they wouldn't accept major proposals!

---

## <span data-id="ST" style="font-weight: bold">ST</span><span data-id="epanov">epanov and </span><span data-id="L" style="font-weight:bold">L</span><span data-id="ee">ee<span>

<img src="images/stepanov.png" class="r-stretch blur-edges">

<!-- .slide: data-auto-animate -->

Notes:

Stepanov said the STL should stand for "STepanov and Lee".

Thanks to Hewlett-Packard for letting Stepanov make the STL free for all. And to PJ Plauger at Dinkumware for taking the STL and making it production-ready, and licensing it to MS.

It set the tone of what _I_ think of as C++, and generic programming. But it's not the only library in town, and it's grown a lot since!

---

<div class="boosties">
<div class="fragment cpp11">unique_ptr</div>
<div class="fragment cpp11">shared_ptr</div>
<div class="fragment cpp11">weak_ptr</div>
<div class="fragment cpp11">type_traits</div>
<div class="fragment cpp11">regex</div>
<div class="fragment cpp11">random</div>
<div class="fragment cpp11">tuple</div>
<div class="fragment cpp11">thread</div>
<div class="fragment cpp11">chrono</div>
<div class="fragment cpp11">array</div>
<div class="fragment cpp11">function</div>
<div class="fragment cpp11">reference_wrapper</div>
<div class="fragment cpp14">make_unique</div>
<div class="fragment cpp17">optional</div>
<div class="fragment cpp17">any</div>
<div class="fragment cpp17">variant</div>
<div class="fragment cpp17">filesystem</div>
<div class="fragment cpp17">string_view</div>
<div class="fragment cpp23">flat_map</div>
<div class="fragment cpp23" data-autoslide="0">stacktrace</div>
</div>

<!-- .slide: data-autoslide="200" -->

---

<img src="images/boost.png" class="r-stretch blur-edges">

Notes:

Field experience!
boost filesystem 19 years !

High quality components, not _necessarily_ targeted for standardization, e.g.
- boost::spirit
- boost::python
- boost::computer

etc

---

## Beman

Notes:
- Beman Dawes passed away December 2020
- Announced 2024, streamlined process. 
- Beman _explicitly_ states plan for standardization.
- 13 libraries, including 
  - optional extensions
  - scope
  - task
  - any_view.

### Complementary to boost. NOT competitive

---

## other new libs making it into C++

TODO

- ranges
  - barry <img src="images/barry.png" class="blur-edges">
- fmt
  - victor <img src="images/victor.png" class="blur-edges">
- date
  - howard <img src="images/howard.png" class="blur-edges">
- gsl

---

## Non-Standard Library

TODO

- abseil
- folly
- poco
- Qt
- nlohmann/json, RapidJSON
- Dear ImGui
- eigen
- gtest/catch2/doctest
- flux
- hana's stuff coro, ctre

---

<h2>A set of pieces <br>that work together</h2>

CHECKmark todo

Notes:

C++ has a large set of pieces that work together. The ABI, while contentious, does help us keep those pieces working together.
