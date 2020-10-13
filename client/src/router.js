import Vue from "vue";
import Router from "vue-router";

const Home = () => import("./views/Home.vue");
const Projects = () => import("./views/Projects.vue");
const About = () => import("./views/About.vue");
const Expertise = () => import("./views/Expertise.vue");
const Counter = () => import("./views/Counter.vue");

const Contact = () => import("./views/Contact.vue");
const Logo = () => import("./views/Logo.vue")
const Team = () => import("./views/Team.vue");
const Languages = () => import("./views/Languages.vue");
const Settings = () => import("./views/Settings.vue");

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [{
			path: "/",
			
			component: Home,


		},
		{
			path: '/home',
			component:Home,
		},

		{
			path: "/logo",
			component: Logo,
		},
		{
			path: "/contact",
			component: Contact,
		},
		{
			path: "/counter",
			component: Counter,
		},
		{
			path: "/projects",
			component: Projects,
		},
		{
			path: "/expertise",
			component: Expertise,
		},
		{
			path: "/about",
			component: About,
		},
		{
			path: "/team",
			component: Team,
		},

		{
			path: "/languages",
			component: Languages,
		},
		{
			path: "/settings",
			component: Settings,
		},
	],
});