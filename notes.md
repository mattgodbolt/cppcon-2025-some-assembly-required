### Title: "C++: Some Assembly Required"

### Abstract

Join Matt in exploring how the C++ ecosystem has evolved through the interplay of intentional design and emergent collaboration. Standards committees craft language features and compiler teams implement them, but something amazing happens in the spaces between: tools appear, communities form, and solutions emerge that nobody quite planned for. What started as individual developers solving their own problems has grown into an interconnected ecosystem that shapes how we all write C++.

From documentation to testing, from build systems to package managers, we'll examine how the C++ community has assembled itself around shared pain points and accidental standards. Using examples and perhaps too many rainforest metaphors, this talk celebrates not just the language we've built, but the organic ecosystem that's grown up around it. Come discover why C++'s greatest strength might be that it's always required some assembly.


*** IF I TAKE OUT RAINFOREST METAPHORS UPDATE THE ABSTRACT ***

PRE_RUN NOTES:

CHECK THE INTEL?ARM?RISCV ASM PAGE WITH THE SCREEN RESOLUTION!!! AND THE LIBRARY PAGE

TAKE A PHOTO OF AUDIENCE

---

todos: 
- CONCLUSION shore that up

---

First pseudorunthrough Sep 4th
- 15m for intro. could spend more time on asm, but chose to skip through
- 10m for libraries.
- ... that was about as far as I had done
- TODO process of putting together (10m?)
- TODO legislative body (10m)
- TODO congregation (5-10m?)
- TODO Call to action (5-10m?)
- == 55-65m... hmm
  - maybe others will flesh out more
  - maybe I can go slower
  - maybe more on the OG assembly

Second pseudorun Sep 6h:
- 20m for intro and asm fake out though still needs work
- 10m for libraries still, more fleshed out but can go slower
- process 10m; probably needs to be 15m. needs human element and dehydra personal story. possible link to reflection
- ... stopped here for a break ...
- TODOs for the rest. zomg

Third actual run through Sep 8th
- ~20m to end of intro and asm. Could spend longer on asm, as I don't have _as much_ content as I'd like after.
- 30m to "boost"
- Over in 1h 2m, even though I laboured a bit over the intro? (maybe not looking back)
- Need some info on "when boost started" and that in speaker notes
- MORE LIBRARIES; looked thin when I presented (but was on higher rez screen)
- Add a list of SGs
- "Human" part weak
- MORE CLARITY on the process of an idea going through
  - use example of "switch constexpr" maybe?
  - read up on this
- Conclusion woolly still
- Perhaps need a call back to assembly language too at the end

Fourth runthrough with Jason, notes broken out bigger section below

Fifth runthrough:
- Total 65m (good I guess?)
- 22m to get to "Compiler Explorer"
- 40m to get to "process"
- 52m to get to ISO/IEC SC 22
  - "What is SC" ADD NOTES
  - "What is SG" ADD NOTES
- Fake out ending (weak!) at 27m

## Remaining todos
- Re-read all ideas and make notes
- More thinking about IDEs etc, audience participation
- THINK more about vs other languages
- Builds; more ask the audience
- Replace weak "thanks" slide with something else
- REVISE THE SPEAKER NOTES CAREFULLY

---

READ THROUGH BELOW IDEAS AND flesh out anything with them

Notes from Jason:

**AUDIENCE PARTICIPATION**

- explain more on the intel/arm/ "square" function
  - go ...
  - `constexpr` lol
  - calling convention
  - no unroll loops -fno-unroll-loops
  - clang? other exploring

"I think it'd be amusing if your sh4 slide had another side after it that just showed a Saturn and a Casio calculator and you said "this processor was used in these awesome devices" and just left it at that with no other comment"
https://www.casio.com/us/scientific-calculators/product.FX-9750-F91W/

STL
- lisp version of STL common algorithm
  - find og stepanov
- david stone gave a talk: "functions want to be free"
  - functions should be stl design
- boost pre standard? NO

other libs:
- mdspan !! standardization 

process of putting together
ask crowd?

- compilers (EDG?)
  - 
IDEs?
- moo

Builds
- build systems maybe explain why?
- SCons
- Question!!! who uses:
  - POLL THE AUDIENCE
- cppcheck missing from tools
- cpplint maybe kill?

committee
- WGxx do not fit on screen

weak on JS other languages

--- congregation
- c++ count done
Denver COLORADO jason to send picture

---

Dump of new ideas in no particular order

- C++ has always been "some assembly required"
  - No batteries included - don't pay for what you don't use
- Roguewave and others contributing to STL
- IKEA furniture "assembly" instructions
  - onboarding new people
  - how to "assemble" (compile) the software for a project
  - led to sort of standardization of builds (ish), CMake. make, ninja, meson (to be researched), SCons etc etc
- Different types of assembly:
  - IKEA (documentation)
  - Welsh (standard committee, big companies)
  - School (informal meetups?
  - Code :)
- My story?
  - Assembly?
- C++ needs all of these
- easy to "assemble" -> easy for new folks to contribute
  - open source model !
  - but works in closed source too
  - AND makes project AI-able
    - Segue to interlude on CE's use of AI?
    - also linters, pre-commit hooks, etc
      - good for AI too
      - "local changes should have local impact" -> also good for humans
- Examples of things that got standardized
  - STL itself
  - boost -> shared pointers (research more and others)
  - fmt -> libfmt
  - Howard Hinnant's date library
  - TODO find more here
- Need strong call to action
- People having issues with C++: https://www.reddit.com/r/cpp/s/0SkkqBfUGd
- AI -> Trusting in tech too much. Show my car disaster

- Bjarne! Linchpin that holds together?
- ranges boost beman fmt
- `#embed` when things go wrong?
- concepts
- reflection!!!
- (pattern matching?)
- io / senders receivers? don't know much about them
- CONFERENCES! :D
- Sanitizers

More notes:
- Concentrate on some key folks?
  - Bjarne
  - Stepanov (& Meng Lee check sp)
  - Beman Dawes
  - Dave Abrahams
  - Peter Dimov
  - Anthony Williams
  - Howard Hinnant
  - Victor Z
  - Eric Niebler
  - Barry Revzin
  - Herb
  - MANY MANY MORE might be a boondoggle to mention too many

- other connections:
  - reflection
  - ranges
  - tooling, libclang
    - LLVM foundation/ clang
  - pattern matching
  - "flux" ? tristan brindle

Assembling it means: Knowing how stuff _really_ works

Ecosystem: maybe downplay rainforest thing?

abstract says:
- documentation
- testing (googltest, doctest, Catch, Catch2, Catch22 coming soon?)
- package managers?
  - conan
  - vcpkg
  - but also CMake and CPM directly

WHAT DO I WANT TO ACHIEVE?!

- make people appreciate what we have, and how we got here
  - incorporate as much as possible from other talks
  - Likely to be a lot of reflection, and maybe AI
- make people think about the future
  - Danger of trusting AI/technology - car story? :)
- make people consider their part in the future of C++


---

Time sketch as of Aug 23rd
- 10m intro?
- 10m assembly the real thing?
  - THIS COULD SCALE UP/DOWN
  - "oh no we ran out of content", go back to the list
- 15m set of pieces
- 15m process of putting together
- 10m congregation
- 10m legislative body
- 5m Signal for troops to assemble
  - play down miltary

total = 75m, ABOUT right
---


### intro
- INTRO my journey
  - Assembly always important to me
  - How I came to be a C++ programmer
  - asm -> C -> C++
  - But still assembly at heart
- BUT WHY IS ASSEMBLY STILL SO IMPORTANT IN C++?
- What _is_ assembly?
  - show some asm
  - wiktionary (7 defs)
    - A set of pieces that work together in unison as a mechanism or device. 
    - the act of assembly (some instructions)
    - Congregation of people
    - A legislative body
    - Military drum beat
    - "Ellipsis of assembly language."
    - .NET
### MEAT
- "Ellipsis of assembly language."
  - actual assembly
  - why I think it's important to know
  - CE link here?
  - demo new feature ?
  - CAR STORY
- But what about the other definitions?
- "A set of pieces" - library
  - talk about boost, beman
  - other libraries
  - important part of C++!
- "Act of assembly" -> IKEA
  - documentation, on roads/ramps
  - tooling? cmake/make/ninja/build
  - sanitizers?
- "Congration of people"
  - PHOTO OF THEM cute trick but stressful :)
  - Conferences!
  - Meetups, support your local meetup
  - Online: slack, discord, etc
-  "Legislative body"
  - Standards committee
  - process!
  - reflection! etc
- "Military drum beat" - maybe not?
- .NET ditto
### Conclusion and call to action
- TBD

---

# OLD IDEA!

## Core Narrative Arc

- Bait and switch on "assembly" - they expect machine code, get ecosystem assembly (though the abstract gives it away)
- Individual frustration → shared solution → accidental infrastructure
- The ecosystem becoming self-aware (Boost → Beman)
- No master plan, just emergence (Costa Rica rainforest photos throughout)

## Block Breakdown (80 minutes + 10 Q&A)

### Blocks 1-3: Opening & Hook (15 min)

**Block 1: Opening (5 min)**

- "Some Assembly Required" - reveal the double meaning
- Set expectations: not just about machine code
- "Batteries not included" philosophy of C++

**Block 2: CE Origin Story (5 min)**

- "I just wanted to see the assembly"
- Personal story of scratching own itch
- Accidentally became teaching infrastructure worldwide
- Classic emergence pattern

**Block 3: Ecosystem Metaphor (5 min)**

- Costa Rica rainforest photos
- No master gardener, no grand design
- Emergence, adaptation, symbiosis
- Set up the theme for the rest of the talk

### Blocks 4-7: The Intentional Foundation (20 min)

**Block 4: Standards Committee (5 min)**

- The careful gardeners
- Intentionally minimal standard library
- Creates gaps... which create opportunities

**Block 5: Compilers & libclang (5 min)**

- Meant just for compiling
- libclang accidentally enabled entire tooling ecosystem
- Example of unintended consequences

**Block 6: Batteries Not Included (5 min)**

- Why std:: is minimal by design
- Philosophy: stability over features
- Creates the need for external solutions

**Block 7: Boost - Original Emergent Ecosystem (5 min)**

- Started to fill C++98 gaps
- Became accidental testing ground for standard
- shared_ptr, filesystem, format examples
- Not designed as feeder system, emerged as one

### Blocks 8-12: The Beautiful Accidents (25 min)

**Block 8: The Boost Effect (5 min)**

- Specific examples of Boost → std:: pipeline
- Some libraries never meant for standard (Boost.Python)
- Community influence on language direction

**Block 9: Documentation Emergence (5 min)**

- CPPReference story
- Community-maintained, became the de facto source
- Even committee members use it
- Example of community filling unplanned gap

**Block 10: Testing Revolution (5 min)**

- Catch2: Phil Nash "just wanted testing not to suck"
- Single header (self-contained philosophy)
- Spawned entire style of testing libraries
- Individual frustration → community standard

**Block 11: Tool Convergence (5 min)**

- clang-format: ended the style wars
- ccache: someone wanted faster rebuilds, now essential
- Tools that became infrastructure without planning

**Block 12: Package Managers (5 min)**

- vcpkg/conan: multiple solutions to same pain
- Competition and convergence
- Community routing around missing infrastructure

### Blocks 13-15: Future & Reveal (15 min)

**Block 13: Pattern Recognition (5 min)**

- Boost → Beman Project
- Ecosystem becoming self-aware
- Consciously recreating emergence patterns
- "What if we did this on purpose?"

**Block 14: CE's AI Assembly Explainer (5 min)**

- "But assembly is still hard to understand..."
- Live demo of new feature
- AI as part of ecosystem (augmenting, not replacing)
- Another example of solving personal pain point

**Block 15: The Next Evolution (5 min)**

- AI tools, modern collaboration
- What patterns are we seeing?
- Invitation to contribute

### Block 16: Wrap-up (5 min)

- Your itch could be next
- No heroes, just gardeners
- Everyone tending their bit of the forest
- Call to action: what pain will you solve?

## Key Examples to Weave Throughout

- **Your tools**: CE, jsbeeb (self-deprecating examples)
- **Other emergent tools**: wandbox, cppinsights, quick-bench, cppreference
- **Infrastructure**: ccache, ninja, CMake (ugly but works)
- **Standards influence**: fmtlib→std::format, range-v3→ranges
- **Social infrastructure**: Discord, Stack Overflow, conferences

## Technical Elements

- Get actual assembly on screen at some point (it's your thing!)
- But make it accessible - lead into AI explainer
- Balance technical depth with keynote accessibility

## Reminders

- Self-deprecating humor throughout (but not mentioned in abstract!)
- Respect for standards committee while noting gaps
- No language wars or controversy
- Focus on community and collaboration
- Use those Costa Rica photos liberally

## Research/Prep TODO

- Gather specific dates/stories for tool origins
- Find good assembly examples for demo
- Test AI explainer feature thoroughly
- Collect ecosystem visualization ideas
- Maybe reach out to other tool creators for quotes?

## Potential Flow Issues to Watch

- Don't let Boost section run too long
- Keep package manager section focused (could explode)
- Leave time for AI demo (technical demos always take longer)
- Practice transitions between blocks
