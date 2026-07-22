"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./SideBar.module.scss";
import {
  ChevronDown,
  ChevronRight,
  FolderKanban,
  Home,
  Users,
  HardHat,
  ShieldUser,
} from "lucide-react";
import { Image } from "react-bootstrap";

const SideBar = ({sideBarCollapsed, setSidebarCollapsed}) => {
  const pathname = usePathname();

  const menus = [
    {
      name: "Dashboard",
      href: "/",
      icon: <Home />,
    },
    {
      name: "CRM",
      href: "/crm",
      icon: <Users />,
      subMenus: [
        {
          name: "Leads",
          href: "/crm/leads",
        },
        {
          name: "Clients",
          href: "/crm/clients",
        },
      ],
    },
    {
      name: "Projects",
      href: "/projects",
      icon: <FolderKanban />,
      subMenus: [
        {
          name: "Projects",
          href: "/projects/projects",
        },
        {
          name: "Sites",
          href: "/projects/sites",
        },
      ],
    },
    {
      name: "Workforce",
      href: "/workforce/dashboard",
      icon: <ShieldUser />,
      subMenus: [
        { name: "Dashboard", href: "/workforce/dashboard" },
        { name: "Employees", href: "/workforce/employees" },
        { name: "Workers", href: "/workforce/workers" },
        { name: "Contractors", href: "/workforce/contractors" },
        { name: "Attendance", href: "/workforce/attendance" },
        { name: "Labour Payments", href: "/workforce/payments" },
        { name: "Reports", href: "/workforce/reports" },
      ],
    },
  ];

  const toggleMenu = (name) => {
    setExpandedMenus((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name],
    );
  };

  console.log(pathname);
  

  const isActive = (href) =>{
    if(href === "/"){
      return  pathname === "/"
    }

    return  pathname.includes(href)
  };

  const [expandedMenus, setExpandedMenus] = useState(() => {
    const expanded = menus
      .filter((menu) =>
        menu.subMenus?.some((subMenu) => pathname.startsWith(subMenu.href)),
      )
      .map((menu) => menu.name);

    return expanded;
  });

  

  return (
    <aside
      className={`${styles.SideBar} ${sideBarCollapsed ? styles.collapsed : ""}`}
      onClick={() => {
        setSidebarCollapsed(false);
      }}
    >
      <div className={styles.logo}>
        <Image src={sideBarCollapsed ? "/logo/logo_i.png" : "/logo/logo_2.png"} alt="logo" />
      </div>

      <nav className={styles.menu}>
        {menus.map((menu) => {
          const expanded = expandedMenus.includes(menu.name);

          return (
            <div className={styles.menuItem} key={menu.name}>
              {menu.subMenus ? (
                <>
                  <button
                    className={`${styles.menuButton} ${
                      pathname.startsWith(menu.href) ? styles.active : ""
                    }`}
                    onClick={() => toggleMenu(menu.name)}
                  >
                    <div className={styles.left}>
                      <span className={styles.icon}>{menu.icon}</span>
                      <span>{menu.name}</span>
                    </div>

                    {expanded ? (
                      <ChevronDown size={18} className={styles.chevron} />
                    ) : (
                      <ChevronRight size={18} className={styles.chevron} />
                    )}
                  </button>

                  {expanded && (
                    <div className={styles.subMenu}>
                      {menu.subMenus.map((subMenu) => (
                        <Link
                          key={subMenu.href}
                          href={subMenu.href}
                          className={`${styles.subMenuItem} ${
                            isActive(subMenu.href) ? styles.activeSubMenu : ""
                          }`}
                        >
                          {subMenu.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={menu.href}
                  className={`${styles.menuButton} ${
                    isActive(menu.href) ? styles.active : ""
                  }`}
                >
                  <div className={styles.left}>
                    <span className={styles.icon}>{menu.icon}</span>
                    <span>{menu.name}</span>
                  </div>
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default SideBar;
