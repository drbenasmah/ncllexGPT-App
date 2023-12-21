import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/Error";
import NcllexGPT from "./pages/NcllexGPT/NcllexGPT";
import Home from "./components/home/Home";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import "./components/web-feat/webApp.css";

// QBank imports

import StickerFlashCardApp from "./Sticker-Flashcard/src/StickerFlashCardApp";

const router = createBrowserRouter([
  {
    path: "/",

    errorElement: <ErrorPage />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "courses", element: <CourseHome /> },
      { path: "team", element: <Team /> },
      { path: "pricing", element: <Pricing /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },

      { path: "flashcard", element: <StickerFlashCardApp /> },
    ],
  },
  { index: true, element: <NcllexGPT /> },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <>{/* <Route path="/tryquiz" element={<TryQuiz />} /> */}</>
    </RouterProvider>
  );
}

export default App;
