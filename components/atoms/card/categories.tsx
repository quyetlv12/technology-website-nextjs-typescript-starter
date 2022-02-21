const CategoriesCard = () => {
  return (
    <section className="container mx-auto px-6 my-1 flex flex-wrap -m-4">
      <div className="p-2 md:w-40 ">
        <a
          href="#"
          className="flex items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100"
        >
          <svg
            className="h-6 fill-current hover:text-gray-100 "
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>PHP icon</title>
            <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" />
          </svg>
          <div>
            <p className=" text-xs font-medium ml-2 ">PHP</p>
          </div>
        </a>
      </div>
      <div className="p-2 md:w-40 ">
        <div className="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-gray-500 hover:text-gray-100">
          <svg
            className="h-6 fill-current hover:text-gray-100"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Symfony icon</title>
            <path d="M24 12c0 6.628-5.372 12-12 12S0 18.628 0 12 5.372 0 12 0s12 5.372 12 12zm-6.753-7.561c-1.22.042-2.283.715-3.075 1.644-.878 1.02-1.461 2.229-1.881 3.461-.753-.614-1.332-1.414-2.539-1.761-.966-.297-2.015-.105-2.813.514-.41.319-.71.757-.861 1.254-.36 1.176.381 2.225.719 2.6l.737.79c.15.154.519.56.339 1.138-.193.631-.951 1.037-1.732.799-.348-.106-.848-.366-.734-.73.045-.15.152-.263.21-.391.052-.11.077-.194.095-.242.141-.465-.053-1.07-.551-1.223-.465-.143-.939-.03-1.125.566-.209.68.117 1.913 1.86 2.449 2.04.628 3.765-.484 4.009-1.932.153-.907-.255-1.582-1.006-2.447l-.612-.677c-.371-.37-.497-1.002-.114-1.485.324-.409.785-.584 1.539-.379 1.103.3 1.594 1.063 2.412 1.68-.338 1.11-.56 2.223-.759 3.222l-.123.746c-.585 3.07-1.033 4.757-2.194 5.726-.234.166-.57.416-1.073.434-.266.005-.352-.176-.355-.257-.006-.184.15-.271.255-.353.154-.083.39-.224.372-.674-.016-.532-.456-.994-1.094-.973-.477.017-1.203.465-1.176 1.286.028.85.819 1.485 2.012 1.444.638-.021 2.062-.281 3.464-1.949 1.633-1.911 2.09-4.101 2.434-5.706l.383-2.116c.213.024.441.042.69.048 2.032.044 3.049-1.01 3.064-1.776.01-.464-.304-.921-.744-.91-.386.009-.718.278-.806.654-.094.428.646.813.068 1.189-.41.266-1.146.452-2.184.3l.188-1.042c.386-1.976.859-4.407 2.661-4.467.132-.007.612.006.623.323.003.105-.022.134-.147.375-.115.155-.174.345-.168.537.017.504.4.836.957.816.743-.023.955-.748.945-1.119-.032-.874-.952-1.424-2.17-1.386z" />
          </svg>
          <div>
            <p className="text-xs font-medium ml-2 ">SYMFONY</p>
          </div>
        </div>
      </div>
      <div className="p-2 md:w-40 ">
        <div className="flex items-center p-4 bg-orange-200 rounded-lg shadow-xs cursor-pointer hover:bg-orange-500 hover:text-gray-100">
          <svg
            className="h-6 fill-current hover:text-gray-100"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>HTML5 icon</title>
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
          </svg>
          <div>
            <p className=" text-xs font-medium ml-2 ">HTML</p>
          </div>
        </div>
      </div>
      <div className="p-2 md:w-40 ">
        <div className="flex items-center p-4 bg-green-200 rounded-lg shadow-xs cursor-pointer hover:bg-green-500 hover:text-gray-100">
          <svg
            className="h-6 fill-current hover:text-gray-100"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Vue.js icon</title>
            <path d="M19.197 1.608l.003-.006h-4.425L12 6.4v.002l-2.772-4.8H4.803v.005H0l12 20.786L24 1.608" />
          </svg>
          <div>
            <p className=" text-xs font-medium ml-2 ">VUE</p>
          </div>
        </div>
      </div>
      <div className="p-2 md:w-40 ">
        <div className="flex items-center p-4 bg-yellow-200 rounded-lg shadow-xs cursor-pointer hover:bg-yellow-500 hover:text-gray-100">
          <svg
            className="h-6 fill-current hover:text-gray-100"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>JavaScript icon</title>
            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
          </svg>
          <div>
            <p className=" text-xs font-medium text-uppercase ml-2 ">
              javascript
            </p>
          </div>
        </div>
      </div>
      <div className="p-2 md:w-40 ">
        <div className="flex items-center p-4 bg-indigo-200 rounded-lg shadow-xs cursor-pointer hover:bg-indigo-500 hover:text-gray-100">
          <svg
            className="h-6 fill-current hover:text-gray-100"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>CSS3 icon</title>
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
          </svg>
          <div>
            <p className=" text-xs font-medium ml-2 ">CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesCard;
