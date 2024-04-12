import { Montserrat } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from 'next/image'
import Link from 'next/link'
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Percept Infosystem",
  description: "The best software firm in nagpur!",
};

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
      </head>
      <body className={inter.className}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top p-3" id="navShadow">
          <div className="container-fluid">
            <a href="/"><Image src="/logo.jpeg" height={50} width={200} alt="logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ border: 'transparent', color: 'black' }} id="navbartogg">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                <li className="nav-item">
                  <Link className="nav-link" href="/" id="margintop">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer mt-5">
          <section>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-lg-4 py-4 py-md-5 py-xxl-8" style={{ backgroundColor: '#282f3b' }}>
                  <div className="row h-100 align-items-end justify-content-center">
                    <div className="col-12 col-md-11 col-xl-10">
                      <div className="footer-logo-wrapper">
                        <a href="/">
                          <Image src="/logo.jpeg" alt="BootstrapBrain Logo" width={179} height={60} />
                        </a>
                      </div>
                      <div className="social-media-wrapper mt-5">
                        <ul className="nav">
                          <li className="nav-item me-3">
                            <a className="nav-link p-2 bg-light rounded" href="https://www.facebook.com/Perceptinfosystemconsultants/" style={{ color: '#b55d41' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                              </svg>
                            </a>
                          </li>
                          <li className="nav-item me-3">
                            <a className="nav-link p-2 bg-light rounded" href="https://www.google.com/search?gs_ssp=eJwFwUEKgCAQAEC6Bv3BS8dot7ZCn9AvclsjKBU1qN83Uzf90SMeOuEwXQkq08I72p0YURYLLOTQwMuW3Kx3ARksbUCripJYYlGndyF_ucitOsXB5-cqmy_5B4IKHEY&q=percept+infosystem+-+consultants&oq=percept&aqs=chrome.3.69i60j69i57j69i59j46i39i175i199i512i650i654j0i512j0i67i433i512i650j69i60l2.6032j0j7&sourceid=chrome&ie=UTF-8" style={{ color: '#b55d41' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                              </svg>
                            </a>
                          </li>
                          <li className="nav-item me-3">
                            <a className="nav-link p-2 bg-light rounded" href="https://in.linkedin.com/company/percept-infosystem-consultants" style={{ color: '#b55d41' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                              </svg>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link p-2 bg-light rounded" href="https://www.instagram.com/perceptinfosystem/?hl=en" style={{ color: '#b55d41' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="address-wrapper mt-5">
                        <address className="mb-2 text-white">20/2, Akar Builders, Opp – Dalal Nursing home, Near Byramji town, Sadar, Nagpur-440001</address>
                        <p className="mb-2">
                          <a className="link-light text-decoration-none" href="tel:+15057922430">(820) 897-0766</a>
                        </p>
                        <p className="mb-0">
                          <a className="link-light text-decoration-none" href="mailto:perceptruchik1@gmail.com">perceptruchik1@gmail.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-8 bg-light py-4 py-md-5 py-xxl-8">
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-11 col-xxl-10">
                      <div className="row gy-4 gy-sm-0">
                        <div className="col-6 col-sm-3">
                          <div className="widget">
                            <h4 className="widget-title mb-4">Services</h4>
                            <ul className="list-unstyled">
                              <li className="mb-3">
                                <Link href="/contact" className="link-secondary text-decoration-none">AI Solutions</Link>
                              </li>
                              <li className="mb-3">
                                <Link href="/contact" className="link-secondary text-decoration-none">Digital Marketing</Link>
                              </li>
                              <li className="mb-3">
                                <Link href="/contact" className="link-secondary text-decoration-none">App Development</Link>
                              </li>
                              <li className="mb-3">
                                <Link href="/contact" className="link-secondary text-decoration-none">SEO Consultancy</Link>
                              </li>
                              <li className="mb-3">
                                <Link href="/contact" className="link-secondary text-decoration-none">Web Design</Link>
                              </li>
                              <li className="mb-3">
                                <Link href="/contact" className="link-secondary text-decoration-none">Video Animations</Link>
                              </li>
                              <li className="mb-0">
                                <Link href="/contact" className="link-secondary text-decoration-none">Logo Design</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 col-sm-3">
                          <div className="widget">
                            <h4 className="widget-title mb-4">Company</h4>
                            <ul className="list-unstyled">
                              <li className="mb-3">
                                <Link href="/about" className="link-secondary text-decoration-none">About</Link>
                              </li>
                              <li className="mb-3">
                                <Link href="/contact" className="link-secondary text-decoration-none">Contact</Link>
                              </li>
                              <li className="mb-3">
                                <Link href="/contact" className="link-secondary text-decoration-none">Advertise</Link>
                              </li>
                              <li className="mb-3">
                                <Link href="/contact" className="link-secondary text-decoration-none">Events</Link>
                              </li>
                              <li className="mb-3">
                                <Link href="/contact" className="link-secondary text-decoration-none">Careers</Link>
                              </li>
                              <li className="mb-3">
                                <Link href="/services" className="link-secondary text-decoration-none">Terms of Services</Link>
                              </li>
                              <li className="mb-0">
                                <Link href="/contact" className="link-secondary text-decoration-none">Privacy Policy</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="widget">
                            <h4 className="widget-title mb-4">Our Newsletter</h4>
                            <p className="mb-4">Never miss out on our company's latest news, updates, and exclusive offers! Subscribe to our newsletter today and get the inside scoop delivered straight to your inbox.</p>
                            <form action="#!">
                              <div className="row gy-4">
                                <div className="col-12">
                                  <div className="input-group">
                                    <span className="input-group-text" id="email-newsletter-addon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                      </svg>
                                    </span>
                                    <input type="email" className="form-control" id="email-newsletter" value="" placeholder="Email Address" aria-label="email-newsletter" aria-describedby="email-newsletter-addon" required />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="d-grid">
                                    <button className="btn text-white" type="submit" style={{ backgroundColor: '#282f3b' }}>Subscribe</button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-6 border-top border-light-subtle">
                        <div className="footer-copyright-wrapper mt-6">
                          &copy; {new Date().getFullYear()}. All Rights Reserved.
                        </div>
                        <div className="credits text-secondary mt-2 fs-7">
                          Built and Designed by <a href="https://www.linkedin.com/in/pratik-samarth-ps/" className="link-secondary text-decoration-none"><strong>Pratik Samarth</strong></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      </body>
    </>
  );
}
