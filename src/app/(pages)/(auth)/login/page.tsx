import { LoginForm } from "@/components/login-form.component";
import "@/styles/auth-pages.css";

import Image from "next/image";

export default function Page() {
  return (
    <section className="content___">
      <div className="container__">
        <div className="row__">
          <div className="col-md-6__ md:max-w-[50%] md:grow-0 md:shrink-0 md:basis-1/2 w-full px-4">
            <Image
              src={"/assets/illustration-auth.svg"}
              alt="illustration"
              width={540}
              height={475}
              className="w-full h-auto align-middle"
            />
          </div>
          <div className="col-md-6__ md:max-w-[50%] md:grow-0 md:shrink-0 md:basis-1/2 w-full px-4 contents__">
            <div className="row__ justify-center">
              <div className="col-md-8__ md:max-w-[95.66667%] md:grow-0 md:shrink-0 md:basis-[95.66667%] w-full px-4">
                <div className="mb-4__ mb-6">
                  <h3>Se Connecter</h3>
                  <p className="mb-4__  mb-6 text-[#939393] font-light">
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                    consectetur adipisicing.
                  </p>
                </div>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
