const separatorClass =
  "block h-1.5 w-1.5 rounded-full bg-quilGrey dark:bg-slate-200";

const Footer = () => {
  return (
    <div className="hidden flex-wrap items-center space-x-2 text-sm text-gray-m-900 md:flex dark:text-slate-200">
      <a href="">Top Graffitists</a>
      <span className={separatorClass} />
      <a href="">How It Works</a>
      <span className={separatorClass} />
      <a href="">FAQ</a>
      <span className={separatorClass} />
      <a href="">Token Info</a>
      <span className={separatorClass} />
      <a href="">Community</a>
      <span className={separatorClass} />
      <a href="">News &amp; Updates</a>
    </div>
  );
};

export default Footer;
