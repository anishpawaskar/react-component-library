import { BiImageAdd } from "react-icons/bi";

export const MultipleImgUploader = () => {
  const imgHandler = (e) => {
    console.log(e.target.files);
  };

  return (
    <div className="mt-4 w-[50%] mx-auto">
      <div className="flex justify-center">
        <label htmlFor="img-upload">
          <BiImageAdd className="h-5 w-5" />
        </label>
        <input
          onChange={(e) => imgHandler(e)}
          type="file"
          name="img-upload"
          id="img-upload"
          accept="image/png, image/jpeg"
          hidden
          multiple
        />
      </div>
    </div>
  );
};
