## What is Assembly?

---

### What is Assembly?

<ol>
<li class=fragment>A set of pieces that work together</li>
<li class=fragment>The act or process of putting together a set of pieces</li>
<li class=fragment>A congregation of people in one place for a purpose</li>
<li class=fragment><em>(politics)</em> A legislative body</li>
<li class=fragment><em>(military)</em> A drum beat signal for troops to assemble</li>
<li class="fragment" data-autoslide="300"><em>(computing)</em> <b>Ellipsis of assembly language</b></li>
</ol>

Thanks [wiktionary](https://en.wiktionary.org/wiki/assembly).

<!-- .element: class="attribution fragment" -->

Notes:

- need to highlight 6 appropriately

---

## Assembly Language

---

<img class="r-stretch drop-shadow" src="images/One_Ring_Blender_Render.png">

By [Peter J. Yost](https://commons.wikimedia.org/w/index.php?curid=98351026) - Own work, CC BY-SA 4.0

<!-- .element: class="attribution" -->

---

<img class="r-stretch blur-edges drop-shadow" src="images/shakespeare.jpg">

“William Shakespeare” by Batyr Ashirbayev, 2019. [Wikimedia Commons.](https://commons.wikimedia.org/wiki/File:William-shakespeare-portrait-of-william-shakespeare-1564-1616-chromolithography-after-hombres-y-mujeres-celebres-1877-barcelona-spain-118154739-57d712c63df78c583373bb00.jpg)

<!-- .element: class="attribution" -->

---

<img src="images/Intel_logo_2023.svg.png" height="100px" style="margin-right: 2em">

<img src="images/arm_logo.png" height="100px">

<img src="images/riscv-color.svg" height="100px" style="margin-left: 2em">
 
<!-- .slide: data-auto-animate -->

---

<img src="images/Intel_logo_2023.svg.png" height="100px">

```asmmy
0fafff    imul edi, edi
89f8      mov eax, edi
c3        ret
```

<img src="images/arm_logo.png" height="100px">

```asmmy
1b007c00  mul w0, w0, w0
d65f03c0  ret
```

<img src="images/riscv-color.svg" height="100px">

```asmmy
02a5053b  mul a0, a0, a0
8082      ret
```

<!-- .slide: data-auto-animate -->

Notes:

---

<img src="images/Intel_logo_2023.svg.png" height="50px">

```asmmy
 ret                  ; no operands
 rep stosb            ; implied operands rdi, al, rcx
 inc ax               ; one operand
 add rcx, rdx         ; two operands
 imul rax, rbx, rdx   ; three operands
 lea rdi, [rax + rsi * 8 + 123]; 3+ operands
 vaddps zmm0{k1}, zmm2, zmm2 ; four
```

<!-- .element: style="font-size: 40%" -->

<img src="images/arm_logo.png" height="50px">

```asmmy
 ret                  ; no operands
 b label              ; one operand
 ldr x0, [x1]         ; two operands
 and x0, x1, x2       ; three operands
 madd w0, w1, w2, w3  ; four operands
```

<!-- .element: style="font-size: 40%" -->

<img src="images/riscv-color.svg" height="50px">

```asmmy
 ret                  ; no operands (ish)
 jal ra, function     ; one operand
 lru t0, 0x5284       ; two operands
 mul a0, t0, t1       ; three operands
```

<!-- .element: style="font-size: 40%" -->

<!-- .slide: data-auto-animate -->

---

<img src="images/Intel_logo_2023.svg.png" height="100px">

<table class="registers">
    <thead>
    <tr>
        <th>63...56</th>
        <th>55...48</th>
        <th>47...40</th>
        <th>39...32</th>
        <th>31...24</th>
        <th>23...16</th>
        <th>15...8</th>
        <th>7...0</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td colspan="8" class="register rax">rax</td>
    </tr>
    <tr>
        <td colspan="4" class="regnote">(zeroed on write)</td>
        <td colspan="4" class="register eax">eax</td>
    </tr>
    <tr>
        <td colspan="6"></td>
        <td colspan="2" class="register ax">ax</td>
    </tr>
    <tr>
        <td colspan="6"></td>
        <td colspan="1" class="register ah">ah</td>
        <td colspan="1"></td>
    </tr>
    <tr>
        <td colspan="7"></td>
        <td colspan="1" class="register al">al</td>
    </tr>
    </tbody>
</table>

<div class="registerlist">
  <div class="register rax">rax</div>
  <div class="register rax">rcx</div>
  <div class="register rax">rdx</div>
  <div class="register rax">rbx</div>
  <div class="register rax">rsp</div>
  <div class="register rax">rbp</div>
  <div class="register rax">rsi</div>
  <div class="register rax">rdi</div>
  <div class="register rax">r8 - r15</div>
</div>
<div class="registerlist">
  <div class="register sse">xmm0 - xmm15</div>
</div>

---

<img src="images/arm_logo.png" height="100px">

<table class="registers">
    <thead>
    <tr class="bits">
        <th>63 ............ 32</th>
        <th>31 ............ 0</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td colspan="2" class="register rax">x0 - x30</td>
    </tr>
    <tr>
        <td colspan="1" class="regnote">(zeroed on write)</td>
        <td colspan="1" class="register eax">w0 - w30</td>
    </tr>
    </tbody>
</table>

---

<img src="images/riscv-color.svg" height="100px">

<table class="registers">
    <thead>
    <tr class="bits">
        <th>63 ........................ 0</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td class="register rax">x0 - x31</td>
    </tr>
    </tbody>
</table>
<div class="registerlist fragment">
  <div>
    <div class="register rax">x0: zero</div>
    <div class="register rax">x1: ra</div>
    <div class="register rax">x2: sp</div>
    <div class="register rax">x3: gp</div>
    <div class="register rax">x4: tp</div>
    <div class="register rax">x5: t0</div>
    <div class="register rax">x6: t1</div>
    <div class="register rax">x7: t2</div>
  </div>
  <div>
    <div class="register rax">x8: s0/fp</div>
    <div class="register rax">x9: s1</div>
    <div class="register rax">x10: a0</div>
    <div class="register rax">x11: a1</div>
    <div class="register rax">x12: a2</div>
    <div class="register rax">x13: a3</div>
    <div class="register rax">x14: a4</div>
    <div class="register rax">x15: a5</div>
  </div>
  <div>
    <div class="register rax">x16: a6</div>
    <div class="register rax">x17: a7</div>
    <div class="register rax">x18: s2</div>
    <div class="register rax">x19: s3</div>
    <div class="register rax">x20: s4</div>
    <div class="register rax">x21: s5</div>
    <div class="register rax">x22: s6</div>
    <div class="register rax">x23: s7</div>
  </div>
  <div>
    <div class="register rax">x24: s8</div>
    <div class="register rax">x25: s9</div>
    <div class="register rax">x26: s10</div>
    <div class="register rax">x27: s11</div>
    <div class="register rax">x28: t3</div>
    <div class="register rax">x29: t4</div>
    <div class="register rax">x30: t5</div>
    <div class="register rax">x31: t6</div>
  </div>
</div>

---

### Blatant plug

<img src="images/mug.jpeg" class="r-stretch blur-edges">

Get yours: [shop.compiler-explorer.com](https://shop.compiler-explorer.com/)

<p class="attribution">All profits support Compiler Explorer</p>

---

<img src="images/CE.png" height="100px">

```cpp []
// setup
  #include <string_view>

constexpr auto valid_chars = "0123456789abcdef";

bool is_valid_id(std::string_view maybe_id) {
  if (maybe_id.size() != 16) {
    return false;
  }
  if (maybe_id.find_first_not_of(valid_chars) != std::string_view::npos) {
    return false;
  }
  return true;
}
```

<!-- .element: data-ce data-ce-options="-O1" -->

---

## Thanks!

Oh wait, is that the time?

<!-- .element class="fragment" -->

---

## What is Assembly?

<ol>
<li>A set of pieces that work together</li>
<li>The act or process of putting together a set of pieces</li>
<li>A congregation of people in one place for a purpose</li>
<li><em>(politics)</em> A legislative body</li>
<li><em>(military)</em> A drum beat signal for troops to assemble</li>
<li><em>(computing)</em> Ellipsis of assembly language</li>
</ol>

Thanks [wiktionary](https://en.wiktionary.org/wiki/assembly).

<!-- .element: class="attribution" -->
