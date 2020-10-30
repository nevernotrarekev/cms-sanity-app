import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="text-white bg-navy">
      <Container>
        <div className="grid grid-cols-12 pt-28">
          <div className="col-span-5">
            <div className="">
              <h3 className="">Drop us a line:</h3>
              <a className="" href="emailto:mondial@mondialcreative.com">
                mondial@mondialcreative.com
              </a>
            </div>
            <div className="">
              <div className="">Mondial Creative</div>

              <div className="flex flex-row justify-between">
                <a
                  className=""
                  target="_blank"
                  href="http://maps.google.com/?q=2006 E Franklin St suite 102 Richmond, VA 23223"
                >
                  2006 E Franklin St
                  <br />
                  Suite 102
                  <br />
                  Richmond, VA 23223
                </a>
                <div className="">
                  <div className="">mondial@mondialcreative.com</div>
                  <div className="">804-303-4528</div>
                  <div className="">© MONDIAL {new Date().getFullYear()}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-8 col-span-4">image here</div>
          <div className="col-span-1">brothered with:</div>
        </div>
        {/* <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div> */}
      </Container>
    </footer>
  );
}
