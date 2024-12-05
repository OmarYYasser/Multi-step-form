import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SpinnerPage from "./components/SpinnerPage";

const PersonalInfo = lazy(() => import("./pages/PersonalInfo"));
const SelectPlan = lazy(() => import("./pages/SelectPlan"));
const Pick = lazy(() => import("./pages/Pick"));
const FinishUp = lazy(() => import("./pages/FinishUp"));
const Confirm = lazy(() => import("./pages/Confirm"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerPage />}>
        <Routes>
          <Route
            index
            path="/"
            element={<Navigate replace to="personal-info" />}
          />
          <Route index path="personal-info" element={<PersonalInfo />} />
          <Route index path="select-plan" element={<SelectPlan />} />
          <Route index path="pick" element={<Pick />} />
          <Route index path="finish-up" element={<FinishUp />} />
          <Route index path="confirm" element={<Confirm />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
