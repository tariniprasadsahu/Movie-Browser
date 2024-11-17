import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2030{" "}
                <Link to="/" className="hover:underline">
                    Cinemate
                </Link>
                . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a
                        href="https://www.instagram.com/gullu_._7_._/?hl=en/"
                        target="_blank"
                        className="mr-4 hover:underline md:mr-6 "
                        rel="noreferrer"
                    >
                        Instagram
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/tarini-prasad-sahu-520784235//"
                        target="_blank"
                        className="mr-4 hover:underline md:mr-6"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/tariniprasadsahu"
                        target="_blank"
                        className="mr-4 hover:underline md:mr-6"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                </li>
            </ul>
        </footer>
    );
};
