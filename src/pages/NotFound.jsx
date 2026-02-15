import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <section className="page_404">
        <div className="container_404">
          <div className="four_zero_four_bg">
            <h1>404</h1>
          </div>

          <div className="contant_box_404">
            <h3>Look like you're lost</h3>
            <p>the page you are looking for not available!</p>

            <Link to="/" className="link_404">
              Go to Home
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .page_404 {
          padding: 40px 0;
          background: #fff;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container_404 {
          width: 100%;
          max-width: 900px;
          text-align: center;
          padding: 0 16px;
        }

        .four_zero_four_bg {
          background-image: url("https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif");
          height: 400px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .four_zero_four_bg h1 {
          font-size: 80px;
          font-weight: 500;
        }

        .contant_box_404 {
          margin-top: -20px;
        }

        .contant_box_404 h3 {
          font-size: 28px;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .contant_box_404 p {
          color: #666;
        }

        .link_404 {
          padding: 10px 22px;
          margin-top: 32px;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          color: #fff;
          font-weight: 700;
          text-decoration: none;

          border-radius: 14px;

          background: linear-gradient(135deg, #5227ff, #00d4ff, #7cff67);
          background-size: 200% 200%;

          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow:
            0 12px 30px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.35);

          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);

          transition: transform 0.2s ease, box-shadow 0.2s ease, background-position 0.6s ease;
        }

        .link_404:hover {
          transform: translateY(-2px);
          box-shadow:
            0 18px 40px rgba(0, 0, 0, 0.2),
            0 0 30px rgba(82, 39, 255, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);

          background-position: 100% 0%;
        }

        .link_404:active {
          transform: scale(0.98);
        }

      `}</style>
    </>
  );
}
