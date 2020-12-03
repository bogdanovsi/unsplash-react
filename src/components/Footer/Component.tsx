import React from 'react';

import './footer.scss';

interface IProps { }
const Footer = (props: IProps) => {
    return (
        <footer role="contentinfo" className="footer">
            <div className="container">
                <div className="footer__content">
                    <article className="footer__article">
                        <h2 className="footer__header">Löydä lähin luotettava tekijä!</h2>
                        <p className="footer__text">Tekijäpankista löydät osaavat ja luotettavat tekijät maalaustyöllesi.</p><a href="/about" className="link footer__link footer__link--more">Lue lisää</a>
                    </article>
                    <ul className="footer__list footer__list--wide">
                        <li className="footer__list-item">
                            <h2 className="footer__header">Yleistä</h2>
                        </li>
                        <li className="footer__list-item"><a href="/about" className="link footer__link">Tietoa palvelusta</a></li>
                        <li className="footer__list-item"><a href="/about/contact" className="link footer__link">Ota yhteyttä</a></li>
                    </ul>
                </div>
                <small className="footer-copy">© 2019 Tikkurila Oyj - <a href="https://www.tikkurila.fi" className="link footer-copy__link">www.tikkurila.fi</a></small>
            </div>
        </footer>
    );
}

export default React.memo(Footer);