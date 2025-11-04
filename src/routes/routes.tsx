import { Router, Route } from "@solidjs/router";
import { HopeProvider } from "@hope-ui/solid";
import Home from "../pages/Home";
import Sidebar from "../partial/sidebar/sidebar"
import bg from "../assets/svg/bg-consultax.svg";

const Root = () => {
  return (
    <HopeProvider>
      <div class="flex h-screen">
        <Sidebar />

        <div class="flex-1 overflow-auto">
          <Router>
            <Route
              path="/"
              component={() => (
                <div class="min-h-screen p-6">
                  <Home />
                </div>
              )}
            />
          </Router>
        </div>
      </div>
    </HopeProvider>
  );
};

export default Root;
