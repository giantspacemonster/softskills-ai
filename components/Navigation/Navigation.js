import Button from "../ui/Button/Button";
import Logo from "../ui/Logo/Logo";
import MenuLink from "../ui/MenuLink/MenuLink";
import styles from "./Navigation.module.css";
export default function Navigation() {
  return (
    <div className={styles.glass}>
      <Logo />
      <MenuLink menuText="Home" />
      <MenuLink menuText="Features" />
      <MenuLink menuText="Pricing" />
      <MenuLink menuText="Community" />
      <MenuLink menuText="Support" />

      <div
        style={{
          gridColumn: "-1",
        }}
      >
        <Button btnText="Get Started" />
      </div>
    </div>
  );
}
