### Title: "C++: Some Assembly Required"

### Abstract

Join Matt in exploring how the C++ ecosystem has evolved through the interplay of intentional design and emergent collaboration. Standards committees craft language features and compiler teams implement them, but something amazing happens in the spaces between: tools appear, communities form, and solutions emerge that nobody quite planned for. What started as individual developers solving their own problems has grown into an interconnected ecosystem that shapes how we all write C++.

From documentation to testing, from build systems to package managers, we'll examine how the C++ community has assembled itself around shared pain points and accidental standards. Using examples and perhaps too many rainforest metaphors, this talk celebrates not just the language we've built, but the organic ecosystem that's grown up around it. Come discover why C++'s greatest strength might be that it's always required some assembly.

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
- reflection!!!
- (pattern matching?)
- io / senders receivers? don't know much about them

More notes:
- Concentrate on some key folks?
  - Bjarne
  - Stepanov (& Meng Lee check sp)
  - Beman Dawes
  - Dave Abraham
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


---




---

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
