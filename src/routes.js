// @material-ui/icons
import Cloud from "@material-ui/icons/Cloud";
import Person from "@material-ui/icons/Person";
import Folder from "@material-ui/icons/Folder";
import Dashboard from "@material-ui/icons/Dashboard";
import Bookmarks from "@material-ui/icons/Bookmarks";
import Notifications from "@material-ui/icons/Notifications";
// core components/views
import BrowsePage from "views/Browse/Browse.jsx";
import ChallengesPage from "views/Challenges/Challenges.jsx";
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import FilesPage from "views/Files/Files.jsx";
import PublishPage from "views/Publish/Publish.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/browse",
    name: "Browse Database",
    rtlName: "لوحة القيادة",
    icon: Cloud,
    component: BrowsePage,
    layout: "/admin"
  },
  {
    path: "/publish",
    name: "Publish",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Bookmarks,
    component: PublishPage,
    layout: "/admin"
  },
  {
    path: "/files",
    name: "Your Files",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Folder,
    component: FilesPage,
    layout: "/admin"
  },
  {
    path: "/challenges",
    name: "Challenges",
    rtlName: "إخطارات", //TODO:
    icon: Notifications,
    component: ChallengesPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  }
];

export default dashboardRoutes;
