import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { NewsPage } from "./pages/NewsPage";
import { NewsArticle } from "./pages/NewsArticle";
import { LecturerProfile } from "./pages/LecturerProfile";
import { Lecturers } from "./pages/Lecturers";
import { ProgramDetail } from "./pages/ProgramDetail";
import { Programs } from "./pages/Programs";
import { Research } from "./pages/Research";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "news", Component: NewsPage },
      { path: "news/:id", Component: NewsArticle },
      { path: "lecturer", Component: Lecturers },
      { path: "lecturer/:id", Component: LecturerProfile },
      { path: "programs", Component: Programs },
      { path: "programs/:id", Component: ProgramDetail },
      { path: "research", Component: Research },
      { path: "about", Component: About },
      { path: "*", Component: NotFound },
    ],
  },
]);
