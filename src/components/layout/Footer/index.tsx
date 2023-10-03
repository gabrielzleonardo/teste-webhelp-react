import "./style.css";
import AutoLink from "../../nav/AutoLink";
import Data from "../../../Data";
import { IFooterLink } from "../../../types";

import IconLinkOrDiv from "../../ui/IconLinkOrDiv";
const Footer = () => {
  const { footer } = Data;
  const { aboutNav, contactNav, paymentMethods } = footer;
  return (
    <footer>
      <div className="container">
        <a
          target="__blank"
          href="https://jobsbrasil.webhelp.com/"
          className="image-wrapper"
        >
          <img width={50} height={29} src="/images/webhelp-2.svg" alt="Logo branca Webhelp" />
        </a>
        <div className="navs-wrapper">
          <div className="footer-nav about-nav">
            <p>
              <strong>{aboutNav.navTitle}</strong>
            </p>
            <ul>
              {aboutNav?.navLinks?.map(({ id, title, href }: IFooterLink) => (
                <li key={id}>
                  <AutoLink href={href} title={title}>
                    {title}
                  </AutoLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-nav contact-nav">
            <p>
              <strong>{contactNav.navTitle}</strong>
            </p>

            <ul>
              {contactNav?.navLinks?.map(({ id, image, href }: IFooterLink) => (
                <li key={id}>
                  <IconLinkOrDiv image={image} href={href} />
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-nav payments-nav">
            <p>
              <strong>{paymentMethods.title}</strong>
            </p>

            <ul>
              {paymentMethods?.methods?.map(
                ({ methodImage, id }: { methodImage: string; id: number }) => (
                  <li key={id}>
                    <IconLinkOrDiv image={methodImage} />
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="copyright-wrapper">
          <p>© 2023. Todos direitos reservados à Webhelp</p>
          <div className="under-footer">
            <a href="https://jobsbrasil.webhelp.com/">
              <img
                width={50}
                height={29}
                src="/images/webhelp-2.svg"
                alt="Logo webhelp"
              />
              <p>
                plataforma desenvolvida pela <strong>webhelp</strong>
              </p>
            </a>
            <div>
              <img width={32} height={32} src="images/ssl.png" alt="SSL" />
              <div>
                <strong>Site protegido</strong>
                <span>certificado SSL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
