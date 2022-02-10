import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ConfirmAccountComponent,
  CreateAccountComponent,
  LoginComponent,
} from "./pages";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Toaster } from "react-hot-toast";

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing/login" element={<LoginComponent />} />
        <Route
          path="/landing/create-account"
          element={<CreateAccountComponent />}
        />
        <Route
          path="/landing/confirm-account"
          element={<ConfirmAccountComponent />}
        />
      </Routes>
      <Toaster position="bottom-center" />
    </BrowserRouter>
  );
}
