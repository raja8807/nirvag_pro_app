"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import styles from "./Header.module.scss";
import { NAV_LINKS } from "@/constants/Navigation";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import { Image, Offcanvas } from "react-bootstrap";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const toggleMobileDropdown = (idx) => {
    if (activeMobileDropdown === idx) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(idx);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <CustomContainer lg>
        <div className={`${styles.headerInner}`}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo/logo_h.png"
              alt="Nirvag Pro Logo"
              className={styles.logoImg}
            />
          </Link>

          <nav className={styles.nav}>
            {NAV_LINKS.map((link, idx) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={idx}
                    className={styles.navDropdownContainer}
                    onMouseEnter={() => setActiveDropdown(true)}
                    onMouseLeave={() => setActiveDropdown(false)}
                  >
                    <div className={styles.navDropdown}>
                      <span>
                        {link.label}{" "}
                        <span className={styles.dropdownIcon}>▼</span>
                      </span>
                    </div>

                    {activeDropdown && (
                      <div className={styles.dropdownList}>
                        <div className={styles.dropdownLinksWrapper}>
                          {link.dropdownItems.map((sub, sIdx) => (
                            <React.Fragment key={sIdx}>
                              {sIdx > 0 && (
                                <div className={styles.dropdownDivider}></div>
                              )}
                              <Link
                                href={sub.href}
                                className={styles.dropdownLink}
                              >
                                {sub.label}
                              </Link>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  href={link.href}
                  className={`${styles.navLink} ${link.tag === "new" ? styles.newTag : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <Link href="/login" className={styles.navLink}>
              Login
            </Link>
            <CustomButton href="/login?signup=true" variant="small">
              Signup
            </CustomButton>
          </div>

          <button
            className={styles.menuButton}
            onClick={() => setShowDrawer(true)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </CustomContainer>

      <Offcanvas
        show={showDrawer}
        onHide={() => setShowDrawer(false)}
        placement="end"
        className={styles.offcanvas}
      >
        <Offcanvas.Header className={styles.offcanvasHeader}>
          <Offcanvas.Title>
            <Image
              src="/logo/logo_h.png"
              alt="Nirvag Pro Logo"
              className={styles.offcanvasLogo}
            />
          </Offcanvas.Title>
          <button
            className={styles.closeButton}
            onClick={() => setShowDrawer(false)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.offcanvasBody}>
          <div className={styles.mobileNav}>
            {NAV_LINKS.map((link, idx) => {
              if (link.isDropdown) {
                return (
                  <div key={idx} className={styles.mobileDropdown}>
                    <div
                      className={styles.mobileDropdownLabel}
                      onClick={() => toggleMobileDropdown(idx)}
                    >
                      {link.label}
                      <span
                        className={`${styles.dropdownChevron} ${activeMobileDropdown === idx ? styles.open : ""}`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </div>

                    {activeMobileDropdown === idx && (
                      <div className={styles.mobileDropdownList}>
                        {link.dropdownItems.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={sub.href}
                            className={styles.mobileNavLink}
                            onClick={() => setShowDrawer(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={idx}
                  href={link.href}
                  className={`${styles.mobileNavLink} ${link.tag === "new" ? styles.mobileNewTag : ""}`}
                  onClick={() => setShowDrawer(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className={styles.mobileActions}>
            <Link
              href="/login"
              className={styles.mobileLoginLink}
              onClick={() => setShowDrawer(false)}
            >
              Login
            </Link>
            <CustomButton
              href="/login?signup=true"
              className={styles.mobileSignupBtn}
              onClick={() => setShowDrawer(false)}
            >
              Signup
            </CustomButton>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
