import GetInTouchForm from "@/components/GetInTouchForm";
import Link from "next/link";
import React from "react";

function ContactMe() {
  return (
    <div className="flex py-8 flex-col">
      <div className="text-center">
        <div
          className="text-3xl text-transparent bg-clip-text 
 bg-gradient-to-r from-violet-400 to-indigo-500 py-2 font-black"
        >
          Get In Touch
        </div>
        <div className="text-xl font-mono">
          Do you want to get in touch with me? Send me a note on{" "}
          <Link href={"https://x.com/sandeep_code28"} target="_blank">
          <span className="border-b border-indigo-600 text-red-400 hover:text-red-700 cursor-pointer">Twitter</span> 
          </Link>
        </div>
      </div>
      <GetInTouchForm />
    </div>
  );
}

export default ContactMe;
