import React from "react";
import { Link } from "react-router-dom";

const BlogSidebar = () => {
    return (
        <div className="sidebar-style">
            <div className="sidebar-widget">
                <h4 className="pro-sidebar-title">Search </h4>
                <div className="pro-sidebar-search mb-55 mt-25">
                    <form className="pro-sidebar-search-form" action="#">
                        <input type="text" placeholder="Search here..." />
                        <button>
                            <i className="pe-7s-search" />
                        </button>
                    </form>
                </div>
            </div>
            <div className="sidebar-widget">
                <h4 className="pro-sidebar-title">Newbook </h4>
                <div className="sidebar-project-wrap mt-30">
                    <div className="single-sidebar-blog">
                        <div className="sidebar-blog-img">
                            <Link
                                to={
                                    process.env.PUBLIC_URL +
                                    "/blog-details-standard"
                                }
                            >
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/img/blog/s1.jpeg"
                                    }
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="sidebar-blog-content">
                            <span>Sale Book</span>
                            <h4>
                                <Link
                                    to={
                                        process.env.PUBLIC_URL +
                                        "/blog-details-standard"
                                    }
                                >
                                    Intersesting
                                </Link>
                            </h4>
                        </div>
                    </div>
                    <div className="single-sidebar-blog">
                        <div className="sidebar-blog-img">
                            <Link
                                to={
                                    process.env.PUBLIC_URL +
                                    "/blog-details-standard"
                                }
                            >
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/img/blog/s2.jpeg"
                                    }
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="sidebar-blog-content">
                            <span>Best Book</span>
                            <h4>
                                <Link
                                    to={
                                        process.env.PUBLIC_URL +
                                        "/blog-details-standard"
                                    }
                                >
                                    Best Sales ever
                                </Link>
                            </h4>
                        </div>
                    </div>
                    <div className="single-sidebar-blog">
                        <div className="sidebar-blog-img">
                            <Link
                                to={
                                    process.env.PUBLIC_URL +
                                    "/blog-details-standard"
                                }
                            >
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/img/blog/s3.jpeg"
                                    }
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="sidebar-blog-content">
                            <span>Book</span>
                            <h4>
                                <Link
                                    to={
                                        process.env.PUBLIC_URL +
                                        "/blog-details-standard"
                                    }
                                >
                                    New and Sales Book
                                </Link>
                            </h4>
                        </div>
                    </div>
                    <div className="single-sidebar-blog">
                        <div className="sidebar-blog-img">
                            <Link
                                to={
                                    process.env.PUBLIC_URL +
                                    "/blog-details-standard"
                                }
                            >
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/img/blog/s4.jpeg"
                                    }
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="sidebar-blog-content">
                            <span>Book should Read</span>
                            <h4>
                                <Link
                                    to={
                                        process.env.PUBLIC_URL +
                                        "/blog-details-standard"
                                    }
                                >
                                    Should
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar-widget mt-35">
                <h4 className="pro-sidebar-title">Book</h4>
                <div className="sidebar-widget-list sidebar-widget-list--blog mt-20">
                    <ul>
                        <li>
                            <div className="sidebar-widget-list-left">
                                <input type="checkbox" defaultValue />{" "}
                                <Link
                                    to={
                                        process.env.PUBLIC_URL +
                                        "/blog-standard"
                                    }
                                >
                                    History Book <span>4</span>{" "}
                                </Link>
                                <span className="checkmark" />
                            </div>
                        </li>
                        <li>
                            <div className="sidebar-widget-list-left">
                                <input type="checkbox" defaultValue />{" "}
                                <Link
                                    to={
                                        process.env.PUBLIC_URL +
                                        "/blog-standard"
                                    }
                                >
                                    Fiction and Comics <span>4</span>{" "}
                                </Link>
                                <span className="checkmark" />
                            </div>
                        </li>
                        <li>
                            <div className="sidebar-widget-list-left">
                                <input type="checkbox" defaultValue />{" "}
                                <Link
                                    to={
                                        process.env.PUBLIC_URL +
                                        "/blog-standard"
                                    }
                                >
                                    Fiction <span>4</span>{" "}
                                </Link>
                                <span className="checkmark" />
                            </div>
                        </li>
                        <li>
                            <div className="sidebar-widget-list-left">
                                <input type="checkbox" defaultValue />{" "}
                                <Link
                                    to={
                                        process.env.PUBLIC_URL +
                                        "/blog-standard"
                                    }
                                >
                                    Comics <span>4</span>{" "}
                                </Link>
                                <span className="checkmark" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-widget mt-50">
                <h4 className="pro-sidebar-title">Tag </h4>
                <div className="sidebar-widget-tag mt-25">
                    <ul>
                        <li>
                            <Link
                                to={process.env.PUBLIC_URL + "/blog-standard"}
                            >
                                Chinese
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={process.env.PUBLIC_URL + "/blog-standard"}
                            >
                                Book
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={process.env.PUBLIC_URL + "/blog-standard"}
                            >
                                New Book
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={process.env.PUBLIC_URL + "/blog-standard"}
                            >
                                Comics
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={process.env.PUBLIC_URL + "/blog-standard"}
                            >
                                Fiction
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;
