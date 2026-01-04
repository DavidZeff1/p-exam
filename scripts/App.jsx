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
