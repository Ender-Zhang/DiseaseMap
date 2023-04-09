import * as React from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import { fakeAuthProvider } from "./auth";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import Test from "./routes/test";
import Login from "./routes/login";
import Map from "./routes/map";
import Detail from "./routes/detial";
import User_info from "./routes/user_info";
import LoginComponent from "./components/login";
import NewsList from './routes/new';


export default function App() {
  return (
    // <div>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Login />} />
    //       {/* <Route index element={<LoginSimple />} /> */}
    //       <Route path="test" element={<Test />} />
    //       <Route path="map/:id" element={<Map />} />
    //       <Route path="detail/:id" element={<Detail />} />
    //       <Route path="userinfo/:id" element={<User_info />} />

    //       {/* Using path="*"" means "match anything", so this route
    //             acts like a catch-all for URLs that we don't have explicit
    //             routes for. */}
    //       <Route path="*" element={<ErrorPage />} />
    //     </Route>
    //   </Routes>
    // </div>
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LoginPage />} />

          {/* <Route index element={<Login />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/map" element={<RequireAuth>
            <Map />
          </RequireAuth>
          }
          />
          <Route path="/test" element={<RequireAuth>
            <Test />
          </RequireAuth>
          }
          />
          <Route path="/detail/:id" element={<RequireAuth>
            <Detail />
          </RequireAuth>
          }
          />
          <Route path="/userinfo/:id" element={<RequireAuth>
            <User_info />
          </RequireAuth>
          }
          />
          <Route path="/newslist" element={<RequireAuth>
            <NewsList />
          </RequireAuth>
          }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function Layout() {
  return (
    <div>
      <AuthStatus />

      {/* <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
      </ul> */}

      <Outlet />
    </div>
  );
}

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(null);

  let signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return React.useContext(AuthContext);
}

function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div>
      <p>{auth.user}</p>
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </div>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  console.log("auth: ", auth);
  let from = location.state?.from?.pathname || "/";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;
    console.log("auth: ", auth);
    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      {/* <p>You must log in to view the page at {from}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form> */}
      <LoginComponent auth={auth} />
    </div>
  );
}