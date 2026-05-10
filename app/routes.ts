import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("blog", "routes/blog.tsx"),
    route("blog/:which", "routes/single.tsx"),
    route("about", "routes/about.tsx"),
    route('resume', 'routes/resume.tsx'),
    route('*', 'routes/notfound.tsx')
] satisfies RouteConfig;
