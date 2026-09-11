import Link from "next/link";


export default function Footer() {

  return (

    <footer className="footer">


      <div className="footerLogo">

        <img
          src="/ISOTIPO-02.svg"
          alt="ONERABBIT"
        />

      </div>



<div className="footerMain">

  <img
    src="/ISOTIPO-02.svg"
    alt="ONERABBIT"
    className="footerBrand"
  />

  <div className="footerDescription">

    <p>
      Photography
      <br />
      Visual Culture
      <br />
      Editorial
    </p>

  </div>

</div>



      <div className="footerBottom">

        <span>
          © 2026 ONERABBIT
        </span>


        <Link href="/#contact">
          CONTACT ↗
        </Link>


      </div>


    </footer>

  );

}