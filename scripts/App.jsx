import { useState, useEffect } from "preact/hooks";
import { renderFormulas } from "./katex-init.js";
import { Sidebar } from "./components/Sidebar.jsx";
import { Home } from "../pages/Home.jsx";
import { SetFunctions } from "../pages/SetFunctions.jsx";
import { VennDiagrams } from "../pages/VennDiagrams.jsx";
import { SampleSpace } from "../pages/SampleSpace.jsx";
import { Events } from "../pages/Events.jsx";
import { ProbabilitySetFunction } from "../pages/ProbabilitySetFunction.jsx";
import { AxiomsOfProbability } from "../pages/AxiomsOfProbability.jsx";
import { CountingPrinciples } from "../pages/CountingPrinciples.jsx";
import { Permutations } from "../pages/Permutations.jsx";
import { Combinations } from "../pages/Combinations.jsx";
import { CombinatorialProbability } from "../pages/CombinatorialProbability.jsx";
import { IndependentEvents } from "../pages/IndependentEvents.jsx";
import { IndependentTrials } from "../pages/IndependentTrials.jsx";
import { MutuallyExclusive } from "../pages/MutuallyExclusive.jsx";
import { Partitions } from "../pages/Partitions.jsx";
import { AdditionRule } from "../pages/AdditionRule.jsx";
import { MultiplicationRule } from "../pages/MultiplicationRule.jsx";
import { CombinedProblems } from "../pages/CombinedProblems.jsx";
import { ConditionalProbability } from "../pages/ConditionalProbability.jsx";
import { BayesTheorem } from "../pages/BayesTheorem.jsx";
import { LawTotalProbability } from "../pages/LawTotalProbability.jsx";
import { RandomVariables } from "../pages/RandomVariables.jsx";
import { PDF } from "../pages/PDF.jsx";
import { CDF } from "../pages/CDF.jsx";
import { DiscreteUniform } from "../pages/DiscreteUniform.jsx";
import { Binomial } from "../pages/Binomial.jsx";
import { Geometric } from "../pages/Geometric.jsx";
import { NegativeBinomial } from "../pages/NegativeBinomial.jsx";
import { Hypergeometric } from "../pages/Hypergeometric.jsx";
import { Poisson } from "../pages/Poisson.jsx";
import { ContinuousUniform } from "../pages/ContinuousUniform.jsx";
import { Exponential } from "../pages/Exponential.jsx";
import { Gamma } from "../pages/Gamma.jsx";
import { Beta } from "../pages/Beta.jsx";
import { Normal } from "../pages/Normal.jsx";
import { Lognormal } from "../pages/Lognormal.jsx";
import { ConditionalDiscrete } from "../pages/ConditionalDiscrete.jsx";

const routes = {
  "": Home,
  "a1-set-functions": SetFunctions,
  "a2-venn-diagrams": VennDiagrams,
  "a3-sample-space": SampleSpace,
  "a4-events": Events,
  "a5-probability-set-function": ProbabilitySetFunction,
  "a6-axioms-probability": AxiomsOfProbability,
  "b1-counting-principles": CountingPrinciples,
  "b2-permutations": Permutations,
  "b3-combinations": Combinations,
  "b4-combinatorial-probability": CombinatorialProbability,
  "c1-independent-events": IndependentEvents,
  "c2-independent-trials": IndependentTrials,
  "d1-mutually-exclusive": MutuallyExclusive,
  "d2-partitions": Partitions,
  "e1-addition-rule": AdditionRule,
  "e2-multiplication-rule": MultiplicationRule,
  "e3-combined-problems": CombinedProblems,
  "f1-conditional-probability": ConditionalProbability,
  "f2-bayes-theorem": BayesTheorem,
  "f3-law-total-probability": LawTotalProbability,
  "urv-a1-random-variables": RandomVariables,
  "urv-a2-pdf": PDF,
  "urv-a3-cdf": CDF,
  "urv-b1-discrete-uniform": DiscreteUniform,
  "urv-b2-binomial": Binomial,
  "urv-b3-geometric": Geometric,
  "urv-b4-negative-binomial": NegativeBinomial,
  "urv-b5-hypergeometric": Hypergeometric,
  "urv-b6-poisson": Poisson,
  "urv-c1-continuous-uniform": ContinuousUniform,
  "urv-c2-exponential": Exponential,
  "urv-c3-gamma": Gamma,
  "urv-c4-beta": Beta,
  "urv-c5-normal": Normal,
  "urv-c6-lognormal": Lognormal,
  "urv-d1-conditional-discrete": ConditionalDiscrete,
};

export function App() {
  const [currentPage, setCurrentPage] = useState("");
  useEffect(() => {
    renderFormulas();
  }, [currentPage]);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.slice(2);
      setCurrentPage(hash || "");
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const PageComponent = routes[currentPage] || Home;

  return (
    <div class="app">
      <Sidebar currentPage={currentPage} />
      <main class="content">
        <div id="page-container">
          <PageComponent />
        </div>
      </main>
    </div>
  );
}
