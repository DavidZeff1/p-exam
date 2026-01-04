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
