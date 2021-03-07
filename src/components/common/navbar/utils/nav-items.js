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
        name: "Tv Shows",
        path: "/tv-shows"
    },
    {
        name: "People",
        path: "/people"
    },
    {
        name: "Favorites",
        path: "/my-favorites"
    },
];

export default navItems;

