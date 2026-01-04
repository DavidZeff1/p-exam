export function CombinatorialProbability() {
  return (
    <>
      <h1 class="page-title">B.4 Combinatorial Probability</h1>
      <p class="page-subtitle">Combinatorics</p>

      <section class="intro">
        <p>
          Combinatorial probability applies counting techniques to calculate
          probabilities. When all outcomes are equally likely, probability
          becomes a counting problem: count the favorable outcomes and divide
          by the total.
        </p>
      </section>

      <section class="definition-block">
        <h2>Classical Probability Formula</h2>
        <div class="definition">
          <p>
            <strong>Definition:</strong> When all outcomes in a sample space are
            equally likely:
          </p>
          <div class="formula" data-latex="P(E) = \frac{|E|}{|S|} = \frac{\text{number of favorable outcomes}}{\text{total number of outcomes}}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Fair dice, well-shuffled cards, random
            selections — these create equally likely outcomes. Count what you
            want, count everything, divide.
          </p>
        </div>
        <div class="visual">
          <div class="classical-visual">
            <div class="cv-favorable">
              <span class="cv-label">Favorable |E|</span>
              <div class="cv-dots favorable">
                <span>●</span><span>●</span><span>●</span>
              </div>
            </div>
            <div class="cv-divide">÷</div>
            <div class="cv-total">
              <span class="cv-label">Total |S|</span>
              <div class="cv-dots total">
                <span>●</span><span>●</span><span>●</span><span>○</span><span>○</span>
                <span>○</span><span>○</span><span>○</span><span>○</span><span>○</span>
              </div>
            </div>
            <div class="cv-equals">=</div>
            <div class="cv-result">3/10</div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Draw 1 card from a standard deck. P(heart)?
          </p>
          <div class="formula" data-latex="P(\text{heart}) = \frac{13}{52} = \frac{1}{4}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Sampling Without Replacement</h2>
        <div class="definition">
          <p>
            <strong>Setup:</strong> Select r items from n items where each item
            can only be chosen once.
          </p>
          <p>Order matters → use permutations P(n,r)</p>
          <p>Order doesn't matter → use combinations C(n,r)</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Like drawing cards without putting them
            back. The pool shrinks with each draw, and you can't pick the same
            item twice.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Draw 5 cards from a deck. P(all hearts)?
          </p>
          <div class="formula" data-latex="P(\text{5 hearts}) = \frac{\binom{13}{5}}{\binom{52}{5}} = \frac{1287}{2598960} \approx 0.000495"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Sampling With Replacement</h2>
        <div class="definition">
          <p>
            <strong>Setup:</strong> Select r items from n items where each item
            is returned before the next selection.
          </p>
          <p>Order matters → nʳ arrangements</p>
          <p>Order doesn't matter → C(n+r−1, r) multisets</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Like rolling a die multiple times — each
            roll is independent with the same 6 outcomes available.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Roll a die 3 times. P(all different numbers)?
          </p>
          <div class="formula" data-latex="P(\text{all different}) = \frac{6 \times 5 \times 4}{6^3} = \frac{120}{216} = \frac{5}{9}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>The Birthday Problem</h2>
        <div class="definition">
          <p>
            <strong>Problem:</strong> In a group of n people, what's the
            probability that at least two share a birthday?
          </p>
          <div class="formula" data-latex="P(\text{at least one match}) = 1 - P(\text{all different})"></div>
          <div class="formula" data-latex="P(\text{all different}) = \frac{365}{365} \times \frac{364}{365} \times \frac{363}{365} \times \cdots \times \frac{365-n+1}{365}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> It's easier to count the complement. For
            all birthdays to differ, each new person must avoid all previous
            birthdays. The probability drops faster than intuition suggests.
          </p>
        </div>
        <div class="visual">
          <div class="birthday-table">
            <div class="bday-row header">
              <span>People</span>
              <span>P(match)</span>
            </div>
            <div class="bday-row"><span>10</span><span>11.7%</span></div>
            <div class="bday-row"><span>23</span><span>50.7%</span></div>
            <div class="bday-row"><span>30</span><span>70.6%</span></div>
            <div class="bday-row"><span>50</span><span>97.0%</span></div>
            <div class="bday-row"><span>70</span><span>99.9%</span></div>
          </div>
          <p class="visual-caption">Only 23 people needed for >50% chance!</p>
        </div>
      </section>

      <section class="definition-block">
        <h2>Poker Hands</h2>
        <div class="definition">
          <p>
            <strong>Setup:</strong> 5 cards from a 52-card deck. Total hands:
          </p>
          <div class="formula" data-latex="\binom{52}{5} = 2,598,960"></div>
        </div>
        <div class="visual">
          <div class="poker-table">
            <div class="poker-row header">
              <span>Hand</span>
              <span>Count</span>
              <span>Probability</span>
            </div>
            <div class="poker-row">
              <span>Royal Flush</span>
              <span>4</span>
              <span>0.000154%</span>
            </div>
            <div class="poker-row">
              <span>Straight Flush</span>
              <span>36</span>
              <span>0.00139%</span>
            </div>
            <div class="poker-row">
              <span>Four of a Kind</span>
              <span>624</span>
              <span>0.0240%</span>
            </div>
            <div class="poker-row">
              <span>Full House</span>
              <span>3,744</span>
              <span>0.144%</span>
            </div>
            <div class="poker-row">
              <span>Flush</span>
              <span>5,108</span>
              <span>0.197%</span>
            </div>
            <div class="poker-row">
              <span>Straight</span>
              <span>10,200</span>
              <span>0.392%</span>
            </div>
            <div class="poker-row">
              <span>Three of a Kind</span>
              <span>54,912</span>
              <span>2.11%</span>
            </div>
            <div class="poker-row">
              <span>Two Pair</span>
              <span>123,552</span>
              <span>4.75%</span>
            </div>
            <div class="poker-row">
              <span>One Pair</span>
              <span>1,098,240</span>
              <span>42.3%</span>
            </div>
            <div class="poker-row">
              <span>High Card</span>
              <span>1,302,540</span>
              <span>50.1%</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Count full houses (3 of one rank + 2 of another):
          </p>
          <div class="formula" data-latex="\underbrace{\binom{13}{1} \binom{4}{3}}_{\text{triple}} \times \underbrace{\binom{12}{1} \binom{4}{2}}_{\text{pair}} = 13 \times 4 \times 12 \times 6 = 3744"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Hypergeometric Distribution</h2>
        <div class="definition">
          <p>
            <strong>Setup:</strong> A population of N items contains K "successes."
            Draw n items without replacement. P(exactly k successes)?
          </p>
          <div class="formula" data-latex="P(X = k) = \frac{\binom{K}{k} \binom{N-K}{n-k}}{\binom{N}{n}}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Choose k successes from K available AND
            choose n−k failures from N−K available, divided by all ways to
            choose n from N.
          </p>
        </div>
        <div class="visual">
          <div class="hyper-visual">
            <div class="hyper-pool">
              <div class="hyper-success">
                <span class="hyper-label">K successes</span>
                <div class="hyper-items">●●●●●</div>
              </div>
              <div class="hyper-failure">
                <span class="hyper-label">N−K failures</span>
                <div class="hyper-items">○○○○○○○</div>
              </div>
            </div>
            <div class="hyper-arrow">↓ draw n</div>
            <div class="hyper-sample">
              <span>k successes + (n−k) failures</span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> A box has 10 bulbs, 3 defective. Draw 4.
            P(exactly 1 defective)?
          </p>
          <div class="formula" data-latex="P(X=1) = \frac{\binom{3}{1}\binom{7}{3}}{\binom{10}{4}} = \frac{3 \times 35}{210} = \frac{105}{210} = 0.5"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Lottery Probability</h2>
        <div class="definition">
          <p>
            <strong>Setup:</strong> Choose k numbers from n (order doesn't matter,
            no repeats). Match all k to win.
          </p>
          <div class="formula" data-latex="P(\text{jackpot}) = \frac{1}{\binom{n}{k}}"></div>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Only one combination wins. The denominator
            is all possible tickets — that's your odds.
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Pick 6 numbers from 1–49 (like many lotteries):
          </p>
          <div class="formula" data-latex="P(\text{win}) = \frac{1}{\binom{49}{6}} = \frac{1}{13,983,816} \approx 0.00000715\%"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Matching Problems</h2>
        <div class="definition">
          <p>
            <strong>Setup:</strong> n items are randomly assigned to n positions.
            What's the probability of exactly k matches?
          </p>
          <div class="formula" data-latex="P(k \text{ matches}) = \frac{\binom{n}{k} D(n-k)}{n!}"></div>
          <p>where D(m) is the number of derangements of m items.</p>
        </div>
        <div class="intuition">
          <p>
            <strong>Intuition:</strong> Choose which k positions match, then
            derange the rest (none of the remaining can match).
          </p>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> 4 people grab random hats. P(exactly 2 get their own)?
          </p>
          <div class="formula" data-latex="P(2 \text{ matches}) = \frac{\binom{4}{2} \times D(2)}{4!} = \frac{6 \times 1}{24} = \frac{1}{4}"></div>
        </div>
      </section>

      <section class="definition-block">
        <h2>Committee Problems</h2>
        <div class="definition">
          <p>
            <strong>Common types:</strong>
          </p>
          <ul class="committee-list">
            <li>Form a committee of size r from n people → C(n,r)</li>
            <li>Must include specific person → C(n−1, r−1)</li>
            <li>Must exclude specific person → C(n−1, r)</li>
            <li>At least one from subgroup → Total − None from subgroup</li>
          </ul>
        </div>
        <div class="example">
          <p>
            <strong>Example:</strong> Committee of 4 from 6 men and 5 women.
            P(at least 2 women)?
          </p>
          <div class="formula" data-latex="P(\geq 2W) = \frac{\binom{5}{2}\binom{6}{2} + \binom{5}{3}\binom{6}{1} + \binom{5}{4}\binom{6}{0}}{\binom{11}{4}}"></div>
          <div class="formula" data-latex="= \frac{150 + 60 + 5}{330} = \frac{215}{330} = \frac{43}{66} \approx 0.652"></div>
        </div>
      </section>

      <section class="key-properties">
        <h2>Problem-Solving Strategy</h2>
        <div class="properties-grid">
          <div class="property">
            <h3>Step 1</h3>
            <p>Identify the sample space</p>
            <p>Count total outcomes |S|</p>
          </div>
          <div class="property">
            <h3>Step 2</h3>
            <p>Define the event E</p>
            <p>Count favorable outcomes |E|</p>
          </div>
          <div class="property">
            <h3>Step 3</h3>
            <p>Check: order matters?</p>
            <p>Permutation vs Combination</p>
          </div>
          <div class="property">
            <h3>Step 4</h3>
            <p>Consider complement</p>
            <p>"At least" → 1 − P(none)</p>
          </div>
        </div>
      </section>
    </>
  );
}
