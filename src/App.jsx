import { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SpinnerPage from "./components/SpinnerPage";
import { Suspense } from "react";

const PersonalInfo = lazy(() => import("./pages/PersonalInfo"));
const SelectPlan = lazy(() => import("./pages/SelectPlan"));
const Pick = lazy(() => import("./pages/Pick"));
const FinishUp = lazy(() => import("./pages/FinishUp"));
const Confirm = lazy(() => import("./pages/Confirm"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerPage />}>
        <Routes>
          <Route path="/" element={<Navigate replace to="personal-info" />} />

          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="select-plan" element={<SelectPlan />} />
          <Route path="pick" element={<Pick />} />
          <Route path="finish-up" element={<FinishUp />} />
          <Route path="confirm" element={<Confirm />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
