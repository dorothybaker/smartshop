function Contact() {
  return (
    <div className=" bg-[#f5f5f5] mx-auto">
      <div className="py-6 sm:px-6 px-3 w-full flex items-center justify-center bg-[url('https://casmart.vercel.app/assets/images/newsletter-bg.png')] bg-cover bg-no-repeat h-[300px]">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-center text-4xl">Subscribe NewsLetter</h1>
          <p className="text-center text-[#787878]">
            Enter your email below to be the first to know about new collections
            and product launches.
          </p>
          <div className="join w-full">
            <input
              type="text"
              className="input input-bordered join-item w-full"
              placeholder="Enter your email address"
            />
            <button className="btn join-item bg-primary hover:text-black text-white text-base font-normal">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
