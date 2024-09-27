import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

import React from "react";
import Link from "antd/es/typography/Link";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/"
      >
        Our Team
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Testimonial
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/"
      >
        404 Pages
      </a>
    ),
   
  },
  
];

const Header = () => {
  return (
    <header className="">
      <div className="container">
        <nav className="bg-white border-spacing-8 flex flex-wrap items-center justify-between">
          <a
            href="/"
            className="navbar-brand flex align-items-center px-4 px-lg-5"
          >
            <h2 class="ml-4  text-[#06bbcc] text-2xl font-bold">
              <FontAwesomeIcon icon="fa-solid fa-book" />
              eLEARNING
            </h2>
          </a>
          <div className=" flex flex-wrap items-center justify-between ">
            <div className=" space-x-5 mr-6 font-semibold">
              <a href="/" className="text-[#06bbcc]">HOME</a>
              <a href="/" className="hover:text-[#06bbcc]">ABOUT</a>
              <a href="/" className="hover:text-[#06bbcc]">COURSES</a>
              <Dropdown
                menu={{
                  items,
                }}
                arrow={true}
                trigger={["click"]}
                className="cursor-pointer py-3 px-4 hover:bg-gray-100 duration-300 rounded-md hover:text-[#06bbcc]"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    PAGES
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
              <a href="/" className="hover:text-[#06bbcc]">CONTACT</a>
            </div>
            <a
              href="/"
              className="py-6 px-10 bg-[#06bbcc] font-medium text-white"
            >
              Join now
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
