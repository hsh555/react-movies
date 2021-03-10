const navItems = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Movies",
        path: "/movies",
        hasSubMenu: true,
        subMenu: [
            {
                name: "popular",
                type: "popular",
                path: "/movies?type=popular"
            },
            {
                name: "top rated",
                type: "top_rated",
                path: "/movies?type=top_rated"

            },
            {
                name: "upcoming",
                type: "upcoming",
                path: "/movies?type=upcoming"
            }
        ]
    },
    {
        name: "Favorites",
        path: "/favorites"
    },
];

export default navItems;

