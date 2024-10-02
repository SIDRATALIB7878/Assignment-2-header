import { headers } from "next/headers";

export default function home() {
  return (
    <header className="header">
      <nav>
        <a href="">
          <img
            src="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png"
            alt=""
            className="logo"
          />
        </a>
        <div className="nav-link">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PROTOFILO</li>
            <li>CONTACT ME</li>
          </ul>
        </div>
      </nav>
      <div className="text-box">
        <h1>This is my website </h1>
        <p>
          Hello! My name is Sidra Talib, and I am an undergraduate Software <br />
          Engineer. I am passionate about building web applications and have<br />
          experience working with technologies like HTML, CSS, Java, and<br />
          TypeScript. My journey in software development has helped<br /> me sharpen
          my problem-solving skills and has driven my love for<br /> creating
          efficient and user-friendly solutions. I am excited to<br /> continue
          learning and growing in this field as I work towards<br /> becoming a
          full-stack developer.
        </p>
        <a href=""><img src="http://royaltyfreefootages.com/upload/video/Apple%20laptop%20PNG%20image,%20transparent%20Apple%20laptop%20png%20image,%20Apple%20laptop%20png%20hd%20images%20download_1658745513.png"
         alt="" className="imagee"/></a>
               </div>
    </header>
  );
}
