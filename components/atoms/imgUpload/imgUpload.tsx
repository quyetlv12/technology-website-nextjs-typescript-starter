import { FC } from "react";

interface ImgProps {
  className?: string;
  onChange?: any;
}
const ImgUpload: FC<ImgProps> = ({ className, onChange }) => {
  return (
    <div>
      <div>
        <main className="container mx-auto max-w-screen-lg h-full">
          {/* file upload modal */}
          <article
            aria-label="File Upload Modal"
            className="relative h-full flex flex-col bg-white shadow-xl rounded-md"
          >
            {/* overlay */}
            <div
              id="overlay"
              className="w-full h-full absolute top-0 left-0 pointer-events-none z-50 flex flex-col items-center justify-center rounded-md"
            >
              <i>
                <svg
                  className="fill-current w-12 h-12 mb-3 text-blue-700"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z" />
                </svg>
              </i>
              <p className="text-lg text-blue-700">Drop files to upload</p>
            </div>
            {/* scroll area */}
            <section className="h-full overflow-auto p-8 w-full h-full flex flex-col">
              <header className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                  <span>Kéo hoặc thả hình ảnh</span>&nbsp;
                </p>
                <input
                  id="hidden-input"
                  type="file" className={`${className}`} onChange={onChange}
                />
              </header>
              <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
                Hình ảnh đã chọn
              </h1>
              <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
                <li
                  id="empty"
                  className="h-full w-full text-center flex flex-col items-center justify-center items-center"
                >
                  <img
                    className="mx-auto w-32"
                    src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                    alt="no data"
                  />
                  <span className="text-small text-gray-500">
                    dữ liệu trống
                  </span>
                </li>
              </ul>
            </section>
            {/* sticky footer */}
          </article>
        </main>
      </div>
      {/* using two similar templates for simplicity in js code */}
      <template id="file-template" />
      <template id="image-template" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n.hasImage:hover section {\n  background-color: rgba(5, 5, 5, 0.4);\n}\n.hasImage:hover button:hover {\n  background: rgba(5, 5, 5, 0.45);\n}\n\n#overlay p,\ni {\n  opacity: 0;\n}\n\n#overlay.draggedover {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n#overlay.draggedover p,\n#overlay.draggedover i {\n  opacity: 1;\n}\n\n.group:hover .group-hover\\:text-blue-800 {\n  color: #2b6cb0;\n}\n",
        }}
      />
    </div>
  );
};

export default ImgUpload;
