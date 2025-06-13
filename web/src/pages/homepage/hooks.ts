// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export type ActivePage = "home" | "about" | "techstack" | "projects" | "contact";

// export const useHooks = () => {
//   const [activePage, setActivePage] = useState<ActivePage>("home");
//   const navigate = useNavigate();
//   const openPage = (page: ActivePage) => {
//     setActivePage(page);
//     const newUrl = `/${page}`;

//     navigate(newUrl);
//   };

//   return { activePage, openPage };
// };
