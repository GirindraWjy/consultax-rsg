import { Router, Route, Navigate } from "@solidjs/router";
import { HopeProvider } from "@hope-ui/solid";
import { Transition } from "solid-transition-group";
import Home from "../pages/Home/Home";
import Pph from "../pages/pph/pph";
import CalcTable from "../pages/grant-tax/gran-tax";
import InheriTax from "../pages/inheritance-tax/inheritance-tax";
import Message from "../pages/message/message";
import Sidebar from "../partial/sidebar/sidebar";
import Profile from "../pages/profile/profile";
import bg from "../assets/png/bg-consultax.png";

const Root = () => {
  const renderPage = (Component: any) => (
    <div class="relative min-h-screen p-6">
      <Component />
    </div>
  );

  return (
    <HopeProvider>
      <div class="flex h-screen w-screen overflow-hidden bg-[#F8F7FE]">
        <Sidebar />

        <div
          class="flex-1 relative overflow-auto"
          style={{
            "background-image": `url(${bg})`,
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat",
          }}
        >
          <div class="absolute inset-0 backdrop-blur-sm"></div>

          <div class="relative h-full w-full">
            <Router>
              <Route path="/" component={() => <Navigate href="/home" />} />
              <Route path="/home" component={() => renderPage(Home)} />
              <Route path="/profile" component={() => renderPage(Profile)} />
              <Route path="/pph" component={() => renderPage(Pph)} />
              <Route path="/grant-tax" component={() => renderPage(CalcTable)} />
              <Route path="/inheritance-tax" component={() => renderPage(InheriTax)} />
              <Route path="/message" component={() => renderPage(Message)} />
            </Router>
          </div>
        </div>
      </div>
    </HopeProvider>
  );
};

export default Root;
